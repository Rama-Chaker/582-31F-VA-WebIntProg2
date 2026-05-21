import { USERS_URL } from "./config.js";
export function fetchUsers() {
  return fetch(USERS_URL).then(
    (response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    },
  );
}