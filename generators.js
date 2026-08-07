/* ===========================================================
   English Grammar Mastery — procedural question generators.
   These build a brand-new question (new words, new sentence,
   dynamically-written explanation) every single call — no
   network, no API, no cost. window.GENERATORS[sectionId](level)
   returns a question object shaped exactly like the static
   EXERCISES entries, or null to fall back to the static bank.
   =========================================================== */

(function () {
  "use strict";

  // ---------- generic helpers ----------
  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function randChoice(arr) { return arr[randInt(0, arr.length - 1)]; }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = randInt(0, i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function uid(prefix) {
    return prefix + "-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
  }
  function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
  // build N unique distractors (!= correct) from a pool, padding with fallback if short
  function pickDistractors(correct, pool, n, fallbackPool) {
    const seen = new Set([String(correct).trim().toLowerCase()]);
    const dedupedPool = pool.filter((x) => {
      const key = String(x).trim().toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    let out = shuffle(dedupedPool).slice(0, n);
    if (out.length < n && fallbackPool) {
      const extra = fallbackPool.filter((x) => {
        const key = String(x).trim().toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      out = out.concat(shuffle(extra).slice(0, n - out.length));
    }
    return out;
  }

  // ---------- verb data ----------
  const IRREGULAR_VERBS = {
    go: { past: "went", pp: "gone", ing: "going", s: "goes" },
    see: { past: "saw", pp: "seen", ing: "seeing", s: "sees" },
    eat: { past: "ate", pp: "eaten", ing: "eating", s: "eats" },
    write: { past: "wrote", pp: "written", ing: "writing", s: "writes" },
    take: { past: "took", pp: "taken", ing: "taking", s: "takes" },
    make: { past: "made", pp: "made", ing: "making", s: "makes" },
    give: { past: "gave", pp: "given", ing: "giving", s: "gives" },
    buy: { past: "bought", pp: "bought", ing: "buying", s: "buys" },
    bring: { past: "brought", pp: "brought", ing: "bringing", s: "brings" },
    think: { past: "thought", pp: "thought", ing: "thinking", s: "thinks" },
    find: { past: "found", pp: "found", ing: "finding", s: "finds" },
    know: { past: "knew", pp: "known", ing: "knowing", s: "knows" },
    break: { past: "broke", pp: "broken", ing: "breaking", s: "breaks" },
    speak: { past: "spoke", pp: "spoken", ing: "speaking", s: "speaks" },
    drive: { past: "drove", pp: "driven", ing: "driving", s: "drives" },
    drink: { past: "drank", pp: "drunk", ing: "drinking", s: "drinks" },
    run: { past: "ran", pp: "run", ing: "running", s: "runs" },
    sing: { past: "sang", pp: "sung", ing: "singing", s: "sings" },
    swim: { past: "swam", pp: "swum", ing: "swimming", s: "swims" },
    fly: { past: "flew", pp: "flown", ing: "flying", s: "flies" },
    grow: { past: "grew", pp: "grown", ing: "growing", s: "grows" },
    throw: { past: "threw", pp: "thrown", ing: "throwing", s: "throws" },
    wear: { past: "wore", pp: "worn", ing: "wearing", s: "wears" },
    choose: { past: "chose", pp: "chosen", ing: "choosing", s: "chooses" },
    forget: { past: "forgot", pp: "forgotten", ing: "forgetting", s: "forgets" },
    lose: { past: "lost", pp: "lost", ing: "losing", s: "loses" },
    send: { past: "sent", pp: "sent", ing: "sending", s: "sends" },
    build: { past: "built", pp: "built", ing: "building", s: "builds" },
    catch: { past: "caught", pp: "caught", ing: "catching", s: "catches" },
    teach: { past: "taught", pp: "taught", ing: "teaching", s: "teaches" },
    sell: { past: "sold", pp: "sold", ing: "selling", s: "sells" },
    tell: { past: "told", pp: "told", ing: "telling", s: "tells" },
    leave: { past: "left", pp: "left", ing: "leaving", s: "leaves" },
    feel: { past: "felt", pp: "felt", ing: "feeling", s: "feels" },
    keep: { past: "kept", pp: "kept", ing: "keeping", s: "keeps" },
    hold: { past: "held", pp: "held", ing: "holding", s: "holds" },
    meet: { past: "met", pp: "met", ing: "meeting", s: "meets" },
    pay: { past: "paid", pp: "paid", ing: "paying", s: "pays" },
    understand: { past: "understood", pp: "understood", ing: "understanding", s: "understands" },
    stand: { past: "stood", pp: "stood", ing: "standing", s: "stands" },
    win: { past: "won", pp: "won", ing: "winning", s: "wins" },
    fall: { past: "fell", pp: "fallen", ing: "falling", s: "falls" },
    put: { past: "put", pp: "put", ing: "putting", s: "puts" },
    come: { past: "came", pp: "come", ing: "coming", s: "comes" },
    read: { past: "read", pp: "read", ing: "reading", s: "reads" }
  };
  const REGULAR_VERBS = {
    work: { ing: "working", ed: "worked", s: "works" },
    play: { ing: "playing", ed: "played", s: "plays" },
    watch: { ing: "watching", ed: "watched", s: "watches" },
    walk: { ing: "walking", ed: "walked", s: "walks" },
    talk: { ing: "talking", ed: "talked", s: "talks" },
    call: { ing: "calling", ed: "called", s: "calls" },
    help: { ing: "helping", ed: "helped", s: "helps" },
    clean: { ing: "cleaning", ed: "cleaned", s: "cleans" },
    cook: { ing: "cooking", ed: "cooked", s: "cooks" },
    listen: { ing: "listening", ed: "listened", s: "listens" },
    study: { ing: "studying", ed: "studied", s: "studies" },
    plan: { ing: "planning", ed: "planned", s: "plans" },
    travel: { ing: "traveling", ed: "traveled", s: "travels" },
    visit: { ing: "visiting", ed: "visited", s: "visits" },
    arrive: { ing: "arriving", ed: "arrived", s: "arrives" },
    decide: { ing: "deciding", ed: "decided", s: "decides" },
    finish: { ing: "finishing", ed: "finished", s: "finishes" },
    start: { ing: "starting", ed: "started", s: "starts" },
    open: { ing: "opening", ed: "opened", s: "opens" },
    close: { ing: "closing", ed: "closed", s: "closes" },
    wash: { ing: "washing", ed: "washed", s: "washes" },
    paint: { ing: "painting", ed: "painted", s: "paints" },
    love: { ing: "loving", ed: "loved", s: "loves" },
    like: { ing: "liking", ed: "liked", s: "likes" },
    want: { ing: "wanting", ed: "wanted", s: "wants" },
    need: { ing: "needing", ed: "needed", s: "needs" },
    live: { ing: "living", ed: "lived", s: "lives" },
    wait: { ing: "waiting", ed: "waited", s: "waits" },
    ask: { ing: "asking", ed: "asked", s: "asks" },
    answer: { ing: "answering", ed: "answered", s: "answers" },
    explain: { ing: "explaining", ed: "explained", s: "explains" },
    believe: { ing: "believing", ed: "believed", s: "believes" },
    enjoy: { ing: "enjoying", ed: "enjoyed", s: "enjoys" },
    prefer: { ing: "preferring", ed: "preferred", s: "prefers" },
    remember: { ing: "remembering", ed: "remembered", s: "remembers" },
    change: { ing: "changing", ed: "changed", s: "changes" },
    move: { ing: "moving", ed: "moved", s: "moves" },
    use: { ing: "using", ed: "used", s: "uses" },
    climb: { ing: "climbing", ed: "climbed", s: "climbs" },
    carry: { ing: "carrying", ed: "carried", s: "carries" },
    practice: { ing: "practicing", ed: "practiced", s: "practices" }
  };
  const OBJECTS = {
    work: "", play: "the guitar", watch: "a movie", walk: "to school", talk: "to her friend",
    call: "his mother", help: "her sister", clean: "the house", cook: "dinner", listen: "to music",
    study: "English", plan: "a trip", travel: "a lot", visit: "her grandmother", arrive: "",
    decide: "", finish: "the report", start: "a new job", open: "the window", close: "the door",
    wash: "the dishes", paint: "the wall", love: "her job", like: "this song", want: "a new phone",
    need: "more time", live: "in Paris", wait: "for the bus", ask: "a question", answer: "the phone",
    explain: "the rules", believe: "him", enjoy: "the movie", prefer: "tea", remember: "the address",
    change: "her mind", move: "to a new city", use: "a laptop", climb: "the mountain",
    carry: "the bags", practice: "the piano",
    go: "to the gym", see: "a movie", eat: "breakfast", write: "a letter", take: "a photo",
    make: "dinner", give: "her a gift", buy: "a new car", bring: "an umbrella", think: "about it",
    find: "the keys", know: "the answer", break: "the vase", speak: "French", drive: "to work",
    drink: "coffee", run: "every morning", sing: "a song", swim: "in the lake", fly: "to London",
    grow: "vegetables", throw: "the ball", wear: "a jacket", choose: "a gift", forget: "his keys",
    lose: "the game", send: "an email", build: "a house", catch: "the bus", teach: "math",
    sell: "his car", tell: "the truth", leave: "early", feel: "tired", keep: "a secret",
    hold: "the door", meet: "her friend", pay: "the bill", understand: "the lesson",
    stand: "in line", win: "the race", fall: "", put: "the book on the table", come: "home"
  };
  const VERB_KEYS = Object.keys(REGULAR_VERBS).concat(Object.keys(IRREGULAR_VERBS));
  function verbInfo(key) {
    if (IRREGULAR_VERBS[key]) return Object.assign({ base: key }, IRREGULAR_VERBS[key]);
    if (REGULAR_VERBS[key]) return Object.assign({ base: key, past: REGULAR_VERBS[key].ed, pp: REGULAR_VERBS[key].ed }, REGULAR_VERBS[key]);
    // Defensive fallback for any verb key not yet in either table — apply the
    // regular -s/-ed/-ing rules naively rather than crashing the generator.
    return { base: key, past: key + "ed", pp: key + "ed", ing: key + "ing", s: key + "s" };
  }

  // text = sentence-initial capitalized form; lc = correct mid-sentence form (lowercase
  // for pronouns/common-noun phrases, still capitalized for real proper nouns);
  // obj = correct object-case form for use after a preposition ("by ___").
  const SUBJECTS = [
    { text: "I", lc: "I", obj: "me", per: 1, num: "sing" },
    { text: "You", lc: "you", obj: "you", per: 2, num: "sing" },
    { text: "He", lc: "he", obj: "him", per: 3, num: "sing" },
    { text: "She", lc: "she", obj: "her", per: 3, num: "sing" },
    { text: "We", lc: "we", obj: "us", per: 1, num: "plur" },
    { text: "They", lc: "they", obj: "them", per: 3, num: "plur" },
    { text: "Tom", lc: "Tom", obj: "Tom", per: 3, num: "sing" },
    { text: "Maria", lc: "Maria", obj: "Maria", per: 3, num: "sing" },
    { text: "My brother", lc: "my brother", obj: "my brother", per: 3, num: "sing" },
    { text: "The students", lc: "the students", obj: "the students", per: 3, num: "plur" },
    { text: "My parents", lc: "my parents", obj: "my parents", per: 3, num: "plur" },
    { text: "The manager", lc: "the manager", obj: "the manager", per: 3, num: "sing" }
  ];

  function beForm(subj, time) {
    if (time === "pres") {
      if (subj.per === 1 && subj.num === "sing") return "am";
      return subj.num === "sing" && subj.per === 3 ? "is" : "are";
    }
    return subj.num === "sing" ? "was" : "were";
  }

  const TENSE_FORMULA = {
    presSimple: "base verb (+s for he/she/it)",
    presCont: "am/is/are + verb-ing",
    presPerfect: "have/has + past participle",
    presPerfectCont: "have/has been + verb-ing",
    pastSimple: "the past form of the verb",
    pastCont: "was/were + verb-ing",
    pastPerfect: "had + past participle",
    futureSimple: "will + base verb"
  };
  const TENSE_LABEL = {
    presSimple: "Present Simple", presCont: "Present Continuous", presPerfect: "Present Perfect",
    presPerfectCont: "Present Perfect Continuous", pastSimple: "Past Simple", pastCont: "Past Continuous",
    pastPerfect: "Past Perfect", futureSimple: "Future Simple"
  };
  // Every phrase here is safe to place at the END of the sentence (after the
  // object). Words that Standard English requires mid-sentence before the verb
  // (usually, often, just, always...) are deliberately excluded from this list —
  // using them here would model incorrect adverb placement.
  const TENSE_ADVERBIALS = {
    presSimple: ["every day", "every morning", "most weekends", "on weekdays"],
    presCont: ["right now", "at the moment", "at this very minute"],
    presPerfect: ["already", "recently", "for years", "twice this month"],
    presPerfectCont: ["for the last hour", "all morning", "since 6 a.m."],
    pastSimple: ["yesterday", "last week", "in 2019", "two days ago"],
    pastCont: ["at 8 p.m. yesterday", "this time last week", "all afternoon"],
    pastPerfect: ["before we arrived", "by the time the movie started", "already"],
    futureSimple: ["tomorrow", "next week", "next year"]
  };

  function conj(vKey, tense, subj) {
    const v = verbInfo(vKey);
    const thirdSing = subj.num === "sing" && subj.per === 3;
    switch (tense) {
      case "presSimple": return thirdSing ? v.s : vKey;
      case "presCont": return beForm(subj, "pres") + " " + v.ing;
      case "presPerfect": return (thirdSing ? "has" : "have") + " " + v.pp;
      case "presPerfectCont": return (thirdSing ? "has" : "have") + " been " + v.ing;
      case "pastSimple": return v.past;
      case "pastCont": return beForm(subj, "past") + " " + v.ing;
      case "pastPerfect": return "had " + v.pp;
      case "futureSimple": return "will " + vKey;
      default: return v.s;
    }
  }

  const LEVEL_TENSES = {
    1: ["presSimple", "pastSimple"],
    2: ["presSimple", "pastSimple", "presCont"],
    3: ["presSimple", "presCont", "presPerfect", "pastSimple"],
    4: ["presCont", "presPerfect", "pastSimple", "pastCont", "futureSimple"],
    5: ["presPerfect", "pastPerfect", "futureSimple", "pastCont", "presPerfectCont"]
  };

  /* ---------------- ARTICLES ---------------- */
  const VOWEL_SOUND_NOUNS = ["apple", "elephant", "umbrella", "idea", "hour", "honest mistake", "MBA degree", "orange", "item", "egg", "X-ray", "eagle", "onion", "engineer", "artist", "opportunity"];
  const CONSONANT_SOUND_NOUNS = ["dog", "university", "European city", "one-way street", "book", "house", "car", "uniform", "unicorn", "table", "student", "teacher", "hospital", "computer", "phone", "hotel"];

  function genArticles(level) {
    const isVowel = Math.random() < 0.5;
    const noun = randChoice(isVowel ? VOWEL_SOUND_NOUNS : CONSONANT_SOUND_NOUNS);
    const answer = isVowel ? "an" : "a";
    const verbPhrase = randChoice(["I saw", "She bought", "We need", "He found", "They mentioned", "I have"]);
    const prompt = `${verbPhrase} ___ ${noun}${level >= 3 ? " this morning" : ""}.`;
    const type = Math.random() < 0.6 ? "mcq" : "fill";
    const soundWord = isVowel ? "vowel" : "consonant";
    const explanationCorrect = ` "${cap(noun)}" starts with a ${soundWord} sound, so it takes "${answer}." Remember: the choice depends on sound, not the first letter.`;
    const explanationWrong = ` "${noun}" begins with a ${soundWord} sound, which requires "${answer}," not the other form. Say the word aloud to check — spelling can be misleading (e.g. "hour" or "university").`;
    const q = { id: uid("gen-art"), level, type, prompt, answer, explanationCorrect, explanationWrong };
    if (type === "mcq") q.options = shuffle(["a", "an", "the", "(no article)"]);
    return q;
  }

  /* ---------------- NOUNS (plurals) ---------------- */
  const PLURAL_BANK = {
    regular: ["book", "car", "pen", "chair", "phone", "table", "lamp", "shoe", "bag", "key", "idea", "movie"],
    sibilant: ["bus", "box", "dish", "church", "glass", "brush", "watch", "class"],
    consY: ["city", "baby", "story", "party", "lady", "country", "family", "puppy"],
    vowelY: ["boy", "day", "key", "toy", "monkey", "tray"],
    fFe: ["leaf", "knife", "wife", "shelf", "wolf", "loaf"],
    fExc: ["roof", "chef", "belief", "cliff"],
    oCons: ["potato", "tomato", "hero", "echo"],
    oExc: ["photo", "piano", "kilo", "zoo"],
    irregular: { man: "men", woman: "women", child: "children", foot: "feet", tooth: "teeth", mouse: "mice", goose: "geese", person: "people" },
    invariable: ["sheep", "fish", "deer", "series"]
  };
  function genNouns(level) {
    let cats;
    if (level <= 1) cats = ["regular", "sibilant"];
    else if (level === 2) cats = ["consY", "vowelY"];
    else if (level === 3) cats = ["fFe", "fExc", "oCons", "oExc"];
    else if (level === 4) cats = ["irregular"];
    else cats = ["irregular", "invariable", "fFe", "oExc"];
    const cat = randChoice(cats);
    let noun, correct, reason;
    if (cat === "irregular") {
      const keys = Object.keys(PLURAL_BANK.irregular);
      noun = randChoice(keys);
      correct = PLURAL_BANK.irregular[noun];
      reason = `"${noun}" has an irregular plural formed by an internal change, not by adding -s: ${noun} → ${correct}.`;
    } else if (cat === "invariable") {
      noun = randChoice(PLURAL_BANK.invariable);
      correct = noun;
      reason = `"${noun}" has the same form in singular and plural — no change at all.`;
    } else if (cat === "regular") {
      noun = randChoice(PLURAL_BANK.regular); correct = noun + "s";
      reason = `Most nouns simply add -s: ${noun} → ${correct}.`;
    } else if (cat === "sibilant") {
      noun = randChoice(PLURAL_BANK.sibilant); correct = noun + "es";
      reason = `Nouns ending in -s, -ss, -sh, -ch, or -x add -es: ${noun} → ${correct}.`;
    } else if (cat === "consY") {
      noun = randChoice(PLURAL_BANK.consY); correct = noun.slice(0, -1) + "ies";
      reason = `Consonant + y changes to -ies: ${noun} → ${correct}.`;
    } else if (cat === "vowelY") {
      noun = randChoice(PLURAL_BANK.vowelY); correct = noun + "s";
      reason = `Vowel + y just adds -s (no change to the y): ${noun} → ${correct}.`;
    } else if (cat === "fFe") {
      noun = randChoice(PLURAL_BANK.fFe); correct = noun.replace(/(fe|f)$/, "ves");
      reason = `Most -f/-fe nouns change to -ves: ${noun} → ${correct}.`;
    } else if (cat === "fExc") {
      noun = randChoice(PLURAL_BANK.fExc); correct = noun + "s";
      reason = `"${noun}" is an exception to the -f → -ves rule — it just adds -s: ${noun} → ${correct}.`;
    } else if (cat === "oCons") {
      noun = randChoice(PLURAL_BANK.oCons); correct = noun + "es";
      reason = `Most consonant + o nouns add -es: ${noun} → ${correct}.`;
    } else {
      noun = randChoice(PLURAL_BANK.oExc); correct = noun + "s";
      reason = `"${noun}" is an exception to the consonant+o rule — it just adds -s: ${noun} → ${correct}.`;
    }
    const type = Math.random() < 0.5 ? "fill" : "mcq";
    const prompt = `What is the plural of "${noun}"? One ${noun}, two ___.`;
    const explanationCorrect = " " + reason;
    const explanationWrong = " " + reason;
    const q = { id: uid("gen-noun"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong };
    if (type === "mcq") {
      const distractors = pickDistractors(correct, [noun + "s", noun + "es", noun.slice(0, -1) + "ies", noun + "'s"], 3, ["childs", "mans", "sheeps", "fishs"]);
      q.options = shuffle([correct].concat(distractors.slice(0, 3)));
    }
    return q;
  }

  /* ---------------- PRONOUNS ---------------- */
  const PEOPLE = [
    { name: "Tom", subj: "he", obj: "him", poss: "his", possPron: "his", refl: "himself" },
    { name: "Maria", subj: "she", obj: "her", poss: "her", possPron: "hers", refl: "herself" },
    { name: "Sam", subj: "he", obj: "him", poss: "his", possPron: "his", refl: "himself" },
    { name: "Priya", subj: "she", obj: "her", poss: "her", possPron: "hers", refl: "herself" }
  ];
  // "Each/Neither/Either/Both/Several/Many/Few" naturally combine with "of the X".
  // "Everyone/Everybody/Someone/Anybody/Nobody" do NOT — "everyone of the guests"
  // is a classic learner error, so those get their own standalone template.
  const INDEFINITE_OF_SING = ["Each", "Neither", "Either"];
  const INDEFINITE_OF_PLUR = ["Both", "Several", "Many", "Few"];
  const INDEFINITE_ALONE = ["Everyone", "Everybody", "Someone", "Anybody", "Nobody"];

  function genPronouns(level) {
    const type1 = level <= 2 ? "subjObj" : randChoice(["subjObj", "possessive", "reflexive", "indefinite"]);
    const person = randChoice(PEOPLE);
    if (type1 === "subjObj") {
      const asSubject = Math.random() < 0.5;
      const prompt = asSubject
        ? `${person.name} and ___ went to the concert together.`
        : `The manager gave the award to ${person.name} and ___.`;
      const answer = asSubject ? "I" : "me";
      const opts = shuffle(["I", "me", "myself", "mine"]);
      const explanationCorrect = asSubject
        ? ' As part of the compound subject, the speaker\'s pronoun must be in subject form: "I," not "me." (Test: remove the other name — "I went," not "me went.")'
        : ' As part of the compound object (after "to"), the speaker\'s pronoun must be in object form: "me," not "I." (Test: "gave it to me," not "gave it to I.")';
      return { id: uid("gen-pn"), level, type: "mcq", prompt, options: opts, answer, explanationCorrect, explanationWrong: explanationCorrect };
    }
    if (type1 === "possessive") {
      const standalone = Math.random() < 0.5;
      const prompt = standalone ? `This umbrella is ___, not yours.` : `Is this ___ umbrella?`;
      const answer = standalone ? person.possPron : person.poss;
      const distractorPool = [person.poss, person.possPron, person.subj, person.obj, "my", "your", "their", "our", "mine", "yours", "theirs", "ours"];
      const opts = shuffle([answer].concat(pickDistractors(answer, distractorPool, 3)));
      const explanationCorrect = standalone
        ? ` Since no noun follows, the possessive pronoun "${person.possPron}" (standing alone) is needed, not the possessive adjective "${person.poss}."`
        : ` Since a noun ("umbrella") follows directly, the possessive adjective "${person.poss}" is needed, not the standalone possessive pronoun "${person.possPron}."`;
      return { id: uid("gen-pn"), level, type: "mcq", prompt, options: opts, answer, explanationCorrect, explanationWrong: explanationCorrect };
    }
    if (type1 === "reflexive") {
      const verb = randChoice(["hurt", "introduced", "taught", "blamed", "surprised"]);
      const prompt = `${person.name} accidentally ${verb} ___ while cooking.`;
      const answer = person.refl;
      const distractorPool = [person.obj, person.poss, person.subj, "themself", "themselves", "myself", "yourself"];
      const opts = shuffle([answer].concat(pickDistractors(answer, distractorPool, 3)));
      const explanationCorrect = ` The action reflects back onto ${person.name}, so the reflexive pronoun "${person.refl}" is needed, matching ${person.name}'s gender.`;
      return { id: uid("gen-pn"), level, type: "mcq", prompt, options: opts, answer, explanationCorrect, explanationWrong: explanationCorrect };
    }
    // indefinite agreement
    const mode = randChoice(["ofSing", "ofPlur", "alone"]);
    let word, answer, prompt, explanationCorrect;
    if (mode === "ofSing") {
      word = randChoice(INDEFINITE_OF_SING);
      answer = "is";
      prompt = `${word} of the guests ___ ready to leave.`;
      explanationCorrect = ` "${word}" is always grammatically singular, regardless of the plural noun phrase that follows ("of the guests") — so the verb is "${answer}."`;
    } else if (mode === "ofPlur") {
      word = randChoice(INDEFINITE_OF_PLUR);
      answer = "are";
      prompt = `${word} of the guests ___ ready to leave.`;
      explanationCorrect = ` "${word}" is always grammatically plural, so it takes "${answer}," even though it's followed by "of the guests."`;
    } else {
      word = randChoice(INDEFINITE_ALONE);
      answer = "is";
      prompt = `${word} ___ ready to leave.`;
      explanationCorrect = ` "${word}" is always grammatically singular and — unlike each/both/several — is not normally followed by an "of the ___" phrase at all.`;
    }
    const opts = shuffle(["is", "are", "was", "were"]);
    if (!opts.includes(answer)) opts[0] = answer;
    return { id: uid("gen-pn"), level, type: "mcq", prompt, options: opts, answer, explanationCorrect, explanationWrong: explanationCorrect };
  }

  /* ---------------- SUBJECT-VERB AGREEMENT ---------------- */
  const AGREEMENT_SUBJECTS = [
    { text: "The list of items", num: "sing", reason: 'The true subject is "list" (singular) — "of items" is just a prepositional phrase and doesn\'t affect agreement.' },
    { text: "Neither of the answers", num: "sing", reason: '"Neither" is always grammatically singular.' },
    { text: "Both of the answers", num: "plur", reason: '"Both" is always grammatically plural.' },
    { text: "The number of applicants", num: "sing", reason: '"The number of X" refers to one specific number, so it\'s singular.' },
    { text: "A number of applicants", num: "plur", reason: '"A number of X" means "several" and is treated as plural.' },
    { text: "Everyone in the room", num: "sing", reason: '"Everyone" is always grammatically singular, even though it refers to many people.' },
    { text: "The children", num: "plur", reason: '"Children" is an irregular plural noun.' },
    { text: "Physics", num: "sing", reason: 'Academic subjects ending in -ics (physics, economics) are treated as singular.' },
    { text: "My glasses", num: "plur", reason: '"Glasses" (eyewear) has no singular form and is always plural.' },
    { text: "The committee", num: "sing", reason: 'Collective nouns like "committee" are usually treated as one singular unit.' },
    { text: "Ten dollars", num: "sing", reason: 'A total sum of money is treated as one singular amount.' }
  ];
  function genAgreement(level) {
    const subj = randChoice(AGREEMENT_SUBJECTS);
    const vKey = randChoice(VERB_KEYS.filter((k) => OBJECTS[k] !== undefined));
    const v = verbInfo(vKey);
    const correct = subj.num === "sing" ? v.s : vKey;
    const wrong = subj.num === "sing" ? vKey : v.s;
    const obj = OBJECTS[vKey] || "";
    const prompt = `${subj.text} ${level >= 4 ? "usually" : ""} ___ ${obj}.`.replace(/\s+/g, " ").trim();
    const type = Math.random() < 0.5 ? "fill" : "mcq";
    const explanationCorrect = ` ${subj.reason} So the verb must be "${correct}."`;
    const q = { id: uid("gen-agr"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") {
      const distractors = pickDistractors(correct, [wrong, v.ing, v.past], 3, ["is", "are", "was", "were", vKey, v.s]);
      q.options = shuffle([correct].concat(distractors));
    }
    return q;
  }

  /* ---------------- VERB TENSES ---------------- */
  function genTenses(level) {
    const pool = LEVEL_TENSES[Math.min(5, Math.max(1, level))];
    const tense = randChoice(pool);
    const vKey = randChoice(VERB_KEYS);
    const subj = randChoice(SUBJECTS);
    const adverbial = randChoice(TENSE_ADVERBIALS[tense]);
    const obj = OBJECTS[vKey] !== undefined ? OBJECTS[vKey] : "";
    const correct = conj(vKey, tense, subj);
    const promptParts = [subj.text, "___", obj, adverbial].filter(Boolean);
    const prompt = promptParts.join(" ") + ".";
    const type = Math.random() < 0.65 ? "mcq" : "fill";
    const explanationCorrect = ` "${adverbial}" is a classic signal for the ${TENSE_LABEL[tense]}, formed with ${TENSE_FORMULA[tense]}: "${correct}."`;
    const q = { id: uid("gen-tns"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong: explanationCorrect + ` The correct form here is "${correct}."` };
    if (type === "mcq") {
      const otherTenses = shuffle(Object.keys(TENSE_LABEL).filter((t) => t !== tense));
      const distractorForms = [];
      for (const t of otherTenses) {
        const f = conj(vKey, t, subj);
        if (f !== correct && !distractorForms.includes(f)) distractorForms.push(f);
        if (distractorForms.length >= 3) break;
      }
      q.options = shuffle([correct].concat(distractorForms));
    }
    return q;
  }

  /* ---------------- PASSIVE VOICE ---------------- */
  // Only genuinely transitive verbs paired with a real noun-phrase direct object —
  // verbs like "feel"/"arrive" are excluded because they don't passivize naturally.
  // num = grammatical number of the object phrase itself (it becomes the new
  // passive subject, so "be" must agree with IT, not with the original subject).
  const PASSIVE_ENTRIES = [
    { v: "write", obj: "a letter", num: "sing" }, { v: "take", obj: "a photo", num: "sing" }, { v: "make", obj: "dinner", num: "sing" },
    { v: "give", obj: "a gift", num: "sing" }, { v: "buy", obj: "a new car", num: "sing" }, { v: "bring", obj: "an umbrella", num: "sing" },
    { v: "find", obj: "the keys", num: "plur" }, { v: "break", obj: "the vase", num: "sing" }, { v: "catch", obj: "the bus", num: "sing" },
    { v: "teach", obj: "math", num: "sing" }, { v: "sell", obj: "his car", num: "sing" }, { v: "tell", obj: "the truth", num: "sing" },
    { v: "keep", obj: "a secret", num: "sing" }, { v: "hold", obj: "the door", num: "sing" }, { v: "meet", obj: "her friend", num: "sing" },
    { v: "pay", obj: "the bill", num: "sing" }, { v: "build", obj: "a house", num: "sing" }, { v: "send", obj: "an email", num: "sing" },
    { v: "clean", obj: "the house", num: "sing" }, { v: "cook", obj: "dinner", num: "sing" }, { v: "wash", obj: "the dishes", num: "plur" },
    { v: "paint", obj: "the wall", num: "sing" }, { v: "open", obj: "the window", num: "sing" }, { v: "close", obj: "the door", num: "sing" },
    { v: "visit", obj: "her grandmother", num: "sing" }, { v: "plan", obj: "a trip", num: "sing" }, { v: "finish", obj: "the report", num: "sing" },
    { v: "start", obj: "a new job", num: "sing" }, { v: "explain", obj: "the rules", num: "plur" }, { v: "carry", obj: "the bags", num: "plur" },
    { v: "use", obj: "a laptop", num: "sing" }, { v: "call", obj: "his mother", num: "sing" }, { v: "watch", obj: "a movie", num: "sing" },
    { v: "read", obj: "a book", num: "sing" }, { v: "eat", obj: "breakfast", num: "sing" }, { v: "drink", obj: "coffee", num: "sing" },
    { v: "grow", obj: "vegetables", num: "plur" }, { v: "win", obj: "the race", num: "sing" }, { v: "choose", obj: "a gift", num: "sing" },
    { v: "wear", obj: "a jacket", num: "sing" }, { v: "throw", obj: "the ball", num: "sing" }, { v: "forget", obj: "his keys", num: "plur" },
    { v: "understand", obj: "the lesson", num: "sing" }, { v: "ask", obj: "a question", num: "sing" }, { v: "answer", obj: "the phone", num: "sing" },
    { v: "sing", obj: "a song", num: "sing" }, { v: "study", obj: "English", num: "sing" }
  ];
  const PASSIVE_TENSES = {
    1: ["presSimple", "pastSimple"],
    2: ["presSimple", "pastSimple", "presCont"],
    3: ["presPerfect", "pastSimple", "futureSimple"],
    4: ["presPerfect", "futureSimple", "pastCont"],
    5: ["pastPerfect", "futureSimple", "presPerfect"]
  };
  function genPassive(level) {
    const entry = randChoice(PASSIVE_ENTRIES);
    const vKey = entry.v;
    const obj = entry.obj;
    const objNum = entry.num || "sing";
    const subj = randChoice(SUBJECTS);
    const tensePool = PASSIVE_TENSES[Math.min(5, Math.max(1, level))];
    const tense = randChoice(tensePool);
    const v = verbInfo(vKey);
    // "be" must agree with the promoted object (the new passive subject), not
    // with the original active-voice subject.
    const objSubj = { per: 3, num: objNum };
    let beWord;
    switch (tense) {
      case "presSimple": beWord = beForm(objSubj, "pres"); break;
      case "pastSimple": beWord = beForm(objSubj, "past"); break;
      case "presCont": beWord = beForm(objSubj, "pres") + " being"; break;
      case "presPerfect": beWord = (objNum === "plur" ? "have been" : "has been"); break;
      case "futureSimple": beWord = "will be"; break;
      case "pastCont": beWord = beForm(objSubj, "past") + " being"; break;
      case "pastPerfect": beWord = "had been"; break;
      default: beWord = beForm(objSubj, "pres");
    }
    const correct = `${beWord} ${v.pp}`;
    const objCap = cap(obj);
    const activeVerbForm = conj(vKey, tense === "presCont" ? "presSimple" : tense, subj);
    const prompt = `Active: "${subj.text} ${activeVerbForm} ${obj}." → Passive: ${objCap} ___ by ${subj.obj}.`;
    const type = Math.random() < 0.5 ? "fill" : "mcq";
    const explanationCorrect = ` The passive always follows "be + past participle." Here the tense is ${TENSE_LABEL[tense] || tense}, so "be" becomes "${beWord}," giving "${correct}."`;
    const q = { id: uid("gen-pas"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") {
      const distractors = [`${beWord} ${v.past}`, `${v.pp}`, `${beWord} ${vKey}`];
      const fallback = [`is ${v.pp}`, `was ${v.pp}`, `will be ${v.pp}`, `has been ${v.pp}`, `${vKey} ${v.pp}`];
      q.options = shuffle([correct].concat(pickDistractors(correct, distractors, 3, fallback)));
    }
    return q;
  }

  /* ---------------- CONDITIONALS ---------------- */
  function genConditionals(level) {
    const types = level <= 1 ? ["zero"] : level === 2 ? ["zero", "first"] : level === 3 ? ["first", "second"] : level === 4 ? ["second", "third"] : ["third", "mixed"];
    const ctype = randChoice(types);
    const subj = randChoice(SUBJECTS);
    const condVerb = randChoice(VERB_KEYS);
    const resultVerb = randChoice(VERB_KEYS.filter((k) => k !== condVerb));
    const condObj = OBJECTS[condVerb] || "";
    const resultObj = OBJECTS[resultVerb] || "";
    let ifClause, resultClause, correct, formula;
    if (ctype === "zero") {
      ifClause = `If ${subj.lc} ${conj(condVerb, "presSimple", subj)} ${condObj}`.trim();
      correct = conj(resultVerb, "presSimple", subj);
      resultClause = `${subj.lc} ___ ${resultObj}`.trim();
      formula = "present simple in both clauses (a general truth)";
    } else if (ctype === "first") {
      ifClause = `If ${subj.lc} ${conj(condVerb, "presSimple", subj)} ${condObj}`.trim();
      correct = "will " + resultVerb;
      resultClause = `${subj.lc} ___ ${resultObj}`.trim();
      formula = 'present simple in the if-clause, "will + base verb" in the result clause';
    } else if (ctype === "second") {
      ifClause = `If ${subj.lc} ${conj(condVerb, "pastSimple", subj)} ${condObj}`.trim();
      correct = "would " + resultVerb;
      resultClause = `${subj.lc} ___ ${resultObj}`.trim();
      formula = '"if + past simple," "would + base verb" for a hypothetical situation';
    } else if (ctype === "third") {
      ifClause = `If ${subj.lc} had ${verbInfo(condVerb).pp} ${condObj}`.trim();
      correct = "would have " + verbInfo(resultVerb).pp;
      resultClause = `${subj.lc} ___ ${resultObj}`.trim();
      formula = '"if + past perfect," "would have + past participle" for an unreal past';
    } else {
      ifClause = `If ${subj.lc} had ${verbInfo(condVerb).pp} ${condObj}`.trim();
      correct = "would " + resultVerb;
      resultClause = `${subj.lc} ___ ${resultObj} now`.trim();
      formula = "a past condition (had + past participle) combined with a present result (would + base verb) — a mixed conditional";
    }
    const prompt = `${ifClause}, ${resultClause.replace(/\s+/g, " ")}.`.replace(/\s+/g, " ");
    const type = Math.random() < 0.5 ? "fill" : "mcq";
    const explanationCorrect = ` This is a ${ctype} conditional pattern: ${formula}. So the result clause needs "${correct}."`;
    const q = { id: uid("gen-cnd"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") {
      const distractors = [resultVerb, "would " + resultVerb, "will " + resultVerb, "would have " + verbInfo(resultVerb).pp, conj(resultVerb, "presSimple", subj), conj(resultVerb, "pastSimple", subj)];
      const fallback = ["will " + condVerb, "would " + condVerb, verbInfo(resultVerb).pp, "had " + verbInfo(resultVerb).pp];
      q.options = shuffle([correct].concat(pickDistractors(correct, distractors, 3, fallback)));
    }
    return q;
  }

  /* ---------------- ADJECTIVES / ADVERBS (comparatives) ---------------- */
  const ADJ_ONE_SYL = ["tall", "fast", "small", "young", "old", "strong", "clean", "loud", "quiet", "short", "cheap", "rich", "poor", "safe"];
  const ADJ_DOUBLE = { big: "bigger/biggest", hot: "hotter/hottest", thin: "thinner/thinnest", fat: "fatter/fattest", sad: "sadder/saddest" };
  const ADJ_Y = ["happy", "busy", "easy", "funny", "heavy", "lucky", "pretty", "tidy", "noisy"];
  const ADJ_LONG = ["beautiful", "expensive", "interesting", "careful", "comfortable", "difficult", "important", "popular", "dangerous", "famous", "generous", "reliable"];
  const ADJ_IRREGULAR = { good: ["better", "best"], bad: ["worse", "worst"], far: ["farther", "farthest"], little: ["less", "least"] };

  function genAdjAdv(level) {
    let pool, mode;
    if (level <= 1) { pool = "one"; }
    else if (level === 2) { pool = Math.random() < 0.5 ? "one" : "y"; }
    else if (level === 3) { pool = Math.random() < 0.5 ? "y" : "long"; }
    else if (level === 4) { pool = Math.random() < 0.6 ? "long" : "double"; }
    else { pool = Math.random() < 0.5 ? "irregular" : "double"; }
    const superlative = Math.random() < 0.4;
    let adj, comp, sup;
    if (pool === "irregular") {
      adj = randChoice(Object.keys(ADJ_IRREGULAR));
      comp = ADJ_IRREGULAR[adj][0]; sup = ADJ_IRREGULAR[adj][1];
    } else if (pool === "double") {
      adj = randChoice(Object.keys(ADJ_DOUBLE));
      const parts = ADJ_DOUBLE[adj].split("/"); comp = parts[0]; sup = parts[1];
    } else if (pool === "y") {
      adj = randChoice(ADJ_Y); comp = adj.slice(0, -1) + "ier"; sup = adj.slice(0, -1) + "iest";
    } else if (pool === "long") {
      adj = randChoice(ADJ_LONG); comp = "more " + adj; sup = "most " + adj;
    } else {
      adj = randChoice(ADJ_ONE_SYL); comp = adj + "er"; sup = adj + "est";
    }
    const correct = superlative ? sup : comp;
    const noun = randChoice(["car", "house", "movie", "city", "book", "restaurant", "plan", "idea"]);
    const prompt = superlative
      ? `Of all the options, this ${noun} is the ___ (${adj}).`
      : `This ${noun} is ___ (${adj}) than that one.`;
    const type = Math.random() < 0.5 ? "fill" : "mcq";
    const formNote = pool === "long" ? `multi-syllable adjectives use "more/most"` : pool === "irregular" ? `"${adj}" is irregular` : pool === "double" ? `the final consonant doubles before -er/-est` : pool === "y" ? `consonant + y changes to -i before -er/-est` : `one-syllable adjectives simply add -er/-est`;
    const explanationCorrect = ` For "${adj}," ${formNote}, so the ${superlative ? "superlative" : "comparative"} is "${correct}."`;
    const q = { id: uid("gen-adj"), level, type, prompt, answer: correct, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") {
      const wrongForms = [superlative ? comp : sup, "more " + adj, "most " + adj, adj + "er", adj + "est"];
      q.options = shuffle([correct].concat(pickDistractors(correct, wrongForms, 3)));
    }
    return q;
  }

  /* ---------------- PREPOSITIONS (collocations) ---------------- */
  const COLLOC_ADJ = [
    { word: "good", prep: "at" }, { word: "afraid", prep: "of" }, { word: "interested", prep: "in" },
    { word: "married", prep: "to" }, { word: "proud", prep: "of" }, { word: "famous", prep: "for" },
    { word: "responsible", prep: "for" }, { word: "similar", prep: "to" }, { word: "tired", prep: "of" },
    { word: "capable", prep: "of" }, { word: "satisfied", prep: "with" }, { word: "worried", prep: "about" },
    { word: "bored", prep: "with" }, { word: "aware", prep: "of" }, { word: "fond", prep: "of" }
  ];
  const COLLOC_VERB = [
    { word: "depend", prep: "on" }, { word: "listen", prep: "to" }, { word: "apologize", prep: "for" },
    { word: "believe", prep: "in" }, { word: "consist", prep: "of" }, { word: "succeed", prep: "in" },
    { word: "insist", prep: "on" }, { word: "wait", prep: "for" }, { word: "care", prep: "for" },
    { word: "rely", prep: "on" }, { word: "approve", prep: "of" }, { word: "specialize", prep: "in" }
  ];
  const PREP_POOL = ["of", "at", "in", "on", "to", "with", "for", "about"];
  function genPrepositions(level) {
    const useVerb = level >= 3 ? Math.random() < 0.5 : false;
    const entry = useVerb ? randChoice(COLLOC_VERB) : randChoice(COLLOC_ADJ);
    const subj = randChoice(SUBJECTS);
    const prompt = useVerb
      ? `${subj.text} ${subj.num === "sing" && subj.per === 3 ? entry.word + (entry.word.endsWith("s") ? "es" : "s") : entry.word} ___ ${randChoice(["her", "him", "the plan", "the result", "the group", "success"])}.`
      : `${subj.text} ${beForm(subj, "pres")} ${entry.word} ___ ${randChoice(["this", "the news", "her success", "the outcome", "the challenge"])}.`;
    const type = Math.random() < 0.55 ? "mcq" : "fill";
    const explanationCorrect = ` "${entry.word}" is a fixed combination that always takes "${entry.prep}" — this has to be memorized rather than derived from a rule.`;
    const q = { id: uid("gen-prp"), level, type, prompt, answer: entry.prep, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") q.options = shuffle([entry.prep].concat(pickDistractors(entry.prep, PREP_POOL, 3)));
    return q;
  }

  /* ---------------- MODALS ---------------- */
  const MODAL_TEMPLATES = [
    { cat: "ability", subj: "She", frag: "speak three languages fluently", answer: "can", options: ["can", "must", "should", "may"], note: "expresses present ability" },
    { cat: "pastAbility", subj: "When I was young, I", frag: "run for miles without getting tired", answer: "could", options: ["could", "must", "should", "will"], note: "expresses general ability in the past" },
    { cat: "obligation", subj: "Passengers", frag: "fasten their seatbelts before takeoff", answer: "must", options: ["must", "might", "could", "would"], note: "expresses a strong obligation/rule" },
    { cat: "prohibition", subj: "You", frag: "not smoke inside the building", answer: "must", options: ["must", "don't have to", "might", "should"], note: "\"must not\" expresses prohibition" },
    { cat: "noObligation", subj: "You", frag: "come to the meeting if you're busy — it's optional", answer: "don't have to", options: ["don't have to", "mustn't", "can't", "shouldn't"], note: "expresses that something is optional, not forbidden" },
    { cat: "advice", subj: "You", frag: "see a doctor about that cough", answer: "should", options: ["should", "must", "can", "will"], note: "gives advice" },
    { cat: "deductionPos", subj: "The lights are off, so they", frag: "have already left", answer: "must", options: ["must", "can't", "should", "might"], note: "a confident positive deduction" },
    { cat: "deductionNeg", subj: "He only started five minutes ago, so he", frag: "have finished already", answer: "can't", options: ["can't", "must", "shouldn't", "mightn't"], note: "a confident negative deduction (logically impossible)" },
    { cat: "politeRequest", subj: "___", frag: "you mind closing the window?", answer: "Would", options: ["Would", "Must", "Should", "Can't"], note: "a polite request" },
    { cat: "permission", subj: "___", frag: "I use your phone for a moment?", answer: "May", options: ["May", "Must", "Should", "Would"], note: "formal permission" }
  ];
  function genModals(level) {
    const pool = level <= 2 ? MODAL_TEMPLATES.filter((t) => ["ability", "pastAbility", "obligation", "advice"].includes(t.cat))
      : level <= 4 ? MODAL_TEMPLATES.filter((t) => ["prohibition", "noObligation", "politeRequest", "permission", "advice"].includes(t.cat))
      : MODAL_TEMPLATES.filter((t) => ["deductionPos", "deductionNeg"].includes(t.cat));
    const t = pool.length ? randChoice(pool) : randChoice(MODAL_TEMPLATES);
    const isQuestion = t.subj === "___";
    const frag = isQuestion && !t.frag.endsWith("?") ? t.frag + "?" : t.frag;
    const prompt = isQuestion ? `___ ${frag}` : `${t.subj} ___ ${t.frag}.`;
    const type = Math.random() < 0.6 ? "mcq" : "fill";
    const explanationCorrect = ` This sentence ${t.note}, which calls for "${t.answer}."`;
    const q = { id: uid("gen-mod"), level, type, prompt, answer: t.answer, explanationCorrect, explanationWrong: explanationCorrect };
    if (type === "mcq") q.options = shuffle(t.options.slice());
    return q;
  }

  /* ---------------- register ---------------- */
  window.GENERATORS = {
    articles: genArticles,
    nouns: genNouns,
    pronouns: genPronouns,
    agreement: genAgreement,
    tenses: genTenses,
    passive: genPassive,
    conditionals: genConditionals,
    "adj-adv": genAdjAdv,
    prepositions: genPrepositions,
    modals: genModals
  };
})();
