/* =========================================================
   Prebuilt SEO Templates
   Each template has editable fields with hints + a JSON-LD
   schema generator for structured data.
   ========================================================= */

window.ATS_TEMPLATES = [
  {
    id: "blog-post",
    category: "Content",
    title: "Blog / Article Post",
    icon: "B",
    summary:
      "A research-backed blog post template with title, meta, H-structure, and Article schema.",
    fields: [
      {
        key: "primaryKeyword",
        label: "Primary keyword",
        hint: "One phrase — the intent you want to rank for.",
        type: "text",
        placeholder: "e.g. email marketing for ecommerce",
        default: "email marketing for ecommerce",
      },
      {
        key: "title",
        label: "SEO Title (H1 / title tag)",
        hint: "50–60 chars · keyword near front · promise a benefit",
        type: "text",
        max: 60,
        default:
          "Email Marketing for Ecommerce: 9 Flows That Lift Revenue",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        hint: "150–160 chars · ad copy · include keyword once",
        type: "textarea",
        max: 160,
        default:
          "Build an ecommerce email program that actually converts. Learn the 9 automated flows (welcome, cart, browse, win-back) that lift revenue 20–30%.",
      },
      {
        key: "slug",
        label: "URL slug",
        hint: "Short · lowercase · hyphens · no stop words",
        type: "text",
        default: "ecommerce-email-marketing-flows",
      },
      {
        key: "author",
        label: "Author name",
        hint: "Real person + credentials boost E-E-A-T",
        type: "text",
        default: "Jane Doe, Email Strategist",
      },
      {
        key: "intro",
        label: "Intro paragraph",
        hint: "Answer the query in the first 60 words",
        type: "textarea",
        default:
          "The 9 ecommerce email flows below turn first-time visitors into repeat buyers. Set them up once, let them run, and expect 20–30% of total revenue to come from email within 90 days.",
      },
    ],
    render(values) {
      const url = `https://yoursite.com/blog/${values.slug || "your-post"}`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(values.title)}" />
<meta property="og:description" content="${esc(values.metaDescription)}" />
<meta property="og:type" content="article" />
<meta property="og:url" content="${url}" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: values.title,
            description: values.metaDescription,
            author: {
              "@type": "Person",
              name: values.author || "Author",
            },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            keywords: values.primaryKeyword,
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.title}`,
          `H2: Why ${values.primaryKeyword} matters in 2024`,
          `H2: The 9 essential flows — walkthrough`,
          `  H3: Welcome series`,
          `  H3: Abandoned cart`,
          `  H3: Browse abandonment`,
          `  H3: Post-purchase nurture`,
          `  H3: Win-back / lapsed customer`,
          `H2: Copy + design examples (with screenshots)`,
          `H2: KPIs to track weekly`,
          `H2: Frequently asked questions`,
        ],
      };
    },
  },

  {
    id: "ecommerce-product",
    category: "Ecommerce",
    title: "Ecommerce Product Page",
    icon: "E",
    summary:
      "Optimised product page template with Product + Offer schema and review snippets.",
    fields: [
      {
        key: "productName",
        label: "Product name",
        hint: "Clear · specific · real name users search",
        type: "text",
        default: "Terra Wide Trail Running Shoe",
      },
      {
        key: "brand",
        label: "Brand",
        type: "text",
        default: "Terra Outdoor Co.",
      },
      {
        key: "category",
        label: "Primary category",
        hint: "e.g. Men's Trail Running Shoes",
        type: "text",
        default: "Men's Trail Running Shoes",
      },
      {
        key: "title",
        label: "SEO Title",
        hint: "Product + key attribute + brand",
        type: "text",
        max: 65,
        default:
          "Terra Wide Trail Running Shoe — Wide-Foot Fit | Terra Outdoor",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        hint: "Benefit-led · include price or guarantee",
        type: "textarea",
        max: 160,
        default:
          "The Terra Wide trail shoe is built for wide feet on technical terrain. Vibram sole, waterproof mesh, 30-day returns. Free shipping over $75.",
      },
      {
        key: "price",
        label: "Price",
        type: "text",
        default: "129.00",
      },
      {
        key: "currency",
        label: "Currency code",
        hint: "ISO 4217 e.g. USD, EUR, INR",
        type: "text",
        default: "USD",
      },
      {
        key: "rating",
        label: "Average rating (1–5)",
        type: "text",
        default: "4.7",
      },
      {
        key: "reviewCount",
        label: "Number of reviews",
        type: "text",
        default: "238",
      },
      {
        key: "description",
        label: "Product description (first 160 words)",
        hint: "Benefits → features → social proof",
        type: "textarea",
        default:
          "Designed for runners who need width without sacrificing agility, the Terra Wide wraps a Vibram Megagrip sole in waterproof knit mesh. Cushioned for ultra distances. 238 five-star reviews and counting.",
      },
    ],
    render(values) {
      const url = `https://yourshop.com/products/${slugify(values.productName)}`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="product" />
<meta property="product:price:amount" content="${esc(values.price)}" />
<meta property="product:price:currency" content="${esc(values.currency)}" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "Product",
            name: values.productName,
            description: values.description,
            brand: { "@type": "Brand", name: values.brand },
            category: values.category,
            offers: {
              "@type": "Offer",
              price: values.price,
              priceCurrency: values.currency,
              availability: "https://schema.org/InStock",
              url,
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: values.rating,
              reviewCount: values.reviewCount,
            },
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.productName}`,
          `H2: Key features (bullet list)`,
          `H2: Specifications`,
          `H2: What's in the box`,
          `H2: Customer reviews (${values.reviewCount})`,
          `H2: Shipping & returns`,
          `H2: Frequently asked questions`,
        ],
      };
    },
  },

  {
    id: "landing-page",
    category: "Marketing",
    title: "Product Landing Page",
    icon: "L",
    summary:
      "Campaign landing page template with clear CTA, FAQ schema, and conversion-focused structure.",
    fields: [
      {
        key: "product",
        label: "Product / offer name",
        type: "text",
        default: "Launchpad CRM",
      },
      {
        key: "valueProp",
        label: "One-line value proposition",
        hint: "Who is it for + what outcome",
        type: "text",
        default: "The CRM that closes deals while you sleep",
      },
      {
        key: "title",
        label: "SEO title",
        type: "text",
        max: 60,
        default: "Launchpad CRM — Close More Deals on Autopilot",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        type: "textarea",
        max: 160,
        default:
          "Launchpad CRM automates follow-ups, scoring, and handoffs — so your reps only touch warm leads. Start your 14-day free trial (no card).",
      },
      {
        key: "primaryCta",
        label: "Primary CTA text",
        type: "text",
        default: "Start free trial",
      },
      {
        key: "benefit1",
        label: "Benefit #1",
        type: "text",
        default: "Automate lead follow-up in under 10 minutes",
      },
      {
        key: "benefit2",
        label: "Benefit #2",
        type: "text",
        default: "Score every lead with AI — touch warm ones first",
      },
      {
        key: "benefit3",
        label: "Benefit #3",
        type: "text",
        default: "Integrates with 80+ tools including Slack, Gmail, Zapier",
      },
      {
        key: "faqQuestion",
        label: "FAQ question (for schema)",
        type: "text",
        default: "Is there a free trial?",
      },
      {
        key: "faqAnswer",
        label: "FAQ answer",
        type: "textarea",
        default:
          "Yes — 14 days free, no credit card required. Cancel anytime with one click.",
      },
    ],
    render(values) {
      const url = `https://yourbrand.com/${slugify(values.product)}`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(values.title)}" />
<meta property="og:description" content="${esc(values.metaDescription)}" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: values.faqQuestion,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: values.faqAnswer,
                },
              },
            ],
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.valueProp}`,
          `[Hero CTA: ${values.primaryCta}]`,
          `H2: Why teams pick ${values.product}`,
          `  • ${values.benefit1}`,
          `  • ${values.benefit2}`,
          `  • ${values.benefit3}`,
          `H2: How it works (3-step visual)`,
          `H2: Customer results / case studies`,
          `H2: Pricing`,
          `H2: Frequently asked questions`,
          `[Final CTA: ${values.primaryCta}]`,
        ],
      };
    },
  },

  {
    id: "local-business",
    category: "Local",
    title: "Local Business Page",
    icon: "M",
    summary:
      "Service-area page template with LocalBusiness schema, NAP consistency, and review markup.",
    fields: [
      {
        key: "businessName",
        label: "Business name",
        type: "text",
        default: "Riverside Coffee House",
      },
      {
        key: "service",
        label: "Main service / category",
        type: "text",
        default: "Specialty coffee shop",
      },
      {
        key: "city",
        label: "City",
        type: "text",
        default: "Portland",
      },
      {
        key: "state",
        label: "State / region",
        type: "text",
        default: "Oregon",
      },
      {
        key: "streetAddress",
        label: "Street address",
        type: "text",
        default: "42 River Lane",
      },
      {
        key: "zip",
        label: "ZIP / postal code",
        type: "text",
        default: "97201",
      },
      {
        key: "phone",
        label: "Phone (NAP)",
        hint: "Must match Google Business Profile exactly",
        type: "text",
        default: "+1-503-555-0142",
      },
      {
        key: "hours",
        label: "Opening hours",
        type: "text",
        default: "Mo-Fr 07:00-18:00, Sa-Su 08:00-16:00",
      },
      {
        key: "title",
        label: "SEO title",
        type: "text",
        max: 60,
        default: "Riverside Coffee House — Specialty Coffee in Portland, OR",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        type: "textarea",
        max: 160,
        default:
          "Portland's favorite single-origin coffee roastery. Pour-overs, espresso, pastries, and free wifi on River Lane. Open 7 days.",
      },
    ],
    render(values) {
      const url = `https://${slugify(values.businessName)}.com/`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta name="geo.region" content="US-${esc(values.state.slice(0, 2).toUpperCase())}" />
