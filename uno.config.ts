import { defineConfig, presetUno } from 'unocss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media'
    }),
  ],
  theme: {
    fontFamily: {
      "general-sans": `"General Sans", ` + defaultTheme.fontFamily.sans.join(", "),
    }
  }
})
