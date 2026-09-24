<template>
  <div>
    <section class="relative overflow-hidden border-b border-ink-200 bg-paper">
      <div class="container-wide py-16 sm:py-24 lg:py-28">
        <div class="max-w-3xl">
          <p class="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600 shadow-soft">
            <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-500" />
            Useful AI Tools for Work &amp; Learning
          </p>
          <h1 class="mt-6 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Free AI tools for English writing, learning &amp; prompts
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
            PixelSigns builds practical AI-powered tools that help you write natural English, check your CEFR level, and improve your AI prompts.
            No signup walls, no fluff.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/english-naturalness-checker" class="btn-primary">
              Explore Tools
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/about" class="btn-secondary">Why PixelSigns</NuxtLink>
          </div>

          <ul class="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <li class="flex items-center gap-2">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-accent-100 text-accent-700">
                <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-11" />
                </svg>
              </span>
              Free
            </li>
            <li class="flex items-center gap-2">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-accent-100 text-accent-700">
                <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-11" />
                </svg>
              </span>
              No signup required
            </li>
            <li class="flex items-center gap-2">
              <span class="grid h-5 w-5 place-items-center rounded-full bg-accent-100 text-accent-700">
                <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-11" />
                </svg>
              </span>
              Privacy-conscious
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Featured tools -->
    <section class="container-wide py-16 sm:py-20">
      <div class="flex items-end justify-between gap-4">
        <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Free writing tools</h2>
        <NuxtLink to="/tools" class="hidden text-sm text-accent-700 hover:text-accent-900 sm:inline">
          See all tools &rarr;
        </NuxtLink>
      </div>

      <div class="mt-6 grid gap-6 lg:grid-cols-3">
        <article v-for="tool in tools" :key="tool.href" class="card flex flex-col">
          <span class="badge bg-accent-100 text-accent-700">{{ tool.tag }}</span>
          <h3 class="mt-3 text-xl font-semibold text-ink-900">
            <NuxtLink :to="tool.href" class="hover:text-accent-700">{{ tool.title }}</NuxtLink>
          </h3>
          <p class="mt-2 flex-1 text-sm text-ink-600">{{ tool.summary }}</p>
          <ul class="mt-4 space-y-1.5 text-xs text-ink-600">
            <li v-for="bullet in tool.bullets" :key="bullet" class="flex items-start gap-2">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{{ bullet }}</span>
            </li>
          </ul>
          <NuxtLink :to="tool.href" class="btn-primary mt-6 inline-flex justify-center">
            {{ tool.cta }}
          </NuxtLink>
        </article>
      </div>
    </section>

    <!-- Use cases -->
    <section class="border-t border-ink-200 bg-white py-16 sm:py-20">
      <div class="container-wide">
        <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Built for real work and real learning</h2>
        <p class="mt-3 max-w-2xl text-ink-600">
          PixelSigns is intentionally focused. We build a small number of tools that solve one job well,
          instead of a hundred tools that try to do everything.
        </p>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article class="card-flat">
            <h3 class="text-lg font-semibold text-ink-900">Work with AI</h3>
            <ul class="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-700">
              <li>Create</li>
              <li>Analyze</li>
              <li>Compare</li>
              <li>Plan</li>
              <li>Improve</li>
              <li>Decide</li>
            </ul>
          </article>
          <article class="card-flat">
            <h3 class="text-lg font-semibold text-ink-900">Learn with AI</h3>
            <ul class="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-ink-700">
              <li>Practice English</li>
              <li>Improve writing</li>
              <li>Build vocabulary</li>
              <li>Practice speaking</li>
              <li>Check naturally</li>
              <li>Plan a study week</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Why -->
    <section class="container-wide py-16 sm:py-20">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Why PixelSigns</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="reason in reasons" :key="reason.title" class="card-flat">
          <h3 class="text-base font-semibold text-ink-900">{{ reason.title }}</h3>
          <p class="mt-2 text-sm text-ink-600">{{ reason.body }}</p>
        </article>
      </div>
    </section>

    <!-- Coming later -->
    <section class="border-t border-ink-200 bg-white py-16 sm:py-20">
      <div class="container-wide text-center">
        <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">More tools are being built</h2>
        <p class="mx-auto mt-3 max-w-2xl text-ink-600">
          We add new tools only after we see real user signal from the previous one. This keeps the site focused, fast, and trustworthy.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <NuxtLink to="/guides" class="btn-secondary inline-flex">Read the guides</NuxtLink>
          <NuxtLink to="/tools" class="btn-ghost inline-flex">Browse all tools</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'PixelSigns — Free AI Tools for English Writing & Learning',
  description:
    'Free AI tools for English writing and learning: English Naturalness Checker, AI English Level Checker, and Prompt Doctor. Check your English, estimate your CEFR level, and improve your AI prompts. No signup required.',
  ogTitle: 'PixelSigns — Free AI Tools for English Writing & Learning',
  ogDescription:
    'Free AI tools for English writing and learning. Naturalness checker, CEFR level checker, prompt doctor. No signup required.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: config.public.siteUrl,
  twitterCard: 'summary_large_image',
  canonical: config.public.siteUrl,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'PixelSigns',
        url: config.public.siteUrl,
        description:
          'Free AI tools for English writing and learning: English Naturalness Checker, AI English Level Checker (CEFR), and Prompt Doctor.',
      }),
    },
  ],
})

