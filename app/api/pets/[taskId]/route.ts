import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { getSupabaseServer } from '@/lib/supabase/server'
import { getAuthenticatedUser, unauthorized } from '@/lib/auth'
import { Pet, PetStatus } from '@/types/pet'
import { STORAGE_BUCKET } from '@/lib/utils/constants'

export const runtime = 'nodejs'

function calculateProgress(status: PetStatus): number {
  const progressMap: Record<PetStatus, number> = {
    pending: 0,
    processing: 20,
    awaiting_approval: 35,
    generating_animation: 60,
    completed: 100,
    failed: 0,
  }
  return progressMap[status] ?? 0
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    // H1: status polling requires an authenticated user.
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const { taskId } = await params
    const supabase = getSupabaseServer()

    const { data: pet, error } = await supabase
      .from('pets')
      .select('*')
      .eq('id', taskId)
      .single()

    if (error || !pet) {
      return NextResponse.json(
        { error: 'NOT_FOUND', message: 'Task not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      taskId: pet.id,
      status: pet.status,
      progress: calculateProgress(pet.status),
      style: pet.style,
      baseImageUrl: pet.base_image_url,
      spritesheetUrl: pet.spritesheet_url,
      zipUrl: pet.zip_url,
      petJson: pet.pet_json,
      displayName: pet.display_name,
      description: pet.description,
      error: pet.error,
      createdAt: pet.created_at,
      completedAt: pet.completed_at,
    })
  } catch (err) {
    console.error('Get task error:', err)
    return NextResponse.json(
      { error: 'INTERNAL', message: 'Something went wrong' },
      { status: 500 }
    )
  }
}

// Deletes the caller's own pet. Ownership is checked the same way as the share
// route (user_id OR email), so historical pets generated before the user_id
// column existed are still deletable by their owner. Child rows (pet_shares,
// pet_tag_map, featured) are removed by the ON DELETE CASCADE FKs. Storage
// objects (source/base/spritesheet/zip) are best-effort cleaned up so the
// bucket doesn't accumulate orphaned files.
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  try {
    const user = await getAuthenticatedUser(req)
    if (!user) return unauthorized()

    const { taskId } = await params
    const supabase = getSupabaseServer()

    const { data: pet, error: petErr } = await supabase
      .from('pets')
      .select('id, user_id, email, source_image_path, base_image_path, spritesheet_path, zip_path')
      .eq('id', taskId)
      .maybeSingle()

    if (petErr || !pet) {
      return NextResponse.json(
        { error: 'NOT_FOUND', message: 'Pet not found' },
        { status: 404 }
      )
    }

    const isOwner = pet.user_id === user.id || (pet.email && pet.email === user.email)
    if (!isOwner) {
      return NextResponse.json(
        { error: 'FORBIDDEN', message: 'Not your pet' },
        { status: 403 }
      )
    }

    // Best-effort storage cleanup (service-role client has delete perms).
    const paths = [
      pet.source_image_path,
      pet.base_image_path,
      pet.spritesheet_path,
      pet.zip_path,
    ].filter((p): p is string => typeof p === 'string' && p.length > 0)
    if (paths.length > 0) {
      const { error: storageErr } = await supabase.storage
        .from(STORAGE_BUCKET)
        .remove(paths)
      if (storageErr) console.error('Pet storage cleanup error:', storageErr)
    }

    const { error: delErr } = await supabase.from('pets').delete().eq('id', taskId)
    if (delErr) {
      return NextResponse.json(
        { error: 'DB_ERROR', message: delErr.message },
        { status: 500 }
      )
    }

    revalidatePath('/gallery')
    revalidatePath('/my-pets')

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Delete pet error:', err)
    return NextResponse.json(
      { error: 'INTERNAL', message: 'Something went wrong' },
      { status: 500 }
    )
  }
}
