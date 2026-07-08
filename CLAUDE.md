# CollabEdge Solutions Website

Next.js 14 App Router on Vercel. Branch:
claude/update-website-styling-c4LGQ

## File map (do not explore, use these paths)

- Pages: app/[route]/page.tsx
- Header: components/layout/SiteHeader.tsx
- Footer: components/layout/SiteFooter.tsx
- Shared final CTA block: components/CTASection.tsx
  (navy background, gold button, heading, subline, CTA
  link, use this instead of hand-rolling a new one)
- Video embed: components/VideoEmbed.tsx (facade
  pattern, click to load, youtube-nocookie)
- Product tabs: components/products/ProductTabs.tsx
  (accessible tab pattern, deep-linkable via
  #tab-available, #tab-development, or a card slug,
  e.g. #ndis-crm)
- Design tokens: tailwind.config.ts
- Blog content: content/articles/*.md
- Blog images: public/images/blog/
- Download templates: content/downloads/
- General images: public/images/

## Next.js server/client boundary note

Icons and other component references cannot pass from a
Server Component into a Client Component as bare
component types, this throws at build time. Pass
pre-rendered JSX elements instead (render the icon in
the server component, pass the resulting node as a
prop). Applies anywhere a Client Component needs an
icon or similar from page-level data.

## Products (live)

- /products (hub)
- /products/employee-onboarding-automation
- /products/funding-burn-rate-tracker
- MedPrivacy: external, https://medprivacy.com.au
- NDIS CRM: In Development, no page yet, footer and
  hub link to /appt

## Design tokens

- Navy background: #030F23
- Gold (brand): #D4941E
- Gold on dark backgrounds: brand.goldDark #E6B85C
- Gold on light backgrounds: brand.goldLight #B8821A
- Offwhite light sections: #EEF0EB (not bg-white)
- Eucalyptus #3C6E5E: partner CTA sections ONLY

## Accessibility rules (all pages)

- Body prose minimum 16px, secondary text minimum 14px
- Eyebrow labels minimum 13px, uppercase, tracked
- H1 44px, H2 26px, H3 18px
- No opacity-based text colours on dark backgrounds.
  Use solid #F1F5F9, #D1D5DB, #9CA3AF

## Animation

Two registers, chosen by audience, not one rule for
every page.

Restrained register (NDIS and healthcare provider
facing pages: Services hub, NDIS Compliance and Audit,
SIL Registration, Document Governance, Healthcare
Workflow Automation, About, Team): subtle fade up on
scroll, gentle hover lift only. Nothing bold.

Confident register (enterprise and small business
digital audience pages: Digital Services, AI Advisory,
Products, Home): more expressive motion is fine, richer
hover states, more pronounced transitions, a hero
element with genuine movement. Read as polish, not
noise.

Both registers always respect prefers-reduced-motion.
This is non-negotiable regardless of page or audience,
it only activates for users who have explicitly asked
for it.

## Copy rules (all output, no exceptions)

- Australian English
- No em dashes anywhere, including metadata
- No apostrophe contractions (write do not, it is)
- No curly or smart quotes
- No bullet points inside cards or prose sections
- Statement headings preferred. Maximum one
  question-format H2 per page, FAQ sections excepted
- Never write vendor-agnostic. Framing is right-fit
  and cost benefit
- Never describe products as free. Products are
  included as part of a Managed Services engagement

## Positioning facts (never contradict)

- Two pillars: NDIS and healthcare advisory, plus
  enterprise transformation with technology partners
- Geography: Australia and Asia Pacific. Never global
- Partners: SHIELD (Sekunce), Dynamic Netsoft,
  Property Automate, Newgen Consulting. Dynamic
  Netsoft and Property Automate are SEPARATE partners
- DQOps and Vanta are removed. Never reference them
- The engagement model is called Managed Services,
  never a partnership or partner plan
- All booking CTAs link to /appt
- No fabricated metrics, testimonials, or claims.
  Client quotes render verbatim only

## Working style

- Make only the changes the prompt specifies
- Do not run repo-wide searches unless the prompt
  explicitly asks
- Do not spawn subagents for single-file edits
- Keep completion reports brief: files changed, one
  line each
