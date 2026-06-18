export function fetchTeams() {
    return fetch("teams.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load teams");
            }
            return response.json();
        });

}