import type { Metadata } from 'next'
import PageHero from '@/components/corporate/PageHero'

export const metadata: Metadata = {
  title: 'Privacy Policy | CollabEdge Solutions',
  description:
    'Privacy Policy for CollabEdge Solutions — ABN 38 557 169 242. How we collect, use and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" h1="Privacy Policy" />

      <div className="bg-white py-16 px-6">
        <div className="max-w-[780px] mx-auto">
          <p className="text-[12px] text-slate-light mb-8">Last updated: June 2026</p>

          <p className="text-[14px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions (ABN 38 557 169 242) is committed to protecting your privacy. This policy explains how we collect, use, disclose and protect personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">1. Who We Are</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions is a business management and technology consulting firm based in Melbourne, Victoria, Australia. We provide services including NDIS compliance consulting, workflow automation, AI advisory, and enterprise technology implementation.
          </p>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            Principal contact: Sinclair Hurtis<br />
            Email: <a href="mailto:sinclair@collabedgesolutions.com.au" className="text-gold hover:underline">sinclair@collabedgesolutions.com.au</a><br />
            Phone: 0426 464 442<br />
            Address: Point Cook VIC 3030, Australia
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">2. What Personal Information We Collect</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We may collect the following types of personal information:
          </p>
          <ul className="text-[14px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Contact details: name, email address, phone number, organisation name and role</li>
            <li>Enquiry and communication content submitted through our website contact form or email</li>
            <li>Booking and scheduling information when you book a consultation</li>
            <li>Website usage data collected through analytics tools including pages visited, time on site, and referral source</li>
            <li>Business information relevant to the services you engage us for</li>
          </ul>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We do not collect sensitive information such as health information, financial account details, or government identifiers unless specifically required to deliver a contracted service, and only with your explicit consent.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">3. How We Collect Personal Information</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We collect personal information:
          </p>
          <ul className="text-[14px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Directly from you when you contact us, complete a form, or book a consultation</li>
            <li>Through our website via analytics tools (Vercel Analytics)</li>
            <li>Through email and phone communications</li>
            <li>Through LinkedIn and other professional platforms where you engage with us publicly</li>
          </ul>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">4. How We Use Personal Information</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We use personal information to:
          </p>
          <ul className="text-[14px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Respond to your enquiries and provide the services you have requested</li>
            <li>Communicate with you about your engagement or project</li>
            <li>Send relevant updates, resources or service information where you have opted in</li>
            <li>Improve our website and services</li>
            <li>Meet our legal and contractual obligations</li>
          </ul>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We do not sell, rent or trade your personal information to third parties for marketing purposes.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">5. Disclosure of Personal Information</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We may disclose personal information to:
          </p>
          <ul className="text-[14px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Service providers who assist us in delivering our services, including scheduling tools, email platforms and cloud storage providers, bound by confidentiality obligations</li>
            <li>Professional advisors including accountants and lawyers where required</li>
            <li>Regulatory bodies or government agencies where required by law</li>
          </ul>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            Where we engage third-party tools or platforms as part of service delivery (for example, Microsoft 365, Google Workspace, or NotebookLM), we ensure those tools are used in accordance with their respective privacy policies and that client data is handled appropriately.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">6. MedPrivacy and De-identification</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions develops and maintains MedPrivacy (medprivacy.com.au), a tool designed to de-identify clinical and participant records before they are processed by AI tools. MedPrivacy processes data locally on the user&apos;s device and does not transmit personal or health information to CollabEdge Solutions or any third party. Please refer to the MedPrivacy privacy policy at medprivacy.com.au for full details.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">7. Data Security</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We take reasonable steps to protect personal information from misuse, loss, unauthorised access, modification or disclosure. These steps include:
          </p>
          <ul className="text-[14px] text-slate leading-relaxed mb-4 space-y-2 pl-5 list-disc">
            <li>Secure email and cloud storage systems</li>
            <li>Access controls limiting who can view client information</li>
            <li>Using reputable third-party platforms with strong security practices</li>
          </ul>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            No method of transmission over the internet is completely secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">8. Access and Correction</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            You have the right to request access to the personal information we hold about you and to request corrections if the information is inaccurate, incomplete or out of date.
          </p>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            To make a request, contact us at:{' '}
            <a href="mailto:sinclair@collabedgesolutions.com.au" className="text-gold hover:underline">sinclair@collabedgesolutions.com.au</a>
          </p>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We will respond within a reasonable timeframe and in accordance with the Privacy Act 1988 (Cth).
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">9. Complaints</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            If you believe we have breached the Australian Privacy Principles, you may lodge a complaint by contacting us at{' '}
            <a href="mailto:sinclair@collabedgesolutions.com.au" className="text-gold hover:underline">sinclair@collabedgesolutions.com.au</a>.
          </p>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We will acknowledge your complaint within 5 business days and aim to resolve it within 30 days. If you are not satisfied with our response, you may escalate your complaint to the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">10. Website Analytics</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            Our website uses Vercel Analytics to collect anonymous usage data including page views, referral sources and general usage patterns. This data does not identify individual visitors and is used solely to improve our website.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">11. Cookies</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings, though this may affect the functionality of some parts of the site.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">12. Links to Third-Party Sites</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            Our website contains links to third-party websites including partner organisations and tools. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">13. Changes to This Policy</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. The current version will always be available at collabedgesolutions.com.au/privacy. We encourage you to review this page periodically.
          </p>

          <h2 className="text-[18px] font-bold text-text-dark mt-10 mb-3 tracking-tight">14. Contact Us</h2>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            For any privacy-related enquiries:
          </p>
          <p className="text-[14px] text-slate leading-relaxed mb-4">
            CollabEdge Solutions<br />
            <a href="mailto:sinclair@collabedgesolutions.com.au" className="text-gold hover:underline">sinclair@collabedgesolutions.com.au</a><br />
            0426 464 442<br />
            Point Cook VIC 3030, Australia
          </p>
        </div>
      </div>
    </>
  )
}
