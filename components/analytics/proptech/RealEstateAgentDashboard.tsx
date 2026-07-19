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

export default function RealEstateAgentDashboard() {
  const funnelRef = useRef<HTMLCanvasElement>(null)
  const sourceRef = useRef<HTMLCanvasElement>(null)
  const agentRef = useRef<HTMLCanvasElement>(null)
  const funnelChart = useRef<ChartJS | null>(null)
  const sourceChart = useRef<ChartJS | null>(null)
  const agentChart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (funnelRef.current) {
      if (funnelChart.current) funnelChart.current.destroy()
      funnelChart.current = new ChartJS(funnelRef.current, {
        type: 'bar',
        data: {
          labels: ['Portal enquiries', 'Inspections attended', 'Offers made', 'Offers accepted'],
          datasets: [{
            label: 'Count',
            data: [342, 117, 22, 14],
            backgroundColor: ['#2a78d6', '#1baf7a', '#eda100', '#008300'],
          }],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, title: { display: true, text: 'Enquiry to offer funnel', font: { size: 13 } } },
          scales: { x: { ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } },
        },
      })
    }

    if (sourceRef.current) {
      if (sourceChart.current) sourceChart.current.destroy()
      sourceChart.current = new ChartJS(sourceRef.current, {
        type: 'doughnut',
        data: {
          labels: ['REA', 'Domain', 'Direct', 'Referral', 'Social'],
          datasets: [{
            data: [48, 29, 11, 8, 4],
            backgroundColor: ['#2a78d6', '#1baf7a', '#eda100', '#e34948', '#4a3aa7'],
            cutout: '62%',
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Enquiry source split', font: { size: 13 } } },
        },
      })
    }

    if (agentRef.current) {
      if (agentChart.current) agentChart.current.destroy()
      agentChart.current = new ChartJS(agentRef.current, {
        type: 'bar',
        data: {
          labels: ['Sarah', 'James', 'Priya', 'Emma', 'Tom'],
          datasets: [
            { label: 'Enquiries', data: [94, 78, 64, 58, 52], backgroundColor: '#2a78d6' },
            { label: 'Inspections', data: [38, 28, 22, 18, 14], backgroundColor: '#1baf7a' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Agent performance', font: { size: 13 } } },
          scales: { x: { ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } },
        },
      })
    }

    return () => {
      funnelChart.current?.destroy()
      sourceChart.current?.destroy()
      agentChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Enquiry to offer conversion and compliance</h3>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Portal enquiries this month</p>
          <p className="text-[22px] font-bold text-text-dark">342</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Enquiry to inspection rate</p>
          <p className="text-[22px] font-bold text-amber-700">34%</p>
          <p className="text-[12px] text-amber-600">Down from 41% last quarter</p>
        </div>
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Inspection to offer rate</p>
          <p className="text-[22px] font-bold text-text-dark">19%</p>
          <p className="text-[12px] text-slate">Industry avg 22%</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-[13px] text-slate mb-1">Underquoting compliance</p>
          <p className="text-[22px] font-bold text-green-700">100%</p>
          <p className="text-[12px] text-green-600">All listings documented</p>
        </div>
      </div>

      {/* Charts row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 260 }}>
            <canvas ref={funnelRef} role="img" aria-label="Horizontal bar chart showing enquiry to offer funnel stages: portal enquiries, inspections attended, offers made, offers accepted. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 260 }}>
            <canvas ref={sourceRef} role="img" aria-label="Doughnut chart showing enquiry source split across REA, Domain, Direct, Referral, and Social. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      {/* Agent performance chart */}
      <figure>
        <div style={{ height: 180 }}>
          <canvas ref={agentRef} role="img" aria-label="Grouped bar chart showing enquiries and inspections per agent across the team. All figures are illustrative mock data." />
        </div>
        <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
      </figure>

      <div className="rounded-lg bg-amber-50 border border-amber-300 p-4">
        <p className="text-[13px] font-semibold text-amber-800 mb-1">Compliance notice</p>
        <p className="text-[13px] text-amber-700 leading-relaxed">
          The Estate Agents Act 1980 (Vic) requires advertised price ranges to accurately reflect genuine sale price expectation. This dashboard maintains an audit trail linking every advertised price to comparable sales data at the time of listing.
        </p>
      </div>
    </div>
  )
}
