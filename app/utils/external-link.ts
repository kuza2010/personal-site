export enum ExternalLink {
    SOVCOMBANK_WEBSITE = 'https://sovcombank.ru',
    SOVCOMBANK_TECH_WEBSITE = 'https://sovcombank.it',
    GITHUB = '',
}

export function isExternalLink(link: string): boolean {
    let res = (Object.values(ExternalLink) as string[]).includes(link);

    if (!res) {
        res = link.startsWith('http://') || link.startsWith('https://')
    }
    console.log(`${link} is external link: ${res}`)
    return res;
}