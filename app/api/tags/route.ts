import { NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

export const runtime = 'nodejs'

// Returns the list of pet categories (pet_tags) so the generation UI can let
// the user pick one. Public read; safe to expose.
export async function GET() {
  try {
    const supabase = getSupabaseServer()
    const { data, error } = await supabase
      .from('pet_tags')
      .select('id, slug, name')
      .order('name', { ascending: true })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ tags: data ?? [] })
  } catch (err) {
    console.error('Tags API error:', err)
    return NextResponse.json({ error: 'Failed to load categories' }, { status: 500 })
  }
}
