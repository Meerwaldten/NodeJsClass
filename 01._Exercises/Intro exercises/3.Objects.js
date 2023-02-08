// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(myObj);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const myNameAndAge = {age : 28, name : "Mikkel"};

console.log(myNameAndAge);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

stackOverflow.isAllowed = true;

// make a rule called isAllowed and let the value be true

console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
thisSong.about = "Just a tribute";

console.log(thisSong);

// --------------------------------------


