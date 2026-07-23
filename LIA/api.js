const API_BASE_URL = "https://api.open-meteo.com/v1/forecast";
export function fetchTemperature(latitude, longitude) {
    const url = `${API_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    return fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            if (
                data &&
                data.current_weather &&
                data.current_weather.temperature !== undefined
            ) {
                return data.current_weather.temperature;
            } else {
                throw new Error("Malformed weather response");
            }
        });
}
