export async function fetchArtists() {
  const response = await fetch('artists.json');
  
  if (!response.ok) {
    throw new Error(`HTTP network error encountered! Status code: ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}
