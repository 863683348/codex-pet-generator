'use client'

import { Gamepad2, Github } from 'lucide-react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useI18n } from '@/lib/i18n'
import UserButton from '@/components/auth/UserButton'

export default function Navbar() {
  const { t } = useI18n()
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-bg-base/80 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={t('nav.home')}
        >
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="font-pixel text-sm text-text-primary">PetGen</span>
          <span className="ml-1 rounded-md bg-primary/10 px-2 py-0.5 font-pixel text-[10px] text-primary">
            BETA
          </span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <UserButton />
          <Link
            href="/blog"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
          >
            {t('nav.blog')}
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary"
          >
            <Github className="h-4 w-4" />
            <span className="hidden text-sm sm:inline">{t('nav.github')}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
