'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

const AREAS = [
  { value: 'ndis-healthcare', label: 'NDIS and Healthcare' },
  { value: 'growth-marketing', label: 'Growth and Marketing' },
  { value: 'other', label: 'Other' },
]

export default function AutomationIdeaForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [area, setArea] = useState('')
  const [teamSize, setTeamSize] = useState('')
  const [idea, setIdea] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const nameValid = name.trim().length > 0
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
  const areaValid = area.trim().length > 0
  const ideaValid = idea.trim().length > 0
  const formValid = nameValid && emailValid && areaValid && ideaValid

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formValid) return

    setStatus('submitting')
    try {
      const res = await fetch('/api/automation-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, area, idea, teamSize }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        console.error('[automation-idea] API error:', res.status, data)
        setStatus('error')
        return
      }
      setStatus('success')
    } catch (err) {
      console.error('[automation-idea] POST failed:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white rounded-xl p-8 border border-border flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
          <CheckCircle2 size={24} className="text-brand-goldLight" />
        </div>
        <h3 className="text-[18px] font-bold text-text-dark mb-2">Thanks, that has been logged</h3>
        <p className="text-[14px] text-slate leading-relaxed max-w-[440px]">
          Your idea has gone straight into the roadmap review pile. If it turns into something we build, we will let you know.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-7 border border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="idea-name" className="text-[13px] font-semibold text-text-dark mb-1.5 block">
            Your name
          </label>
          <input
            id="idea-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-[14px] text-text-dark border border-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-gold/50"
            placeholder="Jordan Smith"
          />
        </div>
        <div>
          <label htmlFor="idea-email" className="text-[13px] font-semibold text-text-dark mb-1.5 block">
            Email
          </label>
          <input
            id="idea-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full text-[14px] text-text-dark border border-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-gold/50"
            placeholder="jordan@example.com.au"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="idea-area" className="text-[13px] font-semibold text-text-dark mb-1.5 block">
            Which area is this closest to
          </label>
          <select
            id="idea-area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full text-[14px] text-text-dark border border-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-gold/50 bg-white"
          >
            <option value="">Select one</option>
            {AREAS.map((a) => (
              <option key={a.value} value={a.value}>
                {a.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="idea-team-size" className="text-[13px] font-semibold text-text-dark mb-1.5 block">
            Team size (optional)
          </label>
          <input
            id="idea-team-size"
            type="text"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full text-[14px] text-text-dark border border-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-gold/50"
            placeholder="e.g. 12 staff"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="idea-detail" className="text-[13px] font-semibold text-text-dark mb-1.5 block">
          What would you automate if you could
        </label>
        <textarea
          id="idea-detail"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          rows={4}
          className="w-full text-[14px] text-text-dark border border-border rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-gold/50 resize-none"
          placeholder="Describe the manual task, the tools involved, and what a better version would look like."
        />
      </div>

      {status === 'error' && (
        <p className="text-[13px] text-red-600 mb-4">
          Something went wrong sending that through. Please try again, or email sinclair@collabedgesolutions.com.au directly.
        </p>
      )}

      <button
        type="submit"
        disabled={!formValid || status === 'submitting'}
        className="inline-flex items-center gap-2 bg-navy text-white text-[14px] font-semibold rounded-lg px-6 py-3 hover:bg-navy-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit Your Idea'}
        <Send size={14} />
      </button>
    </form>
  )
}
