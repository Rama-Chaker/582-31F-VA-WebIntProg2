export async function getFestivalData() {
  const artistResponse = fetch("./artists.json");

  const performanceResponse = fetch("./performances.json");

  const responses = await Promise.all([artistResponse, performanceResponse]);

  if (responses.some((r) => !r.ok)) {
    throw new Error("Festival data could not be loaded.");
  }

  const artists = await artistResponse.json();

  const performances = await performanceResponse.json();

  return {
    artist: artists,
    performance: performances,
  };
}