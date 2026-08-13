import { createClient, SupabaseClient } from '@supabase/supabase-js'

let cachedClient: SupabaseClient | null = null

export function getSupabaseServer(): SupabaseClient {
  if (cachedClient) return cachedClient

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    // Build-time prerender / runtime-missing-env guard. Next.js statically
    // prerenders Supabase-backed pages (collections, leaderboard, pet detail)
    // during `next build`; the previous hard throw aborted the whole build when
    // these vars were absent. Return a dummy client so prerender degrades to
    // empty and ISR revalidates with real data once the env vars are present.
    // The placeholder endpoint rejects every request, so no real DB is touched.
    console.warn(
      '[supabase] NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY missing — using placeholder client (build/preview only, pages degrade to empty).',
    )
    cachedClient = createClient('https://placeholder.supabase.co', 'placeholder-key', {
      auth: { persistSession: false },
    })
    return cachedClient
  }

  cachedClient = createClient(url, key, {
    auth: { persistSession: false },
  })

  return cachedClient
}
