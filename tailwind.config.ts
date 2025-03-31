import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        del: {
                            textDecoration: 'line-through'
                        },
                        hr: {
                            'border-top': '1px solid var(--color-brand)'
                        },
                        img: {
                            display: 'block',
                            margin: '0 auto'
                        },
                        strong: {
                            class: 'text-alligator-600',
                            fontWeight: '600',
                        },
                    },
                },
            },
            backgroundImage: {
                'cover-image': 'url(/cover-image.jpg)'
            },
            colors: {
                brand: '#227722',
                // generated from tool: https://uicolors.app/create for brand 'alligator: #227722' color
                alligator: {
                    50: '#f1fcf1',
                    100: '#e1f8e0',
                    200: '#c3f0c2',
                    300: '#93e392',
                    400: '#5ccd5b',
                    500: '#34b334',
                    600: '#279326',
                    700: '#227722',
                    800: '#1f5c1f',
                    900: '#1b4c1c',
                    950: '#0a290b',
                },
            }
        }
    },
    plugins: [
        typography
    ],
}