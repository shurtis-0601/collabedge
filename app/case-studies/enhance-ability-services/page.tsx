import type { Metadata } from 'next'
import {
  Building2, Quote, Target, Clock,
  TrendingUp, CheckCircle, ArrowRight,
  ArrowLeft, Calendar, MapPin
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Enhance Ability Services Case Study | CollabEdge Solutions',
  description:
    'How CollabEdge Solutions helped Enhance Ability Services, a Geelong NDIS provider, rebuild compliance and operations using Microsoft 365 — without introducing new platforms.',
  openGraph: {
    title: 'Enhance Ability Services — NDIS Operations Case Study',
    description:
      'From overwhelmed to structured. A real NDIS provider transformation, documented in full.',
    url: 'https://collabedgesolutions.com.au/case-studies/enhance-ability-services',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Enhance Ability Services — NDIS Operations Transformation',
  url: 'https://collabedgesolutions.com.au/case-studies/enhance-ability-services',
  datePublished: '2026-06-01',
  author: {
    '@type': 'Organization',
    name: 'CollabEdge Solutions',
  },
  about: {
    '@type': 'Organization',
    name: 'Enhance Ability Services',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Geelong',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
  },
  description:
    'How CollabEdge Solutions helped Enhance Ability Services rebuild NDIS compliance and operational workflows using their existing Microsoft 365 environment, with no new platforms introduced.',
}

const glanceStats = [
  { label: 'Industry', value: 'NDIS Provider' },
  { label: 'Service Area', value: 'Compliance & Automation' },
  { label: 'Tools Used', value: 'Microsoft 365' },
  { label: 'Engagement', value: 'Operational Consulting' },
]

const approachSteps = [
  'Mapped existing operational and compliance workflows',
  'Identified highest-risk and highest-effort manual processes',
  'Rebuilt documentation structure inside Microsoft 365',
  'Established repeatable, auditable processes',
  'Trained the team on the new structure directly',
]

const relatedServices = [
  {
    title: 'NDIS Compliance and Audit',
    desc: 'Compliance documentation, audit readiness, and ongoing governance support.',
    href: '/services/ndis-compliance-audit',
  },
  {
    title: 'Healthcare Workflow Automation',
    desc: 'Removing manual effort from day-to-day operational processes.',
    href: '/services/healthcare-workflow',
  },
]

export default function EnhanceAbilityServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy px-5 sm:px-10 pt-6 pb-2">
        <div className="max-w-[860px] mx-auto">
          <FadeIn variant="fadeIn">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#D1D5DB] hover:text-brand-goldDark transition-colors"
            >
              <ArrowLeft size={13} />
              All Case Studies
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="bg-navy pt-8 pb-16 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">
          <FadeIn variant="fadeUp">
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-4 block">
              Case Study
            </span>
            <h1 className="text-[28px] md:text-[42px] font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-[720px]">
              From overwhelmed to structured: how Enhance Ability Services rebuilt NDIS operations
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[14px] text-[#D1D5DB] mb-8">
              <span className="flex items-center gap-2">
                <Building2 size={14} className="text-gold" />
                Enhance Ability Services
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                Geelong, VIC
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} className="text-gold" />
                NDIS Provider
              </span>
            </div>
          </FadeIn>

          <FadeIn variant="fadeUp" delay={100}>
            <p className="text-[15px] text-[#D1D5DB] leading-relaxed max-w-[680px] border-l-2 border-gold pl-5">
              CollabEdge Solutions helped Enhance Ability Services, a Geelong-based NDIS provider, move from fragmented manual processes to structured, auditable operations, using only the Microsoft 365 environment they already had. No new platforms were introduced.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* At a Glance Strip */}
      <section className="bg-gold py-8 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {glanceStats.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div>
                  <span className="text-[13px] font-bold tracking-[.12em] uppercase text-navy/60 block mb-1">
                    {item.label}
                  </span>
                  <span className="text-[14px] font-bold text-navy block">
                    {item.value}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Full Story */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">

          {/* The Challenge */}
          <FadeIn variant="slideRight">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Target size={18} className="text-gold" />
              </div>
              <div>
                <h2 className="text-[26px] font-bold text-text-dark mb-3 leading-snug">
                  What challenge was Enhance Ability Services facing?
                </h2>
                <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
                  Enhance Ability Services was managing NDIS compliance and day-to-day operations through fragmented, manual processes. Documentation lived across multiple disconnected systems, audit readiness depended on individual memory rather than structured process, and the time spent on administrative overhead was pulling focus away from participant outcomes.
                </p>
                <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
                  Director Rebecca Delaney described the business as feeling overwhelmed by the complexity of staying compliant while still trying to grow and deliver quality support, a familiar position for many NDIS providers at a similar stage of operation.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* The Approach */}
          <FadeIn variant="slideRight" delay={100}>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <Clock size={18} className="text-gold" />
              </div>
              <div>
                <h2 className="text-[26px] font-bold text-text-dark mb-3 leading-snug">
                  How did CollabEdge Solutions approach the engagement?
                </h2>
                <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
                  CollabEdge Solutions began by mapping Enhance Ability Services&apos; existing processes end to end, working directly with Rebecca to understand where manual effort was consuming the most time and where compliance risk was highest. Rather than introducing new software, the engagement focused on rebuilding documentation and workflow structures inside the Microsoft 365 environment the business already had.
                </p>
                <p className="text-[16px] text-slate leading-relaxed mb-6 max-w-[680px]">
                  This right-fit, cost-focused approach meant no additional licensing costs, no new platform to learn, and no disruption to day-to-day operations during the transition.
                </p>
                <div className="flex flex-col gap-2">
                  {approachSteps.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-text-body">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* The Outcome */}
          <FadeIn variant="slideRight" delay={200}>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-1">
                <TrendingUp size={18} className="text-gold" />
              </div>
              <div>
                <h2 className="text-[26px] font-bold text-text-dark mb-3 leading-snug">
                  What changed for Enhance Ability Services?
                </h2>
                <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
                  Operations and documentation became structured and auditable. The administrative burden on Rebecca and her team reduced significantly, audit confidence improved, and the business moved from feeling overwhelmed to having a clear operational system they understood and trusted, built on tools they already owned.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* Full Testimonial */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">
          <FadeIn variant="fadeUp">
            <Quote size={32} className="text-gold/30 mb-6" />
            <blockquote className="font-serif italic text-[19px] md:text-[26px] text-white leading-relaxed mb-8 max-w-[700px]">
              Working with Sinclair has transformed what once felt overwhelming into something
              <em className="text-brand-goldDark not-italic font-medium"> clear, structured, and exciting.</em> He did not just implement solutions. He taught me along the way, and that mentorship made all the difference to how confident I now feel running this business.
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Building2 size={18} className="text-gold" />
              </div>
              <div>
                <span className="text-[14px] font-semibold text-white block">Rebecca Delaney</span>
                <span className="text-[14px] text-brand-goldDark block mt-0.5">Director, Enhance Ability Services · Geelong VIC</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark mb-8 leading-snug">
              Services involved in this engagement
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedServices.map((service, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 100}>
                <a
                  href={service.href}
                  className="block bg-white rounded-xl p-6 border border-border h-full hover:border-gold/40 hover:shadow-sm hover:-translate-y-[2px] transition-all duration-200 group"
                >
                  <h3 className="text-[18px] font-bold text-text-dark mb-2 group-hover:text-navy transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-slate leading-relaxed mb-4">{service.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldLight group-hover:gap-3 transition-all duration-200">
                    Learn more <ArrowRight size={12} />
                  </span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Facing a similar challenge?"
        sub="Let us talk about what is getting in the way of your operations."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
