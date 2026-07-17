'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

import { useEffect, useRef } from 'react'

const BLUE   = '#3B82F6'
const RED    = '#EF4444'
const AMBER  = '#F59E0B'
const GOLD   = '#D4941E'
const TEAL   = '#0D9488'
const ORANGE = '#F97316'
const INDIGO = '#6366F1'

const MONTHS = ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun']
const BILLED = [142, 138, 151, 144, 147, 130, 125, 148, 156, 149, 152, 158]
const COST   = [158, 152, 168, 159, 163, 148, 141, 165, 172, 163, 168, 175]
const GAP    = MONTHS.map((_, i) => COST[i] - BILLED[i])

const SHIFT_DATA = [
  { label: 'Evening',        value: 58, color: GOLD   },
  { label: 'Weekend',        value: 47, color: BLUE   },
  { label: 'Public holiday', value: 39, color: TEAL   },
  { label: 'Broken shift',   value: 42, color: ORANGE },
  { label: 'Night',          value: 32, color: INDIGO },
]

const TILES = [
  { label: 'Total Leakage YTD',      value: '$218k', color: '#DC2626' },
  { label: 'Overtime Cost',          value: '$94k',  color: AMBER     },
  { label: 'SCHADS Penalties',       value: '$71k',  color: ORANGE    },
  { label: 'Unbilled Cancellations', value: '$53k',  color: GOLD      },
]

function GroupedBarChart() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: MONTHS,
        datasets: [
          {
            label: 'Billed hours value ($k)',
            data: BILLED,
            backgroundColor: BLUE,
            borderRadius: 2,
          },
          {
            label: 'Paid hours cost ($k)',
            data: COST,
            backgroundColor: RED,
            borderRadius: 2,
          },
          {
            label: 'Gap ($k)',
            data: GAP,
            backgroundColor: AMBER,
            borderRadius: 2,
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
          x: { ticks: { font: { size: 10 } }, grid: { display: false } },
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
      <p className="text-[12px] font-semibold text-[#374151] mb-2">Monthly Billed Hours Value vs Paid Hours Cost ($k)</p>
      <div style={{ height: '210px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

function HorizontalBarChart() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: SHIFT_DATA.map((d) => d.label),
        datasets: [
          {
            label: 'Leakage ($k)',
            data: SHIFT_DATA.map((d) => d.value),
            backgroundColor: SHIFT_DATA.map((d) => d.color),
            borderRadius: 3,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Leakage: $${ctx.parsed.x}k`,
            },
          },
        },
        scales: {
          x: {
            ticks: { font: { size: 10 }, callback: (v) => `$${v}k` },
            grid: { color: '#F3F4F6' },
          },
          y: {
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
      <p className="text-[12px] font-semibold text-[#374151] mb-2">Leakage by Shift Type ($k)</p>
      <div style={{ height: '170px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

export default function AgedCareMarginDashboard() {
  return (
    <figure
      className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white"
      aria-label="Aged care workforce margin dashboard showing illustrative data"
    >
      <div className="bg-[#030F23] px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">Aged Care Workforce Margin Dashboard</span>
        <span className="text-[11px] text-[#9CA3AF] border border-[#1E3A5F] rounded px-2 py-0.5">Illustrative</span>
      </div>

      <div className="bg-[#F9FAFB] px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-[#E5E7EB]">
        {TILES.map((tile) => (
          <div key={tile.label} className="bg-white rounded-lg border border-[#E5E7EB] p-3">
            <div className="text-[22px] font-bold leading-tight" style={{ color: tile.color }}>{tile.value}</div>
            <div className="text-[12px] text-[#6B7280] mt-0.5 leading-snug">{tile.label}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pt-5 pb-3">
        <GroupedBarChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-5">
        <HorizontalBarChart />
      </div>

      <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-4 py-2.5">
        <p className="text-[11px] text-[#9CA3AF] text-center">All figures are illustrative mock data for demonstration purposes only.</p>
      </div>

      <figcaption className="sr-only">
        Aged care workforce margin dashboard with illustrative data. Total leakage year to date 218 thousand dollars, comprising 94 thousand overtime cost, 71 thousand SCHADS penalties, and 53 thousand unbilled cancellations. Monthly billed hours value compared to paid hours cost across July to June. Leakage by shift type: evening 58 thousand, weekend 47 thousand, broken shift 42 thousand, public holiday 39 thousand, night 32 thousand.
      </figcaption>
    </figure>
  )
}
