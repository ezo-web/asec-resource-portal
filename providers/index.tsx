"use client";

import { ThemeProvider } from 'next-themes'
import { type ReactNode } from 'react'

import { ViewTransitions } from '@/lib/transition'
import { Cookie } from 'next/font/google'
import { CookiesProvider } from 'react-cookie'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CookiesProvider>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ViewTransitions>{children}</ViewTransitions>
    </ThemeProvider>
    </CookiesProvider>
  )
}
