'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'

export default function PrivacyPage() {
  const { t } = useI18n()
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">{t('privacy.title')}</h1>
        <p className="mt-2 text-sm text-text-muted">{t('privacy.lastUpdated')}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s1title')}</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Account information</strong> — If you sign in with Google, we receive your name, email address, and profile picture from Google.</li>
              <li><strong>Uploaded images</strong> — The images you upload for pet generation are processed and temporarily stored to generate your pet.</li>
              <li><strong>Usage data</strong> — We use Google Analytics to collect anonymized usage data such as page views, feature usage, and error events.</li>
              <li><strong>Cookies</strong> — We use essential cookies for authentication and analytics cookies (with your consent where required).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s2title')}</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve PetGen</li>
              <li>Generate pixel pets from your uploaded images</li>
              <li>Authenticate your account and manage your subscription</li>
              <li>Analyze usage patterns to improve the product</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s3title')}</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> — for account management and file storage</li>
              <li><strong>Vercel</strong> — for hosting and deployment</li>
              <li><strong>Google Analytics</strong> — for website traffic analysis</li>
              <li><strong>OpenAI / Bailian (Alibaba Cloud)</strong> — for AI image generation</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s4title')}</h2>
            <p>Uploaded images are deleted after the generation process completes. Account data is retained until you delete your account. Analytics data is retained per the retention policies of Google Analytics.</p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s5title')}</h2>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics tracking</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">{t('privacy.s6title')}</h2>
            <p>If you have questions about this privacy policy, please contact us at <a href="mailto:ahmedlzany423@gmail.com" className="text-primary underline">ahmedlzany423@gmail.com</a>.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

