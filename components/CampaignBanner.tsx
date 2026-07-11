'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const DISMISS_KEY = 'ce_sil_banner_dismissed'

const EXCLUDED_PATHS = [
  '/services/partner-solutions',
  '/services/partner-solutions/shield',
  '/campaigns/sil-registration',
  '/campaigns/proptech-data-analytics',
  '/campaigns/allied-health-data-analytics',
  '/campaigns/retail-data-analytics',
]

const banners = [
  {
    id: 'sil-registration-2026',
    message:
      'NDIS SIL providers: registration is now mandatory. Find out what the 1 October 2026 deadline means for you.',
    mobileMessage:
      'NDIS SIL providers: registration is now mandatory. Learn what it means for you.',
    href: '/campaigns/sil-registration',
  },
]

type BannerState = 'hidden' | 'visible' | 'dismissing'

export default function CampaignBanner() {
  const [state, setState] = useState<BannerState>('hidden')
  const pathname = usePathname()

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

  if (state === 'hidden' || EXCLUDED_PATHS.includes(pathname)) return null

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
      className="sticky top-[72px] lg:top-[96px] z-40 w-full bg-[#030F23] border-y border-[#E6B85C]/40"
    >
      <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-4 px-5 sm:px-10 py-2.5">
        <a
          href={banner.href}
          className="text-[13px] sm:text-[14px] font-medium text-[#E6B85C] hover:text-white transition-colors leading-snug flex-1 text-center sm:text-left"
        >
          <span className="sm:hidden">{banner.mobileMessage}</span>
          <span className="hidden sm:inline">{banner.message}</span>
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
