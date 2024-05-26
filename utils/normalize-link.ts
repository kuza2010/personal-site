const SLASH = '/';

export function normalizeLink(link: String): String {
    const trim: String = link.trim()

    if (trim.length === 0) {
        return SLASH;
    }

    if (trim.startsWith(SLASH)) {
        return link;
    }

    return `${SLASH} + ${link}`;
}

export function normalizeLinks(links: Array<String>): Array<String> {
    return links.map(normalizeLink)
}