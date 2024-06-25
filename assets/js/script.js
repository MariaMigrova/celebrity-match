var errors = 0
var cardList = [
    "angelina-jolie", "arnold-schwarzenegger", "beyonce", 
    "billie-eilish", "eminem", "kim-kardashian", "lady-gaga", 
    "leonardo-dicaprio", "snoop-dogg", "the-rock"
]

var rows = 4;
var cols = 5;

var cardSet;
var board = [];

var card1Selected;
var card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
    document.getElementById("reset-button").addEventListener("click", resetGame);
}

/**
 * Function to shuffle the cards to random order
 */

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

/**
 * Function to start the game which will show the cards
 * the cards are first shown to the user for 0.5 second
 * after that they are hidden
 */

function startGame() {
    for (let r = 0; r < rows; r++ ) {
        let row = [];
        for (let c = 0; c < cols; c++ ) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = `assets/images/${cardImg}.jpg`;
            card.classList.add("card");
            card.addEventListener("click",selectCard);
            document.getElementById("game-area").append(card);
        }

        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 500);
}

/**
 * Function to hide all the cards to the user
 */ 

function hideCards() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "assets/images/cover.jpg";
        }
    }
}

/**
 * Function to select two cards by the user
 * When they are selected the image will be shown
 */

function selectCard() {
    if (this.src.includes("cover")) {
        if (!card1Selected) {
            card1Selected = this; 
            let coords = card1Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = `assets/images/${board[r][c]}.jpg`;
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;
            let coords = card2Selected.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = `assets/images/${board[r][c]}.jpg`;
            setTimeout(update,1000);

        }
    }
}

/**
 * Function to update the cards and score
 * if the cards are  not the same the error will rise by 1 and the cards will be hidden again
 * if the cards are the same they will stay turned
 */

function update() {
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "assets/images/cover.jpg";
        card2Selected.src = "assets/images/cover.jpg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
        giveMessage();
    } else {
        card1Selected.removeEventListener("click", selectCard);
        card2Selected.removeEventListener("click", selectCard);
        checkGameCompletion();
    }
    card1Selected = null;
    card2Selected = null;

}

/**
 * Function to give alert to the user after 5,10,15 and 20 mistakes
 */

function giveMessage() {
    if (errors == 5) {
        alert("Oops! That's 5 errors already. Keep calm and match on!");
    } if (errors == 10) {
        alert("Congratulations! You've made it to 10 errors. Embrace the chaos!");
    } if (errors == 15) {
        alert("15 errors? You're breaking records! Keep pushing those boundaries!");
    } if (errors == 20) {
        alert("Whoa, 20 errors! You're exploring new dimensions of memory challenge.");
    }

}

/**
 * Function to check if the game is complete
 * if it is complete user will get a message
 */ 

function checkGameCompletion() {
    var allMatched = true;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            if (card.src.includes("cover")) {
                allMatched = false;
                break;
            }
        }
        if (!allMatched) break;
    }

    if (allMatched) {
        alert(`Congratulations! You completed the game with ${errors} errors! :) \nYou can do better next time!`);
    }
}

function resetGame() {
    document.getElementById("game-area").innerHTML = "";
    cardSet = [];
    board = [];
    card1Selected = null;
    card2Selected = null;
    errors = 0;
    document.getElementById("errors").innerText = errors;
    shuffleCards();
    startGame();
}