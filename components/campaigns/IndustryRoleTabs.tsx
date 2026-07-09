'use client'

import { useRef, useState } from 'react'

export type RoleTab = {
  id: string
  label: string
  painPoints: string[]
}

type Props = {
  tabs: RoleTab[]
}

export default function IndustryRoleTabs({ tabs }: Props) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const selectTab = (id: string, focusButton = false) => {
    setActiveId(id)
    if (focusButton) btnRefs.current[id]?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null
    if (e.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length
    else if (e.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length
    else if (e.key === 'Home') nextIndex = 0
    else if (e.key === 'End') nextIndex = tabs.length - 1

    if (nextIndex !== null) {
      e.preventDefault()
      selectTab(tabs[nextIndex].id, true)
    }
  }

  return (
    <div>
      <div
        role="tablist"
        aria-label="Select your role"
        className="flex flex-wrap gap-1 mb-8 border-b border-border"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeId
          return (
            <button
              key={tab.id}
              ref={(el) => { btnRefs.current[tab.id] = el }}
              role="tab"
              id={`role-tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`role-panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`relative text-[15px] font-semibold px-4 py-3 -mb-px border-b-2 transition-colors duration-200 ${
                isActive
                  ? 'border-gold text-text-dark'
                  : 'border-transparent text-slate hover:text-text-dark'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`role-panel-${tab.id}`}
          aria-labelledby={`role-tab-${tab.id}`}
          hidden={tab.id !== activeId}
        >
          <div className="space-y-5">
            {tab.painPoints.map((point, i) => (
              <p
                key={i}
                className="text-[16px] text-slate leading-relaxed pl-4 border-l-2 border-gold/30"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
