import { createClient, SupabaseClient } from '@supabase/supabase-js'

let cachedClient: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  if (cachedClient) return cachedClient

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    // SSR build guard: Next.js may execute 'use client' module code at build
    // time when env vars are missing. Return a dummy client so tsc and build
    // pass. It is never used at runtime — all callers invoke it inside
    // useEffect (client-only).
    if (typeof window === 'undefined') {
      cachedClient = createClient('https://placeholder.supabase.co', 'placeholder-key')
      return cachedClient
    }
    throw new Error('Missing Supabase env vars. Check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.')
  }

  cachedClient = createClient(url, key)
  return cachedClient
}
