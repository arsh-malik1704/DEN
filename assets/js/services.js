// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.scroll-reveal');
const revealOnScroll = () => {
    revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add('visible');
    });
  };
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Smooth scroll for navigation links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});