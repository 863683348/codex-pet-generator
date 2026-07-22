'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import UploadDropzone from '@/components/pet/UploadDropzone'
import StepIndicator from '@/components/pet/StepIndicator'
import GenerationWorkspace from '@/components/pet/GenerationWorkspace'
import HowItWorks from '@/components/layout/HowItWorks'
import WhatYouGet from '@/components/layout/WhatYouGet'
import PricingSection from '@/components/layout/PricingSection'
import PixelPet from '@/components/pet/PixelPet'
import { PetTask } from '@/types/pet'
import { POLL_INTERVAL } from '@/lib/utils/constants'
import { useI18n } from '@/lib/i18n'
import { Sparkles, Zap, FileImage, FileJson, Play } from 'lucide-react'
import { getSupabaseClient } from '@/lib/supabase/client'
import type { User } from '@supabase/supabase-js'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE } from '@/lib/seo'

// Standalone SVG pet used as the demo "base" image (no backend needed).
const DEMO_BASE =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' shape-rendering='crispEdges'>" +
      "<polygon points='12,24 12,6 30,20' fill='#6C5CE7'/>" +
      "<polygon points='52,24 52,6 34,20' fill='#6C5CE7'/>" +
      "<polygon points='17,20 17,11 25,19' fill='#0F0F23'/>" +
      "<polygon points='47,20 47,11 39,19' fill='#0F0F23'/>" +
      "<rect x='11' y='18' width='42' height='38' rx='12' fill='#6C5CE7'/>" +
      "<rect x='21' y='32' width='8' height='10' rx='4' fill='#0F0F23'/>" +
      "<rect x='35' y='32' width='8' height='10' rx='4' fill='#0F0F23'/>" +
      "<rect x='23' y='34' width='3' height='3' fill='#fff'/>" +
      "<rect x='37' y='34' width='3' height='3' fill='#fff'/>" +
      "<polygon points='30,44 34,44 32,47' fill='#FF6B6B'/>" +
      "<rect x='31' y='48' width='2' height='2' fill='#0F0F23'/>" +
      '</svg>'
  )

const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.fullName,
  url: SITE.url,
  description: SITE.description,
  operatingSystem: 'Web, macOS, Windows, Linux',
  applicationCategory: 'MultimediaApplication',
  offers: [
    { '@type': 'Offer', name: 'Starter', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Pro', price: '9', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Unlimited', price: '29', priceCurrency: 'USD' },
  ],
  publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
}

