function getHashQuery() {
    const url = location.href
    if (url.includes("?")) {
        const query =
            url.split("?")[1].split("=")[1]
        return query


    }

}

export { getHashQuery }

