export async function getFestivalData() {
    const artistResponse = fetch("./artists.json");

    const performanceResponse = fetch("./performances.json");

    const responses = await Promise.all([artistResponse, performanceResponse]);

    if (!responses[0].ok || !responses[1].ok) {
        throw new Error("Festival data could not be loaded.");
    }

    const artists = await responses[0].json();

    const performances = await responses[1].json();

    return {
        artists: artists,
        performances: performances,
    };
}
