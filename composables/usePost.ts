import {queryCollection, useAsyncData} from '#imports';

export const usePost = async (path: string) => {
    console.log('call usePost for path: ' + path)
    const  { data: page } = await useAsyncData(path, () => {
        return queryCollection('blog')
            .path(path)
            .first()
    })
    return page;
}