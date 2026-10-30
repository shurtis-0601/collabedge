'use client'

import { usePathname } from 'next/navigation'

const BASE_URL = 'https://www.collabedgesolutions.com.au'

type Crumb = [name: string, path: string]

const HOME: Crumb = ['Home', '/']
const SERVICES: Crumb = ['Services', '/services']
const DIGITAL: Crumb = ['Digital Services', '/services/digital']
const ANALYTICS: Crumb = ['Data Analytics', '/services/analytics']
const PARTNERS: Crumb = ['Partner Solutions', '/services/partner-solutions']
const COMPLIANCE: Crumb = ['NDIS Compliance and Audit', '/services/ndis-compliance-audit']
const PRODUCTS: Crumb = ['Products', '/products']
const ABOUT: Crumb = ['About', '/about']
const RESOURCES: Crumb = ['Resources', '/resources']
const CASES: Crumb = ['Case Studies', '/case-studies']

// Each page lists its own trail, ending with the page itself.
const TRAILS: Record<string, Crumb[]> = {
  '/services': [HOME, SERVICES],
  '/services/ndis-compliance-audit': [HOME, SERVICES, COMPLIANCE],
  '/services/ndis-compliance-audit/sil-registration': [HOME, SERVICES, COMPLIANCE, ['SIL Registration', '/services/ndis-compliance-audit/sil-registration']],
  '/services/managed-services': [HOME, SERVICES, ['Managed Services', '/services/managed-services']],
  '/services/healthcare-workflow': [HOME, SERVICES, ['Healthcare Workflow Automation', '/services/healthcare-workflow']],
  '/services/document-governance': [HOME, SERVICES, ['Document Governance', '/services/document-governance']],
  '/services/digital': [HOME, SERVICES, DIGITAL],
  '/services/analytics': [HOME, SERVICES, DIGITAL, ANALYTICS],
  '/services/analytics/health': [HOME, SERVICES, DIGITAL, ANALYTICS, ['Allied Health', '/services/analytics/health']],
  '/services/analytics/proptech': [HOME, SERVICES, DIGITAL, ANALYTICS, ['Property Technology', '/services/analytics/proptech']],
  '/services/analytics/retail': [HOME, SERVICES, DIGITAL, ANALYTICS, ['Retail', '/services/analytics/retail']],
  '/services/ai-advisory': [HOME, SERVICES, ['AI Advisory', '/services/ai-advisory']],
  '/services/partner-solutions': [HOME, SERVICES, PARTNERS],
  '/services/partner-solutions/shield': [HOME, SERVICES, PARTNERS, ['SHIELD', '/services/partner-solutions/shield']],
  '/services/partner-solutions/dynamic-netsoft': [HOME, SERVICES, PARTNERS, ['Dynamic Netsoft', '/services/partner-solutions/dynamic-netsoft']],
  '/services/partner-solutions/property-automate': [HOME, SERVICES, PARTNERS, ['Property Automate', '/services/partner-solutions/property-automate']],
  '/services/partner-solutions/newgen-consulting': [HOME, SERVICES, PARTNERS, ['NewGen Consulting', '/services/partner-solutions/newgen-consulting']],
  '/products': [HOME, PRODUCTS],
  '/products/employee-onboarding-automation': [HOME, PRODUCTS, ['Employee Onboarding Automation', '/products/employee-onboarding-automation']],
  '/products/funding-burn-rate-tracker': [HOME, PRODUCTS, ['Funding and Burn Rate Tracker', '/products/funding-burn-rate-tracker']],
  '/about': [HOME, ABOUT],
  '/about/team': [HOME, ABOUT, ['Team', '/about/team']],
  '/about/sinclair-hurtis': [HOME, ABOUT, ['Sinclair Hurtis', '/about/sinclair-hurtis']],
  '/about/magdalena-paczkowska': [HOME, ABOUT, ['Magdalena Paczkowska', '/about/magdalena-paczkowska']],
  '/about/raj-purshotham': [HOME, ABOUT, ['Raj Purshotham', '/about/raj-purshotham']],
  '/resources': [HOME, RESOURCES],
  '/resources/downloads': [HOME, RESOURCES, ['Downloads', '/resources/downloads']],
  '/resources/videos': [HOME, RESOURCES, ['Video Walkthroughs', '/resources/videos']],
  '/case-studies': [HOME, CASES],
  '/case-studies/enhance-ability-services': [HOME, CASES, ['Enhance Ability Services', '/case-studies/enhance-ability-services']],
  '/ai-automation': [HOME, ['AI and Automation', '/ai-automation']],
  '/contact': [HOME, ['Contact', '/contact']],
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname()
  const trail = pathname ? TRAILS[pathname] : undefined
  if (!trail) return null

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: `${BASE_URL}${path === '/' ? '' : path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
