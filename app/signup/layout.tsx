import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Create Your Account',
  description:
    'Sign up for PetGen and start turning your photos into animated pixel-art pets for OpenAI Codex.',
  path: '/signup',
})

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
