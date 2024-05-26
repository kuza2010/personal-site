export enum ExternalLink {
    SOVCOMBANK_WEBSITE = 'https://sovcombank.ru',
    SOVCOMBANK_TECH_WEBSITE = 'https://sovcombank.it',
    GITHUB = '',
}

export function isExternalLink(link: String): boolean {
    let res = (<any>Object).values(ExternalLink).includes(link, 0);

    if (!res) {
        res = link.startsWith('http://') || link.startsWith('https://')
    }
    console.log(`${link} is external link: ${res}`)
    return res;
}