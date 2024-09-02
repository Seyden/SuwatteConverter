import {
  SuwatteBackup,
  ChapterReference,
  StoredContent,
  LibraryEntry,
  LibraryCollection
} from '@/@types/suwatte'
import {
  MangaInfo,
  PBBackup
} from '@/@types/paperback'
import {
  Dispatch,
  SetStateAction
} from 'react'

interface SuwatteResult {
  backup: SuwatteBackup
  dateString: string
}

export default async function toSuwatte(files: File[], setConsoleOutput: (consoleOutput: SetStateAction<string[]>) => void): Promise<SuwatteResult> {
  let pbObj: PBBackup = {
    chapterProgressMarkers: [],
    chapters: [],
    libraryMangas: [],
    mangaInfos: [],
    sourceMangas: []
  }

  for (const file of files) {
    const importJson = await file.text()
    const fileName = file.name.toLowerCase()
    const objects = Object.entries(JSON.parse(importJson)).flatMap(
        (value: [string, any]) => value[1]
    )

    if (fileName.includes('chapter_progress_marker')) {
      pbObj.chapterProgressMarkers = pbObj.chapterProgressMarkers.concat(objects)
      continue
    }
    if (fileName.includes('chapter_v4')) {
      pbObj.chapters = pbObj.chapters.concat(objects)
      continue
    }
    if (fileName.includes('library_manga')) {
      pbObj.libraryMangas = pbObj.libraryMangas.concat(objects)
      continue
    }
    if (fileName.includes('manga_info')) {
      pbObj.mangaInfos = pbObj.mangaInfos.concat(objects)
      continue
    }
    if (fileName.includes('source_manga')) {
      pbObj.sourceMangas = pbObj.sourceMangas.concat(objects)
    }
  }

  setConsoleOutput((consoleOutput) => [ ...consoleOutput, `> Found ${pbObj.chapterProgressMarkers.length} Progress Markers` ])
  setConsoleOutput((consoleOutput) => [ ...consoleOutput, `> Found ${pbObj.chapters.length} Chapters` ])
  setConsoleOutput((consoleOutput) => [ ...consoleOutput, `> Found ${pbObj.libraryMangas.length} Library Mangas` ])
  setConsoleOutput((consoleOutput) => [ ...consoleOutput, `> Found ${pbObj.mangaInfos.length} Manga Infos` ])
  setConsoleOutput((consoleOutput) => [ ...consoleOutput, `> Found ${pbObj.sourceMangas.length} Source Mangas` ])

  const suwatteBackup: SuwatteBackup = {
    library: [],
    storedContents: [],
    progressMarkers: [],
    collections: [],
    chapters: [],
    contentLinks: [],
    date: new Date(),
    appVersion: "UNKNOWN",
    schemaVersion: 16
  }

  const tabIdSet: Set<string> = new Set<string>()
  const collection: LibraryCollection[] = []
  pbObj.libraryMangas.forEach((item) => {
    item.libraryTabs.forEach((i) => {
      if (!tabIdSet.has(i.id)) {
        tabIdSet.add(i.id)
        suwatteBackup.collections?.push({
          id: i.id,
          name: i.name,
          order: i.sortOrder
        })
      }
    })
  })

  const paperbackMangaInfos = Object.fromEntries(
      pbObj.mangaInfos.map((value) => [value.id, value])
  )
  const paperbackIdSet: Record<string, StoredContent> = {}

  for (const item of pbObj.sourceMangas) {
    const mangaInfo: MangaInfo = paperbackMangaInfos[item.mangaInfo.id]
    const mangaId = `${item.sourceId}||${item.mangaId}`

    const storedContentItem: StoredContent = {
      id: mangaId,
      sourceId: item.sourceId,
      contentId: item.mangaId,
      title: mangaInfo.titles[0],
      additionalTitles: mangaInfo.titles.slice(1),
      summary: mangaInfo.desc,
      cover: mangaInfo.image,
      additionalCovers: mangaInfo.covers,
      creators: [mangaInfo.author, mangaInfo.artist],
      status: 1,
      isNSFW: mangaInfo.hentai
    }
    paperbackIdSet[item.id] = storedContentItem
    suwatteBackup.storedContents!.push(storedContentItem)
  }

  for (const item of pbObj.libraryMangas) {
    if (!item.primarySource.id || paperbackIdSet[item.primarySource.id] === undefined) {
      continue
    }

    const libContent = paperbackIdSet[item.primarySource.id]
    const libraryEntry: LibraryEntry = {
      collections: item.libraryTabs.map((obj) => obj.id),
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

    item.secondarySources.forEach((value) => {
      const storedContent = paperbackIdSet[value.id]
      suwatteBackup.contentLinks!.push({
        id: `${libContent.id}||${storedContent.id}`,
        libraryEntryId: libContent.id,
        contentId: storedContent.id
      })
    })
  }

  const paperbackChapterIdToContentSet: Record<string, [content: StoredContent, chapterId: string, number: number, volume: number]> = {}

  for (const item of pbObj.chapters) {
    const content = paperbackIdSet[item.sourceManga.id]
    if (content === undefined) {
      continue
    }

    /*let finalChapterId = `${content.sourceId}||${content.contentId}||${item.chapterId}`
    suwatteBackup.chapters!.push({
      id: finalChapterId,
      chapterId: item.chapterId,
      contentId: content.contentId,
      sourceId: content.sourceId,
      date: new Date(),
      index: item.sortingIndex,
      language: item.langCode == "🇬🇧" ? "en_GB" : item.langCode,
      number: item.chapNum,
      title: item.name,
      volume: item.volume,
    })*/

    paperbackChapterIdToContentSet[item.id] = [content, item.chapterId, item.chapNum == "nan" ? item.sortingIndex : item.chapNum as number, item.volume]
  }

  for (const item of pbObj.chapterProgressMarkers) {
    const [content, chapterId, number, volume] = paperbackChapterIdToContentSet[item.chapter.id]
    if (content === undefined) {
      continue
    }

    let finalChapterId = `${content.sourceId}||${content.contentId}||${chapterId}`
    let chapterReference: ChapterReference = {
      chapterId: chapterId,
      contentId: content.id,
      id: finalChapterId,
      number: number,
      volume: volume == 0 ? undefined : volume
    }

    suwatteBackup.progressMarkers!.push({
      dateRead: item.hidden ? undefined : new Date((item.time + 978307200) * 1000),
      id: finalChapterId,
      lastPageOffsetPCT: undefined,
      lastPageRead: item.completed ? 1 : item.lastPage,
      chapter: chapterReference,
      totalPageCount: item.completed ? 1 : item.totalPages

    })
  }

  return {
    backup: suwatteBackup,
    dateString: new Date(Date.now()).toISOString().split('T')[0]
  }
}
