'use client'

import { useState } from 'react'
import IndustryRoleTabs from '@/components/campaigns/IndustryRoleTabs'
import type { RoleTab } from '@/components/campaigns/IndustryRoleTabs'

type Props = {
  tabs: RoleTab[]
  initialTabId?: string
  dashboards?: Record<string, React.ReactNode>
}

export default function HealthTabsWithNote({ tabs, initialTabId, dashboards }: Props) {
  const [activeId, setActiveId] = useState(initialTabId ?? tabs[0]?.id ?? '')

  return (
    <div>
      <IndustryRoleTabs
        tabs={tabs}
        initialTabId={initialTabId}
        dashboards={dashboards}
        onTabChange={setActiveId}
      />
      {activeId === 'aged-care-operator' && (
        <>
          <div className="mt-6 rounded-xl border border-text-dark/10 bg-text-dark/[0.04] p-5">
            <p className="text-[16px] text-slate leading-relaxed">
              The SCHADS Award and the Aged Care Act 2024 both create specific wage and record-keeping obligations, sharpened further by the sleepover shift reforms and wage increase that took effect from mid-2026. The aged care dashboard above surfaces penalty exposure in real time rather than at payroll audit.
            </p>
          </div>
          <p className="mt-5 text-[16px] text-slate leading-relaxed">
            We have also developed detailed use cases across workforce turnover and agency cost, client disengagement early warning, and co-contribution debtor risk. Ask about these in your free consultation.
          </p>
        </>
      )}
      <p className="mt-4 text-[13px] text-slate/60 italic">
        All figures are illustrative mock data for demonstration purposes only.
      </p>
    </div>
  )
}
