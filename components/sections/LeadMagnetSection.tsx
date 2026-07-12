'use client'

import { useState } from 'react'
import { Download, X, CheckCircle2, Clock } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import GoldRuleAnimated from '@/components/ui/GoldRuleAnimated'

export type LeadMagnetData = {
  id: string
  title: string
  description: string
  file: string | null
  immediateDelivery: boolean
  status: 'available' | 'placeholder'
  order: number
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function LeadMagnetModal({
  magnet,
  onClose,
}: {
  magnet: LeadMagnetData
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
        body: JSON.stringify({ name, email, template: magnet.id }),
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        if (magnet.immediateDelivery && magnet.file) {
          window.open(magnet.file, '_blank')
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
            {magnet.immediateDelivery && magnet.file ? (
              <p className="text-[16px] text-slate leading-relaxed">
                Your download should open automatically. If it does not,{' '}
                <a
                  href={magnet.file}
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
              {magnet.title}
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
                  className="w-full text-[16px] text-[#030F23] bg-white border border-[#D1D5DB] rounded-lg px-4 py-2.5 placeholder:text-[#6B7280] focus:outline-none focus:border-gold transition-colors"
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
                  className="w-full text-[16px] text-[#030F23] bg-white border border-[#D1D5DB] rounded-lg px-4 py-2.5 placeholder:text-[#6B7280] focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <input type="hidden" name="template" value={magnet.id} />

              {status === 'error' && (
                <p className="text-[14px] text-red-600">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={!nameValid || !emailValid || status === 'submitting'}
                className="btn-gold w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : magnet.immediateDelivery ? 'Download Now' : 'Send Me the Template'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default function LeadMagnetSection({ magnets }: { magnets: LeadMagnetData[] }) {
  const [activeMagnet, setActiveMagnet] = useState<LeadMagnetData | null>(null)

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
          {magnets.map((magnet, i) => (
            <FadeIn key={magnet.id} variant="fadeUp" delay={i * 80}>
              {magnet.status === 'placeholder' ? (
                <div className="bg-white rounded-xl p-6 border border-border h-full flex flex-col opacity-60">
                  <div className="w-11 h-11 rounded-lg bg-[#9CA3AF]/10 flex items-center justify-center mb-4">
                    <Clock size={20} className="text-[#9CA3AF]" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-3">{magnet.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">{magnet.description}</p>
                  <span className="inline-flex items-center justify-center gap-2 bg-[#F3F4F6] text-[#9CA3AF] text-[13px] font-semibold rounded-lg px-5 py-3 mt-auto cursor-default">
                    Coming Soon
                  </span>
                </div>
              ) : (
                <div className="bg-white rounded-xl p-6 border border-border h-full flex flex-col hover:border-gold/30 hover:shadow-md hover:-translate-y-[2px] transition-all duration-200">
                  <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Download size={20} className="text-gold" />
                  </div>
                  <h3 className="text-[18px] font-bold text-text-dark mb-3">{magnet.title}</h3>
                  <p className="text-[14px] text-slate leading-relaxed mb-6 flex-1">{magnet.description}</p>
                  <button
                    onClick={() => setActiveMagnet(magnet)}
                    className="inline-flex items-center justify-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-5 py-3 hover:bg-navy-mid transition-colors mt-auto"
                  >
                    {magnet.immediateDelivery ? 'Download Now' : 'Get This Template'}
                  </button>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>

      {activeMagnet && (
        <LeadMagnetModal magnet={activeMagnet} onClose={() => setActiveMagnet(null)} />
      )}
    </section>
  )
}
