<template>
  <div class="flex min-h-screen items-center justify-center bg-paper px-4">
    <div class="text-center">
      <p class="text-sm font-semibold uppercase tracking-wider text-accent-700">
        Error {{ error.statusCode }}
      </p>
      <h1 class="mt-3 text-4xl font-bold text-ink-900 sm:text-5xl">
        {{ headline }}
      </h1>
      <p class="mx-auto mt-4 max-w-md text-ink-600">
        {{ description }}
      </p>
      <button class="btn-primary mt-8" @click="handleHome">
        Go back home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message?: string } }>()

const headline = computed(() =>
  props.error.statusCode === 404 ? 'Page not found' : 'Something went wrong'
)
const description = computed(() =>
  props.error.statusCode === 404
    ? "The page you're looking for doesn't exist or has been moved."
    : 'An unexpected error occurred. Please try again.'
)

const handleHome = () => clearError({ redirect: '/' })
</script>