<meta name="geo.placename" content="${esc(values.city)}" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: values.businessName,
            description: values.metaDescription,
            telephone: values.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: values.streetAddress,
              addressLocality: values.city,
              addressRegion: values.state,
              postalCode: values.zip,
              addressCountry: "US",
            },
            openingHours: values.hours,
            url,
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.businessName} — ${values.service} in ${values.city}`,
          `H2: What we're known for`,
          `H2: Menu / services`,
          `H2: Visit us (map, address, hours)`,
          `H2: Customer reviews (Google + Yelp)`,
          `H2: Frequently asked questions`,
          `[NAP block must match GBP]`,
        ],
      };
    },
  },

  {
    id: "saas-feature",
    category: "SaaS",
    title: "SaaS Feature Page",
    icon: "S",
    summary:
      "Feature deep-dive page for SaaS — pairs with a pillar and drives sign-ups from long-tail queries.",
    fields: [
      {
        key: "featureName",
        label: "Feature name",
        type: "text",
        default: "Lead Scoring",
      },
      {
        key: "problem",
        label: "Problem it solves (1 line)",
        type: "text",
        default: "Reps waste time on unqualified leads",
      },
      {
        key: "title",
        label: "SEO title",
        type: "text",
        max: 60,
        default: "Lead Scoring in Launchpad — Rank Every Lead Automatically",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        type: "textarea",
        max: 160,
        default:
          "Launchpad's AI lead scoring ranks every new lead by likelihood to close — so your reps only work the warm ones. Set up in 10 minutes.",
      },
      {
        key: "primaryKeyword",
        label: "Primary keyword",
        type: "text",
        default: "lead scoring software",
      },
      {
        key: "differentiator",
        label: "Main differentiator",
        type: "text",
        default: "Works with your existing CRM, no data migration",
      },
    ],
    render(values) {
      const url = `https://launchpad.com/features/${slugify(values.featureName)}`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(values.title)}" />
<meta property="og:description" content="${esc(values.metaDescription)}" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `Launchpad ${values.featureName}`,
            applicationCategory: "BusinessApplication",
            description: values.metaDescription,
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.featureName} — ${values.problem}`,
          `H2: How ${values.featureName} works`,
          `H2: Why it's different`,
          `  • ${values.differentiator}`,
          `H2: Integrations`,
          `H2: Case study — ${values.primaryKeyword} in action`,
          `H2: FAQ`,
          `[CTA: Start free trial]`,
        ],
      };
    },
  },

  {
    id: "campaign-launch",
    category: "Marketing",
    title: "Product Launch Campaign Hub",
    icon: "C",
    summary:
      "Launch campaign landing page with time-bound offer, social, and Event schema.",
    fields: [
      {
        key: "campaignName",
        label: "Campaign name",
        type: "text",
        default: "Summer Smart-Home Sale",
      },
      {
        key: "startDate",
        label: "Start date (YYYY-MM-DD)",
        type: "text",
        default: "2024-06-01",
      },
      {
        key: "endDate",
        label: "End date (YYYY-MM-DD)",
        type: "text",
        default: "2024-06-30",
      },
      {
        key: "title",
        label: "SEO title",
        type: "text",
        max: 60,
        default: "Summer Smart-Home Sale — Up to 40% Off · Jun 1–30",
      },
      {
        key: "metaDescription",
        label: "Meta description",
        type: "textarea",
        max: 160,
        default:
          "The Summer Smart-Home Sale is here. Save up to 40% on smart lights, locks, and thermostats. Ends June 30. Free shipping on orders over $50.",
      },
      {
        key: "offer",
        label: "Headline offer",
        type: "text",
        default: "Up to 40% off everything",
      },
      {
        key: "hashtag",
        label: "Campaign hashtag",
        type: "text",
        default: "#SmartSummer24",
      },
    ],
    render(values) {
      const url = `https://yourbrand.com/${slugify(values.campaignName)}`;
      return {
        title: values.title,
        metaDescription: values.metaDescription,
        url,
        htmlHead: `<title>${esc(values.title)}</title>
<meta name="description" content="${esc(values.metaDescription)}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${esc(values.title)}" />
<meta property="og:description" content="${esc(values.metaDescription)}" />
<meta property="og:type" content="website" />`,
        jsonLd: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@type": "SaleEvent",
            name: values.campaignName,
            startDate: values.startDate,
            endDate: values.endDate,
            description: values.metaDescription,
            url,
          },
          null,
          2
        ),
        outline: [
          `H1: ${values.campaignName}: ${values.offer}`,
          `[Countdown timer: ends ${values.endDate}]`,
          `H2: Featured deals`,
          `H2: How the sale works`,
          `H2: Customer favorites`,
          `H2: FAQ (shipping, returns, exclusions)`,
          `H2: Share on social — ${values.hashtag}`,
        ],
      };
    },
  },
];

/* =========================================================
   Helpers attached to window for tools.js / views.js reuse
   ========================================================= */
function esc(str) {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function slugify(s) {
  return String(s || "")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
window.ATS_UTILS = { esc, slugify };
