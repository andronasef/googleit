enum GoogleItType {
    Search = 'Search',
    AutoSuggest = 'AutoSuggest',
}

export async function getSearchResults(query: string) {
    return googleRequest(GoogleItType.Search, query)
}

export async function getSuggetions(query: string) {
    return googleRequest(GoogleItType.AutoSuggest, query)
}

export async function googleRequest(type: string, query: string) {
    const response = await fetch(
        'https://andronasef-googleit-server.hf.space/run/api',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: [type, query],
            }),
        }
    )

    // data come as stringified JSON so we need to parse it
    const data = JSON.parse((await response.json()).data)

    return data
}