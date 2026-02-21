let count = Number(localStorage.getItem("times")) || 0;
localStorage.setItem("times", count);
let timesTaken = localStorage.getItem("times");
console.log("timesTaken = ", localStorage.getItem("times"))
document.querySelector("#taken") .textContent = `Taken Quiz ${timesTaken} times`

let score = 0;

document.querySelector("#q1-img").style.display = "none";
document.querySelector("#q2-img").style.display = "none";
document.querySelector("#q3-img").style.display = "none";
document.querySelector("#q4-img").style.display = "none";
document.querySelector("#q5-img").style.display = "none";
shuffle_q2();

document.querySelector("#submit").addEventListener("click", function run() {
    count++;
    localStorage.setItem("times",  count);
    document.querySelector("#taken") .textContent = `Taken Quiz ${Number(localStorage.getItem("times"))} times`
    q1_check();
    q2_check();
    q3_check();
    q4_check();
    q5_check();

    let final_score =  document.querySelector("#final-score");
    final_score.style.fontSize = "2em";

    if (score > 80) {
        final_score.textContent = `Congratulations! You scored: ${score}`
    } else {
        final_score.textContent = `Better luck next time! You scored: ${score} `
    }

});





function q1_check() {
    let q1_input = document.querySelector("#question-1-answer").value;
    let update_img = document.querySelector("#q1-img");
    let feedback = document.querySelector("#q1-feedback");
    feedback.style.fontSize = "2em";
    if (q1_input == "4") {
        update_img.src = "./img/correct.png";
        update_img.style.display = "block";
        update_img.alt = "Green Checkmark";
        feedback.textContent = "Correct";
        feedback.style.color = "green";

        score += 20;
    }
    else {
        update_img.src = "./img/wrong.png";
        update_img.style.display = "block";
        update_img.alt = "Red  X";
        feedback.textContent = "Wrong";
        feedback.style.color = "red";
    }
}

function q2_check() {
    let q2_input = document.querySelector('input[name="question-2-radio"]:checked');
    let update_img = document.querySelector("#q2-img");
    let feedback = document.querySelector("#q2-feedback");
    feedback.style.fontSize = "2em";
    if(q2_input && q2_input.value === "Blue") {
        update_img.src = "./img/correct.png";
        update_img.style.display = "block";
        update_img.alt = "Green Checkmark";
        feedback.textContent = "Correct";
        feedback.style.color = "green";
        
        score += 20;

    } else {
        update_img.src = "./img/wrong.png";
        update_img.style.display = "block";
        update_img.alt = "Red  X";
        feedback.textContent = "Wrong";
        feedback.style.color = "red";
    }
}

function q3_check() {
    let q3_input = document.querySelector('#question-3-answer').value.trim().toLowerCase();
    let update_img = document.querySelector("#q3-img");
    let feedback = document.querySelector("#q3-feedback");
    feedback.style.fontSize = "2em";
    if(q3_input == "earth") {
        update_img.src = "./img/correct.png";
        update_img.style.display = "block";
        update_img.alt = "Green Checkmark";
        feedback.textContent = "Correct";
        feedback.style.color = "green";

        score += 20;

    } else {
        update_img.src = "./img/wrong.png";
        update_img.style.display = "block";
        update_img.alt = "Red  X";
        feedback.textContent = "Wrong";
        feedback.style.color = "red";
    }
}

function q4_check() {
    let q4_input = document.querySelector("#alphabet-letters").value;
    let update_img = document.querySelector("#q4-img");
    let feedback = document.querySelector("#q4-feedback");
    feedback.style.fontSize = "2em";
    if(q4_input == "A") {
        update_img.src = "./img/correct.png";
        update_img.style.display = "block";
        update_img.alt = "Green Checkmark";
        feedback.textContent = "Correct";
        feedback.style.color = "green";

        score += 20;

    } else {
        update_img.src = "./img/wrong.png";
        update_img.style.display = "block";
        update_img.alt = "Red  X";
        feedback.textContent = "Wrong";
        feedback.style.color = "red";
    }
}

function q5_check() {
    let update_img = document.querySelector("#q5-img");
     let feedback = document.querySelector("#q5-feedback");
    feedback.style.fontSize = "2em";
    if(document.querySelector("#q5-apple").checked && document.querySelector("#q5-orange").checked) {
        update_img.src = "./img/correct.png";
        update_img.style.display = "block";
        update_img.alt = "Green Checkmark";
        feedback.textContent = "Correct";
        feedback.style.color = "green";

        score += 20;

    } else {
        update_img.src = "./img/wrong.png";
        update_img.style.display = "block";
        update_img.alt = "Red  X";
        feedback.textContent = "Wrong";
        feedback.style.color = "red";
    }
    
}


function shuffle_q2() {
    let q2ChoicesArray = ["Blue", "Red", "Orange", "Green"];
    for (let i = q2ChoicesArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [q2ChoicesArray[i], q2ChoicesArray[j]] = [q2ChoicesArray[j], q2ChoicesArray[i]];
    }
    let output = "";

    for (let i = 0; i < q2ChoicesArray.length; i++) {
        output += `
        <input type="radio" name="question-2-radio"
        id="q2-${q2ChoicesArray[i]}"
        value="${q2ChoicesArray[i]}">
        <label for="q2-${q2ChoicesArray[i]}">
        ${q2ChoicesArray[i]}
        </label>
    `;
    }
    document.querySelector("#q2-options").innerHTML = output;
}