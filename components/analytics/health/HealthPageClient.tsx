'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'
import CampaignDashboardMock from '@/components/campaigns/CampaignDashboardMock'

const AgedCareMarginDashboard = dynamic(
  () => import('@/components/campaigns/AgedCareMarginDashboard'),
  { ssr: false }
)
const NDISFundingDashboard = dynamic(
  () => import('@/components/campaigns/NDISFundingDashboard'),
  { ssr: false }
)
const PracticeManagerDashboard = dynamic(
  () => import('@/components/campaigns/PracticeManagerDashboard'),
  { ssr: false }
)
const CybersecurityDashboard = dynamic(
  () => import('@/components/analytics/health/CybersecurityDashboard'),
  { ssr: false }
)

type SegmentId =
  | 'ndis-provider'
  | 'aged-care-operator'
  | 'allied-health-practice'
  | 'practice-manager'
  | 'cybersecurity-governance'

const alliedHealthChart = {
  type: 'bar' as const,
  title: 'Appointment Utilisation by Provider (%)',
  labels: ['Dr A', 'Dr B', 'Ms C', 'Mr D', 'Ms E'],
  values: [82, 74, 91, 63, 78],
  yMax: 100,
  yUnit: '%',
}

const segmentMeta: {
  id: SegmentId
  name: string
  description: string
  painPoints: string[]
}[] = [
  {
    id: 'ndis-provider',
    name: 'NDIS Provider',
    description: 'Funding utilisation, budget risk and incident compliance',
    painPoints: [
      'Workforce costs are tracked at the payroll level but never broken down by shift type, award penalty, or site, so the drivers of margin leakage are invisible until month end.',
      'Client service hours are recorded in the CRM or rostering system but are never connected to funding utilisation or budget consumption in a way that surfaces risk early.',
      'Incident and compliance reporting is manual and reactive, compiled for audits rather than used as an ongoing operational signal.',
    ],
  },
  {
    id: 'aged-care-operator',
    name: 'Aged Care Operator',
    description: 'Workforce margin, agency cost and client retention risk',
    painPoints: [
      'Staff turnover and agency reliance are known problems but the cost is never quantified by site, role, or shift type, so it is managed as a general expense rather than a targeted one.',
      'Co-contribution debt and clients quietly reducing service hours are visible individually but never surfaced as a portfolio-level risk until revenue has already been affected.',
      'Client satisfaction data from feedback forms and complaints sits in separate records and is never connected to service usage trends that might have signalled disengagement earlier.',
    ],
  },
  {
    id: 'allied-health-practice',
    name: 'Allied Health Practice',
    description: 'Appointment utilisation, DNA rates and billing gaps',
    painPoints: [
      'Appointment utilisation data sits inside the practice management system but is never automatically structured into a view that supports planning decisions.',
      'DNA and late cancellation trends are visible in hindsight through individual calendar reviews, not in a form that shows the pattern across providers and time periods.',
      'The split between bulk billing and private fees is known at the point of claim but is never compiled into a forward-looking picture of revenue risk.',
    ],
  },
  {
    id: 'practice-manager',
    name: 'Practice Manager',
    description: 'Scheduling efficiency, compliance tasks and provider utilisation',
    painPoints: [
      'Month-end reports are assembled manually from multiple system exports, which means they are already out of date before they reach the principal or board.',
      'Workforce scheduling decisions are made from experience and last year patterns rather than from real demand and utilisation data.',
      'Compliance documentation and reporting is reactive and time-consuming, built for audits rather than embedded in day-to-day operations.',
    ],
  },
  {
    id: 'cybersecurity-governance',
    name: 'Cybersecurity and Data Governance',
    description: 'Access monitoring, breach readiness and record retention',
    painPoints: [
      'Patient and client records are accessed across multiple systems daily, but most providers have no way of knowing whether that access follows expected patterns.',
      'Systems that keep no logs at all create a blind spot: a breach there would only come to light when a patient reports something wrong.',
      'Under the Notifiable Data Breaches scheme, providers have 30 days to assess a suspected breach, and that timeline only works if identifying who was affected takes days rather than weeks.',
    ],
  },
]

