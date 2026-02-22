document.querySelector("#resetGame").style.display = "none";
const images = [
    "./img/1.png",
    "./img/2.png",
    "./img/3.png",
    "./img/4.png",
    "./img/5.png",
    "./img/5.png",
    "./img/5.png"
]

let score = 0;
let current_balance = 50;

let bet = document.querySelector("#bet");

let current_balance_text = document.querySelector("#balance");
current_balance_text.textContent = `$${current_balance}`;
document.querySelector("#bank-div").style.backgroundColor = "green";



document.querySelector("#rolling-btn").addEventListener("click", function () {
    let reel1_index = Math.floor(Math.random() * images.length);
    let reel2_index = Math.floor(Math.random() * images.length);
    let reel3_index = Math.floor(Math.random() * images.length);
    roll(reel1_index, reel2_index, reel3_index);
    console.log(`Current Bet: ${bet.value}`)
    calculateScore(reel1_index, reel2_index, reel3_index);
    console.log(`Current Score ${score}`);

    current_balance += score;

    if (score < 0) {
        current_balance_text.textContent = `$${current_balance}`;
        document.querySelector("#bank-div").style.backgroundColor = "red"
    } else {
        current_balance_text.textContent = `$${current_balance}`;
        document.querySelector("#bank-div").style.backgroundColor = "green";
    }

    if (current_balance <= 0) {
        document.querySelector("#slot_with_btn").style.display = "none";
        let gmover = document.querySelector("#gameover");
        gmover.textContent = "GAME OVER!";
        gmover.style.fontSize = "2em";
        document.querySelector("#resetGame").style.display = "inline";
    }
});

document.querySelector("#resetGame").addEventListener("click", function () {
    document.querySelector("#slot_with_btn").style.display = "flex";
    score = 0;
    current_balance = 50;
    current_balance_text.textContent = `$${current_balance}`;
    document.querySelector("#bank-div").style.backgroundColor = "green";
    document.querySelector("#reel-1-img").src = "./img/5.png";
    document.querySelector("#reel-2-img").src = "./img/5.png";
    document.querySelector("#reel-3-img").src = "./img/5.png";
    document.querySelector("#resetGame").style.display = "none";
    document.querySelector("#resetGame").style.display = "none";
    document.querySelector("#gameover").style.display = "none";

});


// Changing Images
function roll(r1, r2, r3) {

    let reel1 = document.querySelector("#reel-1-img");
    let reel2 = document.querySelector("#reel-2-img");
    let reel3 = document.querySelector("#reel-3-img");

    reel1.src = images[r1];
    reel2.src = images[r2];
    reel3.src = images[r3];
}

function calculateScore(reel1, reel2, reel3) {

    if (reel1 === reel2 && reel2 === reel3) {
        score = reel1 * 7 * (Number(bet.value) || 1);
    } else if (reel1 === reel2) {
        score = reel1 * 2 * (Number(bet.value) || 1);
    } else if (reel2 === reel3) {
        score = reel2 * 2 * (Number(bet.value) || 1);
    } else if (reel1 === reel3) {
        score = reel2 * 1.5 * (Number(bet.value) || 1);
    } else {
        score = reel1 * (Number(bet.value) || 1) * -1;
    }

    if (reel1 === 0 && reel2 === 0 && reel3 === 0) {
        score = 100 * (Number(bet.value) || 1) * -1;
    }


}