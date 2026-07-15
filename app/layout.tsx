import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { PostHogProvider } from '@/lib/posthog'
import { SITE } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.fullName} — Turn a Photo Into a Pixel-Art Coding Companion`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SITE.keywords,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'technology',
  alternates: { canonical: SITE.url + '/' },
  openGraph: {
    type: 'website',
    url: SITE.url + '/',
    siteName: SITE.fullName,
    title: `${SITE.fullName} — Turn a Photo Into a Pixel-Art Coding Companion`,
    description: SITE.description,
    locale: SITE.locale,
    images: [
      { url: '/og-image.png', width: 1200, height: 630, alt: SITE.fullName },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.fullName} — AI Pet Generator`,
    description: SITE.description,
    images: ['/og-image.png'],
  },
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
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: { icon: '/icon.svg', apple: '/icon.svg' },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#6C5CE7',
  width: 'device-width',
  initialScale: 1,
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.fullName,
  url: SITE.url,
  logo: SITE.url + '/icon.svg',
  description: SITE.description,
}

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE.fullName,
  url: SITE.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EQ67FK64M9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EQ67FK64M9');
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary grid-bg">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={siteJsonLd} />
        <PostHogProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </PostHogProvider>
      </body>
    </html>
  )
}
