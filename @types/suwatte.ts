export type SuwatteBackup = {
  library?: LibraryEntry[]
  storedContents?: StoredContent[]
  markers?: ProgressMarker[]
  collections?: LibraryCollection[]
  chapters?: StoredChapter[]
  contentLinks?: ContentLink[]

  date?: Date
  schemaVersion?: number
  appVersion?: string
}

export interface StoredChapter {
  id?: string
  sourceId: string
  contentId: string
  chapterId: string
  index?: number
  number: number
  volume?: number
  title?: string
  language?: string
  date: Date
  webUrl?: string
  thumbnail?: string
}

export interface ProgressMarker {
  id: string
  chapter?: ChapterReference
  dateRead?: Date
  lastPageRead?: number
  totalPageCount?: number
  lastPageOffsetPCT?: number
}

export interface ChapterReference {
  id: string
  chapterId: string
  number: number
  volume?: number
  contentId: string // StoredContent
}

export interface LibraryEntry {
  id: string
  updateCount: number
  unreadCount: number
  lastUpdated: Date
  lastRead?: Date
  dateAdded: Date
  collections: string[]
  lastOpened: Date
  flag: number
  linkedHasUpdates: boolean
}

export interface StoredContent {
  id: string
  sourceId: string
  contentId: string
  title: string
  summary: string
  additionalTitles: string[]
  cover: string
  additionalCovers: string[]
  creators: string[]
  status: number
  isNSFW: boolean
}

export interface LibraryCollection {
  id: string
  name: string
  order: number
}

export interface ContentLink {
  id: string
  libraryEntryId: string
  contentId: string
}