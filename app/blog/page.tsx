import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { posts } from '@/lib/blog/posts'
import { JsonLd } from '@/components/seo/JsonLd'
import BlogIndexView from '@/components/blog/BlogIndexView'
import { getServerT } from '@/lib/i18n/server'

// This page uses getServerT() which reads the request cookie/accept-language.
// Force dynamic rendering so the locale is resolved per-request instead of
// being cached in one language by ISR/SSG.
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  // /blog lists only English posts and targets English queries — keep the
  // metadata title in English for every locale (the on-page H1 stays localized).
  return buildMetadata({
    title: 'Codex Pet Blog — Pixel Pet Guides, Tips & Fixes',
    description:
      'Guides, comparisons, and deep dives on AI pet generators, pixel-art avatars, and Codex desktop pets — from install fixes to pixel-art design.',
    path: '/blog',
  })
}

export default async function BlogIndex() {
  const t = await getServerT()
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

  function breadcrumbJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: t('blog.indexTitle'), item: SITE.url + '/blog' },
      ],
    }
  }

  return (
    <>
      <Navbar />
      <JsonLd data={listJsonLd} />
      <JsonLd data={breadcrumbJsonLd()} />
      <BlogIndexView posts={posts} />
      <Footer />
    </>
  )
}
