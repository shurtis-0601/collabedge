import type { Metadata } from 'next'
import {
  Upload, ScanLine, FolderCheck, ClipboardCheck, BellRing,
  FileCheck, Clock, FileText, UserPlus
} from 'lucide-react'
import CTASection from '@/components/ui/CTASection'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export const metadata: Metadata = {
  title: 'Employee Onboarding Automation | CollabEdge Solutions',
  description:
    'Automated staff compliance document filing and expiry tracking for NDIS providers. Built for Microsoft 365 and SharePoint.',
  openGraph: {
    title: 'Employee Onboarding Automation | CollabEdge Solutions',
    description:
      'Automated filing and expiry tracking for the compliance documents every NDIS provider must keep current.',
    url: 'https://collabedgesolutions.com.au/products/employee-onboarding-automation',
  },
}

const steps = [
  { icon: Upload, label: 'Upload', body: 'Staff upload documents through a simple self-service portal, no IT involvement needed.' },
  { icon: ScanLine, label: 'Read', body: 'Built-in OCR reads each document and identifies what it is automatically.' },
  { icon: FolderCheck, label: 'File', body: 'Documents are automatically renamed and routed into the correct employee folder.' },
  { icon: ClipboardCheck, label: 'Check', body: 'The system checks every employee folder against the required document checklist and calculates a compliance percentage.' },
  { icon: BellRing, label: 'Alert', body: 'Automated email alerts go out at 30, 14, 7, and 1 days before any document expires.' },
]

const benefits = [
  { icon: FileCheck, title: 'Automated Filing', body: 'No more manually renaming and sorting documents into folders. Every upload finds its correct place automatically.' },
  { icon: Clock, title: 'Expiry Alerts', body: 'Automated email alerts before documents lapse, so nothing expires without warning.' },
  { icon: FileText, title: 'Compliance Reporting', body: 'One-click reports showing exactly who is compliant, who is missing documents, and what needs attention, ready for an audit at any time.' },
  { icon: UserPlus, title: 'Self-Service Upload', body: 'Staff upload their own documents through a simple portal. No chasing, no manual data entry.' },
]

export default function EmployeeOnboardingPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-white border-b border-border px-5 sm:px-10 py-3">
        <div className="max-w-[1000px] mx-auto">
          <ol className="flex items-center gap-2 text-[14px] text-slate">
            <li><a href="/products" className="hover:text-brand-goldLight transition-colors">Products</a></li>
            <li className="text-slate-light">/</li>
            <li className="text-text-dark font-medium">Employee Onboarding Automation</li>
          </ol>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="bg-navy py-16 sm:py-20 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="w-9 h-[2px] bg-gold mb-4" />
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/80 mb-3 block">
              Available Now
            </span>
            <h1 className="text-[34px] md:text-[44px] font-bold text-white tracking-tight leading-[1.15] mb-5 max-w-[720px]">
              Employee Onboarding Automation
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[620px] mb-8">
              Automated filing and expiry tracking for the compliance documents every NDIS provider must keep current. Built for Microsoft 365 and SharePoint, with Google Workspace available on request.
            </p>
            <a href="/appt" className="btn-gold">Book a Free Consultation</a>
          </FadeIn>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Manual Document Tracking Does Not Scale
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              Police checks, Working With Children Checks, first aid certificates, and NDIS worker screening checks all expire on different schedules across every staff member. Tracked manually, it is only a matter of time before something lapses without anyone noticing until an audit finds it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 3. How it works, step flow */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-10 leading-snug">
              How It Works
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {steps.map((step, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="relative flex flex-col h-full">
                  <div className="flex items-center gap-3 md:block mb-3">
                    <div className="w-11 h-11 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 md:mb-3">
                      <step.icon size={20} className="text-gold" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[13px] font-bold text-brand-goldDark">{i + 1}</span>
                      <h3 className="text-[18px] font-bold text-white">{step.label}</h3>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#D1D5DB] leading-relaxed">{step.body}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[22px] right-[-4px] w-2 h-2 border-t-2 border-r-2 border-gold/40 rotate-45" aria-hidden="true" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What you get */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
              What You Get
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((card, i) => (
              <FadeIn key={i} variant="fadeUp" delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-border h-full hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <card.icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-2">{card.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed">{card.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Proof point */}
      <section className="bg-navy py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-white tracking-tight mb-4 leading-snug">
              Built and Proven in Real Practice
            </h2>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[720px]">
              This system was built and is currently running in an active NDIS provider environment, handling real staff compliance documents across a growing team. It was built because the manual alternative was not sustainable, and it is used the same way every day it is described here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 6. Platform note */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[1000px] mx-auto">
          <FadeIn variant="fadeUp">
            <GoldRuleAnimated />
            <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-4 leading-snug">
              Built for Microsoft 365
            </h2>
            <p className="text-[16px] text-slate leading-relaxed max-w-[720px]">
              This product is built for Microsoft 365 and SharePoint environments. A Google Workspace equivalent is available as a custom-scoped option on request.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection
        heading="See It Running"
        sub="A free 30 minute walkthrough of the system in action."
        ctaLabel="Book a Free Consultation"
        ctaHref="/appt"
      />
    </>
  )
}