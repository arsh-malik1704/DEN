// ===== API Fetch Logic =====
const API_KEY = "e8ee41dd932a4c6583b501552f2d691e";
const newsContainer = document.getElementById("news-container");
const statusMessage = document.getElementById("status-message");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// ===== Show Date =====
function setDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("current-date").textContent =
    new Date().toLocaleDateString("en-US", options);
}
setDate();

// ===== Fetch news =====
async function fetchNews(query = "", category = "general") {
  try {
    statusMessage.textContent = "Loading news...";
    newsContainer.innerHTML = "";

    let url;

    if (category === "world") {
      // Use "everything" for world news
      url = `https://newsapi.org/v2/everything?q=world&language=en&apiKey=${API_KEY}`;
    } else if (query) {
      url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=en&apiKey=${API_KEY}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`;
    }

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch news");
    const data = await res.json();

    if (!data.articles || data.articles.length === 0) {
      statusMessage.textContent = "No articles found.";
      return;
    }

    statusMessage.textContent = "";
    data.articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `
        <img src="${article.urlToImage || 'placeholder.jpg'}" alt="News">
        <div class="news-content">
          <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
          <p>${article.description || "No description available."}</p>
          <small>🗓 ${new Date(article.publishedAt).toLocaleDateString()} | 🏷 ${article.source.name}</small>
        </div>
      `;
      newsContainer.appendChild(card);
    });
  } catch (err) {
    console.error(err);
    statusMessage.textContent = "Error loading news.";
  }
}

// ===== Navigation =====
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const category = link.getAttribute("data-category");
    fetchNews("", category);

    document.querySelectorAll(".nav-links a").forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ===== Search =====
searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) fetchNews(query);
});
searchInput.addEventListener("keypress", e => {
  if (e.key === "Enter") searchBtn.click();
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => navLinks.classList.toggle("active"));

// ===== Initial load =====
fetchNews();
