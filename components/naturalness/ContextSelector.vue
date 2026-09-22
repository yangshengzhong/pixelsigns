<template>
  <div class="space-y-1.5">
    <label for="context" class="text-sm font-medium text-ink-700">Context</label>
    <div class="relative">
      <select
        id="context"
        v-model="model"
        class="input-base appearance-none pr-10"
        @change="onChange"
      >
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      <svg viewBox="0 0 24 24" class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" fill="none" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </div>
    <p class="text-xs text-ink-500">
      The same sentence can sound more or less natural depending on where you'll use it.
    </p>
  </div>
</template>

<script setup lang="ts">
import { CONTEXT_LABELS, type ContextType } from '~/types/naturalness'

const props = defineProps<{ modelValue: ContextType }>()
const emit = defineEmits<{ 'update:modelValue': [value: ContextType]; change: [value: ContextType] }>()

const model = computed({
  get: () => props.modelValue,
  set: (v: ContextType) => emit('update:modelValue', v),
})

const options = (Object.keys(CONTEXT_LABELS) as ContextType[]).map((v) => ({
  value: v,
  label: CONTEXT_LABELS[v],
}))

const { send } = useAnalytics()
function onChange(e: Event) {
  const v = (e.target as HTMLSelectElement).value as ContextType
  send('tool_context_select', { tool: 'naturalness', context: v })
  emit('change', v)
}
</script>
