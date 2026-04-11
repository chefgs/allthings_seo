# AllThingsSEO

> **Learn SEO the practical way — no jargon, no gatekeeping.**

AllThingsSEO is a beginner-friendly SEO education and training web app for
marketers, founders, and product teams who need to ship better SEO without
becoming full-time SEO specialists. It combines bite-sized courses, interactive
quizzes, customizable templates, actionable checklists, and in-browser SEO
tools — all with zero backend, zero tracking, and zero build step.

Open `index.html` in a browser and start learning.

---

## Features

### 1. Courses (Learn)
A 7-course curriculum taking non-SEO people from zero to competent:

| Level | Course | Focus |
|-------|--------|-------|
| Beginner | SEO Fundamentals | How search engines work, crawl/index/rank, intent |
| Beginner | Keyword Research | Seeds, long-tail, clusters, intent filters |
| Intermediate | On-Page SEO | Titles, metas, headings, internal links, images |
| Intermediate | Technical SEO | Core Web Vitals, mobile-first, sitemaps, schema |
| Intermediate | Content Strategy | Pillars, clusters, E-E-A-T, refresh cycles |
| Advanced | Off-Page SEO | Backlinks, digital PR, brand mentions, reviews |
| Advanced | Measuring SEO | Search Console, CTR, attribution, OKRs |

Each course has 4–5 lessons plus an end-of-course quiz with instant feedback.

### 2. Prebuilt Templates
Six fully customizable SEO templates, each with live preview, SERP snippet,
HTML `<head>` snippet, and JSON-LD structured data generator:

- **Blog / Article Post** (Article schema)
- **Ecommerce Product Page** (Product + Offer + AggregateRating)
- **Product Landing Page** (FAQPage schema)
- **Local Business Page** (LocalBusiness schema)
- **SaaS Feature Page** (SoftwareApplication schema)
- **Product Launch Campaign** (SaleEvent schema)

Fill in the fields, watch the preview update in real time, click **Copy HTML
`<head>`** to paste into your site.

### 3. Interactive Checklists
Four curated checklists with progress automatically saved to `localStorage`:

- **Launch checklist** — before publishing any page
- **Technical SEO audit** — monthly health check
- **Content quality checklist** — for every article
- **Local SEO checklist** — for brick-and-mortar businesses

### 4. In-Browser SEO Tools
No sign-up, no API calls — everything runs client-side:

- **Title & Meta Checker** — length validation against Google's display limits
- **Keyword Density Analyser** — top 15 keywords with density percentages
- **Readability Estimator** — Flesch Reading Ease score with grade level
- **URL Slug Generator** — clean, stop-word-free slugs

### 5. SEO Glossary
35+ plain-English definitions with live search.

---

## Design System

| Role | Colour | Hex |
|------|--------|-----|
| Primary | Soft Teal | `#4DB6AC` |
| Primary dark | Teal | `#2E968C` |
| Secondary | Light Orange | `#FFCC80` |
| Secondary dark | Amber | `#F5A623` |
| Text | Slate | `#2F3A3A` |
| Background | Off-white | `#F7FAF9` |

Typography uses the system font stack for fast loads and native feel.
Layout is responsive with a mobile hamburger nav, sticky header, and grid-based
cards that collapse gracefully.

---

## Running locally

The app is a static site — **no build, no dependencies**.

```bash
# Option 1 — open directly
open index.html                 # macOS
xdg-open index.html             # Linux

# Option 2 — serve with any static server (recommended for clipboard API)
python3 -m http.server 8000
# then visit http://localhost:8000
```

A local server is recommended because the template "Copy HTML" button uses the
Clipboard API, which some browsers restrict on `file://`.

---

## Project Structure

```
allthings_seo/
├── index.html              # App shell + nav + footer
├── css/
│   └── styles.css          # Teal/orange theme + responsive layout
├── js/
│   ├── app.js              # Hash router + event wiring
│   ├── views.js            # View render functions (home, learn, etc.)
│   ├── tools.js            # SEO tool logic (density, readability, slug)
│   ├── data-courses.js     # Curriculum content
│   ├── data-templates.js   # Prebuilt SEO templates
│   ├── data-checklists.js  # Checklist content
│   └── data-glossary.js    # Glossary terms
└── README.md
```

Routes are hash-based (`#/learn`, `#/templates/blog-post`, etc.), so the app
works on any static host: GitHub Pages, Netlify, Vercel, S3, or a plain file
server.

---

## Extending

### Add a new course
Open `js/data-courses.js` and push a new object onto `window.ATS_COURSES`. Each
course needs `id`, `level`, `icon`, `title`, `tagline`, `duration`, `lessons`,
and (optionally) `quiz`.

### Add a new template
Open `js/data-templates.js` and add an entry to `window.ATS_TEMPLATES`. Provide
`fields` (array of input schemas) and a `render(values)` function that returns
`{ title, metaDescription, url, htmlHead, jsonLd, outline }`.

### Add a glossary term
Append to `window.ATS_GLOSSARY` in `js/data-glossary.js`. Search is
case-insensitive and searches both term and definition.

---

## Why no backend?

This is an education app — every feature is content + client-side logic. A
backend would add cost, complexity, and privacy risk with no learning benefit.
If you later need user accounts or progress sync, a Strapi + React migration is
sketched in the planning notes for this branch.

---

## License

MIT — use, fork, remix, and teach SEO to more people.
