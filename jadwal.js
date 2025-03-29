document.addEventListener("DOMContentLoaded", function () {
    // ========== LOGIKA GAME 2 ==========
    const openTimeGame2 = new Date("2025-03-30 12:00:01").getTime();
    const btnGame2 = document.getElementById("btnGame2");
    const statusGame2 = document.getElementById("statusGame2");

    // ========== LOGIKA GAME 3 ==========
    const openTimeGame3 = new Date("2025-03-31 12:00:01").getTime();
    const btnGame3 = document.getElementById("btnGame3");
    const statusGame3 = document.getElementById("statusGame3");

    // ========== LOGIKA THR PULSA ==========
    const openTimeTHR = new Date("2025-04-02 10:00:01").getTime();
    const btnTHR = document.getElementById("btnTHR");
    const statusTHR = document.getElementById("statusTHR");

    function updateCountdown(targetTime, button, statusElement, countdownElement, redirectURL) {
        let now = new Date().getTime();
        let timeLeft = targetTime - now;

        if (timeLeft > 0) {
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
            countdownElement.innerText = "Sudah bisa dibuka!";
            statusElement.innerText = "Bisa Dibuka!";
            statusElement.style.color = "lightgreen";
            button.innerText = "Main Sekarang!";
            button.disabled = false;
            button.onclick = () => window.location.href = redirectURL;
        }
    }

    function startCountdown() {
        setInterval(() => {
            updateCountdown(openTimeGame2, btnGame2, statusGame2, document.getElementById("countdownGame2"), "game2.html");
            updateCountdown(openTimeGame3, btnGame3, statusGame3, document.getElementById("countdownGame3"), "game3.html");
            updateCountdown(openTimeTHR, btnTHR, statusTHR, document.getElementById("countdownTHR"), "indexZ.html");
        }, 1000);
    }

    startCountdown();
});
