import type { Metadata } from 'next'
import {
  TrendingUp, Globe, Building2, Award,
  CheckCircle, ArrowRight, Users,
  Zap, Star, ExternalLink
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Raj Purshotham, Strategy and Growth Advisor | CollabEdge Solutions',
  description:
    'Raj Purshotham leads Strategy, Growth and International Advisory at CollabEdge Solutions, Dubai-based with nearly 10 years at Cisco.',
  openGraph: {
    title: 'Raj Purshotham, Strategy, Growth and International Advisory',
    description:
      'Enterprise technology and go-to-market specialist with deep experience across MEA, India and Asia Pacific.',
    url: 'https://www.collabedgesolutions.com.au/about/raj-purshotham',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Raj Purshotham',
  jobTitle: 'Strategy, Growth and International Advisory',
  worksFor: {
    '@type': 'Organization',
    name: 'CollabEdge Solutions',
    url: 'https://www.collabedgesolutions.com.au',
  },
  description:
    'Fractional Consultant and Growth Advisor to CollabEdge Solutions. Based in Dubai with extensive enterprise technology and go-to-market experience across MEA, India and Asia Pacific.',
  knowsAbout: [
    'Go-to-Market Strategy',
    'Enterprise Technology',
    'International Business Development',
    'Channel Strategy',
    'Microsoft Dynamics 365',
    'PropTech',
    'Strategic Partnerships',
    'Change Management',
  ],
}

const careerItems = [
  {
    org: 'Property Automate and Dynamic Netsoft Technologies',
    period: 'Current (Fractional)',
    focus:
      'CMO at Property Automate and VP Marketing at Dynamic Netsoft Technologies. Leading go-to-market, brand, and international business development for PropTech and Microsoft D365 enterprise solutions across MEA, Southeast Asia and international markets.',
    icon: Building2,
  },
  {
    org: 'Black Box',
    period: '2017 to 2021',
    focus:
      'Director Marketing Alliances across MEA and India. Led brand strategy, channel management, and business development for a portfolio of ICT products and services across highly dynamic markets.',
    icon: TrendingUp,
  },
  {
    org: 'Cisco',
    period: '2007 to 2017, nearly 10 years',
    focus:
      'Business Development Manager and Sales Manager roles across the Middle East, Africa, Russia, India and Eastern Europe. Drove enterprise collaboration and Webex adoption across the MEAR region, building partner ecosystems and channel programmes.',
    icon: Zap,
  },
]

const focusItems = [
  'Growth strategy and market expansion',
  'Enterprise technology go-to-market',
  'International business development across MEA, India and Asia Pacific',
  'Strategic partnerships and ecosystem building',
  'Microsoft D365 and PropTech sector expertise',
  'Channel strategy and partner enablement',
  'Brand leadership and market positioning',
  'Change management and organisational transformation',
]

const bioStats = [
  { value: '10+', label: 'Years at Cisco' },
  { value: 'MEA', label: 'Primary market' },
  { value: 'Active', label: 'Fractional roles' },
]

export default function RajPurshothamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy px-5 sm:px-10 pt-6 pb-2">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeIn">
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
              <a href="/about" className="hover:text-brand-goldDark transition-colors">
                About
              </a>
              <span>/</span>
              <a href="/about/team" className="hover:text-brand-goldDark transition-colors">
                Our Team
              </a>
              <span>/</span>
              <span className="text-[#D1D5DB]">Raj Purshotham</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bio Hero */}
      <section className="bg-navy pt-8 pb-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">

            {/* LEFT — Photo */}
            <FadeIn variant="fadeIn">
              <div className="flex flex-col items-center md:items-start gap-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/team-raj.jpg"
                  alt="Raj Purshotham, Strategy, Growth and International Advisory"
                  className="w-40 sm:w-48 h-auto md:w-full rounded-2xl"
                />
                <div className="flex flex-col gap-2 w-full items-center md:items-start">
                  <a
                    href="https://www.linkedin.com/in/rajpurus/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    Connect on LinkedIn
                  </a>
                  <a
                    href="/appt"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#D1D5DB] hover:text-brand-goldDark transition-colors"
                  >
                    <ArrowRight size={13} />
                    Book a consultation
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT — Bio content */}
            <FadeIn variant="fadeUp" delay={100}>
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
                Strategy, Growth and International Advisory
              </span>
              <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-2">
                Raj Purshotham
              </h1>
              <div className="flex items-center gap-2 mb-5">
                <Globe size={13} className="text-gold/60" />
                <span className="text-[14px] text-[#9CA3AF]">Based in Dubai, UAE</span>
              </div>
              <p className="text-[15px] text-[#D1D5DB] leading-relaxed mb-5 border-l-2 border-gold pl-5">
                Raj Purshotham is a Fractional Consultant and Growth Advisor to CollabEdge
                Solutions, bringing deep enterprise technology, go-to-market, and international
                business development expertise built across nearly two decades in the Middle East,
                Africa, India and Asia Pacific.
              </p>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
                His career spans nearly 10 years at Cisco across the MEAR region, senior marketing
                and alliance roles at Black Box, and current fractional engagements at Property
                Automate and Dynamic Netsoft Technologies, where he leads international business
                development for a portfolio of Microsoft-accredited enterprise solutions. He brings
                that international network and enterprise channel expertise directly to CollabEdge
                growth and partnership strategy.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {bioStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-[22px] font-bold text-brand-goldDark block">{stat.value}</span>
                    <span className="text-[13px] text-[#9CA3AF] uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Enterprise technology across three continents
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Raj has spent his career at the intersection of enterprise technology, channel
              strategy, and international market development, building go-to-market capability
              across some of the world&apos;s most complex regions.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {careerItems.map((item, i) => (
              <FadeIn key={i} variant="slideRight" delay={i * 80}>
                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-[18px] font-bold text-text-dark">{item.org}</h3>
                      <span className="text-[13px] text-slate uppercase tracking-wider">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[14px] text-slate leading-relaxed">{item.focus}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            <FadeIn variant="slideRight">
              <GoldRuleAnimated />
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
                Role at CollabEdge
              </span>
              <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
                What Raj brings to CollabEdge
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
                Raj brings growth strategy, enterprise partnerships, and international market
                development to CollabEdge, complementing the firm with genuine international reach
                and a proven enterprise technology network across MEA, India and Asia Pacific.
              </p>
              <a
                href="https://www.linkedin.com/in/rajpurus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] text-[#9CA3AF] hover:text-brand-goldDark transition-colors"
              >
                <ExternalLink size={13} />
                Full career history on LinkedIn
              </a>
            </FadeIn>

            <FadeIn variant="fadeUp" delay={150}>
              <div className="flex flex-col gap-3 mt-0 md:mt-12">
                {focusItems.map((item, i) => (
                  <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                    <div className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#D1D5DB] leading-relaxed">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Interested in partnering with CollabEdge?"
        sub="Raj leads our growth and partnership conversations. Start with a free consultation."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}