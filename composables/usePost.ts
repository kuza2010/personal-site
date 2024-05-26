import { useAsyncData } from '#app';
import { queryContent } from '#build/imports';


const KEYS_TO_FETCH: string[] = ['_path', 'title', 'alt', 'img', 'created', 'lastModified', 'description', 'languageTags']

function handler(path: string) {
    return queryContent(path).only(KEYS_TO_FETCH).findOne()
}

export const usePost = async (path: string) => {
    console.log('call usePost ' + path)
    const {data} = await useAsyncData(path, () => queryContent(path)
        .only(KEYS_TO_FETCH)
        .findOne()
    )
    if (data.value === null) {
        return null
    } else {
        return data.value
    }
}