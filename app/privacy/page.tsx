'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">Privacy Policy</h1>
        <p className="mt-2 text-sm text-text-muted">Last updated: July 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 font-semibold text-text-primary">1. Information We Collect</h2>
            <p>
              When you use PetGen, we may collect the following types of information:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Account information</strong> — If you sign in with Google, we receive your name, email address, and profile picture from Google.</li>
              <li><strong>Uploaded images</strong> — The images you upload for pet generation are processed and temporarily stored to generate your pet.</li>
              <li><strong>Usage data</strong> — We use PostHog and Google Analytics to collect anonymized usage data such as page views, feature usage, and error events.</li>
              <li><strong>Cookies</strong> — We use essential cookies for authentication and analytics cookies (with your consent where required).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve PetGen</li>
              <li>Generate pixel pets from your uploaded images</li>
              <li>Authenticate your account and manage your subscription</li>
              <li>Analyze usage patterns to improve the product</li>
              <li>Respond to your support requests</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">3. Data Sharing</h2>
            <p>We do not sell your personal data. We may share data with:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li><strong>Supabase</strong> — for account management and file storage</li>
              <li><strong>Vercel</strong> — for hosting and deployment</li>
              <li><strong>PostHog</strong> — for product analytics</li>
              <li><strong>Google Analytics</strong> — for website traffic analysis</li>
              <li><strong>OpenAI / Bailian (Alibaba Cloud)</strong> — for AI image generation (images are processed but not stored by these providers)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">4. Data Retention</h2>
            <p>
              Uploaded images are deleted after the generation process completes. Account data is retained until you delete your account. Analytics data is retained per the retention policies of PostHog and Google Analytics.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">5. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request deletion of your data</li>
              <li>Opt out of analytics tracking</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-text-primary">6. Contact</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:support@petgen.app" className="text-primary underline">support@petgen.app</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
