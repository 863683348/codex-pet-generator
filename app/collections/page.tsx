import type { Metadata } from 'next'
import Link from 'next/link'
import { Cat, Dog, Sparkles, Bot, Clapperboard, Gamepad2, Star, Shapes, Tags } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { loadCollections } from '@/lib/community/loaders'
import { buildMetadata } from '@/lib/seo'
import { getServerT } from '@/lib/i18n/server'

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT()
  return buildMetadata({
    title: t('collections.title'),
    description: t('collections.desc'),
    path: '/collections',
  })
}

// slug → icon. Slugs mirror the pet_tags seed values in 005_community.sql.
const ICON_BY_SLUG: Record<string, LucideIcon> = {
  cat: Cat,
  dog: Dog,
  fantasy: Sparkles,
  robot: Bot,
  anime: Clapperboard,
  game: Gamepad2,
  celebrity: Star,
  original: Shapes,
}

export default async function CollectionsPage() {
  const t = await getServerT()
  const tags = await loadCollections()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex items-center gap-2">
          <Tags className="h-6 w-6 text-primary" />
          <h1 className="font-pixel text-lg text-text-primary">{t('collections.title')}</h1>
        </div>
        <p className="mb-8 text-sm text-text-secondary">{t('collections.desc')}</p>

        {tags.length === 0 ? (
          <div className="glass-card rounded-lg p-10 text-center">
            <p className="font-pixel text-sm text-text-primary">{t('collections.emptyTitle')}</p>
            <p className="mt-2 text-sm text-text-secondary">{t('collections.emptyDesc')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {tags.map((tag) => {
              const Icon = ICON_BY_SLUG[tag.slug] ?? Shapes
              return (
                <Link
                  key={tag.id}
                  href={`/collections/${tag.slug}`}
                  className="glass-card group flex min-h-[44px] flex-col items-center gap-2 rounded-lg p-5 text-center transition-all hover:border-accent"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="font-pixel text-xs text-text-primary">{tag.name}</span>
                  <span className="text-xs text-text-secondary">
                    {t('collections.countLabel', { count: tag.petCount })}
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
