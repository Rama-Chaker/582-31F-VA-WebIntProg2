export function fetchArtists() {
  return fetch('artists.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status code: ${response.status}`);
      }
      return response.json(); 
    });
}
