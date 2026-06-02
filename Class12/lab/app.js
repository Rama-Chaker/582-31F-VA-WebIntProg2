const loadPostBtn = document.getElementById("load-post-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const output = document.getElementById("output");
const postIdInput = document.getElementById("post-id-input");

function validatePostId(id) {
  if (isNaN(id) || id <= 0) {
    throw new Error("Post ID must be a positive number");
  }
}

loadPostBtn.addEventListener("click", () => {
  const postId = parseInt(postIdInput.value, 10);

  try {
    validatePostId(postId);
  } catch (error) {
    status.textContent = error.message;
    return; // stop before fetch
  }

  status.textContent = "Loading post...";
  output.innerHTML = "";

  loadPostBtn.disabled = true;

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      return response.json();
    })
    .then((post) => {
      output.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      status.textContent = "Post loaded successfully.";
    })
    .catch((error) => {
      status.textContent = `Failed to load post: ${error.message}`;
    })
    .finally(() => {
      console.log("Request finished");
      loadPostBtn.disabled = false;
    });
});

clearBtn.addEventListener("click", () => {
  output.innerHTML = "";
  status.textContent = "Click the button to load a post.";
  postIdInput.value = "";
});

try {
  JSON.parse("{ bad json }");
} catch (error) {
  console.log("JSON Error:", error.message);
}

/*
1.Try Catch allows you to handle errors that occur in synchronous code without making the program fails.
2. It creates and throws an error object that can be caught and handled elsewhere.
3. Checking response.ok lets us detect these errors and handle them.
4. try/catch handles synchronous errors.
.catch() handles asynchronous errors from Promises.
5. finally runs whether the request succeeds or fails. It's useful for cleanup tasks such as:

re-enabling buttons
hiding loading indicators
logging completion



*/