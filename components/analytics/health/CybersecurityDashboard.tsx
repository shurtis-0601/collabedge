'use client'

import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, BarController, LineController,
  DoughnutController, Title, Tooltip, Legend, Filler,
} from 'chart.js'
import type { ChartConfiguration } from 'chart.js'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, BarController, LineController,
  DoughnutController, Title, Tooltip, Legend, Filler,
)

import { useEffect, useRef } from 'react'

const TEAL  = '#1baf7a'
const AMBER = '#eda100'
const RED   = '#e34948'
const GREY  = '#9CA3AF'
const GREEN = '#059669'

const TILES = [
  {
    label: 'Patient records accessed this month',
    value: '2.1M',
    sub: 'across 12 systems',
    subColor: '#6B7280',
  },
  {
    label: 'Unusual patterns flagged',
    value: '37',
    sub: '2.3 days avg to review, target same day',
    subColor: AMBER,
  },
  {
    label: 'Systems with no access logs',
    value: '3',
    sub: 'a breach there stays invisible',
    subColor: RED,
  },
  {
    label: 'Records safe to destroy',
    value: '61k',
    sub: '33% reduction in breach exposure',
    subColor: GREEN,
  },
]

const FLAGS = [1, 0, 2, 1, 3, 0, 1, 2, 0, 1, 2, 1, 0, 3, 1, 2, 1, 0, 9, 0, 1, 2, 1, 3, 0, 1, 0, 2, 1, 0]
const DAYS  = FLAGS.map((_, i) => `Day ${i + 1}`)
const BAR_COLORS = FLAGS.map((_, i) => (i === 18 ? RED : TEAL))

const spikeLabelPlugin = {
  id: 'cyber-spike-label',
  afterDatasetsDraw(chart: ChartJS) {
    const { ctx, scales } = chart
    const xScale = scales['x']
    const yScale = scales['y']
    if (!xScale || !yScale) return
    const x = xScale.getPixelForValue(18)
    const y = yScale.getPixelForValue(9)
    ctx.save()
    ctx.fillStyle = RED
    ctx.font = 'bold 9px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('large download:', x, y - 18)
    ctx.fillText('approved migration', x, y - 7)
    ctx.restore()
  },
}

