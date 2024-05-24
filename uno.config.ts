import { defineConfig, presetUno } from 'unocss'

const systemFonts = {
  sans: `, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  mono: `, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
}

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media'
    }),
  ],
  theme: {
    fontFamily: {
      "general-sans": `"General Sans"` + systemFonts.sans,
    }
  }
})
