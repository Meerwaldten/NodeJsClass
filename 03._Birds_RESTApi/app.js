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
    res.send({ 
        message: 
        `First bird is: ${birds[0].name} 
        Second bird is: ${birds[1].name}
        Third bird is: ${birds[2].name}`
    });
});

app.get("/birds/:id", (req, res) => {
    let id = req.params['id'];
    res.send({
        message: 
        `You have chosen: ${birds[id].name}`
    })
})





app.listen(8080);