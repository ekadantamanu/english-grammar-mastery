window.GRAMMAR_SECTIONS = window.GRAMMAR_SECTIONS || [];
window.EXERCISES = window.EXERCISES || {};

/* =========================================================
   4. PREPOSITIONS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "prepositions",
  order: 4,
  icon: "📍",
  title: "Prepositions (time, place, movement & fixed combinations)",
  shortDesc: "The full rule set for in/on/at, movement prepositions, and fixed preposition combinations.",
  intro: "Prepositions show relationships between words — time, place, direction, and more. Many uses are governed by fixed rules; others simply have to be memorized as fixed combinations. This section covers both.",
  rules: [
    {
      title: "Time prepositions: at, on, in",
      text: `<ul>
        <li><strong>at</strong> — precise points in time: at 6 o'clock, at noon, at midnight, at sunrise, at the moment, at night, at the weekend (British)</li>
        <li><strong>on</strong> — days and dates: on Monday, on July 4th, on my birthday, on Christmas Day, on the weekend (American)</li>
        <li><strong>in</strong> — longer periods: in July, in 2024, in summer, in the morning/afternoon/evening, in the 21st century</li>
      </ul>
      <p>Memory trick: the smaller the time unit, the more likely "at"; the bigger the time period, the more likely "in"; specific calendar days use "on."</p>`,
      examples: [
        { correct: true, text: "The meeting starts at 9 a.m. on Friday in March.", note: "at=time, on=day, in=month" },
        { correct: false, text: "The meeting starts on 9 a.m.", note: "" },
        { correct: true, text: "I was born in 1998.", note: "" },
        { correct: true, text: "We always relax in the evening.", note: "" }
      ]
    },
    {
      title: "Place prepositions: at, on, in",
      text: `<ul>
        <li><strong>at</strong> — a specific point/address: at the door, at 22 Baker Street, at the bus stop, at work, at home, at school (as an institution/activity)</li>
        <li><strong>on</strong> — a surface or line: on the table, on the wall, on the second floor, on the coast, on a street/road</li>
        <li><strong>in</strong> — an enclosed space or area: in the box, in the room, in London, in France, in the car</li>
      </ul>`,
      examples: [
        { correct: true, text: "She's waiting at the bus stop.", note: "" },
        { correct: true, text: "The picture is hanging on the wall.", note: "" },
        { correct: true, text: "The keys are in the drawer.", note: "" },
        { correct: false, text: "The keys are on the drawer.", note: "\"in\" a drawer (enclosed), not \"on\"" }
      ]
    },
    {
      title: "Movement prepositions",
      text: `<ul>
        <li><strong>to</strong> — destination: go to the store, drive to work</li>
        <li><strong>into</strong> — entering an enclosed space: walk into the room</li>
        <li><strong>onto</strong> — moving to a surface: jump onto the table</li>
        <li><strong>through</strong> — movement inside something, from one side to the other: walk through the tunnel</li>
        <li><strong>across</strong> — movement from one side to another of a flat area: swim across the river</li>
        <li><strong>along</strong> — following the length of something: walk along the beach</li>
        <li><strong>towards</strong> — in the direction of, without necessarily arriving: he walked towards the door</li>
        <li><strong>past</strong> — moving beyond something: drive past the school</li>
        <li><strong>over</strong> — above and across: climb over the fence</li>
        <li><strong>under</strong> — below and across: crawl under the table</li>
      </ul>`,
      examples: [
        { correct: true, text: "The cat jumped onto the shelf.", note: "" },
        { correct: true, text: "We walked through the forest for hours.", note: "" },
        { correct: true, text: "The bridge goes across the river.", note: "" },
        { correct: false, text: "The cat jumped in the shelf.", note: "should be \"onto\" — a surface, not an enclosed space" }
      ]
    },
    {
      title: "Prepositions of position vs. destination — a common confusion",
      text: `<p>"In/on/at" describe a static location (no movement); "into/onto/to" describe movement toward that location.</p>`,
      examples: [
        { correct: true, text: "The book is in the bag. (static)", note: "" },
        { correct: true, text: "Put the book into the bag. (movement)", note: "" },
        { correct: false, text: "Put the book in the bag from across the room.", note: "acceptable informally, but \"into\" is more precise for motion" }
      ]
    },
    {
      title: "Compound / complex prepositions (multi-word prepositions)",
      text: `<p>A <strong>compound (or complex) preposition</strong> is a group of two or more words that functions as a single preposition, followed by a noun, pronoun, or noun phrase — never a full clause with its own subject and verb. They're grouped here by the relationship they express:</p>
      <ul>
        <li><strong>Cause/reason:</strong> because of, due to, owing to, on account of, as a result of</li>
        <li><strong>Contrast/concession:</strong> in spite of, despite (single word — see note below), instead of</li>
        <li><strong>Addition:</strong> as well as, along with, together with, in addition to, apart from (can also mean "except")</li>
        <li><strong>Exception:</strong> except for, apart from, other than</li>
        <li><strong>Position/location:</strong> in front of, in back of/behind, next to, close to, near to, on top of, at the back of, in the middle of</li>
        <li><strong>Reference/topic:</strong> according to, with regard to, in terms of, as for, with respect to, in relation to</li>
        <li><strong>Purpose/manner/support:</strong> by means of, in accordance with, for the sake of, on behalf of</li>
        <li><strong>Time/condition:</strong> in case of, in the event of, up to, prior to, in the course of</li>
      </ul>
      <p><strong>Despite vs. in spite of:</strong> these mean exactly the same thing, but "despite" is a single-word preposition and is NEVER followed by "of." "In spite of" is the multi-word version and always needs "of."</p>
      <p><strong>Due to vs. because of:</strong> in careful, traditional usage, "due to" functions like an adjective and typically follows a form of "be" ("The delay was due to the storm"), while "because of" functions like an adverb and modifies the whole action ("The flight was delayed because of the storm"). In everyday modern English the two are used interchangeably at the start of a sentence, and this distinction is fading — but it's worth knowing for formal writing.</p>`,
      examples: [
        { correct: true, text: "According to the report, sales rose by 10% last quarter.", note: "reference" },
        { correct: true, text: "In spite of the heavy rain, we went hiking.", note: "" },
        { correct: true, text: "Despite the heavy rain, we went hiking.", note: "same meaning, single word" },
        { correct: false, text: "Despite of the heavy rain, we went hiking.", note: "\"despite\" never takes \"of\"" },
        { correct: true, text: "The match was cancelled due to bad weather.", note: "" },
        { correct: true, text: "Except for Maria, everyone submitted the report on time.", note: "" },
        { correct: true, text: "The car parked next to mine belongs to my neighbor.", note: "" },
        { correct: true, text: "He spoke on behalf of the entire team.", note: "" }
      ]
    },
    {
      title: "Prepositions after adjectives (fixed combinations)",
      text: `<p>Many adjectives are always followed by a specific preposition. These must be memorized — there's no shortcut rule.</p>
      <ul>
        <li>afraid of, aware of, proud of, tired of, capable of, fond of</li>
        <li>good at, bad at, skilled at, terrible at</li>
        <li>interested in, involved in, engaged in</li>
        <li>married to, similar to, related to, opposed to</li>
        <li>angry with (a person) / angry about (a situation)</li>
        <li>satisfied with, pleased with, bored with/of</li>
        <li>responsible for, famous for, known for, grateful for</li>
        <li>different from (standard), also from/to/than in casual use</li>
      </ul>`,
      examples: [
        { correct: true, text: "She's very good at chess.", note: "" },
        { correct: false, text: "She's very good in chess.", note: "" },
        { correct: true, text: "He's married to a doctor.", note: "" },
        { correct: false, text: "He's married with a doctor.", note: "" }
      ]
    },
    {
      title: "Prepositions after verbs (fixed combinations)",
      text: `<ul>
        <li>listen to, look at, look for, look after (take care of)</li>
        <li>depend on, rely on, count on, insist on</li>
        <li>believe in, specialize in, succeed in</li>
        <li>apologize for, care for, wait for, ask for, hope for</li>
        <li>agree with (a person/idea), agree on (a plan), agree to (a proposal)</li>
        <li>consist of, think of/about, remind of, approve of</li>
        <li>arrive at (a building/place), arrive in (a city/country) — never "arrive to"</li>
      </ul>`,
      examples: [
        { correct: true, text: "We arrived at the airport at noon.", note: "" },
        { correct: true, text: "We arrived in Tokyo yesterday.", note: "" },
        { correct: false, text: "We arrived to the airport.", note: "" },
        { correct: true, text: "You can always depend on her.", note: "" },
        { correct: false, text: "You can always depend of her.", note: "" }
      ]
    },
    {
      title: "Prepositions with means of transport",
      text: `<p>Use <strong>by</strong> for a general method of transport (no article): by car, by bus, by train, by plane, by bike, by boat. Exception: <strong>on foot</strong>. Use <strong>in/on</strong> + article for a specific vehicle: in the car (get in a car), on the bus/train/plane (get on a bus).</p>`,
      examples: [
        { correct: true, text: "I go to work by train.", note: "general method" },
        { correct: true, text: "I left my bag on the train.", note: "specific vehicle" },
        { correct: true, text: "She got into the car and drove off.", note: "" },
        { correct: false, text: "She got in the car by the car.", note: "" }
      ]
    },
    {
      title: "Ending a sentence with a preposition",
      text: `<p>Contrary to a common myth, ending a sentence with a preposition is grammatically acceptable in modern English, especially in questions and relative clauses — rewording to avoid it often sounds stiff and unnatural.</p>`,
      examples: [
        { correct: true, text: "What are you looking for?", note: "natural, standard English" },
        { correct: true, text: "For what are you looking?", note: "grammatically valid but overly formal/awkward" },
        { correct: true, text: "This is the friend I told you about.", note: "" }
      ]
    },
    {
      title: "★ Memory tips: how to make these rules stick",
      text: `<p>Prepositions feel unpredictable because a big chunk of them genuinely are — this is the one area of grammar where memory technique matters more than logic. Here's what actually works:</p>
      <ul>
        <li><strong>The shrinking triangle for time and place.</strong> Picture three nested shapes: a single DOT (AT — a precise point: at 6 o'clock, at the door), a LINE (ON — a surface or a specific day: on the table, on Monday), and a big BOX (IN — an enclosed period or space: in July, in the room). Whenever you're stuck between at/on/in, ask "is this a dot, a line, or a box?" and you'll get it right almost every time.</li>
        <li><strong>Never learn a preposition alone — learn the whole chunk.</strong> Don't memorize "of" in isolation; memorize "afraid OF," "proud OF," "consist OF" as one single vocabulary unit, the same way you'd memorize a phone number as one block instead of ten separate digits. This single habit — chunking, not isolating — is the #1 technique fluent speakers use for fixed combinations.</li>
        <li><strong>Build a "verb + preposition" flashcard deck, sorted by the preposition.</strong> Group everything that takes "on" together (depend ON, insist ON, rely ON, count ON), everything that takes "in" together (believe IN, succeed IN, specialize IN), and so on. Seeing them clustered by preposition — rather than alphabetically by verb — trains your brain to feel the pattern within each group.</li>
        <li><strong>For compound prepositions, spot the "hidden noun."</strong> Notice that most multi-word prepositions are built around a small noun: "in SPITE of," "in CASE of," "on BEHALF of," "in FRONT of," "by MEANS of," "with REGARD to." Learning that they all share the pattern (in/on/by/with + short noun + of/to) makes new ones easier to guess and remember as a family, not as isolated phrases.</li>
        <li><strong>Read it in a sentence you'll actually say.</strong> Instead of memorizing "according to = as stated by," build one true sentence about your own life: "According to my doctor, I need more sleep." Personal, real sentences stick in memory far longer than dictionary definitions.</li>
        <li><strong>When in doubt, say two options out loud.</strong> "I'm interested in music" vs. "I'm interested on music" — one will audibly sound wrong to you within a few weeks of active listening/reading practice. Prepositions are one of the few grammar areas where your ear becomes a genuinely reliable judge faster than your brain can recite the rule.</li>
      </ul>`,
      examples: []
    }
  ],
  commonMistakes: [
    "\"I arrived to the hotel\" ✘ → \"I arrived at the hotel\" ✔ — \"arrive\" never takes \"to.\"",
    "\"Married with\" ✘ → \"married to\" ✔.",
    "\"Good in something\" ✘ → \"good at something\" ✔.",
    "\"Depend of\" ✘ → \"depend on\" ✔.",
    "\"On the morning\" ✘ → \"in the morning\" ✔ (but \"on Monday morning\" is correct — a specific day overrides the general rule).",
    "Mixing up static and movement forms: \"He went in the room and sat down\" (acceptable colloquially) vs. the more precise \"He went into the room.\"",
    "\"Despite of the rain\" ✘ → \"despite the rain\" or \"in spite of the rain\" ✔ — \"despite\" never takes \"of.\"",
    "\"Inspite\" written as one word ✘ → \"in spite of\" (three separate words) ✔.",
    "Following a compound preposition with a full clause: \"Because of it was raining\" ✘ → \"Because of the rain\" (noun phrase) or \"Because it was raining\" (clause, plain \"because\") ✔."
  ]
});

window.EXERCISES["prepositions"] = [
  { id:"pr-1", level:1, type:"mcq", prompt:"The party starts ___ 7 p.m.", options:["in","on","at","by"], answer:"at", explanationCorrect:" Precise clock times use \"at\": at 7 p.m., at noon, at midnight.", explanationWrong:" Exact points in time (clock times) always take \"at,\" not \"in\" or \"on.\"" },
  { id:"pr-2", level:1, type:"mcq", prompt:"My birthday is ___ July.", options:["at","on","in","by"], answer:"in", explanationCorrect:" Months use \"in\": in July, in December.", explanationWrong:" Months (as periods of time) take \"in,\" not \"on\" (used for specific dates/days) or \"at\" (used for precise times)." },
  { id:"pr-3", level:1, type:"fill", prompt:"We're meeting ___ Monday morning.", answer:"on", explanationCorrect:" Specific days (even with \"morning\" attached) take \"on\": on Monday, on Monday morning.", explanationWrong:" Days of the week take \"on,\" even when paired with a time of day like \"morning\": on Monday morning." },
  { id:"pr-4", level:1, type:"mcq", prompt:"The cat is sleeping ___ the sofa.", options:["at","on","into","through"], answer:"on", explanationCorrect:" A surface (like a sofa top) takes \"on.\"", explanationWrong:" Since the sofa is a surface the cat is resting on top of, \"on\" is correct, not \"at\" or \"into.\"" },
  { id:"pr-5", level:2, type:"mcq", prompt:"She's very good ___ solving puzzles.", options:["in","at","on","for"], answer:"at", explanationCorrect:" \"Good at\" is a fixed adjective + preposition combination.", explanationWrong:" The adjective \"good\" is always followed by \"at\" when describing a skill, not \"in\" or \"on.\"" },
  { id:"pr-6", level:2, type:"fill", prompt:"We arrived ___ the airport two hours early. (fixed combination — never \"to\")", answer:"at", explanationCorrect:" \"Arrive at\" is used for buildings/specific places; \"arrive in\" for cities/countries. \"Arrive to\" is never correct.", explanationWrong:" \"Arrive\" is never followed by \"to.\" Use \"arrive at\" for a specific place/building or \"arrive in\" for a city or country." },
  { id:"pr-7", level:2, type:"mcq", prompt:"He's married ___ a French woman.", options:["with","to","for","of"], answer:"to", explanationCorrect:" \"Married to\" is the fixed combination — never \"married with.\"", explanationWrong:" English pairs \"married\" with \"to,\" not \"with.\" This is a fixed combination that must be memorized." },
  { id:"pr-8", level:2, type:"mcq", prompt:"Choose the correct sentence.", options:["The ball rolled into the field.","The ball rolled onto the field.","The ball rolled in the field and stayed there.","Both B and C can be correct depending on meaning."], answer:"Both B and C can be correct depending on meaning.", explanationCorrect:" \"Onto\" describes movement to a surface (a field is a flat surface); \"in\" describes a static location once it's already there — both are valid depending on what's being described.", explanationWrong:" \"Onto\" fits movement onto a surface like a field, while \"in\" fits describing where the ball ended up sitting — context determines which one applies, and both can be correct." },
  { id:"pr-9", level:3, type:"fill", prompt:"I usually travel to work ___ bike. (general method, no article)", answer:"by", explanationCorrect:" General transport methods use \"by\" with no article: by bike, by car, by train.", explanationWrong:" A general method of transport (without specifying a particular vehicle) uses \"by\" and no article: by bike, not \"on a bike\" or \"in a bike.\"" },
  { id:"pr-10", level:3, type:"mcq", prompt:"She's really interested ___ ancient history.", options:["for","of","in","at"], answer:"in", explanationCorrect:" \"Interested in\" is the standard fixed combination.", explanationWrong:" The adjective \"interested\" always pairs with \"in,\" not \"for,\" \"of,\" or \"at.\"" },
  { id:"pr-11", level:3, type:"mcq", prompt:"He walked ___ the tunnel and came out the other side.", options:["across","through","onto","along"], answer:"through", explanationCorrect:" \"Through\" describes movement inside something, entering one side and exiting the other — exactly what a tunnel involves.", explanationWrong:" \"Through\" is used for movement inside an enclosed passage, entering on one side and exiting the other — the correct fit for a tunnel." },
  { id:"pr-12", level:3, type:"fill", prompt:"You can always ___ on your best friend for honest advice. (fixed verb + preposition meaning \"trust/rely\")", answer:"depend", explanationCorrect:" \"Depend on\" (or \"rely on,\" \"count on\") are fixed combinations meaning to trust someone for support.", explanationWrong:" The verb that pairs with \"on\" to mean \"trust for support\" here is \"depend\" (depend on), not \"rely,\" though \"rely on\" also works." },
  { id:"pr-13", level:4, type:"mcq", prompt:"Choose the correct sentence about arriving in a country.", options:["We arrived to Japan on Tuesday.","We arrived at Japan on Tuesday.","We arrived in Japan on Tuesday.","We arrived on Japan on Tuesday."], answer:"We arrived in Japan on Tuesday.", explanationCorrect:" For countries and cities, \"arrive in\" is correct; \"arrive at\" is reserved for specific places like airports or buildings.", explanationWrong:" Large areas like countries and cities take \"arrive in,\" while specific points like airports or stations take \"arrive at.\" \"Arrive to\" is always wrong." },
  { id:"pr-14", level:4, type:"mcq", prompt:"I'm sorry — I'm angry ___ you for lying to me, not angry ___ the situation itself.", options:["with / about","at / with","about / with","for / at"], answer:"with / about", explanationCorrect:" \"Angry with\" is used for a person; \"angry about\" is used for a situation.", explanationWrong:" English distinguishes \"angry with\" (directed at a person) from \"angry about\" (directed at a situation or issue)." },
  { id:"pr-15", level:4, type:"fill", prompt:"The committee finally agreed ___ a new proposal after months of debate. (agreeing to accept a plan)", answer:"on", explanationCorrect:" \"Agree on\" is used when people reach a shared decision about a plan; \"agree to\" is used for accepting a specific proposal made to you; \"agree with\" is for agreeing with a person/opinion.", explanationWrong:" \"Agree on\" fits when a group reaches a shared decision about a plan collectively, distinct from \"agree to\" (accept an offer) or \"agree with\" (share an opinion)." },
  { id:"pr-16", level:5, type:"mcq", prompt:"Which sentence correctly distinguishes location from destination?", options:["Put the keys on the drawer.","She jumped in the pool from the diving board.","He climbed onto the roof to fix the antenna.","They walked to the beach and swam across along the coast."], answer:"He climbed onto the roof to fix the antenna.", explanationCorrect:" \"Onto\" correctly shows movement toward a surface (the roof), matching the physical action of climbing up onto it.", explanationWrong:" \"Onto\" is the precise choice for movement toward a surface — the roof — matching \"climbed\" as a directional action, unlike the static \"on\" or the enclosed-space \"in.\"" },
  { id:"pr-17", level:5, type:"fill", prompt:"This project is entirely different ___ anything we've done before. (standard formal preposition)", answer:"from", acceptedAnswers:["than","to"], explanationCorrect:" \"Different from\" is the traditionally preferred form in formal writing, though \"different than\" and \"different to\" are also widely used informally.", explanationWrong:" The most formally standard combination is \"different from,\" though \"different than\" (American informal) and \"different to\" (British informal) are also common in speech." },
  { id:"pr-18", level:5, type:"mcq", prompt:"Which sentence is the most natural, idiomatic modern English?", options:["This is the topic about which I was speaking.","This is the topic which I was speaking about.","This is the topic I was speaking about.","Both A and C are natural; B is slightly informal but common; none are wrong."], answer:"Both A and C are natural; B is slightly informal but common; none are wrong.", explanationCorrect:" Ending a sentence with a preposition (as in B and C) is standard, natural modern English — it is not a grammar error, contrary to the old myth.", explanationWrong:" The old rule against ending sentences with prepositions is a myth — all three versions here are grammatically acceptable, with C being the most natural in everyday speech." },
  { id:"pr-19", level:2, type:"mcq", prompt:"___ the rain, the match went ahead as planned.", options:["Despite of","In spite","Despite","Because"], answer:"Despite", explanationCorrect:" \"Despite\" is a single-word preposition and is followed directly by a noun phrase, with no \"of.\"", explanationWrong:" \"Despite\" never takes \"of\" after it (that's a common error) — it goes directly before the noun phrase: despite the rain." },
  { id:"pr-20", level:2, type:"fill", prompt:"___ the rain, the match went ahead as planned. (three-word alternative to \"despite,\" always ending in \"of\")", answer:"In spite of", acceptedAnswers:["in spite of"], explanationCorrect:" \"In spite of\" is the multi-word equivalent of \"despite\" and always includes \"of.\"", explanationWrong:" Unlike \"despite,\" its three-word equivalent \"in spite of\" always keeps \"of\" — both mean exactly the same thing." },
  { id:"pr-21", level:3, type:"mcq", prompt:"___ the report, the company's profits doubled this year.", options:["According to","According with","According for","According at"], answer:"According to", explanationCorrect:" \"According to\" is the fixed compound preposition used to reference a source of information.", explanationWrong:" The compound preposition meaning \"as stated by\" is always \"according to,\" not \"according with/for/at.\"" },
  { id:"pr-22", level:3, type:"mcq", prompt:"The flight was delayed ___ a mechanical problem.", options:["due","due to","due of","due for"], answer:"due to", explanationCorrect:" \"Due to\" is a fixed compound preposition meaning \"caused by,\" always followed by a noun phrase.", explanationWrong:" The compound preposition expressing cause is \"due to,\" not \"due,\" \"due of,\" or \"due for.\"" },
  { id:"pr-23", level:4, type:"fill", prompt:"___ Maria, everyone on the team met the deadline. (compound preposition meaning \"excluding\")", answer:"Except for", acceptedAnswers:["Except for,","Apart from"], explanationCorrect:" \"Except for\" (or \"apart from\") is the compound preposition used to exclude one item from a general statement.", explanationWrong:" To exclude one item from an otherwise general statement, English uses the compound preposition \"except for\" (or \"apart from\")." },
  { id:"pr-24", level:4, type:"mcq", prompt:"The negotiator spoke ___ the entire company during the meeting.", options:["on behalf of","in behalf for","on behalf to","by behalf of"], answer:"on behalf of", explanationCorrect:" \"On behalf of\" is the fixed compound preposition meaning \"acting as a representative for.\"", explanationWrong:" The correct fixed compound preposition meaning \"representing/for\" is \"on behalf of,\" not any of the other combinations." },
  { id:"pr-25", level:5, type:"mcq", prompt:"Choose the sentence that correctly distinguishes \"due to\" (adjective-like, after \"be\") from \"because of\" (adverb-like) in careful formal style.", options:["The cancellation was due to the storm. The game was cancelled because of the storm.","The cancellation was because of the storm. The game was due to the storm cancelled.","Due to the storm was the game cancelled.","Both are always fully interchangeable with no distinction in any style."], answer:"The cancellation was due to the storm. The game was cancelled because of the storm.", explanationCorrect:" In traditional formal usage, \"due to\" follows a form of \"be\" and describes a noun (the cancellation was due to...), while \"because of\" modifies the verb/action directly (cancelled because of...).", explanationWrong:" Formal style traditionally reserves \"due to\" for right after a \"be\" verb (describing a noun), and \"because of\" for modifying an action verb directly — though this distinction is fading in casual modern usage." },
  { id:"pr-26", level:5, type:"fill", prompt:"___ an emergency, please use the stairs, not the elevator. (compound preposition meaning \"if there is\")", answer:"In case of", acceptedAnswers:["In the event of"], explanationCorrect:" \"In case of\" (or \"in the event of\") is the compound preposition used for hypothetical situations, especially in warnings and instructions.", explanationWrong:" The compound preposition used to introduce a hypothetical situation in formal warnings/instructions is \"in case of\" (or \"in the event of\"), followed by a noun phrase." }
];

/* =========================================================
   5. VERB TENSES
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "tenses",
  order: 5,
  icon: "⏱️",
  title: "Verb Tenses (all 12 tenses, formation & usage)",
  shortDesc: "Every one of English's 12 tenses: how to form it and exactly when to use it.",
  intro: "English has 12 main tenses across three time frames (past, present, future) and four aspects (simple, continuous, perfect, perfect continuous). This section builds each one from the ground up: formation rules first, then precise usage.",
  rules: [
    {
      title: "The tense grid: 3 times × 4 aspects = 12 tenses",
      text: `<p>Every tense is a combination of <strong>when</strong> (past / present / future) and <strong>how the action is viewed</strong> (simple = a fact/habit; continuous = in progress; perfect = completed before a reference point; perfect continuous = ongoing up to a reference point).</p>`,
      examples: []
    },
    {
      title: "Present Simple",
      text: `<p><strong>Form:</strong> base verb (+s for he/she/it). Negative: don't/doesn't + base. Question: Do/Does + subject + base.</p>
      <p><strong>Use for:</strong> habits and routines, permanent facts/general truths, timetables/schedules, and states (feelings, opinions, possession) that don't normally use continuous forms.</p>`,
      examples: [
        { correct: true, text: "She works at a bank.", note: "habit" },
        { correct: true, text: "Water boils at 100°C.", note: "fact" },
        { correct: true, text: "The train leaves at 6 p.m.", note: "timetable" },
        { correct: true, text: "I understand the problem now.", note: "state verb — not \"I am understanding\"" }
      ]
    },
    {
      title: "Present Continuous",
      text: `<p><strong>Form:</strong> am/is/are + verb-ing.</p>
      <p><strong>Use for:</strong> actions happening right now, temporary situations around the present time, fixed future arrangements (with a time expression), and to describe an annoying repeated habit with "always."</p>`,
      examples: [
        { correct: true, text: "I'm reading a great book at the moment.", note: "temporary" },
        { correct: true, text: "We're meeting the client tomorrow at 10.", note: "fixed future arrangement" },
        { correct: true, text: "He's always losing his keys!", note: "annoying habit" },
        { correct: false, text: "I am knowing the answer.", note: "\"know\" is a state verb — never continuous" }
      ]
    },
    {
      title: "Present Perfect",
      text: `<p><strong>Form:</strong> have/has + past participle.</p>
      <p><strong>Use for:</strong> a past action with a present result or relevance, life experiences (unspecified time), an action that started in the past and continues now (often with "for/since"), and recent news (often with "just").</p>
      <p>Never used with a specific finished-time expression like "yesterday" or "in 2020" — use past simple instead.</p>`,
      examples: [
        { correct: true, text: "I've lost my keys.", note: "past action, present result — I don't have them now" },
        { correct: true, text: "She has visited Japan twice.", note: "experience, unspecified time" },
        { correct: true, text: "They've lived here since 2015.", note: "started in past, continues now" },
        { correct: false, text: "I have seen that movie yesterday.", note: "\"yesterday\" needs past simple: \"I saw that movie yesterday.\"" }
      ]
    },
    {
      title: "Present Perfect Continuous",
      text: `<p><strong>Form:</strong> have/has + been + verb-ing.</p>
      <p><strong>Use for:</strong> emphasizing the duration of an action that started in the past and is still continuing (or just stopped, with visible present results).</p>`,
      examples: [
        { correct: true, text: "I've been studying for three hours.", note: "duration, still going / just stopped" },
        { correct: true, text: "Your eyes are red — have you been crying?", note: "recent activity with present evidence" },
        { correct: false, text: "I have been knowing him for years.", note: "state verb — use present perfect simple: \"I have known him for years.\"" }
      ]
    },
    {
      title: "Past Simple",
      text: `<p><strong>Form:</strong> regular verbs +ed; many common verbs are irregular (go→went, see→saw). Negative: didn't + base. Question: Did + subject + base.</p>
      <p><strong>Use for:</strong> a completed action at a specific, finished time in the past.</p>`,
      examples: [
        { correct: true, text: "I visited Paris in 2019.", note: "" },
        { correct: true, text: "She didn't call me last night.", note: "" },
        { correct: false, text: "I have visited Paris in 2019.", note: "specific finished time → past simple, not present perfect" }
      ]
    },
    {
      title: "Past Continuous",
      text: `<p><strong>Form:</strong> was/were + verb-ing.</p>
      <p><strong>Use for:</strong> an action in progress at a specific moment in the past, an interrupted action (often paired with past simple + "when/while"), and background scene-setting in narratives.</p>`,
      examples: [
        { correct: true, text: "At 8 p.m. last night, I was watching TV.", note: "in progress at a specific past time" },
        { correct: true, text: "I was cooking dinner when the phone rang.", note: "longer action interrupted by a shorter one" },
        { correct: true, text: "The sun was shining and birds were singing.", note: "scene-setting" }
      ]
    },
    {
      title: "Past Perfect",
      text: `<p><strong>Form:</strong> had + past participle.</p>
      <p><strong>Use for:</strong> an action that happened before another past action or time — the "past of the past."</p>`,
      examples: [
        { correct: true, text: "When I arrived, the movie had already started.", note: "starting happened before arriving" },
        { correct: true, text: "She had finished her homework before dinner.", note: "" },
        { correct: false, text: "When I arrived, the movie already started.", note: "loses the clear \"before\" sequencing that past perfect signals" }
      ]
    },
    {
      title: "Past Perfect Continuous",
      text: `<p><strong>Form:</strong> had been + verb-ing.</p>
      <p><strong>Use for:</strong> emphasizing the duration of an action that was in progress before another past action or time.</p>`,
      examples: [
        { correct: true, text: "He was tired because he had been working all day.", note: "duration leading up to a past state" },
        { correct: true, text: "They had been arguing for an hour before I walked in.", note: "" }
      ]
    },
    {
      title: "Future forms: will, going to, present continuous, present simple",
      text: `<ul>
        <li><strong>will + base:</strong> spontaneous decisions made at the moment of speaking, predictions without present evidence, promises, offers. "I'll help you carry that." "I think it will rain."</li>
        <li><strong>going to + base:</strong> pre-decided plans/intentions, and predictions based on present evidence. "I'm going to study medicine." "Look at those clouds — it's going to rain."</li>
        <li><strong>present continuous:</strong> fixed, arranged future plans, usually with a time expression. "We're flying to Rome on Saturday."</li>
        <li><strong>present simple:</strong> scheduled/timetabled events. "The flight departs at 6 a.m."</li>
      </ul>`,
      examples: [
        { correct: true, text: "I'll answer the phone.", note: "spontaneous decision" },
        { correct: true, text: "She's going to have a baby.", note: "evidence-based prediction / plan" },
        { correct: true, text: "We're having dinner with them on Friday.", note: "fixed arrangement" },
        { correct: false, text: "I think I go to the gym later.", note: "should be \"I'm going to go\" or \"I'll go\"" }
      ]
    },
    {
      title: "Future Continuous",
      text: `<p><strong>Form:</strong> will be + verb-ing.</p>
      <p><strong>Use for:</strong> an action that will be in progress at a specific future time, and polite predictions about the present/near future.</p>`,
      examples: [
        { correct: true, text: "This time tomorrow, I'll be lying on a beach.", note: "in progress at a future moment" },
        { correct: true, text: "Don't call at 8 — we'll be having dinner.", note: "" }
      ]
    },
    {
      title: "Future Perfect & Future Perfect Continuous",
      text: `<p><strong>Future Perfect (will have + past participle):</strong> an action completed before a specific point in the future. "By 2030, I will have finished my degree."</p>
      <p><strong>Future Perfect Continuous (will have been + verb-ing):</strong> the duration of an action up to a specific point in the future. "By next June, she will have been working here for ten years."</p>`,
      examples: [
        { correct: true, text: "By the time you arrive, I will have cleaned the house.", note: "completed before a future point" },
        { correct: true, text: "Next month, we will have been living here for a year.", note: "duration up to a future point" }
      ]
    },
    {
      title: "State (non-continuous) verbs",
      text: `<p>Certain verbs describe states, not actions, and are not normally used in continuous forms: verbs of thought (know, believe, understand, remember), emotion (love, hate, want, prefer), possession (have, own, belong), and senses (see, hear, smell — when involuntary).</p>`,
      examples: [
        { correct: true, text: "I believe you.", note: "" },
        { correct: false, text: "I am believing you.", note: "" },
        { correct: true, text: "This bag belongs to me.", note: "" },
        { correct: true, text: "I'm having a great time.", note: "\"have\" meaning \"experience\" IS used in continuous — context matters" }
      ]
    }
  ],
  commonMistakes: [
    "Using present perfect with a specific past time word: \"I have finished it yesterday\" ✘ → \"I finished it yesterday\" ✔.",
    "Putting state verbs in continuous form: \"I am knowing the answer\" ✘ → \"I know the answer\" ✔.",
    "Confusing past simple and past perfect order: use past perfect only for the earlier of two past events, not just any past event.",
    "Overusing \"will\" for pre-made plans: \"I will go to Spain next month\" (already booked) — better as \"I'm going to Spain\" or \"I'm going to Spain next month\" since it's already decided.",
    "Forgetting the auxiliary in questions/negatives: \"She no like coffee\" ✘ → \"She doesn't like coffee\" ✔."
  ]
});

window.EXERCISES["tenses"] = [
  { id:"tn-1", level:1, type:"mcq", prompt:"Choose the correct present simple form: She ___ to work every day.", options:["walk","walks","is walk","walking"], answer:"walks", explanationCorrect:" Third-person singular subjects (he/she/it) add -s in the present simple.", explanationWrong:" With he/she/it subjects, the present simple verb needs an -s ending: walks, not walk." },
  { id:"tn-2", level:1, type:"mcq", prompt:"Right now, I ___ my homework.", options:["do","did","am doing","have done"], answer:"am doing", explanationCorrect:" \"Right now\" signals an action in progress at this moment — present continuous.", explanationWrong:" The time marker \"right now\" calls for the present continuous (am/is/are + -ing), not present simple or another tense." },
  { id:"tn-3", level:1, type:"fill", prompt:"Yesterday, she ___ (visit) her grandmother.", answer:"visited", explanationCorrect:" A specific finished past time (\"yesterday\") requires past simple.", explanationWrong:" \"Yesterday\" is a specific completed time in the past, which requires the past simple form: visited." },
  { id:"tn-4", level:1, type:"mcq", prompt:"I ___ my keys — I can't find them anywhere!", options:["lost","have lost","was losing","lose"], answer:"have lost", explanationCorrect:" A past action with a present result (I don't have the keys now) uses present perfect.", explanationWrong:" The present consequence (\"can't find them now\") signals present perfect, connecting a past action to the current moment." },
  { id:"tn-5", level:2, type:"mcq", prompt:"While I ___ dinner, the phone rang.", options:["cook","cooked","was cooking","have cooked"], answer:"was cooking", explanationCorrect:" A longer action in progress (cooking) interrupted by a shorter one (the phone ringing) uses past continuous + past simple.", explanationWrong:" The ongoing background action interrupted by a sudden event takes past continuous; the interruption itself (\"rang\") stays in past simple." },
  { id:"tn-6", level:2, type:"fill", prompt:"By the time we arrived, the film ___ (already/start).", answer:"had already started", acceptedAnswers:["had started already","had already begun"], explanationCorrect:" An event that happened before another past event (arriving) needs past perfect: had already started.", explanationWrong:" Since the film started before we arrived (an earlier point in the past), it needs the past perfect: had already started." },
  { id:"tn-7", level:2, type:"mcq", prompt:"She ___ in this company for five years now.", options:["works","is working","has worked","worked"], answer:"has worked", explanationCorrect:" \"For five years, and still going\" is a classic present perfect signal — action started in the past, continues now.", explanationWrong:" With \"for + duration\" describing an unfinished period continuing into the present, present perfect is required: has worked." },
  { id:"tn-8", level:2, type:"mcq", prompt:"Look at those dark clouds! It ___ soon.", options:["will rain","is going to rain","rains","is raining"], answer:"is going to rain", explanationCorrect:" Predictions based on visible present evidence use \"going to,\" not \"will.\"", explanationWrong:" \"Going to\" is used for predictions with present evidence (the dark clouds), unlike \"will,\" which is for spontaneous predictions without evidence." },
  { id:"tn-9", level:3, type:"fill", prompt:"I've been waiting here ___ two hours! (duration marker for a length of time)", answer:"for", explanationCorrect:" \"For\" is used with a period of time (for two hours); \"since\" is used with a starting point (since 2 p.m.).", explanationWrong:" Use \"for\" with a length/duration of time (for two hours) and \"since\" with a specific starting point (since 2 p.m.)." },
  { id:"tn-10", level:3, type:"mcq", prompt:"Choose the sentence that correctly uses present perfect continuous.", options:["I have been know him for ten years.","I have known him for ten years.","I have been knowing him for ten years.","I am knowing him for ten years."], answer:"I have known him for ten years.", explanationCorrect:" \"Know\" is a state verb and is never used in continuous forms — use present perfect simple instead.", explanationWrong:" State verbs like \"know\" don't take continuous forms, even in the perfect continuous — the correct form is the present perfect simple: have known." },
  { id:"tn-11", level:3, type:"mcq", prompt:"This time next week, I ___ on a beach in Bali.", options:["lie","will lie","will be lying","have lain"], answer:"will be lying", explanationCorrect:" An action in progress at a specific future moment (\"this time next week\") uses future continuous.", explanationWrong:" The specific future moment (\"this time next week\") describing an action in progress calls for future continuous: will be lying." },
  { id:"tn-12", level:3, type:"fill", prompt:"He was exhausted because he ___ (work) all day without a break.", answer:"had been working", explanationCorrect:" Past perfect continuous emphasizes the duration of an action leading up to a past state (exhaustion).", explanationWrong:" To emphasize the duration of an action leading up to a past state, use past perfect continuous: had been working." },
  { id:"tn-13", level:4, type:"mcq", prompt:"Choose the correct sentence.", options:["I have seen that movie last week.","I saw that movie last week.","I have saw that movie last week.","I was seeing that movie last week."], answer:"I saw that movie last week.", explanationCorrect:" \"Last week\" is a specific finished time, so past simple is required — present perfect is never used with definite past time expressions.", explanationWrong:" Definite past time expressions like \"last week\" require past simple, never present perfect, which is reserved for unspecified or continuing time." },
  { id:"tn-14", level:4, type:"mcq", prompt:"By 2030, scientists ___ a cure for many currently incurable diseases, most experts predict.", options:["will find","will have found","found","have found"], answer:"will have found", explanationCorrect:" An action expected to be completed before a specific future point uses future perfect.", explanationWrong:" Completion before a stated future deadline (\"by 2030\") requires future perfect: will have found." },
  { id:"tn-15", level:4, type:"fill", prompt:"Next April, they ___ (live) in this house for exactly twenty years. (emphasize ongoing duration up to a future point)", answer:"will have been living", explanationCorrect:" Future perfect continuous emphasizes duration up to a specific future point: will have been living.", explanationWrong:" To emphasize an ongoing duration that will continue up to a specific future point, use future perfect continuous: will have been living." },
  { id:"tn-16", level:5, type:"mcq", prompt:"Choose the version with correct tense sequencing throughout.", options:["When she arrives, we will have already eaten dinner, so we won't be hungry.","When she will arrive, we have already eaten dinner.","When she arrives, we will already eat dinner.","When she will have arrived, we already ate dinner."], answer:"When she arrives, we will have already eaten dinner, so we won't be hungry.", explanationCorrect:" Time clauses with \"when\" use present simple (not \"will\") to refer to the future, while the main clause correctly uses future perfect for an action completed before that point.", explanationWrong:" In time clauses starting with when/before/after/as soon as, English uses present tense (not \"will\") even for future meaning; the main clause can use future perfect for something completed by then." },
  { id:"tn-17", level:5, type:"fill", prompt:"I wish I ___ (know) about the meeting earlier — I would have prepared. (hypothetical regret about the past, using past perfect after \"wish\")", answer:"had known", explanationCorrect:" \"Wish + past perfect\" expresses regret about something in the past that didn't happen the way you wanted.", explanationWrong:" To express regret about the past with \"wish,\" use the past perfect: I wish I had known." },
  { id:"tn-18", level:5, type:"mcq", prompt:"Identify the sentence where the state verb is used correctly.", options:["I'm loving this song right now — turn it up!","I am understanding your point completely.","This soup is tasting amazing — did you add basil?","She's having a wonderful time at the party."], answer:"She's having a wonderful time at the party.", explanationCorrect:" \"Have\" meaning \"experience\" (as in \"have a good time\") is an action use, not the state meaning of possession — so continuous is correct here. \"Love,\" \"understand,\" and \"taste\" (as a state) are not normally used continuously in standard English (though \"I'm loving it\" is a well-known informal/marketing exception).", explanationWrong:" \"Have\" can be continuous when it means \"experience\" rather than \"possess\" (having a good time), unlike true state verbs such as understand or taste (as a sensory state), which standard grammar keeps in simple form." }
];

/* =========================================================
   6. SUBJECT-VERB AGREEMENT
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "agreement",
  order: 6,
  icon: "🤝",
  title: "Subject-Verb Agreement",
  shortDesc: "Every rule for matching verbs correctly to singular and plural subjects.",
  intro: "The core rule is simple — singular subjects take singular verbs, plural subjects take plural verbs — but English has a long list of tricky exceptions. This section covers all of them.",
  rules: [
    {
      title: "The basic rule",
      text: `<p>A singular subject takes a singular verb; a plural subject takes a plural verb. Remember: in the present simple, singular verbs often end in -s, while the plural noun often also ends in -s — they move in opposite directions.</p>`,
      examples: [
        { correct: true, text: "The dog barks.", note: "singular subject + singular verb" },
        { correct: true, text: "The dogs bark.", note: "plural subject + plural verb (no -s)" }
      ]
    },
    {
      title: "Words between subject and verb don't change agreement",
      text: `<p>Ignore prepositional phrases and other interrupters between the subject and the verb — the verb still agrees with the true subject, not the nearest noun.</p>`,
      examples: [
        { correct: true, text: "The basket of apples is on the table.", note: "subject = basket (singular), not apples" },
        { correct: false, text: "The basket of apples are on the table.", note: "" },
        { correct: true, text: "One of the students has forgotten his book.", note: "subject = one" }
      ]
    },
    {
      title: "Compound subjects with \"and\"",
      text: `<p>Two or more subjects joined by "and" normally take a plural verb — unless they refer to a single unit/idea, in which case the verb is singular.</p>`,
      examples: [
        { correct: true, text: "Tom and Jerry are best friends.", note: "two separate subjects → plural" },
        { correct: true, text: "Bread and butter is my favorite breakfast.", note: "single combined idea → singular" },
        { correct: true, text: "The CEO and founder of the company is retiring.", note: "one person with two roles → singular" }
      ]
    },
    {
      title: "Or / nor: the verb agrees with the nearer subject",
      text: `<p>With <strong>or, nor, either...or, neither...nor</strong>, the verb agrees with the subject closest to it.</p>`,
      examples: [
        { correct: true, text: "Neither the teacher nor the students were ready.", note: "agrees with \"students\" (nearer)" },
        { correct: true, text: "Neither the students nor the teacher was ready.", note: "agrees with \"teacher\" (nearer)" },
        { correct: true, text: "Either my parents or my sister is picking me up.", note: "" }
      ]
    },
    {
      title: "Collective nouns",
      text: `<p>Collective nouns (team, family, committee, government, staff, audience, jury) usually take a <strong>singular</strong> verb when acting as one unit, but can take a <strong>plural</strong> verb (especially in British English) when emphasizing the individual members acting separately.</p>`,
      examples: [
        { correct: true, text: "The team is winning the championship this year.", note: "acting as one unit" },
        { correct: true, text: "The team are arguing among themselves.", note: "members acting individually — British usage" },
        { correct: true, text: "My family is very supportive.", note: "" }
      ]
    },
    {
      title: "Indefinite pronouns as subjects",
      text: `<p>See the Pronouns section for full detail. Quick recap: everyone/everybody/everything/someone/somebody/anything/nothing/each/either/neither are always singular. Both/few/many/several are always plural. All/most/some/none/any agree with the noun that follows "of."</p>`,
      examples: [
        { correct: true, text: "Each of the answers is correct.", note: "" },
        { correct: true, text: "Both of the answers are correct.", note: "" },
        { correct: true, text: "Some of the cake was eaten.", note: "uncountable" },
        { correct: true, text: "Some of the cakes were eaten.", note: "countable plural" }
      ]
    },
    {
      title: "Quantities, amounts, and measurements as a single unit",
      text: `<p>When a plural-looking expression of money, time, distance, or weight is treated as a single total amount, it takes a singular verb.</p>`,
      examples: [
        { correct: true, text: "Ten dollars is too much for a coffee.", note: "one total amount" },
        { correct: true, text: "Five miles is a long walk.", note: "" },
        { correct: true, text: "Two-thirds of the cake was eaten.", note: "fraction agrees with singular \"cake\"" },
        { correct: true, text: "Two-thirds of the guests were late.", note: "fraction agrees with plural \"guests\"" }
      ]
    },
    {
      title: "Titles, names, and \"-ics\" subjects treated as singular",
      text: `<p>Titles of books/movies, the names of countries/organizations, and academic subjects ending in "-ics" (physics, economics, mathematics, athletics) are grammatically singular.</p>`,
      examples: [
        { correct: true, text: "\"The Avengers\" is my favorite movie.", note: "" },
        { correct: true, text: "The United States has 50 states.", note: "one nation, singular" },
        { correct: true, text: "Economics is a fascinating subject.", note: "" }
      ]
    },
    {
      title: "Inverted word order: verb still agrees with the true subject",
      text: `<p>In sentences beginning with "here/there/there is/there are" or in questions, find the real subject (which usually comes after the verb) to determine agreement.</p>`,
      examples: [
        { correct: true, text: "There is a book on the table.", note: "subject = book (singular)" },
        { correct: true, text: "There are three books on the table.", note: "subject = books (plural)" },
        { correct: true, text: "Where are my keys?", note: "subject = keys (plural)" }
      ]
    }
  ],
  commonMistakes: [
    "Matching the verb to the nearest noun instead of the real subject: \"The list of items are long\" ✘ → \"The list of items is long\" ✔.",
    "Treating collective nouns inconsistently within the same sentence: pick singular or plural and stay consistent.",
    "Forgetting that \"each\" and \"every\" are always singular, even before a plural-looking phrase: \"Every boy and girl is invited\" ✔ (not \"are\").",
    "Using a plural verb after \"there's\" with a plural subject: \"There's many reasons\" ✘ → \"There are many reasons\" ✔.",
    "Getting confused by \"none\": both \"none is\" and \"none are\" are used, but strict formal style prefers \"none is\" (from \"not one\")."
  ]
});

window.EXERCISES["agreement"] = [
  { id:"ag-1", level:1, type:"mcq", prompt:"The children ___ playing in the garden.", options:["is","are","was","has"], answer:"are", explanationCorrect:" \"Children\" is plural, so it takes the plural verb \"are.\"", explanationWrong:" \"Children\" is an irregular plural noun and requires a plural verb: are, not is." },
  { id:"ag-2", level:1, type:"mcq", prompt:"My sister ___ two cats.", options:["have","has","having","haves"], answer:"has", explanationCorrect:" \"Sister\" is singular (he/she/it), so the verb \"have\" becomes \"has.\"", explanationWrong:" With a singular subject like \"sister,\" the verb \"have\" changes to \"has\" in the present simple." },
  { id:"ag-3", level:1, type:"fill", prompt:"The basket of apples ___ (be) on the table. (present tense, singular subject)", answer:"is", explanationCorrect:" The true subject is \"basket\" (singular), not \"apples\" — ignore the prepositional phrase in between.", explanationWrong:" The verb should agree with \"basket\" (the true subject), not \"apples,\" which is inside a prepositional phrase — so \"is,\" not \"are.\"" },
  { id:"ag-4", level:2, type:"mcq", prompt:"Neither the manager nor the employees ___ available today.", options:["is","are","was","has"], answer:"are", explanationCorrect:" With \"neither...nor,\" the verb agrees with the nearer subject — \"employees\" (plural) — so the verb is \"are.\"", explanationWrong:" In \"neither...nor\" constructions, the verb matches the subject closest to it, which here is \"employees\" (plural)." },
  { id:"ag-5", level:2, type:"mcq", prompt:"Bread and butter ___ my go-to breakfast.", options:["are","is","were","have been"], answer:"is", explanationCorrect:" \"Bread and butter\" is treated as one combined dish/idea, so it takes a singular verb.", explanationWrong:" Some \"and\"-joined phrases describe a single combined concept (bread and butter as one dish), which takes a singular verb despite the \"and.\"" },
  { id:"ag-6", level:2, type:"fill", prompt:"Each of the students ___ (have) submitted the assignment. (present perfect, singular)", answer:"has", explanationCorrect:" \"Each\" is always singular, regardless of the plural noun that follows (\"students\"), so it takes \"has.\"", explanationWrong:" \"Each\" is always grammatically singular, even when followed by a plural noun phrase like \"of the students\" — so the verb is \"has,\" not \"have.\"" },
  { id:"ag-7", level:2, type:"mcq", prompt:"There ___ several reasons for the delay.", options:["is","are","was","has been"], answer:"are", explanationCorrect:" The true subject after \"there is/are\" is \"reasons\" (plural), so the verb must be \"are.\"", explanationWrong:" In \"there is/are\" sentences, the verb agrees with the noun that follows, which here is the plural \"reasons.\"" },
  { id:"ag-8", level:3, type:"mcq", prompt:"The committee ___ divided on this issue — half want to approve it, half don't.", options:["is","are","was","has"], answer:"are", explanationCorrect:" When a collective noun's members are acting/thinking as separate individuals (divided, disagreeing), a plural verb is more natural.", explanationWrong:" Collective nouns take a plural verb when emphasizing that members are acting or thinking separately, as \"divided\" suggests here." },
  { id:"ag-9", level:3, type:"fill", prompt:"Ten dollars ___ (be) not enough to buy that. (a total amount, singular)", answer:"is", explanationCorrect:" A sum of money treated as a single total amount takes a singular verb.", explanationWrong:" When an amount of money, time, or distance is treated as one total quantity, it takes a singular verb: is, not are." },
  { id:"ag-10", level:3, type:"mcq", prompt:"Two-thirds of the pizza ___ already eaten.", options:["was","were","are","have been"], answer:"was", explanationCorrect:" Fractions agree with the noun that follows \"of\" — \"pizza\" is uncountable/singular, so \"was.\"", explanationWrong:" With fraction subjects (two-thirds, half), the verb agrees with the noun after \"of.\" \"Pizza\" here is singular/uncountable, so it takes \"was.\"" },
  { id:"ag-11", level:3, type:"mcq", prompt:"Physics ___ my favorite subject in school.", options:["are","is","were","have been"], answer:"is", explanationCorrect:" Academic subjects ending in -ics (physics, economics, mathematics) are grammatically singular.", explanationWrong:" Despite the -s ending, subjects like physics and economics are treated as singular nouns and take a singular verb." },
  { id:"ag-12", level:4, type:"fill", prompt:"The number of applicants ___ (increase) significantly this year. (\"the number of\" = singular subject, present tense)", answer:"has increased", acceptedAnswers:["increases"], explanationCorrect:" \"The number of\" is a singular subject (the number itself); contrast with \"a number of,\" which is treated as plural.", explanationWrong:" \"The number of X\" is a singular subject referring to one number, unlike \"a number of X,\" which functions as a plural quantifier." },
  { id:"ag-13", level:4, type:"mcq", prompt:"A number of employees ___ requested remote work options.", options:["has","have","is","was"], answer:"have", explanationCorrect:" \"A number of\" (unlike \"the number of\") functions as a plural quantifier meaning \"several,\" so it takes a plural verb.", explanationWrong:" \"A number of\" means \"several\" and takes a plural verb, unlike \"the number of,\" which refers to one specific number and is singular." },
  { id:"ag-14", level:4, type:"mcq", prompt:"Either the manager or her assistants ___ responsible for approving the budget.", options:["is","are","was","has"], answer:"are", explanationCorrect:" With \"either...or,\" the verb agrees with the nearer subject: \"assistants\" (plural).", explanationWrong:" In \"either...or\" constructions the verb matches whichever subject is closer to it — here that's the plural \"assistants.\"" },
  { id:"ag-15", level:5, type:"fill", prompt:"Every teacher and every student ___ (be) required to wear an ID badge. (present tense — \"every...and every\" is always singular)", answer:"is", explanationCorrect:" \"Every\" makes each noun singular individually, and \"every X and every Y\" stays singular even when joined by \"and.\"", explanationWrong:" \"Every\" forces singular agreement on each noun it modifies, and this stays true even when two \"every\" phrases are joined by \"and\": is, not are." },
  { id:"ag-16", level:5, type:"mcq", prompt:"Choose the most correct sentence in formal, careful English.", options:["None of the answers are correct.","None of the answers is correct.","None of the answer are correct.","None of the answers be correct."], answer:"None of the answers is correct.", explanationCorrect:" \"None\" derives from \"not one\" and is treated as singular in strict formal usage, though \"none...are\" is common and accepted in everyday speech.", explanationWrong:" In careful, formal style, \"none\" (from \"not one\") is treated as singular — \"none is correct\" — even though \"none are\" is widely accepted informally." },
  { id:"ag-17", level:5, type:"mcq", prompt:"\"The Godfather\" ___ often ranked among the greatest films ever made.", options:["are","is","were","have been"], answer:"is", explanationCorrect:" Titles of single works (movies, books) are treated as singular, regardless of any plural words inside the title.", explanationWrong:" A title — even one containing plural-sounding words — refers to one single work and takes a singular verb." }
];
