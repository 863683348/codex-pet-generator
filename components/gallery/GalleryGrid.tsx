'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Images } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { GalleryPet } from '@/types/community'

// Shared, token-styled grid used by the gallery and every collection page.
// Pure presentational component — the only stateful bit is the i18n lookup for
// the untitled fallback, so it is safe to drop into both client and server trees.
export default function GalleryGrid({ pets }: { pets: GalleryPet[] }) {
  const { t } = useI18n()

  if (pets.length === 0) {
    return (
      <div className="glass-card rounded-lg p-10 text-center">
        <Images className="mx-auto mb-4 h-8 w-8 text-text-muted" />
        <h2 className="mb-2 font-pixel text-sm text-text-primary">{t('gallery.emptyTitle')}</h2>
        <p className="text-sm text-text-secondary">{t('gallery.emptyDesc')}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {pets.map((pet) => (
        <Link
          key={pet.id}
          href={`/p/${pet.id}`}
          className="glass-card group overflow-hidden rounded-lg transition-all hover:border-accent"
        >
          <div className="relative aspect-square bg-bg-elevated">
            {pet.baseImageUrl ? (
              <Image
                src={pet.baseImageUrl}
                alt={pet.displayName || t('gallery.untitled')}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-text-muted">
                <Images className="h-6 w-6" />
              </div>
            )}
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <span className="truncate font-pixel text-[11px] text-text-primary">
                {pet.displayName || t('gallery.untitled')}
              </span>
            </div>
            <div className="mt-1 flex flex-col gap-0.5 text-[10px] text-text-muted">
              <span>
                {t('gallery.createdAt')}: {pet.createdAt.slice(0, 10)}
              </span>
              <span>
                {t('gallery.shares')}: {pet.shareCount}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
