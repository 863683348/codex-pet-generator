import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'
import { SITE } from '@/lib/seo'
import { JsonLd } from '@/components/seo/JsonLd'
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema'
import { ThemeProvider } from '@/lib/theme/ThemeProvider'
import CookieConsent from '@/components/layout/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Codex Pet Generator — Free AI Pet Maker`,
    template: `%s | ${SITE.titleBrand}`,
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
    title: `${SITE.fullName} — Turn Photos to Pixel Pets`,
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

// Self-hosted fonts via @fontsource (copied into app/fonts) — no Google Fonts
// request at build time or runtime. Identical families/weights as before.
const inter = localFont({
  src: [
    { path: './fonts/inter-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/inter-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/inter-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/inter-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-inter',
  display: 'swap',
})
const pressStart = localFont({
  src: './fonts/press-start-2p-latin-400-normal.woff2',
  weight: '400',
  variable: '--font-pixel',
  display: 'swap',
})

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
  const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT
  // 仅在生产环境加载 GA：避免 localhost 开发与 Vercel preview 污染真实数据
  const isProd = process.env.NODE_ENV === 'production' && process.env.VERCEL_ENV !== 'preview'
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${pressStart.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
        {/* No hreflang cluster: every language variant lives on the SAME URL
            (cookie-driven i18n), so there are no per-language URLs to declare.
            Emitting hreflang here pointed 7 languages at one canonical URL,
            which Google treats as an invalid cluster and discards. Once real
            per-locale routes (/zh, /ja, ...) ship, add a proper reciprocal
            cluster plus self-referencing entries. */}
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
        {ADSENSE_CLIENT && isProd && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary grid-bg">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={siteJsonLd} />
        <BreadcrumbSchema />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <CookieConsent />
        {/* Register service worker for PWA offline support */}
        {typeof window !== 'undefined' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js')
                      .then((reg) => console.log('SW registered:', reg.scope))
                      .catch((err) => console.log('SW registration failed:', err));
                  });
                }
              `,
            }}
          />
        )}

      </body>
    </html>
  )
}
