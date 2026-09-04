import type { Metadata } from 'next'

// Central SEO configuration shared across metadata, sitemap, robots and manifest.
// The canonical production URL is injected via NEXT_PUBLIC_SITE_URL (set in Vercel /
// .env.local). Falls back to a sane default so local builds still produce valid tags.
const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://codexpetgenerator.com'

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '')

export const SITE = {
  // Short form used for PWA manifest short_name and compact UI labels.
  name: 'PetGen',
  // Full brand used in every SERP-facing surface (title suffix, OG, JSON-LD).
  // Must match the domain so users who search "codex pet ..." recognise the result.
  fullName: 'Codex Pet Generator',
  titleBrand: 'Codex Pet Generator',
  url: SITE_URL,
  description:
    'Free AI pet generator — turn any photo into a custom pixel-art pet (spritesheet.webp + pet.json) for OpenAI Codex. Upload a picture, approve the character, and download your installable coding companion. Fast, no sign-up, works for cats, dogs, and fantasy pets.',
  keywords: [
    'AI pet generator',
    'pet avatar generator',
    'pixel pet maker',
    'turn photo into pixel art',
    'AI pet sprite generator',
    'animated pet avatar',
    'pet spritesheet generator',
    'free pixel pet generator',
    'pet profile picture maker',
    'coding companion pet',
    'OpenAI Codex pet',
    'installable desktop pet',
    'pet Discord avatar',
    'AI pet character generator',
    'PetGen',
    'Codex Pet Generator',
  ],
  locale: 'en_US',
}

export type SeoInput = {
  title?: string
  description?: string
  path?: string
  type?: 'website' | 'article'
  publishedTime?: string
  keywords?: string[]
}

export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  publishedTime,
  keywords,
}: SeoInput = {}): Metadata {
  const desc = description || SITE.description
  const url = SITE.url + (path === '/' ? '/' : path)

  // SERP titles render at roughly 580px (~60 chars). Appending the brand to an
  // already-long title pushes the keyword tail past the truncation point, which
  // costs more clicks than the brand impression is worth. So: append the brand
  // only when the result still fits; otherwise ship the focused title as-is.
  const baseTitle = title || `${SITE.fullName} — AI Pet Generator`
  const brandSuffix = ` | ${SITE.titleBrand}`
  const fullTitle =
    baseTitle.length + brandSuffix.length <= 60 ? baseTitle + brandSuffix : baseTitle

  const og = {
    type,
    url,
    siteName: SITE.fullName,
    title: fullTitle,
    description: desc,
    locale: SITE.locale,
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: SITE.fullName },
    ],
  }
  if (type === 'article' && publishedTime) {
    ;(og as { publishedTime?: string }).publishedTime = publishedTime
  }

  const twitter = {
    card: 'summary_large_image' as const,
    title: fullTitle,
    description: desc,
    images: ['/og-image.png'],
  }

  return {
    // `absolute` bypasses the root layout title template so the length rule above
    // is the single source of truth for how a title reaches the SERP.
    title: { absolute: fullTitle },
    description: desc,
    keywords: keywords || SITE.keywords,
    alternates: { canonical: url },
    openGraph: og as Metadata['openGraph'],
    twitter: twitter as Metadata['twitter'],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  }
}
