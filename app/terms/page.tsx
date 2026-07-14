import type { Metadata } from 'next'
import PageHero from '@/components/corporate/PageHero'

export const metadata: Metadata = {
  title: 'Terms of Use | CollabEdge Solutions',
  description: 'Terms of Use for the CollabEdge Solutions website, collabedgesolutions.com.au',
  openGraph: {
    title: 'Terms of Use | CollabEdge Solutions',
    description: 'Terms of Use for the CollabEdge Solutions website, collabedgesolutions.com.au',
    url: 'https://collabedgesolutions.com.au/terms',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
}

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" h1="Terms of Use" />

      <div className="bg-white py-16 px-6">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[14px] text-slate-light mb-8">Last updated: June 2026</p>

          <p className="text-[16px] text-slate leading-relaxed mb-4">
            These Terms of Use govern your access to and use of the CollabEdge Solutions website at collabedgesolutions.com.au, operated by CollabEdge Solutions (ABN 38 557 169 242).
          </p>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            By accessing or using this website you agree to these terms. If you do not agree, please do not use this website.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">1. Use of This Website</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            You may use this website for lawful purposes only. You must not:
          </p>
          <ul className="text-[16px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Use this website in any way that violates applicable Australian or international laws or regulations</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material</li>
            <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
            <li>Interfere with the normal operation of the website</li>
          </ul>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">2. Intellectual Property</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            All content on this website — including text, graphics, logos, images, and software — is the property of CollabEdge Solutions or its content suppliers and is protected by Australian and international copyright laws.
          </p>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            You may view and print pages for personal, non-commercial use only. You must not reproduce, distribute, modify or create derivative works without our express written consent.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">3. Information Accuracy</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            The information on this website is provided in good faith for general informational purposes only. It does not constitute professional advice.
          </p>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions makes no representations or warranties about the accuracy, completeness or suitability of the information on this website for any particular purpose. You should seek professional advice before acting on any information contained here.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">4. Limitation of Liability</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            To the maximum extent permitted by law, CollabEdge Solutions excludes all liability for any loss or damage arising from your use of or reliance on this website or its content, including but not limited to direct, indirect, incidental or consequential loss.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">5. External Links</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            This website contains links to third-party websites. These links are provided for convenience only. CollabEdge Solutions does not endorse, control or take responsibility for the content of those sites.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">6. Service Engagements</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            These Terms of Use apply to the website only. Separate terms and conditions apply to any professional services engagement with CollabEdge Solutions and will be set out in a written proposal or service agreement.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">7. Privacy</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            Your use of this website is also governed by our Privacy Policy, available at{' '}
            <a href="/privacy" className="text-brand-goldLight hover:underline">collabedgesolutions.com.au/privacy</a>.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">8. Governing Law</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            These terms are governed by the laws of Victoria, Australia. You agree to submit to the exclusive jurisdiction of the courts of Victoria for any disputes arising from these terms or your use of this website.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">9. Changes to These Terms</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            We may update these Terms of Use at any time. The current version will always be available at collabedgesolutions.com.au/terms. Your continued use of the website after any changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-[26px] font-bold text-text-dark mt-10 mb-3 tracking-tight">10. Contact</h2>
          <p className="text-[16px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions<br />
            <a href="mailto:sinclair@collabedgesolutions.com.au" className="text-brand-goldLight hover:underline">sinclair@collabedgesolutions.com.au</a><br />
            0426 464 442<br />
            Melbourne, Victoria
          </p>
        </div>
      </div>
    </>
  )
}
