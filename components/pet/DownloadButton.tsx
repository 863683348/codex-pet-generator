'use client'

import { useState } from 'react'
import { Download, Loader2, FileArchive } from 'lucide-react'
import { useI18n } from '@/lib/i18n'
import { getSupabaseClient } from '@/lib/supabase/client'

interface DownloadButtonProps {
  href: string
  petId?: string
  size?: 'md' | 'lg'
}

export default function DownloadButton({ href, petId, size = 'lg' }: DownloadButtonProps) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)
    try {
      // The download endpoint now requires auth, so we fetch with the session
      // token and hand the bytes to the browser as a blob download.
      const token = (await getSupabaseClient().auth.getSession()).data.session?.access_token
      const res = await fetch(href, {
        headers: token ? { authorization: `Bearer ${token}` } : undefined,
      })
      if (!res.ok) {
        console.error('Download failed:', res.status)
        return
      }
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
      disabled={loading}
      className={`flex items-center justify-center rounded-md bg-primary font-medium text-white transition-all hover:bg-primary-hover hover:shadow-glow disabled:opacity-60 ${sizing}`}
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
