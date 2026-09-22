// Canonical URL middleware. Applies to every request the Nuxt server processes.
//
// Two redirects, both 301:
//
//   1. Hostname:  www.pixelsigns.art → pixelsigns.art
//   2. Trailing slash:  /about/ → /about
//
// For static-only hosts (Cloudflare Pages, Netlify, GitHub Pages, etc.),
// mirror these rules in:
//   - public/_redirects   (Netlify / Cloudflare Pages)
//   - vercel.json          (Vercel)

const APEX_HOST = 'pixelsigns.art'
const APEX_HOST_WWW = `www.${APEX_HOST}`

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const host = url.host.toLowerCase()
  const pathname = url.pathname

  // 1. Hostname: www.pixelsigns.art → pixelsigns.art
  if (host === APEX_HOST_WWW) {
    const target = `${url.protocol}//${APEX_HOST}${pathname}${url.search}`
    return sendRedirect(event, target, 301)
  }

  // 2. Trailing slash: /about/  → /about
  //    The homepage "/" is left alone. Everything else with a trailing slash
  //    is canonicalised to the version without one.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const newPath = pathname.slice(0, -1) + url.search
    return sendRedirect(event, newPath, 301)
  }
})