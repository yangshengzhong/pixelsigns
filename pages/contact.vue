<template>
  <article>
    <section class="border-b border-ink-200 bg-paper">
      <div class="container-narrow py-12 sm:py-16">
        <nav aria-label="Breadcrumb" class="mb-5 text-sm text-ink-500">
          <NuxtLink to="/" class="hover:text-ink-700">Home</NuxtLink>
          <span class="mx-2">/</span>
          <span class="text-ink-700">Contact</span>
        </nav>
        <h1 class="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Contact</h1>
        <p class="mt-4 max-w-2xl text-lg text-ink-600">
          Found a bug, have a suggestion, or want to report an issue with one of our tools? We'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="container-narrow py-12 sm:py-16">
      <div class="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <aside class="space-y-6">
          <div class="card-flat">
            <h2 class="text-base font-semibold text-ink-900">Email</h2>
            <p class="mt-2 text-sm text-ink-600">
              For general questions, feedback, and partnership requests.
            </p>
            <a
              href="mailto:hello@pixelsigns.art"
              class="mt-3 inline-flex items-center gap-2 text-base font-medium text-accent-700 hover:text-accent-800"
            >
              hello@pixelsigns.art
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div class="card-flat">
            <h2 class="text-base font-semibold text-ink-900">What to include</h2>
            <ul class="mt-3 space-y-2 text-sm text-ink-700">
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />Which tool you used (e.g. "English Naturalness Checker")</li>
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />The sentence or input you tried</li>
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />What you expected vs. what you got</li>
              <li class="flex gap-2"><span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />A short description of your device and browser, if relevant</li>
            </ul>
          </div>
        </aside>

        <form class="card space-y-5" @submit.prevent="onSubmit">
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-1.5">
              <label for="name" class="text-sm font-medium text-ink-700">Name</label>
              <input id="name" v-model="form.name" required type="text" class="input-base" placeholder="Your name" />
            </div>
            <div class="space-y-1.5">
              <label for="email" class="text-sm font-medium text-ink-700">Email</label>
              <input id="email" v-model="form.email" required type="email" class="input-base" placeholder="you@example.com" />
            </div>
          </div>
          <div class="space-y-1.5">
            <label for="topic" class="text-sm font-medium text-ink-700">Topic</label>
            <select id="topic" v-model="form.topic" class="input-base">
              <option value="bug">Bug report</option>
              <option value="feedback">Feedback / Suggestion</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div class="space-y-1.5">
            <label for="message" class="text-sm font-medium text-ink-700">Message</label>
            <textarea id="message" v-model="form.message" required rows="6" class="input-base" placeholder="Tell us what's going on…" />
          </div>
          <button type="submit" class="btn-primary" :disabled="submitting">
            <svg v-if="submitting" viewBox="0 0 24 24" class="h-4 w-4 animate-spin" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="9" stroke-opacity="0.25" />
              <path d="M21 12a9 9 0 0 1-9 9" stroke-linecap="round" />
            </svg>
            {{ submitting ? 'Sending…' : 'Send message' }}
          </button>
          <p v-if="status === 'sent'" class="rounded-xl border border-accent-200 bg-accent-50 px-4 py-3 text-sm text-accent-800">
            Thanks — we'll get back to you at {{ form.email }}.
          </p>
          <p v-if="status === 'local_only'" class="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            Frontend preview: there is no live mail backend yet, so your message has not been sent.
            Please email <strong>hello@pixelsigns.art</strong> directly.
          </p>
          <p v-if="status === 'error'" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            Something went wrong. Please try again, or email us directly.
          </p>
        </form>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
useSeoMeta({
  title: 'Contact — PixelSigns',
  description: 'Get in touch with the PixelSigns team about feedback, bug reports, or partnerships.',
  ogTitle: 'Contact PixelSigns',
  ogImage: `${config.public.siteUrl}/og-image.svg`,
  ogUrl: `${config.public.siteUrl}/contact`,
  twitterCard: 'summary',
  canonical: `${config.public.siteUrl}/contact`,
})

const form = reactive({
  name: '',
  email: '',
  topic: 'feedback',
  message: '',
})
const submitting = ref(false)
const status = ref<'idle' | 'sent' | 'local_only' | 'error'>('idle')

async function onSubmit() {
  submitting.value = true
  status.value = 'idle'
  // Frontend-only build: there is no real mail backend yet.
  // We simulate a short delay and tell the user the message is not actually sent.
  await new Promise<void>((r) => setTimeout(r, 500))
  submitting.value = false
  status.value = 'local_only'
  // Reset form for clarity except email (so the toast makes sense)
  form.message = ''
}
</script>
