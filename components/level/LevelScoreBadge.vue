<template>
  <div class="card-flat">
    <div class="flex items-baseline justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Estimated CEFR</p>
        <p class="mt-1 text-5xl font-bold tabular-nums text-ink-900">{{ primaryBand }}<span class="text-2xl text-ink-400">/C2</span></p>
      </div>
      <div class="flex items-center gap-2">
        <span :class="['h-3 w-3 rounded-full', confidenceDot]" />
        <span class="text-sm font-semibold text-ink-700">{{ confidence }} confidence</span>
      </div>
    </div>
    <p class="mt-3 text-sm text-ink-600">
      Your writing sits in the {{ primaryLabel }} range. This is an AI-assisted estimate, not an
      official CEFR / IELTS / TOEFL score.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CEFR_LABELS, type CefrBand } from '~/types/level'

const props = defineProps<{
  primaryBand: CefrBand
  confidence: 'Low' | 'Medium' | 'High'
}>()

const primaryLabel = computed(() => CEFR_LABELS[props.primaryBand])

const confidenceDot = computed(() => {
  if (props.confidence === 'High') return 'bg-accent-500'
  if (props.confidence === 'Medium') return 'bg-yellow-500'
  return 'bg-red-500'
})
</script>