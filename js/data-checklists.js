/* =========================================================
   Interactive SEO Checklists
   Persisted to localStorage so progress survives reloads.
   ========================================================= */

window.ATS_CHECKLISTS = [
  {
    id: "launch",
    title: "New Page / Launch Checklist",
    icon: "L",
    description:
      "Run through this before publishing any new page, blog post, or landing page.",
    items: [
      {
        id: "title-length",
        text: "Title tag is 50–60 characters",
        hint: "Put the primary keyword near the front.",
      },
      {
        id: "meta-length",
        text: "Meta description is 150–160 characters",
        hint: "Write it like ad copy with a clear benefit + CTA.",
      },
      {
        id: "one-h1",
        text: "Page has exactly one H1",
        hint: "And it matches user search intent.",
      },
      {
        id: "h2-structure",
        text: "H2/H3 structure forms a logical outline",
        hint: "Headings should read like a table of contents.",
      },
      {
        id: "internal-links",
        text: "3–6 internal links to relevant pages",
        hint: "Use descriptive anchor text, not 'click here'.",
      },
      {
        id: "image-alt",
        text: "All images have descriptive alt text",
        hint: "No 'image1.jpg' — describe what's shown.",
      },
      {
        id: "image-compress",
        text: "Images compressed & served as WebP/AVIF",
        hint: "Target < 200 KB per image.",
      },
      {
        id: "canonical",
        text: "Canonical URL tag is present & correct",
        hint: "Points to the preferred version of the page.",
      },
      {
        id: "mobile-test",
        text: "Tested on a real mobile device",
        hint: "Google indexes the mobile version first.",
      },
      {
        id: "schema",
        text: "Structured data added & validated",
        hint: "Use Google's Rich Results Test.",
      },
      {
        id: "og-tags",
        text: "Open Graph + Twitter Card tags set",
        hint: "Controls how the page looks when shared.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical SEO Audit",
    icon: "T",
    description:
      "A monthly health-check — catches issues before they bleed traffic.",
    items: [
      {
        id: "robots",
        text: "robots.txt allows crawling of important pages",
        hint: "Do NOT disallow /blog/, /products/, etc.",
      },
      {
        id: "sitemap",
        text: "XML sitemap submitted in Search Console",
        hint: "< 50k URLs per file; split if larger.",
      },
      {
        id: "https",
        text: "All pages force HTTPS (no mixed content)",
        hint: "Check for HTTP assets in the console.",
      },
      {
        id: "https-redirect",
        text: "HTTP → HTTPS 301 redirect is working",
        hint: "Test from incognito / fresh browser.",
      },
      {
        id: "404s",
        text: "No orphan 404s from linked pages",
        hint: "Find them in Search Console → Pages.",
      },
      {
        id: "core-vitals",
        text: "Core Web Vitals pass on mobile",
        hint: "LCP < 2.5s, INP < 200ms, CLS < 0.1",
      },
      {
        id: "hreflang",
        text: "hreflang set if multi-language",
        hint: "Each language version links to the others.",
      },
      {
        id: "duplicate",
        text: "No duplicate title tags or meta descriptions",
        hint: "Search Console flags these.",
      },
    ],
  },
  {
    id: "content",
    title: "Content Quality Checklist",
    icon: "C",
    description:
      "Run this on any article before publish or refresh.",
    items: [
      {
        id: "intent-match",
        text: "Page format matches search intent",
        hint: "Informational → guide. Commercial → comparison.",
      },
      {
        id: "answer-fast",
        text: "Answers the query in the first 60 words",
        hint: "Also boosts featured-snippet odds.",
      },
      {
        id: "original",
        text: "Contains original insight, data, or experience",
        hint: "E-E-A-T — not a rewrite of competitor pages.",
      },
      {
        id: "author",
        text: "Named author with credentials",
        hint: "Real bio, linked profile, expertise shown.",
      },
      {
        id: "sources",
        text: "Claims cite authoritative sources",
        hint: "Stats, studies, official docs.",
      },
      {
        id: "images",
        text: "Image, chart, or video every ~400 words",
        hint: "Breaks up text, boosts dwell time.",
      },
      {
        id: "readability",
        text: "Reading level ≤ 8th grade",
        hint: "Use short sentences, active voice.",
      },
      {
        id: "faq",
        text: "FAQ section targets People Also Ask queries",
        hint: "Each Q is a separate H3.",
      },
    ],
  },
  {
    id: "local",
    title: "Local SEO Checklist",
    icon: "P",
    description:
      "Everything a local business should do to own its service area.",
    items: [
      {
        id: "gbp",
        text: "Google Business Profile claimed & verified",
        hint: "100% completed profile beats 50%.",
      },
      {
        id: "nap",
        text: "NAP consistent across site, GBP, directories",
        hint: "Name, address, phone — identical everywhere.",
      },
      {
        id: "reviews",
        text: "Active strategy for collecting reviews",
        hint: "Post-purchase email + QR at checkout.",
      },
      {
        id: "review-reply",
        text: "Responding to every review (good + bad)",
        hint: "Shows engagement, boosts local ranking.",
      },
      {
        id: "local-schema",
        text: "LocalBusiness schema on site",
        hint: "Includes address, phone, hours.",
      },
      {
        id: "local-content",
        text: "Location-specific pages for each area served",
        hint: "Avoid doorway/duplicate pages — make them unique.",
      },
      {
        id: "citations",
        text: "Listed in top 10 local citation sites",
        hint: "Yelp, BBB, Yellow Pages, Apple Maps, Bing Places.",
      },
    ],
  },
];
