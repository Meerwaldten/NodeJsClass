import express from "express";
const app = express();


function houseButler(req, res, next){
    console.log("This way..");
    next();
};

app.use("/room", houseButler); // Hvis vi sletter "/room", så bruger vi houseButler middlewaren på alting.

import roomRouter from "./routers/roomRouter.js";
app.use(roomRouter);


function guard(req, res, next) {
    if (req.query.name === "Anders"){
        req.myName = "Anders";
        next();
    } else {
    res.send({ message: "You are not allowed in"})
    }
};

app.get("/frontdoor", guard, (req, res, next) => {
    res.send({ message: `Please enter, ${req.myName}`});
});


app.get("*", (req, res) => { // Fallback route, "*" gør vi rammer alt - Wildcard? ellers så app.All()!
    res.send("<h1>404 - Not found </h1>");
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;
    };
    console.log("Server is running on port:", PORT);
});