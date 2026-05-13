const loadPostsBtn = document.getElementById("load-posts-btn");
const status = document.getElementById("status");
const postList = document.getElementById("posts-list");

// addEventListener for btn
loadPostsBtn.addEventListener("click", () => {
    status.textContent = "Loading posts...";

    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        })
        .then((post) => {
            postList.innerHTML = `
            <h2>Post Information</h2>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
            `;
            status.textContent = "Post loaded successfully";
        })
        .catch((error) => {
            status.textContent = `Failed to load post: ${error.message}`;
        });
});
