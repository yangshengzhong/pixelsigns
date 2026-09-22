<template>
  <article>
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-12 sm:py-16">
        <nav aria-label="Breadcrumb" class="mb-5 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-ink-700">Privacy</span>
        </nav>
        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Privacy Policy</h1>
        <p class="mt-3 text-sm text-ink-500">Last updated: September 22, 2026</p>
      </div>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <div class="prose prose-ink max-w-none text-ink-700">
        <p>
          This is the public-MVP version of PixelSigns. We collect only what we need to operate
          the website, keep it secure, and improve our tools. We do not sell user data, and we
          keep the data we do collect as limited as possible.
        </p>

        <h2>1. Who we are</h2>
        <p>
          PixelSigns is operated by the team behind pixelsigns.art. You can reach us at
          <a href="mailto:hello@pixelsigns.art">hello@pixelsigns.art</a>.
        </p>

        <h2>2. Data we collect</h2>
        <p>Depending on how you use PixelSigns, we may collect:</p>
        <ul>
          <li><strong>Logs:</strong> standard web server logs (IP, user agent, requested URL, status), kept briefly for security and debugging.</li>
          <li><strong>Analytics:</strong> privacy-conscious analytics such as Plausible or a self-hosted equivalent. Analytics events record coarse, non-personal event names (for example <em>tool_submit</em>) and bucketed metadata (e.g. word_count_bucket=m). They do not include the raw text you submit to a tool.</li>
          <li><strong>Cookies:</strong> we use a strictly necessary session-storage quota counter to enforce an anonymous per-day free check limit on certain tools. There are no advertising cookies and no cross-site tracking cookies.</li>
          <li><strong>Search engine data:</strong> if you arrive from a search engine, that engine may send us standard referrer information.</li>
        </ul>

        <h2>3. What we don't collect</h2>
        <ul>
          <li>The raw text you submit to our tools is <strong>not</strong> sent to ordinary analytics services.</li>
          <li>We do not require you to create an account to use our tools.</li>
          <li>We do not sell or share personal data with third-party advertisers.</li>
        </ul>

        <h2>4. Tool inputs</h2>
        <p>
          When you use a tool (for example, the English Naturalness Checker), the text you submit is
          sent to the AI service that powers that tool. This is required for the tool to give you a
          result. We design our tools and our contracts to keep these requests as narrow as
          possible.
        </p>
        <p>
          During the public MVP test, you may also see a clear notice on the page that the AI
          service is currently being mocked locally to give you an instant preview of the experience.
        </p>

        <h2>5. Your rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct, or delete personal
          information we hold about you. Because our collection is intentionally minimal, most of
          this data is short-lived or anonymous. To make a request, email
          <a href="mailto:privacy@pixelsigns.art">privacy@pixelsigns.art</a>.
        </p>

        <h2>6. Children</h2>
        <p>
          PixelSigns is not directed at children under 13, and we do not knowingly collect
          information from them.
        </p>

        <h2>7. Changes</h2>
        <p>
          We will update this page if our practices change. The "Last updated" date at the top of
          the page will change accordingly. Material changes will be highlighted in a banner on the
          site for at least 14 days.
        </p>

        <h2>8. Contact</h2>
        <p>
          Questions? Email
          <a href="mailto:hello@pixelsigns.art">hello@pixelsigns.art</a>.
        </p>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Privacy Policy — PixelSigns',
  description: 'How PixelSigns handles (and limits) data collection: what we collect, what we don\'t, and your rights.',
  ogTitle: 'Privacy Policy — PixelSigns',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/privacy`,
  twitterCard: 'summary',
  canonical: `${config.public.siteUrl}/privacy`,
})
</script>
