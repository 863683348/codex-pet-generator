import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GalleryContent from '@/components/gallery/GalleryContent'
import { loadSharedPets } from '@/lib/community/loaders'
import type { GalleryPet } from '@/types/community'

// Rebuild at most every 5 minutes instead of re-rendering on every hit.
// Signed URLs live for 1h, so a 5-minute ISR window never serves an expired
// URL while drastically cutting repeated origin renders (SEO crawlers hit
// this page constantly). Images still load straight from Supabase's CDN.
export const revalidate = 300

export const metadata: Metadata = {
  title: `Gallery · ${SITE.name}`,
  description: 'Browse pixel pets shared by the community — turn your photo into a pixel pet too.',
  openGraph: {
    title: `Gallery · ${SITE.name}`,
    description: 'Browse pixel pets shared by the community.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default async function GalleryPage() {
  const pets: GalleryPet[] = await loadSharedPets()

  return (
    <>
      <Navbar />
      <GalleryContent pets={pets} />
      <Footer />
    </>
  )
}
