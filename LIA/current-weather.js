import { fetchTemperature } from './api.js';

const TEMP_UNIT_SYMBOL = '°C';

class CurrentWeather extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._temperature = null;
    this._statusMessage = 'Loading weather...';
  }

  static get observedAttributes() {
    return ['latitude', 'longitude'];
  }

  connectedCallback() {
    this.render();
    this.loadCoordinatesAndData();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.loadCoordinatesAndData();
    }
  }

  loadCoordinatesAndData() {
    const latAttr = this.getAttribute('latitude');
    const lonAttr = this.getAttribute('longitude');

    // Check if attributes exist on the HTML tag
    if (latAttr && lonAttr) {
      this.getWeatherData(latAttr, lonAttr);
    } else if (navigator.geolocation) {
      // Basic browser geolocation fallback
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          this.getWeatherData(lat, lon);
        },
        (error) => {
          this._statusMessage = 'Could not get location';
          this.render();
        }
      );
    } else {
      this._statusMessage = 'Geolocation not supported';
      this.render();
    }
  }

  getWeatherData(lat, lon) {
    this._statusMessage = 'Fetching weather data...';
    this._temperature = null;
    this.render();

    fetchTemperature(lat, lon)
      .then((temp) => {
        this._temperature = temp;
        this._statusMessage = null;
        this.render();
      })
      .catch((error) => {
        this._statusMessage = 'Failed to load weather.';
        this._temperature = null;
        this.render();
      });
  }

  render() {
    let contentHtml = '';

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

customElements.define('current-weather', CurrentWeather);