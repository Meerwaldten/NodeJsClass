const { query } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to a website about birds"});
});


const birds = []
const bird1 ={id: 1, name: "Sparrow"};
const bird2 ={id: 2, name: "Eagle"};
const bird3 ={id: 3, name: "Falcon"};
birds.push(bird1, bird2, bird3);


app.get("/birds", (req, res) => {
    res.send({ data: birds});
});

app.get("/birds/:id", (req, res) => {
    //const id = Number(req.params.id); 
    //const bird = birds.find((bird) => bird.id === id);
    //res.json(bird);
    const bird = birds.find((bird) => bird.id === Number(req.params.id));
    res.send({data: bird});
});


app.post("/birds", (req, res) => {

})

app.put("/birds/:id", (req, res) => {

})


app.patch("/birds/:id", (req, res) => {

})

app.delete("/birds/:id", (req, res) => {

})






app.listen(8080, () => {
    console.log("Server is running ong port", 8080)
});