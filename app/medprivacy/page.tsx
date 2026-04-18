"use client";

import Link from "next/link";
import { useState } from "react";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";

const FEATURES = [
  {
    title: "Privacy-by-design",
    body: "Controls built into the clinical workflow — not bolted on after. PII, PHI and consent handled at every step.",
  },
  {
    title: "Australian Privacy Act aligned",
    body: "APP-compliant handling, retention and disclosure with audit-ready evidence.",
  },
  {
    title: "Role-based access, everywhere",
    body: "Granular permissions for clinicians, carers, admins and auditors — with full access logs.",
  },
  {
    title: "Encrypted end-to-end",
    body: "Data at rest and in transit protected with modern cryptography and key rotation.",
  },
  {
    title: "Consent on record",
    body: "Capture, version, and revoke consent with a clear timeline for every data subject.",
  },
  {
    title: "Breach-ready",
    body: "Pre-built playbooks and reporting for OAIC notifiable data breach obligations.",
  },
];

const FAQS = [
  {
    q: "Who is MedPrivacy for?",
    a: "Australian healthcare providers, NDIS and Aged Care operators, clinics, and any business handling health or sensitive personal data.",
  },
  {
    q: "Is it hosted in Australia?",
    a: "Yes. MedPrivacy runs on Australian cloud regions with data residency guarantees.",
  },
  {
    q: "How long does implementation take?",
    a: "Most clients are live in 6–12 weeks, depending on existing systems and the scope of workflows to cover.",
  },
  {
    q: "Can it integrate with our existing EHR or CRM?",
    a: "Yes — we integrate with major healthcare EHRs, CRMs and care platforms via API or secure data feeds.",
  },
];

export default function MedPrivacyPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <Hero
        eyebrow="MedPrivacy"
        title="Privacy and compliance, built for Australian healthcare"
        subtitle="A purpose-built platform that makes privacy obligations operational — so clinicians can focus on care and leaders can sleep at night."
      >
        <Link href="/appt" className="btn-solid">
          Book a MedPrivacy demo
        </Link>
      </Hero>

      <section className="section py-16 sm:py-24">
        <div className="mx-auto max-w-container">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">
              What MedPrivacy gives you
            </h2>
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-gold/40 transition-colors">
                  <h3 className="font-serif text-xl text-gold">{f.title}</h3>
                  <p className="mt-3 text-white/80">{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-16 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center">
              Frequently asked
            </h2>
          </FadeIn>
          <div className="mt-10 space-y-3">
            {FAQS.map((f, idx) => {
              const open = openIdx === idx;
              return (
                <div
                  key={f.q}
                  className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-white/[0.03]"
                    aria-expanded={open}
                  >
                    <span className="font-serif text-lg">{f.q}</span>
                    <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`}>
                      +
                    </span>
                  </button>
                  {open && <div className="px-6 pb-6 text-white/80">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
