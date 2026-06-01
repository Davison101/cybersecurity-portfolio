'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = theme === 'system' ? 'dark' : theme

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition hover:border-accent focus-visible:outline-none focus-visible:ring-ring/50 focus-visible:ring-2"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 opacity-0" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground shadow-sm transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-ring/50 focus-visible:ring-2"
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  )
}
