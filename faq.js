document.addEventListener("DOMContentLoaded", function () {
    let faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            let isOpen = answer.style.display === "block";

            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            document.querySelectorAll(".faq-question").forEach(btn => btn.innerHTML = btn.innerHTML.replace("➖", "➕"));

            if (!isOpen) {
                answer.style.display = "block";
                this.innerHTML = this.innerHTML.replace("➕", "➖");
            }
        });
    });
});
