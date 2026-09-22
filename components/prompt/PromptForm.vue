<template>
  <form class="card space-y-5" @submit.prevent="onSubmit">
    <div class="space-y-1.5">
      <div class="flex items-baseline justify-between gap-3">
        <label for="prompt-input" class="text-sm font-medium text-ink-700">
          The prompt you would send
        </label>
        <span class="text-xs tabular-nums text-ink-500" aria-live="polite">
          {{ charCount }} characters
        </span>
      </div>
      <textarea
        id="prompt-input"
        ref="textareaRef"
        v-model="text"
        :placeholder="placeholder"
        rows="6"
        class="input-base resize-y font-mono text-base leading-relaxed"
        :disabled="status === 'loading'"
        @input="onInput"
      />
      <p class="text-xs text-ink-500">
        Paste exactly what you would type into the model — even short ones. {{ PROMPT_FORM_HINT }}
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
      <PromptTargetSelector v-model="targetModel" />
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
          {{ status === 'loading' ? 'Diagnosing…' : 'Diagnose my prompt' }}
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
      No signup required · AI-assisted diagnostic · 12–4000 characters
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { PROMPT_FORM_HINT, type PromptTargetModel } from '~/types/prompt'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    targetModel?: PromptTargetModel
    status?: 'idle' | 'loading' | 'success' | 'error' | 'rate_limited'
    remainingQuota?: number
    placeholder?: string
  }>(),
  {
    modelValue: '',
    targetModel: 'general',
    status: 'idle',
    remainingQuota: 10,
    placeholder: 'Write a marketing email.',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:targetModel': [value: PromptTargetModel]
  submit: [text: string, targetModel: PromptTargetModel]
  inputStart: []
}>()

const text = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})

const targetModel = computed({
  get: () => props.targetModel,
  set: (v: PromptTargetModel) => emit('update:targetModel', v),
})

const charCount = computed(() => text.value.length)

const canSubmit = computed(() => {
  if (props.status === 'loading') return false
  if (charCount.value < 12) return false
  return true
})

const { send } = useAnalytics()
const touched = ref(false)

function onInput() {
  if (!touched.value && text.value.trim().length > 0) {
    touched.value = true
    send('tool_input_start', { tool: 'prompt-doctor' })
  }
}

function onSubmit() {
  emit('submit', text.value, targetModel.value)
}

defineExpose({ charCount, canSubmit })
</script>