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

// Pre-render the eight seeded collection slugs at build time; combined with
// revalidate=300 this gives SSG + ISR for every tag page (AC-05).
const COLLECTION_SLUGS = ['cat', 'dog', 'fantasy', 'robot', 'anime', 'game', 'celebrity', 'original']

export async function generateStaticParams() {
  return COLLECTION_SLUGS.map((slug) => ({ slug }))
}

export const revalidate = 300

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
