/*Exercise 1*/
const jsonText = '{"title":"Web Interface Programming 2","credits":3,"active":true}';
const obj = JSON.parse(jsonText);
console.log("Object:", obj);
console.log("Title:", obj.title);
console.log("Credits:", obj.credits);
console.log("***** END OF EXERCISE 1 *****");

/*Exercise 2*/
const course = {
  title: "Advanced Programming",
  credits: 3,
  active: true
};

const txt = '{"title":"Advanced Programming","credits":3,"active":true}';
console.log("JSON Text:", txt);
console.log("Type of JSON Text:", typeof txt);
console.log("***** END OF EXERCISE 2 *****");

/*Exercise 3*/
const objToJson = JSON.stringify(course,null,2);
console.log("Object as JSON:", objToJson);
console.log("***** END OF EXERCISE 3 *****");
