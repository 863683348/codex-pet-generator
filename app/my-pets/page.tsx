'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Images,
  Share2,
  Globe,
  Lock,
  Check,
  Loader2,
  ArrowRight,
  LogIn,
  Link2,
  Copy,
  Trash2,
} from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'
import DownloadButton from '@/components/pet/DownloadButton'

interface MyPet {
  id: string
  displayName: string | null
  status: string
  isPublic: boolean
  shareCount: number
  baseImageUrl: string | null
  hasZip: boolean
  createdAt: string
}

function ReadyBadge({ t }: { t: ReturnType<typeof useI18n>['t'] }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-success/40 bg-success/15 px-2.5 py-1 text-[10px] font-medium text-success shadow-sm">
      <Check className="h-3 w-3" />
      {t('myPets.readyToInstall')}
    </span>
  )
}

function StatusBadge({ status, t }: { status: string; t: ReturnType<typeof useI18n>['t'] }) {
  const s = (status || '').toLowerCase()
  if (s === 'failed') {
    return (
      <span className="rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-medium text-red-400">
        {t('error.unknown')}
      </span>
    )
  }
  if (s === 'processing' || s === 'awaiting_approval') {
    return (
      <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-medium text-amber-400">
        {t('workspace.generatingBase')}
      </span>
    )
  }
  return <ReadyBadge t={t} />
}

