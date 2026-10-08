export type IndustryGuide = {
  id: 'health' | 'property' | 'mortgage' | 'retail' | 'accounting'
  /** Short label used on the Pick your industry buttons */
  label: string
  title: string
  audience: string
  /** Public path, files live in public/downloads/ */
  file: string
  pages: number
  /** direct: plain link to the PDF. form: reserved for a later Bigin flow, not enabled. */
  delivery: 'direct' | 'form'
  /** Bigin tag for a later flow. Unused for now. */
  biginTag: string
}

export const FULL_GUIDE_HREF = '/go/data'

export const industryGuides: IndustryGuide[] = [
  {
    id: 'health',
    label: 'Health and NDIS',
    title: 'Health, NDIS and Allied Care',
    audience:
      'For practice owners, clinic managers, NDIS providers and aged care operators.',
    file: '/downloads/CollabEdge_What_Is_Your_Data_Telling_You_Health_NDIS_Allied_Care.pdf',
    pages: 3,
    delivery: 'direct',
    biginTag: 'guide-health',
  },
  {
    id: 'property',
    label: 'Property',
    title: 'Property Management and Real Estate',
    audience:
      'For property managers, agency principals and real estate business owners.',
    file: '/downloads/CollabEdge_What_Is_Your_Data_Telling_You_Property_Real_Estate.pdf',
    pages: 3,
    delivery: 'direct',
    biginTag: 'guide-property',
  },
  {
    id: 'mortgage',
    label: 'Mortgage',
    title: 'Mortgage Brokers',
    audience: 'For mortgage broking businesses and finance intermediaries.',
    file: '/downloads/CollabEdge_What_Is_Your_Data_Telling_You_Mortgage_Brokers.pdf',
    pages: 3,
    delivery: 'direct',
    biginTag: 'guide-mortgage',
  },
  {
    id: 'retail',
    label: 'Retail and Hospitality',
    title: 'Retail and Hospitality',
    audience:
      'For retail store owners, multi-site operators and hospitality businesses.',
    file: '/downloads/CollabEdge_What_Is_Your_Data_Telling_You_Retail_Hospitality.pdf',
    pages: 3,
    delivery: 'direct',
    biginTag: 'guide-retail',
  },
  {
    id: 'accounting',
    label: 'Accounting',
    title: 'Accounting and Financial Services',
    audience:
      'For accountants, bookkeepers, financial planners and advisory firms.',
    file: '/downloads/CollabEdge_What_Is_Your_Data_Telling_You_Accounting_Financial_Services.pdf',
    pages: 3,
    delivery: 'direct',
    biginTag: 'guide-accounting',
  },
]
