import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getSupabaseServer } from '@/lib/supabase/server'
import { STORAGE_BUCKET } from '@/lib/utils/constants'
import { SITE } from '@/lib/seo'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimationStatesGrid from '@/components/pet/AnimationStatesGrid'
import { Sparkles, ArrowLeft, LayoutGrid } from 'lucide-react'

interface PageProps {
  params: Promise<{ id: string }>
}

async function loadPet(id: string) {
  const supabase = getSupabaseServer()
  const { data: pet } = await supabase
    .from('pets')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (!pet || !pet.is_public) return null

  // Generate short-lived signed URLs so anonymous visitors can view the
  // assets without relying on the storage bucket being public.
  let baseUrl: string | null = null
  let spriteUrl: string | null = null
  if (pet.base_image_path) {
    const { data } = await supabase.storage.from(STORAGE_BUCKET).createSignedUrl(pet.base_image_path, 3600)
    baseUrl = data?.signedUrl ?? null
  }
  if (pet.spritesheet_path) {
    const { data } = await supabase.storage.from(STORAGE_BUCKET).createSignedUrl(pet.spritesheet_path, 3600)
    spriteUrl = data?.signedUrl ?? null
  }

  return { pet, baseUrl, spriteUrl }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const loaded = await loadPet(id)
  if (!loaded) {
    return { title: 'Pet not found · ' + SITE.name }
  }
  const { pet, baseUrl } = loaded
  const name = pet.display_name || 'Pixel Pet'
  const desc = pet.description || 'A pixel-art pet generated from a photo, ready for OpenAI Codex.'
  return {
    title: `${name} · Pixel Pet`,
    description: desc,
    openGraph: {
      title: `${name} · ${SITE.name}`,
      description: desc,
      images: baseUrl ? [{ url: baseUrl }] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${name} · ${SITE.name}`,
      description: desc,
      images: baseUrl ? [baseUrl] : undefined,
    },
  }
}

export default async function PublicPetPage({ params }: PageProps) {
  const { id } = await params
  const loaded = await loadPet(id)
  if (!loaded) notFound()

  const { pet, spriteUrl } = loaded
  const name = pet.display_name || 'Pixel Pet'
  const desc = pet.description || 'A pixel-art pet generated from a photo, ready for OpenAI Codex.'

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {SITE.name}
        </Link>

        <div className="mb-6 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <h1 className="font-pixel text-base text-text-primary">{name}</h1>
        </div>
        <p className="mb-8 text-sm leading-relaxed text-text-secondary">{desc}</p>

        {spriteUrl ? (
          <div className="glass-card rounded-lg p-6">
            <AnimationStatesGrid spritesheetUrl={spriteUrl} />
          </div>
        ) : (
          <div className="glass-card rounded-lg p-8 text-center text-sm text-text-muted">
            Animation preview is being prepared…
          </div>
        )}

        <div className="mt-6 flex items-center justify-between rounded-lg border border-border bg-bg-surface px-5 py-3">
          <span className="text-xs text-text-muted">
            Shared {pet.share_count ?? 0} {pet.share_count === 1 ? 'time' : 'times'}
          </span>
          <Link
            href="/signup"
            className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" />
            Create your own
          </Link>
          <Link
            href="/gallery"
            className="flex items-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-4 py-2 text-sm font-medium text-text-primary transition-colors hover:border-accent"
          >
            <LayoutGrid className="h-4 w-4" />
            Explore gallery
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
