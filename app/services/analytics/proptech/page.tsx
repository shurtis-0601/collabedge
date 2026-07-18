import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import IndustryRoleTabs from '@/components/campaigns/IndustryRoleTabs'
import type { RoleTab } from '@/components/campaigns/IndustryRoleTabs'
import CampaignDashboardMock from '@/components/campaigns/CampaignDashboardMock'
import type { ChartConfig, StatCardData } from '@/components/campaigns/CampaignDashboardMock'

export const metadata: Metadata = {
  title: 'Data Analytics for Proptech | CollabEdge Solutions',
  description:
    'Property managers and principals who want clear insight into vacancy trends, rent roll performance, and portfolio patterns. CollabEdge builds the reporting layer from the data you already have.',
  openGraph: {
    title: 'Data Analytics for Proptech | CollabEdge Solutions',
    description:
      'Property managers and principals who want clear insight into vacancy trends, rent roll performance, and portfolio patterns. CollabEdge builds the reporting layer from the data you already have.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/proptech',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const tabs: RoleTab[] = [
  {
    id: 'property-manager',
    label: 'Property Manager',
    painPoints: [
      'Rent roll data lives across multiple systems, and pulling it together for a single report takes most of a day.',
      'Vacancy performance varies by property type and location, but there is no view that shows the patterns clearly enough to act on them.',
      'Maintenance spend is tracked at the invoice level, not at the property or portfolio level, so cost trends are invisible until they have already become a problem.',
      'Month-end reports are assembled manually, which means they are already out of date before they reach the principal.',
    ],
  },
  {
    id: 'principal',
    label: 'Real Estate Principal',
    painPoints: [
      'Revenue forecasting depends on occupancy assumptions that are never tested against the actual rent roll data.',
      'Agent performance is assessed informally because pulling the numbers from the software requires time the team does not have.',
      'Growth decisions, whether to take on new stock or expand to a new area, are made without a clear model of what the current portfolio actually earns per hour of management.',
    ],
  },
  {
    id: 'strata-manager',
    label: 'Strata Manager',
    painPoints: [
      'Budget versus actual across a large portfolio requires pulling from the accounting software and the property management system and reconciling them manually.',
      'Committee meeting preparation takes longer than the analysis itself, because the data presentation has to be rebuilt from scratch each time.',
      'Outstanding levy tracking and dispute history exist in the system but are never compiled into a view that shows which schemes carry the most risk.',
    ],
  },
]

const statCards: StatCardData[] = [
  { value: '147', label: 'Properties Managed' },
  { value: '96.3%', label: 'Occupancy Rate' },
  { value: '18 days', label: 'Avg Days to Lease' },
  { value: '$284k', label: 'Monthly Rent Roll' },
]

const chart: ChartConfig = {
  type: 'bar',
  title: 'Vacancy Rate by Property Type',
  labels: ['Apartments', 'Houses', 'Townhouses', 'Commercial', 'Land', 'Other'],
  values: [4, 7, 3, 12, 6, 9],
  yMax: 20,
  yUnit: '%',
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your existing property management system, accounting software, and any spreadsheets your team currently relies on. We map the data you already hold before recommending anything new.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your business actually needs answered, whether that is vacancy trends by property type, rent roll movement, or maintenance cost by portfolio segment.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

export default function ProptechAnalyticsPage() {
  return (
    <>
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
            <li className="text-text-dark font-medium">Proptech</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for PropTech
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Your Portfolio Data, Made Actionable
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Property managers and principals who take reporting seriously can see vacancy trends, rent roll performance, and maintenance patterns without building another spreadsheet. We connect the data already in your systems and build a structure your team can actually use.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="/services/digital" className="btn-ghost">About Our Digital Services</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Pain points */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-3 leading-snug">
              Where Property Businesses Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              The data is usually there. The problem is that it is scattered, manually assembled, and presented too late to be useful. Select your role to see what we hear most often.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <IndustryRoleTabs tabs={tabs} />
          </FadeIn>
        </div>
      </section>

      {/* 3. Dashboard example */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-3 leading-snug">
              This Is What Clear Looks Like
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-8 max-w-[640px]">
              A simple reporting structure built from the data already in your property management system. The numbers below are illustrative, but the structure is exactly what we build.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <CampaignDashboardMock
              dashboardTitle="Portfolio Performance Overview"
              statCards={statCards}
              chart={chart}
            />
          </FadeIn>
        </div>
      </section>

      {/* 4. How we work */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How We Work
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 90}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldLight/40 block mb-3 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[15px] text-slate leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
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
