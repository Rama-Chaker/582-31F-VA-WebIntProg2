
const fetchRequest = fetch("https://jsonplaceholder.typicode.com/posts/1");
const loadUserBtn = document.getElementById("load-user-btn");
const output = document.getElementById("output"); 
const status = document.getElementById("status");

loadUserBtn.addEventListener("click", () => {
  status.textContent = "Loading...";
  output.innerHTML = "";
  setTimeout(() => {
   fetchRequest
     .then((response) => {
       if (response.status === 200) {
         console.log("Data fetched successfully");
         return response.json();
       }
       else {
         console.log("Failed To fetch data");
       }
    })
    .then((result) => {
      output.innerHTML += `<ul><li>Title: ${result.title}</li><li>Body:${result.body}</li></ul>`;
      status.textContent = "Data loaded successfully";
    })
    .catch((error) => {
      console.log(error);
      status.textContent = "Error loading data";
    });
  }, 2000);
});