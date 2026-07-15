import type { Metadata } from 'next'
import {
  Award, ArrowRight, CheckCircle,
  GraduationCap, Stethoscope, Building2,
  TrendingUp, Globe, ExternalLink,
  Database, Shield, Zap
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'Sinclair Hurtis — Founder | CollabEdge Solutions',
  description:
    'Sinclair Hurtis is the founder of CollabEdge Solutions. 30+ years across Citibank Singapore, Singtel, NAB, DBS Singapore and the Victorian Department of Health. Active NDIS Support Coordinator. Sessional Academic, Faculty of Information Technology, Monash University.',
  openGraph: {
    title: 'Sinclair Hurtis — Founder and Principal Consultant',
    description:
      'Practitioner-led consulting built on 30+ years of Fortune 500 and enterprise experience across Australia and Asia Pacific.',
    url: 'https://www.collabedgesolutions.com.au/about/sinclair-hurtis',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
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
    url: 'https://www.collabedgesolutions.com.au',
  },
  url: 'https://www.collabedgesolutions.com.au/about/sinclair-hurtis',
  description:
    'Founder of CollabEdge Solutions. 30+ years across Citibank Singapore, Singtel, NAB, DBS Singapore and the Victorian Department of Health. Active NDIS Support Coordinator and Sessional Academic, Faculty of Information Technology, Monash University.',
  alumniOf: [
    { '@type': 'Organization', name: 'Citibank Singapore' },
    { '@type': 'Organization', name: 'Singtel' },
    { '@type': 'Organization', name: 'NAB' },
    { '@type': 'Organization', name: 'DBS Singapore' },
    { '@type': 'Organization', name: 'Tech Mahindra' },
    { '@type': 'Organization', name: 'Victorian Department of Health' },
  ],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'PMP Certification, Project Management Institute' },
    { '@type': 'EducationalOccupationalCredential', name: 'Change Management Foundation and Practitioner, APMG International' },
    { '@type': 'EducationalOccupationalCredential', name: 'Agile SAFe Scrum Certification, Scaled Agile Inc.' },
  ],
  award: [
    'Going the Extra Mile (GEM) Service Excellence Award, Citibank 2024',
    'Singapore National Excellence Banking Service Award (EXSA) 2022',
    'Client Obsession CEO Award, Citibank and IDC 2021',
  ],
}

const deliveryMetrics = [
  { value: '35+', label: 'Projects led' },
  { value: '$10M', label: 'Avg annual budget' },
  { value: '25+', label: 'Direct reports' },
  { value: '200+', label: 'Indirect resources' },
  { value: '25+', label: 'Vendors managed' },
]

const careerItems = [
  {
    period: '2019 to 2024',
    org: 'Citibank Singapore',
    role: 'Digital Program Manager',
    region: 'Singapore',
    focus: "Operational process automation, data and analytics. Led digital transformation initiatives across the bank. Recipient of GEM Service Excellence Award 2024, EXSA 2022, and Client Obsession CEO Award 2021.",
    icon: Building2,
  },
  {
    period: '2014 to 2019',
    org: 'Singtel',
    role: 'Associate Director',
    region: 'Singapore and Asia Pacific',
    focus: "Delivery and operations, marketing technology, data and analytics across one of the largest telecommunications groups in Asia Pacific.",
    icon: Globe,
  },
  {
    period: '2012 to 2014',
    org: 'DBS Singapore / DTAC Thailand',
    role: 'Project and Test Manager',
    region: 'Singapore and Thailand',
    focus: "Consulting engagements and complex BI projects placed at DBS Singapore and DTAC Thailand through Tech Mahindra and Revolution IT. Delivered strategic BI and data warehousing projects for tier-one clients.",
    icon: Database,
  },
  {
    period: '2010 to 2012',
    org: 'NAB',
    role: 'Delivery Lead',
    region: 'Melbourne, Australia',
    focus: "Led the NextGen Program ($5M) and customer analytics delivery. Recognised for positive leadership and perseverance in overcoming technical obstacles.",
    icon: TrendingUp,
  },
  {
    period: '2004 to 2010',
    org: 'Tech Mahindra / Revolution IT / Teradata',
    role: 'Senior Consultant and Project Manager',
    region: 'Australia and Asia Pacific',
    focus: "System integrator and consulting roles across CRM, BI, and data warehousing. Subcontracted to Teradata. Placed at enterprise clients across Australia and Asia Pacific.",
    icon: Zap,
  },
  {
    period: '1999 to 2004',
    org: 'NAB',
    role: 'Senior Analyst and Consultant',
    region: 'Melbourne, Australia',
    focus: "Data governance, BI reporting, CRM Siebel data architecture and implementation lead.",
    icon: Database,
  },
  {
    period: '1994 to 1999',
    org: 'Victorian Department of Health',
    role: 'Analyst',
    region: 'Melbourne, Australia',
    focus: "Budgeting, workflow automation, and business intelligence for the Victorian Government health system.",
    icon: Stethoscope,
  },
]

