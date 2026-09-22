<template>
  <form class="card space-y-5" @submit.prevent="onSubmit">
    <div class="space-y-1.5">
      <div class="flex items-baseline justify-between gap-3">
        <label for="naturalness-input" class="text-sm font-medium text-ink-700">
          Your English
        </label>
        <span class="text-xs tabular-nums text-ink-500" aria-live="polite">
          {{ wordCount }} / {{ maxWords }} words
        </span>
      </div>
      <textarea
        id="naturalness-input"
        ref="textareaRef"
        v-model="text"
        :placeholder="placeholder"
        rows="5"
        :maxlength="maxChars"
        class="input-base resize-y font-mono text-base leading-relaxed"
        :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-500/20': wordOver }"
        :disabled="status === 'loading'"
        @input="onInput"
      />
      <p class="text-xs text-ink-500">
        Best with 1-5 sentences. Paste a sentence or short paragraph for the clearest feedback.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
      <ContextSelector v-model="context" />
      <div class="flex flex-col items-stretch gap-2 sm:items-end">
        <button
          type="submit"
          class="btn-primary"
          :disabled="!canSubmit"
        >
          <svg v-if="status === 'loading'" viewBox="0 0 24 24" class="h-4 w-4 animate-spin" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9" stroke-opacity="0.25" />
            <path d="M21 12a9 9 0 0 1-9 9" stroke-linecap="round" />
          </svg>
          {{ status === 'loading' ? 'Checking…' : 'Check Naturalness' }}
        </button>
        <p class="text-center text-xs text-ink-500">
          <span class="inline-flex items-center gap-1">
            <span class="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {{ remainingQuota }} free checks today
          </span>
        </p>
      </div>
    </div>

    <p class="text-xs text-ink-500">
      No signup required · AI-assisted feedback · 1-500 words
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { ContextType } from '~/types/naturalness'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    context?: ContextType
    status?: 'idle' | 'loading' | 'success' | 'error' | 'rate_limited'
    remainingQuota?: number
    placeholder?: string
  }>(),
  {
    modelValue: '',
    context: 'general',
    status: 'idle',
    remainingQuota: 10,
    placeholder: 'e.g. I very like this movie.',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:context': [value: ContextType]
  submit: [text: string, context: ContextType]
  inputStart: []
}>()

const text = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})

const context = computed({
  get: () => props.context,
  set: (v: ContextType) => emit('update:context', v),
})

const maxWords = 500
const maxChars = 5000

const wordCount = computed(() => {
  const t = text.value.trim()
  if (!t) return 0
  return t.split(/\s+/).length
})
const wordOver = computed(() => wordCount.value > maxWords)

const canSubmit = computed(() => {
  if (props.status === 'loading') return false
  if (wordCount.value < 3) return false
  if (wordOver.value) return false
  return true
})

const { send } = useAnalytics()
const touched = ref(false)

function onInput() {
  if (!touched.value && text.value.trim().length > 0) {
    touched.value = true
    send('tool_input_start', { tool: 'naturalness' })
  }
}

function onSubmit() {
  emit('submit', text.value, context.value)
}

// Sample button is wired from parent to keep the form reusable.
defineExpose({ wordCount, canSubmit, wordOver })
</script>
