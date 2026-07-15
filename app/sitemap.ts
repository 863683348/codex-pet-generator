import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/seo'

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

const blogSlugs = [
  'turn-photo-into-pixel-art',
  'what-is-pet-spritesheet',
  'best-ai-pet-generators-2026',
]

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
