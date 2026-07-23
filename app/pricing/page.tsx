'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PricingSection from '@/components/layout/PricingSection'
import { useI18n } from '@/lib/i18n'

export default function PricingPage() {
  const { t } = useI18n()

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="mb-10 text-center">
          <h1 className="font-pixel text-base text-text-primary sm:text-lg">{t('pricing.title')}</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-text-secondary">{t('pricing.desc')}</p>
        </section>

        <PricingSection />
      </main>
      <Footer />
    </>
  )
}
