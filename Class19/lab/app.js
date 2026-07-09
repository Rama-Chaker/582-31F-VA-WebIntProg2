import { fetchArtists } from "./api.js";
import { Artist } from "./artist.js";
import { renderArtists } from "./ui.js";

const loadBtn = document.getElementById("load-btn");
const clearBtn = document.getElementById("clear-btn");
const statusDiv = document.getElementById("status");
const lineupContainer = document.getElementById("lineup-container");
const detailsPlaceholder = document.getElementById("details-placeholder");
const detailsContent = document.getElementById("details-content");

const detailName = document.getElementById("detail-name");
const detailGenre = document.getElementById("detail-genre");
const detailStage = document.getElementById("detail-stage");
const detailTime = document.getElementById("detail-time");
const detailCountry = document.getElementById("detail-country");
const detailSummary = document.getElementById("detail-summary");

function handleLoadLineup() {
    try {
        statusDiv.textContent = "Loading lineup...";
        statusDiv.style.color = "#555";
       fetchArtists().then((rawDataArray) => {
            const artistInstances = rawDataArray.map((item) =>
                Artist.fromObject(item),
            );
            renderArtists(artistInstances, lineupContainer);
        });

        statusDiv.textContent = "Lineup loaded successfully.";
        statusDiv.style.color = "green";
    } catch (error) {
        console.error(error);
        lineupContainer.innerHTML = "";
        statusDiv.textContent = `Failed to load lineup: ${error.message}`;
        statusDiv.style.color = "red";
    }
}

// Reset functions
function handleClear() {
    lineupContainer.innerHTML = "";
    statusDiv.textContent = "Lineup cleared.";
    statusDiv.style.color = "#555";
    detailsContent.style.display = "none";
    detailsPlaceholder.style.display = "block";
}

// Display Specific Information Card Panel Handler
function handleArtistSelection(event) {
    const artist = event.detail;

    detailsPlaceholder.style.display = "none";
    detailsContent.style.display = "block";

    detailName.textContent = artist.name;
    detailGenre.textContent = artist.genre;
    detailStage.textContent = artist.stage;
    detailTime.textContent = artist.time;
    detailCountry.textContent = artist.country;
    detailSummary.textContent = artist.summary;
}

loadBtn.addEventListener("click", handleLoadLineup);
clearBtn.addEventListener("click", handleClear);
document.addEventListener("artist-selected", handleArtistSelection);
