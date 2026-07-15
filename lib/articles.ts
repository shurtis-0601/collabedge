import fs from 'fs'
import path from 'path'

export type ArticleImage = { src: string; alt: string; width: number; height: number }

export type Block =
  | { type: 'h2' | 'h3' | 'p' | 'note'; text: string }
  | { type: 'image'; image: ArticleImage; caption?: string }
  | { type: 'series-nav' }

export type Article = {
  title: string
  slug: string
  date: string
  updated?: string
  category: string
  seriesPosition?: number
  author: string
  description: string
  redirectFrom: string
  thumbnail: ArticleImage
  blocks: Block[]
}

// Dimensions of the processed images in public/images/blog (max width 1200px)
const IMAGE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  '/images/blog/ndis-provider-late-night-admin.webp': { width: 1200, height: 684 },
  '/images/blog/ndis-compliance-tipping-scales.webp': { width: 1200, height: 805 },
  '/images/blog/may-2026-ndis-budget-hero.webp': { width: 1200, height: 960 },
  '/images/blog/ndis-participant-reduction-infographic.webp': { width: 1200, height: 2150 },
  '/images/blog/ndis-commission-compliance-infographic.webp': { width: 1200, height: 2150 },
  '/images/blog/ndis-support-coordinator-admin-burden.webp': { width: 1200, height: 900 },
  '/images/blog/ndis-rord-cos-art-time-cost.webp': { width: 1200, height: 900 },
  '/images/blog/ndis-reactive-vs-productive-practice.webp': { width: 1200, height: 900 },
  '/images/blog/productivity-paradox-thumbnail.webp': { width: 1200, height: 900 },
  '/images/blog/data-security-hero.webp': { width: 1200, height: 1205 },
  '/images/blog/10-step-data-security-checklist.webp': { width: 507, height: 970 },
  '/images/blog/data-security-thumbnail.webp': { width: 1200, height: 1202 },
  '/images/blog/ndis-data-analytics-hero.webp': { width: 1200, height: 800 },
  '/images/blog/ndis-predicted-growth-dashboard.webp': { width: 1200, height: 677 },
  '/images/blog/ndis-utilisation-rate-dashboard.webp': { width: 1200, height: 679 },
  '/images/blog/ndis-compliance-dashboard.webp': { width: 1200, height: 798 },
  '/images/blog/ndis-business-questions-template-snippet.webp': { width: 1200, height: 254 },
  '/images/blog/ndis-provider-productivity-wins-2026-hero.webp': { width: 1672, height: 941 },
  '/images/blog/ndis-compliance-calendar-weekly-rhythm.webp': { width: 1672, height: 941 },
  '/images/blog/ndis-microsoft-365-workflow-tools.webp': { width: 1672, height: 941 },
  '/images/blog/ndis-participant-data-deidentification-safe-ai.webp': { width: 1672, height: 941 },
  '/images/blog/ndis-ai-safe-vs-risky-documentation-hero.webp': { width: 1672, height: 941 },
  '/images/blog/ndis-shadow-ai-risk-staff-chatgpt.webp': { width: 1500, height: 844 },
  '/images/blog/ndis-safe-ai-workflow-deidentification-steps.webp': { width: 1500, height: 844 },
  '/images/blog/ndis-provider-ai-policy-document-2026.webp': { width: 1500, height: 844 },
}

export const SERIES = [
  {
    position: 1,
    title: "The Ethical Operator's Dilemma: Why NDIS Productivity Matters More Than Ever in 2026",
    slug: 'ethical-operators-dilemma-ndis-productivity-2026',
  },
  {
    position: 2,
    title: 'What the May 2026 NDIS Budget Really Means for Small Providers',
    slug: 'may-2026-ndis-budget-small-providers',
  },
  {
    position: 3,
    title: 'The Productivity Paradox: Why Doing More Manually Is Hurting Participant Care',
    slug: 'productivity-paradox-manual-work-ndis',
  },
  {
    position: 4,
    title: 'Seven Practical Productivity Wins for NDIS Providers',
    slug: 'ndis-provider-productivity-wins-2026',
  },
  {
    position: 5,
    title: 'AI and NDIS Documentation: What Is Safe, What Is Risky, and What Actually Works',
    slug: 'ndis-ai-documentation-safe-risky-what-works-2026',
  },
] as const

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles')

function unquote(value: string): string {
  const v = value.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1)
  }
  return v
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; rest: string } {
  const lines = raw.split('\n')
  if (lines[0].trim() !== '---') return { meta: {}, rest: raw }
  const meta: Record<string, string> = {}
  let i = 1
  for (; i < lines.length; i++) {
    if (lines[i].trim() === '---') break
    const idx = lines[i].indexOf(':')
    if (idx > 0) {
      meta[lines[i].slice(0, idx).trim()] = unquote(lines[i].slice(idx + 1))
    }
  }
  return { meta, rest: lines.slice(i + 1).join('\n') }
}

type ManifestEntry = { key: string; src: string; alt: string }

