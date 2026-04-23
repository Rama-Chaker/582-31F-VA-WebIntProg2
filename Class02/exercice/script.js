//load in the DOM elements
//nameinput, greetbutton, output
const nameInput = document.getElementById("name-input");
const greetButton = document.getElementById("greet-button");
const output = document.getElementById("output");

//add an event listener to the button
//continuation function for it should be:
//1. take the input value and trimit
//2. (condition)
//validate that the input is not an empty string
//if it is --> update output text to : 
//"Please enter something"
//3. after 1000ms update the output with:
//Hello, Input Value!
greetButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name === "") {
        output.textContent = "Please enter something";
    } else {
        setTimeout(() => {
            output.textContent = `Hello, ${name}!`;
        }, 1000);
    }
});
