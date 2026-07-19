import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import HealthTabsWithNote from '@/components/campaigns/HealthTabsWithNote'
import type { RoleTab } from '@/components/campaigns/IndustryRoleTabs'
import CampaignDashboardMock from '@/components/campaigns/CampaignDashboardMock'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

const AgedCareMarginDashboard = dynamic(
  () => import('@/components/campaigns/AgedCareMarginDashboard'),
  { ssr: false, loading: () => <div style={{ height: '400px' }} /> }
)

const NDISFundingDashboard = dynamic(
  () => import('@/components/campaigns/NDISFundingDashboard'),
  { ssr: false, loading: () => <div style={{ height: '400px' }} /> }
)

const PracticeManagerDashboard = dynamic(
  () => import('@/components/campaigns/PracticeManagerDashboard'),
  { ssr: false, loading: () => <div style={{ height: '400px' }} /> }
)

export const metadata: Metadata = {
  title: 'Data Analytics for Health and Care Providers | CollabEdge Solutions',
  description:
    'For NDIS, allied health and aged care operators wanting insight into workforce cost, client outcomes and performance, built from data you already have.',
  openGraph: {
    title: 'Data Analytics for Health and Care Providers | CollabEdge Solutions',
    description:
      'For NDIS, allied health and aged care operators wanting insight into workforce cost, client outcomes and performance, built from data you already have.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/health',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const tabs: RoleTab[] = [
  {
    id: 'ndis-provider',
    label: 'NDIS Provider',
    painPoints: [
      'Workforce costs are tracked at the payroll level but never broken down by shift type, award penalty, or site, so the drivers of margin leakage are invisible until month end.',
      'Client service hours are recorded in the CRM or rostering system but are never connected to funding utilisation or budget consumption in a way that surfaces risk early.',
      'Incident and compliance reporting is manual and reactive, compiled for audits rather than used as an ongoing operational signal.',
    ],
  },
  {
    id: 'aged-care-operator',
    label: 'Aged Care Operator',
    painPoints: [
      'Staff turnover and agency reliance are known problems but the cost is never quantified by site, role, or shift type, so it is managed as a general expense rather than a targeted one.',
      'Co-contribution debt and clients quietly reducing service hours are visible individually but never surfaced as a portfolio-level risk until revenue has already been affected.',
      'Client satisfaction data from feedback forms and complaints sits in separate records and is never connected to service usage trends that might have signalled disengagement earlier.',
    ],
  },
  {
    id: 'allied-health-practice',
    label: 'Allied Health Practice',
    painPoints: [
      'Appointment utilisation data sits inside the practice management system but is never automatically structured into a view that supports planning decisions.',
      'DNA and late cancellation trends are visible in hindsight through individual calendar reviews, not in a form that shows the pattern across providers and time periods.',
      'The split between bulk billing and private fees is known at the point of claim but is never compiled into a forward-looking picture of revenue risk.',
    ],
  },
  {
    id: 'practice-manager',
    label: 'Practice Manager',
    painPoints: [
      'Month-end reports are assembled manually from multiple system exports, which means they are already out of date before they reach the principal or board.',
      'Workforce scheduling decisions are made from experience and last year patterns rather than from real demand and utilisation data.',
      'Compliance documentation and reporting is reactive and time-consuming, built for audits rather than embedded in day-to-day operations.',
    ],
  },
]

const alliedHealthChart = {
  type: 'bar' as const,
  title: 'Appointment Utilisation by Provider (%)',
  labels: ['Dr A', 'Dr B', 'Ms C', 'Mr D', 'Ms E'],
  values: [82, 74, 91, 63, 78],
  yMax: 100,
  yUnit: '%',
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

const dashboards = {
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
}

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

export default function HealthAnalyticsPage() {
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

      {/* 2. Where they get stuck + per-tab dashboards */}
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
            <HealthTabsWithNote
              tabs={tabs}
              initialTabId="aged-care-operator"
              dashboards={dashboards}
            />
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
