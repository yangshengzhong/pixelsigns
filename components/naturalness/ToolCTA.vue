<template>
  <div class="rounded-2xl border border-ink-900/10 bg-gradient-to-br from-ink-900 to-ink-700 p-6 text-white shadow-card sm:p-8">
    <h3 class="text-xl font-semibold sm:text-2xl">Want personalized practice based on your mistakes?</h3>
    <p class="mt-2 max-w-prose text-sm text-ink-200">
      Save your sentences, track repeated patterns, and get drills built around the exact constructions you keep getting wrong.
    </p>
    <div class="mt-5 flex flex-wrap gap-3">
      <a :href="ctaHref" class="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-accent-300" @click="onClick">
        Practice with AI
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </a>
      <a href="#examples" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
        See more examples
      </a>
    </div>
    <p class="mt-4 text-xs text-ink-300">
      Currently in development. This is a preview CTA during the public MVP test.
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ ctaHref?: string; ctaTarget?: 'language' | 'ai' }>()

const { send } = useAnalytics()

const ctaHref = computed(() => props.ctaHref ?? '#')
const ctaTarget = computed(() => props.ctaTarget ?? 'language')

onMounted(() => {
  send('language_cta_view', { tool: 'naturalness', cta_target: ctaTarget.value })
})

function onClick() {
  send('language_cta_click', { tool: 'naturalness', cta_target: ctaTarget.value })
}
</script>
