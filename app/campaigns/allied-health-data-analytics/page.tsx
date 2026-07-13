import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import CTASection from '@/components/ui/CTASection'
import IndustryRoleTabs from '@/components/campaigns/IndustryRoleTabs'
import type { RoleTab } from '@/components/campaigns/IndustryRoleTabs'
import CampaignDashboardMock from '@/components/campaigns/CampaignDashboardMock'
import type { ChartConfig, StatCardData } from '@/components/campaigns/CampaignDashboardMock'

export const metadata: Metadata = {
  title: 'Data Analytics for Allied Health | CollabEdge Solutions',
  description:
    'Practice managers and clinic owners who want clear insight into utilisation, patient flow, and billing patterns. CollabEdge builds the reporting layer from the data already in your practice management system.',
  robots: { index: false, follow: false },
}

const tabs: RoleTab[] = [
  {
    id: 'practice-manager',
    label: 'Practice Manager',
    painPoints: [
      'Appointment utilisation data sits inside your practice management system but is never automatically presented in a way that supports planning decisions.',
      'DNA and late cancellation trends are visible in hindsight through individual calendar reviews, not in a form that lets you see the pattern across providers and time periods.',
      'The split between bulk billing and private fees is known at the point of claim but is never compiled into a forward-looking picture of revenue risk.',
    ],
  },
  {
    id: 'clinic-owner',
    label: 'Clinic Owner',
    painPoints: [
      'There is no single view of which service types generate your best margin, so decisions about capacity and staffing are made without that information.',
      'Referral sources are recorded inconsistently, which means the relationships actually driving new patient volume are impossible to identify with confidence.',
      'Understanding whether growth is coming from new patients or from increased frequency among existing patients requires analysis that no one currently has time to do.',
    ],
  },
  {
    id: 'allied-health-provider',
    label: 'Allied Health Provider',
    painPoints: [
      'Caseload data is recorded in your practice management system but is never compiled into a summary that would make supervision and case review preparation faster.',
      'Comparing your outcome data across periods requires extracting reports manually and combining them in a spreadsheet, which takes time away from client contact.',
      'There is no easy way to see how your current caseload mix compares to the same period last year, which makes planning conversations with the practice manager harder to support with evidence.',
    ],
  },
]

const statCards: StatCardData[] = [
  { value: '78%', label: 'Appointment Utilisation' },
  { value: '8.4%', label: 'DNA Rate' },
  { value: '34', label: 'New Patients This Month' },
  { value: '312', label: 'Active Patient Load' },
]

const chart: ChartConfig = {
  type: 'trend',
  title: 'Weekly Appointment Utilisation (Last 12 Weeks)',
  points: [72, 68, 75, 71, 78, 82, 79, 76, 74, 80, 83, 78],
  xLabels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
  yMax: 100,
  yUnit: '%',
}

const steps = [
  {
    step: '01',
    title: 'Understand the data you have',
    body: 'We review your practice management system, billing records, and any manual reports your team currently produces. We map the data you already hold before recommending anything new.',
  },
  {
    step: '02',
    title: 'Design for the decisions you make',
    body: 'We build a reporting structure around the questions your practice actually needs answered, whether that is utilisation by provider, DNA trends across time periods, or service type margin.',
  },
  {
    step: '03',
    title: 'Deliver and transfer',
    body: 'You receive dashboards your team can maintain, with a handover that means the insight does not stop when we leave. Ongoing support is available if you would rather we stay close.',
  },
]

export default function AlliedHealthDataAnalyticsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Data Analytics for Allied Health
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Your Practice Data, Working Harder
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Allied health providers and practice managers who want to understand utilisation, patient flow, and billing patterns can stop digging through reports and start seeing the picture clearly. We structure the data already in your practice management system so the answers are visible.
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
              Where Allied Health Practices Get Stuck
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-8 max-w-[640px]">
              Practice management systems hold more useful data than most practices ever see. The problem is that it is never organised into a form that supports decisions. Select your role to see what we hear most often.
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
              A simple reporting structure built from the data already in your practice management system. The numbers below are illustrative, but the structure is exactly what we build.
            </p>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <CampaignDashboardMock
              dashboardTitle="Practice Utilisation Summary"
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
