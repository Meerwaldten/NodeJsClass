import Sentiment from "sentiment";
const sentiment = new Sentiment();

async function getJoke() {
    const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
    const response = await fetch(url);
    const result = await response.json();
    
    const jokeToAnalyze = result.joke || `${result.setup} ${result.delivery}`;
    const { score } = sentiment.analyze(jokeToAnalyze);

    if(score < 0){
        return await getJoke();
    }else {
        return result;
    }
 }

 
export default {
    getJoke
};