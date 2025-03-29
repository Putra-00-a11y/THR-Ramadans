let canClick = false;
let reactionStart;
let timeoutID;

const buttonS = document.getElementById("startBtn");

// Mulai game
function startGame() {
    document.getElementById("result").textContent = "Tunggu tombol muncul...";
    document.getElementById("clickBtn").style.display = "none"; // Sembunyikan tombol
    canClick = false;

    // Random delay antara 1-7 detik
    let randomDelay = Math.floor(Math.random() * 8 + 1) * 1000;

    timeoutID = setTimeout(() => {
        canClick = true;
        reactionStart = Date.now();
        let clickBtn = document.getElementById("clickBtn");
        clickBtn.style.display = "inline-block"; // Tampilkan tombol
    }, randomDelay);
}

// Cek reaksi klik
function checkReaction() {
    if (!canClick) {
        document.getElementById("result").textContent = "😏 Ketahuan curang! Sabar dikit...";
        return;
    }

    let reactionTime = Date.now() - reactionStart;
    document.getElementById("clickBtn").style.display = "none"; // Hilangkan tombol setelah klik

    if (reactionTime <= 350) {
        document.getElementById("result").textContent = `🔥 NAH! Gitu dong! (${reactionTime}ms)`;
    } else {
        document.getElementById("result").textContent = `😔 Waduh, reflek masih lelet! (${reactionTime}ms)`;
    }
}
