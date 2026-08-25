'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Check, AlertCircle, Loader2, Send } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'

interface MyPet {
  id: string
  displayName: string | null
  isPublic: boolean
  baseImageUrl: string | null
}

type SubmitResult = 'idle' | 'success' | 'already' | 'notPublic' | 'error'

// Client form for nominating one of the user's public pets to the homepage
// featured queue. Reads the session token client-side and talks to
// /api/pets/mine + /api/submissions. All submission-result branches (201 / 409 /
// 400 / 403 / 404) are handled (AC-06, AC-07).
export default function SubmitForm() {
  const { t } = useI18n()

  const [loading, setLoading] = useState(true)
  const [authed, setAuthed] = useState(false)
  const [pets, setPets] = useState<MyPet[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<SubmitResult>('idle')

  const loadMine = useCallback(async () => {
    setLoading(true)
    const supabase = getSupabaseClient()
    const { data: sessionData } = await supabase.auth.getSession()
    const token = sessionData.session?.access_token
    if (!token) {
      setAuthed(false)
      setLoading(false)
      return
    }
    try {
      const res = await fetch('/api/pets/mine', {
        headers: { authorization: 'Bearer ' + token },
      })
      if (res.status === 401 || !res.ok) {
        setAuthed(false)
        setLoading(false)
        return
      }
      const data = await res.json()
      const all: MyPet[] = (data.pets ?? []).map((p: MyPet) => ({
        id: p.id,
        displayName: p.displayName,
        isPublic: !!p.isPublic,
        baseImageUrl: p.baseImageUrl,
      }))
      // Only pets that are public AND have a generated image can be featured.
      const publicPets = all.filter((p) => p.isPublic && p.baseImageUrl)
      setPets(publicPets)
      setSelectedId(publicPets[0]?.id ?? null)
      setAuthed(true)
    } catch {
      setAuthed(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadMine()
  }, [loadMine])

  const handleSubmit = async () => {
    if (!selectedId || submitting) return
    setSubmitting(true)
    setResult('idle')

    const supabase = getSupabaseClient()
    const { data: sessionData } = await supabase.auth.getSession()
    const token = sessionData.session?.access_token
    if (!token) {
      setAuthed(false)
      setSubmitting(false)
      return
    }

    try {
      const res = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + token },
        body: JSON.stringify({ petId: selectedId, message: message.trim() || undefined }),
      })

      if (res.status === 201) {
        setResult('success')
      } else if (res.status === 409) {
        // Already submitted this pet — surface the existing record (ADR-003).
        setResult('already')
      } else if (res.status === 400) {
        // 400 = pet not public / not shareable (or missing petId) → prompt to share first.
        setResult('notPublic')
      } else {
        // 403 / 404 / 5xx / anything else
        setResult('error')
      }
    } catch {
      setResult('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <div className="mb-8 flex items-center gap-2">
        <Send className="h-6 w-6 text-primary" />
        <h1 className="font-pixel text-lg text-text-primary">{t('submit.title')}</h1>
      </div>
      <p className="mb-8 text-sm text-text-secondary">{t('submit.desc')}</p>

      {loading && (
        <div className="flex items-center gap-2 text-text-muted">
          <Loader2 className="h-4 w-4 animate-spin" />
          <span className="text-sm">{t('submit.loading')}</span>
        </div>
      )}

      {!loading && !authed && (
        <div className="glass-card rounded-lg p-8 text-center">
          <AlertCircle className="mx-auto mb-4 h-8 w-8 text-text-muted" />
          <p className="mb-6 text-sm text-text-secondary">{t('submit.signInRequired')}</p>
          <Link
            href="/signin"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            {t('nav.signIn')}
          </Link>
        </div>
      )}

      {!loading && authed && (
        <div className="glass-card rounded-lg p-6">
          {result === 'success' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-success/30 bg-success/10 px-4 py-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
              <span className="text-sm text-success">{t('submit.success')}</span>
            </div>
          )}
          {result === 'already' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm text-text-primary">{t('submit.alreadySubmitted')}</span>
            </div>
          )}
          {result === 'notPublic' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 px-4 py-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
              <span className="text-sm text-text-primary">
                {t('submit.notPublic')}{' '}
                <Link href="/my-pets" className="text-accent hover:underline">
                  /my-pets
                </Link>
              </span>
            </div>
          )}
          {result === 'error' && (
            <div className="mb-6 flex items-start gap-3 rounded-lg border border-danger/30 bg-danger/10 px-4 py-3">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-danger" />
              <span className="text-sm text-text-primary">{t('submit.error')}</span>
            </div>
          )}

          {pets.length === 0 ? (
            <div className="rounded-lg border border-border bg-bg-surface px-4 py-6 text-center text-sm text-text-secondary">
              {t('submit.notPublic')}{' '}
              <Link href="/my-pets" className="text-accent hover:underline">
                /my-pets
              </Link>
            </div>
          ) : (
            <>
              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-muted">
                {t('submit.selectPet')}
              </label>
              <div
                className="mb-5 flex flex-col gap-2"
                role="radiogroup"
                aria-label={t('submit.selectPet')}
              >
                {pets.map((pet) => {
                  const active = selectedId === pet.id
                  return (
                    <button
                      key={pet.id}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setSelectedId(pet.id)}
                      className={`flex min-h-[44px] items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                        active
                          ? 'border-accent bg-accent/10 text-text-primary'
                          : 'border-border bg-bg-surface text-text-secondary hover:border-accent hover:text-text-primary'
                      }`}
                    >
                      <span className="truncate font-pixel text-[11px]">
                        {pet.displayName || t('gallery.untitled')}
                      </span>
                      {active && <Check className="h-4 w-4 shrink-0 text-accent" />}
                    </button>
                  )
                })}
              </div>

              <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-text-muted">
                {t('submit.messagePlaceholder')}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t('submit.messagePlaceholder')}
                rows={3}
                className="mb-2 w-full resize-none rounded-lg border border-border bg-bg-surface px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none"
              />

              <p className="mb-5 text-xs text-text-muted">{t('submit.pickHint')}</p>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={!selectedId || submitting}
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
                {t('submit.submitBtn')}
              </button>

              {result === 'success' && (
                <button
                  type="button"
                  onClick={() => setResult('idle')}
                  className="ml-3 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-border bg-bg-surface px-4 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:border-accent hover:text-text-primary"
                >
                  {t('submit.selectPet')}
                </button>
              )}
            </>
          )}
        </div>
      )}
    </main>
  )
}
