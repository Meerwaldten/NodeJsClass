const { response } = require("express");
const express = require("express");
const app = express();

app.use(express.static("public")); //Kaldes at "serving static files"
const { getTanks, addTank } = require("./util/tanks.js")

const tankRouter = require("./routers/tankRouter.js");
const guardRouter = require("./routers/guardRouter.js");
const visitorRouter = require("./routers/visitorRouter.js");
app.use(tankRouter);
app.use(guardRouter);
app.use(visitorRouter);

// Imports ^

let visitorCount = 0;

// Pages

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/tanks", (req, res) => {
    res.sendFile(__dirname + "/public/tanks/tanks.html");
});


app.get("/visitors", (req, res) => {
    res.sendFile(__dirname + "/public/visitors/visitors.html");
});

app.get("/guards", (req, res) => {
    res.sendFile(__dirname + "/public/guards/guards.html");
});

app.get("/proxy", (req, res) => {
    fetch("https://www.google.com")
    .then(response => response.text())
    .then(result => res.send(result));
})


// APIs
/*
app.get("/api/tanks", (req, res) => {
    res.send({ data: getTanks()});
});

app.get("/api/visitors", (req, res) => {
    res.send({ data: visitorCount })
});

app.put("/api/visitors", (req, res) => {
    res.send({ data: ++visitorCount })
});

app.get("/api/guards/", (req, res) => {
    if (req.query.passport === "theskyisblue"){
        return res.redirect("/api/tanks");
    }
    res.send({ message: "Wrong passport."});
});
*/



const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;
    };
    console.log("Server is running on port:", PORT);
});