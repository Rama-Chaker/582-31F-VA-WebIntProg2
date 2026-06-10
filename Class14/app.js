import { getTournaments, getRegistrations }
from "./api.js";

import {
    renderTournaments,
    renderRegistrations,
    showStatus
}
from "./ui.js";

import { Tournament }
from "./tournament.js";

const loadBtn =
    document.getElementById("loadBtn");

const clearBtn =
    document.getElementById("clearBtn");

loadBtn.addEventListener(
    "click",
    loadTournaments
);

clearBtn.addEventListener(
    "click",
    clearPage
);

function loadTournaments() {

    showStatus("Loading tournaments...");

    document.getElementById("tournamentContainer").innerHTML =
        "<p>Loading tournaments...</p>";

    getTournaments()
        .then(data => {

            const tournaments =
                data.map(item =>
                    Tournament.fromObject(item)
                );

            renderTournaments(
                tournaments,
                showRegistrations
            );

            showStatus("Tournaments loaded successfully.");
        })
        .catch(error => {

            showStatus(error.message);
        });
}

function showRegistrations(tournament) {

    const container =
        document.getElementById("registrationContainer");

    container.innerHTML =
        "<p>Loading registrations...</p>";

    getRegistrations()
        .then(data => {

            const filtered =
                data.filter(reg =>
                    reg.tournamentId === tournament.id
                );

            if (filtered.length === 0) {
                container.innerHTML =
                    "<p>No registrations found.</p>";
                return;
            }

            renderRegistrations(filtered, tournament);

            showStatus("Registrations loaded.");
        })
        .catch(error => {

            container.innerHTML =
                `<div class="alert alert-danger">
                    ${error.message}
                </div>`;
        });
}

function clearPage() {

    document.getElementById(
        "tournamentContainer"
    ).innerHTML = "";

    document.getElementById(
        "registrationContainer"
    ).innerHTML = "";

    showStatus("Cleared.");
}

const postIdInput =
    document.getElementById("post-id-input");

const status =
    document.getElementById("status");

 try {

    const postId =
        Number(postIdInput.value);

    if (!postId || postId <= 0) {
        throw new Error(
            "Please enter a valid post ID."
        );
    }

    status.textContent =
        "Loading post...";

    fetch("https://jsonplaceholder.typicode.com/posts/" + postId)

    .then(response => {
        return response.json();
    })

    .catch(error => {
        status.textContent =
            error.message;
    })

    .finally(() => {

        console.log(
            "Request finished"
        );

    });
}
catch (error) {

    status.textContent =
        error.message;
}

const clearBtnPost =
    document.getElementById("clear-btn");

clearBtnPost.addEventListener(
    "click",
    clearPost
);

function clearPost() {

    document.getElementById(
        "output"
    ).innerHTML =
        "No post loaded yet.";

    document.getElementById(
        "status"
    ).textContent =
        "Ready.";

    document.getElementById(
        "post-id-input"
    ).value = "";
}

try {

    JSON.parse(
        "{ bad json }"
    );

}
catch (error) {

    console.log(
        error.message
    );

}