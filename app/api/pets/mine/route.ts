import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { getPublicUrl } from '@/lib/storage/storage'

export const runtime = 'nodejs'

// Lists the currently authenticated user's own pets (by user_id), newest first.
// The storage bucket is public, so we build the image URL directly with
// getPublicUrl instead of calling createSignedUrl once per pet — that would be
// N extra Supabase Storage round-trips and was the main source of slow loads
// for accounts with many pets.
export async function GET(req: NextRequest) {
  const user = await getAuthenticatedUser(req)
  if (!user) return unauthorized()

  const supabase = getSupabaseServer()

  // Match by user_id OR by email. Pets generated before the user_id column was
  // added (migration 004) only carry an email, so the email clause is what makes
  // a user's historical pets show up here — consistent with the ownership check
  // in the share route.
  const ownership = [`user_id.eq.${user.id}`]
  if (user.email) ownership.push(`email.eq.${user.email}`)
  const ownershipFilter = ownership.join(',')

  const { data: pets, error } = await supabase
    .from('pets')
    .select('id, display_name, status, is_public, share_count, base_image_path, created_at, email')
    .or(ownershipFilter)
    // Only surface pets that actually generated an image. Pets still processing
    // or that failed have no base_image_path and aren't downloadable/shareable,
    // so we hide them from "My Pets".
    .not('base_image_path', 'is', null)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: 'DB_ERROR', message: error.message }, { status: 500 })
  }

  const result = (pets ?? []).map((p) => ({
    id: p.id,
    displayName: p.display_name,
    status: p.status,
    isPublic: p.is_public,
    shareCount: p.share_count ?? 0,
    baseImageUrl: p.base_image_path ? getPublicUrl(p.base_image_path) : null,
    createdAt: p.created_at,
  }))

  return NextResponse.json({ pets: result })
}
