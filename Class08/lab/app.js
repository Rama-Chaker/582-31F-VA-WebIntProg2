const loadUsersBtn = document.getElementById("load-users-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const userCards = document.getElementById("userCards");

loadUsersBtn.addEventListener("click", () => {
    status.textContent = "Loading users...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return response.json();
        })

        .then((users) => {
            userCards.innerHTML = "";

            // show only first 5 users
            for (let i = 0; i < 5; i++) {
                const user = users[i];

                const userCard = document.createElement("div");

                // Bootstrap column classes
                userCard.classList.add("col-md-6", "col-lg-4", "mb-4");

                userCard.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">

                            <h3 class="card-title">${user.name}</h3>

                            <p><strong>Email:</strong> ${user.email}</p>

                            <p><strong>Phone:</strong> ${user.phone}</p>

                            <p><strong>City:</strong> ${user.address.city}</p>

                            <p><strong>Company:</strong> ${user.company.name}</p>

                            <button class="btn btn-primary load-posts-btn">
                                Load Posts
                                </button>

                            <div class="posts-container mt-3"></div>

                        </div>
                    </div>
                `;

                userCards.appendChild(userCard);
                const loadPostsBtn = userCard.querySelector(".load-posts-btn");

                const postsContainer =
                    userCard.querySelector(".posts-container");

                loadPostsBtn.addEventListener("click", () => {
                    postsContainer.innerHTML = "Loading posts...";

                    fetch("https://jsonplaceholder.typicode.com/posts")
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(
                                    `HTTP Error: ${response.status}`,
                                );
                            }

                            return response.json();
                        })

                        .then((posts) => {
                            postsContainer.innerHTML = "";

                            let count = 0;

                            posts.forEach((post) => {
                                // only posts for this user
                                if (post.userId === user.id && count < 3) {
                                    postsContainer.innerHTML += `
                        <div class="border rounded p-2 mb-2">
                            <h6>Title : ${post.title}</h6>
                            <p>Body: ${post.body}</p>
                        </div>
                    `;

                                    count++;
                                }
                            });
                        })

                        .catch((error) => {
                            postsContainer.innerHTML = `Failed to load posts: ${error.message}`;
                        });
                });
            }

            status.textContent = "Users loaded successfully";
        })

        .catch((error) => {
            status.textContent = `Failed to load users: ${error.message}`;
        });
});

