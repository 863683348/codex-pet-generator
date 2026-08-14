import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Wrench,
  BookText,
  Sparkles,
  Compass,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { posts, type BlogPost } from '@/lib/blog/posts'
import { getServerT } from '@/lib/i18n/server'

// Force dynamic rendering so getServerT() resolves the request locale
// per-request instead of caching content in one language.
export const dynamic = 'force-dynamic'

type Category = {
  key: string
  titleKey: string
  icon: LucideIcon
  slugs: string[]
}

const CATEGORIES: Category[] = [
  {
    key: 'install',
    titleKey: 'guide.categories.install',
    icon: Wrench,
    slugs: [
      'how-to-install-codex-pet',
      'install-codex-pet-terminal',
      'installation-troubleshooting',
      'codex-pet-not-showing-fixes',
      'codex-pet-image-formats-jpg-png-webp',
      'make-your-first-codex-pixel-pet',
    ],
  },
  {
    key: 'pixel',
    titleKey: 'guide.categories.pixel',
    icon: BookText,
    slugs: [
      'what-is-pet-spritesheet',
      'spritesheet-dimensions',
      'animation-states-explained',
      'codex-pet-color-customization',
      'best-photos-for-pixel-pet-generator',
      'why-use-pixel-art',
      'what-is-a-codex-pet',
    ],
  },
  {
    key: 'compare',
    titleKey: 'guide.categories.compare',
    icon: Sparkles,
    slugs: [
      'best-ai-pet-generators-2026',
      'ai-pet-generator-ultimate-guide',
      'codex-pets-dont-change-your-model',
    ],
  },
  {
    key: 'usecases',
    titleKey: 'guide.categories.usecases',
    icon: Compass,
    slugs: [
      'turn-photo-into-pixel-art',
      'create-codex-pet-from-logo',
      'creative-uses-for-codex-pet',
      'share-codex-pet-with-friends',
      'codex-custom-pet-guide',
      'custom-pet-guide',
      'change-pet-style-tutorial',
      'pet-creation-guide',
      'pets-library-explained',
    ],
  },
  {
    key: 'how',
    titleKey: 'guide.categories.how',
    icon: BookOpen,
    slugs: [
      'how-petgen-works',
      'pixel-art-pet-design-guide',
      'codex-pet-free-starter-plan',
      'how-photo-quality-affects-pixel-pet',
    ],
  },
]

const postMap = new Map<string, BlogPost>(posts.map((p) => [p.slug, p]))
const listedSlugs = new Set(CATEGORIES.flatMap((c) => c.slugs))

function categoryPosts(category: Category): BlogPost[] {
  const explicit = category.slugs
    .map((slug) => postMap.get(slug))
    .filter((p): p is BlogPost => Boolean(p))

  if (category.key === 'how') {
    const leftover = posts.filter((p) => !listedSlugs.has(p.slug))
    return [...explicit, ...leftover]
  }
  return explicit
}

const collectionJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Guides & Tutorials',
    url: SITE.url + '/guide',
    description: 'Hands-on tutorials to build, install, and customize your Codex pixel pet.',
    isPartOf: { '@type': 'WebSite', name: SITE.fullName, url: SITE.url },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: SITE.url + '/blog/' + post.slug,
      name: post.title,
    })),
  },
]

export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT()
  return buildMetadata({
    title: t('guide.title'),
    description: t('guide.desc'),
    path: '/guide',
  })
}

export default async function GuidePage() {
  const t = await getServerT()
  return (
    <>
      <Navbar />
      <JsonLd data={collectionJsonLd} />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <header>
          <h1 className="font-pixel text-lg leading-relaxed text-text-primary sm:text-xl">
            {t('guide.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
            {t('guide.desc')}
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {CATEGORIES.map((category) => {
            const Icon = category.icon
            const items = categoryPosts(category)
            if (items.length === 0) return null
            return (
              <section key={category.key}>
                <h2 className="flex items-center gap-2 font-pixel text-sm text-text-primary">
                  <Icon className="h-5 w-5 text-primary" />
                  {t(category.titleKey)}
                </h2>
                <div className="mt-5 space-y-4">
                  {items.map((post) => (
                    <article
                      key={post.slug}
                      className="glass-card rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block"
                      >
                        <h3 className="font-pixel text-xs text-text-primary hover:text-primary">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary">
                          {post.description}
                        </p>
                        <p className="mt-3 text-xs text-text-muted">
                          {post.date}
                        </p>
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}
