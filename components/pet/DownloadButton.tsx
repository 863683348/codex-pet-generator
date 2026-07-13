'use client'

import { useState } from 'react'
import { Download, Loader2, FileArchive } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface DownloadButtonProps {
  href: string
  petId?: string
  size?: 'md' | 'lg'
}

export default function DownloadButton({ href, petId, size = 'lg' }: DownloadButtonProps) {
  const { t } = useI18n()
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    const a = document.createElement('a')
    a.href = href
    a.download = petId ? `${petId}.zip` : 'pet.zip'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => setLoading(false), 2000)
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
