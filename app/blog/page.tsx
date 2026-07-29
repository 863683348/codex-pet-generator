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

  function breadcrumbJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: SITE.url + '/blog' },
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
