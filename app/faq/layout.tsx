import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description:
    'Answers to common questions about PetGen — how AI pet generation works, supported formats, installing pets in OpenAI Codex, pricing, and privacy.',
  path: '/faq',
})

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
