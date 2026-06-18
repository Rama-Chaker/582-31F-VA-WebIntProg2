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
            try {
                const teams = data.map((team) => Team.fromObject(team));
                renderTeams(teams, teamsContainer);
                showStatus("Teams loaded successfully.");
            } catch (error) {
                showStatus("Invalid team data received.");
            }
        })
        .catch((error) => {
            showStatus(error.message);
            teamsContainer.innerHTML = "<p>Unable to load teams.</p>";
        });
}

function clearPage() {

    teamsContainer.innerHTML = "";

    detailsContainer.innerHTML =
        "<p>No team selected yet.</p>";

    showStatus(
        "Dashboard cleared."
    );
}