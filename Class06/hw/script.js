const loadUserButton = document.getElementById("loadUser");
const clearUserButton = document.getElementById("clearUser");
const status = document.getElementById("status");
const userCard = document.getElementById("userCard");
const description = document.getElementById("description");
const title = document.getElementById("title");
const fetchUserData = "https://jsonplaceholder.typicode.com/users/1";
loadUserButton.addEventListener("click", () => {
    status.className = "alert alert-warning mt-3";
    status.textContent = "Loading user data...";
    //spinner for loading
    userCard.innerHTML = `
    <div class="spinner-border text-primary mt-3" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;
    fetch(fetchUserData)
        //parse  response
         .then((response) => {

        if (response == 404) {
            throw new Error("User not found");
        }

        return response.json();
    })

        .then((data) => {
            status.className = "alert alert-success mt-3";
            title.textContent = `User: ${data.name}`;
            description.textContent = `Email: ${data.email}, Phone: ${data.phone}`;
            status.textContent = "User data loaded successfully!";

            // Bootstrap card
            userCard.innerHTML = `
        <div class="card mt-3">
          <div class="card-body">
            <h3 class="card-title">${data.name}</h3>

            <p class="card-text">
              <strong>Email:</strong> ${data.email}
            </p>

            <p class="card-text">
              <strong>Phone:</strong> ${data.phone}
            </p>

            <p class="card-text">
              <strong>City:</strong> ${data.address.city}
            </p>

            <p class="card-text">
              <strong>Company:</strong> ${data.company.name}
            </p>

            <p class="card-text">
              <strong>Website:</strong> ${data.website}
            </p>
          </div>
        </div>
      `;
        })
        .catch((error) => {
            console.error("Error fetching user data:", error);

            status.className = "alert alert-danger mt-3";
            status.textContent = "Failed to load user data.";

            userCard.innerHTML = "";
        });
});

// Clear button
clearUserButton.addEventListener("click", () => {
    userCard.innerHTML = "";

    status.className = "alert alert-info mt-3";
    status.textContent = "Ready...";
});
