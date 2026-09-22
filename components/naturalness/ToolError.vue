<template>
  <div class="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
    <div class="flex items-start gap-3">
      <span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-red-100 text-red-600">
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v4m0 4h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        </svg>
      </span>
      <div class="min-w-0">
        <p class="text-sm font-semibold text-red-700">{{ title }}</p>
        <p class="mt-1 text-sm text-red-800">{{ message }}</p>
        <button v-if="onRetry" class="mt-4 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-semibold text-red-700 hover:bg-red-100" type="button" @click="onRetry">
          Try again
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    message: string
    onRetry?: () => void
  }>(),
  { title: "We couldn't analyze this text right now." },
)
</script>
