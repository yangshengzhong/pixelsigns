<template>
  <div>
    <!-- Hero / Tool -->
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-10 sm:py-14">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <NuxtLink to="/english-naturalness-checker" class="text-ink-700">English Naturalness Checker</NuxtLink>
        </nav>

        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
          English Naturalness Checker
        </h1>
        <p class="mt-3 max-w-2xl text-lg text-ink-600">
          Check if your English sounds natural — not just grammatically correct. Get a more natural version, a clear explanation, and examples you can learn from.
        </p>

        <div class="mt-8 space-y-4">
          <NaturalnessForm
            v-model="text"
            v-model:context="context"
            :status="formStatus"
            :remaining-quota="remainingQuota"
            @submit="onSubmit"
          />

          <!-- Loading skeleton -->
          <div v-if="status === 'loading'" class="space-y-4" aria-live="polite">
            <div class="card-flat animate-pulse">
              <div class="h-4 w-24 rounded bg-ink-200" />
              <div class="mt-3 h-10 w-32 rounded bg-ink-200" />
              <div class="mt-4 h-2 w-full rounded-full bg-ink-100" />
            </div>
            <div class="card-flat animate-pulse">
              <div class="h-3 w-32 rounded bg-ink-200" />
              <div class="mt-3 h-5 w-full rounded bg-ink-100" />
              <div class="mt-2 h-5 w-3/4 rounded bg-ink-100" />
            </div>
            <div class="card-flat animate-pulse">
              <div class="h-3 w-20 rounded bg-ink-200" />
              <div class="mt-3 h-4 w-full rounded bg-ink-100" />
              <div class="mt-2 h-4 w-2/3 rounded bg-ink-100" />
            </div>
            <p class="text-center text-sm text-ink-500">
              {{ loadingStep }}
            </p>
          </div>

          <ToolError
            v-else-if="status === 'error' && errorMessage"
            :message="errorMessage"
            @click="retry"
          />

          <div v-else-if="status === 'rate_limited'" class="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <p class="font-semibold">You've reached today's free check limit.</p>
            <p class="mt-1 text-sm">Please try again tomorrow, or come back when we lift the cap during launch.</p>
          </div>

          <NaturalnessResult
            v-if="data"
            :result="data.result"
            :cached="data.cached"
            @practice-start="onPracticeStart"
          />
        </div>
      </div>
    </section>

    <!-- SEO support copy -->
    <section id="about-naturalness" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        Does this sound natural in English?
      </h2>
      <div class="prose prose-ink mt-4 max-w-none text-ink-700">
        <p>
          A sentence can be grammatically correct and still sound unusual to a fluent English speaker.
          The English Naturalness Checker looks beyond basic grammar to help you identify awkward word choices,
          unusual collocations, unnatural phrasing, and expressions that don't quite fit the context.
        </p>
        <p>
          Paste a sentence or short paragraph above to see a more natural version and understand
          <em>why</em> it sounds better.
        </p>
      </div>
    </section>

    <section id="correct-vs-natural" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        Correct English vs. natural English
      </h2>
      <p class="mt-4 max-w-2xl text-ink-700">
        Learning grammar tells you what's <em>possible</em> in English. Learning natural English helps you
        understand what people are <em>likely</em> to say. Sometimes the gap is small. Sometimes it's the
        difference between sounding fluent and sounding translated.
      </p>

      <div class="mt-8 overflow-x-auto rounded-2xl border border-ink-200 bg-white">
        <table class="w-full min-w-[36rem] text-left text-sm">
          <thead class="bg-ink-50 text-xs uppercase tracking-wider text-ink-500">
            <tr>
              <th class="px-5 py-3 font-semibold">Original</th>
              <th class="px-5 py-3 font-semibold">Grammar</th>
              <th class="px-5 py-3 font-semibold">Naturalness</th>
              <th class="px-5 py-3 font-semibold">More natural</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-ink-100 text-ink-700">
            <tr v-for="ex in exampleRows" :key="ex.original">
              <td class="px-5 py-3">{{ ex.original }}</td>
              <td class="px-5 py-3 text-ink-500">{{ ex.grammar }}</td>
              <td class="px-5 py-3">
                <span class="badge" :class="ex.badgeClass">{{ ex.label }}</span>
              </td>
              <td class="px-5 py-3 font-medium text-ink-900">{{ ex.natural }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="mt-4 text-sm text-ink-500">
        The goal isn't to make every sentence identical. Different expressions can be natural
        depending on context, tone, region, and personal style.
      </p>
    </section>

    <section id="how-it-works" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        How the English Naturalness Checker works
      </h2>
      <ol class="mt-8 grid gap-6 sm:grid-cols-2">
        <li v-for="(step, i) in howSteps" :key="step.title" class="card-flat">
          <span class="grid h-8 w-8 place-items-center rounded-full bg-ink-900 text-sm font-bold text-white">{{ i + 1 }}</span>
          <h3 class="mt-3 text-lg font-semibold text-ink-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm text-ink-600">{{ step.body }}</p>
        </li>
      </ol>
    </section>

    <section id="what-makes-natural" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        What makes English sound natural?
      </h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <article v-for="topic in naturalTopics" :key="topic.title" class="card-flat">
          <h3 class="text-base font-semibold text-ink-900">{{ topic.title }}</h3>
          <p class="mt-2 text-sm text-ink-600">{{ topic.body }}</p>
          <ul v-if="topic.examples" class="mt-3 space-y-1 text-sm">
            <li v-for="ex in topic.examples" :key="ex" class="rounded-md bg-ink-50 px-3 py-1.5 font-mono text-ink-700">{{ ex }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section id="who-is-for" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Who is this for?</h2>
      <ul class="mt-6 grid gap-3 sm:grid-cols-2">
        <li v-for="use in useCases" :key="use" class="flex items-start gap-3 rounded-xl border border-ink-200 bg-white px-4 py-3">
          <span class="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-accent-100 text-accent-700">
            <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-11" />
            </svg>
          </span>
          <span class="text-sm text-ink-700">{{ use }}</span>
        </li>
      </ul>
      <p class="mt-6 text-sm text-ink-500">
        This tool is not intended to replace professional editing or an official language assessment.
      </p>
    </section>

    <section id="limitations" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Limitations</h2>
      <div class="prose prose-ink mt-4 max-w-none text-ink-700">
        <p>
          Naturalness depends on context, dialect, tone, and personal style. The checker may
          occasionally suggest an unnecessary change or miss a valid alternative. Its scores and
          suggestions are <strong>learning aids</strong>, not official linguistic or CEFR
          assessments.
        </p>
      </div>
    </section>

    <section id="ai-writing-feedback" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
        AI writing feedback designed for English learners
      </h2>
      <div class="prose prose-ink mt-4 max-w-none text-ink-700">
        <p>
          Most grammar tools tell you whether a sentence is right or wrong. This natural English checker
          goes further: it acts as an <strong>AI writing feedback</strong> tool that explains
          <em>why</em> a sentence sounds unnatural and shows you a more natural alternative. That
          makes it useful as an <strong>ESL writing checker</strong>, an <strong>English writing
          checker for students</strong>, or anyone who wants more than a red underline.
        </p>
        <p>
          Unlike a generic grammar checker, the naturalness checker also considers tone and clarity.
          Select a context (casual, work, academic, social media) and the feedback adjusts. In that
          sense it can also work as a lightweight <strong>English tone checker</strong> and
          <strong>English clarity checker</strong> — though its primary job is always to answer the
          question: <em>does this sound natural?</em>
        </p>
      </div>
    </section>

    <section id="faq" class="container-narrow py-12 sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Frequently asked questions</h2>
      <div class="mt-6 divide-y divide-ink-200 rounded-2xl border border-ink-200 bg-white">
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

    <section class="container-narrow py-12 text-center sm:py-16">
      <h2 class="text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">Ready to check your English?</h2>
      <p class="mx-auto mt-3 max-w-xl text-ink-600">
        Paste a sentence, choose the context, and see what a fluent speaker would actually say.
      </p>
      <a href="#naturalness-tool" class="btn-primary mt-6 inline-flex">
        Check a sentence
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ContextType } from '~/types/naturalness'

definePageMeta({ name: 'english-naturalness-checker' })

const config = useRuntimeConfig()

const text = ref('I very like this movie.')
const context = ref<ContextType>('general')

useSeoMeta({
  title: 'English Naturalness Checker — Does Your Sentence Sound Natural?',
  description:
    'Free online English naturalness checker for learners. Paste a sentence and see if it sounds natural, get a natural rewrite, and understand why. Works as a sentence checker, tone checker, and clarity checker — no signup required.',
  ogTitle: 'English Naturalness Checker — Does Your Sentence Sound Natural?',
  ogDescription:
    'Check whether your English sounds natural, not just grammatically correct. Free sentence naturalness checker with AI-assisted feedback, natural rewrites, and clear explanations.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/english-naturalness-checker`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/english-naturalness-checker`,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'English Naturalness Checker',
        url: `${config.public.siteUrl}/english-naturalness-checker`,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web',
        description:
          'Free English naturalness checker for learners. Check if your sentence sounds natural, get a natural rewrite, explanation, and examples. Also works as a tone checker and clarity checker.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }),
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: config.public.siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'English Naturalness Checker',
            item: `${config.public.siteUrl}/english-naturalness-checker`,
          },
        ],
      }),
    },
  ],
})