export default function Home() {
  const { t } = useI18n()
  const [task, setTask] = useState<PetTask | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [isApproving, setIsApproving] = useState(false)
  const [regenerating, setRegenerating] = useState(false)
  const [demo, setDemo] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const tokenRef = useRef<string | null>(null)
  const [usageRemaining, setUsageRemaining] = useState<number | null>(null)
  const router = useRouter()
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Build the Authorization header from the live session token. Uses a ref so
  // the long-lived polling callback always sees the current token (no stale
  // closure from useCallback's empty deps).
  const authHeaders = (): Record<string, string> =>
    tokenRef.current ? { authorization: 'Bearer ' + tokenRef.current } : {}

  const startPolling = useCallback((taskId: string) => {
    if (pollRef.current) clearInterval(pollRef.current)

    const poll = async () => {
      try {
        const res = await fetch(`/api/pets/${taskId}`, { headers: authHeaders() })
        if (!res.ok) return
        const data = await res.json()
        setTask(data)

        if (data.status === 'completed' || data.status === 'failed') {
          if (pollRef.current) {
            clearInterval(pollRef.current)
            pollRef.current = null
          }
        }
      } catch (err) {
        console.error('Poll error:', err)
      }
    }

    poll()
    pollRef.current = setInterval(poll, POLL_INTERVAL)
  }, [])

  useEffect(() => {
    const supabase = getSupabaseClient()
    if (!supabase) return

    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      tokenRef.current = session?.access_token ?? null
      if (session?.access_token) {
        try {
          const res = await fetch('/api/pets/usage', { headers: { authorization: 'Bearer ' + session.access_token } })
          if (res.ok) { const d = await res.json(); setUsageRemaining(d.remaining) }
        } catch {}
      }
    }
    checkAuth()

    // Keep the token ref fresh when the user signs in/out or the session is
    // refreshed by Supabase (e.g. after the 1-hour access_token expires).
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      tokenRef.current = session?.access_token ?? null
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current)
    }
  }, [])

  const handleFileSelected = async (file: File) => {
    if (!user) {
      router.push('/signup')
      return
    }

    // Always use a live token: the cached ref may hold an expired access_token.
    // getSession() will auto-refresh if a refresh_token is available.
    const supabase = getSupabaseClient()
    if (!supabase) {
      setTask({
        taskId: '', status: 'failed', progress: 0, baseImageUrl: null, spritesheetUrl: null, zipUrl: null, petJson: null,
        error: 'Supabase client not available in this environment',
        errorCode: 'INTERNAL',
      })
      return
    }
    const { data: { session } } = await supabase.auth.getSession()
    const liveToken = session?.access_token ?? null
    tokenRef.current = liveToken

    if (!liveToken) {
      // Session could not be refreshed (e.g. user signed out elsewhere).
      setUser(null)
      router.push('/signup')
      return
    }

    if (usageRemaining !== null && usageRemaining <= 0) {
      setTask({ taskId: '', status: 'failed', progress: 0, baseImageUrl: null, spritesheetUrl: null, zipUrl: null, petJson: null, error: t('error.quotaExceeded'), errorCode: 'LIMIT_REACHED' })
      return
    }
    setIsUploading(true)
    setTask(null)

    try {
      const formData = new FormData()
      formData.append('image', file)

      // Bounded wait: if the serverless function hangs (e.g. Vercel plan
      // timeout, slow AI provider), abort after 90s so the user gets a clear
      // error instead of staring at "Generating base" forever.
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 90_000)
      let res: Response
      try {
        res = await fetch('/api/pets/generate', {
          method: 'POST',
          body: formData,
          headers: authHeaders(),
          signal: controller.signal,
        })
      } finally {
        clearTimeout(timeoutId)
      }

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw {
          message: err.message || 'Upload failed',
          code: err.error || 'INTERNAL',
          details: err.details,
        }
      }

      const data = await res.json()
      // Use the status the backend actually returned. With the synchronous base
      // generation in place, the API can return 'awaiting_approval' directly,
      // and we should jump straight to the base preview without waiting for
      // the first poll to catch up.
      const initialStatus: 'processing' | 'awaiting_approval' =
        data.status === 'awaiting_approval' ? 'awaiting_approval' : 'processing'
      setTask({
        taskId: data.taskId,
        status: initialStatus,
        progress: 15,
        baseImageUrl: null,
        spritesheetUrl: null,
        zipUrl: null,
        petJson: null,
        error: null,
      })
      startPolling(data.taskId)
    } catch (err) {
      const error = err as { message?: string; code?: string; details?: string }
      const code = error.code || 'INTERNAL'

      // Backend / OpenAI not configured: instead of failing, drop the user
      // into demo mode using the image they just uploaded so they still see
      // the full flow (base -> 9 states -> done). They can configure real
      // credentials later to unlock actual pixel generation.
      if (code === 'MISSING_BACKEND_CONFIG' || code === 'OPENAI_NOT_CONFIGURED') {
        runDemoWithImage(file)
        return
      }

      const message = error.message || t('error.generationFailed')
      const userMessage = localizeError(code, message, t)

      setTask({
        taskId: '',
        status: 'failed',
        progress: 0,
        baseImageUrl: null,
        spritesheetUrl: null,
        zipUrl: null,
        petJson: null,
        error: userMessage,
        errorCode: code,
      })
    } finally {
      setIsUploading(false)
    }
  }

  const handleApprove = async () => {
    if (!task?.taskId) return
    setIsApproving(true)
    try {
      if (demo) {
        setTask(prev => (prev ? { ...prev, status: 'generating_animation' } : null))
        return
      }
      const res = await fetch(`/api/pets/${task.taskId}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify({ approved: true }),
      })
      if (!res.ok) throw new Error('Approve failed')
      setTask(prev => (prev ? { ...prev, status: 'generating_animation' } : null))
      startPolling(task.taskId)
    } catch (err) {
      console.error('Approve error:', err)
    } finally {
      setIsApproving(false)
    }
  }

  const handleReject = async () => {
    if (!task?.taskId) return
    setRegenerating(true)
    try {
      if (demo) {
        setTask(prev => (prev ? { ...prev, status: 'processing' } : null))
        return
      }
      const res = await fetch(`/api/pets/${task.taskId}/approve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders() },
        body: JSON.stringify({ approved: false }),
      })
      if (!res.ok) throw new Error('Regenerate failed')
      setTask(prev => (prev ? { ...prev, status: 'processing' } : null))
      startPolling(task.taskId)
    } catch (err) {
      console.error('Regenerate error:', err)
    } finally {
      setRegenerating(false)
    }
  }

  // Demo mode driven by a real uploaded file: read it as a data URL so the
  // "base" preview actually shows the user's own image.
  const runDemoWithImage = (file: File) => {
    setDemo(true)
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : DEMO_BASE
      setTask({
        taskId: 'demo',
        status: 'processing',
        progress: 15,
        baseImageUrl: null,
        spritesheetUrl: null,
        zipUrl: null,
        petJson: null,
        error: null,
      })
      setTimeout(() => {
        setTask(prev =>
          prev ? { ...prev, status: 'awaiting_approval', baseImageUrl: dataUrl } : null
        )
      }, 3500)
    }
    reader.onerror = () => {
      // Fallback to the built-in SVG mascot if the file can't be read.
      handleDemo()
    }
    reader.readAsDataURL(file)
  }

  // Demo mode: drive the flow client-side with no backend.
  const handleDemo = () => {
    setDemo(true)
    setTask({
      taskId: 'demo',
      status: 'processing',
      progress: 15,
      baseImageUrl: null,
      spritesheetUrl: null,
      zipUrl: null,
      petJson: null,
      error: null,
    })
    setTimeout(() => {
      setTask(prev =>
        prev
          ? { ...prev, status: 'awaiting_approval', baseImageUrl: DEMO_BASE }
          : null
      )
    }, 3500)
  }

  // Demo: flip to completed once the 9 states have had time to reveal.
  useEffect(() => {
    if (demo && task?.status === 'generating_animation') {
      const t = setTimeout(() => {
        setTask(prev =>
          prev
            ? {
                ...prev,
                status: 'completed',
                spritesheetUrl: null,
                petJson: {
                  id: 'pixel-cat',
                  displayName: 'Pixel Cat',
                  description: 'A calm coding companion (demo)',
                  spritesheetPath: 'spritesheet.webp',
                },
              }
            : null
        )
      }, 23000)
      return () => clearTimeout(t)
    }
  }, [demo, task?.status])

  const handleRetry = () => {
    setTask(null)
    if (pollRef.current) {
      clearInterval(pollRef.current)
      pollRef.current = null
    }
  }

  const getCurrentStep = (): number => {
    if (!task) return 1
    switch (task.status) {
      case 'pending':
      case 'processing':
        return 2
      case 'awaiting_approval':
        return 3
      case 'generating_animation':
      case 'completed':
        return 3
      case 'failed':
        return 4
      default:
        return 1
    }
  }

  const getCompletedSteps = (): number[] => {
    if (!task) return []
    const completed: number[] = [1]
    if (['awaiting_approval', 'generating_animation', 'completed'].includes(task.status)) {
      completed.push(2)
    }
    if (['generating_animation', 'completed'].includes(task.status)) {
      completed.push(3)
    }
    if (task.status === 'completed') completed.push(4)
    return completed
  }

  const showStepIndicator = task && task.status !== 'failed'
  const isCompleted = task?.status === 'completed'

  return (
    <>
      <Navbar />
      <JsonLd data={appJsonLd} />

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* ---- Hero ---- */}
        <section className="hero-glow mb-10 grid grid-cols-1 items-center gap-10 rounded-2xl pb-6 sm:mb-14 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="font-pixel text-[10px] text-accent">{t('hero.badge')}</span>
            </div>
            <h1 className="break-words font-pixel text-base leading-relaxed text-text-primary sm:text-lg">
              {t('hero.titlePrefix')}{' '}
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-text-secondary sm:text-base">
              {t('hero.subtitle')}
            </p>

            <div className="mt-6">
              {!task && !isUploading && (
                <UploadDropzone onFileSelected={handleFileSelected} />
              )}
              {isUploading && (
                <div className="rounded-lg border-2 border-dashed border-border bg-bg-surface p-8 text-center">
                  <p className="font-pixel text-xs text-text-secondary">{t('hero.uploading')}</p>
                </div>
              )}
              {!task && !isUploading && (
                <button
                  onClick={handleDemo}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-bg-elevated px-4 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent hover:text-text-primary"
                >
                  <Play className="h-4 w-4 text-accent" />
                  {t('hero.demo')}
                </button>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-text-muted">
              <span className="flex items-center gap-1">
                <Zap className="h-3 w-3 text-accent" /> {t('hero.baseTime')}
              </span>
              <span>&middot;</span>
              <span>{t('hero.statesCount')}</span>
              <span>&middot;</span>
              <span>{t('hero.zipDownload')}</span>
            </div>
          </div>

          {/* Showcase */}
          <div className="relative hidden items-center justify-center lg:flex">
            <div className="glass-card relative flex h-72 w-72 items-center justify-center rounded-2xl">
              <PixelPet size={150} className="motion-idle" />
              <div className="float-chip absolute -left-4 top-10 flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-3 py-2 shadow-glow">
                <FileImage className="h-4 w-4 text-primary" />
                <span className="font-pixel text-[8px] text-text-primary">spritesheet.webp</span>
              </div>
              <div className="float-chip delay absolute -right-4 bottom-10 flex items-center gap-2 rounded-lg border border-border bg-bg-elevated px-3 py-2 shadow-glow-accent">
                <FileJson className="h-4 w-4 text-accent" />
                <span className="font-pixel text-[8px] text-text-primary">pet.json</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Generation workspace ---- */}
        {task && (
          <section className="mb-10">
            {demo && (
              <div className="mb-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-xs text-accent">
                <span className="font-pixel text-[10px] leading-relaxed">{t('demo.banner')}</span>
              </div>
            )}
            {showStepIndicator && (
              <div className="mb-8">
                <StepIndicator
                  currentStep={getCurrentStep()}
                  completedSteps={getCompletedSteps()}
                />
              </div>
            )}
            <GenerationWorkspace
              task={task}
              onApprove={handleApprove}
              onReject={handleReject}
              onRetry={handleRetry}
              onDemo={handleDemo}
              isApproving={isApproving}
              isRegenerating={regenerating}
              demo={demo}
            />
            {isCompleted && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-6 py-2">
                  <span className="font-pixel text-[10px] text-success">{t('hero.ready')}</span>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ---- Marketing sections (only when idle) ---- */}
        {!task && (
          <>
            <HowItWorks />
            <WhatYouGet />
            <PricingSection />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}

function localizeError(
  code: string,
  fallback: string,
  t: (key: string, params?: Record<string, string | number>) => string
): string {
  switch (code) {
    case 'NOT_AUTHENTICATED':
    case 'Not authenticated':
      return t('error.sessionExpired')
    case 'QUOTA_EXCEEDED':
      return t('error.quotaExceeded')
    case 'MISSING_BACKEND_CONFIG':
      return t('error.missingBackendConfig')
    case 'OPENAI_NOT_CONFIGURED':
      return t('error.openaiNotConfigured')
    case 'INVALID_FILE':
      return fallback
    case 'NO_FILE':
      return t('error.noFile')
    case 'DB_ERROR':
      return t('error.dbError')
    default:
      return t('error.unknown')
  }
}

