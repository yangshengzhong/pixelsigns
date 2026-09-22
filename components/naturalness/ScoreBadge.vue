<template>
  <div class="card-flat">
    <div class="flex items-baseline justify-between gap-4">
      <div>
        <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Naturalness</p>
        <p class="mt-1 text-5xl font-bold tabular-nums text-ink-900">{{ score }}<span class="text-2xl text-ink-400">/100</span></p>
      </div>
      <div class="flex items-center gap-2">
        <span :class="['h-3 w-3 rounded-full', dotClass]" />
        <span class="text-sm font-semibold" :class="textClass">{{ label }}</span>
      </div>
    </div>
    <div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-ink-100" :aria-label="`Score: ${score} out of 100`">
      <div class="h-full rounded-full transition-all duration-700" :class="barClass" :style="{ width: `${score}%` }" />
    </div>
    <p v-if="description" class="mt-3 text-sm text-ink-600">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { LABEL_DESCRIPTIONS, LABEL_LABELS, type NaturalnessLabel } from '~/types/naturalness'

const props = defineProps<{ score: number; label: NaturalnessLabel }>()

const label = computed(() => LABEL_LABELS[props.label])
const description = computed(() => LABEL_DESCRIPTIONS[props.label])

const colorKey = computed<'green' | 'amber' | 'red'>(() => {
  if (props.label === 'natural' || props.label === 'mostly_natural') return 'green'
  if (props.label === 'understandable_but_unnatural' || props.label === 'awkward') return 'amber'
  return 'red'
})

const dotClass = computed(() => ({
  green: 'bg-accent-500',
  amber: 'bg-yellow-500',
  red: 'bg-red-500',
}[colorKey.value]))

const textClass = computed(() => ({
  green: 'text-accent-700',
  amber: 'text-yellow-700',
  red: 'text-red-700',
}[colorKey.value]))

const barClass = computed(() => ({
  green: 'bg-accent-500',
  amber: 'bg-yellow-500',
  red: 'bg-red-500',
}[colorKey.value]))
</script>
