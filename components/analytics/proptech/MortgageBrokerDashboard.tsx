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

export default function MortgageBrokerDashboard() {
  const pipelineRef = useRef<HTMLCanvasElement>(null)
  const referralRef = useRef<HTMLCanvasElement>(null)
  const pipelineChart = useRef<ChartJS | null>(null)
  const referralChart = useRef<ChartJS | null>(null)

  useEffect(() => {
    if (pipelineRef.current) {
      if (pipelineChart.current) pipelineChart.current.destroy()
      pipelineChart.current = new ChartJS(pipelineRef.current, {
        type: 'bar',
        data: {
          labels: ['Enquiry', 'Pre-approved', 'Conditional', 'Unconditional', 'Settled'],
          datasets: [
            { label: 'Deal count', data: [24, 18, 14, 8, 4], backgroundColor: '#2a78d6', yAxisID: 'y' },
            { label: 'Value $M', data: [14.2, 11.8, 9.4, 5.8, 2.8], backgroundColor: '#eda100', yAxisID: 'y1' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Deal pipeline by stage', font: { size: 13 } } },
          scales: {
            y: { type: 'linear', position: 'left', title: { display: true, text: 'Deals', font: { size: 11 } }, ticks: { font: { size: 11 } } },
            y1: { type: 'linear', position: 'right', title: { display: true, text: 'Value $M', font: { size: 11 } }, grid: { drawOnChartArea: false }, ticks: { font: { size: 11 } } },
            x: { ticks: { font: { size: 11 } } },
          },
        },
      })
    }

    if (referralRef.current) {
      if (referralChart.current) referralChart.current.destroy()
      referralChart.current = new ChartJS(referralRef.current, {
        type: 'bar',
        data: {
          labels: ['RE Agency A', 'Accountant B', 'Financial Planner', 'RE Agency C', 'Builder D'],
          datasets: [
            { label: 'Referrals sent', data: [28, 19, 14, 11, 8], backgroundColor: '#2a78d6' },
            { label: 'Settled', data: [12, 8, 5, 4, 3], backgroundColor: '#1baf7a' },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom', labels: { font: { size: 12 } } }, title: { display: true, text: 'Referral partner performance', font: { size: 13 } } },
          scales: { x: { ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 11 } } } },
        },
      })
    }

    return () => {
      pipelineChart.current?.destroy()
      referralChart.current?.destroy()
    }
  }, [])

  return (
    <div className="bg-white rounded-xl border border-border p-6 space-y-6">
      <div>
        <p className="text-[13px] font-semibold tracking-[.14em] uppercase text-brand-goldLight mb-1">Dashboard</p>
        <h3 className="text-[18px] font-bold text-text-dark">Deal pipeline, pre-approval expiry and referral performance</h3>
      </div>

      {/* KPI tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Active deals</p>
          <p className="text-[22px] font-bold text-text-dark">68</p>
        </div>
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-[13px] text-slate mb-1">Pre-approvals expiring</p>
          <p className="text-[22px] font-bold text-red-700">11</p>
          <p className="text-[12px] text-red-600">Within 14 days</p>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-[13px] text-slate mb-1">Commission variance YTD</p>
          <p className="text-[22px] font-bold text-amber-700">$18.4k</p>
          <p className="text-[12px] text-amber-600">Unreconciled trail</p>
        </div>
        <div className="rounded-lg bg-offwhite p-4">
          <p className="text-[13px] text-slate mb-1">Referral conversion rate</p>
          <p className="text-[22px] font-bold text-text-dark">34%</p>
          <p className="text-[12px] text-slate">Partner referrals to settled</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={pipelineRef} role="img" aria-label="Grouped bar chart showing deal pipeline by stage with deal count and total value in millions. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
        <figure>
          <div style={{ height: 240 }}>
            <canvas ref={referralRef} role="img" aria-label="Grouped bar chart showing referrals sent versus settled deals by referral partner. All figures are illustrative mock data." />
          </div>
          <figcaption className="text-[11px] text-slate mt-2">All figures are illustrative mock data for demonstration purposes only. CollabEdge Solutions.</figcaption>
        </figure>
      </div>

      {/* Pre-approvals table */}
      <div>
        <h4 className="text-[14px] font-semibold text-text-dark mb-3">Pre-approvals expiring within 30 days</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-2 font-semibold text-slate pr-4">Ref</th>
                <th className="pb-2 font-semibold text-slate pr-4">Lender</th>
                <th className="pb-2 font-semibold text-slate pr-4">Approved amount</th>
                <th className="pb-2 font-semibold text-slate pr-4">Expires</th>
                <th className="pb-2 font-semibold text-slate pr-4">BID status</th>
                <th className="pb-2 font-semibold text-slate">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">D-0041</td>
                <td className="py-2 pr-4 text-slate">CBA</td>
                <td className="py-2 pr-4 text-slate">$680,000</td>
                <td className="py-2 pr-4 text-slate">7 days</td>
                <td className="py-2 pr-4 text-slate">Needs update</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-red-100 text-red-700">Urgent</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-4 text-text-dark">D-0053</td>
                <td className="py-2 pr-4 text-slate">Westpac</td>
                <td className="py-2 pr-4 text-slate">$920,000</td>
                <td className="py-2 pr-4 text-slate">11 days</td>
                <td className="py-2 pr-4 text-slate">Current</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-700">Review</span></td>
              </tr>
              <tr>
                <td className="py-2 pr-4 text-text-dark">D-0067</td>
                <td className="py-2 pr-4 text-slate">ANZ</td>
                <td className="py-2 pr-4 text-slate">$540,000</td>
                <td className="py-2 pr-4 text-slate">18 days</td>
                <td className="py-2 pr-4 text-slate">Current</td>
                <td className="py-2"><span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-100 text-amber-700">Monitor</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[13px] text-slate leading-relaxed border-l-2 border-brand-goldLight pl-3">
        Best interests duty obligations under the National Consumer Credit Protection Act 2009 apply at every recommendation. Expiring pre-approvals may require a fresh serviceability assessment before a new recommendation is made.
      </p>
    </div>
  )
}
