<template>
  <article class="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
    <nav aria-label="Breadcrumb" class="mb-6 text-sm text-ink-500">
      <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
      <span class="px-2">/</span>
      <span class="text-ink-700">Disclaimer</span>
    </nav>

    <header class="mb-8 space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wider text-accent-600">Legal</p>
      <h1 class="text-3xl font-bold text-ink-900 sm:text-4xl">Disclaimer</h1>
      <p class="text-base text-ink-700">
        The legal disclaimer for pixelsigns.art, last updated January 2026.
      </p>
    </header>

    <section class="prose-ink max-w-none">
      <p>
        The information and outputs on <strong>pixelsigns.art</strong> are for
        general informational purposes only. They are not legal, financial,
        medical, or professional advice, and they are not a substitute for
        consultation with a qualified professional. Do not act, or refrain
        from acting, on the basis of any output from this website without
        obtaining independent professional advice tailored to your situation.
      </p>

      <h2>No warranty</h2>
      <p>
        All tools, guides, and content are provided on an "as is" and "as
        available" basis. We make no representations or warranties, express
        or implied, about the accuracy, completeness, suitability, or fitness
        for a particular purpose of any output. AI-assisted outputs in
        particular can be wrong, even when they look authoritative.
      </p>

      <h2>External links</h2>
      <p>
        This site may link to third-party websites for context, sources, or
        examples. We do not control the content of those sites and are not
        responsible for what they say or how they change.
      </p>

      <h2>Affiliation</h2>
      <p>
        We do not currently run sponsored content, affiliate programs, or
        advertising on this site. If that changes in the future, the affected
        pages will be clearly marked.
      </p>

      <h2>Changes to this disclaimer</h2>
      <p>
        We may update this disclaimer as the site grows. The "last updated"
        date at the bottom of this page will change when we do. Continued use
        of the site after a change indicates that you accept the updated
        version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer should go to the address listed on
        the
        <NuxtLink to="/contact" class="text-accent-700 underline hover:text-accent-900">contact page</NuxtLink>.
      </p>

      <p class="text-sm italic text-ink-500">
        Last updated: January 2026.
      </p>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

useSeoMeta({
  title: 'Disclaimer — PixelSigns',
  description:
    'The legal disclaimer for pixelsigns.art: no professional advice, no warranty, external links, and how to contact us.',
  ogTitle: 'Disclaimer — PixelSigns',
  ogDescription: 'Legal disclaimer for the PixelSigns website.',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/disclaimer`,
  twitterTitle: 'Disclaimer — PixelSigns',
  twitterDescription: 'Legal disclaimer for the PixelSigns website.',
  twitterImage: `${config.public.siteUrl}/og-image.svg`,
  twitterCard: 'summary',
  canonical: `${config.public.siteUrl}/disclaimer`,
})

useHead({
  link: [{ rel: 'canonical', href: `${config.public.siteUrl}/disclaimer` }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Disclaimer — PixelSigns',
        url: `${config.public.siteUrl}/disclaimer`,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${config.public.siteUrl}` },
            { '@type': 'ListItem', position: 2, name: 'Disclaimer', item: `${config.public.siteUrl}/disclaimer` },
          ],
        },
      }),
    },
  ],
})
</script>