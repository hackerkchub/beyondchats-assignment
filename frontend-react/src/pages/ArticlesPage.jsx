import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchArticles } from "../api/articles";
import ArticleCard from "../components/ArticleCard";

/* =========================
   Layout
========================= */
const Page = styled.main`
  min-height: 100vh;
  background: radial-gradient(
    1200px 400px at top,
    #eef2ff 0%,
    #f8fafc 40%,
    #f9fafb 100%
  );
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: auto;
`;

/* =========================
   Header Section
========================= */
const Header = styled.header`
  margin-bottom: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleBlock = styled.div``;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #475569;
  max-width: 520px;
`;

/* =========================
   Filter Chips
========================= */
const Filters = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const FilterChip = styled.button`
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  border: 1px solid ${({ active }) =>
    active ? "#6366f1" : "#e5e7eb"};
  background: ${({ active }) =>
    active ? "#eef2ff" : "#ffffff"};
  color: ${({ active }) =>
    active ? "#4338ca" : "#374151"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #6366f1;
    background: #eef2ff;
  }
`;

/* =========================
   Articles Grid
========================= */
const ArticlesGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  const filteredArticles =
    filter === "all"
      ? articles
      : articles.filter(a => a.version === filter);

  return (
    <Page>
      <Container>
        <Header>
          <TitleBlock>
            <Title>BeyondChats Articles</Title>
            <Subtitle>
              Original insights and AI-enhanced articles rewritten
              using top-ranking content and large language models.
            </Subtitle>
          </TitleBlock>

          <Filters>
            <FilterChip
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              All
            </FilterChip>

            <FilterChip
              active={filter === "original"}
              onClick={() => setFilter("original")}
            >
              Original
            </FilterChip>

            <FilterChip
              active={filter === "updated"}
              onClick={() => setFilter("updated")}
            >
              Updated
            </FilterChip>
          </Filters>
        </Header>

        <ArticlesGrid>
          {filteredArticles.map(article => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </ArticlesGrid>
      </Container>
    </Page>
  );
}
