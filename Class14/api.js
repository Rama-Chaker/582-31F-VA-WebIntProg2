export function getTournaments() {

    const response = fetch("tournaments.json");

    if (response.status !== 200) {
        throw new Error("Failed to load tournaments");
    }

    return response.json();
}

export function getRegistrations() {

    const response =  fetch("registrations.json");

    if (response.status !== 200) {
        throw new Error("Failed to load registrations");
    }

    return response.json();
}