const { send } = useAnalytics()
function onCtaClick() {
  send('home_cta_click', { tool: 'home' })
}

const reasons = [
  { title: 'Fast', body: 'Pages are intentionally light. No needless animations. No heavy bundles. Just the tool you came for.' },
  { title: 'Free to try', body: 'No forced signup before you see a result. The core flow works anonymously.' },
  { title: 'Useful first', body: 'You always get a complete answer first. Signup is only offered when it unlocks something real.' },
  { title: 'Privacy-conscious', body: 'We never log your raw input text to ordinary analytics. Just bucketed metadata.' },
  { title: 'Clear methodology', body: 'Every tool explains what it does, what its limits are, and what it deliberately does not do.' },
  { title: 'AI-assisted, not magic', body: 'Results are useful estimates, not official assessments. We say so plainly on every page.' },
]

const tools = [
  {
    href: '/english-naturalness-checker',
    tag: 'Language · Tool #1',
    title: 'English Naturalness Checker',
    summary:
      'Does your English sound natural? Check phrasing, word choice and tone — get a more natural rewrite and a clear explanation, not just a red pen.',
    bullets: [
      'Paste a sentence and choose the context',
      'See naturalness score, rewrite, explanation, patterns',
      'Optional practice exercise to lock in what you learned',
    ],
    cta: 'Try the checker',
  },
  {
    href: '/english-level-checker',
    tag: 'Language · Tool #2',
    title: 'AI English Level Checker',
    summary:
      'Paste 100–500 words of your own writing. Get an estimated CEFR range (A1–C2), sub-scores, three priorities and a 7-day plan.',
    bullets: [
      'Per-dimension sub-scores: grammar, vocab, variety, clarity, coherence',
      'Top 3 priorities, in plain English',
      'A 7-day starter plan you can fit into a weekday',
    ],
    cta: 'Estimate my level',
  },
  {
    href: '/prompt-doctor',
    tag: 'AI · Tool #3',
    title: 'Prompt Doctor',
    summary:
      'Paste a prompt you would send to an AI. Get a health score, see what is missing (goal, context, audience, format, examples, tone), and read a suggested rewrite.',
    bullets: [
      'Seven-dimension health score (0–100)',
      'Issues ranked by impact',
      'One-click copy of the improved prompt',
    ],
    cta: 'Diagnose my prompt',
  },
]
</script>
