export function renderUsers(users, container) {
  container.innerHTML = "";

  users.slice(0, 5).forEach((user) => {
    container.appendChild(createUserCard(user));
  });
}

export function clearUsers(container) {
  container.innerHTML = "";
}

export function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");
  userCard.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>City:</strong> ${user.address.city}</p>
  `;
  return userCard;
}