export class ArtistCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._artist = null;
  }

  set artist(artistInstance) {
    this._artist = artistInstance;
    this.render();
  }

  get artist() {
    return this._artist;
  }

  render() {
    if (this._artist == null){
        return;
    } 
    const template = document.getElementById('artist-template');
    const clone = template.content.cloneNode(true);
    const cardElement = clone.querySelector('.card');
    clone.getElementById('card-name').textContent = this._artist.name;
    clone.getElementById('card-genre').textContent = this._artist.genre;
    clone.getElementById('card-stage').textContent = this._artist.stage;
   
      if (this._artist.headliner) {
      cardElement.style.border = "2px solid #ffc107";
      cardElement.style.backgroundColor = "#fffbeb";
      const badge = document.createElement('span');
      badge.textContent = "HEADLINER";
      badge.style.fontSize = "11px";
      badge.style.color = "#b45309";
      badge.style.fontWeight = "bold";
      badge.style.marginLeft = "8px";
      
       clone.getElementById('card-name').appendChild(badge);
  }
   clone.querySelector('.view-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('artist-selected', {
        detail: this._artist,
        bubbles: true,
        composed: true
      }));
    });

    this.shadowRoot.innerHTML = '';
    this.shadowRoot.appendChild(clone);
  }
}
customElements.define('artist-card', ArtistCard);
