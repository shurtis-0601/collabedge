import type { Metadata } from 'next'
import {
  PieChart, Users, FileInput, Printer
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'NDIS Funding and Burn Rate Tracker | CollabEdge Solutions',
  description:
    'Track NDIS participant funding and burn rate locally, with no participant data ever leaving your device. Built by an active NDIS Support Coordinator.',
  openGraph: {
    title: 'NDIS Funding and Burn Rate Tracker | CollabEdge Solutions',
    description:
      'Track spend against budget for every participant in your caseload, with automatic status alerts. Fully local.',
    url: 'https://collabedgesolutions.com.au/products/funding-burn-rate-tracker',
  },
}

const features = [
  { icon: PieChart, title: 'Category Level Tracking', body: 'Spend against budget for every support category, with automatic status alerts comparing spend to plan timeline elapsed.' },
  { icon: Users, title: 'Provider and Rate Management', body: 'Track providers, rates, and sessions remaining per category, with built-in NDIS Price Guide rate lookup including remote area loading.' },
  { icon: FileInput, title: 'Automated Plan Import', body: 'Import plan documents directly, with automatic budget and date population from the plan itself.' },
  { icon: Printer, title: 'Print-Ready Reporting', body: 'Generate clean, print ready reports for reviews and audits without reformatting anything by hand.' },
]

export default function FundingTrackerPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/products" className="hover:text-brand-goldLight transition-colors">Products</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">NDIS Funding and Burn Rate Tracker</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-3 block">
              Available Now
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              NDIS Funding and Burn Rate Tracker
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Track spend against budget for every participant in your caseload, with automatic status alerts. Fully local. Nothing is ever transmitted anywhere.
            </p>
            <a href="/appt" className="btn-gold">Book a Free Consultation</a>
          </FadeIn>
        </div>
      </section>

      {/* 2. The privacy difference */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Nothing Leaves Your Device
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              This tool runs entirely in your browser, with no server and no cloud storage. Data is saved and restored through simple file export and import, stored wherever you already keep files. Participant data never travels anywhere it should not.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. What it does */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              What It Tracks
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {features.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 h-full hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center mb-4">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Built by a practitioner */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Built for a Real Caseload
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              This tracker was built by an active NDIS Support Coordinator managing a real caseload, refined over many iterations to handle the details that matter, stated versus flexible funding, PACE release periods, and the different overspend risk between therapy categories and core supports.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Final CTA */}
      <CTASection
        heading="See It in Action"
        sub="A free 30 minute walkthrough of the tracker with your own caseload structure in mind."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}