<template>
  <div class="card-flat">
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">
          {{ kind === 'natural' ? 'Natural version' : 'More conversational' }}
        </p>
        <p class="mt-2 break-words text-lg font-medium text-ink-900">{{ text }}</p>
      </div>
      <button class="btn-ghost shrink-0" type="button" @click="handleCopy">
        <svg v-if="!copied" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke-linecap="round" />
        </svg>
        <svg v-else viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 12l5 5 9-11" />
        </svg>
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string
  kind?: 'natural' | 'alternative'
}>()

const { send } = useAnalytics()
const copied = ref(false)

async function handleCopy() {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(props.text)
    }
    copied.value = true
    send(props.kind === 'alternative' ? 'alternative_copy' : 'rewrite_copy', {
      tool: 'naturalness',
    })
    setTimeout(() => (copied.value = false), 1800)
  } catch {
    // clipboard not available — silently no-op
  }
}
</script>
