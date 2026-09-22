# PixelSigns.art

> Pure frontend Nuxt 3 + Tailwind app for the AI tools site at
> [`pixelsigns.art`](https://pixelsigns.art).

This is the **first-stage public MVP** of PixelSigns — the build specs come
from the planning docs in `../docs/`:

| Doc | Purpose |
| --- | --- |
| `pixelsigns_1_art_website_development_plan.md` | Overall website plan, IA, growth path |
| `pixelsigns_2_keyword_tool_ideas_v1.md` | First round of keyword + tool idea mining |
| `pixelsigns_3_keyword_decision_matrix_v1.md` | Pre-Ahrefs decision matrix |
| `pixelsigns_4_final_validation_tool1_prd.md` | Final validation & Tool #1 PRD |
| `pixelsigns_5_naturalness_checker_development_spec.md` | UI / API / LLM / SEO spec for Tool #1 |

Currently the platform has 3 free diagnostics:

- **Tool #1 — English Naturalness Checker** at `/english-naturalness-checker` — paste a paragraph, get a naturalness score, per-dimension breakdown, regex matching, and a corrected version.
- **Tool #2 — AI English Level Checker** at `/english-level-checker` — paste 100–500 words of your own writing, get an estimated CEFR range (A1–C2), sub-scores, three priorities and a 7-day plan.
- **Tool #3 — Prompt Doctor** at `/prompt-doctor` — paste a prompt, get a health score on seven axes and a copy-paste ready-to-use improved prompt.

There are also 3 short readings at `/guides` and the usual `/about`, `/privacy`,
`/terms`, `/editorial-policy` and `/disclaimer` trust pages.

---

## Frontend-only design

- **Nuxt 3** for SSR-friendly SEO + a great DX
- **Tailwind CSS** via `@nuxtjs/tailwindcss`
- **No backend yet.** Any "API call" goes to `https://api.pixelsigns.art` in
  concept, but is currently mocked on the client in
  [`utils/api.ts`](./utils/api.ts). When the real backend is online, swap the
  single function body inside `api.checkNaturalness(...)`.
- **Privacy-conscious analytics.** The
  [`composables/useAnalytics.ts`](./composables/useAnalytics.ts) composable
  sanitises every event — it never logs raw user-submitted text.
- **Anonymous quota.** A simple `sessionStorage` counter enforces the MVP's
  per-day free check limit, so users get value first and signup is never
  required to see a result.

---

## Project layout

```
.
├── app.vue                # Layout shell (header + page + footer)
├── nuxt.config.ts         # Site URL, runtimeConfig, prerender, Tailwind
├── tailwind.config.ts     # Brand palette
├── assets/css/main.css    # Tailwind layers + component classes
├── components/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   ├── naturalness/       # ScoreBadge, RewriteCard, PatternCard, etc.
│   ├── level/             # LevelForm, LevelResult, LevelScoreBadge, GoalSelector
│   └── prompt/            # PromptForm, PromptResult, PromptScoreBar, TargetSelector
├── composables/
│   ├── useAnalytics.ts    # Privacy-conscious event tracker
│   ├── useNaturalness.ts  # Tool #1 (naturalness) state + quota + rate limit
│   ├── useLevel.ts        # Tool #2 (CEFR estimate) state + quota + rate limit
│   └── usePrompt.ts       # Tool #3 (prompt doctor) state + quota + rate limit
├── pages/
│   ├── index.vue                       # Homepage
│   ├── english-naturalness-checker.vue # Tool #1
│   ├── english-level-checker.vue       # Tool #2
│   ├── prompt-doctor.vue               # Tool #3
│   ├── tools/index.vue                 # Tools index
│   ├── guides/index.vue                # Guides index
│   ├── guides/correct-vs-natural-english.vue
│   ├── guides/how-to-sound-natural-in-english.vue
│   ├── guides/common-unnatural-english-sentences.vue
│   ├── about.vue
│   ├── contact.vue
│   ├── privacy.vue
│   ├── terms.vue
│   ├── editorial-policy.vue
│   └── disclaimer.vue
├── types/
│   ├── naturalness.ts
│   ├── level.ts
│   └── prompt.ts
├── public/
│   ├── favicon.svg
│   ├── _redirects         # Netlify / Cloudflare Pages redirects (canonical URL)
│   └── robots.txt
├── public/
│   ├── favicon.svg
│   ├── _redirects         # Netlify / Cloudflare Pages redirects (canonical URL)
│   └── robots.txt
├── server/
│   ├── middleware/
│   │   └── redirects.ts   # Runtime 301s: trailing-slash + www → apex
│   └── routes/
│       └── sitemap.xml.ts # Dynamic sitemap (XML)
├── types/
│   └── naturalness.ts    # Shared types for the tool
├── utils/
│   └── api.ts            # Mock API client (swap with real call later)
├── vercel.json           # Vercel: trailingSlash:false + canonical redirect
├── error.vue             # Friendly 404 / 500
└── docs/                 # Planning docs (read-only reference)
```

---

## Local development

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000` by default.

## Build & preview

```bash
npm run build      # production build (also prerenders pages)
npm run preview    # serve the built app
```

The build is configured to pre-render the homepage and follow internal links,
so the SEO-critical pages are emitted as static HTML for fast first paint and
easy hosting.

---

## Canonical URLs

There is a single, deliberate URL convention across internal links, the canonical
link element, JSON-LD and the sitemap:

- **No trailing slash.** `/about/` redirects to `/about` with `301`. The same
  rule is mirrored in `public/_redirects` (Netlify / Cloudflare Pages),
  `vercel.json` (Vercel) and `server/middleware/redirects.ts` (Node / Nitro).
- **One hostname.** `www.pixelsigns.art` redirects to `pixelsigns.art` with
  `301`. The apex `pixelsigns.art` is the only public hostname. The api
  subdomain (`api.pixelsigns.art`) is reserved for the (future) backend and is
  not referenced from any user-visible URL on `pixelsigns.art`.
- **Sitemap** (`/sitemap.xml`) lists only the version **without** a trailing
  slash, so it stays consistent with the canonical link on every page.
- **Robots** (`/robots.txt`) points to the canonical `/sitemap.xml`.

Three layered fallbacks handle redirects depending on the deploy target:

| Host | File | What it does |
| --- | --- | --- |
| Node / open preview | `server/middleware/redirects.ts` | `sendRedirect` from `/about/` → `/about`, `www.` → apex |
| Netlify / Cloudflare Pages | `public/_redirects` | Same rules, applied before file serving |
| Vercel | `vercel.json` | `trailingSlash: false` + redirects |

If you deploy somewhere else (GitHub Pages, S3 + CloudFront, Nginx, etc.)
mirror the same two rules — they are short enough to copy.

---

## Where the backend will plug in

Right now `utils/api.ts` is entirely client-side. The line that will change is:

```ts
// utils/api.ts — api.checkNaturalness
// CURRENT (mock):
const canonical = findCanonical(request)
const result = canonical ?? buildMockResult(request)

// REPLACE WITH (when api.pixelsigns.art is live):
return await $fetch<NaturalnessResponse>(`${getApiBaseUrl()}/naturalness`, {
  method: 'POST',
  body: request,
})
```

Nothing else in the app needs to change — the request and response shapes are
already aligned with the future real endpoint (see
`types/naturalness.ts`).

---

## Going beyond Tool #1

Per the docs, the next tools to consider (in watch / priority order) are:

1. **AI English Level Checker** (CEFR-style assessment)
2. **English Study Plan Generator** (personalized weekly plans)
3. **Prompt Doctor** (after we see SERP signal — currently treated as
   *WATCH* in `pixelsigns_4_final_validation_tool1_prd.md`)

A second tool should only be added once the first one has produced real query
+ usage signal — see `pixelsigns_4_final_validation_tool1_prd.md` §20–22.