function FlagsBarChart() {
  const ref   = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: DAYS,
        datasets: [{
          label: 'Flags',
          data: FLAGS,
          backgroundColor: BAR_COLORS,
          borderRadius: 2,
          barPercentage: 0.7,
        }],
      },
      plugins: [spikeLabelPlugin],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const base = ` Flags: ${ctx.parsed.y}`
                return ctx.dataIndex === 18
                  ? [base, ' Large download: approved migration']
                  : base
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: { size: 9 },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 10,
            },
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            suggestedMax: 12,
            ticks: { font: { size: 10 }, stepSize: 3 },
            grid: { color: '#F3F4F6' },
          },
        },
      },
    })
    return () => { chart.current?.destroy() }
  }, [])

  return (
    <div>
      <p className="text-[12px] font-semibold text-[#374151] mb-2">
        Unusual access patterns flagged each day
      </p>
      <div style={{ height: '240px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

const centreLabelPlugin = {
  id: 'cyber-centre-label',
  beforeDraw(chart: ChartJS) {
    const { ctx, chartArea } = chart
    if (!chartArea) return
    const cx = (chartArea.left + chartArea.right) / 2
    const cy = (chartArea.top + chartArea.bottom) / 2
    ctx.save()
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = 'bold 13px sans-serif'
    ctx.fillStyle = '#374151'
    ctx.fillText('12 systems', cx, cy)
    ctx.restore()
  },
}

function LogsDoughnutChart() {
  const ref   = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const config: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: ['Logged and reviewed', 'Logged not reviewed', 'No logs kept at all'],
        datasets: [{
          data: [7, 2, 3],
          backgroundColor: [TEAL, AMBER, RED],
          borderWidth: 2,
          borderColor: '#ffffff',
        }],
      },
      plugins: [centreLabelPlugin],
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: { font: { size: 11 }, boxWidth: 12, padding: 10 },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.label}: ${ctx.parsed} systems`,
            },
          },
        },
      },
    }
    chart.current = new ChartJS(ref.current, config)
    return () => { chart.current?.destroy() }
  }, [])

  return (
    <div>
      <p className="text-[12px] font-semibold text-[#374151] mb-2">
        Which systems keep access logs
      </p>
      <div style={{ height: '240px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

const FLAG_LABELS = [
  'Large downloads of records',
  'Odd out-of-hours access',
  'Unused account waking up',
  'Access from another site',
  'Repeated failed logins',
]
const FLAG_VALUES = [14, 9, 7, 5, 2]
const FLAG_COLORS = [RED, RED, AMBER, AMBER, GREY]

function FlagTypeChart() {
  const ref   = useRef<HTMLCanvasElement>(null)
  const chart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (!ref.current) return
    chart.current = new ChartJS(ref.current, {
      type: 'bar',
      data: {
        labels: FLAG_LABELS,
        datasets: [{
          label: 'Flags',
          data: FLAG_VALUES,
          backgroundColor: FLAG_COLORS,
          borderRadius: 3,
        }],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` ${ctx.parsed.x} flags`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: { font: { size: 10 }, stepSize: 5 },
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
      <p className="text-[12px] font-semibold text-[#374151] mb-2">
        What the 37 flags were by type
      </p>
      <div style={{ height: '200px', position: 'relative' }}>
        <canvas ref={ref} />
      </div>
    </div>
  )
}

export default function CybersecurityDashboard() {
  return (
    <figure
      className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-sm bg-white"
      aria-label="Cybersecurity and data governance risk dashboard showing illustrative data"
    >
      <div className="bg-[#030F23] px-4 py-3 flex items-center justify-between">
        <span className="text-[13px] font-semibold text-white">
          Cybersecurity and data governance risk
        </span>
        <span className="text-[11px] text-[#9CA3AF] border border-[#1E3A5F] rounded px-2 py-0.5">
          Illustrative
        </span>
      </div>

      <div className="bg-[#F9FAFB] px-4 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-b border-[#E5E7EB]">
        {TILES.map((tile) => (
          <div key={tile.label} className="bg-white rounded-lg border border-[#E5E7EB] p-3">
            <div className="text-[22px] font-bold leading-tight text-[#374151]">{tile.value}</div>
            <div className="text-[12px] font-semibold text-[#374151] mt-0.5 leading-snug">{tile.label}</div>
            <div className="text-[11px] leading-snug mt-0.5" style={{ color: tile.subColor }}>{tile.sub}</div>
          </div>
        ))}
      </div>

      <div className="px-5 pt-5 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <FlagsBarChart />
        <LogsDoughnutChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-4">
        <FlagTypeChart />
      </div>

      <div className="border-t border-[#E5E7EB] mx-5" />

      <div className="px-5 pt-5 pb-5">
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-[13px] text-amber-800 leading-relaxed">
            The Privacy Act 1988 and the Notifiable Data Breaches scheme require health providers to assess a suspected breach within 30 days and notify affected individuals. Three of twelve systems in this example keep no access logs, meaning a breach there would stay invisible until a patient reports it. This dashboard surfaces access risk before a breach rather than after.
          </p>
        </div>
      </div>

      <div className="bg-[#F9FAFB] border-t border-[#E5E7EB] px-4 py-2.5">
        <p className="text-[11px] text-[#9CA3AF] text-center">
          All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.
        </p>
      </div>

      <figcaption className="sr-only">
        Cybersecurity and data governance dashboard with illustrative data. 2.1 million patient records accessed across 12 systems this month. 37 unusual patterns flagged, averaging 2.3 days to review. 3 systems with no access logs. 61 thousand records safe to destroy. Daily access flag chart over 30 days with a spike of 9 on day 19 for a large download. Systems logging chart showing 7 logged and reviewed, 2 logged not reviewed, 3 with no logs. Flag breakdown by type.
      </figcaption>
    </figure>
  )
}