useToolPageView('naturalness')

const { status, error: errorMessage, data, lastLatencyMs, remainingQuota, check, reset } = useNaturalness({
  defaultContext: 'general',
})

const formStatus = computed(() => status.value)

async function onSubmit(t: string, c: ContextType) {
  await check(t, c)
  if (typeof document !== 'undefined') {
    document.getElementById('naturalness-tool')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function retry() {
  reset()
  nextTick(() => check(text.value, context.value))
}

function onPracticeStart() {
  // In the future we can route to /learn; for now scroll back to the form
  // and let the user try the practice sentence by themselves.
  text.value = 'I very want to go there.'
  if (typeof document !== 'undefined') {
    document.getElementById('naturalness-input')?.focus()
  }
}

const loadingSteps = [
  'Reading your text…',
  'Checking grammar…',
  'Evaluating naturalness…',
  'Looking at word choice and collocations…',
  'Considering tone and context…',
]
const loadingStep = ref(loadingSteps[0])
let loadingTimer: ReturnType<typeof setInterval> | null = null

watch(status, (s) => {
  if (s === 'loading') {
    let i = 0
    loadingStep.value = loadingSteps[0]
    loadingTimer = setInterval(() => {
      i = (i + 1) % loadingSteps.length
      loadingStep.value = loadingSteps[i]
    }, 1400)
  } else {
    if (loadingTimer) {
      clearInterval(loadingTimer)
      loadingTimer = null
    }
  }
})

onBeforeUnmount(() => {
  if (loadingTimer) clearInterval(loadingTimer)
})

// SEO section data
const exampleRows = [
  { original: 'I very like it.', grammar: 'Mostly fine', label: 'Unnatural', natural: 'I really like it.', badgeClass: 'bg-amber-100 text-amber-800' },
  { original: 'I made a photo.', grammar: 'Fine', label: 'Unnatural', natural: 'I took a photo.', badgeClass: 'bg-amber-100 text-amber-800' },
  { original: "Let's discuss about it.", grammar: 'Off', label: 'Awkward', natural: "Let's discuss it.", badgeClass: 'bg-red-100 text-red-800' },
  { original: 'I have 25 years.', grammar: 'Off', label: 'Awkward', natural: "I'm 25 years old.", badgeClass: 'bg-red-100 text-red-800' },
  { original: 'I strongly recommend it.', grammar: 'Correct', label: 'Natural', natural: 'I strongly recommend it.', badgeClass: 'bg-accent-100 text-accent-800' },
]

const howSteps = [
  { title: 'Paste your English', body: 'Enter a sentence or short paragraph you want to check.' },
  { title: 'Choose the context', body: 'Tell the checker whether the text is for a casual conversation, work email, academic setting, social media, or another situation.' },
  { title: 'Check naturalness', body: 'The tool looks at grammar, word choice, collocations, phrasing, tone, and context.' },
  { title: 'Learn from the result', body: 'Instead of showing only a correction, the checker explains the pattern and gives examples you can reuse.' },
]

const naturalTopics = [
  { title: 'Collocations', body: 'Some words commonly appear together.', examples: ['take a photo', 'make a decision', 'heavy rain', 'strong coffee'] },
  { title: 'Word choice', body: 'Two words may have similar dictionary meanings but behave differently in real sentences.' },
  { title: 'Register', body: 'Language that sounds natural in an academic paper may sound strange in a text message.' },
  { title: 'Sentence patterns', body: 'Fluent speakers repeatedly use common grammatical and lexical patterns.' },
  { title: 'Tone', body: 'Beyond grammar and vocabulary, tone signals friendliness, formality, and intent.' },
  { title: 'Context', body: 'There is rarely one universally "most natural" sentence. The best expression depends on what you mean, who you are speaking to, and the situation.' },
]

const useCases = [
  'English learners who already know basic grammar and want to sound more natural',
  'International students writing emails to professors or applying for internships',
  'Professionals writing messages, proposals, or status updates in English',
  'People preparing social posts or short marketing copy',
  'Anyone who has felt "the grammar is correct, but it still sounds weird"',
]

const faqs = [
  {
    q: 'Is this a grammar checker?',
    a: 'Not exactly. Grammar is one part of the analysis, but the main goal is to check whether your English sounds natural in context. A sentence can be grammatically possible and still sound awkward.',
  },
  {
    q: 'Can a grammatically correct sentence sound unnatural?',
    a: 'Yes. Word choice, collocations, tone, and sentence patterns can make grammatically correct English sound unusual.',
  },
  {
    q: 'How can I make my English sound more natural?',
    a: 'Notice which patterns came up in your result (e.g. "really + verb" or "take a photo"), then imitate the same shape in other sentences. Repeated exposure is the most reliable way.',
  },
  {
    q: 'Can I use it for emails?',
    a: 'Yes. Select the Work / Email context so the feedback can consider a more appropriate register.',
  },
  {
    q: 'Can I check spoken English?',
    a: 'You can paste a transcript of something you plan to say. The first version does not evaluate pronunciation or audio.',
  },
  {
    q: 'Does it support American and British English?',
    a: 'The checker should recognize common valid forms from major English varieties rather than treating one variety as universally correct. Dedicated US/UK preferences will be added later.',
  },
  {
    q: 'Is the naturalness score an official assessment?',
    a: 'No. It is an AI-assisted estimate intended to make the feedback easier to understand. It is not a CEFR or IELTS score.',
  },
  {
    q: 'How much text can I check?',
    a: 'The MVP supports short text up to 500 words, but it works best for individual sentences and short paragraphs.',
  },
  {
    q: 'Does this sound natural in English — how do I check quickly?',
    a: 'Paste your sentence into the checker above. It analyses grammar, word choice, collocations, tone, and context, then tells you whether the sentence sounds natural and suggests a more natural version if needed.',
  },
  {
    q: 'Is this an ESL writing checker?',
    a: 'Yes. The tool is designed with English learners in mind. It explains why a sentence sounds unnatural and gives examples you can reuse, which makes it useful as an ESL writing checker or English sentence checker for learners.',
  },
  {
    q: 'Can it work as an English tone checker or clarity checker?',
    a: 'The context selector lets the checker consider register and tone (casual, work, academic, social media). While it is not a dedicated tone checker or clarity checker, the result highlights tone and clarity issues alongside naturalness.',
  },
]
</script>
