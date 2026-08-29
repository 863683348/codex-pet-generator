import { buildMetadata, SITE } from '@/lib/seo'
import { getServerT } from '@/lib/i18n/server'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata = buildMetadata({
  title: "Changelog — What's New in Codex Pet Generator",
  description: "Track the latest features, improvements, and updates to Codex Pet Generator. See what's new in each version.",
  path: '/changelog',
})

const changelog = [
  {
    version: 'v2.1.0',
    date: '2026-08-29',
    title: 'Tortoise Edition & PWA Support',
    items: [
      'Added tortoise pet template',
      'Service Worker for offline support',
      'Social sharing buttons on blog posts',
      'Blog category navigation',
    ],
  },
  {
    version: 'v2.0.0',
    date: '2026-08-25',
    title: 'Major Feature Update',
    items: [
      'Added hamster pet template',
      'Clipboard paste support for uploads',
      'New /changelog page',
      'Improved blog category filtering',
    ],
  },
  {
    version: 'v1.5.0',
    date: '2026-08-20',
    title: 'SEO & Performance',
    items: [
      'FAQPage schema on key articles',
      'English titles for blog/guide pages',
      'Improved internal linking',
      'Faster page loads',
    ],
  },
  {
    version: 'v1.0.0',
    date: '2026-07-27',
    title: 'Initial Release',
    items: [
      'Photo to pixel pet conversion',
      '9 animation states',
      'Transparent WebP output',
      'macOS & Windows support',
    ],
  },
]

export default async function ChangelogPage() {
  const t = await getServerT()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: 'Codex Pet Generator Changelog',
    description: 'Track the latest features and updates to Codex Pet Generator',
    image: `${SITE.url}/og-image.jpg`,
    datePublished: '2026-07-27',
    dateModified: '2026-08-29',
    author: { '@type': 'Organization', name: 'PetGen' },
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">{t('changelog.title')}</h1>
        <div className="space-y-8">
          {changelog.map((entry) => (
            <div key={entry.version} className="border-l-2 border-primary pl-6 py-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-sm font-mono rounded">
                  {entry.version}
                </span>
                <span className="text-text-muted text-sm">{entry.date}</span>
              </div>
              <h2 className="text-xl font-semibold mb-3">{entry.title}</h2>
              <ul className="space-y-1">
                {entry.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
