<template>
  <div class="flex min-h-screen flex-col bg-paper text-ink-900">
    <AppHeader />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Global default meta
useHead({
  bodyAttrs: {
    class: 'antialiased',
  },
})
</script>
