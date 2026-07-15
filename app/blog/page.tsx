import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { posts } from '@/lib/blog/posts'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Guides, tutorials, and comparisons on AI pet generators, pixel-art avatars, and turning your photos into installable coding companions.',
  path: '/blog',
})

export default function BlogIndex() {
  const listJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: SITE.url + '/blog/' + post.slug,
      name: post.title,
    })),
  }

  return (
    <>
      <Navbar />
      <JsonLd data={listJsonLd} />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">PetGen Blog</h1>
        <p className="mt-2 text-sm text-text-muted">
          Guides, comparisons, and deep dives on AI pet generators, pixel-art avatars, and coding companions.
        </p>
        <div className="mt-8 space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="glass-card rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="font-pixel text-xs text-text-primary hover:text-primary">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">{post.description}</p>
                <p className="mt-3 text-xs text-text-muted">{post.date}</p>
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
