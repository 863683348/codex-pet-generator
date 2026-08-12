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
  '/leaderboard',
  '/collections',
  '/submit',
]

// 博客 slug 从 posts.ts 自动生成（新增文章后 sitemap 自动覆盖）
const blogSlugs = posts.map((p) => p.slug)

// 标签合集动态路由（slug 与 pet_tags 种子及前端路由保持一致）
const collectionSlugs = ['cat', 'dog', 'fantasy', 'robot', 'anime', 'game', 'celebrity', 'original']
const collectionRoutes = collectionSlugs.map((slug) => `/collections/${slug}`)

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...staticRoutes.map((route) => ({
      url: SITE.url + (route || '/'),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...collectionRoutes.map((route) => ({
      url: SITE.url + route,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...blogSlugs.map((slug) => ({
      url: SITE.url + '/blog/' + slug,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
