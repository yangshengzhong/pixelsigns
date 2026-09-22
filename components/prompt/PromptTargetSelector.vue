<template>
  <div class="space-y-1.5">
    <label for="prompt-target" class="text-sm font-medium text-ink-700">Target model</label>
    <div class="relative">
      <select
        id="prompt-target"
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
      Lets the Doctor add a small, model-specific tip to the diagnosis.
    </p>
  </div>
</template>

<script setup lang="ts">
import { TARGET_MODEL_LABELS, type PromptTargetModel } from '~/types/prompt'

const props = defineProps<{ modelValue: PromptTargetModel }>()
const emit = defineEmits<{ 'update:modelValue': [value: PromptTargetModel]; change: [value: PromptTargetModel] }>()

const model = computed({
  get: () => props.modelValue,
  set: (v: PromptTargetModel) => emit('update:modelValue', v),
})

const options = (Object.keys(TARGET_MODEL_LABELS) as PromptTargetModel[]).map((v) => ({
  value: v,
  label: TARGET_MODEL_LABELS[v],
}))

const { send } = useAnalytics()
function onChange(e: Event) {
  const v = (e.target as HTMLSelectElement).value as PromptTargetModel
  send('tool_context_select', { tool: 'prompt-doctor', context: v })
  emit('change', v)
}
</script>