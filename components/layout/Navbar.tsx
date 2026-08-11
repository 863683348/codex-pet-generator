'use client'

import { useState } from 'react'
import { Gamepad2, Github, Images, LayoutGrid, Menu, X } from 'lucide-react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useI18n } from '@/lib/i18n'
import UserButton from '@/components/auth/UserButton'
import PointsBadge from './PointsBadge'

const navLinks = [
  { href: '/my-pets', label: 'My Pets', icon: Images, external: false },
  { href: '/gallery', label: 'Gallery', icon: LayoutGrid, external: false },
  { href: '/blog', label: 'Blog', icon: null, external: false },
  { href: 'https://github.com', label: 'GitHub', icon: Github, external: true },
]

export default function Navbar() {
  const { t } = useI18n()
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass =
    'flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary lg:px-3'

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-bg-base/80 backdrop-blur-lg">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label={t('nav.home')}
        >
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="font-pixel text-sm text-text-primary">PetGen</span>
          <span className="ml-1 hidden rounded-md bg-primary/10 px-2 py-0.5 font-pixel text-[10px] text-primary sm:inline">
            BETA
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Desktop nav links: icons on tablet, icons + text on large screens */}
          <nav className="hidden items-center gap-1.5 lg:gap-2 sm:flex">
            {navLinks.map((link) => {
              const content = (
                <>
                  {link.icon && <link.icon className="h-4 w-4" />}
                  <span className="hidden text-sm lg:inline">{link.label}</span>
                </>
              )
              return link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {content}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {content}
                </Link>
              )
            })}
          </nav>

          <LanguageSwitcher />
          <ThemeToggle />
          <PointsBadge />
          <UserButton />

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-elevated text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary sm:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-30 bg-black/40 sm:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute left-0 right-0 top-16 z-40 border-b border-border bg-bg-base px-4 py-3 shadow-lg sm:hidden">
            <div className="mx-auto flex max-w-5xl flex-col gap-1">
              {navLinks.map((link) => {
                const content = (
                  <>
                    {link.icon && <link.icon className="h-4 w-4" />}
                    <span>{link.label}</span>
                  </>
                )
                const itemClass =
                  'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary'
                return link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className={itemClass}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={itemClass}
                  >
                    {content}
                  </Link>
                )
              })}
            </div>
          </nav>
        </>
      )}
    </header>
  )
}
