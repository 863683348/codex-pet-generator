'use client'

import { Mail, MessageSquare } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="font-pixel text-lg text-text-primary">Contact Us</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Have a question, suggestion, or need help? We&apos;d love to hear from you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:support@petgen.app"
            className="glass-card flex items-start gap-4 rounded-lg border border-border p-5 transition-colors hover:bg-bg-elevated"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-medium text-text-primary">Email</h2>
              <p className="mt-1 text-sm text-text-secondary">support@petgen.app</p>
              <p className="mt-0.5 text-xs text-text-muted">We reply within 24 hours.</p>
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
              <h2 className="font-medium text-text-primary">GitHub Issues</h2>
              <p className="mt-1 text-sm text-text-secondary">Report bugs or request features.</p>
              <p className="mt-0.5 text-xs text-text-muted">Public issue tracker.</p>
            </div>
          </a>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-bg-surface p-6">
          <h2 className="font-medium text-text-primary">Business Inquiries</h2>
          <p className="mt-2 text-sm text-text-secondary">
            For partnership, sponsorship, or other business-related questions, please email us at{' '}
            <a href="mailto:business@petgen.app" className="text-primary underline">business@petgen.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
