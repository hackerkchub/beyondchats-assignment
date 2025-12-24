const axios = require("axios");

const API_BASE = "http://127.0.0.1:8000/api";

async function getLatestOriginalArticle() {
  const res = await axios.get(`${API_BASE}/articles`);

  return res.data.find(
    article => article.version === "original"
  );
}


async function createUpdatedArticle(article) {
  return axios.post(`${API_BASE}/articles`, article);
}

module.exports = {
  getLatestOriginalArticle,
  createUpdatedArticle
};
