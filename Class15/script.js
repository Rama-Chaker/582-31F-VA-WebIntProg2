// 1. create a custom element called:
//              <movie-card></movie-card>

// this element should accept these attributes:

//   1. title 2. year 3. rating

// render it on your html file.

// 2. refactor a basic custom element

class MovieCard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const year = this.getAttribute("year");
    const rating = this.getAttribute("rating");
       this.innerHTML = `
        <div>
            <h2>Movie Name: ${title} </h2>
            <p>Year: ${year} </p>
            <p>Rating: ${rating} </p>
        </div>
        `;
}
}

customElements.define("movie-card", MovieCard);

// refactor it so that connectedCallback only calls render()
// All HTML generation happens inside render()

// 3. create another GameCard custom element with the following:

//      1. connectedCallback()
//      2. getTitle()
//      3. getYear()
//      4. getRating()
//      4.b formats Rating  -- ratingFormatter() X/5
//      5. renderHeading()
//      6. renderBody()
//      5. render()

class GameCard extends HTMLElement {
  connectedCallback() {
    this.render();
  } 
  getTitle() {
    return this.getAttribute("title");
  }
  getYear() {
    return this.getAttribute("year");
  }
  getRating() {
    return this.getAttribute("rating");
  }
  ratingFormatter(rating) {
    return `${rating}/5`;
  }
  renderHeading() {
    return `<h2>Game Name: ${this.getTitle()} </h2>`;
  }
  renderBody() {
    const year = this.getYear();
    const rating = this.getRating();
    return `
      <p>Year: ${year} </p>
      <p>Rating: ${this.ratingFormatter(rating)} </p>
    `;
  }
  render() {
    const title = this.getTitle();
    const year = this.getYear();
    const rating = this.getRating();
       this.innerHTML = `
        <div>
            ${this.renderHeading()}
            ${this.renderBody()}
        </div>
        `;
}
}
customElements.define("game-card", GameCard);