import type { Metadata } from 'next'
import {
  Award, ArrowRight, CheckCircle,
  GraduationCap, Stethoscope, Building2,
  TrendingUp, Globe, ExternalLink
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Sinclair Hurtis — Founder | CollabEdge Solutions',
  description:
    'Sinclair Hurtis is the founder and principal consultant of CollabEdge Solutions. 30+ years across Citibank, Singtel, NAB and the Victorian Department of Health. Active NDIS Support Coordinator. Adjunct Lecturer at Monash University.',
  openGraph: {
    title: 'Sinclair Hurtis — Founder and Principal Consultant',
    description:
      'Practitioner-led consulting built on 30+ years of Fortune 500 experience and active NDIS coordination.',
    url: 'https://collabedgesolutions.com.au/about/sinclair-hurtis',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sinclair Hurtis',
  jobTitle: 'Founder and Principal Consultant',
  worksFor: {
    '@type': 'Organization',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  url: 'https://collabedgesolutions.com.au/about/sinclair-hurtis',
  description:
    'Founder of CollabEdge Solutions with 30+ years across Citibank, Singtel, NAB and the Victorian Department of Health. Active NDIS Support Coordinator and Adjunct Lecturer at Monash University.',
  alumniOf: [
    { '@type': 'Organization', name: 'Citibank' },
    { '@type': 'Organization', name: 'Singtel' },
    { '@type': 'Organization', name: 'NAB' },
    { '@type': 'Organization', name: 'Victorian Department of Health' },
  ],
  knowsAbout: [
    'NDIS Compliance',
    'Workflow Automation',
    'Enterprise Technology',
    'Data Analytics',
    'AI Advisory',
  ],
}

const careerItems = [
  {
    org: 'Citibank',
    region: 'Australia and Asia Pacific',
    focus: 'Financial services digital transformation and data strategy across regional markets.',
    icon: Building2,
  },
  {
    org: 'Singtel',
    region: 'Singapore and Asia Pacific',
    focus: 'Telecommunications enterprise operations and cross-border technology implementation.',
    icon: Globe,
  },
  {
    org: 'NAB',
    region: 'Australia',
    focus: 'Banking operations, workflow automation, and enterprise analytics.',
    icon: TrendingUp,
  },
  {
    org: 'Victorian Department of Health',
    region: 'Melbourne, VIC',
    focus: 'Government healthcare technology and operational systems.',
    icon: Stethoscope,
  },
]

const practitionerItems = [
  'Active NDIS Support Coordinator at My Ability Services',
  'Works directly with complex participants daily',
  'Tests every solution in a live environment before recommending it',
  'Navigates the NDIS Commission on behalf of real participants',
  'Adjunct Lecturer at Monash University, Masters of IT',
  'Mentors the next generation of technology professionals',
]

const expertiseTags = [
  'NDIS Compliance and Audit',
  'Workflow Automation',
  'AI Advisory',
  'Document Governance',
  'Data Analytics',
  'Enterprise Technology',
  'Digital Transformation',
  'Healthcare Operations',
  'Microsoft 365',
  'Google Workspace',
  'Financial Services',
  'Telecommunications',
  'Government Healthcare',
  'Change Management',
  'Support Coordination',
]

const bioStats = [
  { value: '30+', label: 'Years experience' },
  { value: 'APAC', label: 'Career reach' },
  { value: 'Active', label: 'NDIS practitioner' },
]

export default function SinclairHurtisPage() {
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
            <div className="flex items-center gap-2 text-[12px] text-white/40">
              <a href="/about" className="hover:text-gold transition-colors">
                About
              </a>
              <span>/</span>
              <a href="/about/team" className="hover:text-gold transition-colors">
                Our Team
              </a>
              <span>/</span>
              <span className="text-white/60">Sinclair Hurtis</span>
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
                  src="/images/sinclair-profile.jpg"
                  alt="Sinclair Hurtis, Founder, CollabEdge Solutions"
                  className="w-40 sm:w-48 h-auto md:w-full rounded-2xl"
                />
                <div className="flex flex-col gap-2 w-full items-center md:items-start">
                  <a
                    href="https://www.linkedin.com/in/sinclairhurtis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold text-gold hover:gap-3 transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    Connect on LinkedIn
                  </a>
                  <a
                    href="/appt"
                    className="inline-flex items-center gap-2 text-[12px] font-semibold text-white/50 hover:text-gold transition-colors"
                  >
                    <ArrowRight size={13} />
                    Book a consultation
                  </a>
                </div>
              </div>
            </FadeIn>

            {/* RIGHT — Bio content */}
            <FadeIn variant="fadeUp" delay={100}>
              <span className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold/60 mb-3 block">
                Founder and Principal Consultant
              </span>
              <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
                Sinclair Hurtis
              </h1>
              <p className="text-[15px] text-white/70 leading-relaxed mb-5 border-l-2 border-gold pl-5">
                With over 30 years across Fortune 500 organisations in Australia and Asia Pacific,
                Sinclair founded CollabEdge Solutions to give healthcare providers and growing
                businesses access to the same calibre of operational expertise that was previously
                available only to large enterprises.
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed mb-6">
                His career spans Citibank, Singtel, NAB, and the Victorian Department of Health,
                covering financial services, telecommunications, government, and healthcare across
                Australia and Asia Pacific. Today he applies that experience directly to NDIS
                providers, allied health operators, and Australian enterprises, as both a consultant
                and an active practitioner.
              </p>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {bioStats.map((stat, i) => (
                  <div key={i}>
                    <span className="text-[22px] font-bold text-gold block">{stat.value}</span>
                    <span className="text-[11px] text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[22px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              30 years of enterprise experience, applied to every engagement
            </h2>
            <p className="text-[14px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Before founding CollabEdge Solutions, Sinclair spent three decades leading digital
              transformation, data strategy, and operational change across some of Australia and
              Asia Pacific&apos;s most complex organisations.
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
                      <h3 className="text-[15px] font-bold text-text-dark">{item.org}</h3>
                      <span className="text-[11px] text-slate uppercase tracking-wider">
                        {item.region}
                      </span>
                    </div>
                    <p className="text-[13px] text-slate leading-relaxed">{item.focus}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioner Section */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            <FadeIn variant="slideRight">
              <GoldRuleAnimated />
              <span className="text-[11px] font-semibold tracking-[.16em] uppercase text-gold/60 mb-2 block">
                Active Practitioner
              </span>
              <h2 className="text-[22px] font-bold text-white tracking-tight mb-4 leading-snug">
                What makes Sinclair different from other consultants?
              </h2>
              <p className="text-[14px] text-white/60 leading-relaxed mb-5">
                Sinclair does not just consult on NDIS operations. He actively coordinates NDIS
                participants through My Ability Services, working directly with complex participants
                and navigating the Commission daily. Every solution he recommends to a provider
                client has been tested in a live environment first.
              </p>
              <p className="text-[14px] text-white/60 leading-relaxed">
                This dual role as practitioner and consultant is the foundation of CollabEdge&apos;s
                Built by Practitioners positioning, and the reason clients trust that
                recommendations are grounded in operational reality, not theory.
              </p>
            </FadeIn>

            <FadeIn variant="fadeUp" delay={150}>
              <div className="flex flex-col gap-3 mt-0 md:mt-12">
                {practitionerItems.map((item, i) => (
                  <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                    <div className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-lg p-4">
                      <CheckCircle size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[13px] text-white/70 leading-relaxed">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Monash Section */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="slideRight">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                <GraduationCap size={24} className="text-gold" />
              </div>
              <div className="flex-1">
                <h2 className="text-[18px] font-bold text-text-dark mb-2">
                  Teaching the next generation
                </h2>
                <p className="text-[14px] text-slate leading-relaxed max-w-[580px]">
                  As an Adjunct Lecturer at Monash University, Sinclair teaches soft skills and
                  real-world business practice to Masters of Information Technology students,
                  equipping them not just with technical knowledge, but with the communication and
                  collaboration skills that drive real-world outcomes. It is part of a broader
                  mission of giving back to the industry that shaped his career.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[11px] font-semibold text-gold uppercase tracking-wider">
                  Monash University
                </span>
                <span className="text-[11px] text-slate block mt-0.5">Adjunct Lecturer</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[20px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Areas of expertise
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <div className="flex flex-wrap gap-3">
              {expertiseTags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white border border-border text-[12px] font-medium text-text-body px-4 py-2 rounded-full hover:border-gold/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="max-w-[680px]">
              <div className="text-[40px] text-gold/20 font-serif leading-none mb-4">
                &ldquo;
              </div>
              <blockquote className="font-serif italic text-[20px] text-white leading-relaxed mb-6">
                Working with Sinclair has transformed what once felt overwhelming into something
                <em className="text-gold not-italic font-medium"> clear, structured, and
                exciting.</em> He did not just implement solutions. He taught me along the way,
                and that mentorship made all the difference to how confident I now feel running
                this business.
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Award size={16} className="text-gold" />
                </div>
                <div>
                  <span className="text-[13px] font-semibold text-white block">
                    Rebecca Delaney
                  </span>
                  <span className="text-[11px] text-gold">
                    Director, Enhance Ability Services · Geelong VIC
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Work directly with Sinclair."
        sub="Every CollabEdge engagement is senior-led from first conversation to final delivery."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}