// Target countdown (Pakai format UTC biar gak error timezone)
let countdownDate = new Date("2025-04-02T10:00:01Z").getTime();

// Update tiap detik
let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    if (distance <= 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Waktunya!";
        document.getElementById("hokiButton").style.display = "inline-block"; // Munculkan tombol Semoga Beruntung
        document.getElementById("cekH").style.display = "none"; // Hapus tombol Cek Keberuntungan
        return;
    }

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format biar rapi
    document.getElementById("countdown").innerHTML = 
        (days > 0 ? days + "d " : "") +
        (hours < 10 ? "0" + hours : hours) + "h " +
        (minutes < 10 ? "0" + minutes : minutes) + "m " +
        (seconds < 10 ? "0" + seconds : seconds) + "s";
}, 1000);


// Backsound Otomatis
document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-music");
    audio.volume = 0.5; // Sesuaikan volume
    audio.play().catch(() => {
        console.log("User perlu interaksi dulu untuk play audio.");
    });
});

// Cek Kehokian (Buat Latihan Klik-Klik)
function cekHoki() {
    let hasil = Math.random() < 0.10 ? "Beruntung!" : "Tidak beruntung!";
    alert("Hasil cek keberuntungan: " + hasil);
}

// Cek apakah user sudah menekan tombol hoki sebelumnya
document.addEventListener("DOMContentLoaded", function() {
    let hokiBtn = document.getElementById("hokiButton");
    if (localStorage.getItem("hokiClicked") === "true") {
        hokiBtn.disabled = true;
        hokiBtn.innerText = "Sudah Diklik..!";
    }
});

// Fungsi tombol HOKI (Cuma Bisa Klik Sekali)
function mainHoki() {
    let hasil = Math.random() < 0.10 ? "beruntung.html" : "zonk.html";
    window.location.href = hasil;

    // Simpan status tombol ke LocalStorage biar gak bisa ditekan lagi
    localStorage.setItem("hokiClicked", "true");

    // Disable tombol & ubah teksnya
    let hokiBtn = document.getElementById("hokiButton");
    hokiBtn.disabled = true;
    hokiBtn.innerText = "Sudah Diklik..";
}

// Fungsi untuk pindah ke minigame yang dipilih
document.getElementById("minigameDropdown").addEventListener("change", function() {
    let selectedGame = this.value;
    if (selectedGame) {
        window.location.href = selectedGame;
    }
});

// Toggle Sidebar
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-300px" : "0px";
}