const dashboardMap: Record<SegmentId, React.ReactNode> = {
  'ndis-provider': <NDISFundingDashboard />,
  'aged-care-operator': <AgedCareMarginDashboard />,
  'allied-health-practice': (
    <CampaignDashboardMock
      dashboardTitle="Allied Health Practice Dashboard"
      statCards={[
        { value: '74%', label: 'Avg Utilisation' },
        { value: '18%', label: 'DNA Rate' },
        { value: '$42k', label: 'Cancellation Risk' },
        { value: '61%', label: 'Bulk Bill Mix' },
      ]}
      chart={alliedHealthChart}
    />
  ),
  'practice-manager': <PracticeManagerDashboard />,
  'cybersecurity-governance': <CybersecurityDashboard />,
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your existing systems, whether that is a rostering platform, practice management system, aged care software, or a set of spreadsheets your team currently relies on. We map what you already hold before recommending anything new.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your business actually needs answered, whether that is workforce cost by shift type, client retention risk, utilisation by provider, or funding budget consumption. We do not build generic dashboards, we build for your specific decision points.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

const healthAnalyticsFaqs: FAQ[] = [
  {
    q: 'Does this work with the practice management or NDIS software I already use?',
    a: 'Yes, in most cases. We connect to the systems you are already running rather than asking you to adopt something new.',
  },
  {
    q: 'Is participant data safe when you build these reports?',
    a: 'Yes. We work with de-identified or aggregated data wherever possible, consistent with the same privacy-first approach behind MedPrivacy, our own de-identification tool for NDIS documentation.',
  },
  {
    q: 'Can this help with SCHADS Award or Aged Care Act compliance reporting?',
    a: 'For aged care operators specifically, yes. Our reporting for aged care operators is built to surface wage and record-keeping exposure under the SCHADS Award and the Aged Care Act 2024, rather than waiting to find it at payroll audit.',
  },
  {
    q: 'Do I need a data analyst on staff to use this?',
    a: 'No. The reporting structure is built to be read and maintained by your existing team, not to require a dedicated analyst.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: healthAnalyticsFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

export default function HealthPageClient() {
  const [activeId, setActiveId] = useState<SegmentId>('aged-care-operator')
  const active = segmentMeta.find((s) => s.id === activeId)!

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li><a href="/services/digital" className="hover:text-brand-goldLight transition-colors">Digital Services</a></li>
            <li className="text-slate-light">/</li>
            <li><a href="/services/analytics" className="hover:text-brand-goldLight transition-colors">Data Analytics</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Health Providers</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for Health Providers
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Your Health Data, Made Useful
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              NDIS providers, allied health practices and aged care operators are sitting on more data than they use. The problem is not the data, it is that it is scattered across systems, manually reconciled, and never presented in a form that supports real decisions. We build the reporting layer from what you already have.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/services/digital" className="btn-ghost">About Our Digital Services</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Card grid + pain points + dashboard */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-3 leading-snug">
              Where Health and Care Providers Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              The data is usually there. The problem is that it is never organised into a form that supports operational or financial decisions. Select your role to see what we hear most often, and what clear reporting looks like for that context.
            </p>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={100}>
            <div
              className="grid gap-3 mb-8"
              style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
            >
              {segmentMeta.map((seg) => (
                <button
                  key={seg.id}
                  onClick={() => setActiveId(seg.id)}
                  className={[
                    'rounded-xl p-4 text-left transition-all border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-goldLight',
                    activeId === seg.id
                      ? 'border-navy bg-navy/5'
                      : 'border-border bg-white hover:border-navy/30',
                  ].join(' ')}
                >
                  <p className={['text-[14px] font-semibold mb-1', activeId === seg.id ? 'text-navy' : 'text-text-dark'].join(' ')}>
                    {seg.name}
                  </p>
                  <p className="text-[12px] text-slate leading-snug">{seg.description}</p>
                </button>
              ))}
            </div>

            <div className="space-y-5 mb-8">
              {active.painPoints.map((point, i) => (
                <p
                  key={i}
                  className="text-[16px] text-slate leading-relaxed pl-4 border-l-2 border-gold/30"
                >
                  {point}
                </p>
              ))}
            </div>

            {dashboardMap[activeId]}

            {activeId === 'aged-care-operator' && (
              <>
                <div className="mt-6 rounded-xl border border-text-dark/10 bg-text-dark/[0.04] p-5">
                  <p className="text-[16px] text-slate leading-relaxed">
                    The SCHADS Award and the Aged Care Act 2024 both create specific wage and record-keeping obligations, sharpened further by the sleepover shift reforms and wage increase that took effect from mid-2026. The aged care dashboard above surfaces penalty exposure in real time rather than at payroll audit.
                  </p>
                </div>
                <p className="mt-5 text-[16px] text-slate leading-relaxed">
                  We have also developed detailed use cases across workforce turnover and agency cost, client disengagement early warning, and co-contribution debtor risk. Ask about these in your free consultation.
                </p>
              </>
            )}

            <p className="mt-4 text-[13px] text-slate/60 italic">
              All figures are illustrative mock data for demonstration purposes only.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. How we work */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              How We Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 90}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldDark/40 block mb-3 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Common Questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={healthAnalyticsFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* 5. Final CTA */}
      <CTASection
        heading="Start With a Conversation"
        sub="A free 30 minute session to look at the data you have and where the biggest reporting gaps are."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
