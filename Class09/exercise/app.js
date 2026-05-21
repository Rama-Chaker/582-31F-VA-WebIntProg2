import { fetchUsers } from "./api.js";
import { renderUsers } from "./ui.js";

const loadUsersBtn = document.getElementById("load-users-btn");
const status = document.getElementById("status");
const usersContainer = document.getElementById("users-container");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  usersContainer.innerHTML = "";
  status.textContent = "User cards cleared.";
});

loadUsersBtn.addEventListener("click", () => {
  status.textContent = "Loading users...";

  fetchUsers()
    .then((users) => {
      renderUsers(users, usersContainer);
      status.textContent = "Users loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load users: ${error.message}`;
    });
});