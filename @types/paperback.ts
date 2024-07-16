export type PBBackup = {
  libraryMangas: LibraryManga[]
  sourceMangas: SourceManga[]
  chapterProgressMarkers: ChapterProgressMarker[]
  chapters: Chapter[]
  mangaInfos: MangaInfo[]
}
export interface LibraryManga {
  primarySource: SourceMangaReference
  lastUpdated: number
  libraryTabs: LibraryTabs[]
  id: string
  secondarySources: SourceMangaReference[]
  lastRead: number
  // Tracked Sources
  dateBookmarked: number
}

export interface LibraryTabs {
  id: string
  name: string
  sortOrder: number
}

export interface MangaInfo {
  id: string // -> id
  rating?: number
  covers: any[] // -> additionalcovers
  author: string // -> creators
  status: string // -> status
  titles: string[] // -> title -> additionalTitles
  artist: string // -> creators
  hentai: boolean // -> isNSFW
  image: string // -> cover
  additionalInfo: AdditionalInfo
  desc: string // -> summary
  tags: MangaTag[]
}

export interface AdditionalInfo {
  langFlag: string
  users: string
  langName: string
  avgRating: string
  views: string
  follows: string
}

export interface MangaTag {
  id: string
  label: string
  tags: Tag[]
}

export interface Tag {
  id: string
  label: string
}

export interface SourceManga {
  id: string
  mangaId: string
  sourceId: string
  mangaInfo: MangaInfoReference
}

export interface MangaInfoReference {
  type: string
  id: string
}

export interface ChapterProgressMarker {
  totalPages: number
  lastPage: number
  chapter: ChapterReference
  completed: boolean
  time: number
  hidden: boolean
}

export interface ChapterReference {
  type: string
  id: string
}

export interface Chapter {
  chapterId: string
  chapNum: number
  volume: number
  id: string
  time: number
  sortingIndex: number
  sourceManga: SourceMangaReference
  isNew: boolean
  group: string
  langCode: string
  name: string
}

export interface SourceMangaReference {
  type: string
  id: string
}