export default defineNuxtConfig({
    imports: {
        autoImport: false
    },
    runtimeConfig: {
        public: {
            email: 'kyza20106@yandex.ru',
            github: 'https://github.com/kuza2010',
            linkedIn: 'https://www.linkedin.com/in/artyom-danilin'
        },
    },
    css: [
        '~/assets/blog.css',
        '~/assets/website.css',
    ],
    modules: ['@nuxt/ui', '@nuxt/content'],
    colorMode: {
        fallback: 'light',
        preference: 'system',
        storageKey: 'ad-color-mode'
    },

    compatibilityDate: '2025-04-05'
})