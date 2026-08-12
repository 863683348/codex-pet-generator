'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LayoutGrid, Images, ArrowRight } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { GalleryPet } from '@/types/community'
import GalleryFilterBar, { type StyleFilter, type SortKey } from './GalleryFilterBar'
import GalleryGrid from './GalleryGrid'

// Orchestrates the gallery: holds the client-side filter state and derives the
// visible subset from the full (already-loaded, ISR-cached) pet list. No fetch
// happens here, so the server-rendered /gallery page keeps its 5-minute ISR.
export default function GalleryContent({ pets }: { pets: GalleryPet[] }) {
  const { t } = useI18n()
  const [style, setStyle] = useState<StyleFilter>('all')
  const [sort, setSort] = useState<SortKey>('newest')

  const visible = useMemo(() => {
    const filtered = style === 'all' ? pets : pets.filter((p) => p.style === style)
    return [...filtered].sort((a, b) =>
      sort === 'shares'
        ? b.shareCount - a.shareCount
        : b.createdAt.localeCompare(a.createdAt)
    )
  }, [pets, style, sort])

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center gap-2">
        <LayoutGrid className="h-6 w-6 text-primary" />
        <h1 className="font-pixel text-lg text-text-primary">{t('gallery.title')}</h1>
      </div>
      <p className="mb-8 text-sm text-text-secondary">{t('gallery.desc')}</p>

      {pets.length === 0 ? (
        <div className="glass-card rounded-lg p-10 text-center">
          <Images className="mx-auto mb-4 h-8 w-8 text-text-muted" />
          <h2 className="mb-2 font-pixel text-sm text-text-primary">{t('gallery.emptyTitle')}</h2>
          <p className="mb-6 text-sm text-text-secondary">{t('gallery.emptyDesc')}</p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('gallery.createCta')}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <>
          <GalleryFilterBar style={style} sort={sort} onStyleChange={setStyle} onSortChange={setSort} />
          {visible.length > 0 ? (
            <GalleryGrid pets={visible} />
          ) : (
            <div className="glass-card rounded-lg p-10 text-center">
              <Images className="mx-auto mb-4 h-8 w-8 text-text-muted" />
              <h2 className="mb-2 font-pixel text-sm text-text-primary">{t('gallery.noMatchTitle')}</h2>
              <p className="text-sm text-text-secondary">{t('gallery.noMatchDesc')}</p>
            </div>
          )}
        </>
      )}
    </main>
  )
}
