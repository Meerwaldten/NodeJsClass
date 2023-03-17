import express from "express";
const app = express();

import templateEngine from "./util/templateEngine.js";

app.use(express.static("public"));


// "Paths" -> Constructed page

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | Welcome"
});


const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle: "IRLQuests | New Quests for you!"
});




app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

import getJoke from "./util/jokes.js";

app.get("/jokes", async (req, res) => {
    /*
    const jokesPage = templateEngine.renderJokePage();
    res.send(templateEngine.renderJokePage());
    */
    const joke = await getJoke();  
    const jokes = templateEngine.readPage("./public/pages/jokes/jokes.html")
    .replace("$JOKE", JSON.stringify(joke));
    const jokesPage = templateEngine.renderPage(jokes, {
    tabTitle: "Jokes | Best jokes on the web",
    cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`
    });
    res.send(jokesPage);

});









const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});
