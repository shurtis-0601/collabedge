import type { MetadataRoute } from 'next'
import { getPublishedArticles } from '@/lib/articles'

const BASE_URL = 'https://www.collabedgesolutions.com.au'

type StaticRoute = {
  path: string
  priority: number
  changeFrequency: 'weekly' | 'monthly' | 'yearly'
  // Only set when the page content was genuinely changed on that date.
  // Pages without a date omit lastModified instead of reporting today.
  lastModified?: string
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: StaticRoute[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly', lastModified: '2026-10-29' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/ndis-compliance-audit', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/ndis-compliance-audit/sil-registration', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/managed-services', priority: 0.9, changeFrequency: 'monthly', lastModified: '2026-10-30' },
    { path: '/services/healthcare-workflow', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/document-governance', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/digital', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/analytics', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/analytics/health', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/analytics/proptech', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/analytics/retail', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/ai-advisory', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/services/partner-solutions', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services/partner-solutions/shield', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/partner-solutions/dynamic-netsoft', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/partner-solutions/property-automate', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/services/partner-solutions/newgen-consulting', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products', priority: 0.8, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/products/employee-onboarding-automation', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/products/funding-burn-rate-tracker', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/ai-automation', priority: 0.7, changeFrequency: 'weekly', lastModified: '2026-10-29' },
    { path: '/resources', priority: 0.7, changeFrequency: 'weekly', lastModified: '2026-10-29' },
    { path: '/resources/downloads', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/resources/videos', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/about/team', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/about/sinclair-hurtis', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/about/raj-purshotham', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/about/magdalena-paczkowska', priority: 0.5, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/case-studies', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/case-studies/enhance-ability-services', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/appt', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/contact', priority: 0.6, changeFrequency: 'monthly', lastModified: '2026-10-29' },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly', lastModified: '2026-10-29' },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: route.lastModified ? new Date(route.lastModified) : undefined,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const articleEntries: MetadataRoute.Sitemap = getPublishedArticles().map((article) => ({
    url: `${BASE_URL}/resources/articles/${article.slug}`,
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...articleEntries]
}
