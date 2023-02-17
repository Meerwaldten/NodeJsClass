"use strict" // Skal være i toppen af filen. Fanger problemer og/eller underlige kode ting.

/*
const public = true;
totalGlobalVariable = "Never ever do this";
var globalVariable = "Also never do this";
*/

/*
{
    let someValue = true;
    {
        let someValue = false;
    }
    console.log(someValue);
}
*/

/*
{
    var someValue = true;
    {
        var someValue = false;
    
    }
    console.log(someValue);
}
*/

/*
// Var er global og den bliver updated hele tiden og derefter bliver den loget.
for (var i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
*/

/*
// let er kun inde i scopet af {}, og derfor virker det ordentligt.
for (let i = 0; i <= 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
*/



//console.log(someValue);