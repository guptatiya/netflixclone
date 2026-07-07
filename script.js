// ================================
// Netflix Landing Page UI Clone
// script.js
// ================================

// Email Validation
const emailInput = document.querySelector(".email-box input");
const getStartedBtn = document.querySelector(".email-box button");

getStartedBtn.addEventListener("click", function() {

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Welcome! This is a Netflix UI Clone.");

    emailInput.value = "";
});

// Press Enter to submit
emailInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {
        getStartedBtn.click();
    }

});

// Movie Card Hover Animation
const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.08)";
        card.style.zIndex = "10";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.zIndex = "1";
    });

});

// Smooth Scroll for Future Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Navbar Background on Scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,0,0,0.9)";
    } else {
        navbar.style.background = "transparent";
    }

}); // =========================
// FAQ Accordion
// =========================

const questions = document.querySelectorAll(".question");

questions.forEach(question => {

    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        const icon = question.querySelector(".icon");

        // Close all others
        document.querySelectorAll(".answer").forEach(item => {

            if (item !== answer) {
                item.style.maxHeight = null;
            }

        });

        document.querySelectorAll(".icon").forEach(i => {

            if (i !== icon) {
                i.textContent = "+";
            }

        });

        // Toggle current

        if (answer.style.maxHeight) {

            answer.style.maxHeight = null;
            icon.textContent = "+";

        } else {

            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "×";

        }

    });

});