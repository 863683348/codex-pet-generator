import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseServer } from '@/lib/supabase/server'

export interface AuthUser {
  id: string
  email: string | null
}

// Verifies the Bearer JWT via Supabase (works on the service-role client too,
// because auth.getUser validates the token's signature against the project).
// Returns the user, or null if missing/invalid.
export async function getAuthenticatedUser(
  req: NextRequest
): Promise<AuthUser | null> {
  const authHeader = req.headers.get('authorization')
  if (!authHeader?.startsWith('Bearer ')) return null

  const token = authHeader.slice(7)
  const supabase = getSupabaseServer()
  const { data, error } = await supabase.auth.getUser(token)
  if (error || !data.user) return null

  return { id: data.user.id, email: data.user.email ?? null }
}

export function unauthorized(): NextResponse {
  return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
}
