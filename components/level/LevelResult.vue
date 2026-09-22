<template>
  <section aria-label="Result" class="space-y-6">
    <LevelScoreBadge :primary-band="result.estimated_band" :confidence="result.confidence" />

    <div class="card-flat">
      <h3 class="text-base font-semibold text-ink-900">Sub-scores</h3>
      <p class="mt-1 text-sm text-ink-600">
        Each dimension is estimated independently. The overall band is a midpoint.
      </p>
      <ul class="mt-4 space-y-3">
        <li v-for="dim in result.dimensions" :key="dim.key" class="flex items-start gap-4">
          <span class="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-ink-50 text-xs font-bold text-ink-900 tabular-nums">
            {{ dim.band }}
          </span>
          <div class="flex-1">
            <div class="flex items-baseline justify-between gap-2">
              <span class="text-sm font-medium text-ink-900">{{ dim.label }}</span>
              <span class="text-xs tabular-nums text-ink-500">{{ dim.score }} / 100</span>
            </div>
            <p class="mt-1 text-xs text-ink-600">{{ dim.note }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div v-if="result.improvements.length" class="card-flat">
      <h3 class="text-base font-semibold text-ink-900">Top {{ result.improvements.length }} priorities</h3>
      <ol class="mt-4 space-y-4">
        <li v-for="imp in result.improvements" :key="imp.rank" class="flex items-start gap-3">
          <span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink-900 text-xs font-bold text-white">{{ imp.rank }}</span>
          <div>
            <p class="text-sm font-medium text-ink-900">{{ imp.title }}</p>
            <p class="mt-1 text-sm text-ink-600">{{ imp.advice }}</p>
          </div>
        </li>
      </ol>
    </div>

    <div v-if="result.weekly_plan.length" class="card-flat">
      <h3 class="text-base font-semibold text-ink-900">A 7-day starter plan</h3>
      <p class="mt-1 text-sm text-ink-600">
        Short, focused practice works better than long sessions. ~15–25 minutes a day.
      </p>
      <ol class="mt-4 space-y-3">
        <li v-for="day in result.weekly_plan" :key="day.day" class="flex items-start gap-4 rounded-xl bg-ink-50 px-4 py-3">
          <div class="w-20 shrink-0">
            <p class="text-xs font-semibold uppercase tracking-wider text-ink-500">{{ day.day }}</p>
            <p class="mt-0.5 text-sm font-medium text-ink-900">{{ day.minutes }} min</p>
          </div>
          <div>
            <p class="text-sm font-medium text-ink-900">{{ day.focus }}</p>
            <p class="mt-1 text-sm text-ink-600">{{ day.exercise }}</p>
          </div>
        </li>
      </ol>
    </div>

    <details v-if="result.evidence.length" class="card-flat">
      <summary class="cursor-pointer text-sm font-semibold text-ink-900">
        How we estimated this
      </summary>
      <ul class="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-600">
        <li v-for="(e, i) in result.evidence" :key="i">{{ e }}</li>
      </ul>
    </details>

    <p class="text-center text-xs italic text-ink-400">
      {{ LEVEL_DISCLAIMER }}
    </p>
  </section>
</template>

<script setup lang="ts">
import { LEVEL_DISCLAIMER, type LevelResult } from '~/types/level'

defineProps<{ result: LevelResult }>()
</script>