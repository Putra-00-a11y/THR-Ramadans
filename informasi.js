document.addEventListener("DOMContentLoaded", function () {
    let infoButtons = document.querySelectorAll(".info-title");

    infoButtons.forEach(button => {
        button.addEventListener("click", function () {
            let content = this.nextElementSibling;

            // Cek apakah sedang terbuka
            let isOpen = content.style.display === "block";

            // Tutup semua info-content yang lain
            document.querySelectorAll(".info-content").forEach(cont => cont.style.display = "none");

            // Buka hanya yang diklik
            if (!isOpen) {
                content.style.display = "block";
            }
        });
    });
});
