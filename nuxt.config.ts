// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
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
              'data-website-id': '89698437-2520-44eb-af55-9eca17cb0d46',
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
})
