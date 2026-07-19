import type { Metadata } from 'next'
import RetailPageClient from '@/components/analytics/retail/RetailPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Retail | CollabEdge Solutions',
  description:
    'For physical retailers, omnichannel operators and specialty independents wanting insight into sales performance, margin efficiency and supply chain risk.',
  openGraph: {
    title: 'Data Analytics for Retail | CollabEdge Solutions',
    description:
      'For physical retailers, omnichannel operators and specialty independents wanting insight into sales performance, margin efficiency and supply chain risk.',
    url: 'https://www.collabedgesolutions.com.au/services/analytics/retail',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
    type: 'website',
  },
}

export default function RetailAnalyticsPage() {
  return <RetailPageClient />
}
