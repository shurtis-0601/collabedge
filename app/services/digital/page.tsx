import type { Metadata } from 'next'
import {
  Globe, MessageCircle, Mail, Star, TrendingUp, ArrowRight
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import FAQAccordion, { FAQ } from '@/components/sections/FAQAccordion'

export const metadata: Metadata = {
  title: 'Digital Services for Small Business | CollabEdge Solutions',
  description:
    'Websites, AI agents, CRM automation, and data analytics for NDIS providers and Australian small businesses. Senior-led, practical, and recommended only where the cost benefit stacks up.',
  openGraph: {
    title: 'Digital Services for Small Business | CollabEdge Solutions',
    description:
      'Digital foundations that earn their keep. Websites, AI agents, CRM automation, and data insights for Australian small businesses.',
    url: 'https://collabedgesolutions.com.au/services/digital',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Digital Services for Small Business',
  provider: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    url: 'https://collabedgesolutions.com.au',
  },
  areaServed: 'AU',
  description:
    'Websites, AI agents and chatbots, CRM and email automation, digital presence, and data analytics for NDIS providers and Australian small businesses.',
}

const digitalFaqs: FAQ[] = [
  {
    q: 'Do I need a new website or can my current one be improved?',
    a: 'Often your current site can be improved. We assess what you have first, and a rebuild is only recommended when the cost benefit is clear. Many engagements start with search optimisation and content fixes on the existing site.',
  },
  {
    q: 'What does an AI chatbot cost for a small business?',
    a: 'It depends on scope, which is exactly why we define it in the roadmap stage before any build. You will see the investment and the expected time savings side by side before deciding.',
  },
  {
    q: 'Do you only work with NDIS providers?',
    a: 'No. NDIS and healthcare providers are our home ground, and the same approach serves any Australian small business, including property, retail, and health businesses we support with data analytics.',
  },
]

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: digitalFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
}

const services = [
  {
    icon: Globe,
    title: 'Websites That Work',
    body: 'Design, build, and search optimisation for sites that answer the questions your clients actually ask. Built for both traditional search and AI answer engines. We work across the platforms small businesses already use, including Squarespace, Wix, and GoDaddy, so improving what you have is always on the table. And where a new build makes sense, AI-assisted development lets us deliver a professional site at a cost that suits a small business.',
  },
  {
    icon: MessageCircle,
    title: 'AI Agents and Chatbots',
    body: 'Practical AI that handles enquiries, triages requests, and takes repetitive front-of-house work off your team. Scoped carefully, tested before launch, and never oversold.',
  },
  {
    icon: Mail,
    title: 'CRM and Email Automation',
    body: 'Set up a CRM that fits a small team, connect it to your email, and automate follow-ups so no enquiry falls through the cracks. We work with what suits your size and budget, not what pays the biggest referral fee.',
  },
  {
    icon: Star,
    title: 'Digital Presence',
    body: 'Google Business Profile, social channels, and video presence set up properly and connected, so local clients can find you and trust what they find.',
  },
  {
    icon: TrendingUp,
    title: 'Data Analytics for Small Business',
    body: 'Turn the data already sitting in your systems into insights for better decisions. For providers, that means understanding service delivery, utilisation, and funding patterns. The same approach serves property, retail, and health businesses making the shift to data driven decision making.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Discover',
    body: 'We start with what you have. Your current tools, your workflows, what they cost you in time and money, and where the friction actually is.',
  },
  {
    step: '02',
    title: 'Roadmap',
    body: 'You get recommendations with a full cost benefit analysis and a staged roadmap. If keeping what you have is the right answer, that is what we will tell you.',
  },
  {
    step: '03',
    title: 'Build',
    body: 'Senior-led delivery from first conversation to launch. No handoffs to juniors, no surprises, and testing in real conditions before anything goes live.',
  },
  {
    step: '04',
    title: 'Run',
    body: 'Handover with training your team can actually use, or ongoing support if you would rather we stay close. Your call, stated plainly upfront.',
  },
]

export default function DigitalServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/services" className="hover:text-brand-goldLight transition-colors">Services</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Digital Services</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-3 block">
              Digital Services
            </span>
            <h1 className="text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[680px]">
              Digital Foundations, Done Properly
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Websites, AI agents, CRM automation, and data insights for NDIS providers and Australian small businesses. No jargon, no overselling, just digital capability that earns its keep.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/appt" className="btn-gold">Book a Free Consultation</a>
              <a href="#how-we-engage" className="btn-ghost">See How We Engage</a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. The five services */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              What We Deliver
            </h2>
            <p className="text-[16px] text-slate leading-relaxed mb-10 max-w-[680px]">
              Every service below follows the same rule. We start with what you have, and we recommend change only where the numbers support it.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <service.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-3">{service.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{service.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Engagement approach */}
      <section id="how-we-engage" className="bg-navy py-16 px-5 sm:px-10 scroll-mt-24">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              How We Engage
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed mb-10 max-w-[680px]">
              A clear, staged approach. You know what is happening at every step, and you see the numbers before you commit to anything.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 90}>
                <div>
                  <span className="text-[32px] font-bold text-brand-goldDark/40 block mb-2 font-serif">
                    {item.step}
                  </span>
                  <h3 className="text-[18px] font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commercial framing */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              Clear Scope, No Surprises
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn variant="fadeUp" delay={80}>
              <div className="bg-white rounded-xl p-7 border border-border h-full">
                <h3 className="text-[18px] font-bold text-text-dark mb-3">Websites</h3>
                <p className="text-[16px] text-slate leading-relaxed">
                  Website builds are packaged with defined inclusions, so you know exactly what is covered before we start. Inclusions are confirmed in your roadmap, sized to your situation.
                </p>
              </div>
            </FadeIn>
            <FadeIn variant="fadeUp" delay={160}>
              <div className="bg-white rounded-xl p-7 border border-border h-full">
                <h3 className="text-[18px] font-bold text-text-dark mb-3">Everything Else</h3>
                <p className="text-[16px] text-slate leading-relaxed">
                  AI agents, CRM automation, digital presence, and analytics are scoped per engagement, because the right answer depends on what you already have. The roadmap stage defines the scope and the investment before any build begins.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[760px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-8 leading-snug">
              Common Questions
            </h2>
          </FadeIn>
          <FadeIn variant="fadeUp" delay={100}>
            <FAQAccordion faqs={digitalFaqs} />
          </FadeIn>
        </div>
      </section>

      {/* 6. Final CTA */}
      <CTASection
        heading="Start With a Conversation"
        sub="A free 30 minute conversation about your digital setup and where the biggest wins are."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}