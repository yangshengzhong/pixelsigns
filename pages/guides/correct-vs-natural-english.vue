<template>
  <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-500">
      <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
      <span class="px-2">/</span>
      <NuxtLink to="/guides" class="hover:text-ink-700">Guides</NuxtLink>
      <span class="px-2">/</span>
      <span class="text-ink-700">Correct vs natural English</span>
    </nav>

    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Guide · 6 min read</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        Correct vs natural English — what the difference is, and why both are useful
      </h1>
      <p class="text-base text-ink-700">
        A short guide on the gap between grammar rules and native-style choices,
        and when to optimise for one versus the other.
      </p>
    </header>

    <section class="prose-ink max-w-none">
      <p>
        A sentence can be grammatically right and sound "off" at the same time.
        That's the everyday gap between <em>correct</em> and <em>natural</em>
        English, and most learners hit it within their first conversation with a
        native reader.
      </p>

      <h2>The two checks</h2>
      <p>
        <strong>Correctness</strong> is the rule check. It asks: does the
        sentence respect grammar rules — English syntax, morphology, agreement?
        A grammar checker, a teacher or a textbook answer key answers it.
      </p>
      <p>
        <strong>Naturalness</strong> is the usage check. It asks: would a
        literate native reader expect this sentence to be written exactly like
        this, or would they expect a different shape — even though the rule
        book does not require it?
      </p>

      <h2>Three sentences that show the gap</h2>
      <ul>
        <li>
          <p>
            <em>"I am agree with you."</em>
          </p>
          <p><strong>Correct?</strong> No — "agree" does not take the auxiliary "be" in English.</p>
          <p><strong>Natural alternative:</strong> "I agree with you."</p>
        </li>
        <li>
          <p>
            <em>"I am agreeing with you."</em>
          </p>
          <p><strong>Correct?</strong> Yes, grammatically. "Be + -ing" is allowed here.</p>
          <p><strong>Natural alternative:</strong> "I agree with you." — much more common in writing.</p>
        </li>
        <li>
          <p>
            <em>"Please find attached the report which you asked."</em>
          </p>
          <p><strong>Correct?</strong> Mostly — though "the report you asked for" is more grammatical.</p>
          <p><strong>Natural alternative:</strong> "Please find the report attached." or "Attached is the report you requested."</p>
        </li>
      </ul>

      <h2>Why the difference exists</h2>
      <p>
        Native-style English carries the weight of repetition and convention.
        Over decades, certain patterns survive because they read faster, sound
        smoother, or fit the surrounding paragraph. Grammar rules describe
        what is allowed; convention describes what readers expect. Both are
        real.
      </p>

      <h2>When to optimise for which</h2>
      <ul>
        <li><strong>Work emails to non-native colleagues.</strong> Optimise for correctness. The reader may translate word-by-word; clarity beats fluency.</li>
        <li><strong>Marketing copy, blog posts, on-stage slides.</strong> Optimise for naturalness. The reader skims and notices rhythm.</li>
        <li><strong>Formal letters and contracts.</strong> Optimise for correctness plus a light naturalness check — you want it to read like a letter, not a textbook.</li>
        <li><strong>Online reviews and forum posts.</strong> Naturalness wins. Light grammar mistakes are forgiven; clunky phrasing is not.</li>
      </ul>

      <h2>How to close the gap</h2>
      <ol>
        <li>Pick a native-style corpus (news articles, well-edited blogs in your topic) and read ~30 minutes a day.</li>
        <li>Copy, by hand, two sentences you like each day. Pay attention to the order of words.</li>
        <li>After writing a long piece, run it through the <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink> — it surfaces the patterns that make a sentence feel "translated".</li>
        <li>Resist the urge to memorise idioms. Idioms age fast and are easy to misuse; collocations (words that prefer to live together) age slower.</li>
      </ol>

      <h2>What "natural" doesn't mean</h2>
      <p>
        Naturalness is not a synonym for casual, informal or slangy. A formal
        contract can still be natural — it's just natural <em>for a contract</em>.
        Each genre has its own expected voice. The mistake most non-native
        writers make is not being too formal; it's being formal in the wrong
        way, by importing conventions from a different genre (often academic
        English) into a context that doesn't expect them.
      </p>

      <h2>Next step</h2>
      <p>
        Want a sentence-level scan of your own writing? Try the
        <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink> —
        it ranks your writing on four dimensions (slang/idiom, contractions,
        filler, awkward repetition) and gives you a corrected version to compare against.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const slug = 'correct-vs-natural-english'

useSeoMeta({
  title: 'Correct vs natural English — what the difference actually is',
  description:
    'A short guide on the gap between grammar rules and native-style English, with three example sentences, when to optimise for which, and a 4-step practice routine.',
  ogTitle: 'Correct vs natural English',
  ogDescription: 'A plain-English guide on the gap between grammar and native-style choices.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/guides/${slug}`,
  twitterTitle: 'Correct vs natural English',
  twitterDescription: 'A plain-English guide on the gap between grammar and native-style choices.',
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
        headline: 'Correct vs natural English — what the difference actually is',
        description:
          'A plain-English guide on the gap between grammar rules and native-style choices, with examples and a 4-step practice routine.',
        author: { '@type': 'Organization', name: 'PixelSigns' },
        publisher: { '@type': 'Organization', name: 'PixelSigns' },
        mainEntityOfPage: `${config.public.siteUrl}/guides/${slug}`,
        inLanguage: 'en',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${config.public.siteUrl}/guides` },
            { '@type': 'ListItem', position: 3, name: 'Correct vs natural English', item: `${config.public.siteUrl}/guides/${slug}` },
          ],
        },
      }),
    },
  ],
})
</script>