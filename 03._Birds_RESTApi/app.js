const { query } = require("express");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ message: "Welcome to a website about birds"});
});


const generateId = (() => (id = 0, () => id++))();

const birds = []
const bird1 ={id: generateId(), name: "Sparrow"};
const bird2 ={id: generateId(), name: "Eagle"};
const bird3 ={id: generateId(), name: "Falcon"};
birds.push(bird1, bird2, bird3);




app.get("/birds", (req, res) => {
    res.send({ data: birds});
});

app.get("/birds/:id", (req, res) => {
    const bird = birds.find((bird) => bird.id === Number(req.params.id));
    res.send({data: bird});
});


app.post("/birds", (req, res) => {
    const birdName = req.body.name;
    const newBird = {id: generateId(), name: birdName};
    birds.push(newBird);
    res.send({ data: newBird});
})

app.put("/birds/:id", (req, res) => {
    const bird = birds.find((bird) => bird.id ===Number(req.params.id));
    const newBirdName = req.body.name;
    bird.name = newBirdName;
    res.json(bird);
})


app.patch("/birds/:id", (req, res) => {
    const bird = birds.find((bird) => bird.id ===Number(req.params.id));
    const newBirdName = req.body.name;
    bird.name = newBirdName;
    res.json(bird);
})

app.delete("/birds/:id", (req, res) => {
    const idToRemove = req.params.id;
    birds.splice(idToRemove, 1);
    res.json(birds);
})





app.listen(8080, () => {
    console.log("Server is running ong port", 8080)
});