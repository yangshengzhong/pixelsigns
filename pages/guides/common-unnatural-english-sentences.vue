<template>
  <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-500">
      <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
      <span class="px-2">/</span>
      <NuxtLink to="/guides" class="hover:text-ink-700">Guides</NuxtLink>
      <span class="px-2">/</span>
      <span class="text-ink-700">Common unnatural sentences</span>
    </nav>

    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Guide · 5 min read</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        20 sentences that sound unnatural even when they are grammatically correct
      </h1>
      <p class="text-base text-ink-700">
        A list of patterns that pass a grammar check but trip native readers,
        with a natural alternative for each one.
      </p>
    </header>

    <section class="prose-ink max-w-none">
      <p>
        Each example below is grammatically correct (or near-enough). What
        makes them "unnatural" is that literate native readers expect a
        different shape, often a shorter one. The fix is rarely more
        vocabulary — it's almost always a tighter pattern.
      </p>

      <h2>Common word-order slip-ups</h2>
      <ol>
        <li>
          <p><em>❌ "I have a question to ask you."</em></p>
          <p><strong>✅</strong> "I have a question for you." / "I want to ask you something."</p>
        </li>
        <li>
          <p><em>❌ "I am interesting in this topic."</em></p>
          <p><strong>✅</strong> "I'm interested in this topic."</p>
        </li>
        <li>
          <p><em>❌ "It depends of the situation."</em></p>
          <p><strong>✅</strong> "It depends on the situation."</p>
        </li>
        <li>
          <p><em>❌ "I look forward to see you."</em></p>
          <p><strong>✅</strong> "I look forward to seeing you."</p>
        </li>
      </ol>

      <h2>Common word-choice slip-ups</h2>
      <ol start="5">
        <li>
          <p><em>❌ "Make a research about it."</em></p>
          <p><strong>✅</strong> "Do some research on it."</p>
        </li>
        <li>
          <p><em>❌ "I am very sensible to noise."</em></p>
          <p><strong>✅</strong> "I'm very sensitive to noise."</p>
        </li>
        <li>
          <p><em>❌ "This is a very actual problem."</em></p>
          <p><strong>✅</strong> "This is a very current / real / pressing problem."</p>
        </li>
        <li>
          <p><em>❌ "The prices are very high-priced."</em></p>
          <p><strong>✅</strong> "The prices are very high." / "It's expensive."</p>
        </li>
        <li>
          <p><em>❌ "I have 25 years."</em></p>
          <p><strong>✅</strong> "I'm 25 years old." / "I'm 25."</p>
        </li>
        <li>
          <p><em>❌ "We discussed about the budget."</em></p>
          <p><strong>✅</strong> "We discussed the budget." / "We talked about the budget."</p>
        </li>
      </ol>

      <h2>Common verb-form slip-ups</h2>
      <ol start="11">
        <li>
          <p><em>❌ "I am working here since 2018."</em></p>
          <p><strong>✅</strong> "I have worked here since 2018."</p>
        </li>
        <li>
          <p><em>❌ "I didn't went to the office."</em></p>
          <p><strong>✅</strong> "I didn't go to the office."</p>
        </li>
        <li>
          <p><em>❌ "I am knowing the answer."</em></p>
          <p><strong>✅</strong> "I know the answer."</p>
        </li>
        <li>
          <p><em>❌ "I'm agree with you."</em></p>
          <p><strong>✅</strong> "I agree with you."</p>
        </li>
        <li>
          <p><em>❌ "She can to swim."</em></p>
          <p><strong>✅</strong> "She can swim."</p>
        </li>
      </ol>

      <h2>Common register slip-ups</h2>
      <ol start="16">
        <li>
          <p><em>❌ "I am writing to you for to inform that…"</em></p>
          <p><strong>✅</strong> "I'm writing to inform you that…"</p>
        </li>
        <li>
          <p><em>❌ "Please find attached the file."</em></p>
          <p><strong>✅</strong> "Please find the file attached." / "Attached is the file."</p>
        </li>
        <li>
          <p><em>❌ "We are in the process of studying this."</em></p>
          <p><strong>✅</strong> "We're looking into this."</p>
        </li>
        <li>
          <p><em>❌ "It is our pleasure to inform you that we have taken the decision."</em></p>
          <p><strong>✅</strong> "We're pleased to let you know we've made the decision."</p>
        </li>
        <li>
          <p><em>❌ "As per our last conversation, I would like to inform you that…"</em></p>
          <p><strong>✅</strong> "Following up on our last conversation —" or just begin with the topic.</p>
        </li>
      </ol>

      <h2>What to do with the list</h2>
      <p>
        Don't try to memorise all 20 at once. Pick the two or three that
        show up most in <em>your</em> writing — you'll usually find them by
        scanning the last three things you wrote. Practice those for a
        fortnight. Once they disappear, pick another two. This is also how
        the
        <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink>
        groups its output: by the pattern, not by the line — so you can work on the same root cause across many sentences at once.
      </p>

      <h2>One caveat</h2>
      <p>
        "Natural" depends on the genre. <em>"I am writing to inform you
        that"</em> is unnatural in an email but acceptable (and even expected)
        in a formal letter to a regulator. Treat this list as a default — and
        check the genre before rewriting.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const slug = 'common-unnatural-english-sentences'

useSeoMeta({
  title: '20 sentences that sound unnatural even when grammatically correct',
  description:
    'A list of 20 common ESL patterns that pass grammar checks but trip native readers, with a natural alternative for each one.',
  ogTitle: '20 sentences that sound unnatural',
  ogDescription: '20 common ESL patterns and their natural alternatives.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/guides/${slug}`,
  twitterTitle: '20 unnatural sentences',
  twitterDescription: '20 common ESL patterns and their natural alternatives.',
  twitterImage: `${config.public.siteUrl}/og-image.svg`,
  twitterCard: 'summary_large_image',
  canonical: `${config.public.siteUrl}/guides/${slug}`,
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/guides/${slug}` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: '20 sentences that sound unnatural even when they are grammatically correct',
        description:
          'A list of 20 ESL patterns that pass grammar checks but trip native readers.',
        author: { '@type': 'Organization', name: 'PixelSigns' },
        publisher: { '@type': 'Organization', name: 'PixelSigns' },
        mainEntityOfPage: `${config.public.siteUrl}/guides/${slug}`,
        inLanguage: 'en',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${config.public.siteUrl}/guides` },
            { '@type': 'ListItem', position: 3, name: 'Common unnatural sentences', item: `${config.public.siteUrl}/guides/${slug}` },
          ],
        },
      }),
    },
  ],
})
</script>