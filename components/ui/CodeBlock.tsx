'use client'

import { useState } from 'react'
import { Copy, Check, Terminal } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface CodeBlockProps {
  code: string | string[]
  label?: string
  icon?: boolean
}

export default function CodeBlock({ code, label, icon }: CodeBlockProps) {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const codeLines = Array.isArray(code) ? code : code.split('\n')
  const codeString = codeLines.join('\n')

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback
      const textarea = document.createElement('textarea')
      textarea.value = codeString
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-bg-base/80">
      {label && (
        <div className="flex items-center gap-2 border-b border-border bg-bg-surface px-4 py-2">
          {icon && <Terminal className="h-3.5 w-3.5 text-accent" />}
          <span className="font-pixel text-[10px] text-text-secondary">{label}</span>
          <button
            onClick={handleCopy}
            className="ml-auto flex items-center gap-1.5 rounded px-2 py-1 text-xs text-text-muted transition-colors hover:bg-bg-elevated hover:text-text-primary"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-success" />
                <span className="text-success">{t('code.copied')}</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                {t('code.copy')}
              </>
            )}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-4">
        <code className="font-mono text-sm text-accent">
          {codeLines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span className="mr-3 select-none text-text-muted">{i + 1}</span>
              {line}
            </div>
          ))}
        </code>
      </pre>
    </div>
  )
}
