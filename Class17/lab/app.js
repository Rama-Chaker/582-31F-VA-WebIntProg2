import { fetchTeams } from "./api.js";

import { renderTeams, showStatus } from "./ui.js";

import { Team } from "./team.js";

import "./team-card.js";
const loadBtn = document.getElementById("load-btn");

const clearBtn = document.getElementById("clear-btn");

const status = document.getElementById("status");

const teamsContainer = document.getElementById("teams-container");

const detailsContainer = document.getElementById("details-container");

loadBtn.addEventListener("click", loadTeams);

clearBtn.addEventListener("click", clearPage);

function loadTeams() {
    showStatus("Loading teams...");

    document.getElementById("teams-container").innerHTML =
        "<p>Loading teams...</p>";

    fetchTeams()
        .then((data) => {
            const teams = data.map((item) => Team.fromObject(item));

            renderTeams(teams, teamsContainer);

            showStatus("Teams loaded successfully.");
        })
        .catch((error) => {
            showStatus(error.message);
        });
}

function clearPage() {
    document.getElementById("teams-container").innerHTML = "";

    document.getElementById("details-container").innerHTML =
        "<p>No team selected yet.</p>";

    showStatus("Dashboard cleared.");
}
