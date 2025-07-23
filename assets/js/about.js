const testimonials = [
  {
    text: "“Areesha led the conference beautifully — her vision and execution were flawless.”",
    author: "– Executive Director, CISS AJK"
  },
  {
    text: "“Her youth policy insights at KPRI were insightful and inspiring.”",
    author: "– Director, KPRI "
  },
  {
    text: "“Areesha consistently brings energy, empathy, and tech to Wall of Hope.”",
    author: "– Mentor, Wall of Hope "
  },
  {
    text: "“Areesha’s ability to lead is impressive. She’s a rising changemaker helping youth pursue purpose and social innovation.”",
    author: "- HHRD, Youth Empowerment Program "
  }
];
let index = 0;
const txt = document.getElementById("testimonial-text");
const auth = document.getElementById("testimonial-author");
function showNext() {
  index = (index + 1) % testimonials.length;
  txt.innerText = testimonials[index].text;
  auth.innerText = testimonials[index].author;
}
setInterval(showNext, 5000);

const modal = document.getElementById("achievementModal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".achievement-card").forEach(card => {
  card.addEventListener("click", () => {
    const imgSrc = card.querySelector("img").src;
    const text = card.querySelector("p").textContent;

    modalImg.src = imgSrc;
    modalText.textContent = text;
    modalText.style.fontStyle = "italic";
    modal.style.display = "block";
  });
});

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
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
