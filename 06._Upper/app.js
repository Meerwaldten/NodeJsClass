import express from "express";
const app = express();

import templateEngine from "./util/templateEngine.js";

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));


// "Paths" -> Constructed page

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Upper | Welcome"
});


const IRLQuests = templateEngine.readPage("./public/pages/IRLQuests/IRLQuests.html");
const IRLQuestsPage = templateEngine.renderPage(IRLQuests, {
    tabTitle: "IRLQuests | New Quests for you!",
    cssLink: `<link rel="stylesheet" href="/pages/IRLQuests/IRLQuests.css">`
});

const contact = templateEngine.readPage("./public/pages/contact/contact.html");
const contactPage = templateEngine.renderPage(contact, {
    tabTitle: "Contact page"
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/IRLQuests", (req, res) => {
    res.send(IRLQuestsPage);
});

app.get("/contact", (req, res) => {
    res.send(contactPage);
})

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

/* API */

app.post("/api/contact", (req, res) => {
    console.log(req.body);

    res.send(req.body);
    //res.redirect("/");
})



if(process.env.ENV === "DEV"){

}

console.log(process.env.PORT);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});
