import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Read the PetGen terms of service, subscription rules, acceptable use, and intellectual property guidelines.',
  path: '/terms',
})

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
