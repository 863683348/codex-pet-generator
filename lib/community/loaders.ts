import type { PetStyle } from '@/types/pet'
import type {
  CollectionTag,
  FeaturedPet,
  GalleryPet,
  LeaderboardEntry,
  PetTag,
} from '@/types/community'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getPublicUrl } from '@/lib/storage/storage'

// Raw row shapes returned by the typed Supabase client (no generated types yet).
interface RawPet {
  id: string
  display_name: string | null
  share_count: number | null
  base_image_path: string | null
  style: string | null
  created_at: string
}

interface RawUsage {
  points: number | null
  display_name: string | null
  email: string | null
}

interface RawTag {
  id: string
  slug: string
  name: string
  created_at: string
}

interface RawMapRow {
  tag_id: string
  // Supabase returns the embedded pet as an array (FK embed), even though the
  // relationship is logically one-to-one.
  pet: { id: string; is_public: boolean | null; base_image_path: string | null }[] | null
}

// Public, anonymized display name: custom name, else email local-part fallback.
// Never exposes the email domain. Shared by the leaderboard loaders and the
// /api/leaderboard/me route.
export function deriveDisplayName(row: {
  display_name?: string | null
  email?: string | null
}): string {
  const custom = row.display_name?.trim()
  if (custom) return custom
  const email = row.email?.trim()
  if (email) {
    // Local part only (never expose the domain), truncated + lowercased.
    const local = email.split('@')[0] ?? ''
    return local.slice(0, 12).toLowerCase()
  }
  return 'anonymous'
}

function toGalleryPet(p: RawPet): GalleryPet {
  return {
    id: p.id,
    displayName: p.display_name ?? null,
    shareCount: p.share_count ?? 0,
    baseImageUrl: p.base_image_path ? getPublicUrl(p.base_image_path) : null,
    style: (p.style as PetStyle) || 'pixel',
    createdAt: p.created_at,
  }
}

// Public, shared pixel pets for the gallery grid.
export async function loadSharedPets(): Promise<GalleryPet[]> {
  const supabase = getSupabaseServer()
  const { data, error } = await supabase
    .from('pets')
    .select('id, display_name, share_count, base_image_path, style, created_at')
    .eq('is_public', true)
    .not('base_image_path', 'is', null)
    .order('created_at', { ascending: false })
    .limit(60)

  if (error || !data) return []
  return (data as RawPet[]).map(toGalleryPet)
}

// Top users by points. Email / user_id are never returned — only a derived,
// anonymized display name (custom name, else email local-part fallback).
export async function loadLeaderboard(limit = 50): Promise<LeaderboardEntry[]> {
  const safeLimit = Math.min(Math.max(limit, 1), 50)
  const supabase = getSupabaseServer()
  const { data, error } = await supabase
    .from('user_usage')
    .select('points, display_name, email')
    .order('points', { ascending: false })
    .limit(safeLimit)

  if (error || !data) return []
  return (data as RawUsage[]).map((row, idx) => ({
    rank: idx + 1,
    displayName: deriveDisplayName(row),
    points: row.points ?? 0,
  }))
}

// All collection tags plus the count of public, asset-backed pets mapped to
// each. Tags with zero matching pets are still returned (petCount = 0).
// The per-tag count mirrors the SQL the architect specified:
//   COUNT(pets.id) WHERE pets.is_public AND pets.base_image_path IS NOT NULL
// implemented here as a two-step fetch (tags, then pet_tag_map with pet embed)
// aggregated in JS — portable across Supabase client versions without a
// custom RPC. Scale note: for very large maps an RPC/materialized count
// would replace the in-JS aggregation.
export async function loadCollections(): Promise<CollectionTag[]> {
  const supabase = getSupabaseServer()

  const { data: tags, error: tagErr } = await supabase
    .from('pet_tags')
    .select('id, slug, name, created_at')
    .order('name', { ascending: true })

  if (tagErr || !tags) return []

  const { data: maps, error: mapErr } = await supabase
    .from('pet_tag_map')
    .select('tag_id, pet:pets(id, is_public, base_image_path)')

  const counts = new Map<string, number>()
  if (!mapErr && maps) {
    for (const m of maps as RawMapRow[]) {
      const pet = m.pet && m.pet.length > 0 ? m.pet[0] : null
      if (pet && pet.is_public && pet.base_image_path) {
        counts.set(m.tag_id, (counts.get(m.tag_id) ?? 0) + 1)
      }
    }
  }

  return (tags as RawTag[]).map((t) => ({
    id: t.id,
    slug: t.slug,
    name: t.name,
    createdAt: t.created_at,
    petCount: counts.get(t.id) ?? 0,
  }))
}

// A single collection: its tag metadata plus the public pets mapped to it.
export async function loadCollectionBySlug(
  slug: string
): Promise<{ tag: PetTag | null; pets: GalleryPet[] }> {
  const supabase = getSupabaseServer()
  const { data: tagRow, error: tagErr } = await supabase
    .from('pet_tags')
    .select('id, slug, name, created_at')
    .eq('slug', slug)
    .maybeSingle()

  if (tagErr || !tagRow) return { tag: null, pets: [] }

  const tag: PetTag = {
    id: tagRow.id,
    slug: tagRow.slug,
    name: tagRow.name,
    createdAt: tagRow.created_at,
  }

  // Collect the pet ids mapped to this tag, then fetch the pets directly.
  // Two-step keeps the public/asset filters unambiguous (no embedded-filter
  // pitfalls) and sorts deterministically in JS.
  const { data: maps, error: mapErr } = await supabase
    .from('pet_tag_map')
    .select('pet_id')
    .eq('tag_id', tagRow.id)
    .limit(300)

  if (mapErr || !maps || maps.length === 0) return { tag, pets: [] }

  const petIds = maps.map((m) => m.pet_id)
  const { data: petsData, error: petsErr } = await supabase
    .from('pets')
    .select('id, display_name, share_count, base_image_path, style, created_at')
    .in('id', petIds)
    .eq('is_public', true)
    .not('base_image_path', 'is', null)
    .order('created_at', { ascending: false })
    .limit(60)

  if (petsErr || !petsData) return { tag, pets: [] }

  const pets = (petsData as RawPet[])
    .map(toGalleryPet)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 60)

  return { tag, pets }
}

// Curated featured pets. Falls back to most-shared when nothing is flagged.
export async function loadFeaturedPets(limit = 12): Promise<FeaturedPet[]> {
  const safeLimit = Math.min(Math.max(limit, 1), 50)
  const supabase = getSupabaseServer()

  let { data, error } = await supabase
    .from('pets')
    .select('id, display_name, share_count, base_image_path, style, created_at')
    .eq('featured', true)
    .eq('is_public', true)
    .not('base_image_path', 'is', null)
    .order('created_at', { ascending: false })
    .limit(safeLimit)

  if (error) {
    console.error('loadFeaturedPets error:', error)
    return []
  }

  if (!data || data.length === 0) {
    const fallback = await supabase
      .from('pets')
      .select('id, display_name, share_count, base_image_path, style, created_at')
      .eq('is_public', true)
      .not('base_image_path', 'is', null)
      .order('share_count', { ascending: false })
      .order('created_at', { ascending: false })
      .limit(safeLimit)
    data = fallback.data ?? []
  }

  return (data as RawPet[]).map((p) => ({
    id: p.id,
    displayName: p.display_name ?? null,
    baseImageUrl: p.base_image_path ? getPublicUrl(p.base_image_path) : null,
    shareCount: p.share_count ?? 0,
    style: (p.style as PetStyle) || 'pixel',
  }))
}
