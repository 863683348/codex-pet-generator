'use client'

import { useCallback, useState, useRef } from 'react'
import { UploadCloud, ImageIcon } from 'lucide-react'
import { validateImageFile } from '@/lib/utils/validation'
import { useI18n } from '@/lib/i18n'

interface UploadDropzoneProps {
  onFileSelected: (file: File) => void
  disabled?: boolean
}

export default function UploadDropzone({ onFileSelected, disabled }: UploadDropzoneProps) {
  const { t } = useI18n()
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(
    (file: File) => {
      setError(null)
      const validation = validateImageFile(file, t)
      if (!validation.valid) {
        setError(validation.error || t('error.generationFailed'))
        return
      }
      onFileSelected(file)
    },
    [onFileSelected, t]
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (disabled) return

      const file = e.dataTransfer.files[0]
      if (file) handleFile(file)
    },
    [handleFile, disabled]
  )

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) setIsDragging(true)
  }, [disabled])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleClick = useCallback(() => {
    if (!disabled) inputRef.current?.click()
  }, [disabled])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]
      if (file) handleFile(file)
    },
    [handleFile]
  )

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
        className={`
          relative flex cursor-pointer flex-col items-center justify-center
          rounded-lg border-2 border-dashed p-8 transition-all duration-200
          min-h-[200px]
          ${isDragging
            ? 'border-primary bg-primary/5 scale-[1.01]'
            : 'border-border bg-bg-surface hover:border-primary/50 hover:bg-bg-elevated'
          }
          ${disabled ? 'opacity-50 pointer-events-none' : ''}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleChange}
          className="hidden"
          disabled={disabled}
        />

        <div className="flex flex-col items-center gap-4">
          {isDragging ? (
            <UploadCloud className="h-12 w-12 text-primary animate-pulse" />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ImageIcon className="h-7 w-7 text-primary" />
            </div>
          )}

          <div className="text-center">
            <p className="font-pixel text-xs text-text-primary">
              {isDragging ? t('upload.dropActive') : t('upload.drop')}
            </p>
            <p className="mt-2 text-sm text-text-secondary">
              {t('upload.or')} <span className="text-primary">{t('upload.clickToBrowse')}</span>
            </p>
          </div>

          <div className="flex gap-2">
            {[t('upload.jpg'), t('upload.png'), t('upload.webp')].map(fmt => (
              <span
                key={fmt}
                className="rounded-md border border-border bg-bg-elevated px-2 py-1 font-pixel text-[10px] text-text-muted"
              >
                {fmt}
              </span>
            ))}
            <span className="rounded-md border border-border bg-bg-elevated px-2 py-1 font-pixel text-[10px] text-text-muted">
              {t('upload.maxSize')}
            </span>
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-3 rounded-md border border-danger/30 bg-danger/10 px-4 py-2 text-sm text-danger">
          {error}
        </div>
      )}
    </div>
  )
}
