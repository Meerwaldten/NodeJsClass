
//console.log(random(0, 10));

// Function
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

// Anonymous function
const randomAnonymousFunction = function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

// Arrow function - Kaldes også lambda? 
const randomArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) - min);
};

// Compact Arrow functions har en implicit "return" value. 
const randomArrowFunctionCompact = (min, max) => Math.floor(Math.random() * (max - min + 1) - min);

// Functions er "first class citizens" i Javascript???
// Callback Function - en function der "giver" et parameter som bliver kaldt/brugt igen senere.
// Functions passed as arguments that you call back. 
function genericActionPerformer(genericAction, genericName) {
    // do stuff?!
    return genericAction(genericName);
}

const subtract = (name) => `${name} is subtracting`;
const walk = (name) => `${name} is walking`;

//console.log(genericActionPerformer(walk, "Nicolas"));
//console.log(genericActionPerformer(subtract, "Tobias"));

console.log(genericActionPerformer((name) => `${name} is reading`, "Andrea"));

