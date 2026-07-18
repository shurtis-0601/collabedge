import type { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/articles'

const BASE_URL = 'https://www.collabedgesolutions.com.au'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/ndis-compliance-audit', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/services/ndis-compliance-audit/sil-registration', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/healthcare-workflow', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/document-governance', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/digital', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/analytics', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/analytics/health', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/analytics/proptech', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/analytics/retail', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/ai-advisory', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/partner-solutions', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services/partner-solutions/shield', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/partner-solutions/dynamic-netsoft', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/partner-solutions/property-automate', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/services/partner-solutions/newgen-consulting', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/products', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/products/employee-onboarding-automation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/products/funding-burn-rate-tracker', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/ai-automation', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly' as const },
    { path: '/resources/downloads', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources/videos', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/about/team', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about/sinclair-hurtis', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/about/raj-purshotham', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/about/magdalena-paczkowska', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/case-studies', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/case-studies/enhance-ability-services', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/appt', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleEntries: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: `${BASE_URL}/resources/articles/${article.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...articleEntries]
}
