/* ===========================================================
   Translation Lab — user interface.
   Telugu passage → learner writes English → in-depth analysis.
   Everything runs in the browser: no API, no key, no cost.
   =========================================================== */
(function () {
  "use strict";
  const TL = (window.TL = window.TL || {});
  const EN = TL.EN, GEN = TL.GEN, AN = TL.AN;
  const esc = AN.esc;

  const PREF_KEY = "tlPrefsV1";
  const STATS_KEY = "tlStatsV1";
  const state = { root: null, set: null, result: null, prefs: loadPrefs(), mounted: false };

  function loadJSON(k, d) { try { const v = JSON.parse(localStorage.getItem(k) || "null"); return v || d; } catch (e) { return d; } }
  function saveJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }
  function loadPrefs() { return Object.assign({ tense: "mixed", layout: "short", domain: "any", perSentence: false, hints: false }, loadJSON(PREF_KEY, {})); }
  function savePrefs() { saveJSON(PREF_KEY, state.prefs); }
  function stats() { return Object.assign({ sets: 0, sentences: 0, tenseOK: 0, scoreSum: 0, perTense: {} }, loadJSON(STATS_KEY, {})); }

  // ---------- size of the sentence space (for the "never repeats" counter) ----------
  let spaceSize = null;
  function computeSpace() {
    if (spaceSize) return spaceSize;
    let total = 0;
    GEN.DOMAINS.forEach((d) => {
      d.vps.forEach((vp) => {
        const subjects = vp.fs ? 1 : expandCount(d, vp.who);
        EN.TENSES.forEach((t) => {
          if (/perfect-continuous/.test(t.id) && !vp.d) return;
          if (vp.n && /continuous/.test(t.id)) return;
          let advs = GEN.ADV[t.id] ? GEN.ADV[t.id].length : t.id === "past-perfect-continuous" ? 30 : 6;
          total += subjects * advs * GEN.countExtras(d, vp);
        });
      });
    });
    spaceSize = total;
    return total;
  }
  function expandCount(d, who) {
    const set = new Set();
    who.forEach((w) => { if (w === "P") Object.keys(GEN.PERSONAL).forEach((k) => set.add(k)); else set.add(w); });
    return set.size;
  }

  // ---------- tense selection ----------
  const GROUPS = [
    { id: "mixed", label: "All 12 mixed", sub: "real-life mix" },
    { id: "group:Present", label: "All present", sub: "4 tenses" },
    { id: "group:Past", label: "All past", sub: "4 tenses" },
    { id: "group:Future", label: "All future", sub: "4 tenses" },
  ];
  function tenseLabel(sel) {
    if (sel === "mixed") return "Mixed tenses";
    if (sel.indexOf("group:") === 0) return "All " + sel.slice(6).toLowerCase() + " tenses";
    return EN.TENSE_BY_ID[sel].name;
  }
  function tensePool(sel) {
    if (sel === "mixed") return null;
    if (sel.indexOf("group:") === 0) { const g = sel.slice(6); return EN.TENSES.filter((t) => t.group === g).map((t) => t.id); }
    return [sel];
  }

  // generate a set honouring the tense selection (single tense, a whole group, or mixed)
  function newSet() {
    const p = state.prefs;
    const seen = GEN.seenSet();
    const set = GEN.makeSet({ layout: p.layout, domain: p.domain, tense: p.tense, seen });
    set.items.forEach((x) => seen.add(x.key));
    GEN.saveSeen(seen);
    return set;
  }

  // ---------- speech (free browser features) ----------
  const synth = window.speechSynthesis;
  function voiceFor(lang) {
    if (!synth) return null;
    const vs = synth.getVoices();
    return vs.find((v) => v.lang && v.lang.toLowerCase().indexOf(lang) === 0) || null;
  }
  function speak(text, lang) {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = voiceFor(lang);
    if (v) u.voice = v;
    u.lang = lang === "te" ? "te-IN" : "en-IN";
    u.rate = lang === "te" ? 0.9 : 0.95;
    synth.speak(u);
  }
  const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
  let activeRec = null;
  function dictate(textarea, btn) {
    if (!Rec) return;
    if (activeRec) { activeRec.stop(); return; }
    const r = new Rec();
    r.lang = "en-IN"; r.continuous = true; r.interimResults = false;
    const before = textarea.value;
    let got = "";
    r.onresult = (e) => {
      for (let i = e.resultIndex; i < e.results.length; i++) if (e.results[i].isFinal) got += e.results[i][0].transcript.trim() + ". ";
      textarea.value = (before ? before.trim() + " " : "") + got.trim();
      textarea.dispatchEvent(new Event("input"));
    };
    r.onend = () => { activeRec = null; btn.classList.remove("rec-on"); btn.textContent = "🎤 Speak"; };
    r.onerror = r.onend;
    activeRec = r;
    btn.classList.add("rec-on"); btn.textContent = "■ Stop";
    r.start();
  }

  // ---------- rendering ----------
  function mount(root) {
    state.root = root;
    const accent = getComputedStyle(document.querySelector(".section-header")).getPropertyValue("--accent").trim() || "#059669";
    root.style.setProperty("--lab", accent);
    if (!state.mounted) {
      state.mounted = true;
      if (synth && synth.onvoiceschanged !== undefined) synth.onvoiceschanged = () => { if (state.set && !state.result) renderPassage(); };
    }
    render();
  }

  function render() {
    const root = state.root;
    root.innerHTML = `
      <div class="lab">
        <div class="lab-hero">
          <div>
            <h2>Telugu → English Translation Lab</h2>
            <p>Read a Telugu passage, write it in English, and get a detailed check of your tenses, verb forms, agreement and word choice, with a corrected version and other ways to say it. It's free and unlimited, and runs in your browser with no account.</p>
          </div>
          <div class="lab-stats" id="lab-stats"></div>
        </div>
        <div class="lab-controls" id="lab-controls"></div>
        <div id="lab-work"></div>
      </div>`;
    renderStats();
    renderControls();
    if (state.set) { if (state.result) renderResults(); else renderPassage(); }
    else renderStart();
  }

  function renderStats() {
    const s = stats();
    const seen = GEN.seenSet().size;
    const space = computeSpace();
    const acc = s.sentences ? Math.round((s.tenseOK / s.sentences) * 100) + "%" : "–";
    const avg = s.sentences ? Math.round(s.scoreSum / s.sentences) : "–";
    let weakest = null;
    Object.keys(s.perTense).forEach((id) => {
      const t = s.perTense[id];
      if (t.n >= 3) { const r = t.ok / t.n; if (!weakest || r < weakest.r) weakest = { id, r }; }
    });
    document.getElementById("lab-stats").innerHTML = `
      <div class="lab-stat"><b>${s.sentences}</b><span>sentences translated</span></div>
      <div class="lab-stat"><b>${acc}</b><span>tense accuracy</span></div>
      <div class="lab-stat"><b>${avg}</b><span>average score</span></div>
      <div class="lab-stat" title="Every combination of topic, action, person, tense and time expression is tracked on this device so it isn't repeated."><b>${seen.toLocaleString()}</b><span>of ${space.toLocaleString()}+ unique sentences used</span></div>
      ${weakest ? `<button class="lab-weak" data-weak="${weakest.id}">Focus on your weakest tense: <b>${esc(EN.TENSE_BY_ID[weakest.id].name)}</b> (${Math.round(weakest.r * 100)}%) →</button>` : ""}`;
    const w = document.querySelector(".lab-weak");
    if (w) w.addEventListener("click", () => { state.prefs.tense = w.dataset.weak; savePrefs(); state.set = null; state.result = null; start(); });
  }

  function chip(group, value, label, active, sub) {
    return `<button class="lab-chip${active ? " on" : ""}" data-g="${group}" data-v="${esc(value)}">${esc(label)}${sub ? `<small>${esc(sub)}</small>` : ""}</button>`;
  }
  function renderControls() {
    const p = state.prefs;
    const byGroup = (g) => EN.TENSES.filter((t) => t.group === g).map((t) => chip("tense", t.id, t.name.replace(/^(Simple |Present |Past |Future )/, (m) => m), p.tense === t.id)).join("");
    document.getElementById("lab-controls").innerHTML = `
      <div class="lab-row">
        <div class="lab-label">Tense</div>
        <div class="lab-chips">${GROUPS.map((g) => chip("tense", g.id, g.label, p.tense === g.id, g.sub)).join("")}</div>
      </div>
      <div class="lab-tense-grid">
        <div><div class="lab-sublabel">Present</div><div class="lab-chips">${byGroup("Present")}</div></div>
        <div><div class="lab-sublabel">Past</div><div class="lab-chips">${byGroup("Past")}</div></div>
        <div><div class="lab-sublabel">Future</div><div class="lab-chips">${byGroup("Future")}</div></div>
      </div>
      <div class="lab-row">
        <div class="lab-label">Length</div>
        <div class="lab-chips">
          ${chip("layout", "short", "2–3 sentences", p.layout === "short")}
          ${chip("layout", "para", "One paragraph", p.layout === "para", "4–6 sentences")}
          ${chip("layout", "long", "2–3 paragraphs", p.layout === "long")}
        </div>
      </div>
      <div class="lab-row">
        <div class="lab-label">Topic</div>
        <div class="lab-chips">${chip("domain", "any", "Any topic", p.domain === "any")}${GEN.DOMAINS.map((d) => chip("domain", d.id, d.name, p.domain === d.id)).join("")}</div>
      </div>
      <div class="lab-row lab-row-actions">
        <label class="lab-toggle"><input type="checkbox" id="lab-per" ${p.perSentence ? "checked" : ""}/> Answer sentence by sentence</label>
        <label class="lab-toggle"><input type="checkbox" id="lab-hints" ${p.hints ? "checked" : ""}/> Show word hints</label>
        <button class="primary-btn lab-go" id="lab-new">${state.set ? "New passage" : "Start practising"} →</button>
      </div>`;
    document.querySelectorAll("#lab-controls .lab-chip").forEach((b) => b.addEventListener("click", () => {
      state.prefs[b.dataset.g] = b.dataset.v; savePrefs(); renderControls();
    }));
    document.getElementById("lab-per").addEventListener("change", (e) => { state.prefs.perSentence = e.target.checked; savePrefs(); if (state.set && !state.result) renderPassage(); });
    document.getElementById("lab-hints").addEventListener("change", (e) => { state.prefs.hints = e.target.checked; savePrefs(); if (state.set && !state.result) renderPassage(); });
    document.getElementById("lab-new").addEventListener("click", start);
  }

  function renderStart() {
    const t = state.prefs.tense;
    const guide = tenseGuide(t);
    document.getElementById("lab-work").innerHTML = `
      <div class="lab-card lab-empty">
        <h3>How it works</h3>
        <ol>
          <li>Pick a tense (or a whole group), a length and a topic above.</li>
          <li>Read the Telugu passage. The time words (నిన్న, ఇప్పటికే, … నుండి, రేపు ఈ సమయానికి…) tell you which tense to use.</li>
          <li>Write your English translation, or tap 🎤 to say it.</li>
          <li>You get a check of each sentence: what you wrote, why it's right or wrong, a corrected version, and 2–5 other natural ways to say it.</li>
        </ol>
        ${guide}
      </div>`;
  }

  function tenseGuide(sel) {
    const pool = tensePool(sel) || EN.TENSES.map((t) => t.id);
    if (pool.length > 4) return `<p class="lab-muted">Mixed mode uses all 12 tenses. Each passage follows a short sequence (for example past → present perfect → future), the way real news and conversation move between tenses.</p>`;
    return `<div class="lab-guides">${pool.map((id) => { const t = EN.TENSE_BY_ID[id]; return `
      <div class="lab-guide">
        <div class="lab-guide-name">${esc(t.name)}</div>
        <div class="lab-formula">${esc(t.formula)}</div>
        <div class="lab-te">${esc(t.te)}</div>
        <p>${esc(t.clue)}</p>
        <p class="lab-tip">💡 ${esc(t.tip)}</p>
      </div>`; }).join("")}</div>`;
  }

  function start() {
    state.set = newSet();
    state.result = null;
    renderControls();
    renderPassage();
    renderStats();
    document.getElementById("lab-work").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function hintsFor(sp) {
    const seen = new Set();
    return sp.req.filter((r) => { const k = r.te + "|" + r.kind; if (seen.has(k) || !r.te) return false; seen.add(k); return r.kind !== "object" || true; })
      .filter((r, i, arr) => arr.findIndex((x) => x.te === r.te) === i)
      .map((r) => `<span class="lab-hint"><span class="te">${esc(r.te)}</span> = ${esc(r.kind === "object" ? sp.vp.t || r.en : r.kind === "verb" ? "to " + sp.vp.e : r.en)}</span>`).join("");
  }

  function renderPassage() {
    const set = state.set, p = state.prefs;
    const teVoice = !!voiceFor("te");
    const paras = set.paragraphs.map((para, pi) => `
      <div class="lab-para">
        <p class="lab-telugu">${para.map((sp, i) => `<span class="lab-te-sent" data-i="${set.items.indexOf(sp)}">${esc(sp.te)}.</span>`).join(" ")}</p>
        ${p.hints ? `<div class="lab-hints">${para.map(hintsFor).join("")}</div>` : ""}
      </div>`).join("");
    const inputs = p.perSentence
      ? set.items.map((sp, i) => `
        <div class="lab-answer">
          <div class="lab-answer-te"><span class="lab-num">${i + 1}</span> ${esc(sp.te)}.</div>
          <div class="lab-input-row"><textarea rows="2" class="lab-ta" data-i="${i}" placeholder="Your English translation…"></textarea>${Rec ? `<button class="lab-mic" data-i="${i}">🎤 Speak</button>` : ""}</div>
        </div>`).join("")
      : set.paragraphs.map((para, pi) => `
        <div class="lab-answer">
          ${set.paragraphs.length > 1 ? `<div class="lab-answer-te"><span class="lab-num">¶${pi + 1}</span> Paragraph ${pi + 1} — ${para.length} sentences</div>` : `<div class="lab-answer-te">Your translation (${para.length} sentences)</div>`}
          <div class="lab-input-row"><textarea rows="${Math.max(3, para.length + 1)}" class="lab-ta" data-i="${pi}" placeholder="Write your English translation here. End each sentence with a full stop."></textarea>${Rec ? `<button class="lab-mic" data-i="${pi}">🎤 Speak</button>` : ""}</div>
        </div>`).join("");
    const focus = tensePool(p.tense);
    document.getElementById("lab-work").innerHTML = `
      <div class="lab-card">
        <div class="lab-card-head">
          <span class="lab-tag">${esc(set.items[0] ? set.items[0].domainName : "")}</span>
          <span class="lab-tag lab-tag-soft">${esc(tenseLabel(p.tense))}</span>
          <span class="lab-tag lab-tag-soft">${set.items.length} sentences</span>
          ${synth && teVoice ? `<button class="lab-listen" id="lab-listen-te">🔊 Listen (Telugu)</button>` : ""}
        </div>
        ${paras}
        ${focus && focus.length === 1 ? `<details class="lab-guide-toggle"><summary>Tense guide: ${esc(EN.TENSE_BY_ID[focus[0]].name)}</summary>${tenseGuide(p.tense)}</details>` : ""}
      </div>
      <div class="lab-card">
        ${inputs}
        <div class="lab-actions">
          <button class="primary-btn" id="lab-check">Analyse my translation</button>
          <button class="lab-ghost" id="lab-reveal">Show model answer</button>
          <button class="lab-ghost" id="lab-skip">Skip → new passage</button>
        </div>
      </div>`;
    const tas = document.querySelectorAll(".lab-ta");
    if (tas[0]) tas[0].focus();
    document.querySelectorAll(".lab-mic").forEach((b) => b.addEventListener("click", () => dictate(document.querySelector(`.lab-ta[data-i="${b.dataset.i}"]`), b)));
    const lt = document.getElementById("lab-listen-te");
    if (lt) lt.addEventListener("click", () => speak(set.items.map((x) => x.te).join(". "), "te"));
    document.getElementById("lab-check").addEventListener("click", () => analyse(false));
    document.getElementById("lab-reveal").addEventListener("click", () => analyse(true));
    document.getElementById("lab-skip").addEventListener("click", start);
  }

  function analyse(revealOnly) {
    const set = state.set, p = state.prefs;
    const answers = Array.from(document.querySelectorAll(".lab-ta")).map((t) => t.value);
    if (!revealOnly && !answers.some((a) => a.trim())) {
      const first = document.querySelector(".lab-ta"); if (first) { first.focus(); first.classList.add("lab-shake"); setTimeout(() => first.classList.remove("lab-shake"), 500); }
      return;
    }
    const r = AN.analyzeSet(set, revealOnly ? [] : answers, p.perSentence);
    r.revealOnly = revealOnly;
    state.result = r;
    if (!revealOnly) {
      const s = stats();
      s.sets++; s.sentences += r.n; s.tenseOK += r.tenseRight;
      r.results.forEach((x) => {
        s.scoreSum += x.score;
        const t = (s.perTense[x.sp.tense] = s.perTense[x.sp.tense] || { n: 0, ok: 0 });
        t.n++; if (x.tenseOK) t.ok++;
      });
      saveJSON(STATS_KEY, s);
    }
    renderResults();
    renderStats();
    document.getElementById("lab-work").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const VERDICT = {
    perfect: ["Perfect", "v-perfect", "Matches a model answer exactly."],
    excellent: ["Excellent", "v-excellent", "Correct tense and form. Good translation."],
    good: ["Good — small fixes", "v-good", "Tense is right; polish the details below."],
    "needs-work": ["Right tense, form needs work", "v-warn", "You chose the right tense but the verb form or agreement slipped."],
    "wrong-tense": ["Tense needs changing", "v-bad", "The Telugu signals a different tense."],
    empty: ["Not answered", "v-empty", ""],
  };
  const CAT_ADVICE = {
    tense: "Tense choice. Before writing, find the Telugu time signal (నిన్న, ఇప్పటికే, … నుండి, రేపు ఈ సమయానికి, …కల్లా) and match it to its tense formula.",
    form: "Verb forms. Learn the V1–V2–V3 of irregular verbs, and remember which form follows each helper: will + V1, have/has/had + V3, be + V-ing.",
    agreement: "Agreement. he/she/it and names need verb + s in the simple present, and is/was/has instead of are/were/have.",
    time: "Time expressions. Keep every time word from the Telugu, and use for + length of time but since + starting point.",
    article: "Articles. Telugu has no a/an/the, so add them on purpose: the + specific thing, a/an + one of many.",
    meaning: "Meaning. Some words from the Telugu were missing or changed; turn on word hints if a word is new to you.",
    mechanics: "Mechanics: capital letters and full stops.",
  };

  // show the learner's own text (original case) with the verb group highlighted
  function highlightVerb(r) {
    if (!r.user) return `<em class="lab-muted">(left blank)</em>`;
    if (r.verbIdx == null || !r.tokens) return esc(r.user);
    const src = r.user;
    const words = r.chainIdx.concat([r.verbIdx]).sort((a, b) => a - b).map((i) => r.tokens[i]);
    const marks = [];
    let pos = 0;
    words.forEach((w) => {
      const re = new RegExp("\\b" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
      const m = re.exec(src.slice(pos));
      if (!m) return;
      const start = pos + m.index;
      marks.push([start, start + m[0].length]);
      pos = start + m[0].length;
    });
    const cls = r.tenseOK && !r.issues.some((x) => x.cat === "form" || x.cat === "agreement") ? "ok" : "bad";
    let html = "", last = 0;
    marks.forEach(([a, b]) => { html += esc(src.slice(last, a)) + `<mark class="${cls}">${esc(src.slice(a, b))}</mark>`; last = b; });
    return html + esc(src.slice(last));
  }

  function renderResults() {
    const set = state.set, r = state.result;
    const teVoice = !!voiceFor("te");
    const cards = r.results.map((x, i) => {
      const v = VERDICT[x.verdict] || VERDICT.good;
      const sp = x.sp;
      const alts = sp.alts.map((a) => `<li><span class="lab-alt-text">${esc(a.text)}</span>${synth ? `<button class="lab-say" data-say="${esc(a.text)}" title="Listen">🔊</button>` : ""}<div class="lab-alt-note">${esc(a.note)}</div></li>`).join("");
      if (r.revealOnly) {
        return `<div class="lab-res">
          <div class="lab-res-head"><span class="lab-num">${i + 1}</span><span class="lab-res-te">${esc(sp.te)}.</span><span class="lab-tense-pill">${esc(x.expected.name)}</span></div>
          <div class="lab-model"><span class="lab-k">Model answer</span> ${esc(sp.refText)} ${synth ? `<button class="lab-say" data-say="${esc(sp.refText)}">🔊</button>` : ""}</div>
          <div class="lab-why">${esc(x.expected.clue)} <b>Formula:</b> ${esc(x.expected.formula)}.</div>
          ${alts ? `<div class="lab-alts"><div class="lab-k">Other ways to say it</div><ul>${alts}</ul></div>` : ""}
        </div>`;
      }
      const issues = x.issues.map((it) => `<li class="sev-${it.sev}"><div class="lab-issue-title">${it.sev === "major" ? "✘" : "•"} ${esc(it.title)}</div><div class="lab-issue-detail">${esc(it.detail)}</div>${it.fix ? `<div class="lab-fix">→ ${esc(it.fix)}</div>` : ""}</li>`).join("");
      const notes = x.notes.map((n) => `<div class="lab-note"><b>${esc(n.title)}:</b> ${esc(n.detail)}</div>`).join("");
      return `<div class="lab-res ${v[1]}">
        <div class="lab-res-head">
          <span class="lab-num">${i + 1}</span><span class="lab-res-te">${esc(sp.te)}.</span>
          <span class="lab-verdict ${v[1]}">${esc(v[0])}</span><span class="lab-score">${x.score}</span>
        </div>
        <div class="lab-wrote"><span class="lab-k">You wrote</span> ${highlightVerb(x)}</div>
        <div class="lab-why"><span class="lab-k">Why</span> ${esc(x.why)}</div>
        ${issues ? `<ul class="lab-issues">${issues}</ul>` : ""}
        ${notes}
        ${x.corrected && x.corrected !== sp.refText ? `<div class="lab-corrected"><span class="lab-k">Your sentence, corrected</span> ${esc(x.corrected)}</div>` : ""}
        <div class="lab-model"><span class="lab-k">Model answer</span> ${esc(sp.refText)} ${synth ? `<button class="lab-say" data-say="${esc(sp.refText)}">🔊</button>` : ""}</div>
        ${alts ? `<details class="lab-alts" ${x.verdict === "perfect" || x.verdict === "excellent" ? "open" : ""}><summary>Other ways to say it (${sp.alts.length})</summary><ul>${alts}</ul></details>` : ""}
      </div>`;
    }).join("");

    let summary = "";
    if (!r.revealOnly) {
      const grade = r.avg >= 90 ? "Outstanding" : r.avg >= 75 ? "Strong" : r.avg >= 55 ? "Getting there" : "Keep practising";
      const advice = r.topCats.slice(0, 3).map((c) => `<li>${esc(CAT_ADVICE[c] || c)} <span class="lab-muted">(${r.cats[c]}×)</span></li>`).join("");
      const perTense = {};
      r.results.forEach((x) => { const k = x.expected.name; perTense[k] = perTense[k] || [0, 0]; perTense[k][0]++; if (x.tenseOK) perTense[k][1]++; });
      summary = `<div class="lab-card lab-summary">
        <div class="lab-sum-top">
          <div class="lab-ring" style="--p:${r.avg}"><span>${r.avg}</span></div>
          <div>
            <h3>${grade}</h3>
            <p>${r.tenseRight} of ${r.n} sentences in the correct tense.</p>
            <div class="lab-pt">${Object.keys(perTense).map((k) => `<span class="lab-pt-chip ${perTense[k][1] === perTense[k][0] ? "ok" : "bad"}">${esc(k)} ${perTense[k][1]}/${perTense[k][0]}</span>`).join("")}</div>
          </div>
        </div>
        ${advice ? `<div class="lab-focus"><div class="lab-k">What to focus on next</div><ul>${advice}</ul></div>` : `<p class="lab-muted">No issues found. Try a longer passage or a harder tense.</p>`}
      </div>`;
    }
    const fullCorrected = set.paragraphs.map((para) => para.map((sp) => { const x = r.results[set.items.indexOf(sp)]; return x.corrected || (x.user ? x.user.replace(/([^.!?])$/, "$1.") : sp.refText); }).join(" ")).map((p) => `<p>${esc(p)}</p>`).join("");
    const model = set.paragraphs.map((para) => `<p>${esc(para.map((sp) => sp.refText).join(" "))}</p>`).join("");
    document.getElementById("lab-work").innerHTML = `
      ${summary}
      <div class="lab-card">
        <div class="lab-card-head"><span class="lab-tag">${esc(set.items[0].domainName)}</span><span class="lab-tag lab-tag-soft">${esc(tenseLabel(state.prefs.tense))}</span>${synth && teVoice ? `<button class="lab-listen" id="lab-listen-te">🔊 Telugu</button>` : ""}</div>
        ${cards}
      </div>
      <div class="lab-card lab-final">
        ${!r.revealOnly ? `<div><div class="lab-k">Your passage, corrected</div>${fullCorrected}</div>` : ""}
        <div><div class="lab-k">Model passage ${synth ? `<button class="lab-say" data-say="${esc(set.items.map((x) => x.refText).join(" "))}">🔊</button>` : ""}</div>${model}</div>
      </div>
      <div class="lab-actions lab-actions-end">
        <button class="primary-btn" id="lab-next">Next passage →</button>
        ${!r.revealOnly ? `<button class="lab-ghost" id="lab-retry">Try this passage again</button>` : ""}
      </div>`;
    document.querySelectorAll(".lab-say").forEach((b) => b.addEventListener("click", () => speak(b.dataset.say, "en")));
    const lt = document.getElementById("lab-listen-te");
    if (lt) lt.addEventListener("click", () => speak(set.items.map((x) => x.te).join(". "), "te"));
    document.getElementById("lab-next").addEventListener("click", start);
    const rt = document.getElementById("lab-retry");
    if (rt) rt.addEventListener("click", () => { state.result = null; renderPassage(); });
  }

  TL.UI = { mount };
})();
