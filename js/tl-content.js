/* ===========================================================
   Translation Lab — Telugu morphology + topic lexicon + generator.
   Builds unlimited, non-repeating Telugu practice sentences
   (with English reference answers) without any API. window.TL.GEN
   =========================================================== */
(function () {
  "use strict";
  const TL = (window.TL = window.TL || {});
  const EN = TL.EN;

  // ---------- Telugu verb table ----------
  // hab = habitual/future stem (ends in త/ట), cont = continuous stem (default hab),
  // pa = past stem (before -ాను/-ాడు/-ారు), pf = 3rd-person-fem/neuter past, pp = participle, l = dictionary form
  const TV = {};
  function tv(id, l, hab, cont, pa, pf, pp) { TV[id] = { l, hab, cont: cont || hab, pa, pf, pp }; }
  tv("read", "చదువు", "చదువుత", "", "చదివ", "చదివింది", "చదివి");
  tv("write", "రాయు", "రాస్త", "", "రాశ", "రాసింది", "రాసి");
  tv("do", "చేయు", "చేస్త", "", "చేశ", "చేసింది", "చేసి");
  tv("watch", "చూడు", "చూస్త", "", "చూశ", "చూసింది", "చూసి");
  tv("go", "వెళ్ళు", "వెళ్త", "", "వెళ్ళ", "వెళ్ళింది", "వెళ్ళి");
  tv("come", "రా", "వస్త", "", "వచ్చ", "వచ్చింది", "వచ్చి");
  tv("eat", "తిను", "తింట", "", "తిన్న", "తిన్నది", "తిని");
  tv("drink", "తాగు", "తాగుత", "", "తాగ", "తాగింది", "తాగి");
  tv("buy", "కొను", "కొంట", "", "కొన్న", "కొన్నది", "కొని");
  tv("sell", "అమ్ము", "అమ్ముత", "", "అమ్మ", "అమ్మింది", "అమ్మి");
  tv("play", "ఆడు", "ఆడుత", "", "ఆడ", "ఆడింది", "ఆడి");
  tv("sing", "పాడు", "పాడుత", "", "పాడ", "పాడింది", "పాడి");
  tv("start", "ప్రారంభించు", "ప్రారంభిస్త", "", "ప్రారంభించ", "ప్రారంభించింది", "ప్రారంభించి");
  tv("announce", "ప్రకటించు", "ప్రకటిస్త", "", "ప్రకటించ", "ప్రకటించింది", "ప్రకటించి");
  tv("learn", "నేర్చుకో", "నేర్చుకుంట", "", "నేర్చుకున్న", "నేర్చుకున్నది", "నేర్చుకుని");
  tv("tell", "చెప్పు", "చెబుత", "", "చెప్ప", "చెప్పింది", "చెప్పి");
  tv("give", "ఇవ్వు", "ఇస్త", "", "ఇచ్చ", "ఇచ్చింది", "ఇచ్చి");
  tv("take", "తీసుకో", "తీసుకుంట", "", "తీసుకున్న", "తీసుకున్నది", "తీసుకుని");
  tv("send", "పంపు", "పంపుత", "", "పంప", "పంపింది", "పంపి");
  tv("drive", "నడుపు", "నడుపుత", "", "నడిప", "నడిపింది", "నడిపి");
  tv("walk", "నడుచు", "నడుస్త", "", "నడిచ", "నడిచింది", "నడిచి");
  tv("run", "పరుగెత్తు", "పరుగెత్తుత", "", "పరుగెత్త", "పరుగెత్తింది", "పరుగెత్తి");
  tv("cook", "వండు", "వండుత", "", "వండ", "వండింది", "వండి");
  tv("meet", "కలుసుకో", "కలుసుకుంట", "", "కలుసుకున్న", "కలుసుకున్నది", "కలుసుకుని");
  tv("build", "కట్టు", "కడుత", "", "కట్ట", "కట్టింది", "కట్టి");
  tv("open", "తెరుచు", "తెరుస్త", "", "తెరిచ", "తెరిచింది", "తెరిచి");
  tv("raise", "పెంచు", "పెంచుత", "", "పెంచ", "పెంచింది", "పెంచి");
  tv("win", "గెలుచు", "గెలుస్త", "", "గెలిచ", "గెలిచింది", "గెలిచి");
  tv("visit", "సందర్శించు", "సందర్శిస్త", "", "సందర్శించ", "సందర్శించింది", "సందర్శించి");
  tv("put", "పెట్టు", "పెడుత", "", "పెట్ట", "పెట్టింది", "పెట్టి");
  tv("plant", "నాటు", "నాటుత", "", "నాట", "నాటింది", "నాటి");
  tv("harvest", "కోయు", "కోస్త", "", "కోశ", "కోసింది", "కోసి");
  tv("plough", "దున్ను", "దున్నుత", "", "దున్న", "దున్నింది", "దున్ని");
  tv("listen", "విను", "వింట", "", "విన్న", "విన్నది", "విని");
  tv("travel", "ప్రయాణించు", "ప్రయాణిస్త", "", "ప్రయాణించ", "ప్రయాణించింది", "ప్రయాణించి");
  tv("reach", "చేరుకో", "చేరుకుంట", "", "చేరుకున్న", "చేరుకున్నది", "చేరుకుని");
  tv("sleep", "నిద్రపో", "నిద్రపోత", "", "నిద్రపోయ", "నిద్రపోయింది", "నిద్రపోయి");
  tv("takemed", "వేసుకో", "వేసుకుంట", "", "వేసుకున్న", "వేసుకున్నది", "వేసుకుని");
  tv("use", "ఉపయోగించు", "ఉపయోగిస్త", "", "ఉపయోగించ", "ఉపయోగించింది", "ఉపయోగించి");
  tv("fix", "సరిదిద్దు", "సరిదిద్దుత", "", "సరిదిద్ద", "సరిదిద్దింది", "సరిదిద్ది");
  tv("test", "పరీక్షించు", "పరీక్షిస్త", "", "పరీక్షించ", "పరీక్షించింది", "పరీక్షించి");
  tv("solve", "పరిష్కరించు", "పరిష్కరిస్త", "", "పరిష్కరించ", "పరిష్కరించింది", "పరిష్కరించి");
  tv("submit", "సమర్పించు", "సమర్పిస్త", "", "సమర్పించ", "సమర్పించింది", "సమర్పించి");
  tv("hire", "నియమించు", "నియమిస్త", "", "నియమించ", "నియమించింది", "నియమించి");
  tv("hold", "నిర్వహించు", "నిర్వహిస్త", "", "నిర్వహించ", "నిర్వహించింది", "నిర్వహించి");
  tv("chant", "జపించు", "జపిస్త", "", "జపించ", "జపించింది", "జపించి");
  tv("celebrate", "జరుపుకో", "జరుపుకుంట", "", "జరుపుకున్న", "జరుపుకున్నది", "జరుపుకుని");
  tv("light", "వెలిగించు", "వెలిగిస్త", "", "వెలిగించ", "వెలిగించింది", "వెలిగించి");
  tv("dig", "తవ్వు", "తవ్వుత", "", "తవ్వ", "తవ్వింది", "తవ్వి");
  tv("pack", "సర్దు", "సర్దుత", "", "సర్ద", "సర్దింది", "సర్ది");
  tv("fall", "పడు", "పడుత", "", "పడ", "పడింది", "పడి");
  tv("rise", "పెరుగు", "పెరుగుత", "", "పెరిగ", "పెరిగింది", "పెరిగి");
  tv("drop", "తగ్గు", "తగ్గుత", "", "తగ్గ", "తగ్గింది", "తగ్గి");
  tv("examine", "పరిశీలించు", "పరిశీలిస్త", "", "పరిశీలించ", "పరిశీలించింది", "పరిశీలించి");
  tv("devise", "రూపొందించు", "రూపొందిస్త", "", "రూపొందించ", "రూపొందించింది", "రూపొందించి");
  tv("collect", "సేకరించు", "సేకరిస్త", "", "సేకరించ", "సేకరించింది", "సేకరించి");
  tv("reduce", "తగ్గించు", "తగ్గిస్త", "", "తగ్గించ", "తగ్గించింది", "తగ్గించి");
  tv("play-role", "పోషించు", "పోషిస్త", "", "పోషించ", "పోషించింది", "పోషించి");
  tv("cast", "వేయు", "వేస్త", "", "వేశ", "వేసింది", "వేసి");
  tv("address", "ప్రసంగించు", "ప్రసంగిస్త", "", "ప్రసంగించ", "ప్రసంగించింది", "ప్రసంగించి");
  tv("tour", "పర్యటించు", "పర్యటిస్త", "", "పర్యటించ", "పర్యటించింది", "పర్యటించి");
  tv("await", "ఎదురుచూడు", "ఎదురుచూస్త", "", "ఎదురుచూశ", "ఎదురుచూసింది", "ఎదురుచూసి");
  tv("launch2", "ప్రయోగించు", "ప్రయోగిస్త", "", "ప్రయోగించ", "ప్రయోగించింది", "ప్రయోగించి");
  tv("discover", "కనుగొను", "కనుగొంట", "", "కనుగొన్న", "కనుగొన్నది", "కనుగొని");
  tv("publish", "ప్రచురించు", "ప్రచురిస్త", "", "ప్రచురించ", "ప్రచురించింది", "ప్రచురించి");
  tv("chop", "తరుగు", "తరుగుత", "", "తరిగ", "తరిగింది", "తరిగి");
  tv("try", "ప్రయత్నించు", "ప్రయత్నిస్త", "", "ప్రయత్నించ", "ప్రయత్నించింది", "ప్రయత్నించి");
  tv("talk", "మాట్లాడు", "మాట్లాడుత", "", "మాట్లాడ", "మాట్లాడింది", "మాట్లాడి");
  tv("gettest", "చేయించుకో", "చేయించుకుంట", "", "చేయించుకున్న", "చేయించుకున్నది", "చేయించుకుని");
  tv("roam", "తిరుగు", "తిరుగుత", "", "తిరిగ", "తిరిగింది", "తిరిగి");
  tv("stand", "నిలబడు", "నిలబడుత", "", "నిలబడ్డ", "నిలబడింది", "నిలబడి");
  tv("ride", "తొక్కు", "తొక్కుత", "", "తొక్క", "తొక్కింది", "తొక్కి");
  tv("hit", "కొట్టు", "కొడుత", "", "కొట్ట", "కొట్టింది", "కొట్టి");
  tv("join", "పాల్గొను", "పాల్గొంట", "", "పాల్గొన్న", "పాల్గొన్నది", "పాల్గొని");
  tv("count", "లెక్కించు", "లెక్కిస్త", "", "లెక్కించ", "లెక్కించింది", "లెక్కించి");
  tv("spray", "చల్లు", "చల్లుత", "", "చల్ల", "చల్లింది", "చల్లి");
  tv("pour", "పోయు", "పోస్త", "", "పోశ", "పోసింది", "పోసి");
  tv("wash", "ఉతుకు", "ఉతుకుత", "", "ఉతిక", "ఉతికింది", "ఉతికి");
  tv("install", "అమర్చు", "అమరుస్త", "", "అమర్చ", "అమర్చింది", "అమర్చి");
  tv("decide", "నిర్ణయించు", "నిర్ణయిస్త", "", "నిర్ణయించ", "నిర్ణయించింది", "నిర్ణయించి");

  // ---------- Telugu person endings ----------
  // tp: 1s 1p 2 3m 3f 3n 3h
  const E = {
    hab:  { "1s": "ాను", "1p": "ాము", "2": "ారు", "3m": "ాడు", "3f": "ుంది", "3n": "ుంది", "3h": "ారు" },
    cont: { "1s": "ున్నాను", "1p": "ున్నాము", "2": "ున్నారు", "3m": "ున్నాడు", "3f": "ోంది", "3n": "ోంది", "3h": "ున్నారు" },
    past: { "1s": "ాను", "1p": "ాము", "2": "ారు", "3m": "ాడు", "3h": "ారు" },
    be:   { "1s": "ఉన్నాను", "1p": "ఉన్నాము", "2": "ఉన్నారు", "3m": "ఉన్నాడు", "3f": "ఉంది", "3n": "ఉంది", "3h": "ఉన్నారు" },
    fut:  { "1s": "ఉంటాను", "1p": "ఉంటాము", "2": "ఉంటారు", "3m": "ఉంటాడు", "3f": "ఉంటుంది", "3n": "ఉంటుంది", "3h": "ఉంటారు" },
  };
  function tel(verbId, tp, kind) {
    const v = TV[verbId];
    switch (kind) {
      case "hab": return v.hab + E.hab[tp];
      case "cont": return v.cont + E.cont[tp];
      case "past": return (tp === "3f" || tp === "3n") ? v.pf : v.pa + E.past[tp];
      case "tuBe": return v.cont + "ూ " + E.be[tp];
      case "tuFut": return v.cont + "ూ " + E.fut[tp];
      case "ppFut": return v.pp + " " + E.fut[tp];
      case "tuPtc": return v.cont + "ూ";
    }
    return "";
  }

  // ---------- subjects ----------
  const S = (te, en, p, tp, dat, keys) => ({ te, en, p, tp, dat, keys: keys || [en.replace(/^(the|my|our) /, "")] });
  const PERSONAL = {
    I: S("నేను", "I", "1sg", "1s", "నాకు", ["i"]),
    we: S("మేము", "we", "1pl", "1p", "మాకు", ["we"]),
    you: S("మీరు", "you", "2", "2", "మీకు", ["you"]),
    he: S("అతను", "he", "3sg", "3m", "అతనికి", ["he"]),
    she: S("ఆమె", "she", "3sg", "3f", "ఆమెకు", ["she"]),
    they: S("వాళ్ళు", "they", "3pl", "3h", "వాళ్ళకు", ["they"]),
    ravi: S("రవి", "Ravi", "3sg", "3m", "రవికి", ["ravi"]),
    seetha: S("సీత", "Seetha", "3sg", "3f", "సీతకు", ["seetha", "sita", "seeta"]),
    ramu: S("రాము", "Ramu", "3sg", "3m", "రాముకు", ["ramu", "ram", "rama"]),
    lakshmi: S("లక్ష్మి", "Lakshmi", "3sg", "3f", "లక్ష్మికి", ["lakshmi", "laxmi"]),
    venu: S("వేణు", "Venu", "3sg", "3m", "వేణుకు", ["venu"]),
    anitha: S("అనిత", "Anitha", "3sg", "3f", "అనితకు", ["anitha", "anita"]),
    madhavi: S("మాధవి", "Madhavi", "3sg", "3f", "మాధవికి", ["madhavi"]),
    kiran: S("కిరణ్", "Kiran", "3sg", "3m", "కిరణ్‌కు", ["kiran"]),
    priya: S("ప్రియ", "Priya", "3sg", "3f", "ప్రియకు", ["priya"]),
    suresh: S("సురేష్", "Suresh", "3sg", "3m", "సురేష్‌కు", ["suresh"]),
    kavitha: S("కవిత", "Kavitha", "3sg", "3f", "కవితకు", ["kavitha", "kavita"]),
    arjun: S("అర్జున్", "Arjun", "3sg", "3m", "అర్జున్‌కు", ["arjun"]),
    divya: S("దివ్య", "Divya", "3sg", "3f", "దివ్యకు", ["divya"]),
  };
  const P_KEYS = Object.keys(PERSONAL);

  // ---------- topic lexicon ----------
  // subj: domain-specific subjects. vps rows: [who, teObj, teVerbId, enLemma, enTail, keyGroups, flags, synonymLemma]
  // who: comma list of subject keys, 'P' = every personal subject. flags: d = fine with durations
  const DOMAINS = [];
  function toVp(r) { return { who: r[0].split(","), te: r[1], v: r[2], e: r[3], t: r[4], k: r[5], d: (r[6] || "").indexOf("d") >= 0, n: (r[6] || "").indexOf("n") >= 0, o: (r[6] || "").indexOf("o") >= 0, s: (r[6] || "").indexOf("s") >= 0, h: (r[6] || "").indexOf("h") >= 0, sy: r[7] || null }; }
  function extend(id, rows) { const d = DOMAINS.find((x) => x.id === id); rows.forEach((r) => d.vps.push(toVp(r))); }
  function domain(id, name, teName, subj, rows, fsRows) {
    const vps = rows.map(toVp);
    (fsRows || []).forEach((r) => vps.push({ fs: r[0], te: r[1], v: r[2], e: r[3], t: r[4], k: r[5], d: (r[6] || "").indexOf("d") >= 0, sy: null }));
    DOMAINS.push({ id, name, teName, subj, vps });
  }
  const K = (...groups) => groups; // readability helper

  domain("news", "News & current affairs", "వార్తలు – సమకాలీన అంశాలు", {
    gov: Object.assign(S("ప్రభుత్వం", "the government", "3sg", "3n", "ప్రభుత్వానికి"), { org: true }),
    off: Object.assign(S("అధికారులు", "the officials", "3pl", "3h", "అధికారులకు", ["official", "officials", "authorities"]), { org: true }),
    min: S("మంత్రి", "the minister", "3sg", "3m", "మంత్రికి"),
    cc: Object.assign(S("నగర పాలక సంస్థ", "the city council", "3sg", "3n", "నగర పాలక సంస్థకు", ["council", "corporation", "municipality"]), { org: true }),
    pol: Object.assign(S("పోలీసులు", "the police", "3pl", "3h", "పోలీసులకు", ["police"]), { org: true }),
    exp: Object.assign(S("నిపుణులు", "the experts", "3pl", "3h", "నిపుణులకు", ["expert", "experts", "specialists"]), { org: true }),
  }, [
    ["gov,min,cc", "కొత్త పథకాన్ని", "start", "launch", "a new scheme", K(["launch", "start", "introduce"], ["scheme", "programme", "program", "plan"]), "o", "introduce"],
    ["gov,min", "కొత్త విద్యా విధానాన్ని", "announce", "announce", "a new education policy", K(["announce", "declare", "unveil"], ["policy"]), "o"],
    ["gov,cc", "నగరంలో కొత్త ఫ్లైఓవర్‌ను", "build", "build", "a new flyover in the city", K(["build", "construct"], ["flyover", "bridge"], ["city"]), "do", "construct"],
    ["off,min,gov", "ముఖ్యమైన సమావేశాన్ని", "hold", "hold", "an important meeting", K(["hold", "conduct", "organize", "organise", "convene"], ["meeting"]), "", "conduct"],
    ["pol,off", "నగరంలో భద్రతను", "raise", "increase", "security in the city", K(["increase", "tighten", "strengthen", "raise", "boost"], ["security"], ["city"]), "d", "strengthen"],
    ["exp,off", "ఆర్థిక పరిస్థితిని", "examine", "examine", "the economic situation", K(["examine", "study", "review", "analyse", "analyze", "assess", "monitor"], ["economic", "economy", "financial"], ["situation", "condition"]), "d", "review"],
    ["gov,min", "రైతులకు సహాయం", "do", "help", "the farmers", K(["help", "assist", "support"], ["farmer", "farmers"]), "d", "assist"],
    ["off,exp,pol", "కొత్త నివేదికను విడుదల", "do", "release", "a new report", K(["release", "publish", "issue"], ["report"]), "", "publish"],
    ["gov,cc", "రోడ్లను మరమ్మతు", "do", "repair", "the roads", K(["repair", "fix", "mend"], ["road", "roads"]), "d", "fix"],
  ]);

  domain("sports", "Sports", "క్రీడలు", {
    team: Object.assign(S("జట్టు", "the team", "3sg", "3n", "జట్టుకు"), { org: true }),
    ply: S("ఆటగాళ్ళు", "the players", "3pl", "3h", "ఆటగాళ్ళకు", ["player", "players"]),
    ath: S("క్రీడాకారిణి", "the athlete", "3sg", "3f", "క్రీడాకారిణికి", ["athlete", "sportswoman", "player"]),
    fan: S("అభిమానులు", "the fans", "3pl", "3h", "అభిమానులకు", ["fan", "fans", "supporters"]),
  }, [
    ["P,team,ply,ath", "స్టేడియంలో సాధన", "do", "practice", "at the stadium", K(["practice", "practise", "train"], ["stadium", "ground"]), "d"],
    ["team,ply,ath", "ఫైనల్ మ్యాచ్", "play", "play", "the final match", K(["play"], ["final"], ["match", "game"]), "o"],
    ["team,ply,ath", "ఈ టోర్నమెంట్", "win", "win", "this tournament", K(["win"], ["tournament", "championship", "competition"]), "no"],
    ["P,ath,ply", "ఐదు కిలోమీటర్లు", "run", "run", "five kilometres", K(["run", "jog"], ["five", "5"], ["kilometre", "kilometres", "kilometer", "kilometers", "km"]), "d"],
    ["fan,P", "మ్యాచ్", "watch", "watch", "the match", K(["watch", "see"], ["match", "game"]), "d"],
    ["P,ath,ply", "క్రికెట్", "play", "play", "cricket", K(["play"], ["cricket"]), "d"],
    ["team,ply", "కొత్త వ్యూహాన్ని", "devise", "develop", "a new strategy", K(["develop", "devise", "plan", "create", "prepare", "design"], ["strategy", "plan", "tactic", "tactics"]), "", "devise"],
    ["fan,P", "మ్యాచ్ టికెట్లు", "buy", "buy", "tickets for the match", K(["buy", "purchase", "book"], ["ticket", "tickets"], ["match", "game"]), "", "purchase"],
  ]);

  domain("spiritual", "Spiritual & culture", "ఆధ్యాత్మికం – సంస్కృతి", {
    grand: S("అమ్మమ్మ", "my grandmother", "3sg", "3f", "అమ్మమ్మకు", ["grandmother", "grandma"]),
    gpa: S("తాతయ్య", "my grandfather", "3sg", "3m", "తాతయ్యకు", ["grandfather", "grandpa"]),
    priest: S("పూజారి", "the priest", "3sg", "3m", "పూజారికి"),
    dev: S("భక్తులు", "the devotees", "3pl", "3h", "భక్తులకు", ["devotee", "devotees", "worshippers", "pilgrims"]),
    fam: S("మా కుటుంబం", "our family", "3sg", "3n", "మా కుటుంబానికి", ["family"]),
  }, [
    ["P,grand,gpa,dev,fam", "గుడికి", "go", "go", "to the temple", K(["go", "visit"], ["temple"]), "d"],
    ["P,grand,gpa,priest", "భగవద్గీత", "read", "read", "the Bhagavad Gita", K(["read", "study", "recite"], ["gita", "geeta", "bhagavad"]), "d"],
    ["P,grand,priest,gpa", "ధ్యానం", "do", "meditate", "", K(["meditate", "meditation"]), "ds"],
    ["P,grand,priest,gpa", "మంత్రాలు", "chant", "chant", "mantras", K(["chant", "recite", "repeat"], ["mantra", "mantras"]), "ds", "recite"],
    ["P,grand,gpa,fam", "పండుగను", "celebrate", "celebrate", "the festival", K(["celebrate", "observe"], ["festival"]), ""],
    ["grand,priest,P", "దేవుడి ముందు దీపం", "light", "light", "a lamp before the deity", K(["light", "kindle"], ["lamp", "diya"], ["god", "deity", "idol"]), ""],
    ["P,grand,gpa", "ప్రవచనాలు", "listen", "listen", "to spiritual discourses", K(["listen"], ["discourse", "discourses", "sermon", "sermons", "talk", "talks", "lecture", "lectures", "pravachan"]), "d"],
    ["priest,dev,P", "పూజ", "do", "perform", "the puja", K(["perform", "conduct", "do", "offer"], ["puja", "pooja", "prayer", "prayers", "worship"]), ""],
    ["dev,P,fam", "పవిత్ర నదిలో స్నానం", "do", "bathe", "in the holy river", K(["bathe", "bath", "dip", "wash", "swim"], ["river"], ["holy", "sacred"]), ""],
  ]);

  domain("health", "Health & fitness", "ఆరోగ్యం", {
    mom: S("మా అమ్మ", "my mother", "3sg", "3f", "మా అమ్మకు", ["mother", "mom", "mum", "mummy"]),
    dad: S("మా నాన్న", "my father", "3sg", "3m", "మా నాన్నకు", ["father", "dad", "daddy"]),
    frd: S("నా స్నేహితుడు", "my friend", "3sg", "3m", "నా స్నేహితుడికి", ["friend"]),
  }, [
    ["P,mom,dad,frd", "పార్కులో", "walk", "walk", "in the park", K(["walk", "stroll"], ["park", "garden"]), "ds"],
    ["P,mom,dad", "యోగా", "do", "do", "yoga", K(["do", "practice", "practise", "perform"], ["yoga"]), "ds"],
    ["P,mom,dad,frd", "పండ్లు", "eat", "eat", "fresh fruit", K(["eat", "have", "consume"], ["fruit", "fruits"]), "s"],
    ["P,mom,dad", "ఎక్కువ నీళ్ళు", "drink", "drink", "plenty of water", K(["drink"], ["water"]), "dsh"],
    ["P,mom,dad,frd", "త్వరగా", "sleep", "sleep", "early", K(["sleep", "go to bed", "bed"], ["early"]), "dsh"],
    ["P,mom,dad", "ఆరోగ్యకరమైన భోజనం", "cook", "cook", "healthy meals", K(["cook", "prepare", "make"], ["healthy", "nutritious"], ["meal", "meals", "food"]), "ds", "prepare"],
    ["P,mom,dad,frd", "వైద్యుడిని", "meet", "see", "the doctor", K(["see", "meet", "consult", "visit"], ["doctor"]), ""],
    ["P,mom,dad", "మందులు", "takemed", "take", "the medicine", K(["take"], ["medicine", "medicines", "medication", "tablet", "tablets", "pills"]), "dsh"],
    ["P,frd", "జాగింగ్", "do", "jog", "", K(["jog", "run", "jogging", "running"]), "ds"],
  ]);

  domain("tech", "Technology", "సాంకేతికత", {
    eng: S("ఇంజనీర్లు", "the engineers", "3pl", "3h", "ఇంజనీర్లకు", ["engineer", "engineers", "developers"]),
    comp: Object.assign(S("కంపెనీ", "the company", "3sg", "3n", "కంపెనీకి", ["company", "firm"]), { org: true }),
    team2: Object.assign(S("మా బృందం", "our team", "3sg", "3n", "మా బృందానికి", ["team"]), { org: true }),
    stu: S("విద్యార్థులు", "the students", "3pl", "3h", "విద్యార్థులకు", ["student", "students"]),
  }, [
    ["P,eng,team2", "కొత్త యాప్ అభివృద్ధి", "do", "develop", "a new app", K(["develop", "build", "create", "make"], ["app", "application"]), "do", "create"],
    ["comp", "కొత్త ఫోన్ విడుదల", "do", "launch", "a new phone", K(["launch", "release", "unveil"], ["phone", "smartphone", "mobile"]), ""],
    ["P,stu", "కోడింగ్", "learn", "learn", "coding", K(["learn", "study"], ["coding", "programming", "code", "programme"]), "d", "study"],
    ["eng,team2", "సాఫ్ట్‌వేర్ లోపాలను", "fix", "fix", "software bugs", K(["fix", "repair", "correct", "solve"], ["software", "bug", "bugs", "error", "errors"]), "d", "repair"],
    ["P,eng,comp", "ఈమెయిల్స్", "send", "send", "emails", K(["send"], ["email", "emails", "e-mail", "e-mails", "mail", "mails"]), "ds"],
    ["P,eng,stu", "కృత్రిమ మేధ సాధనాలను", "use", "use", "AI tools", K(["use", "utilize", "utilise"], ["ai", "tool", "tools"]), "d", "utilise"],
    ["eng,team2,comp", "వెబ్‌సైట్‌ను", "test", "test", "the website", K(["test", "check"], ["website", "site"]), "d", "check"],
  ]);

  domain("education", "Education", "విద్య", {
    tea: S("ఉపాధ్యాయుడు", "the teacher", "3sg", "3m", "ఉపాధ్యాయుడికి", ["teacher"]),
    stu: S("విద్యార్థులు", "the students", "3pl", "3h", "విద్యార్థులకు", ["student", "students", "pupils"]),
    sis: S("నా చెల్లెలు", "my younger sister", "3sg", "3f", "నా చెల్లెలికి", ["sister"]),
  }, [
    ["stu,P,sis", "పరీక్షల కోసం", "read", "study", "for the exams", K(["study", "read", "prepare", "revise"], ["exam", "exams", "examination", "examinations", "test", "tests"]), "d"],
    ["stu,P,sis", "వ్యాసం", "write", "write", "an essay", K(["write"], ["essay"]), "d"],
    ["stu,P", "గ్రంథాలయంలో పుస్తకాలు", "read", "read", "books in the library", K(["read"], ["book", "books"], ["library"]), "ds"],
    ["tea", "విద్యార్థులకు పాఠాలు", "tell", "teach", "the students", K(["teach", "explain", "give"], ["student", "students", "pupils"], ["lesson", "lessons", "class", "classes"]), "d"],
    ["stu,P,sis", "గణిత సమస్యలను", "solve", "solve", "maths problems", K(["solve", "do"], ["math", "maths", "mathematics", "mathematical"], ["problem", "problems", "sums"]), "d"],
    ["stu,P", "అసైన్‌మెంట్‌ను", "submit", "submit", "the assignment", K(["submit", "hand"], ["assignment", "homework"]), ""],
    ["stu,P,sis", "ఇంగ్లీష్", "learn", "learn", "English", K(["learn", "study"], ["english"]), "d", "study"],
    ["tea,stu", "కొత్త సిలబస్‌ను పూర్తి", "do", "complete", "the new syllabus", K(["complete", "finish"], ["syllabus", "curriculum"]), "o", "finish"],
  ]);

  domain("business", "Business & economy", "వ్యాపారం – ఆర్థికం", {
    shop: S("దుకాణదారుడు", "the shopkeeper", "3sg", "3m", "దుకాణదారుడికి", ["shopkeeper", "trader", "merchant"]),
    owner: S("యజమాని", "the owner", "3sg", "3m", "యజమానికి", ["owner", "boss"]),
    comp: Object.assign(S("కంపెనీ", "the company", "3sg", "3n", "కంపెనీకి", ["company", "firm"]), { org: true }),
    inv: Object.assign(S("పెట్టుబడిదారులు", "the investors", "3pl", "3h", "పెట్టుబడిదారులకు", ["investor", "investors"]), { org: true }),
  }, [
    ["shop,owner,P", "కొత్త దుకాణం", "open", "open", "a new shop", K(["open", "start", "set up"], ["shop", "store"]), "o"],
    ["shop,comp,owner", "ఉత్పత్తులను", "sell", "sell", "products", K(["sell"], ["product", "products", "goods"]), "d"],
    ["inv,P,comp", "షేర్లలో పెట్టుబడి", "put", "invest", "in shares", K(["invest"], ["share", "shares", "stock", "stocks", "market"]), "dh"],
    ["comp,owner", "కొత్త సిబ్బందిని", "hire", "hire", "new staff", K(["hire", "recruit", "employ", "appoint"], ["staff", "employee", "employees", "workers", "people"]), "", "recruit"],
    ["comp,owner,P", "ఒప్పందంపై సంతకం", "do", "sign", "the contract", K(["sign"], ["contract", "agreement", "deal"]), "o"],
    ["comp,owner", "ధరలను", "raise", "increase", "prices", K(["increase", "raise", "hike"], ["price", "prices"]), "", "raise"],
    ["owner,P,comp", "కస్టమర్లను", "meet", "meet", "customers", K(["meet"], ["customer", "customers", "client", "clients"]), "d"],
    ["comp,owner,P", "బిల్లులు", "send", "send", "invoices", K(["send"], ["invoice", "invoices", "bill", "bills"]), ""],
  ]);

  domain("farming", "Farming & rural life", "వ్యవసాయం", {
    far: S("రైతు", "the farmer", "3sg", "3m", "రైతుకు", ["farmer"]),
    farms: S("రైతులు", "the farmers", "3pl", "3h", "రైతులకు", ["farmer", "farmers"]),
    vill: S("గ్రామస్తులు", "the villagers", "3pl", "3h", "గ్రామస్తులకు", ["villager", "villagers"]),
  }, [
    ["far,farms", "పొలం", "plough", "plough", "the field", K(["plough", "plow", "till"], ["field", "land", "farm"]), "d", "till"],
    ["far,farms,vill", "వరి", "plant", "plant", "paddy", K(["plant", "sow", "grow"], ["paddy", "rice"]), "d"],
    ["far,farms", "వరి పంట", "harvest", "harvest", "the paddy crop", K(["harvest", "reap", "cut"], ["paddy", "rice", "crop"]), "d", "reap"],
    ["far,farms", "మార్కెట్‌లో కూరగాయలు", "sell", "sell", "vegetables at the market", K(["sell"], ["vegetable", "vegetables"], ["market"]), "d"],
    ["far,farms,vill", "పంటలకు నీళ్ళు", "put", "water", "the crops", K(["water", "irrigate"], ["crop", "crops", "plants", "fields"]), "ds", "irrigate"],
    ["far,farms", "ఎరువులు", "buy", "buy", "fertilizer", K(["buy", "purchase"], ["fertilizer", "fertiliser", "fertilizers", "fertilisers", "manure"]), "", "purchase"],
    ["vill,farms", "పొలంలో బావి", "dig", "dig", "a well in the field", K(["dig"], ["well"], ["field"]), "do"],
  ]);

  domain("travel", "Travel & transport", "ప్రయాణం", {
    tour: S("పర్యాటకులు", "the tourists", "3pl", "3h", "పర్యాటకులకు", ["tourist", "tourists", "visitors"]),
    bro: S("మా అన్నయ్య", "my elder brother", "3sg", "3m", "మా అన్నయ్యకు", ["brother"]),
    frs: S("నా స్నేహితులు", "my friends", "3pl", "3h", "నా స్నేహితులకు", ["friend", "friends"]),
  }, [
    ["P,bro,frs,tour", "రైలులో", "travel", "travel", "by train", K(["travel", "go"], ["train"]), "d"],
    ["P,bro,frs", "టికెట్లు బుక్", "do", "book", "the tickets", K(["book", "reserve"], ["ticket", "tickets"]), ""],
    ["P,tour,frs,bro", "తిరుపతి", "visit", "visit", "Tirupati", K(["visit", "go"], ["tirupati"]), ""],
    ["P,bro,frs", "సామాన్లు", "pack", "pack", "the luggage", K(["pack"], ["luggage", "bag", "bags", "baggage", "suitcase", "suitcases", "things"]), ""],
    ["P,bro,tour,frs", "విమానాశ్రయానికి", "reach", "reach", "the airport", K(["reach", "arrive", "get"], ["airport"]), "n"],
    ["P,bro", "హైదరాబాద్‌కు కారు", "drive", "drive", "to Hyderabad", K(["drive"], ["hyderabad"]), "d"],
    ["tour,P,frs", "పాత నగరాన్ని", "watch", "explore", "the old city", K(["explore", "see", "visit", "tour", "discover"], ["old"], ["city", "town"]), "d", "tour"],
  ]);

  domain("life", "Family & daily life", "కుటుంబం – దైనందిన జీవితం", {
    mom: S("మా అమ్మ", "my mother", "3sg", "3f", "మా అమ్మకు", ["mother", "mom", "mum", "mummy"]),
    dad: S("మా నాన్న", "my father", "3sg", "3m", "మా నాన్నకు", ["father", "dad", "daddy"]),
    kids: S("పిల్లలు", "the children", "3pl", "3h", "పిల్లలకు", ["child", "children", "kids"]),
    sis: S("నా చెల్లెలు", "my younger sister", "3sg", "3f", "నా చెల్లెలికి", ["sister"]),
  }, [
    ["mom,P,sis", "రాత్రి భోజనం", "cook", "cook", "dinner", K(["cook", "prepare", "make"], ["dinner", "supper"]), "ds", "prepare"],
    ["mom,dad,P", "ఇల్లు శుభ్రం", "do", "clean", "the house", K(["clean"], ["house", "home", "room"]), "ds"],
    ["P,mom,dad,sis", "బంధువులకు ఫోన్", "do", "call", "relatives", K(["call", "phone", "ring"], ["relative", "relatives", "family"]), "s"],
    ["mom,dad,P", "మార్కెట్‌లో సరుకులు", "buy", "buy", "groceries at the market", K(["buy", "purchase", "shop"], ["grocery", "groceries", "vegetables", "goods", "provisions"], ["market"]), "s", "purchase"],
    ["kids,P,sis", "టీవీ", "watch", "watch", "TV", K(["watch"], ["tv", "television"]), "ds"],
    ["P,mom,dad", "పొరుగువారికి సహాయం", "do", "help", "the neighbours", K(["help", "assist"], ["neighbour", "neighbours", "neighbor", "neighbors"]), "", "assist"],
    ["P,mom,dad,kids", "పుట్టినరోజు వేడుకను", "celebrate", "celebrate", "a birthday party", K(["celebrate", "have", "hold", "organise", "organize"], ["birthday"]), ""],
  ]);

  domain("environment", "Environment & weather", "పర్యావరణం – వాతావరణం", {
    vill: S("గ్రామస్తులు", "the villagers", "3pl", "3h", "గ్రామస్తులకు", ["villager", "villagers"]),
    mom: S("మా అమ్మ", "my mother", "3sg", "3f", "మా అమ్మకు", ["mother", "mom", "mum"]),
    dad: S("మా నాన్న", "my father", "3sg", "3m", "మా నాన్నకు", ["father", "dad"]),
    fam: S("మా కుటుంబం", "our family", "3sg", "3n", "మా కుటుంబానికి", ["family"]),
  }, [
    ["P,vill,fam", "చెట్లు", "plant", "plant", "trees", K(["plant"], ["tree", "trees", "saplings"]), "d"],
    ["P,mom,dad,fam", "నీటిని ఆదా", "do", "save", "water", K(["save", "conserve"], ["water"]), "dh", "conserve"],
    ["P,vill", "చెత్తను", "collect", "collect", "the waste", K(["collect", "gather", "pick"], ["waste", "garbage", "trash", "rubbish", "litter"]), "d", "gather"],
    ["P,vill,fam", "ప్లాస్టిక్ వాడకాన్ని", "reduce", "reduce", "the use of plastic", K(["reduce", "cut", "decrease", "lower", "limit"], ["plastic"]), "dh", "cut"],
  ], [
    [{ en: "it", p: "3sg", tp: "3n", keys: ["it"] }, "భారీగా వర్షం", "fall", "rain", "heavily", K(["rain", "pour", "fall"], ["heavy", "heavily", "hard"]), "d"],
    [{ en: "the temperature", p: "3sg", tp: "3n", keys: ["temperature"] }, "ఉష్ణోగ్రత", "rise", "rise", "", K(["temperature", "heat"], ["rise", "increase", "climb", "go up", "grow"]), "d"],
    [{ en: "the water level", p: "3sg", tp: "3n", keys: ["level", "water"] }, "నీటి మట్టం", "drop", "fall", "", K(["water", "level"], ["fall", "drop", "decrease", "go down", "decline"]), "d"],
  ]);

  domain("entertainment", "Entertainment & cinema", "వినోదం – సినిమా", {
    dir: S("దర్శకుడు", "the director", "3sg", "3m", "దర్శకుడికి", ["director"]),
    sing: S("గాయని", "the singer", "3sg", "3f", "గాయనికి", ["singer"]),
    act: S("నటుడు", "the actor", "3sg", "3m", "నటుడికి", ["actor"]),
    view: S("ప్రేక్షకులు", "the viewers", "3pl", "3h", "ప్రేక్షకులకు", ["viewer", "viewers", "audience", "spectators"]),
    studio: Object.assign(S("నిర్మాణ సంస్థ", "the production company", "3sg", "3n", "నిర్మాణ సంస్థకు", ["company", "studio", "producers", "production"]), { org: true }),
  }, [
    ["P,view", "కొత్త సినిమా", "watch", "watch", "the new film", K(["watch", "see"], ["film", "movie", "picture"]), "d"],
    ["studio", "కొత్త సినిమా విడుదల", "do", "release", "a new film", K(["release", "launch"], ["film", "movie", "picture"]), ""],
    ["sing,P", "అందమైన పాట", "sing", "sing", "a beautiful song", K(["sing"], ["song"], ["beautiful", "lovely"]), "d"],
    ["dir,studio", "సినిమా షూటింగ్", "do", "shoot", "the film", K(["shoot", "film"], ["film", "movie", "picture", "scene", "scenes"]), "d", "film"],
    ["act,P", "కొత్త పాత్రను", "play-role", "play", "a new role", K(["play", "portray", "perform"], ["role", "character", "part"]), "o"],
    ["dir,P", "కథ", "write", "write", "a story", K(["write"], ["story", "script"]), "d"],
    ["sing,act,P", "వేదికపై ప్రదర్శన", "give", "perform", "on the stage", K(["perform"], ["stage"]), ""],
  ]);


  // ---------- more topics ----------
  const ORG = (x) => Object.assign(x, { org: true });
  domain("politics", "Politics & elections", "రాజకీయాలు – ఎన్నికలు", {
    party: ORG(S("పార్టీ", "the party", "3sg", "3n", "పార్టీకి", ["party"])),
    leader: S("నాయకుడు", "the leader", "3sg", "3m", "నాయకుడికి", ["leader", "politician"]),
    voters: S("ఓటర్లు", "the voters", "3pl", "3h", "ఓటర్లకు", ["voter", "voters", "people", "citizens"]),
    cm: S("ముఖ్యమంత్రి", "the Chief Minister", "3sg", "3m", "ముఖ్యమంత్రికి", ["chief", "cm", "minister"]),
  }, [
    ["voters,P", "ఓటు", "cast", "vote", "", K(["vote", "cast"]), ""],
    ["leader,cm,party", "ఎన్నికల ప్రచారం", "do", "campaign", "for the elections", K(["campaign", "canvass"], ["election", "elections", "polls"]), "d"],
    ["party,leader", "మేనిఫెస్టోను విడుదల", "do", "release", "the manifesto", K(["release", "publish", "launch", "unveil"], ["manifesto"]), "o", "publish"],
    ["cm,leader", "ప్రజలను ఉద్దేశించి", "address", "address", "the people", K(["address", "speak", "talk"], ["people", "public", "citizens", "crowd"]), ""],
    ["cm,leader", "జిల్లాలో", "tour", "tour", "the district", K(["tour", "visit", "travel"], ["district"]), "d"],
    ["voters,P,leader", "ఎన్నికల ఫలితాల కోసం", "await", "wait", "for the election results", K(["wait", "await"], ["result", "results"]), "d"],
    ["party", "కొత్త అభ్యర్థిని ఎంపిక", "do", "choose", "a new candidate", K(["choose", "select", "pick", "nominate", "name"], ["candidate"]), "o", "select"],
    ["cm,leader", "విలేకరుల సమావేశం", "hold", "hold", "a press conference", K(["hold", "conduct", "address", "organise", "organize", "call"], ["press", "media"], ["conference", "meet", "meeting"]), ""],
  ]);

  domain("science", "Science & space", "విజ్ఞానం – అంతరిక్షం", {
    sci: ORG(S("శాస్త్రవేత్తలు", "the scientists", "3pl", "3h", "శాస్త్రవేత్తలకు", ["scientist", "scientists", "researchers"])),
    isro: ORG(S("ఇస్రో", "ISRO", "3sg", "3n", "ఇస్రోకు", ["isro"])),
    res: S("పరిశోధకురాలు", "the researcher", "3sg", "3f", "పరిశోధకురాలికి", ["researcher", "scientist"]),
    stu: S("విద్యార్థులు", "the students", "3pl", "3h", "విద్యార్థులకు", ["student", "students"]),
  }, [
    ["isro,sci", "కొత్త ఉపగ్రహాన్ని", "launch2", "launch", "a new satellite", K(["launch", "send"], ["satellite"]), ""],
    ["sci,res", "కొత్త వ్యాక్సిన్‌పై పరిశోధన", "do", "work", "on a new vaccine", K(["work", "research", "develop", "study"], ["vaccine"]), "d"],
    ["sci,res,stu,P", "చంద్రుడి చిత్రాలను", "examine", "study", "images of the Moon", K(["study", "examine", "analyse", "analyze", "observe", "look", "check"], ["moon", "lunar"], ["image", "images", "pictures", "photos", "photographs"]), "d"],
    ["res,sci,stu", "ప్రయోగశాలలో ప్రయోగాలు", "do", "conduct", "experiments in the laboratory", K(["conduct", "do", "perform", "carry", "run"], ["experiment", "experiments"], ["lab", "laboratory"]), "d", "perform"],
    ["sci,isro", "కొత్త గ్రహాన్ని", "discover", "discover", "a new planet", K(["discover", "find", "detect", "spot"], ["planet"]), "no"],
    ["res,sci,P", "సైన్స్ పత్రికలో వ్యాసం", "publish", "publish", "an article in a science journal", K(["publish", "write", "release"], ["article", "paper"], ["journal", "magazine"]), ""],
    ["stu,P,res", "టెలిస్కోప్‌తో నక్షత్రాలను", "watch", "observe", "the stars through a telescope", K(["observe", "watch", "see", "look", "study", "view"], ["star", "stars"], ["telescope"]), "d", "watch"],
  ]);

  domain("food", "Food & cooking", "ఆహారం – వంట", {
    mom: S("మా అమ్మ", "my mother", "3sg", "3f", "మా అమ్మకు", ["mother", "mom", "mum", "mummy", "amma"]),
    grand: S("అమ్మమ్మ", "my grandmother", "3sg", "3f", "అమ్మమ్మకు", ["grandmother", "grandma", "granny"]),
    chef: S("వంటవాడు", "the cook", "3sg", "3m", "వంటవాడికి", ["cook", "chef"]),
    kids: S("పిల్లలు", "the children", "3pl", "3h", "పిల్లలకు", ["child", "children", "kids"]),
  }, [
    ["mom,grand,P,chef", "పులిహోర", "do", "make", "tamarind rice", K(["make", "cook", "prepare"], ["tamarind", "pulihora", "puliyogare"]), "d", "prepare"],
    ["mom,grand,P", "ఆవకాయ పచ్చడి", "put", "make", "mango pickle", K(["make", "prepare", "put"], ["pickle"], ["mango"]), "d", "prepare"],
    ["mom,grand,chef,P", "దోసెలు", "cast", "make", "dosas", K(["make", "cook", "prepare", "fry"], ["dosa", "dosas", "dosai"]), "ds"],
    ["mom,P,chef", "కూరగాయలు", "chop", "chop", "the vegetables", K(["chop", "cut", "slice", "dice"], ["vegetable", "vegetables", "veggies"]), "ds", "cut"],
    ["chef,P,mom", "అతిథుల కోసం బిర్యానీ", "cook", "cook", "biryani for the guests", K(["cook", "make", "prepare"], ["biryani"], ["guest", "guests", "visitors"]), "d", "prepare"],
    ["kids,P", "ఐస్‌క్రీమ్", "eat", "eat", "ice cream", K(["eat", "have", "enjoy"], ["ice", "icecream", "ice-cream"]), "s"],
    ["mom,grand,P,chef", "కొత్త వంటకాన్ని", "try", "try", "a new recipe", K(["try", "test", "attempt", "experiment"], ["recipe", "dish"]), ""],
    ["P,kids,mom", "వేడి వేడి సమోసాలు", "eat", "eat", "hot samosas", K(["eat", "have", "enjoy"], ["samosa", "samosas"]), "s"],
  ]);

  domain("work", "Work & office", "ఉద్యోగం – ఆఫీసు", {
    mgr: S("మేనేజర్", "the manager", "3sg", "3m", "మేనేజర్‌కు", ["manager", "boss"]),
    emp: S("ఉద్యోగులు", "the employees", "3pl", "3h", "ఉద్యోగులకు", ["employee", "employees", "staff", "workers"]),
    col: S("నా సహోద్యోగి", "my colleague", "3sg", "3f", "నా సహోద్యోగికి", ["colleague", "coworker", "co-worker"]),
  }, [
    ["P,emp,col", "నివేదికను సిద్ధం", "do", "prepare", "the report", K(["prepare", "write", "make", "draft", "finish", "complete"], ["report"]), "d", "draft"],
    ["mgr", "బృంద సమావేశాన్ని", "hold", "hold", "a team meeting", K(["hold", "conduct", "organise", "organize", "run", "lead", "call"], ["meeting"]), "", "conduct"],
    ["P,col,emp", "ఇంటి నుండి పని", "do", "work", "from home", K(["work"], ["home"]), "dsh"],
    ["P,col", "ఇంటర్వ్యూకు", "go", "go", "for an interview", K(["go", "attend", "appear"], ["interview"]), ""],
    ["mgr", "కొత్త ఉద్యోగులకు శిక్షణ", "give", "train", "the new employees", K(["train", "coach", "teach", "guide"], ["employee", "employees", "staff", "recruits", "joinees"]), "d"],
    ["P,emp,col", "క్లయింట్‌తో ఫోన్‌లో", "talk", "talk", "to the client on the phone", K(["talk", "speak", "chat"], ["client", "customer"], ["phone", "call"]), "ds", "speak"],
    ["P,col", "సెలవు కోసం దరఖాస్తు", "do", "apply", "for leave", K(["apply", "request", "ask"], ["leave", "holiday", "vacation", "off"]), ""],
    ["mgr,P", "ప్రాజెక్ట్ గడువును", "decide", "set", "the project deadline", K(["set", "fix", "decide", "finalise", "finalize"], ["deadline"]), ""],
  ]);

  domain("hospital", "Hospital & medicine", "ఆసుపత్రి – వైద్యం", {
    doc: S("డాక్టర్", "the doctor", "3sg", "3m", "డాక్టర్‌కు", ["doctor", "physician", "dr"]),
    nurse: S("నర్సు", "the nurse", "3sg", "3f", "నర్సుకు", ["nurse"]),
    pat: S("రోగి", "the patient", "3sg", "3m", "రోగికి", ["patient"]),
    hosp: ORG(S("ఆసుపత్రి", "the hospital", "3sg", "3n", "ఆసుపత్రికి", ["hospital"])),
  }, [
    ["doc", "రోగులను", "test", "examine", "the patients", K(["examine", "check", "see", "treat", "test"], ["patient", "patients"]), "d", "check"],
    ["doc", "శస్త్రచికిత్స", "do", "perform", "an operation", K(["perform", "do", "conduct", "carry"], ["operation", "surgery"]), ""],
    ["nurse", "రోగికి ఇంజెక్షన్", "give", "give", "the patient an injection", K(["give"], ["injection", "shot", "jab"]), ""],
    ["hosp,doc", "ఉచిత వైద్య శిబిరాన్ని", "hold", "hold", "a free medical camp", K(["hold", "organise", "organize", "conduct", "run", "arrange"], ["medical", "health"], ["camp"]), "", "organise"],
    ["pat,P", "ఆసుపత్రిలో విశ్రాంతి", "take", "rest", "in the hospital", K(["rest", "relax"], ["hospital"]), "d"],
    ["pat,P", "రక్త పరీక్ష", "gettest", "get", "a blood test", K(["get", "take", "have", "do", "undergo"], ["blood"], ["test"]), ""],
    ["doc,nurse", "రోగులకు సలహాలు", "give", "advise", "the patients", K(["advise", "counsel", "guide", "give"], ["patient", "patients"]), "d"],
    ["nurse,doc", "రోగి రక్తపోటును", "examine", "check", "the patient's blood pressure", K(["check", "measure", "monitor", "take", "examine", "test"], ["blood", "bp"], ["pressure", "bp"]), "d", "monitor"],
  ]);

  domain("shopping", "Shopping & money", "షాపింగ్ – డబ్బు", {
    mom: S("మా అమ్మ", "my mother", "3sg", "3f", "మా అమ్మకు", ["mother", "mom", "mum", "mummy", "amma"]),
    dad: S("మా నాన్న", "my father", "3sg", "3m", "మా నాన్నకు", ["father", "dad", "daddy", "nanna"]),
    cust: S("కస్టమర్లు", "the customers", "3pl", "3h", "కస్టమర్లకు", ["customer", "customers", "shoppers", "buyers"]),
  }, [
    ["P,mom,dad", "ఆన్‌లైన్‌లో బట్టలు", "buy", "buy", "clothes online", K(["buy", "order", "purchase", "shop"], ["clothes", "dress", "dresses", "clothing", "shirt", "shirts"], ["online", "internet"]), "", "order"],
    ["P,dad,mom", "బ్యాంకులో డబ్బు జమ", "do", "deposit", "money in the bank", K(["deposit", "put", "save"], ["money", "cash", "amount"], ["bank"]), ""],
    ["P,mom", "బంగారు గాజులు", "buy", "buy", "gold bangles", K(["buy", "purchase"], ["gold", "golden"], ["bangle", "bangles"]), "o"],
    ["P,dad,mom", "కరెంటు బిల్లు", "build", "pay", "the electricity bill", K(["pay", "clear"], ["electricity", "power", "current", "electric"], ["bill"]), ""],
    ["cust,P", "షాపింగ్ మాల్‌లో", "roam", "walk", "around the shopping mall", K(["walk", "wander", "roam", "stroll", "shop", "go"], ["mall"]), "ds"],
    ["P,mom", "ధర గురించి బేరం", "do", "bargain", "over the price", K(["bargain", "negotiate", "haggle"], ["price", "cost", "rate"]), "d"],
    ["cust,P", "పెద్ద వరుసలో", "stand", "stand", "in a long queue", K(["stand", "wait", "queue"], ["queue", "line"]), "ds"],
    ["P,dad", "కొత్త బైక్", "buy", "buy", "a new motorbike", K(["buy", "purchase", "get"], ["bike", "motorbike", "motorcycle", "scooter"]), "o"],
  ]);

  extend("news", [
    ["min,off", "ప్రజల సమస్యలను", "listen", "listen", "to people's problems", K(["listen", "hear"], ["problem", "problems", "complaints", "issues", "grievances"]), "d"],
    ["gov,min,cc", "కొత్త ఆసుపత్రిని", "start", "open", "a new hospital", K(["open", "inaugurate", "start", "launch"], ["hospital"]), "o", "inaugurate"],
    ["gov,off,pol", "వరద బాధితులకు ఆహారం పంపిణీ", "do", "distribute", "food to the flood victims", K(["distribute", "give", "provide", "supply", "hand"], ["food", "meals"], ["flood", "victims", "affected"]), "d"],
  ]);
  extend("sports", [
    ["ply,ath,P", "కోచ్ సలహాలు", "listen", "listen", "to the coach's advice", K(["listen", "follow", "hear"], ["coach"], ["advice", "instructions", "tips"]), "d"],
    ["ply,P", "సెంచరీ", "do", "score", "a century", K(["score", "make", "hit"], ["century", "hundred", "100"]), "n"],
    ["P,ath", "బ్యాడ్మింటన్", "play", "play", "badminton", K(["play"], ["badminton"]), "d"],
    ["P,ath,ply", "ఈత", "hit", "swim", "", K(["swim", "swimming"]), "d"],
  ]);
  extend("spiritual", [
    ["dev,fam,P,priest", "పేదలకు అన్నదానం", "do", "offer", "free meals to the poor", K(["offer", "serve", "give", "donate", "distribute", "provide"], ["meal", "meals", "food"], ["poor", "needy"]), ""],
    ["P,grand,dev", "భజనలు", "sing", "sing", "bhajans", K(["sing"], ["bhajan", "bhajans", "devotional", "hymns", "songs"]), "d"],
    ["P,grand,gpa,fam", "ఉపవాసం", "do", "fast", "", K(["fast", "fasting"]), "d"],
  ]);
  extend("health", [
    ["P,mom,dad,frd", "సైకిల్", "ride", "ride", "a bicycle", K(["ride", "cycle", "pedal"], ["bicycle", "cycle", "bike"]), "ds"],
    ["P,frd,dad", "జిమ్‌లో వ్యాయామం", "do", "exercise", "at the gym", K(["exercise", "work", "train"], ["gym"]), "ds"],
  ]);
  extend("tech", [
    ["P,eng,team2", "డేటాను బ్యాకప్", "do", "back", "up the data", K(["back", "backup", "save", "copy", "store"], ["data", "files"]), "d"],
    ["P,comp,eng", "కొత్త ల్యాప్‌టాప్", "buy", "buy", "a new laptop", K(["buy", "purchase", "get", "order"], ["laptop", "computer"]), "o"],
    ["P,stu", "ఆన్‌లైన్ కోర్సు పూర్తి", "do", "complete", "an online course", K(["complete", "finish", "do"], ["online"], ["course"]), "o", "finish"],
    ["comp,eng", "కొత్త సర్వర్లను", "install", "install", "new servers", K(["install", "set", "setup", "deploy"], ["server", "servers"]), "do"],
  ]);
  extend("education", [
    ["stu,P,sis", "సైన్స్ ప్రాజెక్ట్ తయారు", "do", "make", "a science project", K(["make", "build", "prepare", "create", "do"], ["science"], ["project", "model"]), "d", "prepare"],
    ["stu,P,sis", "వార్షిక పరీక్షలు", "write", "write", "the annual exams", K(["write", "take", "sit", "give", "attend"], ["annual", "final", "yearly"], ["exam", "exams", "examination", "examinations"]), "o"],
    ["stu,P,sis", "వక్తృత్వ పోటీలో", "join", "take", "part in the speech competition", K(["take", "participate", "compete", "join"], ["speech", "debate", "elocution"], ["competition", "contest"]), ""],
  ]);
  extend("business", [
    ["shop,owner,P", "బ్యాంకు నుండి రుణం", "take", "take", "a loan from the bank", K(["take", "get", "borrow", "obtain"], ["loan"], ["bank"]), "o"],
    ["comp,owner", "కొత్త శాఖను", "start", "open", "a new branch", K(["open", "start", "launch", "inaugurate"], ["branch", "office", "outlet"]), "o"],
    ["shop,owner,comp", "లాభాలను", "count", "calculate", "the profits", K(["calculate", "count", "compute", "check", "work"], ["profit", "profits", "earnings", "income"]), "d"],
  ]);
  extend("farming", [
    ["far,farms", "ట్రాక్టర్", "drive", "drive", "the tractor", K(["drive", "run", "operate"], ["tractor"]), "d"],
    ["far,farms,vill", "ఆవులకు మేత", "cast", "feed", "the cows", K(["feed", "give"], ["cow", "cows", "cattle"]), "ds"],
    ["far,farms", "పంటలపై పురుగుమందు", "spray", "spray", "pesticide on the crops", K(["spray", "sprinkle", "apply", "use"], ["pesticide", "pesticides", "insecticide", "chemicals", "medicine"], ["crop", "crops", "plants", "field", "fields"]), "d"],
  ]);
  extend("travel", [
    ["P,tour,frs,bro", "అరకు లోయను", "visit", "visit", "the Araku Valley", K(["visit", "go", "see", "tour"], ["araku"], ["valley"]), "o"],
    ["P,bro,frs", "హోటల్ గది బుక్", "do", "book", "a hotel room", K(["book", "reserve"], ["hotel"], ["room"]), ""],
    ["P,tour,frs", "సముద్ర తీరంలో", "walk", "walk", "on the beach", K(["walk", "stroll"], ["beach", "seashore", "shore", "seaside"]), "d"],
    ["P,bro,frs,tour", "విమానంలో ఢిల్లీకి", "travel", "fly", "to Delhi", K(["fly", "travel", "go"], ["delhi"]), "d"],
  ]);
  extend("life", [
    ["mom,P,dad", "మొక్కలకు నీళ్ళు", "pour", "water", "the plants", K(["water"], ["plant", "plants", "garden", "flowers"]), "ds"],
    ["mom,dad,P", "పిల్లలకు కథలు", "tell", "tell", "the children stories", K(["tell", "read", "narrate"], ["story", "stories"], ["child", "children", "kids"]), "ds"],
    ["mom,P,sis", "బట్టలు", "wash", "wash", "the clothes", K(["wash", "launder", "clean"], ["clothes", "laundry", "dresses"]), "ds"],
    ["P,sis,kids", "హోంవర్క్", "do", "do", "homework", K(["do", "finish", "complete", "write"], ["homework", "assignment"]), "ds"],
  ]);
  extend("environment", [
    ["P,vill,fam", "సౌర ఫలకాలను", "install", "install", "solar panels", K(["install", "fit", "set", "put", "fix", "mount"], ["solar"], ["panel", "panels"]), "o"],
    ["vill,P", "చెరువును శుభ్రం", "do", "clean", "the lake", K(["clean", "clear"], ["lake", "pond", "tank"]), "d"],
    ["P,vill,fam", "వర్షపు నీటిని నిల్వ", "do", "store", "rainwater", K(["store", "save", "collect", "harvest", "conserve"], ["rainwater", "rain"]), "dh", "collect"],
  ]);
  extend("entertainment", [
    ["P,view", "సంగీత కచేరీకి", "go", "go", "to a music concert", K(["go", "attend"], ["concert", "show", "programme", "program"]), ""],
    ["P,view", "ఓటీటీలో వెబ్ సిరీస్", "watch", "watch", "a web series online", K(["watch", "see", "stream", "binge"], ["series", "show"]), "d"],
    ["act,sing,dir", "అవార్డు", "win", "win", "an award", K(["win", "receive", "get", "bag"], ["award", "prize"]), "no"],
  ]);

  // ---------- optional details: company, manner, place ----------
  // Added to about half of the eligible sentences so the same action appears in different shapes.
  const EXTRAS = {
    company: [
      { id: "c1", te: "స్నేహితులతో కలిసి", en: "with friends", k: K(["friend", "friends"]) },
      { id: "c2", te: "కుటుంబంతో కలిసి", en: "with the family", k: K(["family"]) },
      { id: "c3", te: "పిల్లలతో కలిసి", en: "with the children", k: K(["child", "children", "kids"]), notSubj: ["the children"] },
      { id: "c4", te: "సహోద్యోగులతో కలిసి", en: "with colleagues", k: K(["colleague", "colleagues", "coworkers", "co-workers", "team"]), doms: ["work", "tech", "business"] },
    ],
    manner: [
      { id: "m1", te: "జాగ్రత్తగా", en: "carefully", k: K(["carefully", "careful", "cautiously", "attentively"]), v: "read write study cook drive pack examine test fix repair prepare check solve plant wash chop calculate spray install back water" },
      { id: "m2", te: "ఉత్సాహంగా", en: "enthusiastically", k: K(["enthusiastically", "enthusiasm", "eagerly", "excitedly", "energetically", "zeal"]), v: "play practice celebrate sing learn campaign train work perform dance exercise" },
      { id: "m3", te: "సంతోషంగా", en: "happily", k: K(["happily", "happy", "joyfully", "gladly", "cheerfully", "joy"]), v: "celebrate play sing visit travel watch eat walk go" },
      { id: "m4", te: "శ్రద్ధగా", en: "attentively", k: K(["attentively", "carefully", "sincerely", "diligently", "seriously", "attention", "focus", "dedication"]), v: "listen read study learn chant" },
      { id: "m5", te: "వేగంగా", en: "quickly", k: K(["quickly", "fast", "rapidly", "speedily", "quick", "swiftly"]), v: "run walk write solve complete send pack fix chop" },
    ],
    place: [
      { id: "p1", te: "హైదరాబాద్‌లో", en: "in Hyderabad", k: K(["hyderabad"]) },
      { id: "p2", te: "విజయవాడలో", en: "in Vijayawada", k: K(["vijayawada"]) },
      { id: "p3", te: "విశాఖపట్నంలో", en: "in Visakhapatnam", k: K(["visakhapatnam", "vizag", "vishakhapatnam", "visakapatnam"]) },
      { id: "p4", te: "వరంగల్‌లో", en: "in Warangal", k: K(["warangal"]) },
      { id: "p5", te: "గుంటూరులో", en: "in Guntur", k: K(["guntur"]) },
      { id: "p6", te: "కర్నూలులో", en: "in Kurnool", k: K(["kurnool"]) },
    ],
  };
  const COMPANY_OK = new Set("go visit travel walk play watch celebrate cook eat run jog swim ride sing explore plant clean make offer fly".split(" "));
  const PLACE_DOMS = new Set(["news", "business", "politics", "sports", "work", "hospital", "entertainment", "tech"]);
  function isPerson(s) { return !!s && !s.org && s.tp !== "3n"; }
  function extraOptions(dom, vp, s) {
    if (vp.fs || !s) return [];
    const out = [];
    const person = isPerson(s);
    if (person && COMPANY_OK.has(vp.e) && !/\bwith\b/.test(vp.t)) EXTRAS.company.forEach((x) => { if ((!x.doms || x.doms.indexOf(dom.id) >= 0) && (!x.notSubj || x.notSubj.indexOf(s.en) < 0)) out.push(x); });
    if (person) EXTRAS.manner.forEach((x) => { if (x.v.split(" ").indexOf(vp.e) >= 0) out.push(x); });
    if (PLACE_DOMS.has(dom.id) && !/\b(in|at|to|from|on|around|for|through)\b/.test(vp.t) && !/[A-Z]/.test(vp.t)) EXTRAS.place.forEach((x) => out.push(x));
    return out;
  }
  function chooseExtra(dom, vp, s, avoid) {
    const opts = extraOptions(dom, vp, s).filter((x) => !avoid || !avoid.has(x.id));
    if (!opts.length || Math.random() < 0.5) return null;
    return pick(opts);
  }
  function countExtras(dom, vp) { return 1 + extraOptions(dom, vp, { tp: "3m", en: "x" }).length; }
  const CAP_WORDS = ["Hyderabad", "Vijayawada", "Visakhapatnam", "Vizag", "Warangal", "Guntur", "Kurnool", "Araku", "Delhi", "ISRO", "December", "June"];

  // ---------- adverbials ----------
  // en: {pos, text}; alt: accepted rewordings; k: key groups; tePos: 'front' | 'mid'
  const A = (te, pos, text, alt, k, tePos, extra) => Object.assign({ te, en: { pos, text }, alt: alt || [], k, tePos: tePos || "front" }, extra || {});
  const ADV = {
    "simple-present": [
      A("ప్రతి రోజు", "end", "every day", ["daily", "each day"], K(["every", "each", "daily"], ["day", "daily"])),
      A("ప్రతి ఉదయం", "end", "every morning", ["each morning", "in the morning", "every day in the morning"], K(["every", "each", "in"], ["morning"])),
      A("సాధారణంగా", "mid", "usually", ["generally", "normally", "typically", "mostly"], K(["usually", "generally", "normally", "typically", "mostly", "often"]), "mid"),
      A("ఎప్పుడూ", "mid", "always", ["constantly"], K(["always", "constantly"]), "mid"),
      A("వారానికి రెండుసార్లు", "end", "twice a week", ["two times a week", "twice every week", "twice weekly"], K(["twice", "two"], ["week", "weekly"])),
      A("ప్రతి ఆదివారం", "end", "every Sunday", ["on Sundays", "each Sunday", "on Sunday"], K(["sunday", "sundays"])),
      A("నెలకు ఒకసారి", "end", "once a month", ["every month", "once every month", "monthly"], K(["once", "every", "monthly"], ["month", "monthly"])),
      A("తరచుగా", "mid", "often", ["frequently", "regularly"], K(["often", "frequently", "regularly"]), "mid"),
    ],
    "present-continuous": [
      A("ఇప్పుడు", "end", "now", ["right now", "at the moment", "currently", "at present"], K(["now", "moment", "currently", "present", "presently"])),
      A("ప్రస్తుతం", "mid", "currently", ["at the moment", "right now", "now", "at present"], K(["now", "moment", "currently", "present", "presently"])),
      A("ఈ క్షణంలో", "end", "at this moment", ["right now", "now", "at the moment"], K(["now", "moment", "currently", "present"])),
      A("ఈ రోజుల్లో", "end", "these days", ["nowadays", "at present", "currently", "lately"], K(["days", "nowadays", "currently", "present", "lately", "now"])),
    ],
    "present-perfect": [
      A("ఇప్పటికే", "mid", "already", [], K(["already"]), "mid"),
      A("ఇప్పుడే", "mid", "just", [], K(["just"]), "mid"),
      A("ఇప్పటికి రెండుసార్లు", "end", "twice so far", ["two times so far", "twice already", "twice until now", "twice by now"], K(["twice", "two"]), "mid"),
      A("ఇప్పటికి మూడుసార్లు", "end", "three times so far", ["three times already", "three times until now", "three times by now"], K(["three", "3"], ["times"]), "mid"),
    ],
    "present-perfect-continuous": [
      A("ఉదయం నుండి", "end", "since morning", ["since the morning"], K(["since"], ["morning"])),
      A("సోమవారం నుండి", "end", "since Monday", [], K(["since"], ["monday"])),
      A("గత సంవత్సరం నుండి", "end", "since last year", [], K(["since"], ["last"], ["year"])),
      A("రెండు గంటలుగా", "end", "for two hours", ["for the last two hours", "for the past two hours"], K(["for"], ["two", "2"], ["hours", "hour"])),
      A("మూడు రోజులుగా", "end", "for three days", ["for the last three days", "for the past three days"], K(["for"], ["three", "3"], ["days", "day"])),
      A("ఐదు సంవత్సరాలుగా", "end", "for five years", ["for the last five years", "for the past five years"], K(["for"], ["five", "5"], ["years", "year"])),
      A("చాలా కాలంగా", "end", "for a long time", ["for a long while", "for ages"], K(["for"], ["long"], ["time", "while"])),
      A("రెండు వారాలుగా", "end", "for two weeks", ["for the last two weeks", "for the past two weeks"], K(["for"], ["two", "2"], ["weeks", "week"])),
    ],
    "simple-past": [
      A("నిన్న", "end", "yesterday", [], K(["yesterday"])),
      A("నిన్న సాయంత్రం", "end", "yesterday evening", ["last evening"], K(["yesterday", "last"], ["evening"])),
      A("గత వారం", "end", "last week", [], K(["last"], ["week"])),
      A("రెండు రోజుల క్రితం", "end", "two days ago", ["2 days ago"], K(["two", "2"], ["days"], ["ago"])),
      A("గత సంవత్సరం", "end", "last year", [], K(["last"], ["year"])),
      A("గత సోమవారం", "end", "last Monday", ["on Monday"], K(["monday"])),
      A("ఈ ఉదయం", "end", "this morning", [], K(["this"], ["morning"])),
      A("2020లో", "end", "in 2020", [], K(["2020"])),
    ],
    "past-continuous": [
      A("నిన్న ఈ సమయానికి", "front", "at this time yesterday", ["this time yesterday", "yesterday at this time", "yesterday at this hour"], K(["this"], ["time", "hour"], ["yesterday"])),
      A("నిన్న సాయంత్రం ఐదు గంటలకు", "front", "at five o'clock yesterday evening", ["at 5 yesterday evening", "at 5 pm yesterday", "at five yesterday evening", "yesterday evening at five", "at 5 o'clock yesterday evening"], K(["five", "5"], ["yesterday"], ["evening"])),
      A("నిన్న రాత్రి తొమ్మిది గంటలకు", "front", "at nine o'clock last night", ["at 9 last night", "at nine last night", "last night at nine", "at 9 o'clock last night"], K(["nine", "9"], ["night"])),
      A("గత ఆదివారం ఉదయం పది గంటలకు", "front", "at ten o'clock last Sunday morning", ["at 10 last Sunday morning", "at ten last Sunday morning", "last Sunday morning at ten", "at 10 o'clock last Sunday morning"], K(["ten", "10"], ["sunday"], ["morning"])),
      A("నిన్న మధ్యాహ్నం రెండు గంటలకు", "front", "at two o'clock yesterday afternoon", ["at 2 yesterday afternoon", "at two yesterday afternoon", "yesterday afternoon at two", "at 2 o'clock yesterday afternoon"], K(["two", "2"], ["afternoon"], ["yesterday"])),
    ],
    "past-perfect": [
      A("నిన్న ఉదయం ఎనిమిది గంటలకల్లా", "front", "by eight o'clock yesterday morning", ["by 8 yesterday morning", "by eight yesterday morning", "yesterday morning by eight", "by 8 o'clock yesterday morning"], K(["by"], ["eight", "8"], ["morning"], ["yesterday"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
      A("గత సోమవారానికల్లా", "front", "by last Monday", ["before last Monday"], K(["by", "before"], ["monday"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
      A("నిన్న సాయంత్రానికల్లా", "front", "by yesterday evening", ["by the evening yesterday", "before yesterday evening"], K(["by", "before"], ["yesterday"], ["evening"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
      A("నిన్న రాత్రి పది గంటలకల్లా", "front", "by ten o'clock last night", ["by 10 last night", "by ten last night", "by 10 o'clock last night"], K(["by"], ["ten", "10"], ["night"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
      A("గత సంవత్సరానికల్లా", "front", "by last year", ["before last year"], K(["by", "before"], ["last"], ["year"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
    ],
    "simple-future": [
      A("రేపు", "end", "tomorrow", [], K(["tomorrow"])),
      A("వచ్చే వారం", "end", "next week", [], K(["next"], ["week"])),
      A("వచ్చే నెల", "end", "next month", [], K(["next"], ["month"])),
      A("త్వరలో", "end", "soon", ["shortly", "in the near future", "before long"], K(["soon", "shortly", "future", "long"])),
      A("రేపు ఉదయం", "end", "tomorrow morning", [], K(["tomorrow"], ["morning"])),
      A("వచ్చే సంవత్సరం", "end", "next year", [], K(["next"], ["year"])),
      A("ఈ వారాంతంలో", "end", "this weekend", ["at the weekend", "over the weekend", "on the weekend"], K(["weekend", "week"])),
      A("వచ్చే ఆదివారం", "end", "next Sunday", ["on Sunday"], K(["sunday"])),
    ],
    "future-continuous": [
      A("రేపు ఈ సమయానికి", "front", "at this time tomorrow", ["this time tomorrow", "tomorrow at this time", "tomorrow at this hour"], K(["this"], ["time", "hour"], ["tomorrow"])),
      A("రేపు ఉదయం ఎనిమిది గంటలకు", "front", "at eight o'clock tomorrow morning", ["at 8 tomorrow morning", "tomorrow morning at eight", "at eight tomorrow morning", "at 8 o'clock tomorrow morning"], K(["eight", "8"], ["tomorrow"], ["morning"])),
      A("రేపు సాయంత్రం ఆరు గంటలకు", "front", "at six o'clock tomorrow evening", ["at 6 tomorrow evening", "tomorrow evening at six", "at six tomorrow evening", "at 6 o'clock tomorrow evening"], K(["six", "6"], ["tomorrow"], ["evening"])),
      A("వచ్చే వారం ఈ సమయానికి", "front", "at this time next week", ["this time next week", "next week at this time"], K(["this"], ["time", "hour"], ["next"], ["week"])),
      A("ఈ రాత్రి పది గంటలకు", "front", "at ten o'clock tonight", ["at 10 tonight", "tonight at ten", "at ten tonight", "at 10 o'clock tonight"], K(["ten", "10"], ["tonight", "night"])),
    ],
    "future-perfect": [
      A("రేపు సాయంత్రానికల్లా", "front", "by tomorrow evening", ["by the evening tomorrow", "before tomorrow evening"], K(["by", "before"], ["tomorrow"], ["evening"])),
      A("వచ్చే సోమవారానికల్లా", "front", "by next Monday", ["before next Monday"], K(["by", "before"], ["next"], ["monday"])),
      A("నెలాఖరుకల్లా", "front", "by the end of the month", ["by the end of this month", "by month end", "by the month end"], K(["by", "before"], ["end"], ["month"])),
      A("వచ్చే సంవత్సరానికల్లా", "front", "by next year", ["before next year"], K(["by", "before"], ["next"], ["year"])),
      A("ఈ వారాంతానికల్లా", "front", "by the end of this week", ["by this weekend", "by the weekend", "by the end of the week", "by the end of this weekend"], K(["by", "before"], ["weekend", "week"])),
      A("ఈ రాత్రి పది గంటలకల్లా", "front", "by ten o'clock tonight", ["by 10 tonight", "by ten tonight", "by 10 o'clock tonight"], K(["by"], ["ten", "10"], ["tonight", "night"])),
    ],
  };

  ADV["simple-present"].push(
    A("ప్రతి సాయంత్రం", "end", "every evening", ["each evening", "in the evening", "in the evenings"], K(["every", "each", "in"], ["evening", "evenings"])),
    A("అప్పుడప్పుడు", "mid", "sometimes", ["occasionally", "now and then", "from time to time"], K(["sometimes", "occasionally", "now", "time"]), "mid"),
    A("ప్రతి సంవత్సరం", "end", "every year", ["each year", "annually", "yearly"], K(["every", "each", "annually", "yearly"], ["year", "annually", "yearly"])),
    A("వారాంతాల్లో", "end", "at weekends", ["on weekends", "every weekend", "at the weekend", "on the weekend"], K(["weekend", "weekends"])),
    A("రోజూ సాయంత్రం ఆరు గంటలకు", "end", "at six o'clock every evening", ["every evening at six", "at 6 every evening", "at six every evening"], K(["six", "6"], ["evening"])));
  ADV["present-continuous"].push(
    A("ఈ వారం", "end", "this week", [], K(["this"], ["week"])),
    A("ఈ నెల", "end", "this month", [], K(["this"], ["month"])),
    A("ఈ రోజు", "end", "today", [], K(["today"])));
  ADV["present-perfect"].push(
    A("ఇటీవలే", "mid", "recently", ["lately", "just recently"], K(["recently", "lately"]), "mid"),
    A("ఈ సంవత్సరం", "end", "this year", [], K(["this"], ["year"])),
    A("ఈ వారం", "end", "this week", [], K(["this"], ["week"])),
    A("ఇప్పటికి చాలాసార్లు", "end", "many times so far", ["many times already", "several times", "many times"], K(["many", "several", "numerous"], ["times"]), "mid"));
  ADV["present-perfect-continuous"].push(
    A("గత నెల నుండి", "end", "since last month", [], K(["since"], ["last"], ["month"])),
    A("గత వారం నుండి", "end", "since last week", [], K(["since"], ["last"], ["week"])),
    A("2023 నుండి", "end", "since 2023", [], K(["since"], ["2023"])),
    A("ఆరు నెలలుగా", "end", "for six months", ["for the last six months", "for the past six months"], K(["for"], ["six", "6"], ["months", "month"])),
    A("ఉదయం ఆరు గంటల నుండి", "end", "since six o'clock this morning", ["since 6 this morning", "since six this morning", "since 6 am", "since six in the morning"], K(["since"], ["six", "6"])));
  ADV["simple-past"].push(
    A("నిన్న రాత్రి", "end", "last night", ["yesterday night"], K(["last", "yesterday"], ["night"])),
    A("గత నెల", "end", "last month", [], K(["last"], ["month"])),
    A("మూడు సంవత్సరాల క్రితం", "end", "three years ago", ["3 years ago"], K(["three", "3"], ["years"], ["ago"])),
    A("కొద్దిసేపటి క్రితం", "end", "a little while ago", ["a short while ago", "a while ago", "some time ago", "a few minutes ago"], K(["while", "time", "minutes"], ["ago"])),
    A("గత ఆదివారం", "end", "last Sunday", ["on Sunday"], K(["sunday"])));
  ADV["past-continuous"].push(
    A("నిన్న ఉదయం ఏడు గంటలకు", "front", "at seven o'clock yesterday morning", ["at 7 yesterday morning", "at seven yesterday morning", "yesterday morning at seven", "at 7 o'clock yesterday morning", "at 7 am yesterday"], K(["seven", "7"], ["yesterday"], ["morning", "am"])),
    A("నిన్న రాత్రి పదకొండు గంటలకు", "front", "at eleven o'clock last night", ["at 11 last night", "at eleven last night", "last night at eleven", "at 11 o'clock last night", "at 11 pm yesterday"], K(["eleven", "11"], ["night", "pm"])),
    A("ఫోన్ మోగినప్పుడు", "front", "when the phone rang", ["when the phone was ringing"], K(["phone"], ["rang", "ring", "ringing"])),
    A("అమ్మ పిలిచినప్పుడు", "front", "when my mother called", ["when mother called", "when mom called", "when amma called", "when my mom called"], K(["mother", "mom", "amma", "mum"], ["called", "call"])));
  ADV["past-perfect"].push(
    A("గత నెలాఖరుకల్లా", "front", "by the end of last month", ["before the end of last month"], K(["by", "before"], ["end"], ["last"], ["month"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
    A("నిన్న మధ్యాహ్నానికల్లా", "front", "by yesterday afternoon", ["before yesterday afternoon"], K(["by", "before"], ["yesterday"], ["afternoon"]), "front", { teMid: "అప్పటికే", enMid: "already" }),
    A("మేము వచ్చేసరికి", "front", "by the time we arrived", ["when we arrived", "before we arrived", "by the time we came", "when we came"], K(["we"], ["arrived", "came", "reached", "got"]), "front", { teMid: "అప్పటికే", enMid: "already", notFor: ["1p"] }));
  ADV["simple-future"].push(
    A("రేపు సాయంత్రం", "end", "tomorrow evening", [], K(["tomorrow"], ["evening"])),
    A("ఈ రోజు రాత్రి", "end", "tonight", ["this evening"], K(["tonight", "night", "evening"])),
    A("రెండు రోజుల్లో", "end", "in two days", ["in 2 days", "within two days", "in two days' time"], K(["two", "2"], ["days"])),
    A("వచ్చే సోమవారం", "end", "next Monday", ["on Monday"], K(["monday"])));
  ADV["future-continuous"].push(
    A("వచ్చే ఆదివారం ఈ సమయానికి", "front", "at this time next Sunday", ["this time next Sunday", "next Sunday at this time"], K(["this"], ["time", "hour"], ["sunday"])),
    A("రేపు మధ్యాహ్నం మూడు గంటలకు", "front", "at three o'clock tomorrow afternoon", ["at 3 tomorrow afternoon", "tomorrow afternoon at three", "at three tomorrow afternoon", "at 3 o'clock tomorrow afternoon", "at 3 pm tomorrow"], K(["three", "3"], ["tomorrow"], ["afternoon", "pm"])));
  ADV["future-perfect"].push(
    A("రేపు ఉదయానికల్లా", "front", "by tomorrow morning", ["before tomorrow morning"], K(["by", "before"], ["tomorrow"], ["morning"])),
    A("వచ్చే నెలాఖరుకల్లా", "front", "by the end of next month", ["before the end of next month"], K(["by", "before"], ["end"], ["next"], ["month"])),
    A("డిసెంబర్ నాటికి", "front", "by December", ["before December", "by the end of December"], K(["by", "before"], ["december"])),
    A("మీరు వచ్చేసరికి", "front", "by the time you arrive", ["by the time you come", "before you arrive", "before you come", "when you arrive"], K(["you"], ["arrive", "come", "reach", "get"]), "front", { notFor: ["2"] }));
  ADV["present-perfect-continuous-dur"] = ADV["present-perfect-continuous"];
  // past perfect continuous: anchor clause + duration
  const PPC_ANCHORS = [
    { te: "వర్షం మొదలయ్యేసరికి", en: "when the rain started", alt: ["by the time the rain started", "when it started raining", "when it started to rain", "when the rain began"], k: K(["rain"], ["start", "started", "begin", "began", "begun"]) },
    { te: "రైలు వచ్చేసరికి", en: "when the train arrived", alt: ["by the time the train arrived", "when the train came", "when the train pulled in"], k: K(["train"], ["arrive", "arrived", "came", "come", "reached"]) },
    { te: "అతిథులు వచ్చేసరికి", en: "when the guests arrived", alt: ["by the time the guests arrived", "when the guests came", "when the visitors arrived"], k: K(["guest", "guests", "visitors"], ["arrive", "arrived", "came", "come"]) },
    { te: "మ్యాచ్ మొదలయ్యేసరికి", en: "when the match started", alt: ["by the time the match started", "when the match began", "when the game started"], k: K(["match", "game"], ["start", "started", "begin", "began"]) },
    { te: "ఫోన్ మోగేసరికి", en: "when the phone rang", alt: ["by the time the phone rang", "when the phone started ringing"], k: K(["phone"], ["ring", "rang", "ringing", "rung"]) },
    { te: "బస్సు వచ్చేసరికి", en: "when the bus arrived", alt: ["by the time the bus arrived", "when the bus came"], k: K(["bus"], ["arrive", "arrived", "came", "come"]) },
  ];
  const PPC_ANCHORS_ORG = [
    { te: "ఎన్నికలు వచ్చేసరికి", en: "when the elections came", alt: ["by the time the elections came", "when the elections arrived", "by the time of the elections"], k: K(["election", "elections"]) },
    { te: "వర్షాకాలం మొదలయ్యేసరికి", en: "when the monsoon began", alt: ["by the time the monsoon began", "when the monsoon started", "when the rainy season began"], k: K(["monsoon", "rainy"], ["began", "begin", "started", "start", "came", "arrived"]) },
    { te: "కొత్త సంవత్సరం వచ్చేసరికి", en: "when the new year began", alt: ["by the time the new year began", "when the new year came", "by the new year"], k: K(["new"], ["year"]) },
    { te: "పండుగ సీజన్ మొదలయ్యేసరికి", en: "when the festival season began", alt: ["by the time the festival season began", "when the festive season started"], k: K(["festival", "festive"], ["season"]) },
  ];
  const PPC_DURS_ORG = [
    { te: "ఆరు నెలలుగా", en: "for six months", alt: ["for the last six months"], k: K(["for"], ["six", "6"], ["months", "month"]) },
    { te: "రెండు సంవత్సరాలుగా", en: "for two years", alt: ["for the last two years"], k: K(["for"], ["two", "2"], ["years", "year"]) },
    { te: "మూడు నెలలుగా", en: "for three months", alt: ["for the last three months"], k: K(["for"], ["three", "3"], ["months", "month"]) },
    { te: "చాలా కాలంగా", en: "for a long time", alt: ["for ages"], k: K(["for"], ["long"], ["time", "while"]) },
  ];
  const PPC_DURS = [
    { te: "రెండు గంటలుగా", en: "for two hours", alt: ["for the last two hours"], k: K(["for"], ["two", "2"], ["hours", "hour"]) },
    { te: "ఒక గంట నుండి", en: "for an hour", alt: ["for one hour", "for about an hour"], k: K(["for", "since"], ["hour", "one", "an"]) },
    { te: "మూడు గంటలుగా", en: "for three hours", alt: ["for the last three hours"], k: K(["for"], ["three", "3"], ["hours", "hour"]) },
    { te: "అరగంట నుండి", en: "for half an hour", alt: ["for thirty minutes", "for 30 minutes", "for half hour"], k: K(["for", "since"], ["half", "thirty", "30"]) },
    { te: "ఉదయం నుండి", en: "since morning", alt: ["since the morning"], k: K(["since"], ["morning"]) },
  ];
  const FPC_COMBOS = [
    { te: "రేపు సాయంత్రానికి", en: "by tomorrow evening", alt: ["before tomorrow evening"], k: K(["by", "before"], ["tomorrow"], ["evening"]), dur: { te: "మూడు గంటలు", en: "for three hours", k: K(["three", "3"], ["hours", "hour"]) } },
    { te: "వచ్చే వారానికి", en: "by next week", alt: ["before next week"], k: K(["by", "before"], ["next"], ["week"]), dur: { te: "పది రోజులు", en: "for ten days", k: K(["ten", "10"], ["days"]) } },
    { te: "వచ్చే నెలకు", en: "by next month", alt: ["before next month"], k: K(["by", "before"], ["next"], ["month"]), dur: { te: "ఆరు నెలలు", en: "for six months", k: K(["six", "6"], ["months"]) } },
    { te: "వచ్చే సంవత్సరానికి", en: "by next year", alt: ["before next year"], k: K(["by", "before"], ["next"], ["year"]), dur: { te: "ఐదు సంవత్సరాలు", en: "for five years", k: K(["five", "5"], ["years"]) } },
    { te: "వచ్చే నెలకు", en: "by next month", alt: ["before next month"], k: K(["by", "before"], ["next"], ["month"]), dur: { te: "రెండు సంవత్సరాలు", en: "for two years", k: K(["two", "2"], ["years"]) } },
    { te: "ఈ వారాంతానికి", en: "by this weekend", alt: ["by the weekend", "by the end of this week"], k: K(["by", "before"], ["weekend", "week"]), dur: { te: "నాలుగు రోజులు", en: "for four days", k: K(["four", "4"], ["days"]) } },
  ];


  PPC_ANCHORS.push(
    { te: "అమ్మ పిలిచేసరికి", en: "when my mother called", alt: ["by the time my mother called", "when mom called", "when mother called", "when amma called"], k: K(["mother", "mom", "amma", "mum"], ["called", "call", "came"]) },
    { te: "కరెంటు పోయేసరికి", en: "when the power went off", alt: ["by the time the power went off", "when the power went out", "when the electricity went off", "when the current went off", "when there was a power cut"], k: K(["power", "electricity", "current", "light", "lights"], ["went", "off", "out", "cut", "failed"]) },
    { te: "చీకటి పడేసరికి", en: "when it got dark", alt: ["by the time it got dark", "when it became dark", "when darkness fell"], k: K(["dark", "darkness"]) });
  PPC_DURS.push(
    { te: "నాలుగు గంటలుగా", en: "for four hours", alt: ["for the last four hours"], k: K(["for"], ["four", "4"], ["hours", "hour"]) },
    { te: "నలభై నిమిషాలుగా", en: "for forty minutes", alt: ["for 40 minutes"], k: K(["for"], ["forty", "40"], ["minutes", "minute"]) });
  FPC_COMBOS.push(
    { te: "ఈ డిసెంబర్‌కు", en: "by this December", alt: ["by December"], k: K(["by", "before"], ["december"]), dur: { te: "మూడు సంవత్సరాలు", en: "for three years", k: K(["three", "3"], ["years"]) } },
    { te: "వచ్చే జూన్‌కు", en: "by next June", alt: ["by June"], k: K(["by", "before"], ["june"]), dur: { te: "ఒక సంవత్సరం", en: "for a year", k: K(["year"]) } },
    { te: "ఈ సాయంత్రానికి", en: "by this evening", alt: ["by evening", "by tonight"], k: K(["by", "before"], ["evening", "tonight"]), dur: { te: "ఆరు గంటలు", en: "for six hours", k: K(["six", "6"], ["hours"]) } });

  // ---------- helpers ----------
  const rnd = (n) => Math.floor(Math.random() * n);
  const pick = (a) => a[rnd(a.length)];
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = rnd(i + 1); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function isCont(t) { return /continuous/.test(t); }
  function needsDur(t) { return t === "present-perfect-continuous" || t === "past-perfect-continuous" || t === "future-perfect-continuous"; }

  function expandWho(dom, who) {
    const out = [];
    who.forEach((w) => {
      if (w === "P") P_KEYS.forEach((k) => out.push({ key: k, s: PERSONAL[k] }));
      else if (PERSONAL[w] && !dom.subj[w]) out.push({ key: w, s: PERSONAL[w] });
      else if (dom.subj[w]) out.push({ key: w, s: dom.subj[w] });
    });
    const seen = new Set();
    return out.filter((o) => (seen.has(o.key) ? false : (seen.add(o.key), true)));
  }
  function verbForms(vp) { return EN.forms(vp.e); }

  // ---------- Telugu + English sentence assembly ----------
  // subject: {key, s}; vp; tense; adv (variant chosen); returns spec
  function build(dom, vp, subjOpt, tense, chosen) {
    const s = vp.fs ? Object.assign({ te: "", dat: "" }, vp.fs) : subjOpt.s;
    const f = verbForms(vp);
    const tp = s.tp;
    const extra = chosen.extra || null;
    const tailEn = [vp.t, extra ? extra.en : ""].filter(Boolean).join(" ");
    const objTe = [extra ? extra.te : "", vp.te].filter(Boolean).join(" ");
    let en = { tense, subjectEn: s.en, person: s.p, verb: f, tail: tailEn, adv: null, lead: null };
    const groups = []; // {te,en,w:[...],kind}
    const addGroup = (kind, te, enLabel, w) => groups.push({ kind, te, en: enLabel, w });
    let te = "";
    const subjTe = vp.fs ? "" : s.te;
    const mk = (kind) => kind;
    let alts = []; // accepted alternative strings for adverb (for suggestions)

    if (tense === "past-perfect-continuous") {
      const anc = chosen.anchor, dur = chosen.dur;
      te = [anc.te, subjTe, dur.te, objTe, tel(vp.v, tp, "tuBe")].filter(Boolean).join(" ");
      en.lead = anc.en; en.adv = { pos: "end", text: dur.en };
      addGroup("time", anc.te, anc.en, anc.k);
      addGroup("time", dur.te, dur.en, dur.k);
      alts = anc.alt.concat(dur.alt || []);
    } else if (tense === "future-perfect-continuous") {
      const c = chosen.combo;
      te = [c.te, objTe, tel(vp.v, tp, "tuPtc"), s.dat, c.dur.te, "అవుతుంది"].filter(Boolean).join(" ");
      en.adv = { pos: "front", text: c.en }; en.tail = tailEn + (tailEn ? " " : "") + c.dur.en; en.adv2 = c.dur.en;
      addGroup("time", c.te, c.en, c.k);
      addGroup("time", c.dur.te + " అవుతుంది", c.dur.en, c.dur.k);
      alts = c.alt;
    } else {
      const a = chosen.adv;
      const verbKind = { "simple-present": "hab", "present-continuous": "cont", "present-perfect": "past", "present-perfect-continuous": "cont", "simple-past": "past", "past-continuous": "tuBe", "past-perfect": "past", "simple-future": "hab", "future-continuous": "tuFut", "future-perfect": "ppFut" }[tense];
      const front = a.tePos !== "mid" ? a.te : "";
      const mid = a.tePos === "mid" ? a.te : "";
      te = [front, subjTe, mid, a.teMid || "", objTe, tel(vp.v, tp, verbKind)].filter(Boolean).join(" ");
      en.adv = a.en;
      addGroup("time", a.te, a.en.text, a.k.reduce((x, y) => x.concat([y]), []));
      alts = a.alt;
      if (a.enMid) en.advMid = a.enMid;
    }
    // subject / verb / object groups
    if (!vp.fs) addGroup("subject", s.te, s.en, [s.keys]);
    else addGroup("subject", vp.te, s.en, [s.keys]);
    addGroup("verb", TV[vp.v].l, vp.e, [vp.k[0]]);
    vp.k.slice(1).forEach((g) => addGroup("object", vp.te, g[0], [g]));
    if (extra) addGroup("detail", extra.te, extra.en, extra.k);

    // group array: convert to analyzer format {kind, te, en, groups:[[words]...]} — keep each group as own requirement
    const req = [];
    groups.forEach((g) => {
      g.w.forEach((wordsArr, idx) => req.push({ kind: g.kind, te: g.te, en: g.en, words: wordsArr }));
    });

    return { te, en, s, vp, f, tense, req, advAlts: alts, tp, dom: dom.id, tailEn, extra };
  }

  function realizeSpec(sp, override) {
    const e = Object.assign({}, sp.en, override || {});
    const spec = { tense: e.tense, subjectEn: e.subjectEn, person: e.person, verb: e.verb, tail: e.tail, adv: e.adv, lead: e.lead, midWord: e.advMid || null };
    if (e.tense === "future-perfect-continuous") {
      // "By next month, X will have been V-ing <object> for two years."
      spec.tail = sp.tailEn; spec.after = e.adv2;
    }
    return EN.realize(spec);
  }

  const LONG_RANGE = new Set(["గత సంవత్సరం", "2020లో", "మూడు సంవత్సరాల క్రితం", "గత సంవత్సరానికల్లా", "వచ్చే సంవత్సరం", "వచ్చే సంవత్సరానికల్లా", "డిసెంబర్ నాటికి", "ఈ సంవత్సరం", "ప్రతి సంవత్సరం"]);
  function isOrg(subj) { return !!(subj && subj.org); }
  function chooseAdverb(tense, vp, subj) {
    if (tense === "past-perfect-continuous") return isOrg(subj) ? { anchor: pick(PPC_ANCHORS_ORG), dur: pick(PPC_DURS_ORG) } : { anchor: pick(PPC_ANCHORS), dur: pick(PPC_DURS) };
    if (tense === "future-perfect-continuous") { const c = FPC_COMBOS.filter((x) => !(vp && vp.h && /hours?|minutes?/.test(x.dur.en))); return { combo: pick(c.length ? c : FPC_COMBOS) }; }
    const list = ADV[tense].filter((a) => !(a.notFor && subj && a.notFor.indexOf(subj.tp) >= 0) && !(vp && vp.s && LONG_RANGE.has(a.te)) && !(vp && vp.h && /hours?|minutes?|since morning|since the morning|o'clock/.test(a.en.text)));
    return { adv: pick(list.length ? list : ADV[tense]) };
  }
  // uniqueness is tracked on the Telugu text itself (short hash), so the same Telugu sentence never comes back
  function teKey(te) { let h = 5381; for (let i = 0; i < te.length; i++) h = ((h << 5) + h + te.charCodeAt(i)) | 0; return "t" + (h >>> 0).toString(36) + te.length.toString(36); }
  function keyOf(dom, vpIdx, subjKey, tense, chosen) {
    const c = chosen.adv ? chosen.adv.te : chosen.anchor ? chosen.anchor.te + "|" + chosen.dur.te : chosen.combo.te + "|" + chosen.combo.dur.te;
    return [dom.id, vpIdx, subjKey, tense, c, chosen.extra ? chosen.extra.id : ""].join("~");
  }

  // ---------- alternates ----------
  function contraction(sp, main) {
    const map = [[/^I am /, "I'm "], [/^([Hh]e|[Ss]he|[Ii]t) is /, "$1's "], [/^([Ww]e|[Tt]hey|[Yy]ou) are /, "$1're "], [/^([Hh]e|[Ss]he|[Ii]t) has /, "$1's "], [/^(I|[Ww]e|[Tt]hey|[Yy]ou) have /, "$1've "], [/^(I|[Hh]e|[Ss]he|[Ii]t|[Ww]e|[Tt]hey|[Yy]ou) will /, "$1'll "], [/^(I|[Hh]e|[Ss]he|[Ii]t|[Ww]e|[Tt]hey|[Yy]ou) had /, "$1'd "]];
    for (const [re, rep] of map) if (re.test(main)) return main.replace(re, rep);
    return null;
  }
  function altPhrasings(sp) {
    const out = [];
    const t = sp.tense, f = sp.f, e = sp.en, pron = /^(I|we|he|she|they|you)$/i.test(e.subjectEn);
    const base = realizeSpec(sp);
    const add = (text, note) => { if (text && text !== base && !out.some((o) => o.text === text)) out.push({ text, note }); };
    const subj = e.subjectEn;
    const lower = (s) => s;
    // adverb placement swap
    if (e.adv && typeof e.adv === "object" && e.adv.pos && t !== "past-perfect-continuous" && t !== "future-perfect-continuous" && !e.advMid) {
      if (e.adv.pos === "end") add(realizeSpec(sp, { adv: { pos: "front", text: e.adv.text } }), "Fronting the time phrase (with a comma) is the more written / formal style.");
      else if (e.adv.pos === "front") add(realizeSpec(sp, { adv: { pos: "end", text: e.adv.text } }), "Moving the time phrase to the end sounds more relaxed and conversational.");
      else if (e.adv.pos === "mid") add(realizeSpec(sp, { adv: { pos: "end", text: e.adv.text } }), "This adverb can also sit at the end of the sentence.");
    }
    // stated alternates for the adverb text
    if (sp.advAlts && sp.advAlts.length && e.adv && e.adv.text && t !== "past-perfect-continuous" && t !== "future-perfect-continuous") {
      const a = sp.advAlts[0];
      add(realizeSpec(sp, { adv: { pos: e.adv.pos === "mid" ? "end" : e.adv.pos, text: a } }), `Same meaning with a different time expression: "${a}".`);
    }
    if (t === "past-perfect-continuous" && sp.advAlts.length) {
      add(realizeSpec(sp, { lead: sp.advAlts[0] }), `Alternative clause: "${sp.advAlts[0]}".`);
      const g = EN.verbGroup(t, e.person, f);
      add(EN.cap(subj) + " " + g.aux.concat([g.main]).join(" ") + (e.tail ? " " + e.tail : "") + " " + e.adv.text + " " + e.lead + ".", "Putting the 'when …' clause at the end removes the comma and reads more smoothly.");
    }
    if (t === "future-perfect-continuous") {
      const g = EN.verbGroup(t, e.person, f);
      add(EN.cap(subj) + " " + g.aux.concat([g.main]).join(" ") + (sp.tailEn ? " " + sp.tailEn : "") + " " + e.adv2 + " " + e.adv.text + ".", "Moving 'by …' to the end is also natural.");
      if (/^for /.test(e.adv2)) add(EN.cap(e.adv.text) + ", " + lower(subj) + " " + (subj === "I" ? "will have spent " : "will have spent ") + e.adv2.replace(/^for /, "") + " " + EN.forms(sp.vp.e).ing + (sp.tailEn ? " " + sp.tailEn : "") + ".", "'Spend + time + V-ing' is a neat alternative to the perfect continuous.");
    }
    // synonym verb
    if (sp.vp.sy) {
      const f2 = EN.forms(sp.vp.sy);
      const spec2 = { tense: t, subjectEn: e.subjectEn, person: e.person, verb: f2, tail: e.tail, adv: e.adv && e.adv.pos ? e.adv : null, lead: e.lead };
      let txt;
      if (t === "future-perfect-continuous" || e.advMid) txt = null;
      else txt = EN.realize(spec2);
      if (txt) add(txt, `A synonym: "${sp.vp.sy}" instead of "${sp.vp.e}" — same tense, fresher vocabulary.`);
    }
    // contraction
    if (pron || /^(I|we|he|she|they|you)/i.test(subj)) {
      const c = contraction(sp, base);
      if (c) add(c, "Contracted form — natural in speech and informal writing.");
    }
    // tense specific
    const ingf = f.ing;
    const tailS = e.tail ? " " + e.tail : "";
    const advEnd = e.adv && e.adv.text && e.adv.pos !== "mid" ? " " + e.adv.text : "";
    switch (t) {
      case "simple-present":
        if (e.adv && e.adv.text && /every|twice|once|daily/.test(e.adv.text)) add(EN.cap(subj) + " " + EN.beForm(e.person, false) + " in the habit of " + ingf + tailS + advEnd + ".", "'Be in the habit of …ing' stresses that it is a habit.");
        break;
      case "present-continuous":
        add(EN.cap(subj) + " " + EN.beForm(e.person, false) + " busy " + ingf + tailS + (e.adv && e.adv.text && e.adv.pos !== "mid" ? " " + e.adv.text : "") + ".", "'Be busy + V-ing' emphasises that the person is occupied with it right now.");
        break;
      case "present-perfect":
        if (e.adv && (e.adv.text === "already" || e.adv.text === "just")) add(EN.cap(subj) + " " + e.adv.text + " " + f.past[0] + tailS + ".", "Everyday American English often uses the simple past with already/just; British and exam English prefer the present perfect.");
        break;
      case "present-perfect-continuous":
        if (e.adv && /^for /.test(e.adv.text)) add(EN.cap(subj) + " " + EN.haveForm(e.person) + " spent " + e.adv.text.replace(/^for /, "") + " " + ingf + tailS + ".", "'Spend + time + V-ing' is a natural way to express the duration.");
        if (e.adv && /^for (two|three|five) /.test(e.adv.text)) add(EN.cap(subj) + " started " + ingf + tailS + " " + e.adv.text.replace(/^for /, "") + " ago and " + (e.person === "3sg" ? "is" : e.person === "1sg" ? "am" : "are") + " still at it.", "Two-part rephrase: says when it started, then that it is still going on.");
        break;
      case "simple-past":
        if (e.adv && e.adv.pos === "end" && /^(yesterday|last|this morning|two days ago|in )/.test(e.adv.text)) add("It was " + e.adv.text + " that " + lower(subj) + " " + f.past[0] + tailS + ".", "A cleft sentence ('It was … that …') puts extra emphasis on the time.");
        break;
      case "past-continuous":
        add(EN.cap(e.adv.text) + ", " + lower(subj) + " " + EN.beForm(e.person, true) + " busy " + ingf + tailS + ".", "'Be busy + V-ing' — the person was occupied with it at that moment.");
        break;
      case "past-perfect":
        add(EN.cap(subj) + " had" + (e.advMid ? " " + e.advMid : "") + " " + f.pp[0] + tailS + " " + e.adv.text + ".", "The 'by …' phrase can close the sentence.");
        break;
      case "simple-future":
        add(EN.cap(subj) + " " + EN.beForm(e.person, false) + " going to " + f.base + tailS + advEnd + ".", "'Be going to' — used for plans and intentions already decided (more spoken).");
        if (pron) add(EN.cap(subj) + "'ll " + f.base + tailS + advEnd + ".", "Contracted 'll — common in speech.");
        break;
      case "future-continuous":
        add(EN.cap(e.adv.text) + ", " + lower(subj) + " will be busy " + ingf + tailS + ".", "'Will be busy + V-ing' focuses on being occupied at that time.");
        break;
      case "future-perfect":
        add(EN.cap(subj) + " will have" + (e.advMid ? " " + e.advMid : "") + " " + f.pp[0] + tailS + " " + e.adv.text + ".", "The 'by …' phrase can also come at the end.");
        break;
    }
    return out.slice(0, 5);
  }

  // ---------- generation ----------
  function seenSet() {
    try { return new Set(JSON.parse(localStorage.getItem("tlSeenV1") || "[]")); } catch (e) { return new Set(); }
  }
  function saveSeen(set) {
    try { const arr = Array.from(set); localStorage.setItem("tlSeenV1", JSON.stringify(arr.slice(-6000))); } catch (e) { /* ignore */ }
  }
  function domainById(id) { return DOMAINS.find((d) => d.id === id); }

  // one sentence
  function sentence(opts) {
    opts = opts || {};
    const seen = opts.seen || new Set();
    const tenses = opts.tense && opts.tense !== "mixed" ? [opts.tense] : null;
    for (let attempt = 0; attempt < 200; attempt++) {
      const dom = opts.domain && opts.domain !== "any" ? domainById(opts.domain) : pick(DOMAINS);
      const tense = tenses ? tenses[0] : pick(EN.TENSES).id;
      const vpIdx = opts.vpIdx != null && attempt === 0 ? opts.vpIdx : rnd(dom.vps.length);
      const vp = dom.vps[vpIdx];
      if (!okFor(vp, tense)) continue;
      let subjOpt;
      if (vp.fs) subjOpt = { key: "fs", s: vp.fs };
      else {
        const list = expandWho(dom, vp.who);
        if (opts.subjKey) { const m = list.find((x) => x.key === opts.subjKey); subjOpt = m || pick(list); }
        else subjOpt = pick(list);
      }
      const chosen = chooseAdverb(tense, vp, subjOpt.s);
      chosen.extra = chooseExtra(dom, vp, subjOpt.s);
      const sp = build(dom, vp, subjOpt, tense, chosen);
      const key = teKey(sp.te);
      if (seen.has(key) && !opts.allowRepeat) continue;
      sp.key = key;
      sp.refText = realizeSpec(sp);
      sp.alts = altPhrasings(sp);
      // every reference variant the learner may legitimately give
      sp.refs = [sp.refText].concat(sp.alts.map((a) => a.text));
      sp.domainName = dom.name;
      return sp;
    }
    return null;
  }

  // sets: layout 'short' (2–3), 'para' (4–6), 'long' (2–3 paragraphs)
  const STORY = [
    ["simple-present", "present-continuous", "present-perfect"],
    ["simple-past", "past-continuous", "past-perfect"],
    ["present-perfect-continuous", "simple-present", "simple-future"],
    ["simple-past", "present-perfect", "simple-future"],
    ["simple-past", "past-perfect-continuous", "present-perfect"],
    ["simple-future", "future-continuous", "future-perfect"],
    ["present-continuous", "present-perfect-continuous", "simple-future"],
    ["past-perfect", "simple-past", "present-perfect"],
    ["simple-present", "simple-past", "simple-future"],
    ["future-perfect-continuous", "simple-future", "future-continuous"],
  ];
  function tensePoolOf(sel) {
    if (!sel || sel === "mixed") return null;
    if (sel.indexOf("group:") === 0) { const g = sel.slice(6); return EN.TENSES.filter((t) => t.group === g).map((t) => t.id); }
    return [sel];
  }
  function tenseSequence(sel, count) {
    const pool = tensePoolOf(sel);
    const seq = [];
    if (!pool) { const story = pick(STORY); for (let i = 0; i < count; i++) seq.push(story[i % story.length]); return seq; }
    if (pool.length === 1) { for (let i = 0; i < count; i++) seq.push(pool[0]); return seq; }
    let bag = [];
    for (let i = 0; i < count; i++) {
      if (!bag.length) bag = shuffle(pool);
      let t = bag.shift();
      if (seq.length && t === seq[seq.length - 1] && bag.length) { bag.push(t); t = bag.shift(); }
      seq.push(t);
    }
    return seq;
  }
  function advTag(chosen) { return chosen.adv ? chosen.adv.te : chosen.anchor ? chosen.anchor.te : chosen.combo ? chosen.combo.te : ""; }

  // one paragraph: one topic, one main character where possible, a different action in every sentence
  function okFor(vp, tense) {
    if (vp.o && tense === "simple-present") return false;
    if (vp.h && tense === "past-perfect-continuous") return false;
    if (needsDur(tense) && !vp.d) return false;
    if (vp.n && isCont(tense)) return false;
    if (vp.fs && (tense === "future-perfect-continuous" || (vp.e === "rain" && tense === "past-perfect-continuous"))) return false;
    return true;
  }
  const PRONOUN = {
    "3m": { te: "అతను", en: "he", p: "3sg", tp: "3m", dat: "అతనికి" },
    "3f": { te: "ఆమె", en: "she", p: "3sg", tp: "3f", dat: "ఆమెకు" },
    "3h": { te: "వాళ్ళు", en: "they", p: "3pl", tp: "3h", dat: "వాళ్ళకు" },
  };
  // after the first mention, a named person can become he / she / they — as in real writing
  function pronounFor(s) {
    if (!s || s.org || !PRONOUN[s.tp] || /^(he|she|they)$/i.test(s.en)) return null;
    const pr = PRONOUN[s.tp];
    return Object.assign({}, pr, { keys: [pr.en].concat(s.keys || []), pron: true, of: s.en });
  }
  function loadRecent() { try { return JSON.parse(localStorage.getItem("tlRecentV1") || "null") || { doms: [], vps: [] }; } catch (e) { return { doms: [], vps: [] }; } }
  function saveRecent(r) { try { localStorage.setItem("tlRecentV1", JSON.stringify({ doms: r.doms.slice(-5), vps: r.vps.slice(-150) })); } catch (e) { /* ignore */ } }
  function finish(sp, dom, key) {
    sp.key = key; sp.refText = realizeSpec(sp); sp.alts = altPhrasings(sp); sp.refs = [sp.refText].concat(sp.alts.map((a) => a.text)); sp.domainName = dom.name;
    return sp;
  }

  // one paragraph: one topic, a main character (with pronouns after the first mention), a different action and time phrase in every sentence
  function paragraph(opts, count, seen, used) {
    const tenseSeq = tenseSequence(opts.tense, count);
    let dom;
    if (opts.domain && opts.domain !== "any") dom = domainById(opts.domain);
    else {
      const fits = (d) => d.vps.filter((vp, i) => !used.vps.has(d.id + ":" + i) && tenseSeq.every((t) => okFor(vp, t))).length >= count;
      const tiers = [
        DOMAINS.filter((d) => !used.domains.has(d.id) && !used.recentDoms.has(d.id) && fits(d)),
        DOMAINS.filter((d) => !used.domains.has(d.id) && fits(d)),
        DOMAINS.filter(fits),
        DOMAINS,
      ];
      dom = pick(tiers.find((t) => t.length));
    }
    used.domains.add(dom.id);
    const protKey = pick(["he", "she", "ravi", "seetha", "they", "I", "we", "ramu", "lakshmi", "venu", "anitha", "madhavi", "kiran", "priya", "suresh", "kavitha", "arjun", "divya"]);
    // fresh actions first, recently practised ones last
    const shuffled = shuffle(dom.vps.map((_, i) => i));
    const order = shuffled.filter((i) => !used.recentVps.has(dom.id + ":" + i)).concat(shuffled.filter((i) => used.recentVps.has(dom.id + ":" + i)));
    const out = [];
    const extrasUsed = new Set();
    let protagonist = null; // {key, s} of the first main character
    let oi = 0, guard = 0;
    while (out.length < count && guard++ < 400) {
      const tense = tenseSeq[out.length];
      const vpIdx = order[oi % order.length]; oi++;
      const vp = dom.vps[vpIdx];
      const loose = oi > order.length * 2;
      if (used.vps.has(dom.id + ":" + vpIdx) && !(loose && out.every((x) => x.vp !== vp))) continue;
      if (!okFor(vp, tense)) continue;
      let subjOpt;
      if (vp.fs) subjOpt = { key: "fs", s: vp.fs };
      else {
        const allowed = expandWho(dom, vp.who);
        const wantKey = protagonist ? protagonist.key : protKey;
        const m = allowed.find((x) => x.key === wantKey);
        const others = allowed.filter((x) => x.key !== wantKey);
        if (m && (Math.random() > 0.25 || !others.length || !protagonist)) subjOpt = m;
        else if (!m && oi <= order.length && !protagonist) continue;
        else subjOpt = pick(others.length ? others : allowed);
        if (!protagonist && subjOpt) protagonist = subjOpt;
        // pronoun instead of repeating the same name
        if (protagonist && subjOpt.key === protagonist.key && out.some((x) => x.subjKey === subjOpt.key) && Math.random() < 0.6) {
          const pr = pronounFor(subjOpt.s);
          if (pr) subjOpt = { key: subjOpt.key, s: pr };
        }
      }
      let chosen = null;
      for (let k = 0; k < 8; k++) { const c = chooseAdverb(tense, vp, subjOpt.s); if (!used.advs.has(advTag(c))) { chosen = c; break; } }
      if (!chosen) chosen = chooseAdverb(tense, vp, subjOpt.s);
      chosen.extra = chooseExtra(dom, vp, subjOpt.s, extrasUsed);
      const built = build(dom, vp, subjOpt, tense, chosen);
      const key = teKey(built.te);
      if (seen.has(key) || used.te.has(key)) continue;
      used.te.add(key);
      const sp = finish(built, dom, key);
      sp.subjKey = subjOpt.key;
      used.vps.add(dom.id + ":" + vpIdx); used.advs.add(advTag(chosen));
      if (chosen.extra) extrasUsed.add(chosen.extra.id);
      out.push(sp);
    }
    // last resort for a narrow topic + tense: reuse an action with a different person and time phrase
    let g2 = 0;
    while (out.length < count && g2++ < 300) {
      const tense = tenseSeq[out.length];
      const vpIdx = rnd(dom.vps.length), vp = dom.vps[vpIdx];
      if (!okFor(vp, tense) || vp.fs) continue;
      const subjOpt = pick(expandWho(dom, vp.who));
      if (out.some((x) => x.vp === vp && x.subjKey === subjOpt.key)) continue;
      const chosen = chooseAdverb(tense, vp, subjOpt.s);
      if (used.advs.has(advTag(chosen)) && g2 < 200) continue;
      chosen.extra = chooseExtra(dom, vp, subjOpt.s, extrasUsed);
      const built = build(dom, vp, subjOpt, tense, chosen);
      const key = teKey(built.te);
      if (seen.has(key) || used.te.has(key)) continue;
      used.te.add(key);
      const sp = finish(built, dom, key);
      sp.subjKey = subjOpt.key;
      used.advs.add(advTag(chosen));
      out.push(sp);
    }
    return out;
  }
  function makeSet(opts) {
    opts = opts || {};
    const seen = opts.seen || seenSet();
    const layout = opts.layout || "short";
    const recent = opts.noRecent ? { doms: [], vps: [] } : loadRecent();
    const used = { te: new Set(), vps: new Set(), advs: new Set(), domains: new Set(), recentDoms: new Set(recent.doms.slice(-3)), recentVps: new Set(recent.vps) };
    const paragraphs = [];
    const plan = layout === "short" ? [2 + rnd(2)] : layout === "para" ? [4 + rnd(3)] : Array.from({ length: 2 + rnd(2) }, () => 4 + rnd(2));
    plan.forEach((n) => { const p = paragraph(opts, n, seen, used); if (p.length) paragraphs.push(p); });
    const items = [].concat.apply([], paragraphs);
    if (!opts.noRecent) {
      paragraphs.forEach((p) => { if (p[0]) recent.doms.push(p[0].dom); });
      items.forEach((x) => recent.vps.push(x.dom + ":" + domainById(x.dom).vps.indexOf(x.vp)));
      saveRecent(recent);
    }
    return { source: "generated", layout, paragraphs, items, keys: items.map((x) => x.key), domain: items[0] ? items[0].domainName : "" };
  }

  TL.GEN = { TV, PERSONAL, DOMAINS, ADV, EXTRAS, CAP_WORDS, tel, sentence, makeSet, seenSet, saveSeen, realizeSpec, domainById, build, altPhrasings, countExtras, extraOptions };
})();
