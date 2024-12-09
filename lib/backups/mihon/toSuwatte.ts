import { SuwatteBackup, ChapterReference, StoredContent, LibraryEntry } from '@/@types/suwatte'
import { MihonObjectModel } from '@/@types/mihon'
import { SetStateAction } from 'react'
import { v4 as uuid } from 'uuid'

interface SuwatteResult {
  backup: SuwatteBackup
  dateString: string
}

export default async function toSuwatte(
  mihonBackup: MihonObjectModel.Backup,
  setConsoleOutput: (consoleOutput: SetStateAction<string[]>) => void
): Promise<SuwatteResult | null> {
  if (!mihonBackup) return null

  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${mihonBackup.backupManga?.length} Manga Items`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${mihonBackup.backupCategories?.length} Categories`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${mihonBackup.backupSources?.length} Sources`
  ])

  const suwatteBackup: SuwatteBackup = {
    library: [],
    storedContents: [],
    progressMarkers: [],
    collections: [],
    chapters: [],
    contentLinks: [],
    date: new Date(),
    appVersion: 'UNKNOWN',
    schemaVersion: 16
  }

  const collectionOrderIndexToIdSet: Record<number, string> = {}
  const sourceIdToNameSet: Record<number, string> = {}

  mihonBackup.backupSources?.forEach((source) => {
    sourceIdToNameSet[Number(source.sourceId)] = source.name ?? ''
  })

  mihonBackup.backupCategories?.forEach((category, index) => {
    const id = uuid()
    const orderIndex = Number(category.order ?? index)
    collectionOrderIndexToIdSet[orderIndex] = id
    suwatteBackup.collections?.push({
      id,
      name: category.name,
      order: orderIndex
    })
  })

  const paperbackIdSet: Record<string, StoredContent> = {}

  for (const item of mihonBackup.backupManga) {
    const sourceName = sourceIdToNameSet[Number(item.source)]
    const sourceId = `[MIGRATE ME!!]${sourceName}`
    const mangaId = `${sourceId}||${item.url}`

    const storedContentItem: StoredContent = {
      id: mangaId,
      sourceId: sourceId,
      contentId: item.url,
      title: item.title ?? '{Missing Title!!}',
      summary: item.description ?? '{Missing Description!!}',
      cover: item.thumbnailUrl ?? '',
      creators: [item.author ?? '', item.artist ?? ''],
      status: 1,
      isNSFW: false
    }

    const libraryEntry: LibraryEntry = {
      collections: item.categories?.map((idx) => collectionOrderIndexToIdSet[Number(idx)]) ?? [],
      dateAdded: new Date(),
      id: mangaId,
      lastOpened: new Date(),
      lastRead: new Date(),
      lastUpdated: new Date(),
      linkedHasUpdates: false,
      unreadCount: 0,
      updateCount: 0,
      flag: 6
    }

    suwatteBackup.library!.push(libraryEntry)
    suwatteBackup.storedContents!.push(storedContentItem)

    if (item.chapters) {
      for (const chapter of item.chapters) {
        if ((chapter.lastPageRead && chapter.lastPageRead != 0) || chapter.read) {
          const finalChapterId = `${mangaId}||${chapter.url}`

          let chapterReference: ChapterReference = {
            chapterId: chapter.url,
            contentId: mangaId,
            id: finalChapterId,
            number: chapter?.chapterNumber ?? 0
          }

          suwatteBackup.progressMarkers!.push({
            dateRead: chapter.lastModifiedAt
              ? new Date(Number(chapter.lastModifiedAt) * 1000)
              : new Date(),
            id: finalChapterId,
            lastPageOffsetPCT: undefined,
            lastPageRead: chapter.read ? 1 : Number(chapter.lastPageRead),
            chapter: chapterReference,
            totalPageCount: 1
          })
        }
      }
    }
  }

  /*

  interface ChapterData {
    number: number
    volume: number | undefined
  }

  let paperbackChapterIdToContentSet: Record<string, ChapterData> = {}
  for (const item of aidokuObj.chapters) {
    const chapterId = `${item.sourceId}||${item.mangaId}||${item.id}`
    paperbackChapterIdToContentSet[chapterId] = { number: item.chapter, volume: item.volume }
  }

  for (const item of aidokuObj.history) {
    const contentId = `${item.sourceId}||${item.mangaId}`
    const finalChapterId = `${contentId}||${item.chapterId}`
    const chapterData = paperbackChapterIdToContentSet[finalChapterId]

    let chapterReference: ChapterReference = {
      chapterId: item.chapterId,
      contentId: contentId,
      id: finalChapterId,
      number: chapterData?.number ?? 0,
      volume: chapterData?.volume == 0 ? undefined : chapterData?.volume
    }

    suwatteBackup.progressMarkers!.push({
      dateRead: new Date(item.dateRead),
      id: finalChapterId,
      lastPageOffsetPCT: undefined,
      lastPageRead: item.completed ? 1 : item.progress,
      chapter: chapterReference,
      totalPageCount: item.completed ? 1 : item.total
    })
  }*/

  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Converted ${suwatteBackup.progressMarkers?.length ?? 0} History Items`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Converted ${suwatteBackup.library?.length ?? 0} Library Items`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Converted ${suwatteBackup.collections?.length ?? 0} Collections`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Converted ${suwatteBackup.storedContents?.length ?? 0} Manga Infos`
  ])

  return {
    backup: suwatteBackup,
    dateString: new Date(Date.now()).toISOString().split('T')[0]
  }
}
