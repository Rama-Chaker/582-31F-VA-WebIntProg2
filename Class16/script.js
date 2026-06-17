/**
 * Create a custom element called:
 *  <movie-box></movie-box>
 *
 * Requirements:
 *
 * The element must:
 *
 *  use Shadow DOM
 *  accept attributes:
 *      title (h2)
 *      year (p)
 *      director (p)
 *      poster (img)
 *
 * render a styled card inside the shadow root
 *
 * use helper methods
 *
 * example HTML:
 * <movie-box title="MOVIE_TITEL" year="0000" director="DIRECTOR_NAME"
 *  poster-url="POSTER_URL"></movie-box>
 *
 */

class MovieBox extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    getTitle() {
        return this.getAttribute('title');
    }
    getYear() {
        return this.getAttribute('year');
    }
    getDirector() {
        return this.getAttribute('director');
    }
    getPosterUrl() {
        return this.getAttribute('poster-url');
    }
       
       renderStyle() {
        return `
            <style>
                .movie-card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    max-width: 300px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                }                
                    .movie-poster {
                    width: 100%;
                    height: auto;
                    border-radius: 8px;
                }
                .movie-title {
                    font-size: 1.5em;
                    font-weight: bold;
                    margin-bottom: 8px;
                }
                .movie-info {
                    font-size: 1em;
                    margin-bottom: 8px;
                }
                img {
                    max-width: 400px;
                    max-height: 400px;
                    border-radius: 4px;
                }
            </style>
          
        `;
    }
    render() {
     const shadow = this.attachShadow({ mode: 'open' });
     shadow.innerHTML = `
        ${this.renderStyle()}
        <div class="card">
            <img src="${this.getPosterUrl()}" alt="${this.getTitle()}" class="movie-poster" />
            <h2 class="movie-title">${this.getTitle()}</h2>
            <p class="movie-info">Year: ${this.getYear()}</p>
            <p class="movie-info">Director: ${this.getDirector()}</p>
        </div>
     `;
    }
}
customElements.define('movie-box', MovieBox);