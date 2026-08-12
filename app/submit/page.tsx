import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SubmitForm from '@/components/submit/SubmitForm'
import { buildMetadata } from '@/lib/seo'

// Server component: owns SEO metadata and the chrome, delegates the interactive
// form to the client SubmitForm. AC-06 / AC-07.
export const metadata: Metadata = buildMetadata({
  title: 'Submit your pet',
  description:
    'Nominate one of your public pixel pets to be featured on the PetGen homepage gallery.',
  path: '/submit',
})

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <SubmitForm />
      <Footer />
    </>
  )
}
