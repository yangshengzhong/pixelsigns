// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s · PixelSigns',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#0f172a' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  site: {
    url: 'https://pixelsigns.art',
    name: 'PixelSigns',
    description: 'AI Tools for Work & Learning',
  },

  runtimeConfig: {
    // Server-side (private)
    apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.pixelsigns.art',
    public: {
      // Exposed to the client
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'https://api.pixelsigns.art',
      siteUrl: 'https://pixelsigns.art',
    },
  },

  nitro: {
    // Cloudflare Pages deployment preset. Nitro ships this preset
    // built-in — no separate adapter package required.
    //   - preset:           emit `.output/public/_worker.js` + `.output/functions/`
    //                        so Cloudflare Pages can run server/middleware/* and
    //                        server/routes/* as Pages Functions.
    //   - platform:         tell the build we run on Cloudflare Workers platform
    //                        (sets up `process.env` polyfills correctly).
    preset: 'cloudflare-pages',
    platform: 'pages',

    prerender: {
      crawlLinks: true,
      routes: ['/'],
      failOnError: false,
    },
  },

  experimental: {
    payloadExtraction: false,
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.ts',
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
