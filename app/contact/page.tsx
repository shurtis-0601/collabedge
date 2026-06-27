import type { Metadata } from 'next'
import { Calendar, Mail, Phone, MapPin, Award, GraduationCap, Stethoscope, CheckCircle } from 'lucide-react'
import PageHero from '@/components/corporate/PageHero'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'
import Eyebrow from '@/components/ui/Eyebrow'

export const metadata: Metadata = {
  title: 'Book a Free Consultation | CollabEdge Solutions',
  description:
    'Book a free 30-minute consultation with Sinclair Hurtis. Senior-led, no sales pitch. NDIS compliance, workflow automation, and enterprise technology advisory.',
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact CollabEdge Solutions',
  url: 'https://collabedgesolutions.com.au/contact',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'CollabEdge Solutions',
    telephone: '0426464442',
    email: 'sinclair@collabedgesolutions.com.au',
  },
}

const steps = [
  {
    num: '1',
    heading: 'You share your situation',
    body: 'What you are trying to solve, what you have already tried, and what is getting in the way.',
  },
  {
    num: '2',
    heading: 'We give you a straight answer',
    body: 'Whether we are the right fit. If not, we will point you in the right direction.',
  },
  {
    num: '3',
    heading: 'If we are a fit, we scope it',
    body: 'A clear proposal with scope, timeline, and cost before any commitment is made.',
  },
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Section 1 — Hero */}
      <PageHero
        eyebrow="Get In Touch"
        h1="Let us talk about what you are trying to solve."
        answerBlock="Book a free 30-minute consultation. No sales pitch — a genuine conversation about your situation and whether we can help."
      />

      {/* Section 2 — Booking */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — Booking CTA */}
          <FadeIn variant="slideRight">
            <GoldRuleAnimated />
            <Eyebrow>Book a Consultation</Eyebrow>
            <h2 className="text-[26px] font-bold text-text-dark leading-tight tracking-[-0.02em] mb-4">
              30 Minutes. Free. Senior-led.
            </h2>
            <p className="text-[14px] text-slate leading-relaxed mb-6">
              The Book Consultation button links directly to the booking page. No form to fill in first — just pick a time that works.
            </p>
            <a
              href="https://collabedgesolutions.com.au/appt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold text-[13px] px-6 py-3 rounded hover:bg-gold/90 hover:scale-[1.02] transition-all duration-200 w-full sm:w-auto justify-center sm:justify-start"
            >
              <Calendar size={15} />
              Book a Free Consultation
            </a>

            <div className="mt-8 pt-6 border-t border-border space-y-3">
              <p className="text-[12px] text-slate mb-3">Or reach us directly:</p>

              <a
                href="mailto:sinclair@collabedgesolutions.com.au"
                className="flex items-center gap-3 text-[13px] font-semibold text-navy hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <Mail size={14} className="text-gold" />
                </div>
                sinclair@collabedgesolutions.com.au
              </a>

              <a
                href="tel:0426464442"
                className="flex items-center gap-3 text-[13px] text-slate hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <Phone size={14} className="text-gold" />
                </div>
                0426 464 442
              </a>

              <div className="flex items-center gap-3 text-[13px] text-slate-light">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} className="text-gold" />
                </div>
                Melbourne, VIC, Australia
              </div>
            </div>
          </FadeIn>

          {/* Right — What to Expect */}
          <FadeIn variant="fadeUp" delay={150}>
            <div className="border border-border rounded-xl p-7">
              <div className="mb-5">
                <GoldRuleAnimated />
                <Eyebrow>What to Expect</Eyebrow>
              </div>
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 120} variant="fadeUp">
                  <div className="flex gap-4 items-start pb-5 mb-5 border-b border-border last:border-0 last:pb-0 last:mb-0">
                    <div className="w-7 h-7 rounded-full bg-gold flex items-center justify-center text-[12px] font-bold text-navy flex-shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-text-dark mb-1">{step.heading}</p>
                      <p className="text-[12px] text-slate leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 3 — Who You Will Work With */}
      <section className="bg-offwhite py-14 px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-[1000px] mx-auto">

          {/* Left — Photo + credentials */}
          <FadeIn variant="slideRight">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="w-36 h-36 rounded-full overflow-hidden border-[3px] border-gold shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/Sinclair-hero.jpeg"
                  alt="Sinclair Hurtis"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center md:text-left">
                <p className="text-[16px] font-bold text-text-dark">Sinclair Hurtis</p>
                <p className="text-[12px] text-gold font-medium mt-0.5">Founder and Principal Consultant</p>
              </div>

              <div className="flex flex-col gap-2 mt-2 items-center md:items-start">
                <div className="flex items-center gap-2 text-[11px] text-slate">
                  <Award size={13} className="text-gold flex-shrink-0" />
                  GEM Excellence Award · Citibank
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate">
                  <GraduationCap size={13} className="text-gold flex-shrink-0" />
                  Adjunct Faculty · Monash University
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate">
                  <Stethoscope size={13} className="text-gold flex-shrink-0" />
                  Active NDIS Coordinator · MAS
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Bio */}
          <FadeIn variant="fadeUp" delay={150}>
            <GoldRuleAnimated />
            <Eyebrow>Who You Will Work With</Eyebrow>
            <h3 className="text-[20px] font-bold text-text-dark mb-4 leading-snug tracking-tight">
              Every consultation is with a senior practitioner. No hand-offs.
            </h3>
            <p className="text-[14px] text-slate leading-relaxed mb-5">
              Sinclair Hurtis brings 30+ years of Fortune 500 experience across Citibank, Singtel, NAB, and the Victorian Department of Health. He actively coordinates NDIS participants through My Ability Services — testing every solution in a live environment before recommending it.
            </p>

            <div className="flex gap-8 pt-5 border-t border-border">
              <div>
                <span className="text-[22px] font-extrabold text-text-dark leading-none block">30+</span>
                <span className="text-[10px] text-slate-light uppercase tracking-wider mt-1 block">Years experience</span>
              </div>
              <div>
                <span className="text-[22px] font-extrabold text-text-dark leading-none block">100%</span>
                <span className="text-[10px] text-slate-light uppercase tracking-wider mt-1 block">Senior-led</span>
              </div>
              <div>
                <span className="text-[22px] font-extrabold text-text-dark leading-none block">Active</span>
                <span className="text-[10px] text-slate-light uppercase tracking-wider mt-1 block">NDIS Practitioner</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Section 4 — CTA */}
      <CTASection
        heading="Ready to talk about your situation?"
        sub="30 minutes. Free. Senior-led. No pitch."
        ctaLabel="Book a Free Consultation"
        ctaHref="https://collabedgesolutions.com.au/appt"
      />
    </>
  )
}
