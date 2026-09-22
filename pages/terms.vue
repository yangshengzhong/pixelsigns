<template>
  <article>
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-12 sm:py-16">
        <nav aria-label="Breadcrumb" class="mb-5 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-ink-700">Terms</span>
        </nav>
        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Terms of Service</h1>
        <p class="mt-3 text-sm text-ink-500">Last updated: September 22, 2026</p>
      </div>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <div class="prose prose-ink max-w-none text-ink-700">
        <h2>1. Using PixelSigns</h2>
        <p>
          By using pixelsigns.art you agree to these terms. If you don't agree, please don't use the
          site. The site is provided as-is, and we may change, suspend, or discontinue any part of it
          at any time.
        </p>

        <h2>2. No warranty</h2>
        <p>
          Our tools are AI-assisted learning aids. They may make mistakes, give misleading
          suggestions, or miss valid alternatives. They are <strong>not</strong> official
          linguistic or proficiency assessments (for example, they do not give you a CEFR or
          IELTS score). Don't rely on them for high-stakes decisions about employment,
          admissions, or anything else where the consequences of an error would be serious.
        </p>

        <h2>3. Things you shouldn't do</h2>
        <ul>
          <li>Don't try to break, overload, or bypass the site (for example, scraping at unreasonable rates, sending malicious input, or attempting to extract other users' data).</li>
          <li>Don't submit content that you don't have the right to share (for example, other people's personal information or copyrighted material).</li>
          <li>Don't use the site to do anything illegal or to harass anyone.</li>
        </ul>

        <h2>4. Your content</h2>
        <p>
          You keep ownership of any text you submit to a tool. We only use it to operate the tool
          (for example, to send it to the AI service that produces your result). We don't use it
          to train general-purpose models without a separate, explicit agreement.
        </p>

        <h2>5. AI-generated output</h2>
        <p>
          Tool output is AI-generated and may be inaccurate or inappropriate. You are responsible
          for how you use it. Where relevant, the tool page will explain what its result means,
          what its limits are, and what it does not do.
        </p>

        <h2>6. Third-party services</h2>
        <p>
          Some parts of the site may be provided by trusted third parties (for example, our AI
          provider, our analytics provider, and our hosting provider). Their services are governed
          by their own terms and privacy policies.
        </p>

        <h2>7. Changes</h2>
        <p>
          We may update these terms. The "Last updated" date will change accordingly. Material
          changes will be highlighted on the site for at least 14 days.
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
  title: 'Terms of Service — PixelSigns',
  description: 'The terms that govern your use of PixelSigns — what you can do, what you can\'t, and how our AI-assisted tools work.',
  ogTitle: 'Terms of Service — PixelSigns',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/terms`,
  twitterCard: 'summary',
  canonical: `${config.public.siteUrl}/terms`,
})
</script>
