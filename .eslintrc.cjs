module.exports = {
    root: true,
    extends: ['@nuxt/eslint-config'],
    rules: {
        'vue/no-multiple-template-root': ['warn'],
        'quotes': ['error', 'single', {'avoidEscape': true}]
    }
}