import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import IndustryRoleTabs from '@/components/campaigns/IndustryRoleTabs'
import type { RoleTab } from '@/components/campaigns/IndustryRoleTabs'
import CampaignDashboardMock from '@/components/campaigns/CampaignDashboardMock'
import type { ChartConfig, StatCardData } from '@/components/campaigns/CampaignDashboardMock'

export const metadata: Metadata = {
  title: 'Data Analytics for Retail | CollabEdge Solutions',
  description:
    'Retail owners and operations managers who want clear insight into what is selling, what is not, and where their margin goes. CollabEdge builds the reporting layer from the data already in your POS.',
}

const tabs: RoleTab[] = [
  {
    id: 'retail-owner',
    label: 'Retail Owner',
    painPoints: [
      'Sales data by category and subcategory sits in the POS system but is never automatically structured into a view useful for buying decisions.',
      'Margin erosion happens gradually across a large range and is usually only visible at month-end, by which time it has already affected the result.',
      'Write-off and shrinkage data is compiled at stocktake and then set aside until the next one, rather than being tracked as a continuous risk indicator.',
    ],
  },
  {
    id: 'operations-manager',
    label: 'Operations Manager',
    painPoints: [
      'Reorder decisions are based on minimum stock rules rather than on demand patterns, which means you are either holding too much or running short.',
      'Supplier performance in terms of lead times, fill rates, and quality issues is tracked in email threads and individual memories rather than in a system that surfaces the patterns.',
      'Labour scheduling decisions are made without a clear picture of which trading periods actually drive revenue, so the allocation is rarely optimal.',
    ],
  },
  {
    id: 'buyer',
    label: 'Buyer',
    painPoints: [
      'New range performance in the first 12 weeks is assessed informally and inconsistently because there is no standard model for early identification of slow movers.',
      'Category-level margin analysis requires extracting from the POS, combining it with cost data, and building it in a spreadsheet, which means it happens too rarely to influence decisions in time.',
      'Clearance timing decisions come late because the data needed to flag underperforming lines is not presented proactively.',
    ],
  },
]

const statCards: StatCardData[] = [
  { value: '$142k', label: 'Monthly Sales' },
  { value: '38.4%', label: 'Gross Margin' },
  { value: '2.8x', label: 'Stock Turn' },
  { value: '1.2%', label: 'Shrinkage Rate' },
]

const chart: ChartConfig = {
  type: 'bar',
  title: 'Sales by Category (% of Total)',
  labels: ['Footwear', 'Apparel', 'Acc.', 'Bags', 'Childwear', 'Clearance'],
  values: [85, 72, 45, 38, 28, 15],
  yMax: 100,
  yUnit: '%',
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your POS system, inventory records, and supplier data before recommending anything. We map the data you already hold and identify where the gaps are.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your business actually needs answered, whether that is category margin, stock turn by supplier, or demand patterns across trading periods.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

export default function RetailDataAnalyticsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for Retail
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              The Numbers Behind Your Best Decisions
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Retail owners and operations managers who want to understand what is selling, what is not, and where their margin goes can stop relying on gut feel and start using the data already in their POS. We build the reporting layer that turns transaction records into clear decisions.
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
              Where Retail Businesses Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              Most retail businesses are sitting on more data than they use. The problem is that it is in the POS and never made visible in a form that supports buying, ranging, or operations decisions. Select your role to see what we hear most often.
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
              A simple reporting structure built from the data already in your POS and inventory system. The numbers below are illustrative, but the structure is exactly what we build.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <CampaignDashboardMock
              dashboardTitle="Sales Performance Dashboard"
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
