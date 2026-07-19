'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, Title, Tooltip, Legend, Filler,
  BarController, LineController, DoughnutController
} from 'chart.js'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, Title, Tooltip, Legend, Filler,
  BarController, LineController, DoughnutController
)

export default function ConveyancerDashboard() {
  const volumeRef = useRef<HTMLCanvasElement>(null)
  const daysRef = useRef<HTMLCanvasElement>(null)
  const volumeChart = useRef<ChartJS | null>(null)
  const daysChart = useRef<ChartJS | null>(null)

  const daysData = [1, 3, 4, 6, 8, 9, 12, 14, 18, 22, 28]
  const daysColors = daysData.map(d =>
    d <= 5 ? '#e34948' : d <= 10 ? '#eda100' : '#2a78d6'
  )

  useEffect(() => {
    if (volumeRef.current) {
      if (volumeChart.current) volumeChart.current.destroy()
      volumeChart.current = new ChartJS(volumeRef.current, {
        type: 'bar',
        data: {
          labels: ['Intake', 'Searches', 'Conditional', 'Unconditional', 'Settlement ready'],
          datasets: [
            { label: 'Purchase', data: [8, 10, 9, 7, 5], backgroundColor: '#2a78d6', stack: 'a' },
            { label: 'Sale', data: [6, 8, 7, 5, 4], backgroundColor: '#1baf7a', stack: 'a' },
            { label: 'Refinance', data: [4, 4, 3, 2, 2], backgroundColor: '#eda100', stack: 'a' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Matter volume by stage and type', font: { size: 13 } } },
          scales: { x: { stacked: true, ticks: { font: { size: 11 } } }, y: { stacked: true, ticks: { font: { size: 11 } } } },
        },
      })
    }

    if (daysRef.current) {
      if (daysChart.current) daysChart.current.destroy()
      daysChart.current = new ChartJS(daysRef.current, {
        type: 'bar',
        data: {
          labels: ['M-0041', 'M-0044', 'M-0047', 'M-0049', 'M-0051', 'M-0053', 'M-0055', 'M-0058', 'M-0061', 'M-0064', 'M-0067'],
          datasets: [{
            label: 'Days to settlement',
            data: daysData,
            backgroundColor: daysColors,
          }],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Days to settlement by matter', font: { size: 13 } },
          },
          scales: { x: { ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 10 } } } },
        },
      })
    }

    return () => {
      volumeChart.current?.destroy()
      daysChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Matter pipeline, deadline tracking and trust reconciliation</h3>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Active matters</p>
          <p className="text-[22px] font-bold text-text-dark">84</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Cooling-off expiring</p>
          <p className="text-[22px] font-bold text-red-700">7</p>
          <p className="text-[12px] text-red-600">Within 2 clear business days</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-[13px] text-slate mb-1">Trust account variance</p>
          <p className="text-[22px] font-bold text-green-700">$0</p>
          <p className="text-[12px] text-green-600">Reconciled this morning</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">VOI outstanding</p>
          <p className="text-[22px] font-bold text-amber-700">12</p>
          <p className="text-[12px] text-amber-600">Not yet completed</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={volumeRef} role="img" aria-label="Stacked bar chart showing matter volume by stage broken into purchase, sale, and refinance types. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 260 }}>
            <canvas ref={daysRef} role="img" aria-label="Horizontal bar chart showing days to settlement for 11 active matters. Bars coloured red for 1 to 5 days, amber for 6 to 10 days, and blue for 11 or more days. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-300 p-4">
        <p className="text-[13px] font-semibold text-amber-800 mb-1">Compliance notice</p>
        <p className="text-[13px] text-amber-700 leading-relaxed">
          Cooling-off periods under the Sale of Land Act 1962 (Vic) run for three clear business days from the day of contract signing, excluding weekends and public holidays. VOI requirements apply to all parties. Trust account reconciliation is a statutory daily obligation under the Legal Profession Uniform Law. This dashboard surfaces deadline risk before a breach.
        </p>
      </div>
    </div>
  )
}
