import {useAsyncData} from '#app';
import {queryCollection} from '#imports';

export const useRecentBlogPost = async () => {
    const {data} = await useAsyncData('key-content', () => {
        return queryCollection('blog')
            .select('path', 'title', 'created', 'lastModified', 'description', 'languageTags')
            .order('lastModified', 'DESC')
            .all()
    })

    return data.value
}