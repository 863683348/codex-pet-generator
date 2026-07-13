'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'

export default function TermsPage() {
  const { t } = useI18n()
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">{t('terms.title')}</h1>
        <p className="mt-2 text-sm text-text-muted">{t('terms.lastUpdated')}</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s1title')}</h2><p>By accessing or using PetGen, you agree to be bound by these Terms of Service. If you do not agree, do not use the service.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s2title')}</h2><p>PetGen is an AI-powered tool that converts uploaded images into pixel-art pet spritesheets compatible with OpenAI Codex. The service includes image processing, AI generation, and file download functionality.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s3title')}</h2><p>You may sign in using Google authentication. You are responsible for maintaining the confidentiality of your account and for all activities under your account.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s4title')}</h2><p>Paid plans are billed monthly. You may cancel at any time. Refunds are handled on a case-by-case basis. We reserve the right to change pricing with reasonable notice.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s5title')}</h2><p>You retain ownership of the images you upload and the pets generated. By using the service, you grant us the necessary rights to process your images for generation purposes.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s6title')}</h2><ul className="mt-2 list-disc pl-5 space-y-1"><li>Upload illegal, harmful, or infringing content</li><li>Attempt to reverse-engineer or abuse the service</li><li>Use automated scripts to interact with the service</li><li>Violate any applicable laws or regulations</li></ul></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s7title')}</h2><p>The PetGen service, including its code, design, and AI models, is our intellectual property. Generated pets may be used freely for personal and commercial purposes depending on your plan.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s8title')}</h2><p>PetGen is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the service.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s9title')}</h2><p>We reserve the right to suspend or terminate access to the service for violation of these terms. Upon termination, your data may be deleted.</p></section>
          <section><h2 className="mb-2 font-semibold text-text-primary">{t('terms.s10title')}</h2><p>For questions about these terms, contact us at <a href="mailto:cruzreese459228@gmail.com" className="text-primary underline">cruzreese459228@gmail.com</a>.</p></section>
        </div>
      </main>
      <Footer />
    </>
  )
}

