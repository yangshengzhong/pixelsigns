<template>
  <div class="space-y-1.5">
    <label for="level-goal" class="text-sm font-medium text-ink-700">Goal</label>
    <div class="relative">
      <select
        id="level-goal"
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
      Helps the checker prioritize which skills to suggest improving first.
    </p>
  </div>
</template>

<script setup lang="ts">
import { GOAL_LABELS, type LevelGoal } from '~/types/level'

const props = defineProps<{ modelValue: LevelGoal }>()
const emit = defineEmits<{ 'update:modelValue': [value: LevelGoal]; change: [value: LevelGoal] }>()

const model = computed({
  get: () => props.modelValue,
  set: (v: LevelGoal) => emit('update:modelValue', v),
})

const options = (Object.keys(GOAL_LABELS) as LevelGoal[]).map((v) => ({
  value: v,
  label: GOAL_LABELS[v],
}))

const { send } = useAnalytics()
function onChange(e: Event) {
  const v = (e.target as HTMLSelectElement).value as LevelGoal
  send('tool_context_select', { tool: 'level', context: v })
  emit('change', v)
}
</script>