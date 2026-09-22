<template>
  <section aria-label="Result" class="space-y-4">
    <ScoreBadge :score="result.naturalness_score" :label="result.label" />

    <div v-if="result.original !== result.natural_version" class="space-y-4">
      <RewriteCard :text="result.natural_version" kind="natural" />
      <RewriteCard
        v-if="result.alternative"
        :text="result.alternative"
        kind="alternative"
      />
    </div>

    <ExplanationCard
      :explanation="result.explanation"
      :original="result.original"
      :natural_version="result.natural_version"
    />

    <div v-if="result.patterns.length" class="space-y-4">
      <PatternCard
        v-for="(p, i) in result.patterns"
        :key="i"
        :pattern="p"
      />
    </div>

    <div class="flex flex-wrap gap-2 text-xs text-ink-500">
      <span class="badge bg-ink-100 text-ink-700">
        Tone: {{ toneLabel }}
      </span>
      <span class="badge bg-ink-100 text-ink-700">
        Grammar: {{ grammarLabel }}
      </span>
      <span class="badge bg-ink-100 text-ink-700">
        Context fit: {{ contextFitLabel }}
      </span>
      <span v-if="cached" class="badge bg-accent-100 text-accent-700">
        Example pattern
      </span>
    </div>

    <PracticeCard
      v-if="result.practice"
      :prompt="result.practice.prompt"
      :hint="result.practice.hint"
      @start="onPracticeStart"
    />

    <ToolCTA />

    <p class="text-center text-xs italic text-ink-400">
      AI-assisted feedback — may make mistakes. Not an official proficiency assessment.
    </p>
  </section>
</template>

<script setup lang="ts">
import { TONE_LABELS, type NaturalnessResult } from '~/types/naturalness'

const props = defineProps<{ result: NaturalnessResult; cached?: boolean }>()
const emit = defineEmits<{ practiceStart: [] }>()

const toneLabel = computed(() => TONE_LABELS[props.result.tone])
const grammarLabel = computed(() => {
  switch (props.result.grammar_status) {
    case 'correct': return 'Correct'
    case 'mostly_correct': return 'Mostly correct'
    case 'has_errors': return 'Has errors'
  }
})
const contextFitLabel = computed(() => {
  switch (props.result.context_fit) {
    case 'appropriate': return 'Appropriate'
    case 'slightly_off': return 'Slightly off'
    case 'mismatched': return 'Mismatched'
    case 'too_short': return 'Too short to assess'
    default: return props.result.context_fit
  }
})

function onPracticeStart() {
  emit('practiceStart')
}
</script>
