import fetch from "node-fetch";

export async function handler(event) {
  const API_KEY = process.env.NEWS_API_KEY; 
  const { q, category } = event.queryStringParameters;

  let url;
  if (q) {
    url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&language=en&apiKey=${API_KEY}`;
  } else if (category === "world") {
    url = `https://newsapi.org/v2/everything?q=world&language=en&apiKey=${API_KEY}`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category || "general"}&apiKey=${API_KEY}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch news" }) };
  }
}