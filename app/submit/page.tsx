import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SubmitForm from '@/components/submit/SubmitForm'
import { getServerT } from '@/lib/i18n/server'

// Server component: owns SEO metadata and the chrome, delegates the interactive
// form to the client SubmitForm. AC-06 / AC-07.
export async function generateMetadata(): Promise<Metadata> {
  const t = await getServerT()
  return {
    title: `${t('submit.title')} | PetGen`,
    description: t('submit.desc'),
    alternates: {
      canonical: 'https://codexpetgenerator.com/submit',
    },
    openGraph: {
      title: `${t('submit.title')} | PetGen`,
      description: t('submit.desc'),
      url: 'https://codexpetgenerator.com/submit',
      siteName: 'Codex Pet Generator',
      locale: 'en_US',
      type: 'website',
    },
  }
}

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <SubmitForm />
      <Footer />
    </>
  )
}
