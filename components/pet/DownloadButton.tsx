'use client'

import { useState } from 'react'
import { Download, Loader2, FileArchive } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'

interface DownloadButtonProps {
  href: string
  petId?: string
  size?: 'md' | 'lg'
  disabled?: boolean
  className?: string
}

export default function DownloadButton({ href, petId, size = 'lg', disabled, className = '' }: DownloadButtonProps) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      // The download endpoint authenticates the user and 302-redirects to a
      // short-lived signed URL (it no longer proxies the ZIP through Vercel —
      // that doubles Fast Origin Transfer). We fetch with manual redirect so the
      // browser can stream the ZIP directly from Supabase's CDN.
      const token = (await getSupabaseClient().auth.getSession()).data.session?.access_token
      const res = await fetch(href, {
        headers: token ? { authorization: `Bearer ${token}` } : undefined,
        redirect: 'manual',
      })
      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get('location')
        if (location) {
          // Direct CDN download — no CORS, no proxy, no FOT cost on Vercel.
          const a = document.createElement('a')
          a.href = location
          a.download = petId ? `${petId}.zip` : 'pet.zip'
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
          return
        }
      }
      if (!res.ok) {
        console.error('Download failed:', res.status)
        return
      }
      // Fallback: blob download (in case the redirect could not be followed).
      const blob = await res.blob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = petId ? `${petId}.zip` : 'pet.zip'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
    } catch (err) {
      console.error('Download error:', err)
    } finally {
      setTimeout(() => setLoading(false), 800)
    }
  }

  const sizing =
    size === 'lg'
      ? 'px-8 py-3.5 text-sm gap-2.5'
      : 'px-6 py-3 text-sm gap-2'

  return (
    <button
      onClick={handleClick}
      disabled={loading || disabled}
      className={`flex items-center justify-center rounded-md bg-primary font-medium text-white transition-all hover:bg-primary-hover hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-40 ${sizing} ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {t('download.preparing')}
        </>
      ) : (
        <>
          <FileArchive className="h-5 w-5" />
          {t('download.download')}
        </>
      )}
    </button>
  )
}
