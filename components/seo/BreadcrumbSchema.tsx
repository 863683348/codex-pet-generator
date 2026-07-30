'use client'

import { usePathname } from 'next/navigation'
import { JsonLd } from './JsonLd'
import { SITE } from '@/lib/seo'

const PATH_LABELS: Record<string, string> = {
  blog: 'Blog',
  faq: 'FAQ',
  pricing: 'Pricing',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
  signin: 'Sign In',
  signup: 'Sign Up',
}

/**
 * Auto-generates BreadcrumbList JSON-LD schema from the current URL path.
 * Renders nothing for the home page (single-item breadcrumbs are not useful).
 * Handles nested paths like /blog/some-slug correctly.
 */
export function BreadcrumbSchema() {
  const pathname = usePathname()
  const parts = pathname.split('/').filter(Boolean)
  const baseUrl = SITE.url

  // Home-only path: no breadcrumb needed (single-item lists are not useful)
  if (parts.length === 0) return null

  const items = [
    { position: 1, name: 'Home', item: baseUrl + '/' },
    ...parts.map((part, i) => {
      const slug = parts.slice(0, i + 1).join('/')
      // Use friendly label if available, otherwise decode the slug
      const label = PATH_LABELS[part] || part.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      return { position: i + 2, name: label, item: baseUrl + '/' + slug }
    }),
  ]

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map(({ position, name, item }) => ({
          '@type': 'ListItem',
          position,
          name,
          item,
        })),
      }}
    />
  )
}
