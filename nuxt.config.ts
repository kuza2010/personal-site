// For more information:
// https://nuxt.com/docs/api/configuration/nuxt-config

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
    content: {
        locales: ['en'],
        defaultLocale: 'en',
        api: {baseURL: '/api/_ad_content'},
        highlight: {
            langs: [
                'java', 'kotlin', 'ini', 'docker', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shellscript', 'mdc',
                'md', 'yaml', 'xml', 'sql',
            ],
            theme: 'dracula-soft',
        }
    },
    css: [
        '~/assets/blog.css',
        '~/assets/website.css',
        '~/assets/css-reset.css',
    ],
    modules: ['@nuxt/ui', '@nuxt/content'],
    colorMode: {
        fallback: 'light',
        preference: 'system',
        storageKey: 'ad-color-mode'
    }
})