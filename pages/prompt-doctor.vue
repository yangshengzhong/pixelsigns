<template>
  <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Tool 3 · Prompt Doctor</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        Prompt Doctor — diagnose and rewrite your AI prompts
      </h1>
      <p class="text-base text-ink-700">
        Paste the prompt you would send to an AI. The Doctor scores it on
        goal, context, audience, constraints, output format, examples and tone,
        lists what is missing, and proposes an improved rewrite.
      </p>
    </header>

    <ClientOnly>
      <PromptForm
        v-model="text"
        v-model:target-model="targetModel"
        :status="status"
        :remaining-quota="remainingQuota"
        @submit="onSubmit"
      />
      <template #fallback>
        <div class="card h-64 animate-pulse rounded-2xl bg-paper-100" />
      </template>
    </ClientOnly>

    <div v-if="error" class="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
      {{ error }}
    </div>

    <div v-if="status === 'loading'" class="mt-8">
      <div class="card animate-pulse space-y-3">
        <div class="h-4 w-1/3 rounded bg-paper-200" />
        <div class="h-2 w-2/3 rounded bg-paper-200" />
        <div class="h-2 w-1/2 rounded bg-paper-200" />
      </div>
    </div>

    <div v-else-if="data" class="mt-10">
      <PromptResult :result="data.result" />
    </div>

    <section class="prose-ink mt-12 max-w-none">
      <h2>What makes a prompt work</h2>
      <p>
        Most weak prompts fail for the same reason: they leave the model to guess
        seven different things at once. A good prompt names the goal, says who
        the answer is for, gives a sentence of context, sets length / scope
        limits, picks an output format, and (if possible) provides an example.
      </p>
      <p>
        The Doctor scans a prompt on those seven axes. It is intentionally
        short on creativity and long on diagnostics — it tells you what is
        missing, then proposes a placeholder-style rewrite you can fill in.
      </p>

      <h3>How to use it well</h3>
      <ul>
        <li>Paste the exact prompt you would send, including role prompts ("You are a …") if you use them.</li>
        <li>Pick the target model you plan to send it to — the Doctor can add a small, model-specific note.</li>
        <li>Use the issues as a checklist, not as gospel. Some "weak" prompts are deliberately short on purpose.</li>
      </ul>

      <h3>What this tool is not</h3>
      <ul>
        <li>It cannot run the prompt for you. The Doctor is a static diagnostic.</li>
        <li>It is not a jailbreak detector. It helps you write clearer prompts, not stealthier ones.</li>
        <li>It is not affiliated with any model vendor. Model-specific tips are general advice, not product guarantees.</li>
      </ul>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { PromptTargetModel } from '~/types/prompt'

const config = useRuntimeConfig()

const { status, error, data, remainingQuota, check } = usePrompt()
const { send } = useAnalytics()

const text = ref('')
const targetModel = ref<PromptTargetModel>('general')

function onSubmit(submittedText: string, submittedTarget: PromptTargetModel) {
  check(submittedText, submittedTarget)
  send('tool_form_submit', { tool: 'prompt-doctor' })
}

useSeoMeta({
  title: 'Prompt Doctor — diagnose and rewrite your AI prompts',
  description:
    'Score a prompt on goal, context, audience, constraints, output format, examples and tone. Get a health score, missing pieces, and an improved rewrite. Free.',
  ogTitle: 'Prompt Doctor — diagnose and rewrite AI prompts',
  ogDescription:
    'A free diagnostic for AI prompts. Scores goal, context, audience, constraints, output format, examples and tone. Proposes an improved rewrite.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/prompt-doctor`,
  twitterTitle: 'Prompt Doctor',
  twitterDescription:
    'Score an AI prompt, find what is missing, and get an improved rewrite.',
  twitterImage: `${config.public.siteUrl}/og-image.svg`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/prompt-doctor`,
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/prompt-doctor` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Prompt Doctor',
        url: `${config.public.siteUrl}/prompt-doctor`,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
        browserRequirements: 'Requires JavaScript',
        inLanguage: 'en',
        description:
          'Diagnoses AI prompts on goal, context, audience, constraints, output format, examples and tone, and proposes an improved rewrite.',
        offers: {
          '@type': 'Offer',
          price: 0,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Prompt Doctor', item: `${config.public.siteUrl}/prompt-doctor` },
          ],
        },
      }),
    },
  ],
})

definePageMeta({
  title: 'Prompt Doctor',
})
</script>