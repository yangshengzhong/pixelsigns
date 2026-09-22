<template>
  <article class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Tools · Index</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        Free tools for clearer, more natural writing
      </h1>
      <p class="text-base text-ink-700">
        Pick the tool that fits the moment. No accounts, no email gate,
        no upsells mid-check.
      </p>
    </header>

    <ul class="grid gap-4 sm:grid-cols-2">
      <li v-for="tool in tools" :key="tool.href">
        <NuxtLink :to="tool.href" class="card group block h-full">
          <div class="flex items-center gap-2">
            <span class="badge" :class="tool.status === 'available' ? 'bg-accent-100 text-accent-700' : 'bg-ink-100 text-ink-600'">
              {{ tool.status === 'available' ? 'Available' : 'Coming next' }}
            </span>
            <span class="text-xs text-ink-500">Tool #{{ tool.id }}</span>
          </div>
          <h2 class="mt-3 text-lg font-semibold text-ink-900 group-hover:text-accent-700">{{ tool.title }}</h2>
          <p class="mt-2 text-sm text-ink-600">{{ tool.summary }}</p>
          <p class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-700 group-hover:text-accent-900">
            {{ tool.status === 'available' ? 'Open the tool' : 'Read more' }}
            <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </p>
        </NuxtLink>
      </li>
    </ul>

    <section class="mt-12 grid gap-6 sm:grid-cols-2">
      <div class="rounded-2xl bg-ink-50 p-6">
        <h2 class="text-lg font-semibold text-ink-900">Looking for patterns, not a tool?</h2>
        <p class="mt-2 text-sm text-ink-700">
          The
          <NuxtLink to="/guides" class="text-accent-700 underline hover:text-accent-900">guides</NuxtLink>
          walk through the writing patterns behind each tool. Useful if you
          want to learn without pasting your text.
        </p>
      </div>
      <div class="rounded-2xl bg-ink-50 p-6">
        <h2 class="text-lg font-semibold text-ink-900">How we choose what to build</h2>
        <p class="mt-2 text-sm text-ink-700">
          We ship one tool, watch what people use it for, then ship the next.
          Read the rationale on the
          <NuxtLink to="/about" class="text-accent-700 underline hover:text-accent-900">about page</NuxtLink>.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const tools = [
  {
    id: 1,
    href: '/english-naturalness-checker',
    status: 'available' as const,
    title: 'English Naturalness Checker',
    summary:
      'Paste a paragraph. Get a sentence-level scan for slang/idiom, contractions, filler and awkward repetition, plus a corrected rewrite.',
  },
  {
    id: 2,
    href: '/english-level-checker',
    status: 'available' as const,
    title: 'AI English Level Checker',
    summary:
      'Paste 100–500 words of your own writing. Get an estimated CEFR range (A1–C2), five sub-scores, three priorities and a 7-day plan.',
  },
  {
    id: 3,
    href: '/prompt-doctor',
    status: 'available' as const,
    title: 'Prompt Doctor',
    summary:
      'Paste a prompt you would send to an AI. Get a health score, a list of what is missing (goal, context, audience, format, examples, tone), and an improved rewrite.',
  },
]

useSeoMeta({
  title: 'Tools — free writing diagnostics from PixelSigns',
  description:
    'A small, focused set of free writing tools: naturalness checker, CEFR estimator, prompt doctor. No signup, no email gate.',
  ogTitle: 'PixelSigns Tools',
  ogDescription: 'Free writing diagnostics from PixelSigns.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/tools`,
  twitterTitle: 'PixelSigns Tools',
  twitterDescription: 'Free writing diagnostics from PixelSigns.',
  twitterImage: `${config.public.siteUrl}/og-image.svg`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/tools`,
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/tools` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'PixelSigns Tools',
        url: `${config.public.siteUrl}/tools`,
        description: 'A small set of free writing diagnostics.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Tools', item: `${config.public.siteUrl}/tools` },
          ],
        },
      }),
    },
  ],
})

definePageMeta({
  title: 'Tools',
})
</script>