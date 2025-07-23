// Scroll Reveal
const scrollElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  scrollElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
};
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Select all elements once
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const searchInput = document.getElementById("projectSearch");

// Filter button logic
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.filter;
    
    // Highlight active button
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter by category
    projectCards.forEach((card) => {
      const matchesCategory = category === "all" || card.classList.contains(category);
      const matchesSearch = matchesSearchQuery(card); // Combine with current search input

      if (matchesCategory && matchesSearch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Search bar logic
searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.toLowerCase();

  projectCards.forEach((card) => {
    const matchesSearch = matchesSearchQuery(card);
    const activeCategory = document.querySelector(".filter-btn.active").dataset.filter;
    const matchesCategory = activeCategory === "all" || card.classList.contains(activeCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Helper: Search match function
function matchesSearchQuery(card) {
  const title = card.querySelector("h3").textContent.toLowerCase();
  const desc = card.querySelector("p").textContent.toLowerCase();
  const query = searchInput.value.toLowerCase();
  return title.includes(query) || desc.includes(query);
}

