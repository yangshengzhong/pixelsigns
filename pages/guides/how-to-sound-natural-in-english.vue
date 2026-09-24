<template>
  <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-500">
      <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
      <span class="px-2">/</span>
      <NuxtLink to="/guides" class="hover:text-ink-700">Guides</NuxtLink>
      <span class="px-2">/</span>
      <span class="text-ink-700">How to sound natural in English</span>
    </nav>

    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Guide · 7 min read</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">
        How to sound natural in English without pretending to be a native
      </h1>
      <p class="text-base text-ink-700">
        A practical pattern list, a 5-step weekly routine, and a clear
        definition of what you should <em>not</em> do (memorise idioms, fumble
        through filler).
      </p>
    </header>

    <section class="prose-ink max-w-none">
      <p>
        Sounding natural in English has very little to do with accents and a
        lot to do with rhythm, collocations, and what you choose to leave
        out. The four patterns below cover most of the improvement you'll feel
        in everyday writing.
      </p>

      <h2>1. Pick collocations, not isolated words</h2>
      <p>
        A collocation is a pair of words that prefer to live together —
        <em>make a decision</em> (not "do a decision"), <em>heavy rain</em>
        (not "big rain"), <em>take a look</em> (not "make a look"). They are
        not idioms; they are the normal vocabulary choices native readers
        expect. Build a tiny list of the ten collocations you reach for most
        often and replace each one with a more native alternative.
      </p>

      <h2>2. Use light hedge phrases where you'd be assertive in your first language</h2>
      <p>
        Native English writing tends to soften opinions. Compare
        <em>"This is the best option"</em> with
        <em>"This looks like the best option"</em>. The hedge (<em>"looks
        like"</em>) is not a weakness — it is what makes the same sentence
        read as informed rather than overconfident.
      </p>

      <h2>3. Use contractions in writing where appropriate</h2>
      <p>
        <em>"I am going to the meeting"</em> reads like a memo from 1995.
        <em>"I'm going to the meeting"</em> reads like 2025. Most everyday
        writing — emails, blog posts, reviews, social media — uses
        contractions. Reserve the long form for the places it is still
        expected: legal text, headline-style titles, very formal academic
        writing.
      </p>

      <h2>4. Strip filler</h2>
      <p>
        Filler phrases are words that take up space without changing meaning:
        <em>"actually", "basically", "kind of", "I think that", "the thing
        is"</em>. They are not wrong — they are common in speech — but in
        writing they slow the reader down. Cut at least three per page and
        you will notice the speed of your prose immediately.
      </p>

      <h2>A 5-step weekly routine</h2>
      <ol>
        <li><strong>Monday · 20 min.</strong> Pick one piece you wrote last week. Re-read it aloud. Mark every sentence that felt slow to say.</li>
        <li><strong>Tuesday · 20 min.</strong> Look up two collocations for each of the words you underlined. Pick the one that fits the context and rewrite the sentence.</li>
        <li><strong>Wednesday · 25 min.</strong> Read one short article (~400 words) on a topic you like. Copy, by hand, two sentences you liked.</li>
        <li><strong>Thursday · 20 min.</strong> Rewrite a paragraph you struggled with last week. Use contractions and strip filler.</li>
        <li><strong>Friday · 15 min.</strong> Run your last draft through the <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink> — see which patterns come up most for you. Those are the patterns to work on next week.</li>
      </ol>

      <h2>What you should NOT do</h2>
      <ul>
        <li><strong>Memorise idioms.</strong> They age fast, are easy to misuse, and a misplaced idiom is more off-putting than no idiom at all.</li>
        <li><strong>Imitate a specific accent or "casual" style.</strong> It reads as performance. The goal is to sound like yourself in English, not like a different person.</li>
        <li><strong>Use long words to sound smart.</strong> A longer word is not a more native choice. <em>Use</em> is more native than <em>utilise</em>; <em>help</em> more native than <em>facilitate</em>.</li>
      </ul>

      <h2>What "natural" does not require</h2>
      <p>
        It does not require thinking in English. It does not require being a
        native speaker. It does not require dropping features of your own
        variety (Singaporean English, Indian English, Nigerian English are all
        valid native-style choices in their own contexts). It requires that
        the words you choose and the order you put them in are the ones a
        literate reader expects.
      </p>

      <h2>Next step</h2>
      <p>
        The
        <NuxtLink to="/english-naturalness-checker" class="text-accent-700 underline hover:text-accent-900">English Naturalness Checker</NuxtLink>
        scans a piece of writing on four patterns (slang/idiom, contractions,
        filler, awkward repetition) and gives you a corrected version to
        compare against. Use it as a weekly check — not a substitute for
        practice, but a clear signal of where to focus next.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const slug = 'how-to-sound-natural-in-english'

useSeoMeta({
  title: 'How to sound natural in English — a practical guide',
  description:
    'Want to make your English sound natural? Four patterns (collocations, hedge phrases, contractions, filler) and a 5-step weekly routine to write in natural English without pretending to be a native. Try the free Naturalness Checker to practise.',
  ogTitle: 'How to sound natural in English',
  ogDescription: 'Four patterns and a 5-step weekly routine to make your English sound natural.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/guides/${slug}`,
  twitterTitle: 'How to sound natural in English',
  twitterDescription: 'Four patterns and a 5-step weekly routine.',
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
        headline: 'How to sound natural in English without pretending to be a native',
        description:
          'Four patterns and a 5-step weekly routine to write in natural English.',
        author: { '@type': 'Organization', name: 'PixelSigns' },
        publisher: { '@type': 'Organization', name: 'PixelSigns' },
        mainEntityOfPage: `${config.public.siteUrl}/guides/${slug}`,
        inLanguage: 'en',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: `${config.public.siteUrl}/guides` },
            { '@type': 'ListItem', position: 3, name: 'How to sound natural in English', item: `${config.public.siteUrl}/guides/${slug}` },
          ],
        },
      }),
    },
  ],
})
</script>