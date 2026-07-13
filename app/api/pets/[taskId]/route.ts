import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'
import { Pet, PetStatus } from '@/types/pet'

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
