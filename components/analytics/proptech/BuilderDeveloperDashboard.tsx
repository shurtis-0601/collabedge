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

export default function BuilderDeveloperDashboard() {
  const progressRef = useRef<HTMLCanvasElement>(null)
  const lotsRef = useRef<HTMLCanvasElement>(null)
  const progressChart = useRef<ChartJS | null>(null)
  const lotsChart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (progressRef.current) {
      if (progressChart.current) progressChart.current.destroy()
      progressChart.current = new ChartJS(progressRef.current, {
        type: 'bar',
        data: {
          labels: ['Slab', 'Frame', 'Lock-up', 'Fixing', 'Practical completion'],
          datasets: [
            { label: 'Construction progress %', data: [100, 100, 78, 41, 0], backgroundColor: '#2a78d6' },
            { label: 'Drawdown claimed %', data: [100, 95, 60, 25, 0], backgroundColor: '#eda100' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Construction progress vs drawdown claimed', font: { size: 13 } } },
          scales: {
            y: { max: 110, ticks: { callback: (v) => `${v}%`, font: { size: 11 } } },
            x: { ticks: { font: { size: 11 } } },
          },
        },
      })
    }

    if (lotsRef.current) {
      if (lotsChart.current) lotsChart.current.destroy()
      lotsChart.current = new ChartJS(lotsRef.current, {
        type: 'bar',
        data: {
          labels: ['Stage 1', 'Stage 2', 'Stage 3', 'Stage 4'],
          datasets: [
            { label: 'Contracts signed', data: [24, 18, 14, 8], backgroundColor: '#2a78d6' },
            { label: 'Conditions met', data: [24, 16, 9, 3], backgroundColor: '#1baf7a' },
            { label: 'Sunset clause risk', data: [0, 1, 2, 2], backgroundColor: '#e34948' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Lot sales pipeline by stage', font: { size: 13 } } },
          scales: { x: { ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } },
        },
      })
    }

    return () => {
      progressChart.current?.destroy()
      lotsChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Construction progress vs financier drawdown</h3>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Active projects</p>
          <p className="text-[22px] font-bold text-text-dark">14</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Drawdown vs progress gap</p>
          <p className="text-[22px] font-bold text-red-700">-$340k</p>
          <p className="text-[12px] text-red-600">Progress ahead of claims</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Subcontractor compliance</p>
          <p className="text-[22px] font-bold text-amber-700">82%</p>
          <p className="text-[12px] text-amber-600">6 SWMS outstanding</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Lots with sunset clause risk</p>
          <p className="text-[22px] font-bold text-red-700">4</p>
          <p className="text-[12px] text-red-600">Title not registered in time</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={progressRef} role="img" aria-label="Grouped bar chart comparing construction progress percentage against drawdown claimed percentage by build stage. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={lotsRef} role="img" aria-label="Grouped bar chart showing lot sales pipeline by stage with contracts signed, conditions met, and sunset clause risk. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-300 p-4">
        <p className="text-[13px] font-semibold text-amber-800 mb-1">Compliance notice</p>
        <p className="text-[13px] text-amber-700 leading-relaxed">
          Domestic Building Insurance must be in place before taking a deposit. SWMS and subcontractor licence verification are mandatory before site mobilisation under the Building and Construction Industry Security of Payment Act 2002 (Vic). This dashboard surfaces compliance gaps before work begins.
        </p>
      </div>
    </div>
  )
}
