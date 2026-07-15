import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { buildMetadata, SITE } from '@/lib/seo'
import { posts } from '@/lib/blog/posts'
import { JsonLd } from '@/components/seo/JsonLd'
import BlogIndexView from '@/components/blog/BlogIndexView'

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
      <BlogIndexView posts={posts} />
      <Footer />
    </>
  )
}
