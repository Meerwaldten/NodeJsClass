import express from "express";
const app = express();

import renderPage from "./util/templateEngine.js";

app.use(express.static("public"));

//import {getJoke} from "./util/jokes.js";;

//Paths 

const frontpagePath = "./public/pages/frontpage/frontpage.html";
const jokesPath = "public/pages/jokes/jokes.html";
const IRLQuestsPath = "public/pages/IRLQuests/IRLQuests.html";

// Constructed Pages
const frontpagePage = renderPage(frontpagePath, {
    tabTitle: "Upper | Welcome"
});
const jokesPage = renderPage(jokesPath, {
    tabTitle: "Jokes | Best jokes on the web",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
});
const IRLQuestsPage = renderPage(IRLQuestsPath, {
    tabTitle: "IRLQuests | New Quests for you!"
});




app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/jokes", (req, res) => {
    res.send(jokesPage);
});









const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});
