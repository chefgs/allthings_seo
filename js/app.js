/* =========================================================
   AllThingsSEO — App entry: hash router + event wiring
   ========================================================= */

(function () {
  const viewEl = document.getElementById("view");
  const nav = document.getElementById("primary-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const toastEl = document.getElementById("toast");

  // ---------- Toast ----------
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
  }

  // ---------- Router ----------
  function parseHash() {
    const h = location.hash.replace(/^#/, "") || "/";
    const parts = h.split("/").filter(Boolean);
    return parts;
  }

  function setActiveNav(path) {
    document.querySelectorAll(".primary-nav a").forEach((a) => {
      const r = a.getAttribute("data-route");
      a.classList.toggle(
        "active",
        r === "/"
          ? path === "/"
          : path === r || path.startsWith(r + "/")
      );
    });
  }

  function render() {
    const parts = parseHash();
    const top = "/" + (parts[0] || "");
    setActiveNav(top);
    window.scrollTo({ top: 0, behavior: "instant" });

    let html = "";
    if (parts.length === 0) {
      html = window.ATS_VIEWS.home();
    } else if (parts[0] === "learn" && parts.length === 1) {
      html = window.ATS_VIEWS.learn();
    } else if (parts[0] === "learn" && parts.length === 2) {
      html = window.ATS_VIEWS.course(parts[1]);
    } else if (parts[0] === "templates" && parts.length === 1) {
      html = window.ATS_VIEWS.templates();
    } else if (parts[0] === "templates" && parts.length === 2) {
      html = window.ATS_VIEWS.template(parts[1]);
    } else if (parts[0] === "checklists") {
      html = window.ATS_VIEWS.checklists();
    } else if (parts[0] === "tools") {
      html = window.ATS_VIEWS.tools();
    } else if (parts[0] === "glossary") {
      html = window.ATS_VIEWS.glossary();
    } else {
      html = window.ATS_VIEWS.notFound();
    }

    viewEl.innerHTML = html;
    wireView(parts);

    // Close mobile nav on navigation
    nav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }

  // ---------- View-specific wiring ----------
  function wireView(parts) {
    if (parts[0] === "learn" && parts[1]) wireQuiz();
    if (parts[0] === "templates" && parts[1]) wireTemplate(parts[1]);
    if (parts[0] === "checklists") wireChecklists();
    if (parts[0] === "tools") wireTools();
    if (parts[0] === "glossary") wireGlossary();
  }

  // ---------- Quiz ----------
  function wireQuiz() {
    const quiz = document.querySelector(".quiz");
    if (!quiz) return;
    const correct = Number(quiz.dataset.answer);
    const explain = quiz.dataset.explain || "";
    const feedback = quiz.querySelector(".quiz-feedback");
    quiz.querySelectorAll(".quiz-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.idx);
        quiz.querySelectorAll(".quiz-option").forEach((b) => (b.disabled = true));
        if (idx === correct) {
          btn.classList.add("correct");
          feedback.innerHTML = `<strong style="color:#1f7c54">✓ Correct.</strong> ${escapeHtml(
            explain
          )}`;
        } else {
          btn.classList.add("wrong");
          quiz
            .querySelector(`.quiz-option[data-idx="${correct}"]`)
            .classList.add("correct");
          feedback.innerHTML = `<strong style="color:#b94a4a">✗ Not quite.</strong> ${escapeHtml(
            explain
          )}`;
        }
      });
    });
  }

  // ---------- Templates ----------
  function wireTemplate(tplId) {
    const tpl = window.ATS_TEMPLATES.find((t) => t.id === tplId);
    if (!tpl) return;
    const previewBody = document.getElementById("tpl-preview-body");
    const form = document.getElementById("tpl-layout");

    function getValues() {
      const values = {};
      form.querySelectorAll("[data-key]").forEach((el) => {
        values[el.dataset.key] = el.value;
      });
      return values;
    }

    function updateCharCount(el) {
      const max = Number(el.dataset.max || 0);
      if (!max) return;
      const count = el.value.length;
      const badge = form.querySelector(
        `.char-count[data-for="${el.dataset.key}"]`
      );
      if (!badge) return;
      badge.textContent = `${count}/${max}`;
      badge.classList.remove("ok", "warn", "bad");
      if (count === 0) badge.classList.add("warn");
      else if (count > max) badge.classList.add("bad");
      else if (count > max * 0.9) badge.classList.add("ok");
      else badge.classList.add("ok");
    }

    function refresh() {
      const values = getValues();
      previewBody.innerHTML = window.ATS_VIEWS.renderTemplatePreview(tpl, values);
    }

    form.querySelectorAll("[data-key]").forEach((el) => {
      updateCharCount(el);
      el.addEventListener("input", () => {
        updateCharCount(el);
        refresh();
      });
    });

    document.getElementById("tpl-reset").addEventListener("click", () => {
      tpl.fields.forEach((f) => {
        const el = form.querySelector(`[data-key="${f.key}"]`);
        if (el) {
          el.value = f.default || "";
          updateCharCount(el);
        }
      });
      refresh();
      toast("Template reset to defaults");
    });

    document.getElementById("tpl-copy").addEventListener("click", async () => {
      const values = getValues();
      const out = tpl.render(values);
      try {
        await navigator.clipboard.writeText(out.htmlHead);
        toast("HTML head snippet copied to clipboard ✓");
      } catch (e) {
        toast("Copy failed — select and copy manually");
      }
    });

    refresh();
  }

  // ---------- Checklists ----------
  function wireChecklists() {
    const storeKey = "ats_checklist_state";
    const state = JSON.parse(localStorage.getItem(storeKey) || "{}");

    document.querySelectorAll(".checklist-item input").forEach((cb) => {
      cb.addEventListener("change", () => {
        const key = cb.dataset.key;
        if (cb.checked) state[key] = true;
        else delete state[key];
        localStorage.setItem(storeKey, JSON.stringify(state));

        const item = cb.closest(".checklist-item");
        item.classList.toggle("done", cb.checked);

        // update group progress
        const group = cb.closest(".checklist-group");
        const groupId = group.dataset.group;
        const cl = window.ATS_CHECKLISTS.find((c) => c.id === groupId);
        const done = cl.items.filter(
          (i) => state[`${groupId}.${i.id}`]
        ).length;
        const pct = Math.round((done / cl.items.length) * 100);
        group.querySelector(".cl-count").textContent =
          `${done}/${cl.items.length}`;
        group.querySelector(".progress-bar .fill").style.width = pct + "%";
      });
    });
  }

  // ---------- Tools ----------
  function wireTools() {
    const T = window.ATS_TOOLS;

    // Title + meta checker
    const titleIn = document.getElementById("tool-title");
    const titleCount = document.getElementById("tool-title-count");
    const metaIn = document.getElementById("tool-meta");
    const metaCount = document.getElementById("tool-meta-count");

    function updateTitle() {
      const v = titleIn.value;
      const s = T.titleStatus(v);
      titleCount.textContent = `${v.length}/60 · ${s.note}`;
      titleCount.className = "char-count " + s.klass;
    }
    function updateMeta() {
      const v = metaIn.value;
      const s = T.metaStatus(v);
      metaCount.textContent = `${v.length}/160 · ${s.note}`;
      metaCount.className = "char-count " + s.klass;
    }
    titleIn.addEventListener("input", updateTitle);
    metaIn.addEventListener("input", updateMeta);
    updateTitle();
    updateMeta();

    // Keyword density
    const densityIn = document.getElementById("tool-density");
    const densityOut = document.getElementById("tool-density-out");
    densityIn.addEventListener("input", () => {
      const { total, rows } = T.keywordDensity(densityIn.value);
      if (total === 0) {
        densityOut.classList.add("hidden");
        return;
      }
      densityOut.classList.remove("hidden");
      densityOut.innerHTML = `
        <p><strong>${total}</strong> words analysed · top ${rows.length} keywords shown.</p>
        <table class="kw-table">
          <thead><tr><th>Keyword</th><th>Count</th><th>Density</th></tr></thead>
          <tbody>
            ${rows
              .map(
                (r) =>
                  `<tr><td>${escapeHtml(r.word)}</td><td>${r.count}</td><td>${r.density}%</td></tr>`
              )
              .join("")}
          </tbody>
        </table>`;
    });

    // Readability
    const readIn = document.getElementById("tool-read");
    const readOut = document.getElementById("tool-read-out");
    readIn.addEventListener("input", () => {
      const r = T.readability(readIn.value);
      if (!r) {
        readOut.classList.add("hidden");
        return;
      }
      readOut.classList.remove("hidden");
      const colour =
        r.flesch >= 60
          ? "#1f7c54"
          : r.flesch >= 40
          ? "#f5a623"
          : "#b94a4a";
      readOut.innerHTML = `
        <p style="font-size:1.4rem;margin:0 0 .3rem;color:${colour};">
          <strong>${r.flesch}</strong> <span style="font-size:.9rem;color:#667070">Flesch score</span>
        </p>
        <p style="margin:.3rem 0"><strong>Reading level:</strong> ${r.grade}</p>
        <p class="text-muted" style="margin:0">
          ${r.words} words · ${r.sentences} sentences · ${r.syllables} syllables
        </p>`;
    });

    // Slug
    const slugIn = document.getElementById("tool-slug-in");
    const slugOut = document.getElementById("tool-slug-out");
    slugIn.addEventListener("input", () => {
      const s = T.makeSlug(slugIn.value);
      if (!s) {
        slugOut.classList.add("hidden");
        return;
      }
      slugOut.classList.remove("hidden");
      slugOut.innerHTML = `
        <p style="margin:0 0 .5rem"><strong>Slug:</strong> <code>${escapeHtml(
          s
        )}</code></p>
        <p class="text-muted" style="margin:0">Stop-words removed · lowercase · hyphenated</p>`;
    });
  }

  // ---------- Glossary ----------
  function wireGlossary() {
    const q = document.getElementById("glossary-q");
    const items = document.querySelectorAll(".glossary-item");
    q.addEventListener("input", () => {
      const needle = q.value.trim().toLowerCase();
      items.forEach((it) => {
        const term = it.dataset.term;
        const text = it.textContent.toLowerCase();
        it.style.display =
          !needle || term.includes(needle) || text.includes(needle)
            ? ""
            : "none";
      });
    });
  }

  // ---------- Mobile nav ----------
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // ---------- Utility ----------
  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---------- Boot ----------
  window.addEventListener("hashchange", render);
  render();
})();
