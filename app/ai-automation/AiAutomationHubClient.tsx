'use client'

import { useState } from 'react'
import { Cpu, TrendingUp, Globe, ArrowRight, Code2, CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import AutomationIdeaForm from '@/components/sections/AutomationIdeaForm'

// --- Per-platform RAG status model (NDIS track) ---

type RagStatus = 'available' | 'in-progress' | 'not-started'

const RAG_LABELS: Record<RagStatus, string> = {
  'available': 'Available Now',
  'in-progress': 'In Progress',
  'not-started': 'Next',
}

const RAG_STYLES: Record<RagStatus, string> = {
  'available': 'bg-green-50 text-green-700 border-green-200',
  'in-progress': 'bg-amber-50 text-amber-700 border-amber-200',
  'not-started': 'bg-gray-50 text-slate border-border',
}

type PlatformItem = {
  title: string
  desc: string
  statusByPlatform: {
    microsoft: RagStatus
    google: RagStatus
  }
}

const ndisItems: PlatformItem[] = [
  {
    title: 'Employee Onboarding Automation',
    desc: 'Automated filing and expiry tracking for staff compliance documents — police checks, Working With Children Checks, first aid certificates, and NDIS worker screening checks.',
    statusByPlatform: { microsoft: 'available', google: 'not-started' },
  },
  {
    title: 'NDIS Funding and Burn Rate Tracker',
    desc: 'Track spend against budget for every participant in your caseload, with automatic status alerts. Fully local — no participant data ever leaves your device.',
    statusByPlatform: { microsoft: 'available', google: 'not-started' },
  },
  {
    title: 'NDIS CRM',
    desc: 'An AI-powered CRM built on Power Automate, Azure, and Power BI. Replacing legacy case management with a modern, native Microsoft platform.',
    statusByPlatform: { microsoft: 'in-progress', google: 'not-started' },
  },
]

const crossPlatformItems: { title: string; desc: string }[] = [
  {
    title: 'Change of Circumstances and RORD Automation',
    desc: 'NotebookLM-based frameworks that draft Part H fields and covering emails from source documents, already tested and in active use.',
  },
  {
    title: 'Incident Management Process',
    desc: 'A structured, auditable incident reporting and follow-up workflow, already tested and in active use.',
  },
]

// --- Lane model (Growth track only) ---

type Lane = 'now' | 'next' | 'exploring'

const LANE_LABELS: Record<Lane, string> = {
  now: 'Now',
  next: 'Next',
  exploring: 'Exploring',
}

const LANE_STYLES: Record<Lane, string> = {
  now: 'bg-gold/15 text-brand-goldLight border-gold/30',
  next: 'bg-navy/5 text-navy border-navy/15',
  exploring: 'bg-white text-slate border-border',
}

type RoadmapItem = {
  title: string
  desc: string
  lane: Lane
}

const growthItems: RoadmapItem[] = [
  {
    title: 'Lead Generation and Outreach Automation',
    desc: 'Web crawling, enrichment, and outreach sequencing, currently running for CollabEdge itself.',
    lane: 'now',
  },
  {
    title: 'Automation as a Service for Small Business',
    desc: 'Opening up the same lead generation and outreach tooling to other small and medium businesses, not just CollabEdge.',
    lane: 'next',
  },
  {
    title: 'Website and Content Build Pipelines',
    desc: 'The systems used to build and maintain sites like this one, in active use, refined as we go.',
    lane: 'exploring',
  },
]

function PlatformCard({ item, platform }: { item: PlatformItem; platform: 'microsoft' | 'google' }) {
  const status = item.statusByPlatform[platform]
  return (
    <div className="bg-white rounded-xl p-6 border border-border">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-[16px] font-bold text-text-dark leading-snug">{item.title}</h3>
        <span
          className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 ${RAG_STYLES[status]}`}
        >
          {RAG_LABELS[status]}
        </span>
      </div>
      <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
    </div>
  )
}

export default function AiAutomationHubClient() {
  const [platform, setPlatform] = useState<'microsoft' | 'google'>('microsoft')

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Roadmap
            </span>
            <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              Where Our AI and Automation Work Is Heading
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px]">
              This is a working roadmap, not a finished list. It shows what is being built now, what is queued next, and what is still being explored, across both NDIS and healthcare operations and general business growth. If something here is missing, tell us what you would automate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Platform toggle + NDIS track */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Cpu size={18} className="text-gold" />
                </div>
                <h2 className="text-[22px] font-bold text-text-dark tracking-tight leading-snug">
                  NDIS and Healthcare Automation
                </h2>
              </div>
              <div className="inline-flex rounded-lg border border-border bg-white p-1 self-start sm:self-auto">
                <button
                  onClick={() => setPlatform('microsoft')}
                  className={`text-[13px] font-semibold px-4 py-2 rounded-md transition-colors ${
                    platform === 'microsoft' ? 'bg-navy text-white' : 'text-slate hover:text-text-dark'
                  }`}
                >
                  Microsoft 365
                </button>
                <button
                  onClick={() => setPlatform('google')}
                  className={`text-[13px] font-semibold px-4 py-2 rounded-md transition-colors ${
                    platform === 'google' ? 'bg-navy text-white' : 'text-slate hover:text-text-dark'
                  }`}
                >
                  Google Workspace
                </button>
              </div>
            </div>
            <p className="text-[14px] text-slate leading-relaxed max-w-[680px] mb-5">
              Every tool in this track is being built for both platforms, since that is what most small and medium NDIS and healthcare providers are already running on. Toggle above to see where each platform stands.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="flex items-center gap-1.5 text-[13px] text-slate">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0" />
                Available now
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-slate">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                In progress
              </span>
              <span className="flex items-center gap-1.5 text-[13px] text-slate">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 flex-shrink-0" />
                Next
              </span>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {ndisItems.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <PlatformCard item={item} platform={platform} />
              </FadeIn>
            ))}
          </div>

          {/* Cross-platform completed items */}
          <FadeIn variant="fadeUp" delay={200}>
            <h3 className="text-[16px] font-bold text-text-dark mb-1">
              Already Live, Across Both Platforms
            </h3>
            <p className="text-[14px] text-slate leading-relaxed mb-5">
              These items do not depend on Microsoft or Google specifically and are already in active use.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {crossPlatformItems.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={250 + i * 70}>
                <div className="bg-white rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[16px] font-bold text-text-dark leading-snug">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 bg-green-50 text-green-700 border-green-200">
                      <CheckCircle2 size={11} />
                      Completed
                    </span>
                  </div>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Growth and Marketing track */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp size={18} className="text-gold" />
              </div>
              <h2 className="text-[22px] font-bold text-text-dark tracking-tight leading-snug">
                Growth and Marketing Automation
              </h2>
            </div>
            <p className="text-[14px] text-slate leading-relaxed max-w-[680px] mb-8">
              Separate from the NDIS work, and open to any small or medium business, not just healthcare and disability providers.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {growthItems.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-offwhite rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-[16px] font-bold text-text-dark leading-snug">{item.title}</h3>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border whitespace-nowrap flex-shrink-0 ${LANE_STYLES[item.lane]}`}
                    >
                      {LANE_LABELS[item.lane]}
                    </span>
                  </div>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Built in the open strip */}
      <section className="bg-navy py-10 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Code2 size={18} className="text-white" />
              </div>
              <p className="text-[14px] text-[#D1D5DB] leading-relaxed">
                This website was built from scratch using Claude Code, the same practitioner-first approach behind everything on this roadmap. We build and use these tools ourselves before recommending them to anyone else.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Idea submission */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What Would You Automate?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-8">
              If there is a manual task eating into your week, tell us about it. Every submission goes into the roadmap review, whether it fits the tracks above or opens up a new one.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <AutomationIdeaForm />
          </FadeIn>
        </div>
      </section>

      {/* Advisory cross-link */}
      <section className="bg-white py-12 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="bg-offwhite rounded-xl p-7 border border-border flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe size={22} className="text-brand-goldLight" />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-text-dark mb-1">
                  Need advice for your business right now?
                </h3>
                <p className="text-[14px] text-slate leading-relaxed">
                  This roadmap is about where things are heading. For recommendations specific to your organisation today, with cost benefit numbers behind them, that is AI Advisory.
                </p>
              </div>
              <a
                href="/services/ai-advisory"
                className="inline-flex items-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 py-3 hover:bg-navy-mid transition-colors whitespace-nowrap flex-shrink-0"
              >
                Explore AI Advisory
                <ArrowRight size={13} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Want to Talk Through an Idea?"
        sub="A free 30 minute consultation, no obligation, before anything gets built."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
