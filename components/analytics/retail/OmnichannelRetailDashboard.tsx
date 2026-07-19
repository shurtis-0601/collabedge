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

const roasLabels = ['Organic SEO', 'Email', 'Paid search', 'Affiliates', 'Social media']
const roasValues = [11.8, 4.2, 3.8, 2.9, 2.3]
const roasColors = roasValues.map(v => v > 3 ? '#1baf7a' : v >= 2.5 ? '#eda100' : '#e34948')

export default function OmnichannelRetailDashboard() {
  const revenueRef = useRef<HTMLCanvasElement>(null)
  const roasRef = useRef<HTMLCanvasElement>(null)
  const revenueChart = useRef<InstanceType<typeof ChartJS> | null>(null)
  const roasChart = useRef<InstanceType<typeof ChartJS> | null>(null)

  useEffect(() => {
    if (revenueRef.current) {
      if (revenueChart.current) revenueChart.current.destroy()
      revenueChart.current = new ChartJS(revenueRef.current, {
        type: 'line',
        data: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [
            {
              label: 'In-store $k',
              data: [312, 298, 341, 328, 284, 264, 247, 318, 356, 334, 342, 348],
              borderColor: '#2a78d6',
              backgroundColor: 'rgba(42,120,214,0.15)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
            {
              label: 'Online $k',
              data: [142, 148, 168, 174, 162, 182, 178, 188, 194, 201, 208, 214],
              borderColor: '#1baf7a',
              backgroundColor: 'rgba(27,175,122,0.15)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
            {
              label: 'Click and collect $k',
              data: [48, 52, 58, 54, 62, 68, 64, 71, 74, 68, 72, 76],
              borderColor: '#eda100',
              backgroundColor: 'rgba(237,161,0,0.15)',
              fill: true,
              tension: 0.4,
              pointRadius: 0,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { font: { size: 12 } } },
            title: { display: true, text: 'Revenue by channel monthly', font: { size: 13 } },
          },
          scales: {
            x: { ticks: { font: { size: 11 } } },
            y: { stacked: true, ticks: { font: { size: 11 }, callback: (v) => '$' + v + 'k' } },
          },
        },
      })
    }

    if (roasRef.current) {
      if (roasChart.current) roasChart.current.destroy()
      roasChart.current = new ChartJS(roasRef.current, {
        type: 'bar',
        data: {
          labels: roasLabels,
          datasets: [{
            label: 'ROAS',
            data: roasValues,
            backgroundColor: roasColors,
          }],
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            title: { display: true, text: 'Return on ad spend by channel', font: { size: 13 } },
          },
          scales: {
            x: { min: 0, max: 14, ticks: { font: { size: 11 }, callback: (v) => v + 'x' } },
            y: { ticks: { font: { size: 11 } } },
          },
        },
      })
    }

    return () => {
      revenueChart.current?.destroy()
      roasChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Channel revenue, inventory accuracy and marketing return</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <p className="text-[13px] text-slate mb-1">Online revenue share</p>
          <p className="text-[22px] font-bold text-green-700">38%</p>
          <p className="text-[12px] text-green-600">Up from 29% last year</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Inventory accuracy</p>
          <p className="text-[22px] font-bold text-red-700">84%</p>
          <p className="text-[12px] text-red-600">Oversell rate 4.2%</p>
        </div>
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Click and collect</p>
          <p className="text-[22px] font-bold text-text-dark">31%</p>
          <p className="text-[12px] text-slate">Of online orders</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Overall ROAS</p>
          <p className="text-[22px] font-bold text-amber-700">3.2x</p>
          <p className="text-[12px] text-amber-600">Down from 4.1x prior Q</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={revenueRef} role="img" aria-label="Stacked area line chart showing monthly revenue split across in-store, online, and click and collect channels over 12 months. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={roasRef} role="img" aria-label="Horizontal bar chart showing return on ad spend by marketing channel, sorted highest to lowest. Green bars above 3x, amber for 2.5 to 3x, red below 2.5x. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      <div>
        <h4 className="text-[14px] font-semibold text-text-dark mb-3">Inventory discrepancy</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-semibold text-slate pr-4">SKU</th>
                <th className="pb-2 font-semibold text-slate pr-4">Category</th>
                <th className="pb-2 font-semibold text-slate pr-4">Shows online</th>
                <th className="pb-2 font-semibold text-slate pr-4">Physical stock</th>
                <th className="pb-2 font-semibold text-slate pr-4">Revenue at risk</th>
                <th className="pb-2 font-semibold text-slate">Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">SKU-4821</td>
                <td className="py-2 pr-4 text-slate">Footwear</td>
                <td className="py-2 pr-4 text-slate">24 units</td>
                <td className="py-2 pr-4 text-slate">8 units</td>
                <td className="py-2 pr-4 text-slate">$3,840</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">Oversell risk</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">SKU-2934</td>
                <td className="py-2 pr-4 text-slate">Apparel</td>
                <td className="py-2 pr-4 text-slate">0 units</td>
                <td className="py-2 pr-4 text-slate">31 units</td>
                <td className="py-2 pr-4 text-slate">$2,170</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-700">Missed sale</span></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-text-dark">SKU-7412</td>
                <td className="py-2 pr-4 text-slate">Accessories</td>
                <td className="py-2 pr-4 text-slate">18 units</td>
                <td className="py-2 pr-4 text-slate">3 units</td>
                <td className="py-2 pr-4 text-slate">$1,890</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">Oversell risk</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