export default function MyPetsPage() {
  const { t } = useI18n()
  const [sessionChecked, setSessionChecked] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [pets, setPets] = useState<MyPet[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busyId, setBusyId] = useState<string | null>(null)
  const [toast, setToast] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) {
        setAuthed(false)
        setLoading(false)
        setSessionChecked(true)
        return
      }
      setAuthed(true)
      const res = await fetch('/api/pets/mine', { headers: { authorization: 'Bearer ' + token } })
      if (!res.ok) {
        const d = await res.json().catch(() => ({}))
        setError(d.message || t('error.unknown'))
        setLoading(false)
        return
      }
      const d = await res.json()
      setPets(d.pets || [])
    } catch {
      setError(t('error.dbError'))
    } finally {
      setLoading(false)
      setSessionChecked(true)
    }
  }, [t])

  useEffect(() => {
    load()
  }, [load])

  const share = async (pet: MyPet) => {
    if (busyId) return
    setBusyId(pet.id)
    const shareUrl = `${window.location.origin}/p/${pet.id}`
    const resultTab = typeof window !== 'undefined' ? window.open('', '_blank') : null
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) return
      const res = await fetch(`/api/pets/${pet.id}/share`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + token },
        body: JSON.stringify({ platform: 'gallery' }),
      })
      if (!res.ok) {
        setToast(t('submit.error'))
        setTimeout(() => setToast(''), 2500)
        return
      }
      const d = await res.json()
      setPets((prev) =>
        prev.map((p) =>
          p.id === pet.id
            ? { ...p, isPublic: d.isPublic ?? true, shareCount: p.shareCount + (d.awarded > 0 ? 1 : 0) }
            : p
        )
      )
      setToast(d.awarded > 0 ? `${t('submit.success')} +${d.awarded} pts` : 'Already shared')
      setTimeout(() => setToast(''), 2500)
      window.dispatchEvent(new CustomEvent('petgen:points-updated'))
      if (resultTab) resultTab.location.href = shareUrl
      else window.open(shareUrl, '_blank')
    } catch {
      setToast(t('submit.error'))
      setTimeout(() => setToast(''), 2500)
    } finally {
      setBusyId(null)
    }
  }

  const copyLink = async (id: string) => {
    const url = `${window.location.origin}/p/${id}`
    try {
      await navigator.clipboard.writeText(url)
      setCopiedId(id)
      setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 2000)
    } catch {}
  }

  const del = async (pet: MyPet) => {
    if (busyId) return
    if (typeof window !== 'undefined' && !window.confirm(t('myPets.deleteConfirm'))) return
    setBusyId(pet.id)
    try {
      const supabase = getSupabaseClient()
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) return
      const res = await fetch(`/api/pets/${pet.id}`, {
        method: 'DELETE',
        headers: { authorization: 'Bearer ' + token },
      })
      if (!res.ok) {
        setToast(t('myPets.deleteFailed'))
        setTimeout(() => setToast(''), 2500)
        return
      }
      setPets((prev) => prev.filter((p) => p.id !== pet.id))
      setToast(t('myPets.deleted'))
      setTimeout(() => setToast(''), 2500)
    } catch {
      setToast(t('myPets.deleteFailed'))
      setTimeout(() => setToast(''), 2500)
    } finally {
      setBusyId(null)
    }
  }

  const showToast = toast !== ''

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <div className="mb-6 flex items-center gap-2 sm:mb-8">
          <Images className="h-6 w-6 text-primary" />
          <h1 className="font-pixel text-lg text-text-primary">{t('nav.myPets')}</h1>
        </div>

        {showToast && (
          <div className="mb-6 flex items-center gap-2 rounded-lg border border-success/30 bg-success/10 px-4 py-2.5">
            <Check className="h-4 w-4 text-success" />
            <span className="font-pixel text-[10px] text-success">{toast}</span>
          </div>
        )}

        {!sessionChecked && (
          <div className="flex items-center justify-center py-20 text-text-muted">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}

        {sessionChecked && !authed && (
          <div className="glass-card rounded-lg p-8 text-center sm:p-10">
            <LogIn className="mx-auto mb-4 h-8 w-8 text-text-muted" />
            <h2 className="mb-2 font-pixel text-sm text-text-primary">{t('auth.signInTitle')}</h2>
            <p className="mb-6 text-sm text-text-secondary">{t('workspace.allStates')}</p>
            <Link
              href="/signin"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              <LogIn className="h-4 w-4" />
              {t('auth.signIn')}
            </Link>
          </div>
        )}

        {authed && loading && (
          <div className="flex items-center justify-center py-20 text-text-muted">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        )}

        {authed && !loading && error && (
          <div className="glass-card rounded-lg p-8 text-center text-sm text-text-secondary">
            {error}
            <button
              onClick={load}
              className="ml-3 rounded-lg border border-border bg-bg-elevated px-3 py-1.5 text-xs text-text-primary transition-colors hover:border-accent"
            >
              {t('errorCard.retry')}
            </button>
          </div>
        )}

        {authed && !loading && !error && pets.length === 0 && (
          <div className="glass-card rounded-lg p-8 text-center sm:p-10">
            <Images className="mx-auto mb-4 h-8 w-8 text-text-muted" />
            <h2 className="mb-2 font-pixel text-sm text-text-primary">{t('myPets.emptyTitle')}</h2>
            <p className="mb-6 text-sm text-text-secondary">{t('myPets.emptyDesc')}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {t('gallery.createCta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        {authed && !loading && !error && pets.length > 0 && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {pets.map((pet) => {
              const canAct = pet.status.toLowerCase() === 'completed'
              const shared = pet.isPublic
              return (
                <div
                  key={pet.id}
                  className="glass-card flex flex-col overflow-hidden rounded-lg transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-square bg-bg-elevated">
                    {pet.baseImageUrl ? (
                      <Image
                        src={pet.baseImageUrl}
                        alt={pet.displayName || t('gallery.untitled')}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-text-muted">
                        <StatusBadge status={pet.status} t={t} />
                      </div>
                    )}

                    <div className="absolute right-2 top-2">
                      <StatusBadge status={pet.status} t={t} />
                    </div>

                    <button
                      onClick={() => del(pet)}
                      disabled={busyId === pet.id}
                      title={t('myPets.delete')}
                      aria-label={t('myPets.delete')}
                      className="absolute left-2 top-2 rounded-md bg-black/50 p-1.5 text-text-muted backdrop-blur transition-colors hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {busyId === pet.id ? (
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      ) : (
                        <Trash2 className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="truncate font-pixel text-sm text-text-primary">
                      {pet.displayName || t('gallery.untitled')}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-text-muted">
                      {shared ? (
                        <span className="inline-flex items-center gap-1 text-success">
                          <Globe className="h-3.5 w-3.5" />
                          {t('myPets.public')}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1">
                          <Lock className="h-3.5 w-3.5" />
                          {t('myPets.private')}
                        </span>
                      )}
                      {pet.shareCount > 0 && (
                        <span className="text-text-secondary">
                          · {t('myPets.shares', { count: pet.shareCount })}
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
                      <DownloadButton
                        href={`/api/pets/${pet.id}/download`}
                        petId={pet.id}
                        size="md"
                        disabled={!canAct}
                        className="w-full"
                      />

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => share(pet)}
                          disabled={!canAct || busyId === pet.id}
                          className="flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          {busyId === pet.id ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : shared ? (
                            <Check className="h-3.5 w-3.5 text-success" />
                          ) : (
                            <Share2 className="h-3.5 w-3.5 text-accent" />
                          )}
                          {shared ? t('myPets.public') : t('submit.title')}
                        </button>

                        {shared ? (
                          <button
                            onClick={() => copyLink(pet.id)}
                            className="flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent"
                          >
                            {copiedId === pet.id ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-success" />
                                {t('code.copied')}
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" />
                                {t('myPets.copyLink')}
                              </>
                            )}
                          </button>
                        ) : (
                          <a
                            href={`/p/${pet.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex min-h-[40px] items-center justify-center gap-1.5 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-accent"
                          >
                            <Link2 className="h-3.5 w-3.5" />
                            {t('myPets.view')}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
