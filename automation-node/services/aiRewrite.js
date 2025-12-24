require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function rewriteArticle(original, competitors) {
  const prompt = `
You are an expert SEO content writer.

TASK:
Rewrite the ORIGINAL ARTICLE so that its quality, structure, depth,
and formatting are similar to the COMPETITOR ARTICLES.

RULES:
- Keep topic same as original
- Improve clarity, depth, and structure
- Use proper headings (H2/H3 style)
- Make it informative, neutral, and professional
- DO NOT copy text verbatim
- At the end, add a "References" section citing competitor URLs

ORIGINAL ARTICLE:
Title: ${original.title}
Content:
${original.content}

COMPETITOR ARTICLE 1:
${competitors[0].content}

COMPETITOR ARTICLE 2:
${competitors[1].content}

OUTPUT:
Return ONLY the rewritten article in plain text with headings.
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  });

  return response.choices[0].message.content;
}

module.exports = {
  rewriteArticle
};
