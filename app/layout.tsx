import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Codex Pet Generator — Turn Your Photo Into a Coding Companion',
  description: 'Upload an image, get a custom animated pixel pet for OpenAI Codex desktop app.',
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
      </head>
      <body className="min-h-screen bg-bg-base text-text-primary grid-bg">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
