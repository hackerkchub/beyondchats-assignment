# BeyondChats – AI Powered Content Automation System

## 📌 Overview
This project is a three-phase system that automates content scraping, analysis, and AI-based rewriting.

- **Phase 1:** Scrapes the oldest articles from BeyondChats blogs and stores them using Laravel APIs.
- **Phase 2:** Uses NodeJS to analyze Google search results, scrape competitor articles, and rewrite content using an LLM.
- **Phase 3:** Displays original and updated articles in a responsive React frontend.

---

## 🧩 Tech Stack
- **Backend:** Laravel (PHP)
- **Automation:** NodeJS (Axios, Cheerio, SerpAPI, OpenAI)
- **Frontend:** ReactJS + Styled Components
- **Database:** MySQL / SQLite

---

## 🏗 Architecture / Data Flow Diagram

## 🏗 Architecture Diagram

![Architecture Diagram](docs/architecture-diagram.png)


BeyondChats Blogs
↓
Laravel Scraper (Phase 1)
↓
Database (Articles Table)
↓
NodeJS Automation (Phase 2)
↓
Google Search (SerpAPI)
↓
External Blogs Scraping
↓
LLM (OpenAI)
↓
Updated Article Stored via Laravel API
↓
React Frontend (Phase 3)



---
## ⚙️ Local Setup Instructions

1️⃣ Backend (Laravel)

cd backend-laravel
composer install
php artisan migrate
php artisan serve
API Endpoint:
http://127.0.0.1:8000/api/articles


2️⃣ Automation (NodeJS)

cd automation-node
npm install
node index.js


Create .env file:
OPENAI_API_KEY=your_openai_key
SERP_API_KEY=your_serpapi_key

3️⃣ Frontend (React)
bash
Copy code
cd frontend-react
npm install
npm run dev


Local URL:
http://localhost:5173


## 🌐 Live Demo
🔗 Frontend Live URL:
👉 https://your-vercel-link.vercel.app


## 🧪 Features
Scrapes oldest BeyondChats articles

Stores data using Laravel CRUD APIs

Google SERP-based competitor analysis

AI-powered article rewriting

Reference citation

Original vs Updated article comparison

Responsive, professional UI

## 🔐 Notes
API keys are excluded for security

.env.example files are provided

Code is modular and scalable

## 📅 Submission Details
Submitted before 25 Dec, 11:59 PM IST

Public GitHub repository

One monolithic repo containing all projects

## 🙌 Author
Kapil Chilhate