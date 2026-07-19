'use client'

import { useEffect, useRef } from 'react'
import {
  Chart as ChartJS,
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, BubbleController, BarController,
  LineController, DoughnutController, Title, Tooltip, Legend, Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale, LinearScale, BarElement, LineElement,
  PointElement, ArcElement, BubbleController, BarController,
  LineController, DoughnutController, Title, Tooltip, Legend, Filler
)

type SupplierRow = {
  name: string
  fill: number
  ontime: number
  defect: number
}

const suppliers: SupplierRow[] = [
  { name: 'Supplier A', fill: 97, ontime: 96, defect: 1.2 },
  { name: 'Supplier B', fill: 94, ontime: 91, defect: 1.8 },
  { name: 'Supplier C', fill: 91, ontime: 88, defect: 2.1 },
  { name: 'Supplier D', fill: 88, ontime: 84, defect: 2.8 },
  { name: 'Supplier E', fill: 86, ontime: 82, defect: 3.1 },
  { name: 'Supplier F', fill: 74, ontime: 71, defect: 4.2 },
  { name: 'Supplier G', fill: 92, ontime: 89, defect: 1.6 },
  { name: 'Supplier H', fill: 71, ontime: 68, defect: 4.8 },
]

function fillColor(v: number): string {
  return v >= 95 ? 'bg-green-100 text-green-800' : v >= 85 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
}
function defectColor(v: number): string {
  return v < 2 ? 'bg-green-100 text-green-800' : v <= 3.5 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
}
function statusBadge(row: SupplierRow): { label: string; cls: string } {
  if (row.fill >= 95 && row.ontime >= 95 && row.defect < 2) return { label: 'On track', cls: 'bg-green-100 text-green-800' }
  if (row.fill < 85 || row.ontime < 85 || row.defect > 3.5) return { label: 'Review needed', cls: 'bg-red-100 text-red-800' }
  return { label: 'Monitor', cls: 'bg-amber-100 text-amber-800' }
}

export default function WholesaleRetailDashboard() {
  const forecastRef = useRef<HTMLCanvasElement>(null)
  const carryingRef = useRef<HTMLCanvasElement>(null)
  const forecastChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const carryingChart = useRef<InstanceType<typeof ChartJS> | null>(null)

  useEffect(() => {
    if (forecastRef.current) {
      if (forecastChart.current) forecastChart.current.destroy()
      forecastChart.current = new ChartJS(forecastRef.current, {
        type: 'line',
        data: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Forecast $k',
              data: [284, 298, 312, 342, 318, 364, 288, 294, 328, 341, 356, 368],
              borderColor: '#2a78d6',
              backgroundColor: 'transparent',
              tension: 0.3,
              pointRadius: 3,
            },
            {
              label: 'Actual $k',
              data: [271, 284, 334, 358, 302, 341, 274, 312, 348, 328, 342, 382],
              borderColor: '#1baf7a',
              backgroundColor: 'transparent',
              tension: 0.3,
              pointRadius: 3,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Forecast vs actual sales 12 months', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { ticks: { font: { size: 11 }, callback: (v) => '$' + v + 'k' } },
          },
        },
      })
    }

    if (carryingRef.current) {
      if (carryingChart.current) carryingChart.current.destroy()
      carryingChart.current = new ChartJS(carryingRef.current, {
        type: 'bar',
        data: {
          labels: ['Core range', 'Seasonal', 'Accessories', 'Gifting', 'Clearance', 'Basics'],
          datasets: [
            {
              label: 'Carrying cost $k',
              data: [42, 38, 28, 22, 18, 14],
              backgroundColor: '#2a78d6',
              yAxisID: 'y',
            },
            {
              label: 'Sell-through %',
              data: [89, 54, 78, 68, 41, 92],
              backgroundColor: 'rgba(27,175,122,0.7)',
              yAxisID: 'y1',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Carrying cost vs sell-through by category', font: { size: 13 } },
          },
          scales: {
            y: {
              type: 'linear',
              position: 'left',
              title: { display: true, text: 'Carrying cost $k', font: { size: 11 } },
              ticks: { font: { size: 11 }, callback: (v) => '$' + v + 'k' },
            },
            y1: {
              type: 'linear',
              position: 'right',
              max: 110,
              title: { display: true, text: 'Sell-through %', font: { size: 11 } },
              grid: { drawOnChartArea: false },
              ticks: { font: { size: 11 }, callback: (v) => v + '%' },
            },
            x: { ticks: { font: { size: 11 } } },
          },
        },
      })
    }

    return () => {
      forecastChart.current?.destroy()
      carryingChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Supplier performance, demand forecasting and inventory efficiency</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Active suppliers</p>
          <p className="text-[22px] font-bold text-text-dark">34</p>
          <p className="text-[12px] text-slate">Across 8 categories</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Forecast accuracy</p>
          <p className="text-[22px] font-bold text-amber-700">71%</p>
          <p className="text-[12px] text-amber-600">Target 85%</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Suppliers below target</p>
          <p className="text-[22px] font-bold text-red-700">8</p>
          <p className="text-[12px] text-red-600">Fill rate below 90%</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Overstock carrying cost</p>
          <p className="text-[22px] font-bold text-red-700">$124k</p>
          <p className="text-[12px] text-red-600">Excess inventory cost</p>
        </div>
      </div>

      {/* Supplier performance heatmap */}
      <div>
        <h4 className="text-[14px] font-semibold text-text-dark mb-3">Supplier performance</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-semibold text-slate pr-4">Supplier</th>
                <th className="pb-2 font-semibold text-slate pr-4">Fill rate %</th>
                <th className="pb-2 font-semibold text-slate pr-4">On-time %</th>
                <th className="pb-2 font-semibold text-slate pr-4">Defect rate %</th>
                <th className="pb-2 font-semibold text-slate">Status</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((s) => {
                const status = statusBadge(s)
                return (
                  <tr key={s.name} className="border-b border-border/50">
                    <td className="py-2 pr-4 font-medium text-text-dark">{s.name}</td>
                    <td className="py-2 pr-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${fillColor(s.fill)}`}>{s.fill}%</span>
                    </td>
                    <td className="py-2 pr-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${fillColor(s.ontime)}`}>{s.ontime}%</span>
                    </td>
                    <td className="py-2 pr-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${defectColor(s.defect)}`}>{s.defect}%</span>
                    </td>
                    <td className="py-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${status.cls}`}>{status.label}</span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <p className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 220 }}>
            <canvas ref={forecastRef} role="img" aria-label="Dual line chart comparing forecast versus actual sales over 12 months. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 220 }}>
            <canvas ref={carryingRef} role="img" aria-label="Dual axis grouped bar chart showing carrying cost in thousands on the left axis and sell-through percentage on the right axis, by product category. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>
    </div>
  )
}
