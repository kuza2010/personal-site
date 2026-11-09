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
    modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/eslint'],
    icon: {
        clientBundle: {
            scan: true
        }
    },
    colorMode: {
        fallback: 'light',
        preference: 'system',
        storageKey: 'ad-color-mode'
    },
    content: {
        build: {
            markdown: {
                highlight: {
                    // `@nuxt/ui` defaults to `material-theme-lighter`, whose palette is too
                    // washed out for the light background. `default` must be light too:
                    // SSR renders `<html>` without a color-mode class, so the default theme
                    // is what users see before hydration.
                    theme: {
                        light: 'github-light',
                        default: 'github-light',
                        // Keep the current dark appearance.
                        dark: 'material-theme-palenight'
                    },
                    // Setting `langs` replaces the MDC default list, so every language
                    // used by the blog (and the previous defaults) must be listed here.
                    langs: [
                        'js', 'jsx', 'json', 'ts', 'tsx', 'vue', 'css', 'html',
                        'bash', 'shell', 'md', 'mdc', 'yaml', 'yml', 'scss',
                        'java', 'kotlin', 'groovy', 'properties'
                    ]
                }
            }
        }
    },

    compatibilityDate: '2025-04-05'
})