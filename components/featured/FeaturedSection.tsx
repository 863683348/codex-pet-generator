'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { FeaturedPet } from '@/types/community'
import FeaturedPets from './FeaturedPets'

// Homepage featured strip. Fetched client-side from /api/featured (no SSR refetch
// of the whole page). The API already applies the featured-first / top-shared
// fallback (AC-03), so this component just renders whatever it returns.
export default function FeaturedSection() {
  const { t } = useI18n()
  // null = still loading (skeleton), [] = empty, failed = silent empty.
  const [pets, setPets] = useState<FeaturedPet[] | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let active = true
    fetch('/api/featured')
      .then((res) => {
        if (!res.ok) throw new Error('bad status')
        return res.json()
      })
      .then((data) => {
        if (!active) return
        setPets(Array.isArray(data) ? (data as FeaturedPet[]) : [])
      })
      .catch(() => {
        if (!active) return
        setFailed(true)
        setPets([])
      })
    return () => {
      active = false
    }
  }, [])

  // On error: silently render nothing so the homepage never crashes.
  if (failed) return null

  if (pets === null) {
    return (
      <section className="mx-auto mt-16 max-w-5xl" aria-busy="true" aria-label={t('featured.loading')}>
        <div className="mb-6 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <h2 className="font-pixel text-base text-text-primary">{t('featured.title')}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="glass-card overflow-hidden rounded-lg">
              <div className="aspect-square animate-pulse bg-bg-elevated" />
              <div className="p-3">
                <div className="h-3 w-2/3 animate-pulse rounded bg-bg-elevated" />
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  // Empty result (no public pets at all): silent empty, no broken section.
  if (pets.length === 0) return null

  return (
    <section className="mx-auto mt-16 max-w-5xl">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h2 className="font-pixel text-base text-text-primary">{t('featured.title')}</h2>
      </div>
      <p className="mb-6 text-sm text-text-secondary">{t('featured.desc')}</p>
      <FeaturedPets pets={pets} />
    </section>
  )
}
