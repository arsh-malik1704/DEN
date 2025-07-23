// Smooth scroll for navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Code for contact form validation and submission
document.addEventListener("DOMContentLoaded", () => {
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
e.preventDefault();

// Get input values
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Clear previous status
formStatus.textContent = "";
formStatus.style.color = "red";

// Validation checks
if (name.value.trim() === "") {
    formStatus.textContent = "Please enter your full name.";
    name.focus();
    return;
}

if (!validateEmail(email.value)) {
    formStatus.textContent = "Please enter a valid email address.";
    email.focus();
    return;
}

if (subject.value.trim() === "") {
    formStatus.textContent = "Please enter a subject.";
    subject.focus();
    return;
}

if (message.value.trim() === "") {
    formStatus.textContent = "Please enter your message.";
    message.focus();
    return;
}

// If all is valid
formStatus.style.color = "green";
formStatus.textContent = "Message sent successfully!";

// Reset form fields
form.reset();

// Scroll to top of form to show message
form.scrollIntoView({ behavior: "smooth" });
});

// Simple email validator
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

