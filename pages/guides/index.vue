<template>
  <article class="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Guides · Index</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        Plain-English guides for everyday writing decisions
      </h1>
      <p class="text-base text-ink-700">
        Short, opinionated readings on the questions that come up most often
        when writing for work, study, or the web. Each one ends with a
        concrete next step you can take in the
        <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink>.
      </p>
    </header>

    <ul class="grid gap-4 sm:grid-cols-2">
      <li v-for="g in guides" :key="g.href">
        <NuxtLink :to="g.href" class="card group block h-full">
          <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">{{ g.length }}</p>
          <h2 class="mt-1 text-lg font-semibold text-ink-900 group-hover:text-accent-700">{{ g.title }}</h2>
          <p class="mt-2 text-sm text-ink-600">{{ g.summary }}</p>
          <p class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-700 group-hover:text-accent-900">
            Read the guide
            <svg viewBox="0 0 24 24" class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </p>
        </NuxtLink>
      </li>
    </ul>

    <section class="mt-12 rounded-2xl bg-ink-50 p-6">
      <h2 class="text-lg font-semibold text-ink-900">Looking for a tool, not a guide?</h2>
      <p class="mt-2 text-sm text-ink-700">
        Browse the full toolset at <NuxtLink to="/tools" class="text-accent-700 underline hover:text-accent-900">/tools</NuxtLink>.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const guides = [
  {
    href: '/guides/correct-vs-natural-english',
    length: '6 min read',
    title: 'Correct vs natural English — what the difference actually is',
    summary:
      'Why "I am agree" is grammatically wrong but "I am agreeing with you" sounds odd in writing. The gap between grammar rules and native-style choices.',
  },
  {
    href: '/guides/how-to-sound-natural-in-english',
    length: '7 min read',
    title: 'How to sound natural in English without pretending to be a native',
    summary:
      'Practical patterns: collocations, light hedge phrases, contractions, and when to slow down. Plus a 5-step weekly practice routine.',
  },
  {
    href: '/guides/common-unnatural-english-sentences',
    length: '5 min read',
    title: '20 sentences that sound unnatural even when they are grammatically correct',
    summary:
      'A list of common ESL patterns that pass grammar but trip native readers, with a natural alternative for each one.',
  },
]

useSeoMeta({
  title: 'Guides — writing in clear, natural English',
  description:
    'Short, opinionated readings on the everyday writing decisions behind clear, natural English: correct vs natural, common patterns, and a weekly routine.',
  ogTitle: 'Guides — clear, natural English',
  ogDescription: 'Plain-English guides for everyday writing decisions.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/guides`,
  twitterTitle: 'Guides — clear, natural English',
  twitterDescription: 'Plain-English guides for everyday writing decisions.',
  twitterImage: `${config.public.siteUrl}/og-image.svg`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/guides`,
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/guides` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'PixelSigns Guides',
        url: `${config.public.siteUrl}/guides`,
        description: 'Short guides on clear, natural English writing.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${config.public.siteUrl}/guides` },
          ],
        },
      }),
    },
  ],
})

definePageMeta({
  title: 'Guides',
})
</script>