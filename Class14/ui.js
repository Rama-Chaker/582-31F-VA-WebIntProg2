export function showStatus(message) {

    document.getElementById("statusMessage").textContent =
        message;
}

export function renderTournaments(
    tournaments,
    registrationFunction
) {

    const container =
        document.getElementById("tournamentContainer");

    container.innerHTML = "";

    tournaments.forEach(tournament => {

        const card = document.createElement("div");

        card.className = "col-md-4 mb-3";

        card.innerHTML = `
        <div class="card h-100">
            <div class="card-body">

                <h5>${tournament.name}</h5>

                <p>Game:
                ${tournament.game}</p>

                <p>Entry Fee:
                $${tournament.entryFee}</p>

                <p>Max Players:
                ${tournament.maxPlayers}</p>

                <p>Registered:
                ${tournament.registeredPlayers}</p>

                <p>Status:
                ${tournament.status}</p>

                <button
                    class="btn btn-success viewBtn">
                    View Registrations
                </button>

            </div>
        </div>
        `;

        card
        .querySelector(".viewBtn")
        .addEventListener("click", () => {
            registrationFunction(tournament);
        });

        container.appendChild(card);
    });
}

export function renderRegistrations(
    registrations,
    tournament
) {

    const container =
        document.getElementById("registrationContainer");

    if (registrations.length === 0) {

        container.innerHTML = `
            <div class="alert alert-warning">
                No registrations found for this tournament.
            </div>
        `;

        return;
    }

    let html = "<h3>Registrations</h3>";

    registrations.forEach(registration => {

        html += `
            <div class="card mb-2">
                <div class="card-body">

                    <p>
                        <strong>Player Name:</strong>
                        ${registration.playerName}
                    </p>

                    <p>
                        <strong>Gamer Tag:</strong>
                        ${registration.gamerTag}
                    </p>

                    <p>
                        <strong>Ticket Type:</strong>
                        ${registration.ticketType}
                    </p>

                    <p>
                        <strong>Registration Status:</strong>
                        ${registration.status}
                    </p>

                </div>
            </div>
        `;
    });

    const confirmedPlayers =
        registrations.filter(
            registration =>
                registration.status === "confirmed"
        ).length;

    const expectedRevenue =
        confirmedPlayers * tournament.entryFee;

    html += `
        <div class="alert alert-secondary mt-3">

            <h4>Summary</h4>

            <p>
                Total Registrations:
                ${registrations.length}
            </p>

            <p>
                Confirmed Players:
                ${confirmedPlayers}
            </p>

            <p>
                Expected Revenue:
                $${expectedRevenue}
            </p>

            <p>
                Spots Left:
                ${tournament.spotsLeft}
            </p>

        </div>
    `;

    container.innerHTML = html;
}