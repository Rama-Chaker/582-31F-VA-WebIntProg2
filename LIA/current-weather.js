import { fetchTemperature } from "./api.js";

const TEMP_UNIT_SYMBOL = "°C";

class CurrentWeather extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this._temperature = null;
        this._statusMessage = "Loading weather...";
    }

    static get observedAttributes() {
        return ["latitude", "longitude"];
    }

    connectedCallback() {
        this.render(); 
        this.loadCoordinatesAndData();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (
            oldValue !== newValue &&
            this.hasAttribute("latitude") &&
            this.hasAttribute("longitude")
        ) {
            this.loadCoordinatesAndData();
        }
    }

    loadCoordinatesAndData() {
        const latAttr = this.getAttribute("latitude");
        const lonAttr = this.getAttribute("longitude");

        // Case 1: Manual attributes provided
        if (latAttr && lonAttr) {
            this.getWeatherData(latAttr, lonAttr);
            return;
        }

        // Case 2: Default to browser geolocation
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLon = position.coords.longitude;
                    this.getWeatherData(userLat, userLon);
                },
                (error) => {
                    this._statusMessage = `Geolocation error: ${error.message}`;
                    this._temperature = null;
                    this.render();
                },
            );
        } else {
            this._statusMessage =
                "Geolocation is not supported by your browser.";
            this._temperature = null;
            this.render();
        }
    }

    getWeatherData(lat, lon) {
        this._statusMessage = "Fetching weather data...";
        this._temperature = null;
        this.render();

        fetchTemperature(lat, lon)
            .then((temp) => {
                this._temperature = temp;
                this._statusMessage = null;
                this.render();
            })
            .catch((error) => {
                this._statusMessage = "Failed to load weather data.";
                this._temperature = null;
                this.render();
                console.error("Weather Component Error:", error);
            });
    }
    render() {
        let contentHtml = "";

        if (this._temperature !== null) {
            contentHtml = `<div class="display-6 fw-bold text-primary">${this._temperature}${TEMP_UNIT_SYMBOL}</div>`;
        } else {
            contentHtml = `<div class="text-secondary small">${this._statusMessage}</div>`;
        }

        this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
      <div class="card text-center p-3 bg-white border shadow-sm">
        ${contentHtml}
      </div>
    `;
    }
}

customElements.define("current-weather", CurrentWeather);
