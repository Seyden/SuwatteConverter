import { SuwatteBackup, ChapterReference, StoredContent, LibraryEntry } from '@/@types/suwatte'
import { AidokuBackup } from '@/@types/aidoku'
import { SetStateAction } from 'react'
import { v4 as uuid } from 'uuid'

interface SuwatteResult {
  backup: SuwatteBackup
  dateString: string
}

export default async function toSuwatte(
  aidokuObj: AidokuBackup,
  setConsoleOutput: (consoleOutput: SetStateAction<string[]>) => void
): Promise<SuwatteResult | null> {
  if (!aidokuObj) return null

  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${aidokuObj.history?.length} History Items`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${aidokuObj.chapters?.length} Chapters`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${aidokuObj.library?.length} Library Items`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${aidokuObj.manga?.length} Manga Infos`
  ])
  setConsoleOutput((consoleOutput) => [
    ...consoleOutput,
    `> Found ${aidokuObj.categories?.length} Categories`
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

  const collectionNameToIdSet: Record<string, string> = {}

  aidokuObj.categories?.forEach((category, index) => {
    if (!(category in collectionNameToIdSet)) {
      const id = uuid()
      collectionNameToIdSet[category] = id
      suwatteBackup.collections?.push({
        id,
        name: category,
        order: index
      })
    }
  })

  const paperbackIdSet: Record<string, StoredContent> = {}

  for (const item of aidokuObj.manga) {
    const mangaId = `${item.sourceId}||${item.id}`

    const storedContentItem: StoredContent = {
      id: mangaId,
      sourceId: item.sourceId,
      contentId: item.id,
      title: item.title,
      summary: item.desc,
      cover: item.cover,
      creators: [item.author],
      status: 1,
      isNSFW: Boolean(item.nsfw)
    }
    paperbackIdSet[mangaId] = storedContentItem
    suwatteBackup.storedContents!.push(storedContentItem)
  }

  for (const item of aidokuObj.library) {
    const mangaId = `${item.sourceId}||${item.mangaId}`
    if (!item.mangaId || !item.sourceId || paperbackIdSet[mangaId] === undefined) {
      continue
    }

    const libContent = paperbackIdSet[mangaId]
    const libraryEntry: LibraryEntry = {
      collections: item.categories.map((obj) => collectionNameToIdSet[obj]),
      dateAdded: new Date(),
      id: libContent.id,
      lastOpened: new Date(),
      lastRead: new Date(),
      lastUpdated: new Date(),
      linkedHasUpdates: false,
      unreadCount: 0,
      updateCount: 0,
      flag: 6
    }
    suwatteBackup.library!.push(libraryEntry)
  }

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
  }

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
