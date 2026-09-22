<template>
  <div class="card-flat">
    <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">Why?</p>
    <p class="mt-2 text-base leading-relaxed text-ink-800">{{ explanation }}</p>
    <p v-if="original && natural_version && original !== natural_version" class="mt-4 rounded-lg bg-ink-50 px-3 py-2 text-xs italic text-ink-600">
      <span class="font-semibold not-italic text-ink-700">Original:</span>
      <span class="ml-1 line-through decoration-ink-300">{{ original }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  explanation: string
  original?: string
  natural_version?: string
}>()
</script>
