'use client'

import { useEffect, useRef } from 'react'
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

Chart.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Tooltip, Legend, Filler)

const GOLD   = '#D4941E'
const BLUE   = '#3B82F6'
const TEAL   = '#0D9488'
const RED    = '#EF4444'
const AMBER  = '#F59E0B'
const SLATE  = '#64748B'

const TILES = [
  { label: 'Active Participants', value: '147',   sub: 'current caseload',            color: '#1F2937' },
  { label: 'Budget at Risk',      value: '$312k', sub: 'underspend + overrun flags',  color: '#DC2626' },
  { label: 'Avg Utilisation',     value: '68%',   sub: 'across all support categories', color: AMBER   },
  { label: 'Unspent at Risk',     value: '$89k',  sub: 'participants >85% plan end',  color: GOLD     },
]

const CATEGORIES = [
  'Daily Activities',
  'Social & Civic',
  'Capacity Building',
  'Support Coordination',
  'Transport',
  'Assistive Tech',
]
const CONSUMED  = [84, 61, 72, 55, 90, 38]
const REMAINING = [16, 39, 28, 45, 10, 62]

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun']
const SPEND_RATE   = [4.2, 4.8, 5.1, 4.6, 5.3, 4.1, 3.9, 5.6, 5.9, 5.4, 5.7, 6.1]
const BUDGET_RATE  = [5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0]

const AT_RISK = [
  { name: 'Participant A', category: 'Daily Activities',      utilisation: 92, daysLeft: 18, risk: 'High'   },
  { name: 'Participant B', category: 'Capacity Building',     utilisation: 34, daysLeft: 42, risk: 'Low'    },
  { name: 'Participant C', category: 'Support Coordination',  utilisation: 87, daysLeft: 11, risk: 'High'   },
  { name: 'Participant D', category: 'Social & Civic',        utilisation: 61, daysLeft: 29, risk: 'Medium' },
]

const RISK_COLORS: Record<string, string> = {
  High:   '#FEE2E2',
  Medium: '#FEF3C7',
  Low:    '#D1FAE5',
}
const RISK_TEXT: Record<string, string> = {
  High:   '#991B1B',
  Medium: '#92400E',
  Low:    '#065F46',
}

function StackedHBar() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<Chart | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new Chart(ref.current, {
      type: 'bar',
      data: {
        labels: CATEGORIES,
        datasets: [
          {
            label: 'Consumed %',
            data: CONSUMED,
            backgroundColor: BLUE,
            borderRadius: 3,
          },
          {
            label: 'Remaining %',
            data: REMAINING,
            backgroundColor: '#E5E7EB',
            borderRadius: 3,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 11 }, boxWidth: 12, padding: 12 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.x}%`,
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            max: 100,
            ticks: { font: { size: 10 }, callback: (v) => `${v}%` },
            grid: { color: '#F3F4F6' },
          },
          y: {
            stacked: true,
            ticks: { font: { size: 11 } },
            grid: { display: false },
          },
        },
      },
    })
    return () => { chart.current?.destroy() }
  }, [])

  return (
    <div>
      <p className="text-[12px] font-semibold text-[#374151] mb-2">Budget Consumed vs Remaining by Support Category</p>
      <div style={{ height: '200px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

function SpendLineChart() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<Chart | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new Chart(ref.current, {
      type: 'line',
      data: {
        labels: MONTHS,
        datasets: [
          {
            label: 'Actual Spend Rate ($k/wk)',
            data: SPEND_RATE,
            borderColor: GOLD,
            backgroundColor: GOLD + '1A',
            fill: true,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: GOLD,
            borderWidth: 2,
          },
          {
            label: 'Budget Rate ($k/wk)',
            data: BUDGET_RATE,
            borderColor: TEAL,
            backgroundColor: 'transparent',
            borderDash: [5, 4],
            pointRadius: 0,
            borderWidth: 1.5,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { font: { size: 11 }, boxWidth: 12, padding: 12 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.dataset.label}: $${ctx.parsed.y}k`,
            },
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 } }, grid: { color: '#F3F4F6' } },
          y: {
            ticks: { font: { size: 10 }, callback: (v) => `$${v}k` },
            grid: { color: '#F3F4F6' },
          },
        },
      },
    })
    return () => { chart.current?.destroy() }
  }, [])

  return (
    <div>
      <p className="text-[12px] font-semibold text-[#374151] mb-2">Spend Rate vs Budget Rate (Jul–Jun)</p>
      <div style={{ height: '180px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

export default function NDISFundingDashboard() {
  return (
    <figure
      className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white"
      aria-label="NDIS funding utilisation dashboard showing illustrative data"
    >
      <div className="bg-[#030F23] px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">NDIS Funding Utilisation Dashboard</span>
        <span className="text-[11px] text-[#9CA3AF] border border-[#1E3A5F] rounded px-2 py-0.5">Illustrative</span>
      </div>

      <div className="bg-[#F9FAFB] px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-[#E5E7EB]">
        {TILES.map((tile) => (
          <div key={tile.label} className="bg-white rounded-lg border border-[#E5E7EB] p-3">
            <div className="text-[22px] font-bold leading-tight" style={{ color: tile.color }}>{tile.value}</div>
            <div className="text-[12px] font-semibold text-[#374151] mt-0.5 leading-snug">{tile.label}</div>
            <div className="text-[11px] text-[#9CA3AF] leading-snug">{tile.sub}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pt-5 pb-3">
        <StackedHBar />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-3">
        <SpendLineChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-5">
        <p className="text-[12px] font-semibold text-[#374151] mb-3">Participants Flagged for Review</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="text-left pb-2 text-[#6B7280] font-semibold">Participant</th>
                <th className="text-left pb-2 text-[#6B7280] font-semibold">Category</th>
                <th className="text-right pb-2 text-[#6B7280] font-semibold">Utilisation</th>
                <th className="text-right pb-2 text-[#6B7280] font-semibold">Days Left</th>
                <th className="text-center pb-2 text-[#6B7280] font-semibold">Risk</th>
              </tr>
            </thead>
            <tbody>
              {AT_RISK.map((row) => (
                <tr key={row.name} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="py-2 text-[#374151] font-medium">{row.name}</td>
                  <td className="py-2 text-[#6B7280]">{row.category}</td>
                  <td className="py-2 text-right text-[#374151]">{row.utilisation}%</td>
                  <td className="py-2 text-right text-[#374151]">{row.daysLeft}</td>
                  <td className="py-2 text-center">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold"
                      style={{ background: RISK_COLORS[row.risk], color: RISK_TEXT[row.risk] }}
                    >
                      {row.risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-4 py-2.5">
        <p className="text-[11px] text-[#9CA3AF] text-center">All figures are illustrative mock data for demonstration purposes only.</p>
      </div>

      <figcaption className="sr-only">
        NDIS funding utilisation dashboard with illustrative data. 147 active participants, $312k budget at risk, 68% average utilisation, $89k unspent at risk. Budget consumed versus remaining by support category. Spend rate versus budget rate July to June. Four participants flagged for review with risk levels.
      </figcaption>
    </figure>
  )
}
