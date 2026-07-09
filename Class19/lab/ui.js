import "./artist-card.js";

export function renderArtists(artists, container) {
    container.innerHTML = "";

    artists.forEach((artistInstance) => {
        const cardElement = document.createElement("artist-card");
        cardElement.artist = artistInstance;
        container.appendChild(cardElement);
    });
}
