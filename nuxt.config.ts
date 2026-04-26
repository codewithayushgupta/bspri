// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700, 800],
      'Poppins': [600, 700, 800],
    },
    display: 'swap',
    preload: true,
  },

  app: {
    head: {
      title: 'Bihar Panchayati Raj Department - Citizen Portal',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Official Citizen Portal of Bihar Panchayati Raj Department. Apply for certificates, track applications, view government schemes and more.',
        },
      ],
      htmlAttrs: { lang: 'en' },
    },
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },
})
