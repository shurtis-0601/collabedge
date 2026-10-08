'use client'

import { useEffect } from 'react'

const IDS = ['health', 'property', 'mortgage', 'retail', 'accounting']
const HIGHLIGHT = ['ring-2', 'ring-gold', 'ring-offset-2']

/**
 * Supports /resources/downloads?industry=property by scrolling to the card and
 * highlighting it briefly. Hash links (#property) are handled natively by the
 * browser, this only adds the highlight for both forms.
 */
export default function DeepLinkHighlight() {
  useEffect(() => {
    let id: string | null = null
    try {
      id = new URLSearchParams(window.location.search).get('industry')
    } catch {
      id = null
    }
    const fromHash = window.location.hash.replace('#', '')
    const target = id && IDS.includes(id) ? id : IDS.includes(fromHash) ? fromHash : null
    if (!target) return
    const el = document.getElementById(target)
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (id) el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    el.classList.add(...HIGHLIGHT)
    const timer = window.setTimeout(() => el.classList.remove(...HIGHLIGHT), 2500)
    return () => window.clearTimeout(timer)
  }, [])

  return null
}
