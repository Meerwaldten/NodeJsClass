// Kan også sættes op således, men så kan du ikke bruge app.use(express.json())
//const app = require("express")();

 
//Det er det samme som ovenstående, men hvad fanden er bedst?
const express = require("express");
const app = express();

app.use(express.json()); // Tillader at bruge json ting til req.body!

// HTTP method - 8000 ville være HTTPS.
// 8080 viser at den ikke er sikker (HTTP) og at den er til udvikling.
// Endpoint ("/") -  Resten er en callback function
app.get("/", (req, res) => {
    res.send({ message: "Our first route"});
});

let bicycleSpins = 0;
app.get("/spinthebicycle", (req, res) => {
    bicycleSpins += 1;
    res.send({ message: `The bicycle have spun: ${bicycleSpins} times.`});
});

let timesKicked = 0;
app.get("/kickthedinosaur", (req, res) => {
    timesKicked += 1;
    res.send({ message: `You kicked the dinosaur! The dinosaur have been kicked ${timesKicked} times. Dinosaur says 'ow ow ow'`});
});

app.get("/about", (req, res) => {
    res.send(`
        <h1>About</h1>
        <h2>This is a test</h2>
        <h3>This is my about page</h3>
    `);
});

// /bat?adjective=spooky
app.get("/bat", (req, res) => {
    //console.log(req.query);
    res.send({ message: `The bat is ${req.query.adjective}` });
});


// /bottle/large
app.get("/bottle/:bottleSize", (req, res) => {
    //console.log(req.params)
    res.send({ bottleSize: req.params.bottleSize });
});


app.post("/package", (req, res) => {
    console.log(req.body);
    res.send({ message: req.body });    
});


app.get("/time", (req, res) => {
    res.send({ 
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()
    });
});

app.get("/time/day", (req, res) => {
    res.send({ data: undefined });
});

app.get("/time/month", (req, res) => {

    res.send({ data: undefined });
});


app.listen(8080);