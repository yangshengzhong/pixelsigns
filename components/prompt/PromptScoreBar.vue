<template>
  <div class="flex items-center gap-4">
    <span class="w-28 shrink-0 text-sm font-medium text-ink-700">{{ label }}</span>
    <div class="relative h-2.5 flex-1 overflow-hidden rounded-full bg-ink-100">
      <div
        class="absolute left-0 top-0 h-full rounded-full transition-all duration-700"
        :class="barClass"
        :style="{ width: `${percent}%` }"
      />
    </div>
    <span class="w-10 shrink-0 text-right text-sm font-semibold tabular-nums text-ink-900">
      {{ score }}/10
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string; score: number }>()

const percent = computed(() => Math.max(0, Math.min(100, props.score * 10)))

const barClass = computed(() => {
  if (props.score >= 7) return 'bg-accent-500'
  if (props.score >= 5) return 'bg-yellow-500'
  return 'bg-red-500'
})
</script>