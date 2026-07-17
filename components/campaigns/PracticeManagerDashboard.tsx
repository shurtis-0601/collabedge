'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

import { useEffect, useRef } from 'react'

const GOLD   = '#D4941E'
const BLUE   = '#3B82F6'
const TEAL   = '#0D9488'
const RED    = '#EF4444'
const AMBER  = '#F59E0B'

const TILES = [
  { label: 'Scheduled vs Worked Gap', value: '-14%', sub: 'avg across 12 weeks',          color: '#DC2626' },
  { label: 'Compliance Rate',         value: '71%',  sub: 'tasks completed on time',       color: AMBER     },
  { label: 'Audit Items Outstanding', value: '6',    sub: 'action items pending',           color: RED       },
  { label: 'Avg Provider Utilisation', value: '74%', sub: 'scheduled appointment fill',    color: GOLD      },
]

const WEEKS = ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12']
const SCHEDULED = [48, 52, 46, 54, 50, 49, 53, 51, 55, 47, 52, 50]
const WORKED    = [41, 47, 40, 48, 44, 43, 46, 45, 49, 41, 46, 44]

const PROVIDERS = [
  { name: 'Dr Nguyen',  utilisation: 88 },
  { name: 'Dr Okafor',  utilisation: 76 },
  { name: 'Ms Tran',    utilisation: 91 },
  { name: 'Mr Patel',   utilisation: 62 },
  { name: 'Ms Kumar',   utilisation: 55 },
  { name: 'Dr Chen',    utilisation: 83 },
  { name: 'Ms Williams',utilisation: 70 },
]

const COMPLIANCE_TASKS = [
  { task: 'Supervision sign-off',       due: '22 Jul', status: 'Overdue',   owner: 'Practice Manager' },
  { task: 'Medicare audit documentation', due: '28 Jul', status: 'Pending',  owner: 'Admin Team'       },
  { task: 'Privacy policy review',      due: '5 Aug',  status: 'Pending',   owner: 'Practice Manager' },
  { task: 'Staff credential renewal',   due: '1 Aug',  status: 'Completed', owner: 'HR Lead'          },
]

const STATUS_COLORS: Record<string, string> = {
  Overdue:   '#FEE2E2',
  Pending:   '#FEF3C7',
  Completed: '#D1FAE5',
}
const STATUS_TEXT: Record<string, string> = {
  Overdue:   '#991B1B',
  Pending:   '#92400E',
  Completed: '#065F46',
}

function providerBarColor(u: number): string {
  if (u >= 85) return TEAL
  if (u >= 65) return BLUE
  return RED
}

const target80Plugin = {
  id: 'target80',
  afterDraw(chart: ChartJS) {
    const { ctx, chartArea, scales } = chart
    const xScale = scales['x']
    if (!xScale || !chartArea) return
    const x = xScale.getPixelForValue(80)
    ctx.save()
    ctx.beginPath()
    ctx.setLineDash([5, 4])
    ctx.strokeStyle = GOLD
    ctx.lineWidth = 1.5
    ctx.moveTo(x, chartArea.top)
    ctx.lineTo(x, chartArea.bottom)
    ctx.stroke()
    ctx.restore()
  },
}

function GroupedBarChart() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: WEEKS,
        datasets: [
          {
            label: 'Scheduled',
            data: SCHEDULED,
            backgroundColor: BLUE,
            borderRadius: 3,
          },
          {
            label: 'Worked',
            data: WORKED,
            backgroundColor: GOLD,
            borderRadius: 3,
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
              label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} hrs`,
            },
          },
        },
        scales: {
          x: { ticks: { font: { size: 10 } }, grid: { display: false } },
          y: {
            ticks: { font: { size: 10 }, callback: (v) => `${v}h` },
            grid: { color: '#F3F4F6' },
          },
        },
      },
    })
    return () => { chart.current?.destroy() }
  }, [])

  return (
    <div>
      <p className="text-[12px] font-semibold text-[#374151] mb-2">Scheduled vs Worked Hours (Last 12 Weeks)</p>
      <div style={{ height: '180px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

function ProviderUtilisationChart() {
  const ref = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: PROVIDERS.map((p) => p.name),
        datasets: [
          {
            label: 'Utilisation %',
            data: PROVIDERS.map((p) => p.utilisation),
            backgroundColor: PROVIDERS.map((p) => providerBarColor(p.utilisation)),
            borderRadius: 3,
          },
        ],
      },
      plugins: [target80Plugin],
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Utilisation: ${ctx.parsed.x}%`,
            },
          },
        },
        scales: {
          x: {
            max: 100,
            ticks: { font: { size: 10 }, callback: (v) => `${v}%` },
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
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <p className="text-[12px] font-semibold text-[#374151]">Provider Utilisation</p>
        <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: TEAL }} />
            High (&ge;85%)
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: BLUE }} />
            Target
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: RED }} />
            Low (&lt;65%)
          </span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-4 border-t border-dashed flex-shrink-0" style={{ borderColor: GOLD }} />
            80% target
          </span>
        </div>
      </div>
      <div style={{ height: '210px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

export default function PracticeManagerDashboard() {
  return (
    <figure
      className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white"
      aria-label="Practice manager compliance and utilisation dashboard showing illustrative data"
    >
      <div className="bg-[#030F23] px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">Practice Manager Dashboard</span>
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
        <GroupedBarChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-3">
        <ProviderUtilisationChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-5">
        <p className="text-[12px] font-semibold text-[#374151] mb-3">Compliance Task Tracker</p>
        <div className="overflow-x-auto">
          <table className="w-full text-[12px]">
            <thead>
              <tr className="border-b border-[#E5E7EB]">
                <th className="text-left pb-2 text-[#6B7280] font-semibold">Task</th>
                <th className="text-left pb-2 text-[#6B7280] font-semibold">Due</th>
                <th className="text-left pb-2 text-[#6B7280] font-semibold">Owner</th>
                <th className="text-center pb-2 text-[#6B7280] font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {COMPLIANCE_TASKS.map((row) => (
                <tr key={row.task} className="border-b border-[#F3F4F6] last:border-0">
                  <td className="py-2 text-[#374151] font-medium">{row.task}</td>
                  <td className="py-2 text-[#6B7280]">{row.due}</td>
                  <td className="py-2 text-[#6B7280]">{row.owner}</td>
                  <td className="py-2 text-center">
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold"
                      style={{ background: STATUS_COLORS[row.status], color: STATUS_TEXT[row.status] }}
                    >
                      {row.status}
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
        Practice manager dashboard with illustrative data. Scheduled versus worked gap minus 14%, compliance rate 71%, 6 audit items outstanding, average provider utilisation 74%. Scheduled versus worked hours over 12 weeks. Provider utilisation by clinician with 80% target line. Compliance task tracker with 4 items.
      </figcaption>
    </figure>
  )
}
