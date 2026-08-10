import type { Metadata } from 'next'
import { getSupabaseServer } from '@/lib/supabase/server'
import { STORAGE_BUCKET } from '@/lib/utils/constants'
import { SITE } from '@/lib/seo'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GalleryContent, { type GalleryPet } from '@/components/gallery/GalleryContent'

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

async function loadSharedPets(): Promise<GalleryPet[]> {
  const supabase = getSupabaseServer()
  const { data: pets } = await supabase
    .from('pets')
    .select('id, display_name, share_count, base_image_path, created_at')
    .eq('is_public', true)
    .not('base_image_path', 'is', null)
    .order('created_at', { ascending: false })
    .limit(60)

  if (!pets) return []

  const result = await Promise.all(
    pets.map(async (p) => {
      let baseImageUrl: string | null = null
      if (p.base_image_path) {
        const { data } = await supabase.storage
          .from(STORAGE_BUCKET)
          .createSignedUrl(p.base_image_path, 3600)
        baseImageUrl = data?.signedUrl ?? null
      }
      return {
        id: p.id,
        displayName: p.display_name,
        shareCount: p.share_count ?? 0,
        baseImageUrl,
      }
    })
  )
  return result
}

export default async function GalleryPage() {
  const pets = await loadSharedPets()

  return (
    <>
      <Navbar />
      <GalleryContent pets={pets} />
      <Footer />
    </>
  )
}
