'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const DISMISS_KEY = 'ce_sil_banner_dismissed'

const banners = [
  {
    id: 'sil-registration-2026',
    message:
      'NDIS SIL providers: registration is now mandatory. Find out what the 1 October 2026 deadline means for you.',
    href: '/campaigns/sil-registration',
  },
]

type BannerState = 'hidden' | 'visible' | 'dismissing'

export default function CampaignBanner() {
  const [state, setState] = useState<BannerState>('hidden')

  useEffect(() => {
    if (!sessionStorage.getItem(DISMISS_KEY)) {
      setState('visible')
    }
  }, [])

  function dismiss() {
    sessionStorage.setItem(DISMISS_KEY, '1')
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setState('hidden')
    } else {
      setState('dismissing')
      setTimeout(() => setState('hidden'), 200)
    }
  }

  if (state === 'hidden') return null

  const banner = banners[0]

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label="Site announcement"
      style={{
        opacity: state === 'dismissing' ? 0 : 1,
        transition: 'opacity 0.2s',
      }}
      className="w-full bg-[#1C1000] border-b border-[#D4941E]/40"
    >
      <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-4 px-5 sm:px-10 py-2.5">
        <a
          href={banner.href}
          className="text-[13px] sm:text-[14px] font-medium text-[#E6B85C] hover:text-white transition-colors leading-snug flex-1"
        >
          {banner.message}
        </a>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 text-[#9CA3AF] hover:text-white transition-colors rounded p-1 -mr-1"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
