//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
// this is going to be my variable to keep track of the nuber of games played
let number_of_games = 0;
let number_of_games_WON = 0;
let number_of_games_LOST = 0;
let scoreboard = document.querySelector("#scoreBoard");

initializeGame();
updateScoreBoard();

function updateScoreBoard() {
    scoreboard.textContent = "Wins: " + number_of_games_WON + " | Losses: " + number_of_games_LOST;
}

function initializeGame() {
    attempts_left = document.querySelector("#attempts");
    attempts_left.textContent = "Attempts Left: 7";


    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log("randomNumber: " + randomNumber);

    //hiding the Reset button
    document.querySelector("#resetBtn").style.display = "none";
    //making sure to add in guess button
    document.querySelector("#guessBtn").style.display = "inline"

    //adding focus to textbox
    document.querySelector("#playerGuess").focus();

    let playerGuess = document.querySelector("#playerGuess");
    playerGuess.focus();
    playerGuess.value ="";

    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";

    document.querySelector("#guesses").textContent = "";

}

function checkGuess() {
    let feedback = document.querySelector("#feedback");
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.textContent = "Enter a number between 1 and 99";
        feedback.style.color = "red";
        return;
    }
    attempts++;
    console.log("Attempts: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        feedback.textContent = "You guessed it! You WON!";
        feedback.style.color = "darkgreen";
        number_of_games_WON++;
        updateScoreBoard();
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " | ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost! | Corect Answer: " + randomNumber;
            feedback.style.color = "red";
            number_of_games_LOST++;
            updateScoreBoard();
            gameOver();
        } else if (guess > randomNumber) {
            feedback.textContent = "Guess was high";
            
            attempts_left.textContent = "Attempts Left: " + (7 - attempts);
        } else {
            
            attempts_left.textContent = "Attempts Left: " + (7 - attempts);
            feedback.textContent = "Guess was low";
        }
    }
}

function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    attempts_left.display = "none"
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
    attempts = 0;
    
}