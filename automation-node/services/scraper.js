const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeArticleContent(url) {
  try {
    const { data: html } = await axios.get(url, {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120"
      }
    });

    const $ = cheerio.load(html);

    let content = "";

    // Priority-based selectors
    const selectors = [
      "article",
      ".entry-content",
      ".post-content",
      ".content",
      "main"
    ];

    for (const selector of selectors) {
      if ($(selector).length) {
        $(selector)
          .find("p")
          .each((_, el) => {
            const text = $(el).text().trim();
            if (text.length > 50) {
              content += text + "\n\n";
            }
          });

        if (content.length > 300) break;
      }
    }

    // Fallback: all <p> tags
    if (content.length < 300) {
      $("p").each((_, el) => {
        const text = $(el).text().trim();
        if (text.length > 50) {
          content += text + "\n\n";
        }
      });
    }

    return content.trim();

  } catch (error) {
    console.error(`❌ Failed to scrape ${url}`);
    return "";
  }
}

module.exports = {
  scrapeArticleContent
};
