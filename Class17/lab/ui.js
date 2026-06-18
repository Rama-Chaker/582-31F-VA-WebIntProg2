export function renderTeams(teams, container) {
    container.innerHTML = "";

    teams.forEach((team) => {
        const card = document.createElement("team-card");
        card.setAttribute("name", team.name);
        card.setAttribute("group", team.group);
        card.setAttribute("points", team.points);
        card.setAttribute("played", team.played);
        card.setAttribute("goal-difference", team.goalDifference);

        container.appendChild(card);
    });
}

export function showStatus(message) {
    document.getElementById("status").textContent = message;
}
