'use client'

import { useState } from 'react'
import { Download, X, CheckCircle2 } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

type LeadMagnet = {
  id: string
  title: string
  body: string
}

const leadMagnets: LeadMagnet[] = [
  {
    id: 'funding-tracker',
    title: 'NDIS Funding Tracker Template',
    body: 'A simplified funding tracker for one participant. Track category spend against budget with automatic status alerts, the same logic behind our full Funding and Burn Rate Tracker product, scaled down so you can use it today.',
  },
  {
    id: 'participant-summary',
    title: 'Participant Funding Summary Template',
    body: 'A clean, printable one page summary you can hand to a participant or their family, showing funding status at a glance without needing to explain a spreadsheet.',
  },
  {
    id: 'business-questions',
    title: 'NDIS Business Questions and Scenarios Template',
    body: 'More than 30 strategic questions to help you work out what your organisation should actually be measuring, before you build a single dashboard.',
  },
  {
    id: 'ai-prompts-by-role',
    title: '100 NDIS AI Prompts by Role',
    body: '100 ready-to-use AI prompts organised across 10 NDIS roles: participants, families, support coordinators, plan managers, allied health, and more. Copy, customise, and use with any AI tool.',
  },
]

const AI_PROMPTS_PDF = '/downloads/CollabEdge-100-NDIS-AI-Prompts.pdf'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function LeadMagnetModal({
  template,
  onClose,
}: {
  template: LeadMagnet
  onClose: () => void
}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const nameValid = name.trim().length > 0
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nameValid || !emailValid) return

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, template: template.id }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        if (template.id === 'ai-prompts-by-role') {
          window.open(AI_PROMPTS_PDF, '_blank')
        }
      } else {
        setStatus('error')
        setErrorMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-navy/80 backdrop-blur-sm flex items-center justify-center p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-magnet-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl max-w-[480px] w-full p-7 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-slate hover:text-text-dark transition-colors"
        >
          <X size={20} />
        </button>

        {status === 'success' ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={24} className="text-gold" />
            </div>
            <h3 className="text-[18px] font-bold text-text-dark mb-2">Thank you.</h3>
            {template.id === 'ai-prompts-by-role' ? (
              <p className="text-[16px] text-slate leading-relaxed">
                Your download should open automatically. If it does not,{' '}
                <a
                  href={AI_PROMPTS_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-goldLight font-semibold underline hover:text-gold"
                >
                  click here
                </a>
                .
              </p>
            ) : (
              <p className="text-[16px] text-slate leading-relaxed">
                Check your inbox for your template.
              </p>
            )}
          </div>
        ) : (
          <>
            <h3 id="lead-magnet-modal-title" className="text-[18px] font-bold text-text-dark mb-2">
              {template.title}
            </h3>
            <p className="text-[14px] text-slate leading-relaxed mb-6">
              Enter your details and we will send this template straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="lead-name" className="text-[14px] font-semibold text-text-dark block mb-1.5">
                  Name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full text-[16px] border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="text-[14px] font-semibold text-text-dark block mb-1.5">
                  Email
                </label>
                <input
                  id="lead-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full text-[16px] border border-border rounded-lg px-4 py-2.5 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <input type="hidden" name="template" value={template.id} />

              {status === 'error' && (
                <p className="text-[14px] text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={!nameValid || !emailValid || status === 'submitting'}
                className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Me the Template'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function LeadMagnetSection() {
  const [activeTemplate, setActiveTemplate] = useState<LeadMagnet | null>(null)

  return (
    <section className="bg-offwhite py-16 px-5 sm:px-10">
      <div className="max-w-[1000px] mx-auto">
        <FadeIn variant="fadeUp">
          <GoldRuleAnimated />
          <h2 className="text-[26px] font-bold text-text-dark tracking-tight mb-10 leading-snug">
            Free Downloads
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {leadMagnets.map((magnet, i) => (
            <FadeIn key={magnet.id} variant="fadeUp" delay={i * 80}>
              <div className="bg-white rounded-xl p-6 border border-border h-full flex flex-col hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Download size={20} className="text-gold" />
                </div>
                <h3 className="text-[18px] font-bold text-text-dark mb-3">{magnet.title}</h3>
                <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">{magnet.body}</p>
                <button
                  onClick={() => setActiveTemplate(magnet)}
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 py-3 hover:bg-navy-mid transition-colors mt-auto"
                >
                  {magnet.id === 'ai-prompts-by-role' ? 'Download Now' : 'Get This Template'}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeTemplate && (
        <LeadMagnetModal template={activeTemplate} onClose={() => setActiveTemplate(null)} />
      )}
    </section>
  )
}
