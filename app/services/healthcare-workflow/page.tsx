import type { Metadata } from 'next'
import {
  Zap, CheckCircle, ArrowRight, Clock,
  FileText, Mail, Calendar, RefreshCw,
  Workflow, Bell, Database, Quote
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { type FAQ } from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'Healthcare Workflow Automation | CollabEdge Solutions',
  description: 'Workflow automation for NDIS providers and healthcare operators using Microsoft 365 and Google Workspace. Reduce manual admin without new platforms. Senior-led.',
  openGraph: {
    title: 'Healthcare Workflow Automation | CollabEdge Solutions',
    description: 'Remove manual effort from day-to-day operations using tools you already own.',
    url: 'https://collabedgesolutions.com.au/services/healthcare-workflow',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Healthcare Workflow Automation',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  description: 'Workflow automation consulting for NDIS providers and healthcare operators, built on existing Microsoft 365 and Google Workspace infrastructure.',
}

const workflowFaqs: FAQ[] = [
  {
    q: 'Do I need to buy new software for automation?',
    a: 'In most cases, no. CollabEdge Solutions builds automation inside the Microsoft 365 or Google Workspace environment you already pay for, using tools already included in your subscription.',
  },
  {
    q: 'How long does a workflow automation engagement take?',
    a: 'This depends on scope. A single workflow can often be automated within 2-3 weeks. Broader engagements covering multiple processes are scoped individually during your free consultation.',
  },
  {
    q: 'Will my team need extensive retraining?',
    a: 'No. Because automations are built inside platforms your team already uses daily, the learning curve is minimal. Full handover training is included in every engagement.',
  },
  {
    q: 'What if our processes are too unique to automate?',
    a: 'Most healthcare and NDIS workflows share common patterns even when they feel unique. A free consultation will quickly clarify what can realistically be automated in your specific situation.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: workflowFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

const workflowTypes = [
  {
    icon: FileText,
    title: 'Intake and Onboarding',
    desc: 'Participant intake forms that auto-populate records and trigger the right next steps.',
  },
  {
    icon: Calendar,
    title: 'Scheduling and Reminders',
    desc: 'Appointment scheduling with automated reminders, reducing no-shows and admin time.',
  },
  {
    icon: Mail,
    title: 'Document Routing',
    desc: 'Incoming documents automatically filed, flagged, and routed to the right person.',
  },
  {
    icon: Bell,
    title: 'Compliance Alerts',
    desc: 'Automated alerts before certifications, reviews, or renewals fall due.',
  },
  {
    icon: RefreshCw,
    title: 'Reporting Automation',
    desc: 'Recurring reports generated automatically instead of built manually each time.',
  },
  {
    icon: Database,
    title: 'Data Consistency',
    desc: 'Information entered once, automatically synced across the systems that need it.',
  },
]

const processSteps = [
  { step: '01', title: 'Process Mapping', desc: 'We observe and map your current workflows to find where time is lost.' },
  { step: '02', title: 'Prioritisation', desc: 'Highest time-cost, lowest-risk processes are automated first.' },
  { step: '03', title: 'Build', desc: 'Automations are built and tested inside your existing platform.' },
  { step: '04', title: 'Handover', desc: 'Your team is trained to use and maintain the system independently.' },
]

const toolsList = [
  'Microsoft 365: Power Automate, SharePoint, Teams',
  'Google Workspace: Apps Script, Forms, Sheets',
  'Existing CRM or case management systems',
  'AI tools already included in your subscription',
]

export default function HealthcareWorkflowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <div className="bg-navy px-10 pt-6 pb-2">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeIn">
            <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
              <a href="/services" className="hover:text-brand-goldDark transition-colors">
                Services
              </a>
              <span>/</span>
              <span className="text-[#D1D5DB]">Healthcare Workflow Automation</span>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="Healthcare Workflow Automation"
        h1="Less admin. More time with participants."
        answerBlock="CollabEdge Solutions removes manual effort from day-to-day healthcare and NDIS operations using the Microsoft 365 or Google Workspace environment you already have. No new platforms, no retraining your whole team. Just the tools you own, used properly."
      />

      {/* Section — What kind of workflows can be automated? */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What kind of workflows can be automated?
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Most healthcare and NDIS providers lose time to the same handful of repetitive tasks: intake paperwork, scheduling, reminders, and document handling. CollabEdge Solutions identifies which of these are costing your team the most time and automates them using tools you already have.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {workflowTypes.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 70}>
                <div className="bg-offwhite rounded-xl p-6 border border-border h-full hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section — We automate with what you already own */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn variant="slideRight">
              <GoldRuleAnimated />
              <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-2 block">
                Our Approach
              </span>
              <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
                We automate with what you already own
              </h2>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-6">
                Most providers already have Microsoft 365 or Google Workspace, paid for and underused. CollabEdge Solutions builds automation inside those platforms using Power Automate, native workflow tools, and AI features already included in your subscription, not a new platform that adds cost and complexity.
              </p>
              <p className="text-[16px] text-[#D1D5DB] leading-relaxed">
                This means faster implementation, no extra licensing, and a system your team can actually maintain after we leave.
              </p>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={150}>
              <div className="flex flex-col gap-3">
                {toolsList.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-lg p-4"
                  >
                    <Workflow size={16} className="text-gold flex-shrink-0" />
                    <span className="text-[14px] text-[#D1D5DB]">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section — Process */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How a workflow automation engagement works
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldLight/40 block mb-2">{item.step}</span>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section — Testimonial quote */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[860px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="bg-navy rounded-xl p-8 md:p-10 relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none -translate-y-20 translate-x-20"
                style={{ background: 'rgba(198,151,63,0.05)' }}
                aria-hidden="true"
              />
              <Quote size={24} className="text-gold/40 mb-5" />
              <blockquote className="font-serif italic text-[18px] text-white leading-relaxed mb-6 max-w-[620px]">
                Working with Sinclair has transformed what once felt overwhelming into something
                <em className="text-brand-goldDark not-italic font-medium"> clear, structured, and exciting.</em> He did not just implement. He taught me along the way.
              </blockquote>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-[14px] font-semibold text-white block">Rebecca Delaney</span>
                  <span className="text-[13px] text-brand-goldDark">Director, Enhance Ability Services</span>
                </div>
                <a
                  href="/case-studies/enhance-ability-services"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-brand-goldDark hover:gap-3 transition-all duration-200"
                >
                  Read the full case study
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section — FAQ */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={workflowFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Curious what could be automated in your business?"
        sub="Free 30-minute consultation. No obligation."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}