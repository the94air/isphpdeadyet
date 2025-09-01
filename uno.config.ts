import { defineConfig } from 'unocss'
import presetWind4 from '@unocss/preset-wind4'

const systemFonts = {
  sans: `, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  mono: `, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
}

export default defineConfig({
  presets: [
    presetWind4({
      dark: 'media',
    }),
  ],
  theme: {
    font: {
      'general-sans': `"General Sans"` + systemFonts.sans,
    },
  },
})
