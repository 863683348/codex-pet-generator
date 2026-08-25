import { NextRequest, NextResponse } from 'next/server'
import { loadLeaderboard } from '@/lib/community/loaders'

export const runtime = 'nodejs'

// Public leaderboard. Returns a JSON array of { rank, displayName, points }.
// Email and user_id are never included — the loader anonymizes identities.
export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url)
    const rawLimit = Number.parseInt(url.searchParams.get('limit') ?? '50', 10)
    const requested = Number.isFinite(rawLimit) ? rawLimit : 20
    const limit = Math.min(Math.max(requested, 1), 50)

    const entries = await loadLeaderboard(limit)
    return NextResponse.json(entries)
  } catch (err) {
    console.error('Leaderboard API error:', err)
    return NextResponse.json({ error: 'INTERNAL', message: 'Something went wrong' }, { status: 500 })
  }
}
