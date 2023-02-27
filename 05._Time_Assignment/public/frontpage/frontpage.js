/*
There are some obvious flaws in the design. Including what happens when we pass the appointed date.
I've also just reused the original date for the daily timer, with having removed days from it since the time of day is the same.
Excuse the bad design on my flu-hit brain over the weekends.
*/

const weeklyCountDownDate = new Date("Mar 1, 2023 04:00:00").getTime();

var myfunc = setInterval(function() {}, 1000)

var now = new Date().getTime();
var timeleft = weeklyCountDownDate - now;
    
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


document.getElementById("weeklytimer").innerText = "The next weekly reset is in: " + days + " days, " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds.";
document.getElementById("dailytimer").innerText = "The next daily reset is in: " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds.";


