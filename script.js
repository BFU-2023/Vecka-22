// I den här övningen skall ni skapa en lista med objekt. Varje objekt skall innehålla ett skämt. Minst tre skämt.

let jokes = [
    {
        joke: "Did you hear that David lost his ID in prague? Now we just have to call him Dav."
    },
    {
        joke: "What do you get when you drop a piano down a mine shaft? A flat miner."
    },
    {
        joke: "What did one eye say to the other eye? Between you and me man, something smells."
    },
    {
        joke: "What do you get when you drop a piano down a mine shaft? A flat miner."
    },
    {
        joke: "What did one eye say to the other eye? Between you and me man, something smells."
    },
    {
        joke: "What do you get when you drop a piano down a mine shaft? A flat miner."
    },
    {
        joke: "What did one eye say to the other eye? Between you and me man, something smells."
    },
    {
        joke: "What do you get when you drop a piano down a mine shaft? A flat miner."
    },
    {
        joke: "What did one eye say to the other eye? Between you and me man, something smells."
    }
];

// Ni skall sedan loopa över skämten och för varje skämt skall ni lägga till en ny egenskap (funny) och ge den ett värde i form av en boolean.
for (let i = 0; i < jokes.length; i++) {
    jokes[i].id = i;
    console.log(jokes[i]);
    if (jokes[i].joke === "What do you get when you drop a piano down a mine shaft? A flat miner.") {
        jokes[i].isFunny = true;
    }
    else {
        jokes[i].isFunny = false;
    }
}

// Skriv ut skämten en och en i konsollen
// få ut dem i html:en
let body = document.querySelector('body');

for (let joke of jokes) {
    // skapa ett nytt element för skämtet vi är på i loopen
    let newJokeElem = document.createElement('p');
    // <p>skämtet</p>
    // lägga in texten för skämtet i det nya elementet
    newJokeElem.innerText = joke.joke;
    // lägga till barn i body i html
    body.appendChild(newJokeElem);
}

// Använd minst två av loop-typerna (for-in, for-of, for, while)