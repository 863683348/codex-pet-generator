'use client'

import Link from 'next/link'
import Image from 'next/image'
import { LayoutGrid, ArrowRight, Images } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

export type GalleryPet = {
  id: string
  displayName: string | null
  shareCount: number
  baseImageUrl: string | null
}

export default function GalleryContent({ pets }: { pets: GalleryPet[] }) {
  const { t } = useI18n()

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
              <div className="flex items-center justify-between p-3">
                <span className="truncate font-pixel text-[11px] text-text-primary">
                  {pet.displayName || t('gallery.untitled')}
                </span>
                {pet.shareCount > 0 && (
                  <span className="ml-2 shrink-0 text-[10px] text-text-muted">{pet.shareCount}×</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}
