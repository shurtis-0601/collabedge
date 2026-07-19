import type { Metadata } from 'next'
import ProptechPageClient from '@/components/analytics/proptech/ProptechPageClient'

export const metadata: Metadata = {
  title: 'Data Analytics for Proptech | CollabEdge Solutions',
  description:
    'Property managers, mortgage brokers, builders, conveyancers and real estate agents who want clear insight into portfolio risk, pipeline performance and compliance obligations. CollabEdge builds the reporting layer from the data you already have.',
}

export default function ProptechAnalyticsPage() {
  return <ProptechPageClient />
}
