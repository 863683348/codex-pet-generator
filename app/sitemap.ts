import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'
import { posts } from '@/lib/blog/posts'

const staticRoutes = [
  '',
  '/faq',
  '/terms',
  '/privacy',
  '/contact',
  '/signup',
  '/signin',
  '/blog',
]

// 博客 slug 从 posts.ts 自动生成（新增文章后 sitemap 自动覆盖）
const blogSlugs = posts.map((p) => p.slug)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map((route) => ({
      url: SITE.url + (route || '/'),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...blogSlugs.map((slug) => ({
      url: SITE.url + '/blog/' + slug,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
