/* =========================================================
   Views — pure functions returning HTML strings for each route
   Event wiring happens in app.js after mount.
   ========================================================= */

window.ATS_VIEWS = (function () {
  const { esc, slugify } = window.ATS_UTILS;

  // --------- HOME ---------
  function home() {
    const courseCount = window.ATS_COURSES.length;
    const tplCount = window.ATS_TEMPLATES.length;
    const lessonCount = window.ATS_COURSES.reduce(
      (n, c) => n + c.lessons.length,
      0
    );
    const glossCount = window.ATS_GLOSSARY.length;

    const featured = window.ATS_COURSES.slice(0, 3)
      .map(
        (c) => `
      <a class="card hoverable course-card" href="#/learn/${c.id}">
        <div class="course-header">
          <span class="course-icon">${c.icon}</span>
          <div>
            <span class="badge ${
              c.level === "Beginner"
                ? ""
                : c.level === "Intermediate"
                ? "orange"
                : "gray"
            }">${c.level}</span>
          </div>
        </div>
        <h3 class="card-title">${esc(c.title)}</h3>
        <p class="card-lead">${esc(c.tagline)}</p>
        <p class="card-meta">${c.lessons.length} lessons · ${c.duration}</p>
      </a>`
      )
      .join("");

    return `
      <section class="hero">
        <h1>Learn SEO the <span class="accent">practical way</span> — no jargon, no gatekeeping.</h1>
        <p class="lead">
          AllThingsSEO is a beginner-friendly training app for marketers, founders, and product teams.
          Learn core SEO concepts in minutes, then ship them with prebuilt, customizable templates.
        </p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#/learn">Start learning</a>
          <a class="btn btn-secondary" href="#/templates">Browse templates</a>
          <a class="btn btn-outline" href="#/tools">Try the tools</a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat"><strong>${courseCount}</strong><span>Courses</span></div>
          <div class="hero-stat"><strong>${lessonCount}</strong><span>Lessons</span></div>
          <div class="hero-stat"><strong>${tplCount}</strong><span>Templates</span></div>
          <div class="hero-stat"><strong>${glossCount}</strong><span>Glossary terms</span></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>Start here — SEO fundamentals</h2>
            <p>Three short courses that cover the 80% of SEO you need on day one.</p>
          </div>
          <a class="btn btn-ghost" href="#/learn">View all courses →</a>
        </div>
        <div class="grid cols-3">${featured}</div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>What you can do in AllThingsSEO</h2>
            <p>Learn, practice, and ship — all in one place.</p>
          </div>
        </div>
        <div class="grid cols-4">
          <a class="card hoverable" href="#/learn">
            <span class="badge">Learn</span>
            <h3 class="card-title mt-4">Bite-sized courses</h3>
            <p class="card-lead">Beginner → Advanced. Each lesson in under 5 minutes, with a short quiz.</p>
          </a>
          <a class="card hoverable" href="#/templates">
            <span class="badge orange">Templates</span>
            <h3 class="card-title mt-4">Prebuilt & customizable</h3>
            <p class="card-lead">Blog, product, landing, local, SaaS, launch campaign — fill, preview, copy.</p>
          </a>
          <a class="card hoverable" href="#/checklists">
            <span class="badge green">Checklists</span>
            <h3 class="card-title mt-4">Actionable SEO checklists</h3>
            <p class="card-lead">Launch, technical, content, and local audits — progress saved automatically.</p>
          </a>
          <a class="card hoverable" href="#/tools">
            <span class="badge gray">Tools</span>
            <h3 class="card-title mt-4">Quick SEO utilities</h3>
            <p class="card-lead">Title & meta checker, keyword density, readability, slug generator.</p>
          </a>
        </div>
      </section>
    `;
  }

  // --------- LEARN INDEX ---------
  function learn() {
    const byLevel = { Beginner: [], Intermediate: [], Advanced: [] };
    window.ATS_COURSES.forEach((c) => byLevel[c.level].push(c));

    function renderLevel(level, list, badge) {
      if (!list.length) return "";
      return `
        <section class="section">
          <div class="section-head">
            <div>
              <h2><span class="badge ${badge}">${level}</span> ${list.length} ${
        list.length === 1 ? "course" : "courses"
      }</h2>
            </div>
          </div>
          <div class="grid cols-3">
            ${list
              .map(
                (c) => `
              <a class="card hoverable course-card" href="#/learn/${c.id}">
                <div class="course-header">
                  <span class="course-icon">${c.icon}</span>
                </div>
                <h3 class="card-title">${esc(c.title)}</h3>
                <p class="card-lead">${esc(c.tagline)}</p>
                <p class="card-meta">${c.lessons.length} lessons · ${c.duration}</p>
              </a>`
              )
              .join("")}
          </div>
        </section>`;
    }

    return `
      <div class="breadcrumb"><a href="#/">Home</a><span class="sep">›</span>Learn</div>
      <h1>Courses</h1>
      <p class="text-muted mb-6">
        A full SEO curriculum for non-SEO people. Start at Beginner — each course stacks on the last.
      </p>
      ${renderLevel("Beginner", byLevel.Beginner, "")}
      ${renderLevel("Intermediate", byLevel.Intermediate, "orange")}
      ${renderLevel("Advanced", byLevel.Advanced, "gray")}
    `;
  }

  // --------- COURSE DETAIL ---------
  function course(courseId) {
    const c = window.ATS_COURSES.find((x) => x.id === courseId);
    if (!c) return notFound();

    const idx = window.ATS_COURSES.findIndex((x) => x.id === courseId);
    const next = window.ATS_COURSES[idx + 1];
    const prev = window.ATS_COURSES[idx - 1];

    const lessons = c.lessons
      .map(
        (l, i) => `
        <li>
          <span class="lesson-num">${i + 1}</span>
          <div class="lesson-body">
            <h4>${esc(l.title)}</h4>
            <p><em>${esc(l.summary)}</em></p>
            <p>${esc(l.body)}</p>
            ${
              l.keyPoint
                ? `<span class="key-point">🎯 ${esc(l.keyPoint)}</span>`
                : ""
            }
          </div>
        </li>`
      )
      .join("");

    const quiz = c.quiz
      ? `
      <div class="quiz" data-answer="${c.quiz.answer}" data-explain="${esc(
          c.quiz.explain
        )}">
        <h3>Quick quiz</h3>
        <p class="quiz-question"><strong>${esc(c.quiz.question)}</strong></p>
        <div class="quiz-options">
          ${c.quiz.options
            .map(
              (o, i) =>
                `<button class="quiz-option" data-idx="${i}">${esc(o)}</button>`
            )
            .join("")}
        </div>
        <div class="quiz-feedback"></div>
      </div>`
      : "";

    return `
      <div class="breadcrumb">
        <a href="#/">Home</a><span class="sep">›</span>
        <a href="#/learn">Learn</a><span class="sep">›</span>${esc(c.title)}
      </div>
      <div class="flex gap wrap between center mb-4">
        <div>
          <span class="badge ${
            c.level === "Beginner"
              ? ""
              : c.level === "Intermediate"
              ? "orange"
              : "gray"
          }">${c.level}</span>
          <h1 style="margin-top:.4rem">${esc(c.title)}</h1>
          <p class="text-muted" style="margin:0">${esc(c.tagline)} · ${
      c.lessons.length
    } lessons · ${c.duration}</p>
        </div>
      </div>

      <ul class="lesson-list">${lessons}</ul>

      ${quiz}

      <div class="flex gap wrap between" style="margin-top:2rem">
        ${
          prev
            ? `<a class="btn btn-outline" href="#/learn/${prev.id}">← ${esc(
                prev.title
              )}</a>`
            : "<span></span>"
        }
        ${
          next
            ? `<a class="btn btn-primary" href="#/learn/${next.id}">${esc(
                next.title
              )} →</a>`
            : `<a class="btn btn-primary" href="#/templates">Try the templates →</a>`
        }
      </div>
    `;
  }

  // --------- TEMPLATES INDEX ---------
  function templates() {
    const categories = [...new Set(window.ATS_TEMPLATES.map((t) => t.category))];

    const cards = window.ATS_TEMPLATES.map(
      (t) => `
      <a class="card hoverable" href="#/templates/${t.id}">
        <div class="course-header">
          <span class="course-icon">${t.icon}</span>
          <span class="badge orange">${esc(t.category)}</span>
        </div>
        <h3 class="card-title">${esc(t.title)}</h3>
        <p class="card-lead">${esc(t.summary)}</p>
      </a>`
    ).join("");

    return `
      <div class="breadcrumb"><a href="#/">Home</a><span class="sep">›</span>Templates</div>
      <h1>Prebuilt SEO Templates</h1>
      <p class="text-muted mb-6">
        Fill in the fields, preview the live SERP snippet + structured data, then copy it into your site.
        Every template is free and fully customizable.
      </p>
      <p class="mb-4 text-muted"><strong>Categories:</strong> ${categories
        .map((c) => `<span class="badge orange" style="margin-right:.4rem">${esc(c)}</span>`)
        .join("")}</p>
      <div class="grid cols-3">${cards}</div>
    `;
  }

  // --------- TEMPLATE DETAIL / CUSTOMIZER ---------
  function template(tplId) {
    const t = window.ATS_TEMPLATES.find((x) => x.id === tplId);
    if (!t) return notFound();

    const fields = t.fields
      .map((f) => {
        const id = `f-${f.key}`;
        const ctrl =
          f.type === "textarea"
            ? `<textarea id="${id}" data-key="${f.key}" data-max="${
                f.max || ""
              }" placeholder="${esc(f.placeholder || "")}">${esc(
                f.default || ""
              )}</textarea>`
            : `<input id="${id}" data-key="${f.key}" data-max="${
                f.max || ""
              }" type="text" value="${esc(f.default || "")}" placeholder="${esc(
                f.placeholder || ""
              )}" />`;
        return `
        <div class="field">
          <label for="${id}">
            <span>${esc(f.label)}</span>
            <span class="char-count" data-for="${f.key}"></span>
          </label>
          ${ctrl}
          ${f.hint ? `<div class="hint">${esc(f.hint)}</div>` : ""}
        </div>`;
      })
      .join("");

    return `
      <div class="breadcrumb">
        <a href="#/">Home</a><span class="sep">›</span>
        <a href="#/templates">Templates</a><span class="sep">›</span>${esc(t.title)}
      </div>
      <div class="flex between center wrap mb-4 gap">
        <div>
          <span class="badge orange">${esc(t.category)}</span>
          <h1 style="margin-top:.4rem">${esc(t.title)}</h1>
          <p class="text-muted" style="margin:0">${esc(t.summary)}</p>
        </div>
        <div class="flex gap">
          <button class="btn btn-outline" id="tpl-reset">Reset</button>
          <button class="btn btn-primary" id="tpl-copy">Copy HTML &lt;head&gt;</button>
        </div>
      </div>

      <div class="tpl-layout" id="tpl-layout" data-tpl="${t.id}">
        <div class="tpl-form">
          <h3>Customize</h3>
          ${fields}
        </div>
        <div class="tpl-preview" id="tpl-preview">
          <h3>Live preview</h3>
          <div id="tpl-preview-body"></div>
        </div>
      </div>
    `;
  }

  function renderTemplatePreview(tpl, values) {
    const out = tpl.render(values);
    const titleS = window.ATS_TOOLS.titleStatus(out.title);
    const metaS = window.ATS_TOOLS.metaStatus(out.metaDescription);

    return `
      <div class="preview-block">
        <h5>SERP preview (Google)</h5>
        <div class="serp">
          <div class="url">${esc(out.url)}</div>
          <div class="title">${esc(out.title || "Your SEO title here")}</div>
          <div class="desc">${esc(
            out.metaDescription || "Your meta description appears here in results."
          )}</div>
        </div>
        <p class="mt-4" style="margin-bottom:.3rem">
          <strong>Title:</strong> ${out.title.length} chars
          <span class="char-count ${titleS.klass}">· ${titleS.note}</span>
        </p>
        <p style="margin:0">
          <strong>Meta:</strong> ${out.metaDescription.length} chars
          <span class="char-count ${metaS.klass}">· ${metaS.note}</span>
        </p>
      </div>

      <div class="preview-block">
        <h5>HTML &lt;head&gt; snippet</h5>
        <pre class="code-block" id="tpl-head">${esc(out.htmlHead)}</pre>
      </div>

      <div class="preview-block">
        <h5>Structured data (JSON-LD)</h5>
        <pre class="code-block">&lt;script type="application/ld+json"&gt;
${esc(out.jsonLd)}
&lt;/script&gt;</pre>
      </div>

      <div class="preview-block">
        <h5>Content outline</h5>
        <pre class="code-block">${out.outline.map(esc).join("\n")}</pre>
      </div>
    `;
  }

  // --------- CHECKLISTS ---------
  function checklists() {
    const storeKey = "ats_checklist_state";
    const state = JSON.parse(localStorage.getItem(storeKey) || "{}");

    const groups = window.ATS_CHECKLISTS.map((cl) => {
      const done = cl.items.filter((i) => state[`${cl.id}.${i.id}`]).length;
      const pct = Math.round((done / cl.items.length) * 100);
      const items = cl.items
        .map((i) => {
          const key = `${cl.id}.${i.id}`;
          const checked = state[key] ? "checked" : "";
          const doneClass = state[key] ? "done" : "";
          return `
          <label class="checklist-item ${doneClass}">
            <input type="checkbox" data-key="${key}" ${checked} />
            <span class="c-text">
              <strong>${esc(i.text)}</strong>
              ${i.hint ? `<small>${esc(i.hint)}</small>` : ""}
            </span>
          </label>`;
        })
        .join("");
      return `
        <div class="card checklist-group" data-group="${cl.id}">
          <h3><span class="course-icon">${cl.icon}</span> ${esc(cl.title)}</h3>
          <p class="text-muted">${esc(cl.description)}</p>
          <p class="card-meta"><span class="cl-count">${done}/${cl.items.length}</span> complete</p>
          <div class="progress-bar"><div class="fill" style="width:${pct}%"></div></div>
          <div class="mt-4">${items}</div>
        </div>`;
    }).join("");

    return `
      <div class="breadcrumb"><a href="#/">Home</a><span class="sep">›</span>Checklists</div>
      <h1>SEO Checklists</h1>
      <p class="text-muted mb-6">
        Progress is saved automatically in your browser. Tick as you go.
      </p>
      ${groups}
    `;
  }

  // --------- TOOLS ---------
  function tools() {
    return `
      <div class="breadcrumb"><a href="#/">Home</a><span class="sep">›</span>Tools</div>
      <h1>Quick SEO Tools</h1>
      <p class="text-muted mb-6">Paste your content, get instant feedback. No account required.</p>

      <div class="tool-card">
        <h3>🏷️ Title &amp; Meta Checker</h3>
        <p class="text-muted">Check title and meta-description length against Google's display limits.</p>
        <div class="field">
          <label>Title tag <span class="char-count" id="tool-title-count"></span></label>
          <input type="text" id="tool-title" placeholder="Your page title — aim for 50–60 characters" />
        </div>
        <div class="field">
          <label>Meta description <span class="char-count" id="tool-meta-count"></span></label>
          <textarea id="tool-meta" placeholder="Your meta description — aim for 150–160 characters"></textarea>
        </div>
      </div>

      <div class="tool-card">
        <h3>🔑 Keyword Density Analyser</h3>
        <p class="text-muted">Paste your article, see the most-used words and their density. Aim for 1–2% on your primary keyword.</p>
        <div class="field">
          <label>Article text</label>
          <textarea id="tool-density" style="min-height:160px" placeholder="Paste your blog post or landing page copy here..."></textarea>
        </div>
        <div id="tool-density-out" class="tool-result hidden"></div>
      </div>

      <div class="tool-card">
        <h3>📚 Readability Estimator</h3>
        <p class="text-muted">Flesch Reading Ease score. Web content usually wants 60+ (plain English).</p>
        <div class="field">
          <label>Paste any text</label>
          <textarea id="tool-read" style="min-height:120px" placeholder="Paste a paragraph or full article..."></textarea>
        </div>
        <div id="tool-read-out" class="tool-result hidden"></div>
      </div>

      <div class="tool-card">
        <h3>🔗 URL Slug Generator</h3>
        <p class="text-muted">Turn a title into a clean, SEO-friendly URL slug.</p>
        <div class="field">
          <label>Title or phrase</label>
          <input type="text" id="tool-slug-in" placeholder="e.g. 10 Best Running Shoes for Flat Feet in 2024" />
        </div>
        <div id="tool-slug-out" class="tool-result hidden"></div>
      </div>
    `;
  }

  // --------- GLOSSARY ---------
  function glossary() {
    const items = window.ATS_GLOSSARY.slice()
      .sort((a, b) => a.term.localeCompare(b.term))
      .map(
        (g) => `
        <div class="glossary-item" data-term="${esc(g.term.toLowerCase())}">
          <dt>${esc(g.term)}</dt>
          <dd>${esc(g.definition)}</dd>
        </div>`
      )
      .join("");

    return `
      <div class="breadcrumb"><a href="#/">Home</a><span class="sep">›</span>Glossary</div>
      <h1>SEO Glossary</h1>
      <p class="text-muted mb-6">
        ${window.ATS_GLOSSARY.length} plain-English definitions of the terms you'll meet on your SEO journey.
      </p>
      <div class="glossary-search">
        <input type="search" id="glossary-q" placeholder="🔍 Search terms (e.g. canonical, schema, backlink)..." />
      </div>
      <div class="card">
        <dl id="glossary-list">${items}</dl>
      </div>
    `;
  }

  // --------- 404 ---------
  function notFound() {
    return `
      <div class="text-center" style="padding:4rem 0">
        <h1>Page not found</h1>
        <p class="text-muted">That route doesn't exist yet.</p>
        <a class="btn btn-primary" href="#/">← Back home</a>
      </div>
    `;
  }

  return {
    home,
    learn,
    course,
    templates,
    template,
    renderTemplatePreview,
    checklists,
    tools,
    glossary,
    notFound,
  };
})();
