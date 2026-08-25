'use client'

import { Clock } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { PetStyle } from '@/types/pet'

export type StyleFilter = 'all' | PetStyle
export type SortKey = 'newest' | 'shares'

const STYLES: { value: StyleFilter; labelKey: string }[] = [
  { value: 'all', labelKey: 'gallery.filterAll' },
  { value: 'pixel', labelKey: 'gallery.filterPixel' },
  { value: 'chibi', labelKey: 'gallery.filterChibi' },
  { value: 'realistic', labelKey: 'gallery.filterRealistic' },
]

// Filter controls for the gallery. All state lives in GalleryContent; this is a
// controlled presentational bar. No network, no loader re-run — filtering is
// purely client-side over the already-loaded 60 pets (keeps ISR untouched).
export default function GalleryFilterBar({
  style,
  sort,
  onStyleChange,
  onSortChange,
}: {
  style: StyleFilter
  sort: SortKey
  onStyleChange: (s: StyleFilter) => void
  onSortChange: (s: SortKey) => void
}) {
  const { t } = useI18n()

  const chip = (active: boolean) =>
    'inline-flex min-h-[32px] items-center rounded-full px-3 text-xs font-medium transition-colors ' +
    (active
      ? 'bg-primary text-white'
      : 'border border-border bg-bg-elevated text-text-secondary hover:text-text-primary')

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-xs text-text-muted">{t('gallery.filterLabel')}</span>
        {STYLES.map((s) => (
          <button
            key={s.value}
            type="button"
            onClick={() => onStyleChange(s.value)}
            aria-pressed={style === s.value}
            className={chip(style === s.value)}
          >
            {t(s.labelKey)}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4 text-text-muted" />
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortKey)}
          aria-label={t('gallery.sortLabel')}
          className="min-h-[32px] rounded-full border border-border bg-bg-elevated px-3 text-xs text-text-secondary transition-colors hover:text-text-primary focus:border-accent focus:outline-none"
        >
          <option value="newest">{t('gallery.sortNewest')}</option>
          <option value="shares">{t('gallery.sortShared')}</option>
        </select>
      </div>
    </div>
  )
}
