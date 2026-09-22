<template>
  <section aria-label="Result" class="space-y-4">
    <div class="card-flat">
      <div class="flex items-baseline justify-between gap-4">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Prompt health</p>
          <p class="mt-1 text-5xl font-bold tabular-nums text-ink-900">
            {{ result.health_score }}<span class="text-2xl text-ink-400">/100</span>
          </p>
        </div>
        <span :class="['badge', badgeClass]">{{ headlineLabel }}</span>
      </div>
      <p class="mt-3 text-sm text-ink-600">{{ result.rationale }}</p>
    </div>

    <div class="card-flat">
      <h3 class="text-base font-semibold text-ink-900">Breakdown</h3>
      <p class="mt-1 text-sm text-ink-600">
        Each dimension is scored on a 0–10 scale. The overall health is the average × 10.
      </p>
      <div class="mt-4 space-y-3">
        <PromptScoreBar
          v-for="dim in result.dimensions"
          :key="dim.key"
          :label="dim.label"
          :score="dim.score"
        />
      </div>
    </div>

    <div v-if="result.issues.length" class="card-flat">
      <h3 class="text-base font-semibold text-ink-900">Missing or weak</h3>
      <ul class="mt-4 space-y-4">
        <li v-for="issue in result.issues" :key="issue.title" class="rounded-xl border border-ink-200 bg-paper-50 px-4 py-3">
          <p class="text-sm font-medium text-ink-900">{{ issue.title }}</p>
          <p class="mt-1 text-sm text-ink-700">{{ issue.fix }}</p>
          <p v-if="issue.example" class="mt-2 rounded-md bg-white px-3 py-2 font-mono text-xs text-ink-700">
            {{ issue.example }}
          </p>
        </li>
      </ul>
    </div>

    <div class="card-flat">
      <div class="flex items-baseline justify-between gap-4">
        <h3 class="text-base font-semibold text-ink-900">Improved prompt</h3>
        <button
          type="button"
          class="btn-ghost text-xs"
          @click="copy"
        >
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
      </div>
      <pre class="mt-3 overflow-x-auto rounded-xl bg-ink-900 p-4 text-sm leading-relaxed text-white">{{ result.improved_prompt }}</pre>
      <p v-if="result.model_tip" class="mt-3 rounded-md bg-accent-50 p-3 text-xs text-accent-700">
        <strong class="font-semibold">Model tip:</strong> {{ result.model_tip }}
      </p>
    </div>

    <p class="text-center text-xs italic text-ink-400">
      {{ PROMPT_DISCLAIMER }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PROMPT_DISCLAIMER, type PromptResult } from '~/types/prompt'

const props = defineProps<{ result: PromptResult }>()

const copied = ref(false)

const headlineLabel = computed(() => {
  if (props.result.health_score >= 80) return 'Strong'
  if (props.result.health_score >= 60) return 'Workable'
  if (props.result.health_score >= 40) return 'Weak'
  return 'Too vague'
})

const badgeClass = computed(() => {
  const h = props.result.health_score
  if (h >= 80) return 'bg-accent-100 text-accent-700'
  if (h >= 60) return 'bg-yellow-100 text-yellow-800'
  if (h >= 40) return 'bg-amber-100 text-amber-800'
  return 'bg-red-100 text-red-800'
})

async function copy() {
  if (typeof navigator === 'undefined') return
  try {
    await navigator.clipboard.writeText(props.result.improved_prompt)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    /* clipboard blocked; silently ignore */
  }
}
</script>