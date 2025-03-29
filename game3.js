let sequence = [];
let playerSequence = [];
let score = 0;
let colors = ["red", "blue", "yellow", "green"];

function startGame() {
    sequence = [];
    playerSequence = [];
    score = 0;
    document.getElementById("score").innerText = score;
    nextRound();
}

function nextRound() {
    playerSequence = [];
    sequence.push(colors[Math.floor(Math.random() * 4)]);
    flashSequence();
}

function flashSequence() {
    let i = 0;
    let interval = setInterval(() => {
        let color = sequence[i];
        let btn = document.getElementById(color);
        btn.classList.add("active");

        setTimeout(() => {
            btn.classList.remove("active");
        }, 500);

        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
    }, 1000);
}

function playerClick(color) {
    playerSequence.push(color);
    let index = playerSequence.length - 1;

    if (playerSequence[index] !== sequence[index]) {
        alert("Game Over! Skor: " + score);
        return;
    }

    if (playerSequence.length === sequence.length) {
        score++;
        document.getElementById("score").innerText = score;
        setTimeout(nextRound, 1000);
    }
}

function goBack() {
    window.location.href = "indexZ.html";
}
