import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
  },
})
