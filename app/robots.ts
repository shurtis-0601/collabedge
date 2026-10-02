import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.collabedgesolutions.com.au'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/go/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
