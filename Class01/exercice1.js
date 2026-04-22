const name = "Jane";
const lastName = "Doe";


//1. 
//Write a return function that adds 
// name and lastname with space 
// and returns it to fullname
function getFullName(name, lastName){
  return  name + " " + lastName;

} 
const fullName = getFullName(name, lastName);
console.log(fullName);

//2. 
//write a function that greets the user calling 
//their fullName
function greetUser(fullName){
    console.log("Hello, " + fullName + "!");
}
greetUser(fullName);