const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to a website about birds"});
});


let birds = ["Sparrow", "Eagle", "Falcon"]
app.get("/birds", (req, res) => {
    res.send({ 
        message: 
        `
        First bird is: ${birds[0]} 
        Second bird is: ${birds[1]}
        Third bird is: ${birds[2]}`
    });
});

app.get("/birds/:id", (req, res) => {
    let id = req.params['id'];
    res.send({
        message: 
        `You have chosen: ${birds[id]}`
    })
})















app.listen(8080);