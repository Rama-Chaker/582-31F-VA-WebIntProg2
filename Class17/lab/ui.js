export function renderTeams(
    teams,
    container
) {

    const container =
        document.getElementById("teams-container");

    container.innerHTML = "";

    teams.forEach(team => {

        const card = document.createElement("div");

        card.className = "col-md-4 mb-3";

        card.innerHTML = `
        <div class="card h-100">
            <div class="card-body">

                <h5>${team.name}</h5>
            
                <p>Group:
                    ${team.group}</p>

                <p>Points:
                ${team.points}</p>

                <p>Played:
                ${team.played}</p>

                <p>Goal Difference:
                ${team.goalDifference}</p>
            </div>
        </div>
        `;
        container.appendChild(card);
    });
}