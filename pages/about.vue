<template>
  <article>
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-12 sm:py-16">
        <nav aria-label="Breadcrumb" class="mb-5 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-ink-700">About</span>
        </nav>
        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">About PixelSigns</h1>
        <p class="mt-4 max-w-2xl text-lg text-ink-600">
          PixelSigns is a small collection of practical AI tools. We focus on doing a few things well rather than a hundred things poorly.
        </p>
      </div>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">What we do</h2>
      <p class="mt-4 text-ink-700">
        We build AI-powered tools for two groups of people:
      </p>
      <ul class="mt-6 space-y-4">
        <li class="rounded-2xl border border-ink-200 bg-white p-6">
          <h3 class="text-lg font-semibold text-ink-900">English learners</h3>
          <p class="mt-2 text-sm text-ink-600">
            People learning English who already know the basic grammar but want their writing and
            speaking to sound more natural. Our tools focus on phrasing, collocations, and tone
            rather than just correctness.
          </p>
        </li>
        <li class="rounded-2xl border border-ink-200 bg-white p-6">
          <h3 class="text-lg font-semibold text-ink-900">Professionals and curious minds</h3>
          <p class="mt-2 text-sm text-ink-600">
            People who use AI tools in their daily work — for analysis, writing, planning, and
            decisions — and want sharper, more focused helpers instead of bloated generic assistants.
          </p>
        </li>
      </ul>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">How we work</h2>
      <ol class="mt-6 grid gap-4 sm:grid-cols-2">
        <li v-for="(step, i) in process" :key="step.title" class="card-flat">
          <p class="text-sm font-semibold text-accent-700">Step {{ i + 1 }}</p>
          <h3 class="mt-1 text-lg font-semibold text-ink-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-ink-600">{{ step.body }}</p>
        </li>
      </ol>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">What we won't do</h2>
      <ul class="mt-6 grid gap-3 sm:grid-cols-2">
        <li v-for="limit in donts" :key="limit" class="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4">
          <span class="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-ink-900 text-white">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </span>
          <span class="text-sm text-ink-700">{{ limit }}</span>
        </li>
      </ul>
    </section>

    <section class="container-narrow pb-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Try the first tool</h2>
      <p class="mt-3 max-w-2xl text-ink-600">
        Our first public tool is the English Naturalness Checker — paste a sentence, choose a context,
        and see what a fluent speaker would actually say.
      </p>
      <NuxtLink to="/english-naturalness-checker" class="btn-primary mt-6 inline-flex">
        Try the English Naturalness Checker
      </NuxtLink>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'About — PixelSigns',
  description:
    'PixelSigns builds practical AI tools for work and learning — focused, fast, privacy-conscious, and free to try.',
  ogTitle: 'About PixelSigns',
  ogDescription: 'Practical AI tools for English learners, professionals and curious minds.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/about`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/about`,
})

const process = [
  { title: 'Start with a real user job', body: 'Every tool begins with a specific task someone is trying to do online, not a feature list.' },
  { title: 'Make a focused first version', body: 'We ship a small, useful tool that does one thing well rather than a large, vague one.' },
  { title: 'Observe real usage', body: 'Before adding features, we look at what people actually do with the tool — and what they don\'t.' },
  { title: 'Add only what earns its place', body: 'Each new feature has to clearly improve the user result. Anything that does not earn its place is cut.' },
]

const donts = [
  'Bury the result behind a signup wall.',
  'Pretend AI output is an official assessment or score.',
  'Log the raw text you submit to a tool.',
  'Spam you with notifications, popups, or upsells.',
  'Claim a tool does more than it actually does.',
  'Race to copy whatever is trending this week.',
]
</script>
