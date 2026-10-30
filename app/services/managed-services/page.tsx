import type { Metadata } from 'next'
import {
  ClipboardCheck, FolderOpen, Brain, Workflow, FileText, Users,
  AlertCircle, BarChart3, Globe, ShieldCheck, ArrowRight,
} from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { type FAQ } from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'Ongoing NDIS Compliance Support | CollabEdge Solutions',
  alternates: { canonical: '/services/managed-services' },
  description:
    'Ongoing NDIS compliance and operations support for providers in Wyndham, Melbourne and Geelong, so you stay audit ready all year. Not plan management.',
  openGraph: {
    title: 'Managed Services: Ongoing NDIS Compliance Support | CollabEdge Solutions',
    description:
      'Monthly monitoring and maintenance of your NDIS documentation, with workflow automation complemented by AI where it helps.',
    url: 'https://www.collabedgesolutions.com.au/services/managed-services',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

const everyMonth = [
  {
    icon: ClipboardCheck,
    title: 'Documentation monitoring and maintenance',
    desc: 'We keep your policies, procedures and records current, from the participant side and the staff side, as your organisation and the rules change.',
  },
  {
    icon: FolderOpen,
    title: 'Document governance',
    desc: 'We review how your documents are stored, streamline them and maintain them, with the aim of answering any external audit question within a day.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance health checks',
    desc: 'Regular reviews against the NDIS Practice Standards are built into your monthly rate, so there are no surprises when your approved quality auditor arrives.',
  },
  {
    icon: Brain,
    title: 'AI advisory',
    desc: 'Honest advice on where AI fits your operations, what to automate and what to leave alone, as part of ongoing maintenance.',
  },
]

const modules = [
  {
    icon: Workflow,
    title: 'Workflow automation',
    desc: 'We map your current processes, find the gaps, simplify first and then build the workflows. Where it is appropriate we add AI agents, with a person approving wherever it matters.',
  },
  {
    icon: FileText,
    title: 'Case notes automation',
    desc: 'Depending on your assessment, we can build case notes automation on the Microsoft or Google tools you already have, which can reduce your reliance on third party vendors. The decision is always yours.',
  },
  {
    icon: Users,
    title: 'HR onboarding and training',
    desc: 'New staff onboarding, induction into the right training, and ongoing monitoring that support workers complete the training they need.',
  },
  {
    icon: AlertCircle,
    title: 'Incident management',
    desc: 'Notes from a shift can become a logged, monitored incident with an approval workflow. AI flags and drafts, you review and decide, and any report is prepared for your approval before it goes to the NDIS.',
  },
  {
    icon: ClipboardCheck,
    title: 'Support with department documents',
    desc: 'Administrative support to prepare documents for the NDIS, such as a Request for Review of a Decision, a review of assessments or tribunal preparation. This is administrative support, not legal advice.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards and forecasting',
    desc: 'Budgets, forecasts and operating dashboards for your business, your participants and your staff, in one clear view.',
  },
  {
    icon: Globe,
    title: 'Website, marketing and SEO',
    desc: 'We can manage the website you already have, such as Wix or Squarespace, or build a new one from the ground up with AI and automation built in.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Map and gap assessment',
    desc: 'We map how your organisation works today, find the gaps against the NDIS Practice Standards, and suggest where tools can be consolidated, with data privacy in mind.',
  },
  {
    n: '02',
    title: 'Simplify, then build',
    desc: 'We streamline your processes first, then build the workflows. Where it is appropriate we add AI agents, with a person in the loop wherever it is required.',
  },
  {
    n: '03',
    title: 'Run and improve',
    desc: 'We manage and maintain it each month and make changes as your needs change, within the hours you have chosen.',
  },
]

const together = [
  {
    title: 'Fortnightly meetings',
    desc: 'We meet every fortnight to review progress and agree what comes next.',
  },
  {
    title: 'A monthly report',
    desc: 'Each month you receive a report on what was done against your scope, and a plan for the next month with priorities agreed with you.',
  },
  {
    title: 'Products included',
    desc: 'Products we have built, including MedPrivacy, Employee Onboarding Automation and the NDIS Funding and Burn Rate Tracker, are included as part of a Managed Services engagement with a minimum monthly commitment. We integrate and support the ones you need.',
  },
  {
    title: 'Clear pricing',
    desc: 'Managed Services is a monthly commitment of hours, with a scope agreed after your assessment. Because we use AI to work productively, we can offer you better value for the hours you choose. Book a free 30 minute conversation and we will quote what suits your organisation.',
  },
]

const faqs: FAQ[] = [
  {
    q: 'What are Managed Services?',
    a: 'Managed Services is ongoing NDIS compliance and operations support for providers. Each month we monitor and maintain your documentation, keep your document systems in order, run compliance health checks and add automation where it helps, so you stay audit ready through the year.',
  },
  {
    q: 'Is this the same as NDIS plan management?',
    a: 'No. Managed Services is support for providers with their compliance and operations. It does not manage participant funds or plans.',
  },
  {
    q: 'How is it different from a one-off compliance project?',
    a: 'A project builds or rebuilds your compliance documents for a specific purpose, such as audit preparation or registration. Managed Services keeps everything current every month, so you do not have to start again before the next audit. You can also start with a single project.',
  },
  {
    q: 'Do you carry out our NDIS certification or verification audit?',
    a: 'No. Your certification or verification audit is carried out by an approved quality auditor. We prepare you for it, and our regular compliance health checks help you stay ready between audits.',
  },
  {
    q: 'Do I need to change my software?',
    a: 'No. We start with the Microsoft 365 or Google Workspace tools you already have. After your assessment we may suggest consolidating tools, always with data privacy in mind, and the decision is yours.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a free 30 minute conversation. We will talk about where you are today, then agree an assessment and a monthly commitment that suits your organisation.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Managed Services: ongoing NDIS compliance support',
  serviceType: 'Ongoing NDIS compliance and operations support',
  description:
    'Monthly monitoring and maintenance of NDIS provider documentation, document governance, compliance health checks and workflow automation complemented by AI.',
  provider: {
    '@type': 'Organization',
    name: 'CollabEdge Solutions',
    url: 'https://www.collabedgesolutions.com.au',
  },
  areaServed: ['Wyndham', 'Melbourne', 'Geelong', 'Australia'],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function ManagedServicesPage() {
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
      <div className="bg-navy px-5 sm:px-10 pt-6 pb-2">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center gap-2 text-[14px] text-[#9CA3AF]">
            <a href="/services" className="hover:text-brand-goldDark transition-colors">
              Services
            </a>
            <span>/</span>
            <span className="text-[#D1D5DB]">Managed Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <PageHero
        eyebrow="Managed Services"
        h1="Managed Services: ongoing NDIS compliance support"
        answerBlock="Managed Services is ongoing NDIS compliance and operations support for providers, not plan management. We keep your documents, workflows and day to day processes in good order every month, so you stay audit ready all year and your team gets its time back."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />

      {/* Every month */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What You Get Every Month
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Managed Services covers the ongoing work that keeps your organisation ready, so an audit is never a scramble.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {everyMonth.map((item, i) => (
              <FadeIn key={item.title} variant="fadeUp" delay={i * 70}>
                <div className="flex items-start gap-4 bg-offwhite rounded-xl p-6 border border-border h-full hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-text-dark mb-1.5">{item.title}</h3>
                    <p className="text-[16px] text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Added When Your Needs Call for It
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              After your assessment we agree which of these fit your organisation. You choose what is included, and nothing is added without your agreement.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {modules.map((item, i) => (
              <FadeIn key={item.title} variant="fadeUp" delay={(i % 2) * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <item.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[16px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it starts */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              How Managed Services Starts
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.n} variant="fadeUp" delay={i * 100}>
                <div className="bg-white/[0.04] border border-white/10 rounded-xl p-7 h-full hover:border-gold/30 transition-colors">
                  <span className="font-serif text-[40px] leading-none text-brand-goldDark block mb-3" aria-hidden="true">
                    {step.n}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-[16px] text-[#D1D5DB] leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Working together */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              How We Work Together
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {together.map((item, i) => (
              <FadeIn key={item.title} variant="fadeUp" delay={(i % 2) * 80}>
                <div className="bg-offwhite rounded-xl p-6 border border-border h-full">
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-[16px] text-slate leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Participant Privacy Comes First
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-4 max-w-[680px]">
              Every Managed Services engagement is set up with participant privacy in mind, from who can see what to how AI tools are used.
            </p>
            <p className="text-[16px] text-slate leading-relaxed max-w-[680px]">
              We design workflows so that access is limited to the people who need it, a person reviews anything AI drafts before it is saved, and identifying details are removed before information goes into an AI tool where that applies. We are open about what each tool can and cannot do.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              What Providers Say About Working with Me
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn variant="fadeUp" delay={100}>
              <div className="bg-offwhite rounded-xl p-8 border border-border h-full flex flex-col">
                <blockquote className="font-serif italic text-[17px] text-text-dark leading-relaxed mb-6 flex-1">
                  Working with Sinclair has transformed what once felt overwhelming into something clear, structured, and exciting. He did not just implement solutions. He taught me along the way.
                </blockquote>
                <span className="text-[14px] font-semibold text-text-dark block">Rebecca Delaney</span>
                <span className="text-[14px] text-slate">Director, Enhance Ability Services · Geelong VIC</span>
              </div>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={200}>
              <div className="bg-offwhite rounded-xl p-8 border border-border h-full flex flex-col">
                <blockquote className="font-serif italic text-[17px] text-text-dark leading-relaxed mb-6 flex-1">
                  As a new business owner, the stress was quite overwhelming for me, but Sinclair&apos;s expertise has been incredibly reassuring and supportive. His professionalism, integrity, and genuine care for his clients and service delivery outweighs the rest. I am extremely grateful to have him in my corner.
                </blockquote>
                <span className="text-[14px] font-semibold text-text-dark block">Katelyn Leighton</span>
                <span className="text-[14px] text-slate">Founder, Safe Star Supports · Perth WA</span>
              </div>
            </FadeIn>
          </div>
          <FadeIn variant="fadeUp" delay={250}>
            <p className="text-[16px] text-slate leading-relaxed mt-8 max-w-[680px]">
              I am an active Support Coordinator through My Ability Services, with 30 years of large enterprise and government health experience.{' '}
              <a
                href="/about/sinclair-hurtis"
                className="inline-flex items-center gap-1 font-semibold text-brand-goldLight hover:underline underline-offset-2"
              >
                About Sinclair <ArrowRight size={13} />
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-8 leading-snug">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={faqs} />
          </FadeIn>
        </div>
      </section>

      <CTASection
        heading="Ready to stay audit ready all year?"
        sub="A free 30 minute conversation about where you are and what would make the biggest difference."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}
