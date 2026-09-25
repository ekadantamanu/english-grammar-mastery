/* ===========================================================
   Translation Lab — English tense engine (no API, no network).
   - verb forms (regular + irregular)
   - realising a sentence in any of the 12 tenses
   - detecting which tense a learner's English sentence uses
   - finding grammar errors typical for Telugu-speaking learners
   Exposes window.TL.EN
   =========================================================== */
(function () {
  "use strict";
  const TL = (window.TL = window.TL || {});

  // ---------- tense metadata (used for teaching text) ----------
  const TENSES = [
    { id: "simple-present", name: "Simple Present", group: "Present", formula: "subject + V1 (V-s for he/she/it)",
      te: "ప్రతి రోజు / ఎప్పుడూ / సాధారణంగా + -తాడు / -తారు / -తుంది",
      clue: "A habit, routine or general truth. Telugu usually shows it with frequency words (ప్రతి రోజు = every day, ఎప్పుడూ = always, సాధారణంగా = usually) and the -తాడు / -తుంది verb ending.",
      tip: "Habit or fact → plain verb. Add -s/-es for he, she, it, a name or a singular noun." },
    { id: "present-continuous", name: "Present Continuous", group: "Present", formula: "am/is/are + V-ing",
      te: "ఇప్పుడు / ప్రస్తుతం / ఈ క్షణంలో + -తున్నాడు / -తోంది",
      clue: "An action in progress right now or a temporary situation. Telugu marks it with -తున్నాను / -తున్నాడు / -తోంది plus words like ఇప్పుడు (now) or ప్రస్తుతం (currently).",
      tip: "Happening now / around now → be + verb-ing. Never use it for know, like, want, need, love." },
    { id: "present-perfect", name: "Present Perfect", group: "Present", formula: "have/has + V3 (past participle)",
      te: "ఇప్పటికే / ఇప్పుడే / ఇంతవరకు + past verb (-ాడు / -ింది)",
      clue: "Telugu uses its ordinary past verb but adds ఇప్పటికే (already), ఇప్పుడే (just), ఇంతవరకు / ఇప్పటికి (so far). Those words tell you the past action matters NOW.",
      tip: "Past action + result/connection to now, with no finished time (yesterday, ago) → have/has + V3." },
    { id: "present-perfect-continuous", name: "Present Perfect Continuous", group: "Present", formula: "have/has been + V-ing",
      te: "… నుండి / … గా + -తున్నాడు / -తోంది",
      clue: "An action that started in the past and is STILL going on. Telugu: a duration or start point (ఉదయం నుండి = since morning, రెండు గంటలుగా = for two hours) with a continuous verb.",
      tip: "since + point in time; for + length of time. 'Since morning', 'for two hours'." },
    { id: "simple-past", name: "Simple Past", group: "Past", formula: "subject + V2 (past form)",
      te: "నిన్న / గత వారం / … క్రితం + past verb",
      clue: "A finished action at a finished time. Telugu shows it with words such as నిన్న (yesterday), గత వారం (last week), రెండు రోజుల క్రితం (two days ago).",
      tip: "Finished time named → V2. Irregular verbs: go → went, buy → bought." },
    { id: "past-continuous", name: "Past Continuous", group: "Past", formula: "was/were + V-ing",
      te: "నిన్న ఈ సమయానికి / … గంటలకు + -తూ ఉన్నాడు",
      clue: "An action that was in progress at a particular moment in the past. Telugu: a time point (నిన్న సాయంత్రం ఐదు గంటలకు = at five yesterday evening) with -తూ ఉన్నాడు.",
      tip: "'At that moment, in the middle of doing it' → was/were + V-ing." },
    { id: "past-perfect", name: "Past Perfect", group: "Past", formula: "had + V3",
      te: "… కల్లా / అప్పటికే + past verb",
      clue: "An action finished BEFORE another past moment. Telugu: -కల్లా (by) and అప్పటికే (already by then) with a past verb.",
      tip: "Earlier past action → had + V3. Two past events: the earlier one takes 'had'." },
    { id: "past-perfect-continuous", name: "Past Perfect Continuous", group: "Past", formula: "had been + V-ing",
      te: "… వచ్చేసరికి + … గా / నుండి + -తూ ఉన్నాడు",
      clue: "An action that had been going on for some time UP TO a past moment. Telugu: '…-సరికి' (by the time) + a duration + -తూ ఉన్నాడు.",
      tip: "Duration before a past moment → had been + V-ing (+ for/since)." },
    { id: "simple-future", name: "Simple Future", group: "Future", formula: "will + V1",
      te: "రేపు / వచ్చే వారం / త్వరలో + -తాడు",
      clue: "Telugu has no separate future verb: the same -తాడు / -తారు ending is used, and words like రేపు (tomorrow), వచ్చే వారం (next week), త్వరలో (soon) make it future.",
      tip: "Future time word + the -తాడు ending → will + V1." },
    { id: "future-continuous", name: "Future Continuous", group: "Future", formula: "will be + V-ing",
      te: "రేపు ఈ సమయానికి / … గంటలకు + -తూ ఉంటాడు",
      clue: "An action that will be in progress at a future moment. Telugu: -తూ ఉంటాడు / -తూ ఉంటారు with a time point (రేపు ఈ సమయానికి = this time tomorrow).",
      tip: "'-తూ ఉంటాడు' → will be + V-ing." },
    { id: "future-perfect", name: "Future Perfect", group: "Future", formula: "will have + V3",
      te: "… కల్లా / … నాటికి + (V-ి) ఉంటాడు",
      clue: "An action that will be COMPLETE before a future time. Telugu: -కల్లా / -నాటికి (by) with the '-ి ఉంటాడు' form (చదివి ఉంటాడు).",
      tip: "'By + future time' + finished → will have + V3." },
    { id: "future-perfect-continuous", name: "Future Perfect Continuous", group: "Future", formula: "will have been + V-ing",
      te: "… కు + -తూ + (duration) అవుతుంది",
      clue: "How long an action will have been going on by a future time. Telugu: '-తూ … ఐదేళ్ళు అవుతుంది' (it will be five years of doing it).",
      tip: "'By next month … for five years' → will have been + V-ing." },
  ];
  const TENSE_BY_ID = {};
  TENSES.forEach((t) => (TENSE_BY_ID[t.id] = t));

  // ---------- irregular verbs ----------
  const IRR_SRC = `be was/were been;become became become;begin began begun;bite bit bitten;blow blew blown;break broke broken;bring brought brought;build built built;burn burned/burnt burned/burnt;buy bought bought;catch caught caught;choose chose chosen;come came come;cost cost cost;cut cut cut;deal dealt dealt;do did done;draw drew drawn;dream dreamed/dreamt dreamed/dreamt;drink drank drunk;drive drove driven;eat ate eaten;fall fell fallen;feed fed fed;feel felt felt;fight fought fought;find found found;fly flew flown;forget forgot forgotten;forgive forgave forgiven;freeze froze frozen;get got got/gotten;give gave given;go went gone/been;grow grew grown;hang hung hung;have had had;hear heard heard;hide hid hidden;hit hit hit;hold held held;hurt hurt hurt;keep kept kept;know knew known;lay laid laid;lead led led;learn learned/learnt learned/learnt;leave left left;lend lent lent;let let let;lie lay lain;light lit lit;lose lost lost;make made made;mean meant meant;meet met met;pay paid paid;put put put;quit quit quit;read read read;ride rode ridden;ring rang rung;rise rose risen;run ran run;say said said;see saw seen;sell sold sold;send sent sent;set set set;shake shook shaken;shine shone shone;shoot shot shot;show showed showed/shown;shut shut shut;sing sang sung;sink sank sunk;sit sat sat;sleep slept slept;speak spoke spoken;spend spent spent;spread spread spread;stand stood stood;steal stole stolen;swim swam swum;take took taken;teach taught taught;tear tore torn;tell told told;think thought thought;throw threw thrown;understand understood understood;undertake undertook undertaken;wake woke woken;wear wore worn;win won won;write wrote written;overcome overcame overcome;withdraw withdrew withdrawn;upset upset upset;rebuild rebuilt rebuilt;outdo outdid outdone;forecast forecast forecast;broadcast broadcast broadcast`;
  const IRR = {};
  IRR_SRC.split(";").forEach((row) => {
    const p = row.trim().split(" ");
    IRR[p[0]] = { past: p[1].split("/"), pp: p[2].split("/") };
  });
  const DOUBLE = new Set("admit commit control occur prefer refer submit permit plan stop drop shop jog chat skip trip slip ship grab clap hug nod rob tap beg drag stir star drum program transfer regret equip".split(" "));

  function isVowel(c) { return "aeiou".indexOf(c) >= 0; }
  function shouldDouble(w) {
    if (DOUBLE.has(w)) return true;
    if (w.length < 3) return false;
    const a = w[w.length - 3], b = w[w.length - 2], c = w[w.length - 1];
    if (!(!isVowel(a) && isVowel(b) && !isVowel(c) && "wxy".indexOf(c) < 0)) return false;
    // only one vowel group → one syllable (stop, plan). Longer verbs are not doubled unless listed.
    const groups = w.match(/[aeiouy]+/g) || [];
    return groups.length === 1;
  }
  function regS(w) {
    if (/(s|x|z|ch|sh|o)$/.test(w)) return w + "es";
    if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + "ies";
    return w + "s";
  }
  function regEd(w) {
    if (/e$/.test(w)) return w + "d";
    if (/[^aeiou]y$/.test(w)) return w.slice(0, -1) + "ied";
    if (shouldDouble(w)) return w + w[w.length - 1] + "ed";
    return w + "ed";
  }
  function regIng(w) {
    if (/ie$/.test(w)) return w.slice(0, -2) + "ying";
    if (/[^aeiouy]e$/.test(w) && !/(ee|ye|oe)$/.test(w)) return w.slice(0, -1) + "ing";
    if (shouldDouble(w)) return w + w[w.length - 1] + "ing";
    return w + "ing";
  }
  // forms(lemma) -> { base, s, past:[..], pp:[..], ing }
  function forms(lemma) {
    lemma = lemma.toLowerCase();
    const irr = IRR[lemma];
    let s = regS(lemma);
    if (lemma === "be") s = "is";
    if (lemma === "have") s = "has";
    if (lemma === "do") s = "does";
    if (lemma === "go") s = "goes";
    return {
      base: lemma,
      s,
      past: irr ? irr.past : [regEd(lemma)],
      pp: irr ? irr.pp : [regEd(lemma)],
      ing: regIng(lemma),
      irregular: !!irr,
    };
  }

  // ---------- tokenising ----------
  const NEG_MAP = { "won't": "will not", "can't": "can not", "cannot": "can not", "shan't": "shall not", "ain't": "am not" };
  function expandContractions(raw) {
    let t = raw.toLowerCase().replace(/[’‘`]/g, "'");
    t = t.replace(/\b(\w+)n't\b/g, (m, w) => {
      if (NEG_MAP[m]) return NEG_MAP[m];
      return w + " not";
    });
    t = t.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "can not");
    t = t.replace(/\b(i|you|we|they)'re\b/g, (m, w) => (w === "i" ? "i am" : w + " are"));
    t = t.replace(/\bi'm\b/g, "i am");
    t = t.replace(/\b(i|you|we|they|who|would|could|should|might|must)'ve\b/g, "$1 have");
    t = t.replace(/\b(i|you|he|she|it|we|they|that|there|who)'ll\b/g, "$1 will");
    // 's and 'd are ambiguous → resolved by the following word
    t = t.replace(/\b(he|she|it|that|there|who|what|here)'s\s+(\w+)/g, (m, s, nxt) => s + (looksParticiple(nxt) || nxt === "been" ? " has " : " is ") + nxt);
    t = t.replace(/\b(i|you|he|she|it|we|they|who)'d\s+(\w+)/g, (m, s, nxt) => s + (looksParticiple(nxt) || nxt === "been" ? " had " : " would ") + nxt);
    return t;
  }
  function tokenize(text) {
    const t = expandContractions(text).replace(/[“”"]/g, " ");
    return (t.match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g) || []);
  }

  // ---------- word → possible verb forms ----------
  const FORM_INDEX = {}; // word -> [{lemma, form}]
  function addIdx(word, lemma, form) { (FORM_INDEX[word] = FORM_INDEX[word] || []).push({ lemma, form }); }
  Object.keys(IRR).forEach((l) => {
    const f = forms(l);
    addIdx(l, l, "base"); addIdx(f.s, l, "s"); addIdx(f.ing, l, "ing");
    f.past.forEach((p) => addIdx(p, l, "past"));
    f.pp.forEach((p) => addIdx(p, l, "pp"));
  });
  function looksParticiple(w) {
    if (!w) return false;
    const hit = FORM_INDEX[w];
    if (hit && hit.some((h) => h.form === "pp")) return true;
    return /[a-z]{2,}ed$/.test(w) && !/^(need|feed|seed|speed|indeed|bleed|breed|weed|proceed|succeed|exceed|hundred|sacred|naked|wicked)$/.test(w);
  }
  const NOT_VERB_ING = new Set("morning evening something nothing anything everything building meeting spring king ring thing wedding ceiling during string swing sibling darling pudding ping ceiling clothing".split(" "));
  // Which forms could this token be? Optionally given hint lemma-forms.
  function possibleForms(word, hints) {
    const res = new Set();
    (FORM_INDEX[word] || []).forEach((h) => res.add(h.form));
    (hints || []).forEach((f) => {
      if (word === f.base) res.add("base");
      if (word === f.s) res.add("s");
      if (word === f.ing) res.add("ing");
      if (f.past.indexOf(word) >= 0) res.add("past");
      if (f.pp.indexOf(word) >= 0) res.add("pp");
    });
    if (!res.size) {
      if (/[a-z]{3,}ing$/.test(word) && !NOT_VERB_ING.has(word)) res.add("ing");
      else if (/[a-z]{2,}ed$/.test(word)) { res.add("past"); res.add("pp"); }
    }
    return res;
  }
  // Over-regularised irregular: goed, buyed, eated, writed …
  function overRegular(word) {
    if (!/ed$/.test(word)) return null;
    const cands = [word.slice(0, -2), word.slice(0, -1), word.slice(0, -3)];
    for (const c of cands) if (IRR[c]) return c;
    return null;
  }

  // ---------- classification of the verb group ----------
  const ADV = new Set("just already always never ever often usually sometimes also not still really finally recently now currently actually then soon both all each only even almost probably surely certainly definitely yet again so far quickly slowly carefully regularly frequently generally normally rarely seldom nearly barely hardly".split(" "));
  const AUX = new Set("am is are was were be been being have has had having do does did will shall would should can could may might must to going".split(" "));
  const STATIVE = new Set("know want like love hate need prefer believe understand own belong seem remember mean recognize contain consist depend doubt exist fit forget hear imagine matter owe possess realize suppose wish result".split(" "));

  function endsWith(c, s) { return c === s || c.endsWith(" " + s); }

  // Returns {tense, passive, goingTo, errors:[{code, text}], chain, form}
  function classify(tokens, vi, possible, opts) {
    opts = opts || {};
    let j = vi - 1; const chainIdx = [];
    while (j >= 0) {
      const t = tokens[j];
      if (ADV.has(t)) { j--; continue; }
      if (AUX.has(t)) { chainIdx.unshift(j); j--; continue; }
      break;
    }
    const chain = chainIdx.map((i) => tokens[i]);
    const c = chain.join(" ");
    const has = (f) => possible.has(f);
    const errs = [];
    let tense = null, passive = false, goingTo = false;
    const setT = (t, p) => { tense = t; passive = !!p; };

    if (endsWith(c, "will have been") || endsWith(c, "shall have been")) {
      if (has("ing")) setT("future-perfect-continuous"); else if (has("pp")) setT("future-perfect", true);
      else { setT("future-perfect-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (endsWith(c, "will have") || endsWith(c, "shall have")) {
      if (has("pp")) setT("future-perfect");
      else { setT("future-perfect"); errs.push({ code: "NEEDS_PP", after: c }); }
    } else if (endsWith(c, "will be") || endsWith(c, "shall be")) {
      if (has("ing")) setT("future-continuous"); else if (has("pp")) setT("simple-future", true);
      else { setT("future-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (/(^| )(will|shall)$/.test(c)) {
      if (has("base")) setT("simple-future");
      else { setT("simple-future"); errs.push({ code: "NEEDS_BASE", after: c }); }
    } else if (endsWith(c, "going to")) {
      goingTo = true;
      if (has("base")) setT("simple-future");
      else { setT("simple-future"); errs.push({ code: "NEEDS_BASE", after: c }); }
    } else if (endsWith(c, "had been")) {
      if (has("ing")) setT("past-perfect-continuous"); else if (has("pp")) setT("past-perfect", true);
      else { setT("past-perfect-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (/(^| )had$/.test(c)) {
      if (has("pp")) setT("past-perfect");
      else { setT("past-perfect"); errs.push({ code: "NEEDS_PP", after: c }); }
    } else if (endsWith(c, "have been") || endsWith(c, "has been")) {
      if (has("ing")) setT("present-perfect-continuous"); else if (has("pp")) setT("present-perfect", true);
      else { setT("present-perfect-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (/(^| )(have|has)$/.test(c)) {
      if (has("pp")) setT("present-perfect");
      else { setT("present-perfect"); errs.push({ code: "NEEDS_PP", after: c }); }
    } else if (endsWith(c, "was being") || endsWith(c, "were being")) {
      setT("past-continuous", true);
    } else if (endsWith(c, "am being") || endsWith(c, "is being") || endsWith(c, "are being")) {
      setT("present-continuous", true);
    } else if (/(^| )(was|were)$/.test(c)) {
      if (has("ing")) setT("past-continuous"); else if (has("pp")) setT("simple-past", true);
      else { setT("past-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (/(^| )(am|is|are)$/.test(c)) {
      if (has("ing")) setT("present-continuous"); else if (has("pp")) setT("simple-present", true);
      else { setT("present-continuous"); errs.push({ code: "NEEDS_ING", after: c }); }
    } else if (/(^| )did$/.test(c)) {
      if (has("base")) setT("simple-past");
      else { setT("simple-past"); errs.push({ code: "DID_PLUS_PAST", after: c }); }
    } else if (/(^| )(do|does)$/.test(c)) {
      if (has("base")) setT("simple-present");
      else { setT("simple-present"); errs.push({ code: "DO_PLUS_S", after: c }); }
    } else if (/(^| )(would|could|should|might|may|can|must)$/.test(c)) {
      setT("modal");
    } else if (c === "") {
      if (has("ing") && !has("base") && !has("past") && !has("s")) { setT("present-continuous"); errs.push({ code: "MISSING_BE" }); }
      else if (has("past") && !has("base")) setT("simple-past");
      else if (has("base") || has("s")) {
        setT("simple-present");
        if (has("past")) { tense = "simple-present"; opts.ambiguous = ["simple-present", "simple-past"]; }
      } else if (has("pp") && !has("past")) { setT("simple-past"); errs.push({ code: "BARE_PP" }); }
      else if (has("past")) setT("simple-past");
    } else {
      setT("unknown");
    }
    return { tense, passive, goingTo, errs, chain, chainIdx, ambiguous: opts.ambiguous || null };
  }

  // ---------- subject & agreement ----------
  const PRON = { i: "1sg", we: "1pl", you: "2", he: "3sg", she: "3sg", it: "3sg", they: "3pl" };
  function subjectPerson(tokens, startIdx, ctx) {
    // look at the word(s) directly before the verb group
    let j = startIdx - 1;
    while (j >= 0 && ADV.has(tokens[j])) j--;
    if (j < 0) return null;
    const t = tokens[j];
    if (PRON[t]) return PRON[t];
    if (j >= 2 && tokens[j - 1] === "and") return "3pl";
    if (ctx && ctx.subjectMap && ctx.subjectMap[t]) return ctx.subjectMap[t];
    if (/[a-z]{3,}s$/.test(t) && !/(ss|us|is)$/.test(t)) return "3pl";
    if (/^(people|police|children|men|women|villagers|farmers|students|fans)$/.test(t)) return "3pl";
    return ctx && ctx.person ? ctx.person : "3sg";
  }
  function checkAgreement(tokens, cls, vi, person) {
    const errs = [];
    if (!person) return errs;
    const chain = cls.chain;
    const firstAux = chain[0];
    const plural = person === "1pl" || person === "3pl" || person === "2";
    const sing3 = person === "3sg";
    const isBe = (w) => w === "am" || w === "is" || w === "are" || w === "was" || w === "were";
    // first auxiliary carries agreement
    const agreeToken = chain.find((w) => isBe(w) || w === "have" || w === "has" || w === "do" || w === "does");
    if (agreeToken && agreeToken !== "been" && (chain.indexOf(agreeToken) === 0 || chain[0] === "not")) {
      let bad = null, good = null;
      if (agreeToken === "am" && person !== "1sg") { bad = "am"; good = sing3 ? "is" : "are"; }
      else if (agreeToken === "is" && person !== "3sg") { bad = "is"; good = person === "1sg" ? "am" : "are"; }
      else if (agreeToken === "are" && (person === "1sg" || sing3)) { bad = "are"; good = person === "1sg" ? "am" : "is"; }
      else if (agreeToken === "was" && plural) { bad = "was"; good = "were"; }
      else if (agreeToken === "were" && (person === "1sg" || sing3)) { bad = "were"; good = "was"; }
      else if (agreeToken === "has" && !sing3) { bad = "has"; good = "have"; }
      else if (agreeToken === "have" && sing3) { bad = "have"; good = "has"; }
      else if (agreeToken === "does" && !sing3) { bad = "does"; good = "do"; }
      else if (agreeToken === "do" && sing3) { bad = "do"; good = "does"; }
      if (bad) errs.push({ code: "AGREE_AUX", bad, good, person });
    }
    return errs;
  }

  // ---------- realising a sentence ----------
  // person: '1sg' | '1pl' | '2' | '3sg' | '3pl'
  function beForm(person, past) {
    if (past) return person === "1sg" || person === "3sg" ? "was" : "were";
    if (person === "1sg") return "am";
    if (person === "3sg") return "is";
    return "are";
  }
  function haveForm(person) { return person === "3sg" ? "has" : "have"; }
  // returns {aux:[..], main:'..'} — the verb group only
  function verbGroup(tense, person, f) {
    const sing3 = person === "3sg";
    switch (tense) {
      case "simple-present": return { aux: [], main: sing3 ? f.s : f.base };
      case "present-continuous": return { aux: [beForm(person, false)], main: f.ing };
      case "present-perfect": return { aux: [haveForm(person)], main: f.pp[0] };
      case "present-perfect-continuous": return { aux: [haveForm(person), "been"], main: f.ing };
      case "simple-past": return { aux: [], main: f.past[0] };
      case "past-continuous": return { aux: [beForm(person, true)], main: f.ing };
      case "past-perfect": return { aux: ["had"], main: f.pp[0] };
      case "past-perfect-continuous": return { aux: ["had", "been"], main: f.ing };
      case "simple-future": return { aux: ["will"], main: f.base };
      case "future-continuous": return { aux: ["will", "be"], main: f.ing };
      case "future-perfect": return { aux: ["will", "have"], main: f.pp[0] };
      case "future-perfect-continuous": return { aux: ["will", "have", "been"], main: f.ing };
    }
    return { aux: [], main: f.base };
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  // spec: { tense, subjectEn, person, verb (lemma or forms), tail, adv: {pos:'front'|'end'|'mid', text}, lead }
  // Subjects are stored in sentence-internal case ("the team", "he", "Ravi", "I"), so they never need lowercasing.
  function realize(spec) {
    const f = typeof spec.verb === "string" ? forms(spec.verb) : spec.verb;
    const g = verbGroup(spec.tense, spec.person, f);
    const adv = spec.adv;
    const words = g.aux.slice();
    if (spec.midWord) { if (words.length) words.splice(1, 0, spec.midWord); else words.push(spec.midWord); }
    if (adv && adv.pos === "mid") { if (words.length) words.splice(1, 0, adv.text); else words.push(adv.text); }
    words.push(g.main);
    let s = spec.subjectEn + " " + words.join(" ");
    if (spec.tail) s += " " + spec.tail;
    if (adv && adv.pos === "end") s += " " + adv.text;
    if (spec.after) s += " " + spec.after;
    let front = spec.lead || null;
    if (adv && adv.pos === "front") front = front ? front + ", " + adv.text : adv.text;
    if (front) s = front + ", " + s;
    return cap(s.replace(/\s+/g, " ").trim()) + (spec.punct === undefined ? "." : spec.punct);
  }

  TL.EN = { TENSES, TENSE_BY_ID, IRR, forms, tokenize, expandContractions, possibleForms, overRegular, classify,
    subjectPerson, checkAgreement, NOT_VERB_ING, verbGroup, realize, beForm, haveForm, STATIVE, ADV, AUX, cap, PRON, FORM_INDEX, looksParticiple };
})();
