/**
 * Dynamic sitemap.xml for pixelsigns.art.
 *
 * - One canonical URL per page, no trailing slash.
 * - Single hostname (https://pixelsigns.art) — matches the canonical
 *   link emitted by every Vue page.
 * - Lastmod is taken from the last git commit that modified the source
 *   page, so search engines get a real signal. We fall back to the
 *   build time when no commit is available (e.g. CI first checkout).
 */
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const exec = promisify(execFile)

interface PageEntry {
  loc: string
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'
  priority: number
  /** Source file on disk, used to look up the last modified time */
  filePath?: string
}

const PAGES: PageEntry[] = [
  { loc: '/',                                  changefreq: 'weekly',  priority: 1.0 },
  { loc: '/tools',                             changefreq: 'monthly', priority: 0.9 },
  { loc: '/guides',                            changefreq: 'monthly', priority: 0.9 },
  { loc: '/english-naturalness-checker',       changefreq: 'monthly', priority: 1.0, filePath: 'pages/english-naturalness-checker.vue' },
  { loc: '/english-level-checker',             changefreq: 'monthly', priority: 0.9, filePath: 'pages/english-level-checker.vue' },
  { loc: '/prompt-doctor',                     changefreq: 'monthly', priority: 0.9, filePath: 'pages/prompt-doctor.vue' },
  { loc: '/guides/correct-vs-natural-english',             changefreq: 'monthly', priority: 0.7, filePath: 'pages/guides/correct-vs-natural-english.vue' },
  { loc: '/guides/how-to-sound-natural-in-english',        changefreq: 'monthly', priority: 0.7, filePath: 'pages/guides/how-to-sound-natural-in-english.vue' },
  { loc: '/guides/common-unnatural-english-sentences',     changefreq: 'monthly', priority: 0.7, filePath: 'pages/guides/common-unnatural-english-sentences.vue' },
  { loc: '/about',                             changefreq: 'yearly',  priority: 0.5 },
  { loc: '/contact',                           changefreq: 'yearly',  priority: 0.4 },
  { loc: '/editorial-policy',                  changefreq: 'yearly',  priority: 0.4 },
  { loc: '/privacy',                           changefreq: 'yearly',  priority: 0.4 },
  { loc: '/terms',                             changefreq: 'yearly',  priority: 0.4 },
  { loc: '/disclaimer',                        changefreq: 'yearly',  priority: 0.3 },
]

async function lastmodFor(file: string | undefined): Promise<string> {
  const fallback = new Date().toISOString().slice(0, 10)

  if (!file) return fallback
  const abs = path.resolve(file)
  try {
    await fs.access(abs)
  } catch {
    return fallback
  }

  try {
    const { stdout } = await exec('git', ['log', '-1', '--format=%cI', '--', file])
    const trimmed = stdout.trim()
    if (trimmed) return trimmed.slice(0, 10)
  } catch {
    /* not a git checkout (e.g. deploy artifact): fall back to mtime */
  }

  try {
    const stat = await fs.stat(abs)
    return stat.mtime.toISOString().slice(0, 10)
  } catch {
    return fallback
  }
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const origin = (config.public.siteUrl as string | undefined) ?? 'https://pixelsigns.art'

  const entries = await Promise.all(
    PAGES.map(async (p) => ({
      loc: `${origin}${p.loc}`,
      lastmod: await lastmodFor(p.filePath),
      changefreq: p.changefreq,
      priority: p.priority.toFixed(1),
    })),
  )

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url>\n` +
          `    <loc>${e.loc}</loc>\n` +
          `    <lastmod>${e.lastmod}</lastmod>\n` +
          `    <changefreq>${e.changefreq}</changefreq>\n` +
          `    <priority>${e.priority}</priority>\n` +
          `  </url>`,
      )
      .join('\n') +
    `\n</urlset>\n`

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=300, s-maxage=3600')
  return body
})