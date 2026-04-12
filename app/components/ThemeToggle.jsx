'use client'

import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      disabled={!mounted}
      aria-label="Toggle theme"
      className="w-8 h-8 rounded-md border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {theme === 'dark' ? (
        <svg className="w-4 h-4 text-[#d0d6e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 1012 21a9 9 0 008.354-5.646z" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-[#d0d6e0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0L16.95 7.05M7.05 16.95l-1.414 1.414M12 16a4 4 0 100-8 4 4 0 000 8z" />
        </svg>
      )}
    </button>
  )
}
