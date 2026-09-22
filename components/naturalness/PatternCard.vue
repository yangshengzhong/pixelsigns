<template>
  <div class="card-flat">
    <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Pattern</p>
    <p class="mt-2 text-base text-ink-900">{{ pattern.rule }}</p>

    <dl class="mt-4 space-y-2 text-sm">
      <div class="flex gap-3 rounded-lg bg-accent-50 px-3 py-2">
        <dt class="shrink-0 font-mono text-accent-700">✓</dt>
        <dd class="text-ink-800">{{ pattern.good_example }}</dd>
      </div>
      <div class="flex gap-3 rounded-lg bg-red-50 px-3 py-2">
        <dt class="shrink-0 font-mono text-red-600">✗</dt>
        <dd class="text-ink-800">{{ pattern.bad_example }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
import type { NaturalnessPattern } from '~/types/naturalness'
defineProps<{ pattern: NaturalnessPattern }>()
</script>
