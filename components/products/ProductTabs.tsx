'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink, PlayCircle } from 'lucide-react'

export type Product = {
  slug: string
  icon: React.ReactNode
  title: string
  status: 'Available Now' | 'In Development'
  desc: string
  ctaLabel?: string
  href?: string
  external?: boolean
  demoHref?: string
  statusNote?: string
}

type Tab = {
  id: string
  hash: string
  label: string
  status: Product['status']
}

const TABS: Tab[] = [
  { id: 'tab-available', hash: 'tab-available', label: 'Available Now', status: 'Available Now' },
  { id: 'tab-development', hash: 'tab-development', label: 'In Development', status: 'In Development' },
]

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      id={product.slug}
      className="bg-white rounded-xl p-7 border border-border h-full flex flex-col hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200 scroll-mt-28"
    >
      <div className="flex items-start justify-between mb-4 gap-4">
        <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
          {product.icon}
        </div>
        {product.status === 'Available Now' ? (
          <span className="text-[13px] font-semibold rounded-full px-3 py-1 whitespace-nowrap border bg-green-50 text-green-700 border-green-200">
            Available Now
          </span>
        ) : (
          <span className="text-[13px] font-semibold rounded-full px-3 py-1 whitespace-nowrap border bg-amber-50 text-amber-700 border-amber-200">
            In Development
          </span>
        )}
      </div>
      <h3 className="text-[18px] font-bold text-text-dark mb-3">{product.title}</h3>
      <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">{product.desc}</p>
      <div className="mt-auto flex flex-col gap-3">
        {product.href && (
          product.external ? (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200"
            >
              {product.ctaLabel} <ExternalLink size={13} />
            </a>
          ) : (
            <a
              href={product.href}
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight hover:gap-3 transition-all duration-200"
            >
              {product.ctaLabel} <ArrowRight size={13} />
            </a>
          )
        )}
        {product.demoHref && (
          <a
            href={product.demoHref}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate hover:text-brand-goldLight transition-colors"
          >
            <PlayCircle size={14} /> Watch Demo
          </a>
        )}
        {product.statusNote && (
          <p className="text-[13px] text-slate">{product.statusNote}</p>
        )}
      </div>
    </div>
  )
}

export default function ProductTabs({ products }: { products: Product[] }) {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].id)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const didInitialScroll = useRef(false)

  const grouped = TABS.map((tab) => ({
    tab,
    items: products.filter((p) => p.status === tab.status),
  }))

  const findTabForSlug = (slug: string): Tab | undefined => {
    const product = products.find((p) => p.slug === slug)
    if (!product) return undefined
    return TABS.find((t) => t.status === product.status)
  }

  const applyHash = (hash: string, scrollToCard: boolean) => {
    const clean = hash.replace(/^#/, '')
    if (!clean) return

    const matchedTab = TABS.find((t) => t.hash === clean)
    if (matchedTab) {
      setActiveTab(matchedTab.id)
      return
    }

    const tabForSlug = findTabForSlug(clean)
    if (tabForSlug) {
      setActiveTab(tabForSlug.id)
      if (scrollToCard) {
        // wait for the panel to become visible before measuring/scrolling
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const el = document.getElementById(clean)
            el?.scrollIntoView({
              behavior: prefersReducedMotion() ? 'auto' : 'smooth',
              block: 'start',
            })
          })
        })
      }
    }
  }

  // Initial load: read hash once
  useEffect(() => {
    if (didInitialScroll.current) return
    didInitialScroll.current = true
    if (window.location.hash) {
      applyHash(window.location.hash, true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Respond to hash changes while already on the page (nav clicks, back/forward)
  useEffect(() => {
    const onHashChange = () => applyHash(window.location.hash, true)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const selectTab = (tab: Tab, focusButton = false) => {
    setActiveTab(tab.id)
    window.history.replaceState(null, '', `#${tab.hash}`)
    if (focusButton) tabRefs.current[tab.id]?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % TABS.length
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + TABS.length) % TABS.length
    else if (e.key === 'Home') nextIndex = 0
    else if (e.key === 'End') nextIndex = TABS.length - 1

    if (nextIndex !== null) {
      e.preventDefault()
      selectTab(TABS[nextIndex], true)
    }
  }

  return (
    <div>
      {/* Tab list */}
      <div role="tablist" aria-label="Products by availability" className="flex gap-2 mb-8 border-b border-border">
        {grouped.map(({ tab, items }, index) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[tab.id] = el }}
              role="tab"
              id={`tabbtn-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(tab)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative flex items-center gap-2 text-[16px] font-semibold px-4 py-3 -mb-px border-b-2 transition-colors duration-200 ${
                isActive
                  ? 'border-gold text-text-dark'
                  : 'border-transparent text-slate hover:text-text-dark'
              }`}
            >
              {tab.label}
              <span
                className={`text-[13px] font-semibold rounded-full px-2 py-0.5 border ${
                  tab.status === 'Available Now'
                    ? 'bg-green-50 text-green-700 border-green-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {items.length}
              </span>
            </button>
          )
        })}
      </div>

      {/* Tab panels — both always in the DOM for crawlability, inactive one hidden via the hidden attribute */}
      {grouped.map(({ tab, items }) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tabbtn-${tab.id}`}
          hidden={activeTab !== tab.id}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
