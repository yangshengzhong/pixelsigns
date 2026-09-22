<template>
  <article>
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-12 sm:py-16">
        <nav aria-label="Breadcrumb" class="mb-5 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-ink-700">Editorial Policy</span>
        </nav>
        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Editorial Policy &amp; AI Feedback Disclaimer</h1>
        <p class="mt-3 text-sm text-ink-500">Last updated: September 22, 2026</p>
      </div>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <div class="prose prose-ink max-w-none text-ink-700">
        <h2>What this policy covers</h2>
        <p>
          PixelSigns mixes AI-assisted tools with a small amount of human-written content. This page
          explains the principles we follow across both, so you can judge the result on its own merits.
        </p>

        <h2>AI-assisted tools</h2>
        <p>
          Our tools (currently the English Naturalness Checker) are designed for a specific user
          task and are powered by generative AI under the hood. The output is structured to be
          useful as a learning aid.
        </p>
        <h3>What the tools do</h3>
        <ul>
          <li>Highlight phrasing, word choice, and tone issues — not just grammar.</li>
          <li>Suggest a more natural version when the original sounds awkward.</li>
          <li>Explain patterns so you can reuse them in other sentences.</li>
        </ul>

        <h3>What the tools do not do</h3>
        <ul>
          <li>They do not give you an official CEFR, IELTS, TOEFL, or any other proficiency score.</li>
          <li>They do not certify your English for any external purpose.</li>
          <li>They do not replace a human teacher, editor, or proofreader.</li>
        </ul>

        <h3>How we try to reduce common AI problems</h3>
        <ul>
          <li><strong>Overcorrection:</strong> the system prompt tells the model not to rewrite text that is already natural.</li>
          <li><strong>False certainty:</strong> we ask the model to prefer "a more common phrasing in this context is…" instead of "native speakers never say…".</li>
          <li><strong>Dialect bias:</strong> the model is asked to recognize that both American and British forms (and other major varieties) can be natural.</li>
          <li><strong>Meaning preservation:</strong> the model is told not to change the meaning unless necessary.</li>
        </ul>

        <h2>Human-written content</h2>
        <p>
          Static pages on PixelSigns (Homepage, About, Privacy, Terms, Editorial Policy, and the
          tool's educational sections) are written and reviewed by humans. They are kept short,
          accurate, and aligned with the behavior of the tool on the page.
        </p>

        <h2>Corrections and feedback</h2>
        <p>
          If you believe something on this site is misleading or inaccurate, we'd genuinely like to
          know. Please email <a href="mailto:hello@pixelsigns.art">hello@pixelsigns.art</a> with
          a link to the page in question.
        </p>

        <h2>Funding and conflicts of interest</h2>
        <p>
          PixelSigns is an independent project. The site may, in the future, show a clear,
          contextual CTA that points to a paid product offered by the same team — for example, an
          advanced English practice platform. These CTAs only appear after the free tool has
          already delivered value, and are always labeled as such on the page.
        </p>

        <h2>Updates</h2>
        <p>
          We will update this page whenever our practices change. The "Last updated" date at the
          top of this page will be updated to reflect the most recent revision.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Editorial Policy & AI Disclaimer — PixelSigns',
  description:
    'How PixelSigns uses AI-assisted tools, what the tools do and do not do, and how we handle overcorrection, dialect bias, and meaning preservation.',
  ogTitle: 'Editorial Policy — PixelSigns',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/editorial-policy`,
  twitterCard: 'summary',
  canonical: `${config.public.siteUrl}/editorial-policy`,
})
</script>
