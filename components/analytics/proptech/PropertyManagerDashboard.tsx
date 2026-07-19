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

export default function PropertyManagerDashboard() {
  const arrearsRef = useRef<HTMLCanvasElement>(null)
  const trendRef = useRef<HTMLCanvasElement>(null)
  const arrearsChart = useRef<ChartJS | null>(null)
  const trendChart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (arrearsRef.current) {
      if (arrearsChart.current) arrearsChart.current.destroy()
      arrearsChart.current = new ChartJS(arrearsRef.current, {
        type: 'bar',
        data: {
          labels: ['Houses', 'Apartments', 'Townhouses', 'Commercial', 'Units', 'Other'],
          datasets: [
            { label: '1-7 days', data: [12, 9, 7, 4, 3, 2], backgroundColor: '#2a78d6' },
            { label: '8-14 days', data: [8, 7, 6, 3, 2, 1], backgroundColor: '#eda100' },
            { label: '14+ days', data: [8, 6, 5, 2, 1, 1], backgroundColor: '#e34948' },
          ],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Arrears by property type', font: { size: 13 } } },
          scales: { x: { stacked: true, ticks: { font: { size: 11 } } }, y: { stacked: true, ticks: { font: { size: 11 } } } },
        },
      })
    }

    if (trendRef.current) {
      if (trendChart.current) trendChart.current.destroy()
      trendChart.current = new ChartJS(trendRef.current, {
        type: 'line',
        data: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Total arrears $k',
              data: [71, 68, 74, 79, 82, 88, 94, 91, 87, 84, 82, 84],
              borderColor: '#2a78d6',
              backgroundColor: 'rgba(42,120,214,0.15)',
              fill: true,
              yAxisID: 'y',
              tension: 0.3,
            },
            {
              label: 'High risk count',
              data: [6, 5, 7, 7, 8, 8, 9, 9, 8, 8, 8, 9],
              borderColor: '#e34948',
              backgroundColor: 'transparent',
              borderDash: [5, 4],
              yAxisID: 'y1',
              tension: 0.3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Arrears trend and high risk count', font: { size: 13 } } },
          scales: {
            y: { type: 'linear', position: 'left', title: { display: true, text: 'Arrears $k', font: { size: 11 } }, ticks: { font: { size: 11 } } },
            y1: { type: 'linear', position: 'right', title: { display: true, text: 'High risk', font: { size: 11 } }, grid: { drawOnChartArea: false }, ticks: { font: { size: 11 } } },
            x: { ticks: { font: { size: 11 } } },
          },
        },
      })
    }

    return () => {
      arrearsChart.current?.destroy()
      trendChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Portfolio arrears and lease renewal risk</h3>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Properties managed</p>
          <p className="text-[22px] font-bold text-text-dark">147</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Total arrears outstanding</p>
          <p className="text-[22px] font-bold text-red-700">$84k</p>
          <p className="text-[12px] text-red-600">31 tenants in arrears</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">High risk tenants</p>
          <p className="text-[22px] font-bold text-red-700">9</p>
          <p className="text-[12px] text-red-600">14 or more days overdue</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Leases expiring 60 days</p>
          <p className="text-[22px] font-bold text-amber-700">18</p>
          <p className="text-[12px] text-amber-600">6 not yet contacted</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={arrearsRef} role="img" aria-label="Stacked horizontal bar chart showing arrears by property type broken into 1-7 days, 8-14 days, and 14 plus days overdue. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 220 }}>
            <canvas ref={trendRef} role="img" aria-label="Dual axis line chart showing total arrears in thousands and high risk tenant count over 12 months. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      {/* High risk tenants table */}
      <div>
        <h4 className="text-[14px] font-semibold text-text-dark mb-3">High risk tenants</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-semibold text-slate pr-4">Ref</th>
                <th className="pb-2 font-semibold text-slate pr-4">Property type</th>
                <th className="pb-2 font-semibold text-slate pr-4">Outstanding</th>
                <th className="pb-2 font-semibold text-slate pr-4">Days overdue</th>
                <th className="pb-2 font-semibold text-slate pr-4">Notice status</th>
                <th className="pb-2 font-semibold text-slate">Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">T-0041</td>
                <td className="py-2 pr-4 text-slate">House</td>
                <td className="py-2 pr-4 text-slate">$4,820</td>
                <td className="py-2 pr-4 text-slate">22 days</td>
                <td className="py-2 pr-4 text-slate">Notice issued</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">High</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">T-0087</td>
                <td className="py-2 pr-4 text-slate">Apartment</td>
                <td className="py-2 pr-4 text-slate">$3,240</td>
                <td className="py-2 pr-4 text-slate">19 days</td>
                <td className="py-2 pr-4 text-slate">Pending</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">High</span></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-text-dark">T-0112</td>
                <td className="py-2 pr-4 text-slate">Townhouse</td>
                <td className="py-2 pr-4 text-slate">$2,180</td>
                <td className="py-2 pr-4 text-slate">17 days</td>
                <td className="py-2 pr-4 text-slate">Pending</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">High</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[13px] text-slate leading-relaxed border-l-2 border-brand-goldLight pl-3">
        Residential Tenancies Act 1997 (Vic) notice periods apply to all arrears action. This view surfaces at-risk tenants before a breach rather than after.
      </p>
    </div>
  )
}