const awards = [
  {
    award: 'Going the Extra Mile (GEM) Service Excellence Award',
    org: 'Citibank / AIA Insurance',
    year: '2024',
  },
  {
    award: 'Singapore National Excellence Banking Service Award (EXSA)',
    org: 'Singapore',
    year: '2022',
  },
  {
    award: 'Client Obsession CEO Award',
    org: 'Citibank and IDC',
    year: '2021',
  },
]

const certs = [
  { cert: 'Change Management Foundation and Practitioner Certification', body: 'APMG International' },
  { cert: 'Agile SAFe Scrum Certification', body: 'Scaled Agile Inc.' },
  { cert: 'PMP Certification', body: 'Project Management Institute' },
]

const practitionerItems = [
  'Active NDIS Support Coordinator at My Ability Services',
  'Works directly with complex participants daily',
  'Tests every solution in a live environment before recommending it',
  'Navigates the NDIS Commission on behalf of real participants',
  'Sessional Academic, Faculty of Information Technology, Monash University',
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
  { value: '4 Countries', label: 'APAC delivery experience' },
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
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
              <a href="/about" className="hover:text-brand-goldDark transition-colors">About</a>
              <span>/</span>
              <a href="/about/team" className="hover:text-brand-goldDark transition-colors">Our Team</a>
              <span>/</span>
              <span className="text-[#D1D5DB]">Sinclair Hurtis</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bio Hero */}
      <section className="bg-navy pt-8 pb-16 px-5 sm:px-10">
        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">

            <FadeIn variant="fadeIn">
              <div className="flex flex-col items-center md:items-start gap-5">
                <div className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/sinclair-profile.jpg"
                    alt="Sinclair Hurtis, Founder, CollabEdge Solutions"
                    className="w-40 sm:w-48 h-auto md:w-full rounded-2xl object-cover"
                    style={{ background: 'transparent' }}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full items-center md:items-start">
                  <a
                    href="https://www.linkedin.com/in/sinclairhurtis"
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

            <FadeIn variant="fadeUp" delay={100}>
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
                Founder and Principal Consultant
              </span>
              <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.1] mb-5">
                Sinclair Hurtis
              </h1>
              <p className="text-[15px] text-[#D1D5DB] leading-relaxed mb-5 border-l-2 border-gold pl-5">
                With over 30 years across Fortune 500 organisations in Australia and Asia Pacific,
                Sinclair founded CollabEdge Solutions to give healthcare providers and growing
                businesses access to the same calibre of operational expertise that was previously
                available only to large enterprises.
              </p>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
                His career spans Citibank Singapore, Singtel, NAB, DBS Singapore, and the Victorian
                Department of Health, covering financial services, telecommunications, government,
                and healthcare across Australia, Singapore, Thailand, and Asia Pacific. Today he
                applies that experience directly to NDIS providers, allied health operators, and
                Australian enterprises, as both a consultant and an active practitioner.
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

      {/* Delivery Metrics Strip */}
      <section className="bg-gold py-10 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {deliveryMetrics.map((stat, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 60}>
                <div className="text-center md:text-left">
                  <span className="text-[26px] font-bold text-navy block">{stat.value}</span>
                  <span className="text-[13px] font-semibold text-navy/60 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              30 years of enterprise experience
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Before founding CollabEdge Solutions, Sinclair spent three decades leading digital
              transformation, data strategy, and operational change across financial services,
              telecommunications, government, and healthcare, across Australia, Singapore,
              Thailand, and Asia Pacific.
            </p>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {careerItems.map((item, i) => (
              <FadeIn key={i} variant="slideRight" delay={i * 60}>
                <div className="flex items-start gap-5 bg-white rounded-xl p-6 border border-border hover:border-gold/30 hover:shadow-sm transition-all duration-200">
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <item.icon size={18} className="text-gold" />
                    </div>
                    <span className="text-[13px] text-slate text-center leading-tight">
                      {item.period}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-[18px] font-bold text-text-dark">{item.org}</h3>
                      <span className="text-[13px] text-slate uppercase tracking-wider">
                        {item.region}
                      </span>
                    </div>
                    <p className="text-[14px] font-semibold text-brand-goldLight mb-2">{item.role}</p>
                    <p className="text-[14px] text-slate leading-relaxed">{item.focus}</p>
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
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
                Active Practitioner
              </span>
              <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
                What makes Sinclair different from other consultants?
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-5">
                Sinclair does not just consult on NDIS operations. He actively coordinates NDIS
                participants through My Ability Services, working directly with complex participants
                and navigating the Commission daily. Every solution he recommends to a provider
                client has been tested in a live environment first.
              </p>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
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
                      <span className="text-[14px] text-[#D1D5DB] leading-relaxed">{item}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Awards and Certifications */}
      <section className="bg-white py-16 px-5 sm:px-10 border-t border-border">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <FadeIn variant="slideRight">
              <GoldRuleAnimated />
              <h2 className="text-[26px] font-bold text-text-dark mb-6">Awards</h2>
              <div className="flex flex-col gap-4">
                {awards.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Award size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-text-dark">{item.award}</p>
                      <p className="text-[13px] text-slate">{item.org} &middot; {item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn variant="fadeUp" delay={100}>
              <GoldRuleAnimated />
              <h2 className="text-[26px] font-bold text-text-dark mb-6">Certifications</h2>
              <div className="flex flex-col gap-4">
                {certs.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Shield size={15} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-[14px] font-semibold text-text-dark">{item.cert}</p>
                      <p className="text-[13px] text-slate">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Carousel */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[800px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
              Peer Endorsements
            </span>
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              What colleagues and clients say
            </h2>
            <TestimonialCarousel />
          </FadeIn>
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
                <h2 className="text-[26px] font-bold text-text-dark mb-2">
                  Teaching the next generation
                </h2>
                <p className="text-[16px] text-slate leading-relaxed max-w-[580px]">
                  As a Sessional Academic at Monash University's Faculty of Information Technology, Sinclair teaches soft skills and
                  real-world business practice to Masters of Information Technology students,
                  equipping them not just with technical knowledge, but with the communication and
                  collaboration skills that drive real-world outcomes. It is part of a broader
                  mission of giving back to the industry that shaped his career.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-[13px] font-semibold text-brand-goldDark uppercase tracking-wider">
                  Monash University
                </span>
                <span className="text-[13px] text-slate block mt-0.5">Sessional Academic</span>
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
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Areas of expertise
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <div className="flex flex-wrap gap-3">
              {expertiseTags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white border border-border text-[14px] font-medium text-text-body px-4 py-2 rounded-full hover:border-gold/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
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