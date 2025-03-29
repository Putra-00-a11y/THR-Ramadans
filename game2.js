const colors = [
    "#ff4757", "#ff4757", 
    "#2ed573", "#2ed573", 
    "#1e90ff", "#1e90ff", 
    "#ffa502", "#ffa502", 
    "#8e44ad", "#8e44ad", 
    "#70a1ff", "#70a1ff"
];

let shuffledColors = shuffleArray(colors);
let flippedCards = [];
let matchedCards = [];

const gameBoard = document.getElementById("gameBoard");

// Inisialisasi game
function initGame() {
    gameBoard.innerHTML = "";
    shuffledColors.forEach((color, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.color = color;
        card.dataset.index = index;

        const frontFace = document.createElement("div");
        frontFace.classList.add("front"); // Awalnya abu-abu

        const backFace = document.createElement("div");
        backFace.classList.add("back");
        backFace.style.background = color; // Warna muncul pas dibalik

        card.appendChild(frontFace);
        card.appendChild(backFace);
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

// Fungsi acak kartu
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Fungsi flip kartu
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped") && !matchedCards.includes(this)) {
        this.classList.add("flipped");
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Cek apakah kartu cocok
function checkMatch() {
    let [card1, card2] = flippedCards;

    if (card1.dataset.color === card2.dataset.color) {
        matchedCards.push(card1, card2);
        flippedCards = [];

        // Jika semua kartu cocok, munculkan alert
        if (matchedCards.length === colors.length) {
            setTimeout(() => alert("Selamat! Kamu menyelesaikan game!"), 500);
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }, 1000);
    }
}

// Reset game
function resetGame() {
    shuffledColors = shuffleArray(colors);
    flippedCards = [];
    matchedCards = [];
    initGame();
}

// Mulai game pertama kali
initGame();

function goBack() {
    window.location.href = "indexZ.html"; // Ganti sesuai nama file laman awal lo
}
