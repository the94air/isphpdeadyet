// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@unocss/nuxt',
  ],
  devtools: { enabled: false },
  app: {
    head: {
      script: [
        process.env.NODE_ENV === 'production'
          ? {
              'defer': true,
              'src': 'https://tics.abdalla.sd/script.js',
              'data-website-id': 'edddfac9-6f36-42b4-b4a8-52a6d30c89f2',
            }
          : undefined,
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
