import type { PetStyle } from './pet'

// Lifecycle of a community submission (moderation queue for featuring).
export type SubmissionStatus = 'pending' | 'approved' | 'rejected'

export interface Submission {
  id: string
  petId: string
  userId: string
  message: string | null
  status: SubmissionStatus
  createdAt: string
  reviewedAt: string | null
}

export interface PetTag {
  id: string
  slug: string
  name: string
  createdAt: string
}

// A collection tag enriched with the number of public, asset-backed pets
// mapped to it. Used by the /collections index cards.
export interface CollectionTag extends PetTag {
  petCount: number
}

export interface PetTagMap {
  petId: string
  tagId: string
}

export interface FeaturedPet {
  id: string
  displayName: string | null
  baseImageUrl: string | null
  shareCount: number
  style: PetStyle
}

export interface LeaderboardEntry {
  rank: number
  displayName: string
  points: number
}

// Shared shape used by the gallery grid and collection pages.
// Must stay in sync with components/gallery/GalleryContent's GalleryPet usage.
export interface GalleryPet {
  id: string
  displayName: string | null
  shareCount: number
  baseImageUrl: string | null
  style: PetStyle
  createdAt: string
}
