function getDomainOfUrl(url: string) {
    const { hostname } = new URL(url)
    return hostname
}

function getDomainNamefromUrl(url: string) {
    const { hostname } = new URL(url)
    const domain = hostname.split('.')
    return domain[domain.length - 2]
}

function getFaviconFromUrl(url: string) {
    const domain = getDomainOfUrl(url)
    return `https://www.google.com/s2/favicons?domain=${domain}`
}

export { getDomainOfUrl, getDomainNamefromUrl, getFaviconFromUrl }

