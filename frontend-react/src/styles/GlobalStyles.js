import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* =========================
     CSS RESET + BASE
  ========================= */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    font-family: 
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Helvetica,
      Arial,
      sans-serif;
    font-size: 16px;
    line-height: 1.6;
    background: #f9fafb;
    color: #0f172a;
  }

  /* =========================
     TYPOGRAPHY SCALE
  ========================= */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #020617;
  }

  h1 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(1.4rem, 3vw, 1.75rem);
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.15rem, 2.5vw, 1.35rem);
  }

  p {
    margin: 0;
    color: #334155;
    font-size: 1rem;
    line-height: 1.75;
  }

  /* =========================
     LINKS
  ========================= */
  a {
    color: #2563eb;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #1d4ed8;
      text-decoration: underline;
    }
  }

  /* =========================
     BUTTONS (BASE)
  ========================= */
  button {
    font-family: inherit;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  /* =========================
     MEDIA & ELEMENTS
  ========================= */
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* =========================
     FORM ELEMENTS
  ========================= */
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: 1rem;
    color: #0f172a;
  }

  input::placeholder,
  textarea::placeholder {
    color: #94a3b8;
  }

  /* =========================
     SELECTION
  ========================= */
  ::selection {
    background: #c7d2fe;
    color: #1e3a8a;
  }

  /* =========================
     SCROLLBAR (WEBKIT)
  ========================= */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: #c7d2fe;
    border-radius: 999px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a5b4fc;
  }
`;

export default GlobalStyles;
