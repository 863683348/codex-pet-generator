'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'
import { en } from '@/lib/i18n/locales/en'
import { JsonLd } from '@/components/seo/JsonLd'

const FAQ_KEYS = [1,2,3,4,5,6,7,8,9,10]

const faqDict = en.faq as Record<string, string>
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_KEYS.map((i) => ({
    '@type': 'Question',
    name: faqDict['q' + i],
    acceptedAnswer: { '@type': 'Answer', text: faqDict['a' + i] },
  })),
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left text-sm font-medium text-text-primary"
      >
        {q}
        <ChevronDown
          className={'h-4 w-4 shrink-0 text-text-muted transition-transform ' + (open ? 'rotate-180' : '')}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-text-secondary">{a}</p>}
    </div>
  )
}

export default function FAQPage() {
  const { t } = useI18n()
  return (
    <>
      <Navbar />
      <JsonLd data={faqJsonLd} />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">{t('faq.title')}</h1>
        <p className="mt-2 text-sm text-text-muted">{t('faq.desc')}</p>
        <div className="mt-8">
          {FAQ_KEYS.map((i) => (
            <FAQItem key={i} q={t('faq.q' + i)} a={t('faq.a' + i)} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

