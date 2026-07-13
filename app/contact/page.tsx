'use client'

import { Mail, MessageSquare } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { useI18n } from '@/lib/i18n'

export default function ContactPage() {
  const { t } = useI18n()
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">{t('contact.title')}</h1>
        <p className="mt-2 text-sm text-text-secondary">{t('contact.desc')}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:cruzreese459228@gmail.com"
            className="glass-card flex items-start gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-medium text-text-primary">{t('contact.emailTitle')}</h2>
              <p className="mt-1 text-sm text-text-secondary">cruzreese459228@gmail.com</p>
              <p className="mt-0.5 text-xs text-text-muted">{t('contact.emailReply')}</p>
            </div>
          </a>

          <a
            href="https://github.com/863683348/codex-pet-generator/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-start gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-medium text-text-primary">{t('contact.githubTitle')}</h2>
              <p className="mt-1 text-sm text-text-secondary">{t('contact.githubDesc')}</p>
              <p className="mt-0.5 text-xs text-text-muted">{t('contact.githubLabel')}</p>
            </div>
          </a>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-bg-surface p-6">
          <h2 className="font-medium text-text-primary">{t('contact.businessTitle')}</h2>
          <p className="mt-2 text-sm text-text-secondary">
            {t('contact.businessText')}{' '}
            <a href="mailto:cruzreese459228@gmail.com" className="text-primary underline">cruzreese459228@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

