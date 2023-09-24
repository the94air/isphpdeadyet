// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind.css',
    "~/assets/css/base.css"
  ],
  modules: [
    '@unocss/nuxt',
  ],
})
