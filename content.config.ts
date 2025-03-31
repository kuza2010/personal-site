import {defineCollection, defineContentConfig, z} from '@nuxt/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            type: 'page',
            schema: z.object({
                languageTags: z.array(z.string()),
                created: z.date(),
                lastModified: z.date(),
                alt: z.string(),
                img: z.string(),
            })
        })
    }
})