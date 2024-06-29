let errors = 0;
const cardList = [
    "angelina-jolie", "arnold-schwarzenegger", "beyonce", 
    "billie-eilish", "eminem", "kim-kardashian", "lady-gaga", 
    "leonardo-dicaprio", "snoop-dogg", "the-rock"
];

const rows = 4;
const cols = 5;

let cardSet;
let board = [];

let card1Selected;
let card2Selected;
let username = "";

// Show the home modal on page load
window.onload = function() {
    const homeModal = document.getElementById("home");
    if (homeModal) {
        homeModal.classList.add("show");
    }
};

// Start the game
function startGame() {
    // Hide the home modal
    const homeModal = document.getElementById("home");
    if (homeModal) {
        homeModal.classList.remove("show");
        homeModal.classList.add("hidden");
    }

    // Capture username
    username = document.getElementById("username").value.trim();

    // Shuffle cards and initialize the game
    shuffleCards();
    initializeGame();
    document.getElementById("reset-button").addEventListener("click",resetGame);
}



/**
 * Initializes the game by displaying all cards for 0.5 seconds, 
 * then hides them. Creates card elements from `cardSet`, sets 
 * their IDs and event listeners, and appends them to the game area.
 */

function initializeGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let cardImg = cardSet.pop();

            // Create card element
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = `assets/images/${cardImg}.jpg`;
            card.classList.add("card");
            card.addEventListener("click", selectCard);

            // Append card to game area
            document.getElementById("game-area").appendChild(card);
            row.push(cardImg);
        }
        board.push(row);
    }

    setTimeout(hideCards, 500); // Hide cards after 0.5 seconds
}

/**
 * Mix the cards at the start of the game
 */
function shuffleCards() {
    cardSet = cardList.concat(cardList);
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
}

/**
 * Hide the cards to the user by showing the cover image of the cards
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
 * Handles card selection by the user. Shows the image of the selected card. 
 * Allows selecting up to two cards and triggers an update if both are selected.
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
 * Updates the selected cards and score based on user actions.
 * If cards don't match, increments error count, hides cards, and alerts user.
 * If cards match, keeps them turned over and checks if game is complete.
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
 * Gives alert to the user after 5,10,15,20 and 25 mistakes
 */

// Show the modal based on the id
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalMessage = modal.querySelector("p strong");
    modalMessage.innerHTML = modalMessage.innerHTML.replace("{username}", username);
    modal.style.opacity = 1;
    modal.style.zIndex = 1000;
}

// Hide the modal based on the id
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
}

// Update error count and show modals accordingly
function giveMessage() {
    if (errors === 5) {
        showModal('modal-5');
    } else if (errors === 10) {
        showModal('modal-10');
    } else if (errors === 15) {
        showModal('modal-15');
    } else if (errors === 20) {
        showModal('modal-20');
    } else if (errors === 25) {
        showModal('modal-25');
    }
}

function showHome() {
    modal.style.opacity = 1;
    modal.style.zIndex = 1000;
}

/**
 * Checks if all cards are matched to determine if the game is complete.
 * Displays a congratulatory message with error count if all cards are matched.
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
        document.getElementById('error-count').innerText = errors; 
        showModal('winner'); 
    }
}

/**
 * Resets the game by clearing the game area, resetting variables, shuffling cards,
 * and starting a new game.
 */

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