function parseManifest(section: string): ManifestEntry[] {
  const entries: ManifestEntry[] = []
  const lines = section.split('\n')
  let current: { key: string; src?: string; file?: string; altLines: string[] } | null = null
  const push = () => {
    if (current && current.file) {
      entries.push({
        key: current.key,
        src: current.file.replace(/^public/, ''),
        alt: current.altLines.join(' ').trim(),
      })
    }
  }
  for (const line of lines) {
    const header = line.match(/^(IMAGE \d+|THUMBNAIL)\b/)
    if (header) {
      push()
      current = { key: header[1], altLines: [] }
      continue
    }
    if (!current) continue
    if (line.startsWith('Source:')) continue
    if (line.startsWith('New file:')) {
      current.file = line.slice('New file:'.length).trim()
      continue
    }
    if (line.startsWith('Alt:')) {
      current.altLines.push(line.slice('Alt:'.length).trim())
      continue
    }
    if (line.startsWith('DROPPED')) {
      push()
      current = null
      continue
    }
    if (current.altLines.length > 0 && line.trim() !== '') {
      current.altLines.push(line.trim())
    }
  }
  push()
  return entries
}

function toImage(entry: ManifestEntry): ArticleImage {
  const dims = IMAGE_DIMENSIONS[entry.src] ?? { width: 1200, height: 800 }
  return { src: entry.src, alt: entry.alt, ...dims }
}

function parseBody(body: string, manifest: ManifestEntry[]): Block[] {
  // Split into paragraphs on blank lines, joining hard-wrapped lines
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.split('\n').map((l) => l.trim()).join(' ').trim())
    .filter((p) => p.length > 0 && p !== '---')

  const blocks: Block[] = []
  for (let i = 0; i < paragraphs.length; i++) {
    let text = paragraphs[i]
    // Remove any bracketed ALT wording; the primary wording renders
    text = text.replace(/\s*\[ALT[^\]]*\]/g, '')

    if (text.startsWith('## ')) {
      blocks.push({ type: 'h2', text: text.slice(3).trim() })
      continue
    }
    if (text.startsWith('### ')) {
      blocks.push({ type: 'h3', text: text.slice(4).trim() })
      continue
    }
    const imageMatch = text.match(/^\[(IMAGE \d+)\]$/)
    if (imageMatch) {
      const entry = manifest.find((e) => e.key === imageMatch[1])
      if (entry) {
        let caption: string | undefined
        const next = paragraphs[i + 1]
        if (next && next.startsWith('*') && next.endsWith('*') && !next.startsWith('**')) {
          caption = next.slice(1, -1).trim()
          i++
        }
        blocks.push({ type: 'image', image: toImage(entry), caption })
      }
      continue
    }
    if (text.startsWith('[Series links to be rendered')) {
      blocks.push({ type: 'series-nav' })
      continue
    }
    if (text.startsWith('*') && text.endsWith('*') && !text.startsWith('**')) {
      blocks.push({ type: 'note', text: text.slice(1, -1).trim() })
      continue
    }
    blocks.push({ type: 'p', text })
  }
  return blocks
}

function parseArticle(filename: string): Article | null {
  const raw = fs
    .readFileSync(path.join(ARTICLES_DIR, filename), 'utf-8')
    .replace(/\r\n/g, '\n')

  const { meta, rest } = parseFrontmatter(raw)
  // Skip files without article frontmatter (e.g. the folder README)
  if (!meta.slug || !meta.title) return null

  // Locate and remove the IMAGE MANIFEST section (never rendered)
  const manifestIdx = rest.indexOf('IMAGE MANIFEST')
  let bodyPart = rest
  let manifestPart = ''
  if (manifestIdx >= 0) {
    manifestPart = rest.slice(manifestIdx)
    bodyPart = rest.slice(0, manifestIdx)
    // Drop the trailing --- separator that preceded the manifest
    bodyPart = bodyPart.replace(/\n---\s*$/, '\n')
  }

  // Remove the MIGRATION NOTES block (never rendered): from the
  // MIGRATION NOTES line up to and including the next standalone ---
  const migIdx = bodyPart.indexOf('MIGRATION NOTES')
  if (migIdx >= 0) {
    const afterMig = bodyPart.slice(migIdx)
    const endIdx = afterMig.search(/\n---\s*\n/)
    if (endIdx >= 0) {
      const endLen = afterMig.slice(endIdx).match(/\n---\s*\n/)![0].length
      bodyPart = bodyPart.slice(0, migIdx) + afterMig.slice(endIdx + endLen)
    }
  }

  const manifest = parseManifest(manifestPart)
  const blocks = parseBody(bodyPart, manifest)

  const thumbEntry =
    manifest.find((e) => e.key === 'THUMBNAIL') ?? manifest.find((e) => e.key.startsWith('IMAGE'))

  return {
    title: meta.title,
    slug: meta.slug,
    date: meta.date,
    updated: meta.updated,
    category: meta.category,
    seriesPosition: meta.series_position ? Number(meta.series_position) : undefined,
    author: meta.author,
    description: meta.description,
    redirectFrom: meta.redirect_from,
    thumbnail: toImage(thumbEntry!),
    blocks,
  }
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.md'))
  const articles = files
    .map(parseArticle)
    .filter((a): a is Article => Boolean(a))
  return articles.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getPublishedArticles(): Article[] {
  const today = new Date().toISOString().slice(0, 10)
  return getAllArticles().filter((a) => a.date <= today)
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug)
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]
  return `${d} ${months[m - 1]} ${y}`
}