import { useAsyncData } from '#app';
import { queryContent } from '#build/imports';


const KEYS_TO_FETCH: string[] = ['_path', 'title', 'created', 'lastModified', 'description', 'languageTags']

export const useRecentBlogPost = async () => {
    console.log('call useRecentBlogPost')

    const {data} = await useAsyncData('key-content', () => {
        return queryContent('/blog')
                .only(KEYS_TO_FETCH)
                .find()
        }
    )

    if (data.value === null) {
        return null
    } else {
        return data.value
    }
}