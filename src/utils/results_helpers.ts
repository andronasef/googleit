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
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

function getTitleCase(str: string) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word.replace(word[0], word[0].toUpperCase())
        })
        .join(' ')
}

export { getDomainOfUrl, getDomainNamefromUrl, getFaviconFromUrl, getTitleCase }

