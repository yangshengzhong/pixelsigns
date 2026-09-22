<template>
  <form class="card space-y-5" @submit.prevent="onSubmit">
    <div class="space-y-1.5">
      <div class="flex items-baseline justify-between gap-3">
        <label for="level-input" class="text-sm font-medium text-ink-700">
          Your writing (100–500 words)
        </label>
        <span class="text-xs tabular-nums text-ink-500" aria-live="polite">
          {{ wordCount }} words
        </span>
      </div>
      <textarea
        id="level-input"
        ref="textareaRef"
        v-model="text"
        :placeholder="placeholder"
        rows="8"
        class="input-base resize-y font-mono text-base leading-relaxed"
        :class="{ 'border-red-300 focus:border-red-500 focus:ring-red-500/20': wordIssue }"
        :disabled="status === 'loading'"
        @input="onInput"
      />
      <p class="text-xs text-ink-ink-500">
        Best results come from your own words — a story about your week, a short
        review, a paragraph you are about to email.
      </p>
    </div>

    <div class="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
      <LevelGoalSelector v-model="goal" />
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
          {{ status === 'loading' ? 'Estimating…' : 'Estimate my level' }}
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
      No signup required · AI-assisted estimate · {{ LEVEL_FORM_HINT }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { LEVEL_FORM_HINT, type LevelGoal } from '~/types/level'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    goal?: LevelGoal
    status?: 'idle' | 'loading' | 'success' | 'error' | 'rate_limited'
    remainingQuota?: number
    placeholder?: string
  }>(),
  {
    modelValue: '',
    goal: 'general',
    status: 'idle',
    remainingQuota: 5,
    placeholder:
      'Last weekend I went to a small village near my hometown. The weather was really nice, so my friends and I decided to walk through the forest and find a quiet river…',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:goal': [value: LevelGoal]
  submit: [text: string, goal: LevelGoal]
  inputStart: []
}>()

const text = computed({
  get: () => props.modelValue,
  set: (v) => emit('update:modelValue', v),
})

const goal = computed({
  get: () => props.goal,
  set: (v: LevelGoal) => emit('update:goal', v),
})

const wordCount = computed(() => {
  const t = text.value.trim()
  if (!t) return 0
  return t.split(/\s+/).length
})

const wordIssue = computed(() => wordCount.value > 0 && wordCount.value < 60)

const canSubmit = computed(() => {
  if (props.status === 'loading') return false
  if (wordCount.value < 60) return false
  return true
})

const { send } = useAnalytics()
const touched = ref(false)

function onInput() {
  if (!touched.value && text.value.trim().length > 0) {
    touched.value = true
    send('tool_input_start', { tool: 'level' })
  }
}

function onSubmit() {
  emit('submit', text.value, goal.value)
}

defineExpose({ wordCount, canSubmit, wordIssue })
</script>