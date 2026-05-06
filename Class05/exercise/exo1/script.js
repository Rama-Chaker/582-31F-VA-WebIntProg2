
const fetchRequest = fetch("https://jsonplaceholder.typicode.com/users");
const loadUserBtn = document.getElementById("load-user-btn");
loadUserBtn.addEventListener("click", () => {
  status.textContent = "Loading..";
  output.innerHTML = "";
fetchRequest
  .then((response) => {
    console.log(response);
    return response.json();
  })
 .then((result) => {
    for(let i = 0; i < 5; i++) {
    console.log(result[i].name);
    output.innerHTML += `<ul><li>${result[i].username}</li></ul>`;
  } })
  .catch((error) => {
    console.log(error);
  });
});