require("dotenv").config();
const axios = require("axios");

const SERP_API_KEY = process.env.SERP_API_KEY;

async function searchGoogle(query) {
  const url = "https://serpapi.com/search.json";

  const response = await axios.get(url, {
    params: {
      q: query,
      api_key: SERP_API_KEY,
      engine: "google",
      num: 5
    }
  });

  // Organic results only
  const organic = response.data.organic_results || [];

  // Filter blogs/articles (ignore BeyondChats itself)
  const filtered = organic.filter(r =>
    r.link &&
    !r.link.includes("beyondchats.com")
  );

  // Return top 2
  return filtered.slice(0, 2).map(r => ({
    title: r.title,
    link: r.link
  }));
}

module.exports = {
  searchGoogle
};
