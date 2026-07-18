import type { Metadata } from 'next'
import {
  ArrowRight, CheckCircle,
  TrendingUp, Clock, Target,
  Building2, Quote
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Case Studies | CollabEdge Solutions',
  description:
    'Real, documented client outcomes from CollabEdge Solutions. NDIS providers and Australian businesses, named organisations only, no anonymous claims.',
  openGraph: {
    title: 'Case Studies | CollabEdge Solutions',
    description: 'Documented client outcomes. Real organisations, real results.',
    url: 'https://www.collabedgesolutions.com.au/case-studies',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Case Studies — CollabEdge Solutions',
  url: 'https://www.collabedgesolutions.com.au/case-studies',
  description:
    'Documented client outcomes from CollabEdge Solutions consulting engagements with NDIS providers and Australian businesses.',
  hasPart: [
    {
      '@type': 'Article',
      headline: 'Enhance Ability Services — NDIS Operations Transformation',
      url: 'https://www.collabedgesolutions.com.au/case-studies/enhance-ability-services',
    },
  ],
}

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Case Studies"
        h1="Real organisations. Documented outcomes."
        answerBlock="CollabEdge Solutions publishes case studies with named clients and specific results, not anonymous testimonials. Every engagement on this page is a real organisation we have worked with, describing what actually changed."
      />

      {/* AEO — Why does CollabEdge publish named case studies? */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Why does CollabEdge Solutions publish named case studies?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              Anonymous case studies are easy to write and impossible to verify. CollabEdge Solutions only publishes outcomes from clients who have agreed to be named, because a result attached to a real organisation is the only kind of proof worth publishing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Case Study — Enhance Ability Services */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
              Featured Case Study
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug max-w-[680px]">
              How did CollabEdge Solutions help Enhance Ability Services transform their NDIS operations?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">

            {/* LEFT — Story content */}
            <FadeIn variant="slideRight">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Building2 size={18} className="text-gold" />
                </div>
                <div>
                  <span className="text-[14px] font-bold text-white block">Enhance Ability Services</span>
                  <span className="text-[14px] text-brand-goldDark">NDIS Provider · Geelong, VIC</span>
                </div>
              </div>

              <h3 className="text-[18px] font-bold text-white mb-2 mt-6">The Challenge</h3>
              <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6">
                Enhance Ability Services was managing NDIS compliance and operations through fragmented, manual processes. Documentation, audit readiness, and day-to-day workflows were consuming time that should have been spent on participant outcomes, and the business felt overwhelmed by the complexity of staying compliant.
              </p>

              <h3 className="text-[18px] font-bold text-white mb-2">The Approach</h3>
              <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-6">
                CollabEdge Solutions worked directly with the Director to map existing processes, identify where manual effort could be safely automated, and rebuild documentation and compliance workflows using the Microsoft 365 environment the business already had. No new platforms were introduced. The existing tools were simply used properly.
              </p>

              <h3 className="text-[18px] font-bold text-white mb-2">The Outcome</h3>
              <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-8">
                Operations and documentation became structured and auditable. The business moved from feeling overwhelmed to having a clear operational system they understood and trusted, with significantly reduced administrative burden and improved audit confidence.
              </p>

              {/* Quote block */}
              <div className="bg-white/[0.04] border-l-2 border-gold pl-6 py-5 pr-5 rounded-r-lg">
                <Quote size={18} className="text-gold/40 mb-3" />
                <blockquote className="font-serif italic text-[15px] text-white leading-relaxed mb-4">
                  Working with Sinclair has transformed what once felt overwhelming into something
                  <em className="text-brand-goldDark not-italic font-medium"> clear, structured, and exciting.</em> He did not just implement solutions. He taught me along the way.
                </blockquote>
                <span className="text-[14px] font-semibold text-white block">Rebecca Delaney</span>
                <span className="text-[13px] text-brand-goldDark">Director, Enhance Ability Services</span>
              </div>
            </FadeIn>

            {/* RIGHT — Results sidebar */}
            <FadeIn variant="fadeUp" delay={150}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 md:sticky md:top-24">
                <h3 className="text-[18px] font-bold tracking-[.1em] uppercase text-brand-goldDark/80 mb-5">
                  At a Glance
                </h3>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <Target size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Service Area</span>
                      <span className="text-[14px] text-[#D1D5DB]">NDIS Compliance and Workflow Automation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Engagement Type</span>
                      <span className="text-[14px] text-[#D1D5DB]">Operational consulting and documentation rebuild</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Result</span>
                      <span className="text-[14px] text-[#D1D5DB]">Structured, auditable operations and reduced administrative burden</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Tools Used</span>
                      <span className="text-[14px] text-[#D1D5DB]">Microsoft 365, existing infrastructure. No new platforms.</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/appt"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg py-3 hover:bg-gold/90 transition-colors"
                >
                  Discuss Your Situation
                  <ArrowRight size={13} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Case Study — Safe Star Supports */}
      <section id="safe-star-supports" className="bg-navy py-16 px-5 sm:px-10 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
              Case Study
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug max-w-[680px]">
              How did CollabEdge Solutions help Safe Star Supports build an audit-ready foundation?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-10">

            {/* LEFT — Story content */}
            <FadeIn variant="slideRight">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Building2 size={18} className="text-gold" />
                </div>
                <div>
                  <span className="text-[14px] font-bold text-white block">Safe Star Supports</span>
                  <span className="text-[14px] text-brand-goldDark">NDIS Provider · Perth, WA</span>
                </div>
              </div>

              <p className="text-[14px] text-[#D1D5DB] leading-relaxed mb-8">
                Katelyn came to CollabEdge as a new NDIS provider navigating a complex onboarding process. We worked together on compliance documentation, service agreements, and building an audit-ready operational foundation.
              </p>

              {/* Quote block */}
              <div className="bg-white/[0.04] border-l-2 border-gold pl-6 py-5 pr-5 rounded-r-lg">
                <Quote size={18} className="text-gold/40 mb-3" />
                <blockquote className="font-serif italic text-[15px] text-white leading-relaxed mb-4">
                  As a new business owner, the stress was quite overwhelming for me, but Sinclair&apos;s expertise has been incredibly reassuring and supportive. His professionalism, integrity, and genuine care for his clients and service delivery outweighs the rest. I am extremely grateful to have him in my corner.
                </blockquote>
                <span className="text-[14px] font-semibold text-white block">Katelyn Leighton</span>
                <span className="text-[13px] text-brand-goldDark">Founder, Safe Star Supports, Perth WA</span>
              </div>
            </FadeIn>

            {/* RIGHT — Results sidebar */}
            <FadeIn variant="fadeUp" delay={150}>
              <div className="bg-white/[0.04] border border-white/10 rounded-xl p-6 md:sticky md:top-24">
                <h3 className="text-[18px] font-bold tracking-[.1em] uppercase text-brand-goldDark/80 mb-5">
                  At a Glance
                </h3>

                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <Target size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Service Area</span>
                      <span className="text-[14px] text-[#D1D5DB]">Document Governance and NDIS Compliance</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Engagement Type</span>
                      <span className="text-[14px] text-[#D1D5DB]">New provider onboarding and compliance foundation</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[14px] font-semibold text-white block mb-0.5">Location</span>
                      <span className="text-[14px] text-[#D1D5DB]">Perth, WA</span>
                    </div>
                  </div>
                </div>

                <a
                  href="/services/document-governance"
                  className="mt-7 w-full inline-flex items-center justify-center gap-2 bg-gold text-navy text-[14px] font-bold rounded-lg py-3 hover:bg-gold/90 transition-colors"
                >
                  View Document Governance
                  <ArrowRight size={13} />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* More Studies Coming */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated center />
            <h2 className="text-[26px] font-bold text-text-dark mb-3">
              More case studies are in progress
            </h2>
            <p className="text-[14px] text-slate max-w-[480px] mx-auto mb-2">
              We are documenting outcomes from current engagements as they conclude. Every case study published here will be a named, verifiable client.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Want to be our next case study?"
        sub="Let us talk about what you are trying to solve."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
