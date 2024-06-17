var errors = 0
var cardList = [
    "Angelina-Jolie", "Arnold-Schwarzenegger", "Beyonce", 
    "Billie-Eilish", "Eminem", "Kim-Kardashian", "Lady-Gaga", 
    "Leonardo-DiCaprio", "Snoop-Dogg", "The-Rock"
]

var rows = 4;
var cols = 5;

var cardSet;
var board = [];

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    for (let r = 0; r < rows; r++ ) {
        let row = [];
        for (let c = 0; c < cols; c++ ) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpg";
            card.classList.add("card");
            document.getElementById("game-area").append(card);
        }
    }
}