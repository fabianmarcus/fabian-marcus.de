// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  $meta: {
    name: 'Fabian Marcus - Ich. Über mich.',
  },

  vite: {
    mode: 'universal',

    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        },
      },
    }
  },

  plugins: [
    `~/plugins/vue-gallery.client.js`,
  ],

  css: [
    `~/assets/styles/global.scss`,
  ]
})
