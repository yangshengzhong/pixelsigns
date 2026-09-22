<template>
  <div class="rounded-2xl border border-accent-200 bg-accent-50/60 p-6 sm:p-8">
    <p class="text-xs font-semibold uppercase tracking-wider text-accent-700">Practice</p>
    <p class="mt-2 text-lg font-medium text-ink-900">{{ prompt }}</p>
    <p v-if="hint" class="mt-3 text-sm text-ink-600">
      <span class="font-semibold text-ink-700">Hint:</span> {{ hint }}
    </p>
    <button class="btn-secondary mt-5 w-full sm:w-auto" type="button" @click="onStart">
      <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
      </svg>
      Try it yourself
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ prompt: string; hint: string }>()
const emit = defineEmits<{ start: [] }>()

const { send } = useAnalytics()
function onStart() {
  send('practice_start', { tool: 'naturalness' })
  emit('start')
}
</script>
