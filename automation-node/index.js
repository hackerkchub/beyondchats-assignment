const { getLatestOriginalArticle, createUpdatedArticle } = require("./services/laravelApi");
const { searchGoogle } = require("./services/googleSearch");
const { scrapeArticleContent } = require("./services/scraper");
const { rewriteArticle } = require("./services/aiRewrite");

(async () => {
  try {
    // 1️⃣ Fetch original article
   const original = await getLatestOriginalArticle();

    console.log("📰 Original article:", original.title);

    // 2️⃣ Google search
    const googleResults = await searchGoogle(original.title);

    // 3️⃣ Scrape competitor content
    const competitors = [];

    for (const result of googleResults) {
      const content = await scrapeArticleContent(result.link);
      if (content && content.length > 300) {
  competitors.push({
    title: result.title,
    link: result.link,
    content
  });
}

    }

    // 4️⃣ AI rewrite
    console.log("🤖 Rewriting article using AI...");
    const updatedContent = await rewriteArticle(original, competitors);

    // 5️⃣ Append references
    const references =
      "\n\nReferences:\n" +
      competitors.map(c => `- ${c.link}`).join("\n");

    // 6️⃣ Publish updated article
    await createUpdatedArticle({
      title: original.title + " (Updated)",
      content: updatedContent + references,
      source_url: original.source_url,
      version: "updated"
    });

    console.log("✅ Updated article published successfully!");

  } catch (err) {
    console.error("❌ Pipeline Error:", err.message);
  }
})();
