const SLASH = '/';

export function normalizeLink(link: string): string {
    const trim: string = link.trim()

    if (trim.length === 0) {
        return SLASH;
    }

    if (trim.startsWith(SLASH)) {
        return link;
    }

    return `${SLASH} + ${link}`;
}

export function normalizeLinks(links: Array<string>): Array<string> {
    return links.map(normalizeLink)
}