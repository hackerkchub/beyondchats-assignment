import styled from "styled-components";

/* ===== Card Wrapper ===== */
const Card = styled.article`
  background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  border: 1px solid #e5e7eb;
  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.06),
    0 1px 2px rgba(15, 23, 42, 0.04);
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 40px rgba(15, 23, 42, 0.12),
      0 2px 6px rgba(15, 23, 42, 0.06);
  }

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

/* ===== Top Row ===== */
const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

/* ===== Badge ===== */
const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.3px;
  border-radius: 999px;
  text-transform: uppercase;

  background: ${({ type }) =>
    type === "updated"
      ? "linear-gradient(135deg, #dcfce7, #bbf7d0)"
      : "linear-gradient(135deg, #e5e7eb, #d1d5db)"};

  color: ${({ type }) =>
    type === "updated" ? "#14532d" : "#1f2937"};

  border: 1px solid
    ${({ type }) =>
      type === "updated" ? "#86efac" : "#cbd5e1"};
`;

/* ===== Title ===== */
const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
  color: #0f172a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

/* ===== Content ===== */
const Content = styled.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.75;
  color: #334155;

  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 14.5px;
    -webkit-line-clamp: 5;
  }
`;

/* ===== Footer ===== */
const Footer = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

/* ===== Read More ===== */
const ReadMore = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #2563eb;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

export default function ArticleCard({ article }) {
  return (
    <Card>
      <TopRow>
        <Badge type={article.version}>
          {article.version === "updated" ? "Updated" : "Original"}
        </Badge>
      </TopRow>

      <Title>{article.title}</Title>

      <Content>
        {article.content}
      </Content>

      <Footer>
        <ReadMore>Read more →</ReadMore>
      </Footer>
    </Card>
  );
}
