import type { Metadata } from 'next'
import {
  Building2, Wrench, Layers, Smartphone, Link2, ArrowRight, ExternalLink,
  ClipboardList, Globe2
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Property Automate | CollabEdge Solutions',
  description:
    'Property Automate, a connected operational platform for real estate, facilities, infrastructure, and corporate workplace operations. CollabEdge Solutions is the coordinating partner for Australia and Asia Pacific.',
  openGraph: {
    title: 'Property Automate | CollabEdge Solutions',
    description:
      'Property operations technology for residential, commercial, and facilities management, coordinated by CollabEdge across Australia and Asia Pacific.',
    url: 'https://collabedgesolutions.com.au/services/partner-solutions/property-automate',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

const domains = [
  {
    icon: Building2,
    title: 'Real Estate Operations',
    desc: 'Manage property, leasing, community, customer, and portfolio operations, from enquiries and quotations through contracts, renewals, and rent schedules.',
  },
  {
    icon: Wrench,
    title: 'Facilities and Asset Management',
    desc: 'Digitise maintenance, service delivery, field teams, and asset lifecycles, with work orders, inspections, and SLA tracking.',
  },
  {
    icon: Layers,
    title: 'Infrastructure Management',
    desc: 'Coordinate distributed assets, utilities, contractors, and site operations, with scheduled inspections and compliance tracking.',
  },
  {
    icon: ClipboardList,
    title: 'Corporate Workplace Management',
    desc: 'Manage workforce services, spaces, workplace assets, and corporate facilities, from onboarding through seat and space allocation.',
  },
]

const operatingModel = [
  { step: '01', title: 'Automate', desc: 'Digitise service requests, maintenance, leasing, inspections, approvals, and recurring operational processes.' },
  { step: '02', title: 'Integrate', desc: 'Connect Property Automate with ERP, accounting, CRM, payment, and existing operational systems through APIs.' },
  { step: '03', title: 'Transform', desc: 'Create a unified operating model with reliable data, real-time insight, and measurable service performance.' },
]

const environments = [
  'Residential Communities', 'Commercial Towers', 'Mixed-Use Developments',
  'Retail Centres and Malls', 'Corporate Campuses', 'Industrial Facilities',
  'Infrastructure Assets', 'Hospitality and Hotels',
]

export default function PropertyAutomatePage() {
  return (
    <>
      <PageHero
        eyebrow="Property Automate"
        h1="One connected platform for property and facilities operations."
        answerBlock="Property Automate connects real estate operations, facilities and asset management, infrastructure services, and corporate workplace operations through one configurable platform. CollabEdge Solutions coordinates Property Automate engagements for Australian and Asia Pacific organisations."
      />

      {/* Core operational domains */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Core Operational Domains
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-10">
              Purpose-built capabilities for complex built environments. Start with the operational area that matters most, then extend the same data, workflows, and controls across the broader portfolio.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {domains.map((d, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-white rounded-xl p-6 border border-border h-full">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <d.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[16px] font-bold text-text-dark mb-2">{d.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Operating model */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Automate. Integrate. Transform.
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[680px] mb-10">
              A practical path from fragmented processes to a connected operating model.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {operatingModel.map((m, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <span className="text-[13px] font-bold text-brand-goldLight block mb-2">{m.step}</span>
                <h3 className="text-[16px] font-bold text-white mb-2">{m.title}</h3>
                <p className="text-[13.5px] text-[#D1D5DB] leading-relaxed">{m.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Built for diverse environments */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Built for Diverse Operating Environments
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px] mb-8">
              One operating model across property and infrastructure types.
            </p>
          </FadeIn>
          <div className="flex flex-wrap gap-3">
            {environments.map((env, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 40}>
                <span className="inline-block text-[13.5px] font-medium text-text-dark bg-offwhite border border-border rounded-full px-4 py-2">
                  {env}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Connected and region-ready */}
      <section className="bg-offwhite py-12 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Link2 size={18} className="text-gold" />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-text-dark mb-1.5">Connected and Region-Ready</h3>
                <p className="text-[14px] text-slate leading-relaxed max-w-[680px]">
                  Property Automate integrates with the ERP, accounting, CRM, payment, and identity systems already in use, and supports region-specific financial and compliance workflows for GCC and broader Asia Pacific real estate and corporate operations.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CollabEdge delivery note — eucalyptus */}
      <section className="bg-eucalyptus py-12 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white mb-2">
                  CollabEdge Solutions, Coordinating Partner
                </h3>
                <p className="text-[14px] text-white/85 leading-relaxed">
                  CollabEdge Solutions coordinates Property Automate engagements for organisations in Australia and Asia Pacific, providing the initial conversation and connecting you with the Property Automate delivery team for the platform deployment itself.
                </p>
              </div>
              <a
                href="/appt"
                className="inline-flex items-center gap-2 bg-white text-eucalyptus text-[14px] font-bold rounded-lg px-6 py-3 hover:bg-white/90 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Discuss Property Automate
                <ArrowRight size={14} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* External link to partner site */}
      <section className="bg-white py-10 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <p className="text-[14px] text-slate mb-3">
              To explore Property Automate directly, visit their site.
            </p>
            <a
              href="https://propertyautomate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
            >
              Visit propertyautomate.com
              <ExternalLink size={13} />
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Managing Property, Facilities, or Infrastructure at Scale?"
        sub="Talk through your portfolio, existing systems, and priority workflows with CollabEdge before the conversation moves to Property Automate."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
