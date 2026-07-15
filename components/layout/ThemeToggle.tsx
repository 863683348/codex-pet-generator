'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme/ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? '切换到阳光模式' : '切换到暗色模式'}
      title={isDark ? '☀️ 阳光模式' : '🌙 暗色模式'}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-elevated text-text-secondary transition-colors hover:bg-bg-surface hover:text-text-primary"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
