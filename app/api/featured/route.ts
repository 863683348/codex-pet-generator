import { NextResponse } from 'next/server'
import { loadFeaturedPets } from '@/lib/community/loaders'

export const runtime = 'nodejs'

// Public featured pets. Returns a JSON array of FeaturedPet.
export async function GET() {
  try {
    const pets = await loadFeaturedPets(12)
    return NextResponse.json(pets)
  } catch (err) {
    console.error('Featured API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}
