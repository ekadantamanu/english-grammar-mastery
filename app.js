/* ===========================================================
   English Grammar Mastery — app engine
   Reads from global GRAMMAR_SECTIONS (array) and EXERCISES (map)
   which are populated by the js/data-*.js files loaded before this.
   =========================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "grammarAppProgressV1";
  const MAX_LEVEL = 5;

  // ---- state ----
  let sections = [];
  let currentSectionId = null;
  let currentQuestion = null;
  let answered = false;
  let recentQuestionIds = []; // avoid immediate repeats, per section, reset on section switch

  // ---- persistence ----
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) { /* ignore */ }
  }
  function getSectionProgress(id) {
    const p = loadProgress();
    if (!p[id]) {
      p[id] = { level: 1, streak: 0, missStreak: 0, answered: 0, correct: 0 };
    }
    return p[id];
  }
  function setSectionProgress(id, data) {
    const p = loadProgress();
    p[id] = data;
    saveProgress(p);
  }

  // ---- init ----
  function init() {
    sections = (window.GRAMMAR_SECTIONS || []).slice().sort((a, b) => a.order - b.order);
    renderSidebar();
    renderHome();
    bindGlobalEvents();
    showHome();
  }

  function bindGlobalEvents() {
    document.getElementById("back-btn").addEventListener("click", showHome);
    document.getElementById("sidebar-toggle").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("open");
    });
    document.getElementById("reset-progress-btn").addEventListener("click", () => {
      if (confirm("Reset all practice progress across every section? This can't be undone.")) {
        localStorage.removeItem(STORAGE_KEY);
        renderSidebar();
        renderHome();
        if (currentSectionId) openSection(currentSectionId, activeTab());
      }
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });
    document.getElementById("check-btn").addEventListener("click", checkAnswer);
    document.getElementById("next-btn").addEventListener("click", loadNextQuestion);
    document.getElementById("q-fill-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !answered) checkAnswer();
    });

    // Word lookup tool
    document.getElementById("lookup-open-btn").addEventListener("click", openLookup);
    document.getElementById("lookup-close-btn").addEventListener("click", closeLookup);
    document.getElementById("lookup-overlay").addEventListener("click", (e) => {
      if (e.target.id === "lookup-overlay") closeLookup();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !document.getElementById("lookup-overlay").hidden) closeLookup();
    });
    document.getElementById("lookup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const word = document.getElementById("lookup-input").value.trim();
      if (word) runLookup(word);
    });
  }

  // ---- word lookup (free, no-key public API — dictionaryapi.dev) ----
  const lookupCache = {};
  function openLookup() {
    document.getElementById("lookup-overlay").hidden = false;
    setTimeout(() => document.getElementById("lookup-input").focus(), 30);
  }
  function closeLookup() {
    document.getElementById("lookup-overlay").hidden = true;
  }
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  async function runLookup(word) {
    const results = document.getElementById("lookup-results");
    results.innerHTML = `<div class="lookup-status">Looking up "${escapeHtml(word)}"…</div>`;
    const key = word.toLowerCase();
    if (lookupCache[key]) {
      renderLookup(lookupCache[key], word);
      return;
    }
    try {
      const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(key));
      if (res.status === 404) {
        results.innerHTML = `<div class="lookup-status error">No dictionary entry found for "${escapeHtml(word)}." Try checking the spelling, or search a simpler base form (e.g. "run" instead of "running").</div>`;
        return;
      }
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      lookupCache[key] = data;
      renderLookup(data, word);
    } catch (err) {
      results.innerHTML = `<div class="lookup-status error">Couldn't reach the dictionary service — this feature needs an internet connection (the rest of the app works fine offline). Please check your connection and try again.</div>`;
    }
  }
  function renderLookup(data, originalWord) {
    const results = document.getElementById("lookup-results");
    if (!Array.isArray(data) || !data.length) {
      results.innerHTML = `<div class="lookup-status error">No entry found for "${escapeHtml(originalWord)}."</div>`;
      return;
    }
    const entry = data[0];
    let html = `<p class="lookup-word">${escapeHtml(entry.word || originalWord)}</p>`;
    const phon = entry.phonetic || (entry.phonetics || []).map((p) => p.text).find(Boolean);
    if (phon) html += `<p class="lookup-phonetic">${escapeHtml(phon)}</p>`;
    (entry.meanings || []).forEach((m) => {
      html += `<span class="lookup-pos">${escapeHtml(m.partOfSpeech || "")}</span>`;
      html += `<ol class="lookup-def-list">`;
      (m.definitions || []).slice(0, 3).forEach((d) => {
        html += `<li>${escapeHtml(d.definition)}`;
        if (d.example) html += `<br><span class="lookup-example">"${escapeHtml(d.example)}"</span>`;
        html += `</li>`;
      });
      html += `</ol>`;
      if (m.synonyms && m.synonyms.length) {
        html += `<div class="lookup-synonyms">Synonyms: ${m.synonyms.slice(0, 6).map(escapeHtml).join(", ")}</div>`;
      }
    });
    html += `<div class="lookup-source">Source: <a href="${(entry.sourceUrls && entry.sourceUrls[0]) || "#"}" target="_blank" rel="noopener">${escapeHtml((entry.sourceUrls && entry.sourceUrls[0]) || "Free Dictionary API")}</a> — free &amp; open, no account or API key needed.</div>`;
    results.innerHTML = html;
  }

  function activeTab() {
    const active = document.querySelector(".tab-btn.active");
    return active ? active.dataset.tab : "learn";
  }

  // ---- sidebar ----
  function renderSidebar() {
    const nav = document.getElementById("nav-list");
    nav.innerHTML = "";
    sections.forEach((s, i) => {
      const prog = getSectionProgress(s.id);
      const item = document.createElement("div");
      item.className = "nav-item" + (s.id === currentSectionId ? " active" : "");
      item.innerHTML = `
        <span style="display:flex;align-items:center;gap:8px;">
          <span class="nav-num">${String(i + 1).padStart(2, "0")}</span>
          <span>${s.icon || ""} ${s.title}</span>
        </span>
        <span class="nav-badge">Lv ${prog.level}</span>
      `;
      item.addEventListener("click", () => openSection(s.id, "learn"));
      nav.appendChild(item);
    });
  }

  // ---- home ----
  function renderHome() {
    const grid = document.getElementById("home-grid");
    grid.innerHTML = "";
    sections.forEach((s) => {
      const prog = getSectionProgress(s.id);
      const pct = Math.round((prog.level - 1) / (MAX_LEVEL - 1) * 100);
      const acc = prog.answered ? Math.round((prog.correct / prog.answered) * 100) : null;
      const card = document.createElement("div");
      card.className = "home-card";
      card.innerHTML = `
        <div class="home-card-top">
          <div>
            <h3>${s.icon || ""} ${s.title}</h3>
          </div>
        </div>
        <p>${s.shortDesc}</p>
        <div class="home-progress"><div class="home-progress-fill" style="width:${pct}%"></div></div>
        <div class="home-meta">
          <span>Level ${prog.level} / ${MAX_LEVEL}</span>
          <span>${acc !== null ? acc + "% accuracy" : "Not started"}</span>
        </div>
      `;
      card.addEventListener("click", () => openSection(s.id, "learn"));
      grid.appendChild(card);
    });
  }

  function showHome() {
    currentSectionId = null;
    document.getElementById("view-home").hidden = false;
    document.getElementById("view-section").hidden = true;
    renderSidebar();
    renderHome();
    document.getElementById("sidebar").classList.remove("open");
  }

  // ---- section view ----
  function openSection(id, tab) {
    const section = sections.find((s) => s.id === id);
    if (!section) return;
    currentSectionId = id;
    recentQuestionIds = [];
    document.getElementById("view-home").hidden = true;
    document.getElementById("view-section").hidden = false;
    document.getElementById("sidebar").classList.remove("open");

    document.getElementById("section-title").textContent = `${section.icon || ""} ${section.title}`;
    document.getElementById("section-intro").textContent = section.intro;

    renderLearn(section);
    renderSidebar();
    switchTab(tab || "learn");
    window.scrollTo(0, 0);
  }

  function switchTab(tab) {
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    document.getElementById("tab-learn").hidden = tab !== "learn";
    document.getElementById("tab-practice").hidden = tab !== "practice";
    if (tab === "practice") {
      refreshStats();
      loadNextQuestion();
    }
  }

  function renderLearn(section) {
    const wrap = document.getElementById("learn-content");
    wrap.innerHTML = "";

    section.rules.forEach((rule, idx) => {
      const block = document.createElement("div");
      block.className = "rule-block";
      let html = `<h3><span class="rule-num">${idx + 1}</span> ${rule.title}</h3>`;
      html += `<div class="rule-text">${rule.text}</div>`;
      if (rule.examples && rule.examples.length) {
        html += `<ul class="example-list">`;
        rule.examples.forEach((ex) => {
          const mark = ex.correct
            ? `<span class="ex-correct">✔</span>`
            : `<span class="ex-wrong">✘</span>`;
          html += `<li>${mark}${ex.text}${ex.note ? `<span class="ex-note">${ex.note}</span>` : ""}</li>`;
        });
        html += `</ul>`;
      }
      block.innerHTML = html;
      wrap.appendChild(block);
    });

    if (section.commonMistakes && section.commonMistakes.length) {
      const box = document.createElement("div");
      box.className = "rule-block";
      let html = `<h3><span class="rule-num">!</span> Common mistakes to avoid</h3>`;
      html += `<div class="mistake-box"><ul>`;
      section.commonMistakes.forEach((m) => (html += `<li>${m}</li>`));
      html += `</ul></div>`;
      box.innerHTML = html;
      wrap.appendChild(box);
    }

    wrap.appendChild(buildGoDeeperBlock(section));
  }

  // Free, unlimited "go deeper" links — a live search scoped to trusted grammar
  // sites (always current, never a dead link) plus a couple of stable homepage
  // links to well-known free resources. No API, no key, no cost.
  const TRUSTED_GRAMMAR_SITES = [
    "dictionary.cambridge.org", "learnenglish.britishcouncil.org",
    "owl.purdue.edu", "grammarly.com", "ef.com", "grammar-monster.com", "merriam-webster.com"
  ];
  function buildGoDeeperBlock(section) {
    const box = document.createElement("div");
    box.className = "rule-block go-deeper-block";
    const topic = section.title.replace(/\(.*?\)/g, "").trim();
    const siteFilter = TRUSTED_GRAMMAR_SITES.map((s) => "site:" + s).join(" OR ");
    const query = `${topic} grammar rules examples (${siteFilter})`;
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query);
    box.innerHTML = `
      <h3><span class="rule-num">∞</span> Go deeper — free, unlimited</h3>
      <p class="rule-text">Want more examples or a second explanation of "${escapeHtml(topic)}"? These are free — no signup, no cost, no limit on how much you browse.</p>
      <div class="deeper-links">
        <a class="deeper-link deeper-primary" href="${searchUrl}" target="_blank" rel="noopener">🔎 Search "${escapeHtml(topic)}" across trusted grammar sites</a>
        <a class="deeper-link" href="https://dictionary.cambridge.org/grammar/british-grammar/" target="_blank" rel="noopener">Cambridge Dictionary — Grammar</a>
        <a class="deeper-link" href="https://learnenglish.britishcouncil.org/grammar" target="_blank" rel="noopener">British Council — LearnEnglish</a>
        <a class="deeper-link" href="https://owl.purdue.edu/owl/general_writing/index.html" target="_blank" rel="noopener">Purdue OWL — Writing Lab</a>
        <a class="deeper-link" href="https://www.merriam-webster.com/" target="_blank" rel="noopener">Merriam-Webster Dictionary</a>
      </div>`;
    return box;
  }

  // ---- practice engine ----
  function refreshStats() {
    const prog = getSectionProgress(currentSectionId);
    document.getElementById("stat-level").textContent = prog.level;
    document.getElementById("level-bar-fill").style.width = ((prog.level - 1) / (MAX_LEVEL - 1) * 100) + "%";
    document.getElementById("stat-streak").textContent = prog.streak;
    document.getElementById("stat-answered").textContent = prog.answered;
    document.getElementById("stat-accuracy").textContent = prog.answered
      ? Math.round((prog.correct / prog.answered) * 100) + "%"
      : "–";
  }

  function pickQuestion(sectionId, level) {
    // Prefer a procedural generator when one exists for this section — it builds a
    // brand-new question (new words, new sentence, dynamic explanation) every call,
    // so practice is genuinely unlimited instead of cycling through a fixed bank.
    const gen = window.GENERATORS && window.GENERATORS[sectionId];
    if (gen) {
      try {
        const generated = gen(level);
        if (generated && generated.prompt && generated.answer) {
          recentQuestionIds.push(generated.id);
          if (recentQuestionIds.length > 6) recentQuestionIds.shift();
          return generated;
        }
      } catch (e) {
        // fall through to the static bank below if a generator ever misfires
      }
    }

    const pool = (window.EXERCISES[sectionId] || []);
    if (!pool.length) return null;
    // Prefer exact level; widen search outward if a level has no questions.
    let candidates = pool.filter((q) => q.level === level);
    let widen = 1;
    while (!candidates.length && widen <= MAX_LEVEL) {
      candidates = pool.filter((q) => Math.abs(q.level - level) === widen);
      widen++;
    }
    if (!candidates.length) candidates = pool;

    // Avoid repeating the last couple of questions when the pool allows it.
    let filtered = candidates.filter((q) => !recentQuestionIds.includes(q.id));
    if (!filtered.length) filtered = candidates;

    const chosen = filtered[Math.floor(Math.random() * filtered.length)];
    recentQuestionIds.push(chosen.id);
    if (recentQuestionIds.length > 6) recentQuestionIds.shift();
    return chosen;
  }

  function loadNextQuestion() {
    answered = false;
    const prog = getSectionProgress(currentSectionId);
    const q = pickQuestion(currentSectionId, prog.level);
    currentQuestion = q;

    document.getElementById("next-btn").hidden = true;
    document.getElementById("check-btn").hidden = false;
    document.getElementById("check-btn").disabled = false;
    document.getElementById("q-feedback").hidden = true;
    document.getElementById("q-feedback").className = "q-feedback";

    if (!q) {
      document.getElementById("q-prompt").textContent = "Exercises for this section are coming soon.";
      document.getElementById("q-options").innerHTML = "";
      document.getElementById("q-fill-wrap").hidden = true;
      document.getElementById("check-btn").disabled = true;
      return;
    }

    document.getElementById("q-level-badge").textContent = "Level " + q.level;
    document.getElementById("q-type-badge").textContent = q.type === "fill" ? "Fill in the blank" : "Multiple choice";
    document.getElementById("q-prompt").innerHTML = q.prompt;

    const sourceBadge = document.getElementById("q-source-badge");
    if (window.GENERATORS && window.GENERATORS[currentSectionId]) {
      sourceBadge.hidden = false;
      sourceBadge.textContent = "♾ Freshly generated";
    } else {
      sourceBadge.hidden = true;
    }

    const optionsWrap = document.getElementById("q-options");
    const fillWrap = document.getElementById("q-fill-wrap");
    optionsWrap.innerHTML = "";

    if (q.type === "mcq") {
      fillWrap.hidden = true;
      const opts = q.options.slice();
      opts.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "q-option";
        btn.textContent = opt;
        btn.addEventListener("click", () => selectOption(btn, opt));
        optionsWrap.appendChild(btn);
      });
    } else {
      optionsWrap.innerHTML = "";
      fillWrap.hidden = false;
      const input = document.getElementById("q-fill-input");
      input.value = "";
      input.className = "";
      setTimeout(() => input.focus(), 30);
    }

    refreshStats();
  }

  let selectedOptionBtn = null;
  let selectedOptionText = null;

  function selectOption(btn, text) {
    if (answered) return;
    document.querySelectorAll(".q-option").forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    selectedOptionBtn = btn;
    selectedOptionText = text;
  }

  function normalize(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/[.!?,;:'"]+$/g, "")
      .replace(/\s+/g, " ");
  }

  function checkAnswer() {
    if (!currentQuestion || answered) return;

    let userAnswer;
    let isCorrect = false;

    if (currentQuestion.type === "mcq") {
      if (!selectedOptionText) return; // require a selection
      userAnswer = selectedOptionText;
      isCorrect = normalize(userAnswer) === normalize(currentQuestion.answer);
    } else {
      const input = document.getElementById("q-fill-input");
      userAnswer = input.value;
      if (!userAnswer.trim()) return;
      const accepted = [currentQuestion.answer].concat(currentQuestion.acceptedAnswers || []);
      isCorrect = accepted.some((a) => normalize(a) === normalize(userAnswer));
    }

    answered = true;

    // visual feedback
    if (currentQuestion.type === "mcq") {
      document.querySelectorAll(".q-option").forEach((b) => {
        b.disabled = true;
        if (normalize(b.textContent) === normalize(currentQuestion.answer)) b.classList.add("correct");
        else if (b === selectedOptionBtn && !isCorrect) b.classList.add("incorrect");
      });
    } else {
      const input = document.getElementById("q-fill-input");
      input.disabled = true;
      input.classList.add(isCorrect ? "correct" : "incorrect");
    }

    // feedback text
    const fb = document.getElementById("q-feedback");
    fb.hidden = false;
    if (isCorrect) {
      fb.className = "q-feedback good";
      fb.innerHTML = `<strong>✔ Correct</strong>${currentQuestion.explanationCorrect || ""}`;
    } else {
      fb.className = "q-feedback bad";
      fb.innerHTML = `<strong>✘ Not quite — correct answer: "${currentQuestion.answer}"</strong>${currentQuestion.explanationWrong || ""}`;
    }

    // update progress + adaptive difficulty
    const prog = getSectionProgress(currentSectionId);
    prog.answered += 1;
    if (isCorrect) {
      prog.correct += 1;
      prog.streak += 1;
      prog.missStreak = 0;
      if (prog.streak >= 2 && prog.level < MAX_LEVEL) {
        prog.level += 1;
        prog.streak = 0;
      }
    } else {
      prog.streak = 0;
      prog.missStreak = (prog.missStreak || 0) + 1;
      if (prog.missStreak >= 2 && prog.level > 1) {
        prog.level -= 1;
        prog.missStreak = 0;
      }
    }
    setSectionProgress(currentSectionId, prog);
    refreshStats();
    renderSidebar();

    document.getElementById("check-btn").hidden = true;
    document.getElementById("next-btn").hidden = false;
    selectedOptionBtn = null;
    selectedOptionText = null;
  }

  document.addEventListener("DOMContentLoaded", init);
})();
