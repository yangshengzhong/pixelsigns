<template>
  <footer class="border-t border-ink-200 bg-white">
    <div class="container-wide py-12">
      <div class="grid gap-10 md:grid-cols-4">
        <div class="md:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-2.5">
            <span class="grid h-8 w-8 place-items-center rounded-md bg-ink-900 text-white">
              <svg viewBox="0 0 64 64" class="h-4 w-4" aria-hidden="true">
                <g fill="currentColor" class="text-accent-300">
                  <rect x="10" y="10" width="10" height="10" rx="1.5" />
                  <rect x="44" y="10" width="10" height="10" rx="1.5" />
                  <rect x="27" y="27" width="10" height="10" rx="1.5" class="text-accent-400" />
                  <rect x="10" y="44" width="10" height="10" rx="1.5" />
                  <rect x="44" y="44" width="10" height="10" rx="1.5" />
                </g>
              </svg>
            </span>
            <span class="text-base font-semibold text-ink-900">PixelSigns</span>
          </NuxtLink>
          <p class="mt-3 max-w-xs text-sm text-ink-600">
            AI tools for work and learning. Practical, privacy-conscious, and built to give you useful answers first.
          </p>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink-500">Tools</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><NuxtLink to="/tools" class="text-ink-700 hover:text-ink-900">All tools</NuxtLink></li>
            <li>
              <NuxtLink to="/english-naturalness-checker" class="text-ink-700 hover:text-ink-900">
                English Naturalness Checker
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/english-level-checker" class="text-ink-700 hover:text-ink-900">
                AI English Level Checker
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/prompt-doctor" class="text-ink-700 hover:text-ink-900">
                Prompt Doctor
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink-500">Company</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><NuxtLink to="/guides" class="text-ink-700 hover:text-ink-900">Guides</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-ink-700 hover:text-ink-900">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-ink-700 hover:text-ink-900">Contact</NuxtLink></li>
            <li><NuxtLink to="/editorial-policy" class="text-ink-700 hover:text-ink-900">Editorial Policy</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-semibold uppercase tracking-wider text-ink-500">Legal</h3>
          <ul class="mt-4 space-y-2 text-sm">
            <li><NuxtLink to="/privacy" class="text-ink-700 hover:text-ink-900">Privacy</NuxtLink></li>
            <li><NuxtLink to="/terms" class="text-ink-700 hover:text-ink-900">Terms</NuxtLink></li>
            <li><NuxtLink to="/disclaimer" class="text-ink-700 hover:text-ink-900">Disclaimer</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-10 flex flex-col items-start justify-between gap-3 border-t border-ink-200 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
        <p>© {{ year }} PixelSigns. AI-assisted feedback — may make mistakes.</p>
        <p>Made for English learners and curious minds.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
