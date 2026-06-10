export function getTournaments() {

    return fetch("tournaments.json")
        .then(response => {

            console.log("STATUS:", response.status);

            if (!response.ok) {
                throw new Error("Failed to load tournaments");
            }

            return response.json();
        });
}

export function getRegistrations() {

    return fetch("registrations.json")
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to load registrations");
            }

            return response.json();
        });
}