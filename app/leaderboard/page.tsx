import type { Metadata } from 'next'
import { Medal, Trophy } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { loadLeaderboard } from '@/lib/community/loaders'
import { buildMetadata } from '@/lib/seo'
import { getServerT } from '@/lib/i18n/server'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT()
  return buildMetadata({
    title: t('leaderboard.title'),
    description: t('leaderboard.desc'),
    path: '/leaderboard',
  })
}

export default async function LeaderboardPage() {
  const t = await getServerT()
  const entries = await loadLeaderboard(50)

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex items-center gap-2">
          <Trophy className="h-6 w-6 text-accent" />
          <h1 className="font-pixel text-lg text-text-primary">{t('leaderboard.title')}</h1>
        </div>
        <p className="mb-8 text-sm text-text-secondary">{t('leaderboard.desc')}</p>

        {entries.length === 0 ? (
          <div className="glass-card rounded-lg p-10 text-center">
            <p className="font-pixel text-sm text-text-primary">{t('leaderboard.emptyTitle')}</p>
            <p className="mt-2 text-sm text-text-secondary">{t('leaderboard.emptyDesc')}</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-border bg-bg-surface">
            <div className="grid grid-cols-[3rem_1fr_5rem] items-center gap-2 border-b border-border px-4 py-3 text-xs font-medium uppercase tracking-wide text-text-muted">
              <span>{t('leaderboard.rankLabel')}</span>
              <span>Creator</span>
              <span className="text-right">{t('leaderboard.pointsLabel')}</span>
            </div>
            <ul>
              {entries.map((entry) => {
                const top3 = entry.rank <= 3
                return (
                  <li
                    key={entry.rank}
                    className={`grid min-h-[44px] grid-cols-[3rem_1fr_5rem] items-center gap-2 border-b border-border px-4 py-3 text-sm transition-colors last:border-b-0 hover:border-accent ${
                      top3 ? 'bg-bg-elevated' : ''
                    }`}
                  >
                    <span className="flex items-center gap-1.5 font-pixel text-sm text-text-secondary">
                      {top3 && <Medal className="h-4 w-4 text-accent" />}
                      {entry.rank}
                    </span>
                    <span className="truncate text-text-primary">{entry.displayName}</span>
                    <span className="text-right font-mono text-sm tabular-nums text-text-secondary">
                      {entry.points.toLocaleString()}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
