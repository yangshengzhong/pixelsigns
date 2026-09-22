<template>
  <header class="sticky top-0 z-30 border-b border-ink-200/70 bg-paper/85 backdrop-blur">
    <div class="container-wide flex h-16 items-center justify-between gap-4">
      <NuxtLink to="/" class="group flex items-center gap-2.5" aria-label="PixelSigns home">
        <span class="grid h-9 w-9 place-items-center rounded-lg bg-ink-900 text-white shadow-soft transition group-hover:rotate-3">
          <svg viewBox="0 0 64 64" class="h-5 w-5" aria-hidden="true">
            <g fill="currentColor" class="text-accent-300">
              <rect x="10" y="10" width="10" height="10" rx="1.5" />
              <rect x="44" y="10" width="10" height="10" rx="1.5" />
              <rect x="27" y="27" width="10" height="10" rx="1.5" class="text-accent-400" />
              <rect x="10" y="44" width="10" height="10" rx="1.5" />
              <rect x="44" y="44" width="10" height="10" rx="1.5" />
            </g>
          </svg>
        </span>
        <span class="text-lg font-bold tracking-tight text-ink-900">PixelSigns</span>
      </NuxtLink>

      <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
        <NuxtLink to="/tools" class="btn-ghost">Tools</NuxtLink>
        <NuxtLink to="/guides" class="btn-ghost">Guides</NuxtLink>
        <NuxtLink to="/about" class="btn-ghost">About</NuxtLink>
        <NuxtLink to="/contact" class="btn-ghost">Contact</NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <NuxtLink to="/english-naturalness-checker" class="hidden btn-primary sm:inline-flex">
          Try the checker
        </NuxtLink>
        <button
          class="grid h-10 w-10 place-items-center rounded-lg border border-ink-200 bg-white text-ink-700 hover:bg-ink-50 md:hidden"
          aria-label="Toggle navigation"
          @click="open = !open"
        >
          <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="open" class="border-t border-ink-200/70 bg-white md:hidden">
        <nav class="container-wide flex flex-col gap-1 py-3" aria-label="Mobile">
          <NuxtLink to="/tools" class="btn-ghost justify-start" @click="open = false">Tools</NuxtLink>
          <NuxtLink to="/guides" class="btn-ghost justify-start" @click="open = false">Guides</NuxtLink>
          <NuxtLink to="/about" class="btn-ghost justify-start" @click="open = false">About</NuxtLink>
          <NuxtLink to="/contact" class="btn-ghost justify-start" @click="open = false">Contact</NuxtLink>
          <NuxtLink to="/english-naturalness-checker" class="btn-primary mt-2 w-full" @click="open = false">
            Try the checker
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => (open.value = false))
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 150ms ease, transform 150ms ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
