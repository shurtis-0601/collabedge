import type { Metadata } from 'next'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Book a Free Consultation | CollabEdge Solutions',
  description: 'Book a free 30-minute consultation with CollabEdge Solutions. Senior-led, no obligation.',
  openGraph: {
    title: 'Book a Free Consultation | CollabEdge Solutions',
    description: 'Book a free 30-minute consultation with CollabEdge Solutions. Senior-led, no obligation.',
    url: 'https://collabedgesolutions.com.au/appt',
  },
}

export default function ApptPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 px-5 sm:px-10 text-center">
        <div className="max-w-[680px] mx-auto">
          <FadeIn variant="fadeUp">
            <span className="text-[13px] font-semibold tracking-[.16em] uppercase text-brand-goldDark/60 mb-3 block">
              Book a Consultation
            </span>
            <h1 className="text-[32px] md:text-[38px] font-bold text-white tracking-tight leading-[1.1] mb-4">
              30 Minutes. Free. Senior-led.
            </h1>
            <p className="text-[16px] text-[#D1D5DB] leading-relaxed max-w-[480px] mx-auto">
              Pick a time that works for you below. No form to fill in first. Just book directly and we will talk through your situation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Booking Embed */}
      <section className="bg-white py-16 px-5 sm:px-10">
        <div className="max-w-[780px] mx-auto">
          <FadeIn variant="fadeUp">
            <div className="rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1qXBTuu9WDHQX_rC9UE_ed_fh0kH5VQ9pu7YaeZvaoebQI_tPt69xPopjSO8Df08TQlQM-coOT?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder={0}
                title="Book a consultation with CollabEdge Solutions"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="bg-offwhite py-16 px-5 sm:px-10">
        <div className="max-w-[680px] mx-auto text-center">
          <FadeIn variant="fadeUp">
            <p className="text-[14px] text-slate mb-6">Prefer email or phone?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:sinclair@collabedgesolutions.com.au"
                className="flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-brand-goldLight transition-colors"
              >
                <Mail size={15} className="text-gold" />
                sinclair@collabedgesolutions.com.au
              </a>
              <a
                href="tel:0426464442"
                className="flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-brand-goldLight transition-colors"
              >
                <Phone size={15} className="text-gold" />
                0426 464 442
              </a>
              <a
                href="https://wa.me/61426464442"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-brand-goldLight transition-colors"
              >
                <MessageCircle size={15} className="text-gold" />
                WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
