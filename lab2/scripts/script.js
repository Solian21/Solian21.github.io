console.log("running");

let correctNumber = 27;
let correctMessage = "Congrats";

let guessCount = 0;

let guessInput = document.querySelector("#guessInput");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

function displayMessage() {
    if (guessCount < 7) { 
        if (guessInput.value == correctNumber) { 
            guessResult.textContent = correctMessage;
            guessResult.style.color = "green";
        }
        else if (guessInput.value < correctNumber) { 
            guessResult.textContent = "Your guess was low";
            guessResult.style.color = "oragne";
        }
        else if (guessInput.value > correctNumber) {
            guessResult.textContent = "Your guess was high";
            guessResult.style.color = "orange";
        }
        else { 
            guessResult.textContent = "Enter a guess";
            guessResult.style.color = "black";
        }
        guessCount++;
    }
    else { 
        guessResult.textContent = "GAME OVER !";
        guessResult.style.color = "red"
    }
}

guessButton.addEventListener("click", displayMessage);