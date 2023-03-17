import fs, { read } from "fs";
import getJoke from "./jokes.js";
import escape from "escape-html";

function renderPage(page, config={}) {

    const navbar = fs.readFileSync("public/components/navbar/navbar.html").toString()
    .replace(("$TAB_TITLE"), config.tabTitle || "Upper")
    .replace("$CSS_LINK", config.cssLink || "");

    const footer = fs.readFileSync("public/components/footer/footer.html").toString()
    .replace(("$FOOTER_YEAR"), `© ${new Date().getFullYear()}`);

    return navbar + page + footer;
}

function readPage(pagePath) {
    return fs.readFileSync(pagePath).toString();
}

// Doesnt work yet
async function renderJokePage(jokes) {
    const path = "./public/pages/jokes/jokes.html";
    const jokePage = readPage(path);
    const joke = await getJoke();
    if(joke.joke){
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", `<h3>${joke.joke}</h3>`);
    }else if (joke.setup && joke.delivery){
        const jokeHtmlContent = `
        <h3>${joke.setup}</h3>
        <h3>${joke.delivery}</h3>
        `
        jokePage = jokePage.repeat("$JOKE_HTML_CONTENT", )
    }else{
        jokePage = jokePage.replace("$JOKE_HTML_CONTENT", "No jokes for you!");
    }

    const constructedPage = renderPage(jokePage, {
        tabTitle: "Jokes | Best jokes on the web",
        cssLink: `<link rel="stylesheet" href="/pages/jokes/jokes.css">`});

        return constructedPage;
}



export default {
    renderPage, 
    readPage,
    renderJokePage
}

