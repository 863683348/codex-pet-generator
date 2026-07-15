import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Sign In',
  description:
    'Sign in to PetGen to generate, approve, and download your pixel-art coding companions.',
  path: '/signin',
})

export default function SigninLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
