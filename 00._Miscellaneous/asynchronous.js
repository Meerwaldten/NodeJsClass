/* 
Why: Because Javascript is single-threaded.

Examples: 
Fetching over a network
Many / Heavy calculations
Reading / Writing to files
Cryptographic functions
Databases 
*/

/* Solution 1: Callbacks (cb)
Con: Callback hell, Pyramid of doom
*/

/* Solution 2: Promises (Syntaxi sugar that uses callbacks)
Two states: 
- pending (Ongoing)
- fulfilled (Done)
    - rejected (Failure)
    - resolved (Success)
*/

/* Solution 3: Async/Await (Syntaxi sugar that uses promises)

*/

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        try{ 
            throw Error;
            resolve("Woooop");
        } catch {
            reject("Naaaaay")
        }

    }, 3000)
})
.then(successMessage => console.log("Success message:", successMessage))
.catch(errorMessage => console.log("Error message:", errorMessage));
*/

/*
function celebrate(){
    new Promise((resolve, reject) => {
        try {
            resolve("Ceeelebrate good times cooome on!");
        } catch {
            reject("No time to celebrate, ruuun!");
        }
    })
    .then(successMessage => console.log("Success: ", successMessage))
    .catch(errorMessage => console.log("Failure:", errorMessage));
}
*/

function celebrate(name) {
    return new Promise((resolve, reject) => {
        if(name){
            resolve(`Hvad så der ${name}`);
        } else {
            reject("Smut hjem")
        }
    });
}


celebrate("Blommen")
.then(celebrationMessage => console.log(celebrationMessage))
.catch(errorMessage => console.log(errorMessage));



function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("Good");
            } catch {
                reject("Bad");
            }
        }, 3000)
    })
}

/*
somethingGoodSomethingBad()
.then(console.log)
.catch(console.log);
*/

//IIFE - Meget smart, invoked med det samme i stedet for at lave en function og så kalde den. 
(async function getGoodOrBadMessage(){
    const somethingGoodSomethingBadMessage = await somethingGoodSomethingBad();
    const celebrationMessage = await celebrate("ZAAAANDO");
    console.log(somethingGoodSomethingBadMessage, celebrationMessage);
})();