import Link from 'next/link'
import Image from 'next/image'
import { Images } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import type { FeaturedPet } from '@/types/community'

// Presentational grid of featured pets. Mirrors the gallery card style so the
// homepage featured strip feels consistent with the community gallery.
export default function FeaturedPets({ pets }: { pets: FeaturedPet[] }) {
  const { t } = useI18n()

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
  )
}
