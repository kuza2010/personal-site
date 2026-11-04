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
            }
        }
    },
    plugins: [
        typography
    ],
}