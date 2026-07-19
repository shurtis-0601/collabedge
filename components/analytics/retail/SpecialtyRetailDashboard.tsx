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

export default function SpecialtyRetailDashboard() {
  const marginRef = useRef<HTMLCanvasElement>(null)
  const retentionRef = useRef<HTMLCanvasElement>(null)
  const basketRef = useRef<HTMLCanvasElement>(null)
  const marginChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const retentionChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const basketChart = useRef<InstanceType<typeof ChartJS> | null>(null)

  useEffect(() => {
    if (marginRef.current) {
      if (marginChart.current) marginChart.current.destroy()
      marginChart.current = new ChartJS(marginRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Core range', 'Seasonal', 'Accessories', 'Gifting', 'Clearance'],
          datasets: [{
            data: [46, 24, 16, 9, 5],
            backgroundColor: ['#2a78d6', '#1baf7a', '#eda100', '#e34948', '#888780'],
            borderWidth: 3,
            borderColor: '#ffffff',
          }],
        },
        options: {
          cutout: '58%',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Gross margin contribution by category', font: { size: 13 } },
            tooltip: {
              callbacks: {
                label: (ctx) => {
                  const total = (ctx.dataset.data as number[]).reduce((a, b) => a + b, 0)
                  const pct = Math.round((ctx.parsed / total) * 100)
                  return `${ctx.label}: ${pct}% of margin`
                },
              },
            },
          },
        },
      })
    }

    if (retentionRef.current) {
      if (retentionChart.current) retentionChart.current.destroy()
      retentionChart.current = new ChartJS(retentionRef.current, {
        type: 'line',
        data: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'Retained %',
              data: [68, 66, 65, 64, 63, 62, 61, 62, 60, 61, 60, 61],
              borderColor: '#2a78d6',
              backgroundColor: 'rgba(42,120,214,0.06)',
              fill: true,
              tension: 0.3,
              pointRadius: 0,
            },
            {
              label: 'Lapsed %',
              data: [12, 14, 15, 16, 17, 18, 19, 18, 20, 19, 20, 21],
              borderColor: '#e34948',
              backgroundColor: 'transparent',
              borderDash: [5, 4],
              fill: false,
              tension: 0.3,
              pointRadius: 0,
            },
            {
              label: 'New customers %',
              data: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 18],
              borderColor: '#eda100',
              backgroundColor: 'transparent',
              fill: false,
              tension: 0.3,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Customer retention and lapse rate', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { ticks: { font: { size: 11 }, callback: (v) => v + '%' } },
          },
        },
      })
    }

    if (basketRef.current) {
      if (basketChart.current) basketChart.current.destroy()
      basketChart.current = new ChartJS(basketRef.current, {
        type: 'bar',
        data: {
          labels: ['Core range', 'Seasonal', 'Accessories', 'Gifting', 'Clearance'],
          datasets: [
            { label: 'Loyal (5+ purchases)', data: [142, 118, 96, 84, 48], backgroundColor: '#2a78d6' },
            { label: 'Repeat (2-4 purchases)', data: [98, 84, 72, 62, 38], backgroundColor: '#1baf7a' },
            { label: 'New (1 purchase)', data: [68, 58, 54, 46, 32], backgroundColor: '#eda100' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Average transaction value by customer segment', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { ticks: { font: { size: 11 }, callback: (v) => '$' + v } },
          },
        },
      })
    }

    return () => {
      marginChart.current?.destroy()
      retentionChart.current?.destroy()
      basketChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Where margin comes from and who is at risk of leaving</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Overall GMROI</p>
          <p className="text-[22px] font-bold text-text-dark">2.4x</p>
          <p className="text-[12px] text-slate">Range 0.9x to 4.1x by category</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Customer retention rate</p>
          <p className="text-[22px] font-bold text-amber-700">61%</p>
          <p className="text-[12px] text-amber-600">Down from 68% prior year</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Lapsed customers</p>
          <p className="text-[22px] font-bold text-red-700">218</p>
          <p className="text-[12px] text-red-600">No purchase in 90+ days</p>
        </div>
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-[13px] text-slate mb-1">Avg transaction value</p>
          <p className="text-[22px] font-bold text-green-700">$84</p>
          <p className="text-[12px] text-green-600">Up $6 vs prior year</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={marginRef} role="img" aria-label="Doughnut chart showing gross margin contribution split across five product categories. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={retentionRef} role="img" aria-label="Line chart showing customer retention rate, lapse rate, and new customer percentage over 12 months. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      <figure>
        <div style={{ height: 160 }}>
          <canvas ref={basketRef} role="img" aria-label="Grouped bar chart showing average transaction value by customer segment across product categories. All figures are illustrative mock data." />
        </div>
        <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
      </figure>
    </div>
  )
}
