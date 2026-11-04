import {computed} from 'vue';

export const useGithubLink = (contentPath: string, fileExtension: string) => {
    return computed(() => {
        const baseUrl = 'https://github.com/kuza2010/personal-site/blob/main/content';
        return `${baseUrl}${contentPath}.${fileExtension}`;
    });
}