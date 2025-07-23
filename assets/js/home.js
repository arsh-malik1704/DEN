// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});
// Scroll reveal for skill cards and interest cards
const skillCards = document.querySelectorAll('.skills-grid .skill-card');
const interestCards = document.querySelectorAll('.interests-grid .interest-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  skillCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) {
      card.classList.add('visible');
    }
  });
  interestCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < triggerBottom) {
      card.classList.add('visible');
    }
  });
});

document.querySelector('.cta-btn').addEventListener('click', function() {
  alert('Thank you for your interest in my projects! ');
});

// Back to Top Button
const backBtn = document.getElementById('backToTopBtn');
window.onscroll = () => {
  if (window.scrollY > 300) {
    backBtn.style.display = "block";
  } else {
    backBtn.style.display = "none";
  }
};

backBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
