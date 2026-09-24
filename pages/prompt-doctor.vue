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

    <section class="prose-ink mt-12 max-w-none">
      <h2>How to check your AI prompt</h2>
      <p>
        Paste the prompt you would send to ChatGPT, Claude, Gemini, or any other AI model. The
        Doctor acts as an <strong>AI prompt checker</strong> and <strong>prompt grader</strong>: it
        scores your prompt on seven dimensions (goal, context, audience, constraints, output format,
        examples, tone), lists what is missing, and proposes an improved rewrite.
      </p>
      <p>
        You can also use it as a <strong>prompt analyzer</strong> to understand why a prompt
        produces weak output, or as a <strong>prompt optimizer</strong> to iteratively improve
        before sending. The diagnostic is the same: find the gaps, then fill them.
      </p>
    </section>

    <section class="prose-ink mt-12 max-w-none">
      <h2>Frequently asked questions</h2>
      <div class="mt-4 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white not-prose">
        <details v-for="faq in faqs" :key="faq.q" class="group p-5 sm:p-6">
          <summary class="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink-900">
            {{ faq.q }}
            <svg viewBox="0 0 24 24" class="h-4 w-4 text-ink-400 transition group-open:rotate-180" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <p class="mt-3 text-sm leading-relaxed text-ink-700">{{ faq.a }}</p>
        </details>
      </div>
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
  title: 'Prompt Doctor — AI prompt checker, grader & analyzer',
  description:
    'Free AI prompt checker and grader. Paste your prompt, get a health score on goal, context, audience, constraints, output format, examples and tone, plus an improved rewrite. Works as a prompt analyzer and prompt optimizer — no signup.',
  ogTitle: 'Prompt Doctor — AI prompt checker, grader & analyzer',
  ogDescription:
    'Free AI prompt checker. Score your prompt on 7 dimensions, find what is missing, and get an improved rewrite. Also works as a prompt analyzer and prompt optimizer.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/prompt-doctor`,
  twitterTitle: 'Prompt Doctor — AI Prompt Checker',
  twitterDescription:
    'Score an AI prompt, find what is missing, and get an improved rewrite. Free prompt checker and grader.',
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
          'Free AI prompt checker and grader. Diagnoses prompts on goal, context, audience, constraints, output format, examples and tone. Proposes an improved rewrite. Also works as a prompt analyzer and prompt optimizer.',
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

const faqs = [
  {
    q: 'What is a prompt checker?',
    a: 'A prompt checker analyses an AI prompt before you send it. It scores clarity, context, constraints, and other dimensions, then shows what is missing so you can improve the prompt.',
  },
  {
    q: 'How is this different from a prompt generator?',
    a: 'A prompt generator writes a prompt for you. The Prompt Doctor diagnoses why your prompt is weak before rewriting it — so you learn the pattern, not just copy the output.',
  },
  {
    q: 'Can I use it as a prompt grader?',
    a: 'Yes. The Doctor gives each prompt a health score out of 100, plus sub-scores on goal, context, audience, constraints, output format, examples, and tone.',
  },
  {
    q: 'Does it work as a prompt analyzer for any AI model?',
    a: 'Yes. The diagnostic is model-agnostic. You can also select a target model (ChatGPT, Claude, Gemini, or general) and the Doctor adds a small model-specific note.',
  },
  {
    q: 'Can I use it as a prompt optimizer?',
    a: 'Yes. Paste a prompt, read the diagnostic, adjust, and paste again. Each iteration should raise the health score and fill more of the missing dimensions.',
  },
  {
    q: 'Is this prompt checker free?',
    a: 'Yes. The tool is free, requires no signup, and runs in the browser. There may be a daily cap during launch.',
  },
  {
    q: 'How do I check my AI prompt quickly?',
    a: 'Paste the prompt into the field above and click submit. The Doctor returns a health score, missing pieces, and an improved rewrite in seconds.',
  },
]
</script>