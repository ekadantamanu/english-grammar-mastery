/* ===========================================================
   Translation Lab — analysis engine (no API, no network).
   Compares a learner's English translation with the expected
   meaning + tense of a generated Telugu sentence and explains:
   what was written, why it is right/wrong, a corrected version,
   and other natural ways to say it.            window.TL.AN
   =========================================================== */
(function () {
  "use strict";
  const TL = (window.TL = window.TL || {});
  const EN = TL.EN;

  const DETERMINERS = new Set("the a an my our your his her their its this that these those some every each any no".split(" "));
  const FINISHED_TIME = /\b(yesterday|ago|last (week|year|month|night|evening|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|in (19|20)\d\d)\b/;
  const NUM_WORD = "(one|two|three|four|five|six|seven|eight|nine|ten|\\d+|a|an|several|many|a few|the last|the past)";
  const DURATION_AFTER_SINCE = /\bsince (?:half an? |about |nearly |almost |a couple of |the (?:last|past) )?(?:(?:one|two|three|four|five|six|seven|eight|nine|ten|\d+|an?|several|many|a few) )?(?:minutes?|hours?|days?|weeks?|months?|years?)\b/;
  const POINT_AFTER_FOR = /\bfor (morning|evening|monday|tuesday|wednesday|thursday|friday|saturday|sunday|last (week|year|month)|yesterday|(19|20)\d\d)\b/;

  const ALWAYS_CAP = {};
  "Monday Tuesday Wednesday Thursday Friday Saturday Sunday January February March April May June July August September October November December English Telugu Hindi India Indian TV AI Tirupati Hyderabad Bhagavad Gita".split(" ").forEach((w) => (ALWAYS_CAP[w.toLowerCase()] = w));
  function capsDict() {
    if (capsDict.d) return capsDict.d;
    const d = Object.assign({}, ALWAYS_CAP);
    Object.values(TL.GEN.PERSONAL).forEach((p) => { if (/^[A-Z]/.test(p.en) && p.en !== "I") d[p.en.toLowerCase()] = p.en; });
    capsDict.d = d; return d;
  }
  function norm(s) { return s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, " ").replace(/\s+/g, " ").trim(); }
  function esc(s) { return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

  // does learner token match a lexicon word (inflections, plurals, spelling variants)?
  const formCache = {};
  function wordForms(w) {
    if (formCache[w]) return formCache[w];
    const f = EN.forms(w);
    const set = new Set([w, w + "s", w + "es", f.s, f.ing].concat(f.past, f.pp));
    if (/y$/.test(w)) set.add(w.slice(0, -1) + "ies");
    formCache[w] = set;
    return set;
  }
  function tokenMatches(tok, w) {
    if (tok === w) return true;
    if (wordForms(w).has(tok)) return true;
    if (w.length >= 6 && tok.length >= 6 && tok.slice(0, 6) === w.slice(0, 6)) return true;
    return false;
  }
  function groupPresent(tokens, joined, words) {
    return words.some((w) => (w.indexOf(" ") >= 0 ? joined.indexOf(" " + w + " ") >= 0 || joined.indexOf(" " + w.split(" ")[0]) >= 0 && w.split(" ").every((p) => tokens.some((t) => tokenMatches(t, p))) : tokens.some((t) => tokenMatches(t, w))));
  }

  // ---------- locate the main verb ----------
  function findVerb(tokens, lemmas) {
    const cands = [];
    lemmas.forEach((lem) => {
      const f = EN.forms(lem);
      const all = new Set([f.base, f.s, f.ing].concat(f.past, f.pp));
      tokens.forEach((t, i) => { if (all.has(t) || EN.overRegular(t) === lem) cands.push({ i, lem, f, over: EN.overRegular(t) === lem && !all.has(t) }); });
    });
    if (!cands.length) return null;
    // prefer the last match that is not merely an auxiliary use (have/do/be)
    cands.sort((a, b) => a.i - b.i);
    let best = cands[cands.length - 1];
    for (let k = cands.length - 1; k >= 0; k--) {
      const c = cands[k];
      const nxt = tokens[c.i + 1];
      if ((c.lem === "have" || c.lem === "do") && nxt && (EN.looksParticiple(nxt) || /ing$/.test(nxt) || nxt === "been")) continue;
      best = c; break;
    }
    return best;
  }
  // fallback: any auxiliary-led verb group, or the word after the subject
  function findAnyVerb(tokens, subjIdx) {
    const auxes = /^(am|is|are|was|were|have|has|had|will|shall|did|do|does)$/;
    for (let i = 0; i < tokens.length; i++) {
      if (auxes.test(tokens[i])) {
        let j = i + 1;
        while (j < tokens.length && (EN.AUX.has(tokens[j]) || EN.ADV.has(tokens[j]))) j++;
        if (j < tokens.length) return { i: j, lem: null, f: null };
      }
    }
    let j = subjIdx != null ? subjIdx + 1 : 1;
    while (j < tokens.length && (EN.ADV.has(tokens[j]) || EN.NOT_VERB_ING.has(tokens[j]) || /^(yesterday|today|tomorrow|last|next|this|at|by|in|on|when|the|a|an)$/.test(tokens[j]))) j++;
    if (j < tokens.length) return { i: j, lem: null, f: null };
    return null;
  }
  function lemmaOf(tok) {
    const hit = EN.FORM_INDEX[tok];
    if (hit && hit.length) return hit[0].lemma;
    if (/ies$/.test(tok)) return tok.slice(0, -3) + "y";
    if (/ing$/.test(tok)) return tok.slice(0, -3);
    if (/ed$/.test(tok)) return tok.slice(0, -2);
    if (/[^s]s$/.test(tok)) return tok.slice(0, -1);
    return tok;
  }

  // ---------- subject ----------
  const PRON_FOR = { "3m": ["he"], "3f": ["she"], "3n": ["it", "they"], "3h": ["they"], "1s": ["i"], "1p": ["we"], "2": ["you"] };
  function findSubject(tokens, joined, sp) {
    const keys = (sp.s.keys || []).concat(PRON_FOR[sp.s.tp] || []);
    for (let i = 0; i < tokens.length; i++) {
      if (keys.some((k) => k.indexOf(" ") < 0 ? tokenMatches(tokens[i], k) || tokens[i] === k : false)) return { found: true, idx: i };
    }
    if (keys.some((k) => k.indexOf(" ") >= 0 && joined.indexOf(" " + k + " ") >= 0)) return { found: true, idx: null };
    return { found: false, idx: null };
  }
  function learnerPerson(tokens, verbIdx, chainIdx, sp, subj) {
    const start = chainIdx.length ? chainIdx[0] : verbIdx;
    let j = start - 1;
    while (j >= 0 && EN.ADV.has(tokens[j])) j--;
    if (j < 0) return sp.s.p;
    const t = tokens[j];
    if (EN.PRON[t]) return EN.PRON[t];
    if (j >= 2 && tokens[j - 2] && tokens.slice(0, j).indexOf("and") >= 0 && tokens.slice(0, j).length <= 5) return "3pl";
    if (subj.found) return sp.s.p;
    if (/^(people|police|children|men|women)$/.test(t)) return "3pl";
    if (/[a-z]{3,}s$/.test(t) && !/(ss|us|is|ics)$/.test(t)) return "3pl";
    return "3sg";
  }

  // ---------- main analysis of one sentence ----------
  function analyzeOne(sp, userRaw) {
    const res = { sp, user: (userRaw || "").trim(), issues: [], notes: [], score: 100 };
    const T = EN.TENSE_BY_ID;
    const expected = T[sp.tense];
    res.expected = expected;
    if (!res.user) {
      res.verdict = "empty"; res.score = 0;
      res.issues.push({ sev: "major", cat: "missing", title: "No translation", detail: "This sentence was left blank.", fix: sp.refText });
      res.corrected = sp.refText;
      return res;
    }
    const tokens = EN.tokenize(res.user);
    const joined = " " + tokens.join(" ") + " ";
    res.tokens = tokens;

    // exact / accepted match
    const nUser = norm(EN.expandContractions(res.user));
    const refHit = sp.refs.find((r) => norm(EN.expandContractions(r)) === nUser);

    // subject & verb
    const subj = findSubject(tokens, joined, sp);
    const verbLemmas = [sp.vp.e].concat(sp.vp.k[0].filter((w) => w.indexOf(" ") < 0 && w !== sp.vp.e));
    let v = findVerb(tokens, verbLemmas);
    let usedOtherVerb = false;
    if (!v) { v = findAnyVerb(tokens, subj.idx); usedOtherVerb = !!v; }
    let cls = null, possible = null, learnerTense = null, person = sp.s.p;
    if (v) {
      const hints = v.f ? [v.f] : [];
      possible = EN.possibleForms(tokens[v.i], hints);
      if (v.over) { possible.add("past"); possible.add("pp"); }
      if (!possible.size) {
        if (/[^s]s$/.test(tokens[v.i])) possible.add("s"); else possible.add("base");
      }
      cls = EN.classify(tokens, v.i, possible, {});
      // "I been reading" — been with no have/has/had
      if (cls.chain.length === 1 && cls.chain[0] === "been") { cls.tense = /ing$/.test(tokens[v.i]) ? "present-perfect-continuous" : "present-perfect"; cls.errs.push({ code: "MISSING_HAVE" }); }
      learnerTense = cls.tense;
      person = learnerPerson(tokens, v.i, cls.chainIdx, sp, subj);
    }
    res.verbIdx = v ? v.i : null;
    res.chainIdx = cls ? cls.chainIdx : [];
    res.learnerTense = learnerTense;
    res.person = person;

    const add = (sev, cat, title, detail, fix, pen) => { res.issues.push({ sev, cat, title, detail, fix }); res.score -= pen; };
    const verbTok = v ? tokens[v.i] : null;
    const lem = v && v.lem ? v.lem : verbTok ? lemmaOf(verbTok) : null;
    const lf = lem ? EN.forms(lem) : null;
    const correctGroup = lf ? EN.verbGroup(sp.tense, person, lf) : null;
    const correctGroupTxt = correctGroup ? correctGroup.aux.concat([correctGroup.main]).join(" ") : "";
    const learnerGroupTxt = v ? cls.chainIdx.map((i) => tokens[i]).concat([verbTok]).join(" ") : "";
    res.learnerGroup = learnerGroupTxt;
    res.correctGroup = correctGroupTxt;

    // ---- 1. verb form errors (wrong participle etc.) ----
    const formErrors = [];
    if (cls) {
      cls.errs.forEach((e) => {
        const after = e.after || "";
        switch (e.code) {
          case "NEEDS_PP": formErrors.push(["Wrong verb form after \"" + after + "\"", `"${after}" must be followed by the past participle (V3). You wrote "${verbTok}". The V3 of "${lem}" is "${lf.pp[0]}".`, `${after} ${lf.pp[0]}`]); break;
          case "NEEDS_ING": formErrors.push(["Wrong verb form after \"" + after + "\"", `After "${after}" you need the -ing form. You wrote "${verbTok}"; use "${lf.ing}".`, `${after} ${lf.ing}`]); break;
          case "NEEDS_BASE": formErrors.push(["Wrong verb form after \"" + after + "\"", `After "${after}" always use the base form (V1) — no -s, no -ed, no past form. "${verbTok}" → "${lf.base}".`, `${after} ${lf.base}`]); break;
          case "DID_PLUS_PAST": formErrors.push(["Double past", `"did" already carries the past tense, so the main verb stays in the base form: did + ${lf.base} (not "${verbTok}").`, `did ${lf.base}`]); break;
          case "DO_PLUS_S": formErrors.push(["Double -s", `"does" already carries the -s, so the main verb stays plain: does + ${lf.base}.`, `does ${lf.base}`]); break;
          case "MISSING_BE": formErrors.push(["Missing helping verb", `An -ing verb can't stand alone as the main verb. You need am/is/are (or was/were, will be…) before "${verbTok}".`, `${EN.beForm(person, false)} ${verbTok}`]); break;
          case "BARE_PP": formErrors.push(["Past participle used alone", `"${verbTok}" is a past participle (V3); it needs have/has/had in front of it. For a simple past sentence use the V2 form: "${lf.past[0]}".`, sp.tense === "simple-past" ? lf.past[0] : `${EN.haveForm(person)} ${verbTok}`]); break;
          case "MISSING_HAVE": formErrors.push(["Missing have/has", `"been" can't follow the subject directly. The perfect tenses need have/has/had: "${EN.haveForm(person)} been ${verbTok}".`, `${EN.haveForm(person)} been ${verbTok}`]); break;
        }
      });
    }
    formErrors.forEach((f) => add("major", "form", f[0], f[1], f[2], 18));

    // over-regularised irregular verbs (goed, buyed, eated…)
    tokens.forEach((t) => {
      const base = EN.overRegular(t);
      if (base && t !== EN.forms(base).past[0] && EN.forms(base).pp.indexOf(t) < 0) {
        const f = EN.forms(base);
        add("major", "form", `Irregular verb: "${t}"`, `"${base}" is irregular — it does not take -ed. Past (V2): "${f.past[0]}", past participle (V3): "${f.pp[0]}".`, f.past[0] + " / " + f.pp[0], 15);
      }
    });

    // ---- 2. agreement ----
    if (cls && lf) {
      EN.checkAgreement(tokens, cls, v.i, person).forEach((e) => {
        add("major", "agreement", "Subject–verb agreement", `The subject is ${personLabel(person)}, so the helping verb must be "${e.good}", not "${e.bad}".`, e.good, 12);
      });
      if (cls.chain.length === 0 && learnerTense === "simple-present" && sp.tense === "simple-present") {
        if (person === "3sg" && verbTok === lf.base && lf.base !== lf.s && !(possible.has("past") && sp.tense === "simple-past")) {
          add("major", "agreement", "Missing -s (he/she/it)", `In the simple present, a singular third-person subject (he, she, it, a name, "the team"…) takes verb + s: "${lf.s}", not "${verbTok}". Telugu marks this with -తాడు/-తుంది; English marks it with -s.`, lf.s, 12);
        } else if (person !== "3sg" && verbTok === lf.s && lf.s !== lf.base) {
          add("major", "agreement", "Extra -s", `With ${personLabel(person)} the verb has no -s in the simple present: "${lf.base}", not "${verbTok}".`, lf.base, 12);
        }
      }
    }

    // ---- 3. tense choice ----
    let tenseOK = false, tenseNote = null;
    if (learnerTense && learnerTense !== "unknown" && learnerTense !== "modal") {
      if (learnerTense === sp.tense) tenseOK = true;
      else if (cls.ambiguous && cls.ambiguous.indexOf(sp.tense) >= 0) tenseOK = true;
      else if (sp.tense === "simple-future" && cls.goingTo) { tenseOK = true; tenseNote = "You used \"going to\" — correct and natural for plans. \"will\" is the neutral choice for a Telugu -తాడు sentence with a future time word; both are right here."; }
      else if (sp.tense === "present-perfect" && learnerTense === "simple-past" && /\b(already|just)\b/.test(joined)) {
        tenseOK = true; tenseNote = "American English often accepts the simple past with already/just, but exam and British English expect the present perfect (have/has + V3). Use the present perfect to be safe."; res.score -= 6;
      }
    }
    res.tenseOK = tenseOK;
    if (tenseNote) res.notes.push({ title: "Tense note", detail: tenseNote });
    if (!tenseOK) {
      const lt = learnerTense && T[learnerTense] ? T[learnerTense].name : learnerTense === "modal" ? "a modal verb (can/should/would…)" : "no clear tense";
      const whyExp = `${expected.clue}`;
      add("major", "tense", `Tense: expected ${expected.name}`, `You used ${lt}${learnerGroupTxt ? ` ("${learnerGroupTxt}")` : ""}. ${whyExp} Formula: ${expected.formula}.`, correctGroupTxt, formErrors.length ? 20 : 35);
    }
    if (cls && cls.passive) res.notes.push({ title: "Passive voice", detail: "Your sentence is in the passive voice. The Telugu sentence is active (the subject does the action), so keep it active: subject + verb + object." });
    if (cls && isContinuous(learnerTense) && lem && EN.STATIVE.has(lem)) add("minor", "form", "Stative verb in -ing form", `"${lem}" describes a state, not an action, so it normally is not used in continuous tenses.`, null, 6);

    // ---- 4. time expression checks ----
    const timeReqs = sp.req.filter((r) => r.kind === "time");
    const missingTime = timeReqs.filter((r) => !groupPresent(tokens, joined, r.words));
    if (missingTime.length) {
      const m = missingTime[0];
      add("minor", "time", "Time expression missing or changed", `The Telugu words "${m.te}" mean "${m.en}". They are the signal that tells you which tense to use, so keep them in your English sentence.`, m.en, 10);
    }
    if ((learnerTense === "simple-present" || learnerTense === "present-continuous") && /\b(since|for)\b/.test(joined) && /\b(since|for) (the )?(last |past )?(\w+ )?(morning|monday|year|hours?|days?|weeks?|months?|years?|long|ages)\b/.test(joined)) {
      add("major", "tense", "Classic mistake: present tense + since/for", `A very common error for Telugu speakers ("I am working here since 2020"). When an action started in the past and is still going on, English uses the present perfect continuous: "${EN.haveForm(person)} been ${lf ? lf.ing : "V-ing"}".`, lf ? `${EN.haveForm(person)} been ${lf.ing}` : null, 6);
    }
    if (learnerTense === "present-perfect" && FINISHED_TIME.test(joined)) {
      add("major", "tense", "Present perfect + finished time", "The present perfect cannot be used with a finished time (yesterday, ago, last week, in 2020). With those words use the simple past.", lf ? lf.past[0] : null, 6);
    }
    if (DURATION_AFTER_SINCE.test(joined)) add("minor", "time", "since vs for", "Use \"for\" with a length of time (for two hours, for three days). Use \"since\" with a starting point (since Monday, since morning).", joined.match(DURATION_AFTER_SINCE)[0].replace(/^since/, "for"), 8);
    if (POINT_AFTER_FOR.test(joined)) add("minor", "time", "for vs since", "Use \"since\" with a starting point (since morning, since Monday, since last year). Use \"for\" with a length of time.", joined.match(POINT_AFTER_FOR)[0].replace(/^for/, "since"), 8);

    // ---- 5. meaning / vocabulary ----
    if (!subj.found && sp.s.keys && sp.s.keys.length) {
      add("minor", "meaning", "Subject", `"${sp.s.te || sp.s.en}" is "${sp.s.en}". I couldn't find it in your sentence.`, sp.s.en, 8);
    }
    if (usedOtherVerb && verbTok) {
      res.notes.push({ title: "Verb choice", detail: `You used "${verbTok}". The Telugu verb "${sp.req.find((r) => r.kind === "verb").te}" is best translated as "${sp.vp.e}"${sp.vp.k[0].length > 1 ? ` (also fine: ${sp.vp.k[0].filter((w) => w !== sp.vp.e).slice(0, 3).join(", ")})` : ""}. Your word may still work — check the meaning.` });
      res.score -= 5;
    } else if (!v) {
      add("major", "meaning", "No verb found", `I couldn't find a main verb. The Telugu verb here means "${sp.vp.e}".`, sp.vp.e, 20);
    }
    const objMissing = sp.req.filter((r) => r.kind === "object" && !groupPresent(tokens, joined, r.words));
    if (objMissing.length) {
      add("minor", "meaning", "Part of the meaning is missing", `For "${objMissing[0].te}" I expected a word like "${objMissing[0].words.slice(0, 3).join(" / ")}".`, sp.vp.t, 6 * Math.min(objMissing.length, 2));
    }

    // ---- 6. articles & mechanics ----
    const refTokens = EN.tokenize(sp.refText);
    for (let i = 0; i < refTokens.length - 1; i++) {
      if (refTokens[i] === "the" || refTokens[i] === "a" || refTokens[i] === "an") {
        const noun = refTokens[i + 1];
        const ui = tokens.indexOf(noun);
        if (ui >= 0 && !DETERMINERS.has(tokens[ui - 1] || "") && !/^(two|three|five|ten|six|four|eight|nine|new|old|holy|final|healthy|beautiful|economic|important|spiritual)$/.test(tokens[ui - 1] || "") && !EN.ADV.has(noun) && !/^(same|last|next|end)$/.test(noun)) {
          add("minor", "article", "Article missing", `English needs an article here: "${refTokens[i]} ${noun}". Telugu has no word for "a/an/the", so this is one of the most common slips.`, `${refTokens[i]} ${noun}`, 4);
          break;
        }
      }
    }
    const raw = res.user;
    if (/^[a-z]/.test(raw)) add("minor", "mechanics", "Capital letter", "Start the sentence with a capital letter.", null, 2);
    if (/(^|\s)i(\s|'|$)/.test(raw)) add("minor", "mechanics", "Capital \"I\"", "The pronoun \"I\" is always a capital letter.", "I", 2);
    const properNouns = Array.from(new Set((sp.refText.match(/\b[A-Z][a-zA-Z]+\b/g) || []).slice(1).filter((w) => w !== "I")
      .concat(Object.values(capsDict()).filter((w) => !/^(May|March|AI|TV)$/.test(w) && new RegExp("\\b" + w.toLowerCase() + "\\b").test(raw)))));
    properNouns.forEach((pn) => {
      const re = new RegExp("\\b" + pn.toLowerCase() + "\\b");
      if (re.test(raw)) add("minor", "mechanics", `Capitalise "${pn}"`, "Names of people, places, languages and days start with a capital letter.", pn, 2);
    });

    // ---- verdict ----
    res.score = Math.max(0, Math.min(100, Math.round(res.score)));
    const majors = res.issues.filter((i) => i.sev === "major").length;
    if (refHit) { res.verdict = "perfect"; res.score = 100; res.issues = res.issues.filter((i) => i.cat === "mechanics"); }
    else if (!tenseOK) res.verdict = "wrong-tense";
    else if (majors) res.verdict = "needs-work";
    else if (res.issues.length) res.verdict = "good";
    else res.verdict = "excellent";
    if (res.verdict === "excellent" || res.verdict === "perfect") res.score = Math.max(res.score, 92);

    // ---- corrected version ----
    res.corrected = buildCorrection(res, sp, tokens, v, cls, lf, person, missingTime, objMissing, subj);
    res.why = explainWhy(res, sp, verbTok, learnerGroupTxt, correctGroupTxt);
    return res;
  }

  function isContinuous(t) { return !!t && /continuous/.test(t); }
  function personLabel(p) {
    return { "1sg": "\"I\"", "1pl": "\"we\" (plural)", "2": "\"you\"", "3sg": "singular (he / she / it / one person or thing)", "3pl": "plural (they / more than one)" }[p] || p;
  }

  // patch the learner's own sentence where possible; otherwise fall back to the model answer
  function buildCorrection(res, sp, tokens, v, cls, lf, person, missingTime, objMissing, subj) {
    if (res.verdict === "perfect" || res.verdict === "excellent") return null;
    if (!v || !lf || missingTime.length || objMissing.length > 1 || !subj.found) return sp.refText;
    const out = tokens.slice();
    let start = cls.chainIdx.length ? cls.chainIdx[0] : v.i;
    const MID = /^(already|just|always|usually|often|never|still|also|currently|generally|normally|sometimes|frequently|regularly)$/;
    while (start > 0 && MID.test(out[start - 1])) start--;
    const advsInside = [];
    for (let i = start; i < v.i; i++) if (EN.ADV.has(out[i]) && cls.chainIdx.indexOf(i) < 0) advsInside.push(out[i]);
    const g = EN.verbGroup(sp.tense, person, lf);
    const words = g.aux.slice();
    if (advsInside.length) { if (words.length) words.splice(1, 0, ...advsInside); else words.push(...advsInside); }
    words.push(g.main);
    out.splice(start, v.i - start + 1, ...words);
    let s = out.map((t) => { const b = EN.overRegular(t); return b && t !== EN.forms(b).past[0] ? EN.forms(b).past[0] : t; }).join(" ");
    // agreement fixes on stray be/have before the new group are already replaced; since/for swaps
    s = " " + s + " ";
    s = s.replace(DURATION_AFTER_SINCE, (m) => m.replace(/^since/, "for"));
    s = s.replace(POINT_AFTER_FOR, (m) => m.replace(/^for/, "since"));
    // articles
    const refTokens = EN.tokenize(sp.refText);
    for (let i = 0; i < refTokens.length - 1; i++) {
      if (/^(the|a|an)$/.test(refTokens[i])) {
        const noun = refTokens[i + 1];
        const re = new RegExp(" (to|at|in|on|by|for|of|from|with|,|visited|visit) " + noun + " ");
        s = s.replace(re, (m, p) => ` ${p} ${refTokens[i]} ${noun} `);
      }
    }
    s = s.trim();
    // restore capitals from the reference sentence
    const caps = Object.assign({}, capsDict());
    (sp.refText.match(/\b[A-Z][a-zA-Z]*\b/g) || []).forEach((w) => (caps[w.toLowerCase()] = w));
    s = s.split(" ").map((w, i) => (w === "i" ? "I" : caps[w] && (i > 0 || true) && w.length > 1 && caps[w] !== caps[w].toLowerCase() && !(i > 0 && /^(the|a|an|at|by|in|on|when)$/.test(w)) ? caps[w] : w)).join(" ");
    const lead = sp.refText.indexOf(",") > 0 ? norm(sp.refText.split(",")[0]) : null;
    if (lead && norm(s).indexOf(lead + " ") === 0 && s.indexOf(",") < 0) {
      const n = lead.split(" ").length;
      const w = s.split(" ");
      s = w.slice(0, n).join(" ") + ", " + w.slice(n).join(" ");
    }
    s = s.charAt(0).toUpperCase() + s.slice(1);
    if (!/[.!?]$/.test(s)) s += ".";
    return s;
  }

  function explainWhy(res, sp, verbTok, learnerGroup, correctGroup) {
    const e = res.expected;
    const timeReq = sp.req.find((r) => r.kind === "time");
    const signal = timeReq ? `"${timeReq.te}" (${timeReq.en})` : "the Telugu verb ending";
    const clue = e.clue.split(". ")[0].replace(/\.$/, "") + ".";
    const formBad = res.issues.some((i) => i.cat === "form" || i.cat === "agreement");
    if (res.tenseOK && res.learnerTense && res.learnerTense !== sp.tense && EN.TENSE_BY_ID[res.learnerTense] && !(sp.tense === "simple-future" && res.learnerTense === "simple-future")) {
      return `Accepted, but not the best choice. You used the ${EN.TENSE_BY_ID[res.learnerTense].name} ("${learnerGroup}"). The signal ${signal} points to the ${e.name}: ${e.formula}${correctGroup ? ` → "${correctGroup}"` : ""}.`;
    }
    if (res.tenseOK) {
      if (formBad) return `Right tense choice: ${e.name} — the signal is ${signal}. ${clue} But the verb form needs fixing (see below): the formula is ${e.formula}${correctGroup ? `, so write "${correctGroup}"` : ""}.`;
      return `Right tense: ${e.name}. The signal is ${signal}. ${clue}${learnerGroup ? ` Your verb "${learnerGroup}" follows the formula ${e.formula}.` : ""}`;
    }
    const lt = res.learnerTense && EN.TENSE_BY_ID[res.learnerTense] ? "the " + EN.TENSE_BY_ID[res.learnerTense].name : "not a correct verb form";
    return `This sentence needs the ${e.name}. The signal is ${signal}. ${clue}${learnerGroup ? ` "${learnerGroup}" is ${lt}.` : ""} Use ${e.formula}${correctGroup ? `: "${correctGroup}"` : ""}.`;
  }

  // ---------- splitting a paragraph answer into sentences ----------
  function splitSentences(text) {
    return (text || "").replace(/\s+/g, " ").split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter(Boolean);
  }
  function splitClauses(sent) {
    const parts = sent.split(/,?\s+(?:and then|and|but|then|so|while)\s+(?=[A-Za-z])|;\s*/i).map((x) => x.trim()).filter(Boolean);
    return parts.map((p, i) => (i === 0 ? p.replace(/[.!?]$/, "") + "." : p.charAt(0).toUpperCase() + p.slice(1).replace(/[.!?]*$/, ".")));
  }
  function overlap(sp, sent) {
    const tokens = EN.tokenize(sent);
    const joined = " " + tokens.join(" ") + " ";
    let score = 0;
    sp.req.forEach((r) => { if (groupPresent(tokens, joined, r.words)) score += r.kind === "time" ? 1.5 : r.kind === "verb" ? 2 : 1; });
    return score;
  }
  // monotone alignment: each item → one learner sentence; two items may share a sentence (joined with "and").
  function align(items, sents) {
    const n = items.length, m = sents.length;
    if (!m) return items.map(() => "");
    if (m === n) return sents.slice();
    const S = items.map((it) => sents.map((s) => overlap(it, s)));
    const NEG = -1e9;
    const dp = Array.from({ length: n }, () => Array(m).fill(NEG));
    const bk = Array.from({ length: n }, () => Array(m).fill(-1));
    for (let j = 0; j < m; j++) dp[0][j] = S[0][j] - j * 0.01;
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < m; j++) {
        for (let k = 0; k <= j; k++) {
          const val = dp[i - 1][k] + S[i][j] - (k === j ? 0.5 : 0);
          if (val > dp[i][j]) { dp[i][j] = val; bk[i][j] = k; }
        }
      }
    }
    let j = 0; for (let q = 1; q < m; q++) if (dp[n - 1][q] > dp[n - 1][j]) j = q;
    const out = Array(n);
    const idx = Array(n);
    for (let i = n - 1; i >= 0; i--) { idx[i] = j; j = i > 0 ? bk[i][j] : j; }
    for (let i = 0; i < n; i++) out[i] = sents[idx[i]];
    // two or more items landed in one learner sentence → split it into clauses and align again
    let i = 0;
    while (i < n) {
      let k = i; while (k + 1 < n && idx[k + 1] === idx[i]) k++;
      if (k > i) {
        const clauses = splitClauses(sents[idx[i]]);
        if (clauses.length >= k - i + 1) {
          const sub = align(items.slice(i, k + 1), clauses.length === k - i + 1 ? clauses : clauses);
          for (let q = i; q <= k; q++) out[q] = sub[q - i];
        }
      }
      i = k + 1;
    }
    return out;
  }

  // analyse a whole set: answers = array of strings, one per paragraph (or per sentence when perSentence)
  function analyzeSet(set, answers, perSentence) {
    const results = [];
    if (perSentence) {
      set.items.forEach((sp, i) => results.push(analyzeOne(sp, answers[i] || "")));
    } else {
      set.paragraphs.forEach((para, pi) => {
        const sents = splitSentences(answers[pi] || "");
        const aligned = align(para, sents);
        para.forEach((sp, i) => results.push(analyzeOne(sp, aligned[i] || "")));
      });
    }
    const n = results.length;
    const avg = n ? Math.round(results.reduce((a, r) => a + r.score, 0) / n) : 0;
    const tenseRight = results.filter((r) => r.tenseOK).length;
    const cats = {};
    results.forEach((r) => r.issues.forEach((i) => { cats[i.cat] = (cats[i.cat] || 0) + 1; }));
    const topCats = Object.keys(cats).sort((a, b) => cats[b] - cats[a]);
    return { results, avg, tenseRight, n, cats, topCats };
  }

  TL.AN = { analyzeOne, analyzeSet, splitSentences, align, esc };
})();
