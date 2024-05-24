// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        process.env.NODE_ENV === "production" ? {
          defer: true,
          src: "https://tics.abdalla.sd/script.js",
          "data-website-id": "89698437-2520-44eb-af55-9eca17cb0d46",
        } : undefined,
      ],
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    "~/assets/css/base.css"
  ],
  modules: [
    '@unocss/nuxt',
  ],
})
