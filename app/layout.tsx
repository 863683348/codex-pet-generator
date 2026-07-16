import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { SITE } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'

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
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  // 仅在生产环境加载 GA：避免 localhost 开发与 Vercel preview 污染真实数据
  const isProd = process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'preview'
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        {GA_ID && isProd && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary grid-bg">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={siteJsonLd} />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
