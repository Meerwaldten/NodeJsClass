// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 

const secondLetterInArray = letters[1];

console.log(secondLetterInArray)


// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const friend1 = "Mark";
const friend2 = "Peter";
const friend3 = "Rasmus";

friends.push(friend1, friend2, friend3);

console.log(friends);

// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

const find1729 = significantMathNumbers.indexOf(1729, 0);

console.log(find1729);





// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger", "soda", "pizza");

console.log(diet);


// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 


diet.pop();
console.log(diet);


// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

const dinnerTray = [...diet];

console.log(dinnerTray);

// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b


for (let index = 0; index < lettersExpanded.length; index++) {
    const element = lettersExpanded[index];
    if(index % 2 == 1){
        console.log(element)
    }   
}

// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 6 || element < 0){
        console.log(element);
    }else {
        discardedNumbers.push(element);
    };
}

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

// --------------------------------------


