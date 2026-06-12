/* =========================================================
   SEO Courses data — beginner-friendly curriculum
   Used by views.js to render Learn sections and lessons
   ========================================================= */

window.ATS_COURSES = [
  {
    id: "seo-fundamentals",
    level: "Beginner",
    icon: "1",
    title: "SEO Fundamentals",
    tagline: "Understand how search engines work and what ranks content.",
    duration: "45 min",
    lessons: [
      {
        title: "What is SEO, really?",
        summary:
          "SEO (Search Engine Optimization) is the practice of shaping your website so that search engines like Google can find, understand, and recommend it to the right people.",
        body:
          "Think of Google as a librarian for the internet. It reads pages (crawling), decides what each page is about (indexing), and then recommends the best matches when someone asks a question (ranking). SEO is everything you do to make your page easier to crawl, clearer to understand, and more trustworthy to recommend.",
        keyPoint:
          "SEO = help search engines say 'yes, this page is the best answer for that question.'",
      },
      {
        title: "Crawling, indexing, ranking — the 3 steps",
        summary:
          "Every page that shows up in Google goes through three stages: crawl → index → rank.",
        body:
          "Crawling is when Google's bots visit your page. Indexing is when Google stores and categorizes it. Ranking is the order it appears in results. If a page is blocked from crawling, it never gets indexed. If it's not indexed, it can't rank. Each step depends on the one before.",
        keyPoint:
          "Blocked in robots.txt? Missing sitemap? Your best content may never be seen.",
      },
      {
        title: "The 3 pillars: On-page, Off-page, Technical",
        summary:
          "Every SEO task belongs to one of three pillars. Knowing the pillar tells you what to fix.",
        body:
          "On-page SEO is what you write and how you structure it: titles, headings, content, keywords. Off-page SEO is your reputation: backlinks, brand mentions, reviews. Technical SEO is the plumbing: site speed, mobile usability, structured data, crawlability.",
        keyPoint:
          "A healthy site needs all three — great content alone won't rank on a broken site.",
      },
      {
        title: "Search intent — the most important concept",
        summary:
          "Don't just target keywords. Target the *reason* behind the keyword.",
        body:
          "Search intent is the goal behind a query. The four main types are: Informational (learn something), Navigational (find a specific site), Commercial (compare options), Transactional (buy now). A page about 'best running shoes' needs a comparison, not a product page.",
        keyPoint:
          "Match the intent, match the format — a buyer query needs a buying page, not a blog post.",
      },
    ],
    quiz: {
      question:
        "A user searches 'how does ssl work'. What page type should you create to match intent?",
      options: [
        "A product page selling SSL certificates",
        "An educational blog post explaining how SSL works",
        "A pricing comparison page",
        "A homepage with your company info",
      ],
      answer: 1,
      explain:
        "The query is informational ('how does … work'). The matching format is an educational explainer, not a product or pricing page.",
    },
  },
  {
    id: "keyword-research",
    level: "Beginner",
    icon: "2",
    title: "Keyword Research",
    tagline: "Find the words real people use to describe what you sell.",
    duration: "40 min",
    lessons: [
      {
        title: "Seed keywords: start with what you already know",
        summary:
          "Seed keywords are the obvious 3–10 terms that describe your business in plain English.",
        body:
          "Write down the words a friend would use to describe what you do. For a bakery: 'birthday cake', 'custom cake', 'wedding cake'. These are your seeds — everything else branches from them.",
        keyPoint:
          "Don't overthink it. Start with 5–10 seeds and expand from there.",
      },
      {
        title: "Long-tail keywords: where the wins actually are",
        summary:
          "Long-tail keywords are 3+ word phrases with lower volume but much higher intent.",
        body:
          "'Shoes' has millions of searches — and you'll never rank for it. 'Waterproof trail running shoes for wide feet' has 300 searches but converts 10x better. For new sites, ignore short head terms entirely and build authority with long-tail.",
        keyPoint:
          "Target queries where you can realistically rank AND where users actually buy.",
      },
      {
        title: "Volume, difficulty, intent — the three filters",
        summary:
          "A good keyword is reachable (difficulty), worthwhile (volume), and matches what you offer (intent).",
        body:
          "Use free tools like Google Keyword Planner, Google Trends, and the auto-suggest on Google itself. A keyword score is a balance: don't chase 100k searches at KD 80; take 500 searches at KD 15 where you can win.",
        keyPoint:
          "Rankable beats popular. One #1 is worth ten #40s.",
      },
      {
        title: "Grouping keywords into topic clusters",
        summary:
          "Group related keywords and give each group one page — not one page per keyword.",
        body:
          "'Best coffee beans', 'top coffee beans 2024', 'coffee beans review' all mean the same thing. Make one strong page, not three weak ones. This is a topic cluster, and Google ranks clusters, not isolated keywords.",
        keyPoint:
          "One intent = one page. Multiple pages for the same intent compete with each other.",
      },
    ],
    quiz: {
      question:
        "You have 3 blog posts that all target slight variations of 'email marketing tips'. What should you do?",
      options: [
        "Publish them all — more content is better",
        "Merge them into one comprehensive page and redirect the others",
        "Add different keywords to each one to avoid cannibalization",
        "Delete all three and start over",
      ],
      answer: 1,
      explain:
        "This is keyword cannibalization. Consolidating into one authoritative page (and 301-redirecting the others) eliminates competition and concentrates ranking signals.",
    },
  },
  {
    id: "onpage-seo",
    level: "Intermediate",
    icon: "3",
    title: "On-Page SEO",
    tagline: "Make every page unmistakably about one thing.",
    duration: "55 min",
    lessons: [
      {
        title: "Title tags that earn the click",
        summary:
          "Your title tag is both a ranking signal and the headline users see in results.",
        body:
          "Keep titles ~50–60 characters. Put the primary keyword near the front. Add a benefit, number, or year if it's relevant. Avoid keyword stuffing — 'Best Blue Shoes | Blue Shoes | Shoes Blue' fools no one and kills click-through rate.",
        keyPoint:
          "Write for the human first, then double-check a keyword appears.",
      },
      {
        title: "Meta descriptions: the free ad copy",
        summary:
          "Meta descriptions don't directly rank, but they drive clicks — which does affect rankings.",
        body:
          "150–160 characters. Write it like ad copy: promise a benefit, include a CTA, and use the target keyword once (Google bolds it). If you don't write one, Google will pick a random snippet — usually worse.",
        keyPoint:
          "Treat meta descriptions as free ads in search results.",
      },
      {
        title: "Heading structure (H1–H6) is a content outline",
        summary:
          "Use one H1 per page and nest H2s, H3s, etc. to show hierarchy.",
        body:
          "The H1 answers 'what is this page about'. H2s are the main sections. H3s are sub-sections. Clean heading structure helps both users (scannability) and screen readers (accessibility) — and it gives Google a map of your content.",
        keyPoint:
          "If your headings read like a table of contents, you're doing it right.",
      },
      {
        title: "Internal links: share your authority",
        summary:
          "Every time you link from one of your pages to another, you pass ranking signals.",
        body:
          "Link from high-authority pages (your homepage, popular posts) to pages you want to rank. Use descriptive anchor text — 'email marketing guide' beats 'click here'. Aim for 3–6 contextual internal links on every long post.",
        keyPoint:
          "Your best-ranking pages are your most valuable link real estate.",
      },
      {
        title: "Image SEO: alt text, file names, compression",
        summary:
          "Images are ranking signals, accessibility features, and performance liabilities all at once.",
        body:
          "Rename 'IMG_4821.jpg' to 'red-trail-running-shoe.jpg'. Write alt text that describes the image for someone who can't see it. Compress to under 200KB whenever possible. Use modern formats like WebP or AVIF.",
        keyPoint:
          "Alt text is for humans first, search engines second — not keyword dumps.",
      },
    ],
    quiz: {
      question:
        "Which title tag is best for a page about 'how to choose a standing desk'?",
      options: [
        "Standing Desks - Desks - Office Furniture - Shop Now",
        "How to Choose a Standing Desk: 7 Features That Matter in 2024",
        "The BEST!!! Standing Desk Guide — Click Here Now",
        "Standing desk standing desk standing desk review",
      ],
      answer: 1,
      explain:
        "Option B puts the primary keyword near the front, promises a clear benefit (7 features), includes a year for freshness, and fits the 50–60 character range.",
    },
  },
  {
    id: "technical-seo",
    level: "Intermediate",
    icon: "4",
    title: "Technical SEO",
    tagline: "Remove the invisible obstacles that stop good content from ranking.",
    duration: "65 min",
    lessons: [
      {
        title: "Page speed and Core Web Vitals",
        summary:
          "Google measures three metrics — LCP, INP, CLS — to score real-user experience.",
        body:
          "LCP (Largest Contentful Paint) should be under 2.5s. INP (Interaction to Next Paint) under 200ms. CLS (Cumulative Layout Shift) under 0.1. Run PageSpeed Insights, fix the biggest issue first (usually images or render-blocking JS), and re-test.",
        keyPoint:
          "Speed is a ranking factor and a conversion factor. Both cost you money.",
      },
      {
        title: "Mobile-first indexing",
        summary:
          "Google ranks the mobile version of your site, not the desktop one.",
        body:
          "If content or structured data is missing on mobile, it may as well not exist. Test your site on a phone. Check that navigation, text, and CTAs work on small screens. Never use 'view on desktop for full content'.",
        keyPoint:
          "If it's not on mobile, it's not in the index.",
      },
      {
        title: "XML sitemaps and robots.txt",
        summary:
          "A sitemap tells Google what exists. robots.txt tells Google what to avoid.",
        body:
          "Submit an XML sitemap to Google Search Console. Keep it under 50k URLs per file. Use robots.txt to block junk (admin, search result pages, staging) — never block things you want ranked. Double-check disallows before shipping.",
        keyPoint:
          "Blocking your whole site in robots.txt is the #1 way to ruin an SEO launch.",
      },
      {
        title: "Bing Webmaster Tools: manual URL submission",
        summary:
          "Manual submission in Bing Webmaster Tools is useful for small batches and one-off indexing nudges.",
        body:
          "After publishing, open your verified site in Bing Webmaster Tools and submit the new URLs through the URL submission feature. Use this when you have a handful of fresh posts or need to quickly re-ping updated pages. It does not replace quality content or internal linking, but it can speed up discovery.",
        keyPoint:
          "Manual Bing submission is best for quick, small-batch updates — not your long-term automation layer.",
      },
      {
        title: "IndexNow: automate discovery at publish time",
        summary:
          "IndexNow lets you notify search engines immediately when URLs are created, updated, or removed.",
        body:
          "Generate an IndexNow key (8–128 characters), host the matching .txt key file at your site root, then submit URLs to https://www.bing.com/indexnow. You can submit one URL via query string or up to 10,000 URLs in a JSON batch. Common responses: 200 (received), 202 (accepted, pending validation), 403 (invalid key), 422 (host mismatch), and 429 (rate limited).",
        keyPoint:
          "For active blogs, IndexNow in your publish flow is the scalable option; manual submission is the backup.",
      },
      {
        title: "Structured data (schema.org)",
        summary:
          "Schema markup tells Google exactly what your page is — a recipe, an event, a product, a FAQ.",
        body:
          "Add JSON-LD snippets to your pages to unlock rich results (star ratings, prices, FAQs in search). Use Google's Rich Results Test to validate. Start with schema that matches your content type: Product, Article, LocalBusiness, FAQPage.",
        keyPoint:
          "Rich results take up more real estate on the page and steal clicks from competitors.",
      },
      {
        title: "Canonical URLs and duplicate content",
        summary:
          "When multiple URLs show the same content, tell Google which one is the 'real' one.",
        body:
          "Use <link rel='canonical' href='...' /> on every page. For paginated, filtered, or tracking-parameter URLs, canonicalize to the master URL. This consolidates ranking signals and prevents duplicate content penalties.",
        keyPoint:
          "Duplicate content dilutes ranking power across copies. Pick one winner.",
      },
    ],
    quiz: {
      question:
        "Your product page loads fast on desktop but is sluggish on mobile. Which metric matters most to Google?",
      options: [
        "Desktop PageSpeed score",
        "Mobile Core Web Vitals",
        "Neither — Google uses average speed",
        "Only time to first byte",
      ],
      answer: 1,
      explain:
        "Google uses mobile-first indexing, so mobile Core Web Vitals (LCP, INP, CLS) are what count for ranking.",
    },
  },
  {
    id: "content-strategy",
    level: "Intermediate",
    icon: "5",
    title: "Content Strategy That Ranks",
    tagline: "Publish fewer pages, but make each one obviously the best answer.",
    duration: "58 min",
    lessons: [
      {
        title: "Topic clusters and pillar pages",
        summary:
          "A pillar page covers a big topic broadly; cluster pages cover sub-topics deeply.",
        body:
          "Build a pillar like '/guides/email-marketing' that covers the whole topic at a high level. Then build 10–20 cluster posts ('welcome emails', 'segmentation', 'open rates') that each link back to the pillar. Google recognizes this structure as topical authority.",
        keyPoint:
          "Depth beats breadth. Own a topic rather than dabbling in many.",
      },
      {
        title: "Batch publishing without cannibalization",
        summary:
          "Publishing multiple blog posts at once is fine; overlap and weak differentiation are the real risks.",
        body:
          "A 6-post batch around one theme (like ai-cloud) can strengthen topical authority if each post targets a distinct intent and all pages are strongly interlinked. Problems happen when multiple posts target near-identical keyword angles. Keep one clear topic hub, differentiate each post's intent, and monitor indexing/impressions for 2–6 weeks before judging performance.",
        keyPoint:
          "Batch size does not hurt SEO by itself — poor differentiation and weak internal linking do.",
      },
      {
        title: "E-E-A-T: Experience, Expertise, Authority, Trust",
        summary:
          "Google wants to recommend content from people who actually know the subject.",
        body:
          "Add author bios with credentials. Cite sources. Update old content. Include first-person experience ('I tested 12 mattresses for 3 weeks'). E-E-A-T isn't a score you can see, but it's a lens Google's raters use — and the rest of the algorithm follows.",
        keyPoint:
          "Anonymous AI-generated content with no author and no sources is exactly what E-E-A-T rejects.",
      },
      {
        title: "Writing for people (and search engines will follow)",
        summary:
          "Short sentences. Scannable headers. Answer the question in the first paragraph.",
        body:
          "Open with the direct answer. Use H2s for main points. Use bullet lists and numbered steps. Include images every 300–400 words. Write at an 8th-grade reading level. Long walls of text lose users — and Google measures that.",
        keyPoint:
          "Dwell time and bounce rate are felt through user behavior — write for humans.",
      },
      {
        title: "Content refresh: update, don't just add",
        summary:
          "Updating a post from 2021 is often faster and more effective than writing a new one.",
        body:
          "Find your slipping posts in Search Console. Update the publish date only after you've genuinely improved the content: new stats, better examples, revised intro. Old posts often rank again immediately after a real refresh.",
        keyPoint:
          "Your archive is an asset. Maintain it like a garden.",
      },
    ],
    quiz: {
      question: "You run a fitness blog. Which is the strongest content strategy?",
      options: [
        "Publish 1 post daily on any fitness topic",
        "Publish 1 pillar page on 'home workouts' + 20 deep cluster posts linked to it",
        "Publish 20 short posts each targeting different unrelated keywords",
        "Publish one massive 20,000-word post on 'fitness'",
      ],
      answer: 1,
      explain:
        "The pillar + cluster approach builds topical authority, captures long-tail queries, and concentrates ranking signals — the formula Google rewards.",
    },
  },
  {
    id: "offpage-seo",
    level: "Advanced",
    icon: "6",
    title: "Off-Page SEO & Authority",
    tagline: "Build reputation signals that search engines can measure.",
    duration: "45 min",
    lessons: [
      {
        title: "What makes a backlink valuable",
        summary:
          "Not all links are equal. Relevance and authority beat raw quantity every time.",
        body:
          "A single link from a trusted publication in your niche is worth more than 100 links from random directories. Check domain authority, topical relevance, and editorial context. Avoid any scheme that sells or trades links — Google penalizes these.",
        keyPoint:
          "One great link beats 100 junk links — always.",
      },
      {
        title: "Link-earning tactics that still work",
        summary:
          "Digital PR, original research, free tools, expert roundups, guest posts on reputable sites.",
        body:
          "Publish something link-worthy — original data, a useful free tool, a definitive guide. Then pitch journalists, bloggers, and podcast hosts who cover your space. Help a Reporter Out (HARO) and Connectively can land high-DA mentions for free.",
        keyPoint:
          "Create something worth linking to. Then tell people about it.",
      },
      {
        title: "Brand mentions and unlinked citations",
        summary:
          "Mentions without a link still count as a brand signal — and can be converted.",
        body:
          "Set up a Google Alert for your brand name. When you find an unlinked mention, politely email the author asking for a link. Most will add it. This is the highest-conversion link outreach there is.",
        keyPoint:
          "Every mention is an opportunity. Every opportunity is a link.",
      },
      {
        title: "Reviews, reputation, and local authority",
        summary:
          "For local businesses, reviews on Google, Yelp, Trustpilot, etc. drive rankings more than backlinks.",
        body:
          "Respond to every review — good or bad. Consistent 4+ star ratings with recent activity boost local rankings. For ecommerce, review rich snippets steal clicks in results. Build review requests into your post-purchase email flow.",
        keyPoint:
          "Reputation IS ranking — for local and consumer businesses especially.",
      },
    ],
    quiz: {
      question:
        "Which backlink strategy is most likely to get your site penalized?",
      options: [
        "Publishing original research that others cite",
        "Paying for guest posts on a private blog network (PBN)",
        "Building a free tool that bloggers embed",
        "Getting quoted in a news article via HARO",
      ],
      answer: 1,
      explain:
        "PBNs are link schemes that explicitly violate Google's guidelines. When detected, they trigger manual penalties that can drop your site from the index.",
    },
  },
  {
    id: "measuring-seo",
    level: "Advanced",
    icon: "7",
    title: "Measuring SEO Impact",
    tagline: "Prove SEO is working (or know why it isn't).",
    duration: "40 min",
    lessons: [
      {
        title: "Google Search Console is your most important tool",
        summary:
          "It's free, it's official, and it shows what Google actually does with your site.",
        body:
          "Check Performance (impressions, clicks, CTR, position), Coverage (what's indexed), Core Web Vitals, and Enhancements. Focus on queries where you rank 8–20 — those are pages you can push to page 1 with small improvements.",
        keyPoint:
          "Search Console shows truth. Third-party tools are estimates.",
      },
      {
        title: "The 4 metrics that actually matter",
        summary:
          "Impressions, clicks, CTR, and average position. Ignore vanity metrics.",
        body:
          "Impressions tell you if you're reaching the audience. CTR tells you if your title/meta are compelling. Position tells you where you rank. Clicks = traffic. If impressions rise but clicks don't, fix titles and metas before doing anything else.",
        keyPoint:
          "Rising impressions + flat clicks = rewrite your titles and metas.",
      },
      {
        title: "Attribution: what SEO traffic actually did",
        summary:
          "Rankings are a vanity metric. Revenue, signups, and leads are what count.",
        body:
          "Use GA4 to tag 'organic' traffic and measure downstream conversions. Map rankings → sessions → conversions → revenue. Build a simple dashboard showing: top landing pages, their conversion rate, and revenue per page. That's your ROI story.",
        keyPoint:
          "SEO ROI = new revenue from organic traffic ÷ investment. Own that number.",
      },
      {
        title: "Setting realistic SEO goals and timelines",
        summary:
          "New sites: 6–12 months. Existing sites: 3–6 months. There are no shortcuts.",
        body:
          "Google sandboxes new sites, and ranking signals take months to accumulate. Set 90-day OKRs based on leading indicators (published pages, technical fixes, backlinks) not lagging ones (rankings, revenue). The lagging metrics follow — slowly.",
        keyPoint:
          "SEO is compound interest. The first months look flat. Then they don't.",
      },
    ],
    quiz: {
      question:
        "In Search Console, you see a query ranked at position 9 with 50k impressions but only a 1.1% CTR. What's the fix?",
      options: [
        "Build more backlinks to push it up",
        "Rewrite the title tag and meta description",
        "Delete the page and start over",
        "Nothing — it's working as intended",
      ],
      answer: 1,
      explain:
        "Position 9 means it's visible on page 1. A 1.1% CTR is below average for that position, which almost always means the title/meta aren't compelling. Rewriting them is the highest-ROI fix.",
    },
  },
  {
    id: "tracking-attribution",
    level: "Advanced",
    icon: "8",
    title: "Tracking & Attribution for Marketers",
    tagline: "Connect every campaign to revenue — pixels, tags, UTMs, and consent.",
    duration: "55 min",
    lessons: [
      {
        title: "Google Tag Manager: one container to rule them all",
        summary:
          "GTM lets you add and manage tracking tags without touching your website's code.",
        body:
          "Google Tag Manager is a free tag management system. Instead of hard-coding every pixel and script into your HTML, you install one GTM container snippet, then add, edit, or remove tags (Meta Pixel, GA4, Google Ads, LinkedIn, etc.) from a web dashboard. Tags fire based on 'triggers' (page view, button click, form submit) and pass data through 'variables'. This means marketers can ship tracking changes in minutes without waiting for a developer.",
        keyPoint:
          "One snippet to install. All tags managed from a dashboard. No code deploys needed.",
      },
      {
        title: "GA4: events, conversions, and traffic sources",
        summary:
          "Google Analytics 4 is event-based — every interaction is an event, and you mark the important ones as conversions.",
        body:
          "GA4 replaced Universal Analytics with an event-driven model. A 'page_view' is an event. A 'purchase' is an event. A 'sign_up' is an event. You choose which events count as conversions. Set up traffic source grouping (organic, paid, social, email, direct) to see which channels drive those conversions. The Acquisition report shows first-touch; the Engagement report shows behavior; the Monetization report shows revenue. Connect GA4 to Search Console for a unified organic view.",
        keyPoint:
          "Mark your money events as conversions. Everything else is noise.",
      },
      {
        title: "Meta (Facebook) Pixel and Conversions API",
        summary:
          "The Meta Pixel tracks visitor actions on your site so you can build audiences, optimize ads, and measure conversions.",
        body:
          "The Meta Pixel is a JavaScript snippet you place on your site (ideally via GTM). It fires standard events like PageView, ViewContent, AddToCart, Lead, and Purchase. These events feed Meta's ad algorithm so it can find more people like your converters. Because browser privacy changes (iOS 14+, cookie blockers) degrade pixel accuracy, Meta also offers the Conversions API (CAPI) — a server-to-server connection that sends the same events directly from your backend, bypassing the browser. Best practice: run both Pixel and CAPI with deduplication so Meta gets the most complete data.",
        keyPoint:
          "Pixel = browser-side tracking. CAPI = server-side. Run both for maximum signal.",
      },
      {
        title: "UTM parameters: tag every campaign link",
        summary:
          "UTMs are query parameters you add to URLs so analytics tools know exactly which campaign, source, and medium drove each visit.",
        body:
          "A UTM-tagged URL looks like: yoursite.com/sale?utm_source=facebook&utm_medium=paid_social&utm_campaign=summer_sale&utm_content=hero_banner. The five parameters are: source (where — facebook, google, newsletter), medium (how — cpc, email, organic_social), campaign (why — summer_sale, launch_v2), term (keyword, for paid search), content (which creative variant). Without UTMs, GA4 lumps everything into 'direct' or 'unassigned'. With UTMs, you see exactly which ad, email, or post drove each conversion.",
        keyPoint:
          "No UTMs = no attribution. Every external link to your site needs them.",
      },
      {
        title: "LinkedIn Insight Tag, Google Ads tag, and other pixels",
        summary:
          "Each ad platform has its own pixel — install them all through GTM to avoid code bloat.",
        body:
          "The LinkedIn Insight Tag lets you retarget website visitors on LinkedIn and track conversions from LinkedIn Ads. The Google Ads tag (gtag.js or via GTM) tracks conversions from Google Search, Display, and YouTube campaigns. TikTok Pixel, Pinterest Tag, X (Twitter) Pixel — same pattern. Install each through GTM as a Custom HTML tag or use the platform's native GTM template. Fire them on the same triggers (page view for base, custom events for conversions). This way, every platform sees the same data, and you manage it all in one place.",
        keyPoint:
          "One GTM container + one trigger config = every ad platform tracked consistently.",
      },
      {
        title: "Consent management and privacy compliance",
        summary:
          "GDPR, CCPA, and browser privacy changes mean you must get consent before tracking — and honor it.",
        body:
          "A Consent Management Platform (CMP) like Cookiebot, OneTrust, or Google's built-in Consent Mode shows a cookie banner and collects user choices. GTM's Consent Mode lets tags check consent state before firing — if a user declines marketing cookies, the Meta Pixel won't load. This isn't optional: GDPR fines reach 4% of global revenue, and CCPA gives users the right to opt out of sale/sharing. Set up consent first, then configure each tag to respect it. Google's Consent Mode v2 also models conversions from users who decline, so you don't lose all measurement.",
        keyPoint:
          "No consent = no tracking (legally). Set up your CMP before you add any pixel.",
      },
    ],
    quiz: {
      question:
        "A marketer shares a link to their blog on LinkedIn but doesn't add UTM parameters. In GA4, this traffic will most likely show as:",
      options: [
        "linkedin / paid_social",
        "linkedin / organic_social with full campaign data",
        "direct / (none) or unassigned — with no campaign detail",
        "social / linkedin with conversion data",
      ],
      answer: 2,
      explain:
        "Without UTM parameters, GA4 may detect the referrer as LinkedIn but will have no campaign, medium, or content data. Depending on the app/browser, it may even appear as 'direct'. UTMs are the only reliable way to get full attribution.",
    },
  },
];
