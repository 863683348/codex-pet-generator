import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GalleryContent from '@/components/gallery/GalleryContent'
import { loadCollectionBySlug } from '@/lib/community/loaders'
import { buildMetadata } from '@/lib/seo'
import { getServerT } from '@/lib/i18n/server'

interface PageProps {
  params: Promise<{ slug: string }>
}

// This page uses getServerT() (via generateMetadata) which reads the request
// cookie/accept-language. Force dynamic rendering so metadata is resolved
// per-request instead of being cached in one language by ISR/SSG.
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const { tag } = await loadCollectionBySlug(slug)
  if (!tag) return { title: 'Collection not found' }
  const t = await getServerT()
  const tagName = t(`collections.tagNames.${slug}`) || tag.name
  return buildMetadata({ title: `${tagName} pets`, path: `/collections/${slug}` })
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params
  const { tag, pets } = await loadCollectionBySlug(slug)
  if (!tag) notFound()

  // Reuse the gallery grid for the collection's public pets.
  return (
    <>
      <Navbar />
      <GalleryContent pets={pets} />
      <Footer />
    </>
  )
}
