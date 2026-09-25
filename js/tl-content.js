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
  };
  const P_KEYS = Object.keys(PERSONAL);

  // ---------- topic lexicon ----------
  // subj: domain-specific subjects. vps rows: [who, teObj, teVerbId, enLemma, enTail, keyGroups, flags, synonymLemma]
  // who: comma list of subject keys, 'P' = every personal subject. flags: d = fine with durations
  const DOMAINS = [];
  function domain(id, name, teName, subj, rows, fsRows) {
    const vps = rows.map((r) => ({ who: r[0].split(","), te: r[1], v: r[2], e: r[3], t: r[4], k: r[5], d: (r[6] || "").indexOf("d") >= 0, n: (r[6] || "").indexOf("n") >= 0, sy: r[7] || null }));
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
    ["gov,min,cc", "కొత్త పథకాన్ని", "start", "launch", "a new scheme", K(["launch", "start", "introduce"], ["scheme", "programme", "program", "plan"]), "", "introduce"],
    ["gov,min", "కొత్త విద్యా విధానాన్ని", "announce", "announce", "a new education policy", K(["announce", "declare", "unveil"], ["policy"]), ""],
    ["gov,cc", "నగరంలో కొత్త ఫ్లైఓవర్‌ను", "build", "build", "a new flyover in the city", K(["build", "construct"], ["flyover", "bridge"], ["city"]), "d", "construct"],
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
    ["team,ply,ath", "ఫైనల్ మ్యాచ్", "play", "play", "the final match", K(["play"], ["final"], ["match", "game"]), ""],
    ["team,ply,ath", "ఈ టోర్నమెంట్", "win", "win", "this tournament", K(["win"], ["tournament", "championship", "competition"]), "n"],
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
    ["P,grand,priest,gpa", "ధ్యానం", "do", "meditate", "", K(["meditate", "meditation"]), "d"],
    ["P,grand,priest,gpa", "మంత్రాలు", "chant", "chant", "mantras", K(["chant", "recite", "repeat"], ["mantra", "mantras"]), "d", "recite"],
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
    ["P,mom,dad,frd", "పార్కులో", "walk", "walk", "in the park", K(["walk", "stroll"], ["park", "garden"]), "d"],
    ["P,mom,dad", "యోగా", "do", "do", "yoga", K(["do", "practice", "practise", "perform"], ["yoga"]), "d"],
    ["P,mom,dad,frd", "పండ్లు", "eat", "eat", "fresh fruit", K(["eat", "have", "consume"], ["fruit", "fruits"]), ""],
    ["P,mom,dad", "ఎక్కువ నీళ్ళు", "drink", "drink", "plenty of water", K(["drink"], ["water"]), "d"],
    ["P,mom,dad,frd", "త్వరగా", "sleep", "sleep", "early", K(["sleep", "go to bed", "bed"], ["early"]), "d"],
    ["P,mom,dad", "ఆరోగ్యకరమైన భోజనం", "cook", "cook", "healthy meals", K(["cook", "prepare", "make"], ["healthy", "nutritious"], ["meal", "meals", "food"]), "d", "prepare"],
    ["P,mom,dad,frd", "వైద్యుడిని", "meet", "see", "the doctor", K(["see", "meet", "consult", "visit"], ["doctor"]), ""],
    ["P,mom,dad", "మందులు", "takemed", "take", "the medicine", K(["take"], ["medicine", "medicines", "medication", "tablet", "tablets", "pills"]), "d"],
    ["P,frd", "జాగింగ్", "do", "jog", "", K(["jog", "run", "jogging", "running"]), "d"],
  ]);

  domain("tech", "Technology", "సాంకేతికత", {
    eng: S("ఇంజనీర్లు", "the engineers", "3pl", "3h", "ఇంజనీర్లకు", ["engineer", "engineers", "developers"]),
    comp: Object.assign(S("కంపెనీ", "the company", "3sg", "3n", "కంపెనీకి", ["company", "firm"]), { org: true }),
    team2: Object.assign(S("మా బృందం", "our team", "3sg", "3n", "మా బృందానికి", ["team"]), { org: true }),
    stu: S("విద్యార్థులు", "the students", "3pl", "3h", "విద్యార్థులకు", ["student", "students"]),
  }, [
    ["P,eng,team2", "కొత్త యాప్ అభివృద్ధి", "do", "develop", "a new app", K(["develop", "build", "create", "make"], ["app", "application"]), "d", "create"],
    ["comp", "కొత్త ఫోన్ విడుదల", "do", "launch", "a new phone", K(["launch", "release", "unveil"], ["phone", "smartphone", "mobile"]), ""],
    ["P,stu", "కోడింగ్", "learn", "learn", "coding", K(["learn", "study"], ["coding", "programming", "code", "programme"]), "d", "study"],
    ["eng,team2", "సాఫ్ట్‌వేర్ లోపాలను", "fix", "fix", "software bugs", K(["fix", "repair", "correct", "solve"], ["software", "bug", "bugs", "error", "errors"]), "d", "repair"],
    ["P,eng,comp", "ఈమెయిల్స్", "send", "send", "emails", K(["send"], ["email", "emails", "e-mail", "e-mails", "mail", "mails"]), "d"],
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
    ["stu,P", "గ్రంథాలయంలో పుస్తకాలు", "read", "read", "books in the library", K(["read"], ["book", "books"], ["library"]), "d"],
    ["tea", "విద్యార్థులకు పాఠాలు", "tell", "teach", "the students", K(["teach", "explain", "give"], ["student", "students", "pupils"], ["lesson", "lessons", "class", "classes"]), "d"],
    ["stu,P,sis", "గణిత సమస్యలను", "solve", "solve", "maths problems", K(["solve", "do"], ["math", "maths", "mathematics", "mathematical"], ["problem", "problems", "sums"]), "d"],
    ["stu,P", "అసైన్‌మెంట్‌ను", "submit", "submit", "the assignment", K(["submit", "hand"], ["assignment", "homework"]), ""],
    ["stu,P,sis", "ఇంగ్లీష్", "learn", "learn", "English", K(["learn", "study"], ["english"]), "d", "study"],
    ["tea,stu", "కొత్త సిలబస్‌ను పూర్తి", "do", "complete", "the new syllabus", K(["complete", "finish"], ["syllabus", "curriculum"]), "", "finish"],
  ]);

  domain("business", "Business & economy", "వ్యాపారం – ఆర్థికం", {
    shop: S("దుకాణదారుడు", "the shopkeeper", "3sg", "3m", "దుకాణదారుడికి", ["shopkeeper", "trader", "merchant"]),
    owner: S("యజమాని", "the owner", "3sg", "3m", "యజమానికి", ["owner", "boss"]),
    comp: Object.assign(S("కంపెనీ", "the company", "3sg", "3n", "కంపెనీకి", ["company", "firm"]), { org: true }),
    inv: Object.assign(S("పెట్టుబడిదారులు", "the investors", "3pl", "3h", "పెట్టుబడిదారులకు", ["investor", "investors"]), { org: true }),
  }, [
    ["shop,owner,P", "కొత్త దుకాణం", "open", "open", "a new shop", K(["open", "start", "set up"], ["shop", "store"]), ""],
    ["shop,comp,owner", "ఉత్పత్తులను", "sell", "sell", "products", K(["sell"], ["product", "products", "goods"]), "d"],
    ["inv,P,comp", "షేర్లలో పెట్టుబడి", "put", "invest", "in shares", K(["invest"], ["share", "shares", "stock", "stocks", "market"]), "d"],
    ["comp,owner", "కొత్త సిబ్బందిని", "hire", "hire", "new staff", K(["hire", "recruit", "employ", "appoint"], ["staff", "employee", "employees", "workers", "people"]), "", "recruit"],
    ["comp,owner,P", "ఒప్పందంపై సంతకం", "do", "sign", "the contract", K(["sign"], ["contract", "agreement", "deal"]), ""],
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
    ["far,farms,vill", "పంటలకు నీళ్ళు", "put", "water", "the crops", K(["water", "irrigate"], ["crop", "crops", "plants", "fields"]), "d", "irrigate"],
    ["far,farms", "ఎరువులు", "buy", "buy", "fertilizer", K(["buy", "purchase"], ["fertilizer", "fertiliser", "fertilizers", "fertilisers", "manure"]), "", "purchase"],
    ["vill,farms", "పొలంలో బావి", "dig", "dig", "a well in the field", K(["dig"], ["well"], ["field"]), "d"],
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
    ["mom,P,sis", "రాత్రి భోజనం", "cook", "cook", "dinner", K(["cook", "prepare", "make"], ["dinner", "supper"]), "d", "prepare"],
    ["mom,dad,P", "ఇల్లు శుభ్రం", "do", "clean", "the house", K(["clean"], ["house", "home", "room"]), "d"],
    ["P,mom,dad,sis", "బంధువులకు ఫోన్", "do", "call", "relatives", K(["call", "phone", "ring"], ["relative", "relatives", "family"]), ""],
    ["mom,dad,P", "మార్కెట్‌లో సరుకులు", "buy", "buy", "groceries at the market", K(["buy", "purchase", "shop"], ["grocery", "groceries", "vegetables", "goods", "provisions"], ["market"]), "", "purchase"],
    ["kids,P,sis", "టీవీ", "watch", "watch", "TV", K(["watch"], ["tv", "television"]), "d"],
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
    ["P,mom,dad,fam", "నీటిని ఆదా", "do", "save", "water", K(["save", "conserve"], ["water"]), "d", "conserve"],
    ["P,vill", "చెత్తను", "collect", "collect", "the waste", K(["collect", "gather", "pick"], ["waste", "garbage", "trash", "rubbish", "litter"]), "d", "gather"],
    ["P,vill,fam", "ప్లాస్టిక్ వాడకాన్ని", "reduce", "reduce", "the use of plastic", K(["reduce", "cut", "decrease", "lower", "limit"], ["plastic"]), "d", "cut"],
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
    ["act,P", "కొత్త పాత్రను", "play-role", "play", "a new role", K(["play", "portray", "perform"], ["role", "character", "part"]), ""],
    ["dir,P", "కథ", "write", "write", "a story", K(["write"], ["story", "script"]), "d"],
    ["sing,act,P", "వేదికపై ప్రదర్శన", "give", "perform", "on the stage", K(["perform"], ["stage"]), ""],
  ]);

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
      A("ఇంతవరకు", "end", "so far", ["until now", "up to now", "to date", "thus far"], K(["far", "now", "date"]), "front"),
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
    const parts = [];
    let en = { tense, subjectEn: s.en, person: s.p, verb: f, tail: vp.t, adv: null, lead: null };
    const groups = []; // {te,en,w:[...],kind}
    const addGroup = (kind, te, enLabel, w) => groups.push({ kind, te, en: enLabel, w });
    let te = "";
    const subjTe = vp.fs ? "" : s.te;
    const mk = (kind) => kind;
    let alts = []; // accepted alternative strings for adverb (for suggestions)

    if (tense === "past-perfect-continuous") {
      const anc = chosen.anchor, dur = chosen.dur;
      te = [anc.te, subjTe, dur.te, vp.te, tel(vp.v, tp, "tuBe")].filter(Boolean).join(" ");
      en.lead = anc.en; en.adv = { pos: "end", text: dur.en };
      addGroup("time", anc.te, anc.en, anc.k);
      addGroup("time", dur.te, dur.en, dur.k);
      alts = anc.alt.concat(dur.alt || []);
    } else if (tense === "future-perfect-continuous") {
      const c = chosen.combo;
      te = [c.te, vp.te, tel(vp.v, tp, "tuPtc"), s.dat, c.dur.te, "అవుతుంది"].filter(Boolean).join(" ");
      en.adv = { pos: "front", text: c.en }; en.tail = vp.t + (vp.t ? " " : "") + c.dur.en; en.adv2 = c.dur.en;
      addGroup("time", c.te, c.en, c.k);
      addGroup("time", c.dur.te + " అవుతుంది", c.dur.en, c.dur.k);
      alts = c.alt;
    } else {
      const a = chosen.adv;
      const verbKind = { "simple-present": "hab", "present-continuous": "cont", "present-perfect": "past", "present-perfect-continuous": "cont", "simple-past": "past", "past-continuous": "tuBe", "past-perfect": "past", "simple-future": "hab", "future-continuous": "tuFut", "future-perfect": "ppFut" }[tense];
      const front = a.tePos !== "mid" ? a.te : "";
      const mid = a.tePos === "mid" ? a.te : "";
      te = [front, subjTe, mid, a.teMid || "", vp.te, tel(vp.v, tp, verbKind)].filter(Boolean).join(" ");
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

    // group array: convert to analyzer format {kind, te, en, groups:[[words]...]} — keep each group as own requirement
    const req = [];
    groups.forEach((g) => {
      g.w.forEach((wordsArr, idx) => req.push({ kind: g.kind, te: g.te, en: g.en, words: wordsArr }));
    });

    return { te, en, s, vp, f, tense, req, advAlts: alts, tp, dom: dom.id };
  }

  function realizeSpec(sp, override) {
    const e = Object.assign({}, sp.en, override || {});
    const spec = { tense: e.tense, subjectEn: e.subjectEn, person: e.person, verb: e.verb, tail: e.tail, adv: e.adv, lead: e.lead, midWord: e.advMid || null };
    if (e.tense === "future-perfect-continuous") {
      // "By next month, X will have been V-ing <object> for two years."
      spec.tail = sp.vp.t; spec.after = e.adv2;
    }
    return EN.realize(spec);
  }

  function isOrg(subj) { return !!(subj && subj.org); }
  function chooseAdverb(tense, vp, subj) {
    if (tense === "past-perfect-continuous") return isOrg(subj) ? { anchor: pick(PPC_ANCHORS_ORG), dur: pick(PPC_DURS_ORG) } : { anchor: pick(PPC_ANCHORS), dur: pick(PPC_DURS) };
    if (tense === "future-perfect-continuous") return { combo: pick(FPC_COMBOS) };
    return { adv: pick(ADV[tense]) };
  }
  function keyOf(dom, vpIdx, subjKey, tense, chosen) {
    const c = chosen.adv ? chosen.adv.te : chosen.anchor ? chosen.anchor.te + "|" + chosen.dur.te : chosen.combo.te + "|" + chosen.combo.dur.te;
    return [dom.id, vpIdx, subjKey, tense, c].join("~");
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
      add(EN.cap(subj) + " " + g.aux.concat([g.main]).join(" ") + (sp.vp.t ? " " + sp.vp.t : "") + " " + e.adv2 + " " + e.adv.text + ".", "Moving 'by …' to the end is also natural.");
      if (/^for /.test(e.adv2)) add(EN.cap(e.adv.text) + ", " + lower(subj) + " " + (subj === "I" ? "will have spent " : "will have spent ") + e.adv2.replace(/^for /, "") + " " + EN.forms(sp.vp.e).ing + (sp.vp.t ? " " + sp.vp.t : "") + ".", "'Spend + time + V-ing' is a neat alternative to the perfect continuous.");
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
      if (needsDur(tense) && !vp.d) continue;
      if (vp.n && isCont(tense)) continue;
      if (vp.fs && (tense === "future-perfect-continuous" || (vp.e === "rain" && tense === "past-perfect-continuous"))) continue;
      let subjOpt;
      if (vp.fs) subjOpt = { key: "fs", s: vp.fs };
      else {
        const list = expandWho(dom, vp.who);
        if (opts.subjKey) { const m = list.find((x) => x.key === opts.subjKey); subjOpt = m || pick(list); }
        else subjOpt = pick(list);
      }
      const chosen = chooseAdverb(tense, vp, subjOpt.s);
      const key = keyOf(dom, vpIdx, subjOpt.key, tense, chosen);
      if (seen.has(key) && !opts.allowRepeat) continue;
      const sp = build(dom, vp, subjOpt, tense, chosen);
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
    if (needsDur(tense) && !vp.d) return false;
    if (vp.n && isCont(tense)) return false;
    if (vp.fs && (tense === "future-perfect-continuous" || (vp.e === "rain" && tense === "past-perfect-continuous"))) return false;
    return true;
  }
  function paragraph(opts, count, seen, used) {
    const tenseSeq = tenseSequence(opts.tense, count);
    let dom;
    if (opts.domain && opts.domain !== "any") dom = domainById(opts.domain);
    else {
      const fits = (d) => d.vps.filter((vp, i) => !used.vps.has(d.id + ":" + i) && tenseSeq.every((t) => okFor(vp, t))).length >= count;
      const fresh = DOMAINS.filter((d) => !used.domains.has(d.id) && fits(d));
      dom = pick(fresh.length ? fresh : DOMAINS.filter(fits).length ? DOMAINS.filter(fits) : DOMAINS);
    }
    used.domains.add(dom.id);
    const protKey = pick(["he", "she", "ravi", "seetha", "they", "I", "we", "ramu", "lakshmi", "venu", "anitha", "madhavi"]);
    const order = shuffle(dom.vps.map((_, i) => i));
    const out = [];
    let oi = 0, guard = 0;
    while (out.length < count && guard++ < 400) {
      const tense = tenseSeq[out.length];
      const vpIdx = order[oi % order.length]; oi++;
      const vp = dom.vps[vpIdx];
      const loose = oi > order.length * 2; // after two passes, allow reusing an action from another paragraph
      if (used.vps.has(dom.id + ":" + vpIdx) && !(loose && out.every((x) => x.vp !== vp))) continue;
      if (needsDur(tense) && !vp.d) continue;
      if (vp.n && isCont(tense)) continue;
      if (vp.fs && (tense === "future-perfect-continuous" || (vp.e === "rain" && tense === "past-perfect-continuous"))) continue;
      let subjOpt;
      if (vp.fs) subjOpt = { key: "fs", s: vp.fs };
      else {
        const allowed = expandWho(dom, vp.who);
        const m = allowed.find((x) => x.key === protKey);
        if (!m) { if (oi > order.length) subjOpt = pick(allowed); else continue; } else subjOpt = m;
      }
      let chosen = null;
      for (let k = 0; k < 8; k++) { const c = chooseAdverb(tense, vp, subjOpt.s); if (!used.advs.has(advTag(c))) { chosen = c; break; } }
      if (!chosen) chosen = chooseAdverb(tense, vp, subjOpt.s);
      const key = keyOf(dom, vpIdx, subjOpt.key, tense, chosen);
      if (seen.has(key)) continue;
      const sp = build(dom, vp, subjOpt, tense, chosen);
      sp.key = key; sp.refText = realizeSpec(sp); sp.alts = altPhrasings(sp); sp.refs = [sp.refText].concat(sp.alts.map((a) => a.text)); sp.domainName = dom.name;
      used.vps.add(dom.id + ":" + vpIdx); used.advs.add(advTag(chosen));
      out.push(sp);
    }
    // last resort for a narrow topic + tense: reuse an action with a different person and time phrase
    let g2 = 0;
    while (out.length < count && g2++ < 300) {
      const tense = tenseSeq[out.length];
      const vpIdx = rnd(dom.vps.length), vp = dom.vps[vpIdx];
      if (!okFor(vp, tense) || vp.fs) continue;
      const subjOpt = pick(expandWho(dom, vp.who));
      if (out.some((x) => x.vp === vp && x.s === subjOpt.s)) continue;
      const chosen = chooseAdverb(tense, vp, subjOpt.s);
      if (used.advs.has(advTag(chosen)) && g2 < 200) continue;
      const key = keyOf(dom, vpIdx, subjOpt.key, tense, chosen);
      if (seen.has(key)) continue;
      const sp = build(dom, vp, subjOpt, tense, chosen);
      sp.key = key; sp.refText = realizeSpec(sp); sp.alts = altPhrasings(sp); sp.refs = [sp.refText].concat(sp.alts.map((a) => a.text)); sp.domainName = dom.name;
      used.advs.add(advTag(chosen));
      out.push(sp);
    }
    return out;
  }
  function makeSet(opts) {
    opts = opts || {};
    const seen = opts.seen || seenSet();
    const layout = opts.layout || "short";
    const used = { vps: new Set(), advs: new Set(), domains: new Set() };
    const paragraphs = [];
    const plan = layout === "short" ? [2 + rnd(2)] : layout === "para" ? [4 + rnd(3)] : Array.from({ length: 2 + rnd(2) }, () => 4 + rnd(2));
    plan.forEach((n) => { const p = paragraph(opts, n, seen, used); if (p.length) paragraphs.push(p); });
    const items = [].concat.apply([], paragraphs);
    return { source: "generated", layout, paragraphs, items, keys: items.map((x) => x.key), domain: items[0] ? items[0].domainName : "" };
  }

  TL.GEN = { TV, PERSONAL, DOMAINS, ADV, tel, sentence, makeSet, seenSet, saveSeen, realizeSpec, domainById, build, altPhrasings };
})();
