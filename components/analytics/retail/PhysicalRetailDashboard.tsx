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

export default function PhysicalRetailDashboard() {
  const salesRef = useRef<HTMLCanvasElement>(null)
  const shrinkRef = useRef<HTMLCanvasElement>(null)
  const schedRef = useRef<HTMLCanvasElement>(null)
  const salesChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const shrinkChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const schedChart = useRef<InstanceType<typeof ChartJS> | null>(null)

  useEffect(() => {
    if (salesRef.current) {
      if (salesChart.current) salesChart.current.destroy()
      salesChart.current = new ChartJS(salesRef.current, {
        type: 'bar',
        data: {
          labels: ['Store A', 'Store B', 'Store C', 'Store D', 'Store E', 'Store F'],
          datasets: [
            { label: 'This year $k', data: [148, 141, 196, 162, 112, 83], backgroundColor: '#2a78d6' },
            { label: 'Prior year $k', data: [142, 158, 175, 154, 108, 79], backgroundColor: '#e1e0d9' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Sales by location: this year vs prior year', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { ticks: { font: { size: 11 }, callback: (v) => '$' + v + 'k' } },
          },
        },
      })
    }

    if (shrinkRef.current) {
      if (shrinkChart.current) shrinkChart.current.destroy()
      shrinkChart.current = new ChartJS(shrinkRef.current, {
        type: 'bubble',
        data: {
          datasets: [
            {
              label: 'Below threshold',
              data: [
                { x: 420, y: 1.2, r: 8 },
                { x: 680, y: 0.9, r: 6 },
                { x: 510, y: 1.8, r: 10 },
                { x: 380, y: 1.4, r: 7 },
                { x: 290, y: 1.6, r: 8 },
              ],
              backgroundColor: 'rgba(27,175,122,0.6)',
            },
            {
              label: 'Above threshold',
              data: [{ x: 640, y: 3.2, r: 18 }],
              backgroundColor: 'rgba(227,73,72,0.6)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Shrinkage risk by store', font: { size: 13 } },
          },
          scales: {
            x: { min: 200, max: 800, title: { display: true, text: 'Store size sqm', font: { size: 11 } }, ticks: { font: { size: 11 } } },
            y: { min: 0, max: 4, title: { display: true, text: 'Shrinkage %', font: { size: 11 } }, ticks: { font: { size: 11 }, callback: (v) => v + '%' } },
          },
        },
      })
    }

    if (schedRef.current) {
      if (schedChart.current) schedChart.current.destroy()
      schedChart.current = new ChartJS(schedRef.current, {
        type: 'bar',
        data: {
          labels: ['Store A', 'Store B', 'Store C', 'Store D', 'Store E', 'Store F'],
          datasets: [
            { label: 'Peak sales per employee $', data: [312, 284, 341, 298, 267, 248], backgroundColor: '#2a78d6' },
            { label: 'Off-peak sales per employee $', data: [198, 142, 224, 156, 188, 192], backgroundColor: '#eda100' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Sales per employee: peak vs off-peak', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { ticks: { font: { size: 11 }, callback: (v) => '$' + v } },
          },
        },
      })
    }

    return () => {
      salesChart.current?.destroy()
      shrinkChart.current?.destroy()
      schedChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Sales, shrinkage risk and scheduling efficiency across locations</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Total monthly sales</p>
          <p className="text-[22px] font-bold text-text-dark">$842k</p>
          <p className="text-[12px] text-slate">Across 6 locations</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-[13px] text-slate mb-1">Best performing store</p>
          <p className="text-[22px] font-bold text-green-700">Store C</p>
          <p className="text-[12px] text-green-600">$196k, up 12% YoY</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Shrinkage flagged</p>
          <p className="text-[22px] font-bold text-red-700">Store B</p>
          <p className="text-[12px] text-red-600">3.2%, above 2% threshold</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Scheduling gap cost</p>
          <p className="text-[22px] font-bold text-amber-700">$18k</p>
          <p className="text-[12px] text-amber-600">Overstaffed off-peak</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={salesRef} role="img" aria-label="Grouped bar chart comparing this year versus prior year sales across six store locations. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={shrinkRef} role="img" aria-label="Bubble chart showing shrinkage risk by store, with store size on the x axis, shrinkage percentage on the y axis, and revenue at risk shown by bubble size. All figures are illustrative mock data." />
          </div>
          <p className="text-[11px] text-slate mt-1">Bubble size represents revenue at risk. Red bubble above 2% threshold.</p>
          <figcaption className="text-[11px] text-slate mt-1">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      <figure>
        <div style={{ height: 160 }}>
          <canvas ref={schedRef} role="img" aria-label="Grouped bar chart showing sales per employee at peak versus off-peak periods across all six stores. All figures are illustrative mock data." />
        </div>
        <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
      </figure>
    </div>
  )
}
