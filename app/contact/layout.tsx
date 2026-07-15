import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with the PetGen team by email or GitHub. We usually reply within 24 hours.',
  path: '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
