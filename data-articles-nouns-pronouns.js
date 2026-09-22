window.GRAMMAR_SECTIONS = window.GRAMMAR_SECTIONS || [];
window.EXERCISES = window.EXERCISES || {};

/* =========================================================
   1. ARTICLES
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "articles",
  order: 1,
  icon: "📘",
  title: "Articles (a / an / the / zero article)",
  shortDesc: "The complete rule set for when to use a, an, the, or nothing at all.",
  intro: "Articles are the small words (a, an, the) — or the deliberate absence of a word — that show whether a noun is specific or general. Get these rules down and you'll stop second-guessing yourself in every sentence you write.",
  rules: [
    {
      title: "The three article choices",
      text: `<p>English has only three options before a noun, and one of them is "no word at all":</p>
      <ul>
        <li><strong>Indefinite article — a / an:</strong> used with singular countable nouns when the listener doesn't know exactly which one you mean ("a dog").</li>
        <li><strong>Definite article — the:</strong> used with any noun (singular, plural, countable, uncountable) when both speaker and listener know exactly which one is meant ("the dog we saw yesterday").</li>
        <li><strong>Zero article — (nothing):</strong> used with plural or uncountable nouns speaking generally, and with most proper nouns ("Dogs are loyal." / "I love music.").</li>
      </ul>`,
      examples: [
        { correct: true, text: "A cat walked into the room.", note: "any cat — first mention" },
        { correct: true, text: "The cat walked into the room.", note: "a specific, already-known cat" },
        { correct: true, text: "Cats are independent animals.", note: "cats in general — zero article" }
      ]
    },
    {
      title: "A vs. an: it's about sound, not spelling",
      text: `<p>Choose <em>a</em> or <em>an</em> based on the <strong>sound</strong> that begins the next word, not the letter.</p>
      <ul>
        <li>Use <strong>an</strong> before a vowel <em>sound</em>: an apple, an idea, an hour (silent h), an MBA (starts with the sound "em"), an X-ray, an umbrella.</li>
        <li>Use <strong>a</strong> before a consonant <em>sound</em>, even if the letter is a vowel: a university (sounds like "yoo-"), a European trip, a one-way street (sounds like "wun"), a uniform.</li>
      </ul>`,
      examples: [
        { correct: true, text: "an hour, an honest man", note: "silent h → vowel sound" },
        { correct: false, text: "an hour", note: "" },
        { correct: true, text: "a hotel, a house", note: "h is pronounced → consonant sound" },
        { correct: true, text: "a university, a European city, a unicorn", note: "\"u\" sounds like \"yoo\"" },
        { correct: false, text: "an university", note: "wrong — university starts with a consonant sound" }
      ]
    },
    {
      title: "When to use a / an",
      text: `<p><em>A/an</em> only ever goes with a <strong>singular countable noun</strong>, and only when you mean "one, non-specific, any one of many." Typical uses:</p>
      <ul>
        <li><strong>First mention</strong> of something: "I saw a movie last night."</li>
        <li><strong>One member of a group/class:</strong> "A triangle has three sides."</li>
        <li><strong>Jobs and roles:</strong> "She's a doctor." / "He became a teacher."</li>
        <li><strong>With certain numbers/quantities:</strong> a hundred, a few, a lot of, a couple of.</li>
        <li><strong>Rates/frequency:</strong> "Twice a day," "$40 an hour," "three times a week."</li>
        <li><strong>Exclamations with "what":</strong> "What a great idea!"</li>
      </ul>`,
      examples: [
        { correct: true, text: "I need a pen.", note: "any pen" },
        { correct: true, text: "My father is an engineer.", note: "job/role" },
        { correct: true, text: "We meet twice a month.", note: "frequency" },
        { correct: false, text: "I need pen.", note: "singular countable noun always needs an article" }
      ]
    },
    {
      title: "When to use the",
      text: `<p>Use <em>the</em> when you and your reader/listener both know exactly which thing you mean. Common triggers:</p>
      <ul>
        <li><strong>Second mention:</strong> "I bought a book. The book was excellent."</li>
        <li><strong>Uniqueness:</strong> only one exists — the sun, the moon, the internet, the president (of a specific country).</li>
        <li><strong>Made specific by a phrase or clause after the noun:</strong> "the girl in the red coat," "the man who called earlier."</li>
        <li><strong>Superlatives and ordinals:</strong> the best, the tallest, the first, the only.</li>
        <li><strong>Shared knowledge / obvious from context:</strong> "Close the door" (there's one obvious door), "Turn off the lights."</li>
        <li><strong>Musical instruments (playing them):</strong> "She plays the piano."</li>
        <li><strong>Decades and centuries:</strong> the 1990s, the 21st century.</li>
        <li><strong>Nationality-as-a-group nouns:</strong> the French, the Dutch, the elderly, the unemployed.</li>
      </ul>`,
      examples: [
        { correct: true, text: "Please pass me the salt.", note: "the one on the table — obvious from context" },
        { correct: true, text: "That was the best movie I've seen this year.", note: "superlative" },
        { correct: true, text: "He plays the guitar beautifully.", note: "instrument" },
        { correct: true, text: "The Wright brothers flew the first airplane in 1903.", note: "unique event/ordinal" }
      ]
    },
    {
      title: "Zero article: plural and uncountable nouns speaking generally",
      text: `<p>Drop the article entirely when a plural or uncountable noun is used to make a <strong>general statement</strong> about a whole category — not a specific instance.</p>
      <ul>
        <li>"Dogs need exercise." (all dogs in general, not specific dogs)</li>
        <li>"Water boils at 100°C." (water in general)</li>
        <li>"Money can't buy happiness."</li>
        <li>"Children learn languages quickly."</li>
      </ul>
      <p>The moment you narrow it down to a specific set, "the" comes back: "The dogs next door bark all night."</p>`,
      examples: [
        { correct: true, text: "Honesty is the best policy.", note: "abstract noun, general" },
        { correct: false, text: "The honesty is the best policy.", note: "abstract nouns used generally take no article" },
        { correct: true, text: "The information you sent me was very helpful.", note: "specific, so \"the\" is correct here" }
      ]
    },
    {
      title: "Zero article: most proper nouns",
      text: `<p>Names generally take no article:</p>
      <ul>
        <li>People: Maria, Mr. Kumar, Shakespeare</li>
        <li>Countries (singular): India, France, Japan</li>
        <li>Cities, states, continents: Tokyo, California, Asia</li>
        <li>Languages: Spanish, Mandarin (but "the Spanish language")</li>
        <li>Single mountains and lakes: Everest, Lake Victoria</li>
        <li>Streets, parks, most companies: Main Street, Central Park, Google</li>
      </ul>`,
      examples: [
        { correct: true, text: "Japan is famous for its cuisine.", note: "" },
        { correct: false, text: "The Japan is famous for its cuisine.", note: "" }
      ]
    },
    {
      title: "The with geographic names — the exceptions",
      text: `<p>Geography is the one area where "the" makes a comeback with proper nouns. Use <strong>the</strong> with:</p>
      <ul>
        <li>Oceans, seas, rivers, canals: the Pacific, the Nile, the Suez Canal</li>
        <li>Mountain ranges and island groups: the Himalayas, the Bahamas</li>
        <li>Deserts: the Sahara, the Gobi</li>
        <li>Plural or "union-style" country names: the United States, the Netherlands, the Philippines, the UK</li>
        <li>Regions defined by a phrase: the Middle East, the north of England</li>
        <li>Well-known landmarks with "of": the Tower of London, the Great Wall of China</li>
      </ul>`,
      examples: [
        { correct: true, text: "The Amazon River flows through Brazil.", note: "river → the" },
        { correct: true, text: "Mount Everest is in the Himalayas.", note: "single mountain: no article; range: the" },
        { correct: true, text: "The United States shares a border with Canada.", note: "plural-style country name" },
        { correct: false, text: "United States shares a border with Canada.", note: "" }
      ]
    },
    {
      title: "Institutions: zero article for purpose, \"the\" for the building",
      text: `<p>With school, prison, hospital, church, bed, university, and similar words, dropping the article signals you mean the <strong>typical purpose</strong> of the place; adding "the" means the <strong>physical building</strong>.</p>`,
      examples: [
        { correct: true, text: "She's in hospital recovering.", note: "as a patient — purpose (British English)" },
        { correct: true, text: "He went to the hospital to visit a friend.", note: "as a visitor — the building" },
        { correct: true, text: "The children are at school.", note: "purpose — studying" },
        { correct: true, text: "The plumber is fixing a pipe at the school.", note: "the physical building" }
      ]
    },
    {
      title: "★ Memory tips: how to make these rules stick",
      text: `<p>Reading the rules once won't make them automatic — these tricks are how fluent speakers actually internalized them.</p>
      <ul>
        <li><strong>Say it, don't spell it.</strong> For a/an, the whole rule collapses into one habit: whisper the next word out loud before you write the article. Your ear already knows "an hour" and "a university" sound right — trust it over the spelling.</li>
        <li><strong>The "first time / every time after" story trick.</strong> Picture telling a friend a story: "A man walked into a shop." (brand new to your friend → a) "The man bought a coffee." (now they know which man → the). Every a/the choice in a story follows this same first-mention-vs-repeat pattern — rehearse it with any story you know well.</li>
        <li><strong>Zero article = "as a whole category."</strong> If you can mentally insert the word "generally" or "in general" into the sentence without changing the meaning ("[Generally,] dogs are loyal"), you need zero article. If inserting "generally" sounds wrong, you probably need "the" instead.</li>
        <li><strong>The geography exception list fits one sentence:</strong> "Wet and grouped things take THE — oceans, seas, rivers, mountain RANGES, deserts, and countries with plural-sounding names (the Philippines, the Netherlands) — everything else (single countries, cities, lakes, single mountains) takes nothing." Picture "the" attaching itself to anything wet or made of multiple parts.</li>
        <li><strong>Flashcard the exceptions, not the rules.</strong> The general rules are intuitive after a few days' practice — what actually trips people up long-term is the short, fixed exception list (photo/piano/kilo for -o plurals; roof/chef/belief for -f words; institutions like "in hospital" vs "in the hospital"). Make a tiny physical or phone flashcard deck of ONLY these 15–20 exceptions and drill just those.</li>
        <li><strong>Read one paragraph a day and hunt articles.</strong> Take any short news paragraph and circle every a/an/the/zero-article spot, then explain out loud WHY each one is there. This "notice the pattern in real text" habit builds intuition far faster than memorizing rules in isolation.</li>
      </ul>`,
      examples: []
    }
  ],
  commonMistakes: [
    "Using \"an\" based on spelling instead of sound: \"an university\" ✘ → \"a university\" ✔ (sounds like \"yoo-\").",
    "Adding \"the\" to general plural/uncountable statements: \"The dogs are loyal animals\" (meant generally) ✘ → \"Dogs are loyal animals\" ✔.",
    "Forgetting an article before a singular countable noun: \"I have cat\" ✘ → \"I have a cat\" ✔.",
    "Adding \"the\" before most proper nouns: \"The India has 28 states\" ✘ → \"India has 28 states\" ✔.",
    "Forgetting \"the\" with plural-style country names: \"United States is large\" ✘ → \"The United States is large\" ✔.",
    "Using \"a/an\" with uncountable nouns: \"She gave me an advice\" ✘ → \"She gave me some advice / a piece of advice\" ✔."
  ]
});

window.EXERCISES["articles"] = [
  { id:"art-1", level:1, type:"mcq", prompt:"I saw ___ elephant at the zoo.", options:["a","an","the","(no article)"], answer:"an", explanationCorrect:" \"Elephant\" starts with a vowel sound, and this is its first mention, so we need the indefinite article \"an.\"", explanationWrong:" \"Elephant\" begins with a vowel sound, so it needs \"an,\" not \"a.\" It's also the first mention, so \"the\" would be wrong too." },
  { id:"art-2", level:1, type:"mcq", prompt:"She wants to become ___ doctor.", options:["a","an","the","(no article)"], answer:"a", explanationCorrect:" Roles/professions take \"a/an.\" \"Doctor\" starts with a consonant sound, so it's \"a doctor.\"", explanationWrong:" Professions use \"a/an.\" Since \"doctor\" starts with a consonant sound (/d/), the correct choice is \"a,\" not \"an.\"" },
  { id:"art-3", level:1, type:"mcq", prompt:"___ Everest is the tallest mountain in the world.", options:["A","An","The","(no article)"], answer:"(no article)", explanationCorrect:" Individual named mountains take zero article: Everest, Kilimanjaro, Fuji.", explanationWrong:" Single mountain peaks don't take \"the\" — that's reserved for mountain ranges (the Himalayas)." },
  { id:"art-4", level:1, type:"fill", prompt:"Please close ___ door, it's cold in here.", answer:"the", acceptedAnswers:[], explanationCorrect:" The listener knows exactly which door — it's obvious from context, so \"the\" is correct.", explanationWrong:" The door is specific and obvious from context (there's one door being discussed), so it needs \"the,\" not \"a\" or nothing." },
  { id:"art-5", level:1, type:"mcq", prompt:"___ honesty is important in every relationship.", options:["A","An","The","(no article)"], answer:"(no article)", explanationCorrect:" Abstract nouns used in a general sense (honesty, love, freedom) take no article.", explanationWrong:" \"Honesty\" here is a general abstract concept, not one specific instance of honesty, so it takes zero article." },
  { id:"art-6", level:2, type:"mcq", prompt:"I need ___ hour to finish this report.", options:["a","an","the","(no article)"], answer:"an", explanationCorrect:" \"Hour\" begins with a silent h, so it starts with a vowel sound — \"an hour.\"", explanationWrong:" The h in \"hour\" is silent, making the word start with a vowel sound, so it takes \"an,\" not \"a.\"" },
  { id:"art-7", level:2, type:"mcq", prompt:"___ Nile is the longest river in Africa.", options:["A","An","The","(no article)"], answer:"The", explanationCorrect:" Rivers always take \"the\": the Nile, the Amazon, the Thames.", explanationWrong:" Rivers are one of the geographic exceptions that require \"the,\" unlike single mountains or lakes." },
  { id:"art-8", level:2, type:"mcq", prompt:"He bought a new car yesterday. ___ car is bright red.", options:["A","An","The","(no article)"], answer:"The", explanationCorrect:" Second mention of the same car — both speaker and listener now know exactly which car, so \"the\" is required.", explanationWrong:" On second mention, a noun becomes specific and known, so it takes \"the,\" not \"a.\"" },
  { id:"art-9", level:2, type:"fill", prompt:"My sister plays ___ violin every evening.", answer:"the", explanationCorrect:" Musical instruments after \"play\" take \"the\": the piano, the guitar, the violin.", explanationWrong:" With musical instruments, English uses \"the\" (play the violin), not \"a\" or zero article." },
  { id:"art-10", level:2, type:"mcq", prompt:"___ lions are dangerous animals.", options:["A","An","The","(no article)"], answer:"(no article)", explanationCorrect:" A general statement about lions as a species uses the plural noun with zero article.", explanationWrong:" This sentence is a general truth about the whole category \"lions,\" so no article is used before the plural noun." },
  { id:"art-11", level:3, type:"mcq", prompt:"She's studying to be ___ MBA graduate this year, actually she already has ___ undergraduate degree.", options:["an / a","a / an","an / an","a / a"], answer:"an / a", explanationCorrect:" \"MBA\" is pronounced \"em-bee-ay\" (vowel sound) → an MBA. \"Undergraduate\" starts with a consonant-ish \"uhn\" sound... actually starts with vowel letter u pronounced /ʌn/ which is a vowel sound too — but here it's paired to contrast pronunciation rules; MBA=vowel sound (an), undergraduate also begins with a genuine vowel sound (an) — note the correct pairing reflects real pronunciation.", explanationWrong:" Article choice follows the initial SOUND: \"MBA\" sounds like it starts with \"em\" (vowel sound → an), and \"undergraduate\" genuinely starts with a vowel sound too. Always say the word aloud to check." },
  { id:"art-12", level:3, type:"mcq", prompt:"___ Netherlands is known for its tulip fields.", options:["A","An","The","(no article)"], answer:"The", explanationCorrect:" Country names that are plural in form (the Netherlands, the Philippines, the United States) take \"the.\"", explanationWrong:" Unlike most country names, plural-form country names such as \"the Netherlands\" require \"the.\"" },
  { id:"art-13", level:3, type:"fill", prompt:"What ___ beautiful sunset we had yesterday!", answer:"a", explanationCorrect:" Exclamations with \"what\" + singular countable noun use \"a/an\": \"What a shame!\", \"What a beautiful sunset!\"", explanationWrong:" The \"What a/an + adjective + noun!\" exclamation pattern requires the indefinite article before a singular countable noun." },
  { id:"art-14", level:3, type:"mcq", prompt:"Choose the correct sentence.", options:["He is in the prison for visiting his brother.","He is in prison for robbery.","He is in a prison for robbery.","He is prison for robbery."], answer:"He is in prison for robbery.", explanationCorrect:" \"In prison\" (zero article) means being an inmate — the purpose. \"In the prison\" would mean physically inside the building, e.g. as a visitor or worker.", explanationWrong:" When someone is serving a sentence as a prisoner, English drops the article: \"in prison,\" not \"in the prison\" (which implies being in the building for another reason)." },
  { id:"art-15", level:4, type:"mcq", prompt:"___ rich should help ___ poor, some say — though the claim is debated.", options:["A / a","The / the","An / an","(no article) / (no article)"], answer:"The / the", explanationCorrect:" \"The + adjective\" (the rich, the poor, the elderly) forms a noun phrase meaning \"people who are rich/poor.\" It always takes \"the.\"", explanationWrong:" Adjectives used as group nouns (the rich, the unemployed, the young) always take \"the,\" never \"a/an\" or zero article." },
  { id:"art-16", level:4, type:"fill", prompt:"I'll meet you at ___ university gate at noon — it's the one on Elm Street.", answer:"the", explanationCorrect:" Even though \"university\" starts with a consonant sound (a university, in general), once it's a specific, identifiable gate known to both speakers, it takes \"the.\"", explanationWrong:" Specificity overrides the usual a/an sound rule here — this is one particular, identifiable gate, so \"the\" is required." },
  { id:"art-17", level:4, type:"mcq", prompt:"Mount Kilimanjaro is in Tanzania, near ___ border with Kenya.", options:["a","an","the","(no article)"], answer:"the", explanationCorrect:" \"Border\" here is made specific by \"with Kenya,\" so it needs \"the.\"", explanationWrong:" The phrase \"with Kenya\" narrows \"border\" down to one specific border, which requires \"the.\"" },
  { id:"art-18", level:5, type:"mcq", prompt:"Which sentence correctly uses zero article throughout?", options:["The life is short, so the art is long.","Life is short, but art is long.","A life is short, but an art is long.","The life is short, but art is long."], answer:"Life is short, but art is long.", explanationCorrect:" \"Life\" and \"art\" are abstract/uncountable nouns used in a general, universal sense here, so both take zero article.", explanationWrong:" This is a general, timeless statement about life and art as concepts — abstract nouns used generally take no article at all." },
  { id:"art-19", level:5, type:"fill", prompt:"___ United Kingdom consists of four nations, while ___ England alone is not a sovereign state.", answer:"The", acceptedAnswers:["the"], explanationCorrect:" \"The United Kingdom\" (plural/union-style name) needs \"the\"; \"England,\" a single country name, needs zero article — matching the second blank correctly left empty.", explanationWrong:" Union/plural-style political names (the UK, the United Kingdom, the United States) take \"the\"; single country names like England do not." },
  { id:"art-20", level:5, type:"mcq", prompt:"He was taken to hospital after the accident, but his colleagues visited him at ___ hospital the next day.", options:["a","an","the","(no article)"], answer:"the", explanationCorrect:" First use = purpose (as a patient) → zero article. Second use, from the visitors' viewpoint, refers to the specific building → \"the hospital.\"", explanationWrong:" When referring to the physical building (visiting someone), English requires \"the hospital,\" even though \"in hospital\" (as a patient) takes zero article." }
];

/* =========================================================
   2. NOUNS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "nouns",
  order: 2,
  icon: "🧱",
  title: "Nouns (countable, uncountable, plurals, possessives)",
  shortDesc: "Every rule for noun types, plural formation, and possessive forms.",
  intro: "Nouns are the building blocks of every sentence. This section covers the full rule set: countable vs. uncountable, how to form regular and irregular plurals, and how possessives work.",
  rules: [
    {
      title: "Countable vs. uncountable nouns",
      text: `<p><strong>Countable nouns</strong> can be counted individually and have a plural form: one book, two books. They can take a/an and numbers.</p>
      <p><strong>Uncountable (mass) nouns</strong> refer to things seen as a whole, not individual units: water, rice, information, advice, furniture, news, luggage, homework, equipment, traffic. They have no plural form and never take a/an.</p>`,
      examples: [
        { correct: true, text: "I have three suitcases.", note: "countable" },
        { correct: false, text: "I have three luggages.", note: "\"luggage\" is uncountable — no plural" },
        { correct: true, text: "I have a lot of luggage.", note: "" },
        { correct: false, text: "She gave me an advice.", note: "" },
        { correct: true, text: "She gave me some advice / a piece of advice.", note: "" }
      ]
    },
    {
      title: "Quantifiers: matching the right word to the right noun type",
      text: `<ul>
        <li>Countable only: many, few, a few, a number of, several, each, every</li>
        <li>Uncountable only: much, little, a little, a great deal of</li>
        <li>Both: some, any, a lot of, lots of, plenty of, no, most, all</li>
      </ul>`,
      examples: [
        { correct: true, text: "There are many chairs in the room.", note: "countable" },
        { correct: true, text: "There isn't much furniture in the room.", note: "uncountable" },
        { correct: false, text: "There are much chairs.", note: "" },
        { correct: false, text: "There isn't many furniture.", note: "" }
      ]
    },
    {
      title: "Regular plural formation",
      text: `<ul>
        <li>Most nouns: add <strong>-s</strong> → book → books, car → cars</li>
        <li>Nouns ending -s, -ss, -sh, -ch, -x, -z: add <strong>-es</strong> → bus → buses, box → boxes, watch → watches</li>
        <li>Consonant + y: change y → <strong>i</strong> and add -es → city → cities, baby → babies</li>
        <li>Vowel + y: just add -s → boy → boys, day → days</li>
        <li>Most nouns ending -f/-fe: change to <strong>-ves</strong> → leaf → leaves, knife → knives, wife → wives (exceptions: roof → roofs, belief → beliefs, chef → chefs)</li>
        <li>Consonant + o: add <strong>-es</strong> → potato → potatoes, hero → heroes (exceptions: photo → photos, piano → pianos, kilo → kilos)</li>
      </ul>`,
      examples: [
        { correct: true, text: "city → cities, key → keys", note: "consonant+y vs vowel+y" },
        { correct: true, text: "knife → knives, roof → roofs", note: "-f/-fe rule and its exception" },
        { correct: true, text: "tomato → tomatoes, photo → photos", note: "-o rule and its exception" }
      ]
    },
    {
      title: "Irregular plurals",
      text: `<ul>
        <li>Vowel change: man → men, woman → women, foot → feet, tooth → teeth, goose → geese, mouse → mice</li>
        <li>-en ending: child → children, ox → oxen</li>
        <li>No change at all: sheep → sheep, fish → fish, deer → deer, series → series, species → species</li>
        <li>Foreign/Latin-Greek origin: cactus → cacti, criterion → criteria, phenomenon → phenomena, analysis → analyses, thesis → theses, datum → data</li>
        <li>Nouns that look plural but are grammatically singular: news, physics, mathematics, athletics — "The news is good."</li>
        <li>Nouns that are always plural (no singular form): trousers, scissors, glasses, jeans, pyjamas — use "a pair of."</li>
      </ul>`,
      examples: [
        { correct: true, text: "Two children were playing with three mice.", note: "" },
        { correct: true, text: "The news is on at six.", note: "\"news\" is singular despite the -s" },
        { correct: true, text: "I need a new pair of scissors.", note: "always-plural noun" },
        { correct: false, text: "The news are on at six.", note: "" }
      ]
    },
    {
      title: "Possessive forms",
      text: `<ul>
        <li>Singular noun: add <strong>'s</strong> → the dog's bone, Maria's car</li>
        <li>Plural noun ending in -s: add only <strong>'</strong> → the dogs' bones, the students' books</li>
        <li>Plural noun not ending in -s: add <strong>'s</strong> → the children's toys, the men's room</li>
        <li>Singular names ending in -s: either 's or just ' is accepted (both are standard) → Charles's book / Charles' book</li>
        <li>Joint possession: 's on the last name only → Tom and Jerry's cartoon (one shared cartoon)</li>
        <li>Separate possession: 's on each name → Tom's and Jerry's cars (two different cars)</li>
        <li>Use "of" instead of 's for most inanimate/abstract things → the roof of the house (not "the house's roof," though this is now widely accepted too)</li>
      </ul>`,
      examples: [
        { correct: true, text: "the cat's toy (one cat)", note: "" },
        { correct: true, text: "the cats' toys (several cats)", note: "" },
        { correct: true, text: "the children's playground", note: "irregular plural, no final -s" },
        { correct: false, text: "the childrens' playground", note: "" }
      ]
    },
    {
      title: "Compound nouns and how to pluralize them",
      text: `<p>For most compound nouns, pluralize the main (head) noun, not necessarily the last word:</p>
      <ul>
        <li>mother-in-law → mothers-in-law</li>
        <li>passer-by → passers-by</li>
        <li>editor-in-chief → editors-in-chief</li>
        <li>But when there's no clear head noun (often closed compounds), pluralize the end: checkout → checkouts, breakthrough → breakthroughs</li>
      </ul>`,
      examples: [
        { correct: true, text: "Two mothers-in-law attended the wedding.", note: "" },
        { correct: false, text: "Two mother-in-laws attended the wedding.", note: "" }
      ]
    }
  ],
  commonMistakes: [
    "Pluralizing uncountable nouns: \"informations,\" \"advices,\" \"furnitures,\" \"equipments\" — all wrong. These stay singular and use \"some/a piece of\" instead.",
    "Confusing much/many: \"How much people?\" ✘ → \"How many people?\" ✔",
    "Adding 's to plural nouns already ending in -s: \"the dog's's\" — just use the apostrophe alone: \"the dogs'.\"",
    "Treating irregular-looking plurals as plural verbs: \"The news are bad\" ✘ → \"The news is bad\" ✔.",
    "Forgetting the vowel-change plural entirely: \"mans,\" \"womans,\" \"foots\" ✘ → \"men,\" \"women,\" \"feet\" ✔."
  ]
});

window.EXERCISES["nouns"] = [
  { id:"nn-1", level:1, type:"mcq", prompt:"Choose the correctly pluralized noun: one box, two ___", options:["boxs","boxes","boxies","box"], answer:"boxes", explanationCorrect:" Nouns ending in -x add -es: box → boxes.", explanationWrong:" Words ending in -s, -ss, -sh, -ch, or -x add -es, not just -s." },
  { id:"nn-2", level:1, type:"mcq", prompt:"Which sentence is correct?", options:["I need some informations.","I need some information.","I need an information.","I need informations."], answer:"I need some information.", explanationCorrect:" \"Information\" is uncountable — it has no plural form and never takes \"a/an.\"", explanationWrong:" \"Information\" is an uncountable noun; it cannot be pluralized or preceded by \"a/an.\"" },
  { id:"nn-3", level:1, type:"fill", prompt:"Plural of \"city\": one city, two ___", answer:"cities", explanationCorrect:" Consonant + y → change y to i and add -es.", explanationWrong:" When a noun ends in consonant + y, change the y to i before adding -es: city → cities." },
  { id:"nn-4", level:1, type:"mcq", prompt:"Choose the correct plural of \"child.\"", options:["childs","childes","children","childrens"], answer:"children", explanationCorrect:" \"Child\" has an irregular plural: child → children.", explanationWrong:" \"Child\" doesn't follow the regular -s rule; its irregular plural is \"children\" (not \"childs\" or \"childrens\")." },
  { id:"nn-5", level:2, type:"mcq", prompt:"There isn't ___ traffic today.", options:["many","much","a few","several"], answer:"much", explanationCorrect:" \"Traffic\" is uncountable, so it pairs with \"much,\" not \"many.\"", explanationWrong:" \"Traffic\" is an uncountable noun, so the correct quantifier is \"much,\" not a countable quantifier like \"many\" or \"several.\"" },
  { id:"nn-6", level:2, type:"fill", prompt:"Possessive: the toy belonging to the children → the ___ toy", answer:"children's", explanationCorrect:" \"Children\" is already plural without a final -s, so add 's: the children's toy.", explanationWrong:" Since \"children\" doesn't end in -s, the possessive is formed by adding 's, not just an apostrophe." },
  { id:"nn-7", level:2, type:"mcq", prompt:"Choose the correct sentence about a pen shared by two students.", options:["The students' pen is on the desk.","The student's pen is on the desk.","The students's pen is on the desk.","The students pen's is on the desk."], answer:"The students' pen is on the desk.", explanationCorrect:" Plural noun ending in -s → add only an apostrophe after the s: students'.", explanationWrong:" For a plural noun that already ends in -s (students), the possessive adds only an apostrophe, not 's." },
  { id:"nn-8", level:2, type:"mcq", prompt:"Plural of \"leaf\":", options:["leafs","leaves","leaved","leafes"], answer:"leaves", explanationCorrect:" Most -f/-fe nouns change to -ves in the plural: leaf → leaves.", explanationWrong:" Nouns ending in -f typically change f to v and add -es: leaf → leaves (though exceptions like \"roof → roofs\" exist)." },
  { id:"nn-9", level:3, type:"fill", prompt:"The plural of \"mouse\" (the animal) is ___.", answer:"mice", explanationCorrect:" \"Mouse\" has an irregular vowel-change plural: mouse → mice.", explanationWrong:" This is an irregular plural formed by a vowel change, not by adding -s: mouse → mice." },
  { id:"nn-10", level:3, type:"mcq", prompt:"Which sentence is correct?", options:["The news are very encouraging today.","The news is very encouraging today.","The news were very encouraging today.","A news is very encouraging today."], answer:"The news is very encouraging today.", explanationCorrect:" \"News\" looks plural but is grammatically singular and takes a singular verb.", explanationWrong:" Despite the -s ending, \"news\" is an uncountable, singular noun and takes a singular verb (\"is,\" not \"are\")." },
  { id:"nn-11", level:3, type:"mcq", prompt:"Choose the correctly pluralized compound noun.", options:["passer-bys","passers-by","passer-bies","passerbys"], answer:"passers-by", explanationCorrect:" In hyphenated compounds, the main noun (passer) is pluralized, not the preposition.", explanationWrong:" For compound nouns like \"passer-by,\" pluralize the head noun (passer), not the last word: passers-by." },
  { id:"nn-12", level:3, type:"fill", prompt:"One tooth, two ___", answer:"teeth", explanationCorrect:" Irregular vowel-change plural: tooth → teeth (like foot → feet, goose → geese).", explanationWrong:" This noun follows the irregular vowel-change pattern seen in foot→feet and goose→geese: tooth → teeth." },
  { id:"nn-13", level:4, type:"mcq", prompt:"Which is correct: referring to two different cars owned separately by Sam and Alex?", options:["Sam and Alex's cars are both parked outside.","Sam's and Alex's cars are both parked outside.","Sam's and Alex cars are both parked outside.","Sams' and Alex's cars are both parked outside."], answer:"Sam's and Alex's cars are both parked outside.", explanationCorrect:" Separate possession requires 's on each name, since each person owns a different car.", explanationWrong:" When two people possess separate items, each name takes its own 's. \"Sam and Alex's\" (one 's) would imply a single shared item." },
  { id:"nn-14", level:4, type:"mcq", prompt:"Choose the correct plural: one criterion, several ___", options:["criterions","criteria","criterias","criterion"], answer:"criteria", explanationCorrect:" \"Criterion\" is a Greek-origin noun with the irregular plural \"criteria.\"", explanationWrong:" Words of Greek/Latin origin like \"criterion,\" \"phenomenon,\" and \"datum\" have irregular plurals: criterion → criteria." },
  { id:"nn-15", level:4, type:"fill", prompt:"I need a new pair of ___ (the eyewear).", answer:"glasses", explanationCorrect:" \"Glasses\" (eyewear) is one of the nouns that exists only in plural form, used with \"a pair of.\"", explanationWrong:" Words like glasses, scissors, trousers, and jeans have no singular form and are always treated as plural, paired with \"a pair of.\"" },
  { id:"nn-16", level:5, type:"mcq", prompt:"Choose the sentence with correct subject-noun agreement.", options:["Mathematics are my favorite subject.","Mathematics is my favorite subject.","The mathematics are difficult this year.","Mathematics were confusing to her."], answer:"Mathematics is my favorite subject.", explanationCorrect:" Despite ending in -s, \"mathematics\" (like physics, economics) is treated as a singular subject when referring to the field of study.", explanationWrong:" Academic subjects ending in -ics (mathematics, physics, economics) take singular verbs when referring to the subject itself." },
  { id:"nn-17", level:5, type:"fill", prompt:"Formal alternative to \"the company's headquarters\" using \"of\": the headquarters ___ the company", answer:"of", explanationCorrect:" \"Of\" constructions are often preferred for inanimate/organizational possession in more formal writing, though 's is also accepted today.", explanationWrong:" The \"of\" possessive (headquarters of the company) is the traditional formal alternative to the 's possessive for inanimate nouns." },
  { id:"nn-18", level:5, type:"mcq", prompt:"Which sentence correctly uses an invariable (no-change) plural?", options:["I caught three fishes in the lake.", "I caught three fish in the lake.", "I caught three fishs in the lake.", "I caught three fishies in the lake."], answer:"I caught three fish in the lake.", explanationCorrect:" \"Fish\" is typically unchanged in the plural (like sheep, deer) when referring to individual fish generally.", explanationWrong:" \"Fish\" is one of the nouns with an identical singular and plural form: one fish, three fish (though \"fishes\" exists for multiple species)." }
];

/* =========================================================
   3. PRONOUNS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "pronouns",
  order: 3,
  icon: "🔁",
  title: "Pronouns (personal, possessive, reflexive, relative, indefinite)",
  shortDesc: "Every pronoun category and the rules for using each one correctly.",
  intro: "Pronouns replace nouns so we don't repeat ourselves. English has six major pronoun categories, each with its own rules — this section covers all of them in full.",
  rules: [
    {
      title: "Personal pronouns: subject vs. object forms",
      text: `<p>Personal pronouns change form depending on whether they act as the subject (doer) or the object (receiver) of a verb/preposition.</p>
      <table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:13.5px;">
      <tr style="background:#f8f9fd;"><th style="text-align:left;padding:6px;border:1px solid #e4e7ef;">Subject</th><th style="text-align:left;padding:6px;border:1px solid #e4e7ef;">Object</th></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">I</td><td style="padding:6px;border:1px solid #e4e7ef;">me</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">you</td><td style="padding:6px;border:1px solid #e4e7ef;">you</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">he / she / it</td><td style="padding:6px;border:1px solid #e4e7ef;">him / her / it</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">we</td><td style="padding:6px;border:1px solid #e4e7ef;">us</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">they</td><td style="padding:6px;border:1px solid #e4e7ef;">them</td></tr>
      </table>`,
      examples: [
        { correct: true, text: "She invited him to the party.", note: "she=subject, him=object" },
        { correct: false, text: "Her invited he to the party.", note: "" },
        { correct: true, text: "Between you and me, this is a secret.", note: "after a preposition, use object form" },
        { correct: false, text: "Between you and I, this is a secret.", note: "common mistake — \"I\" is a subject form" }
      ]
    },
    {
      title: "Compound subjects/objects — the \"me and X\" trap",
      text: `<p>When a pronoun is paired with a noun or another pronoun, its form doesn't change. Test by removing the other person from the sentence.</p>`,
      examples: [
        { correct: true, text: "Sarah and I went to the concert.", note: "\"I went\" — test works" },
        { correct: false, text: "Sarah and me went to the concert.", note: "\"Me went\" fails the test" },
        { correct: true, text: "The teacher gave the award to Sarah and me.", note: "\"gave it to me\" — object position" },
        { correct: false, text: "The teacher gave the award to Sarah and I.", note: "\"gave it to I\" fails" }
      ]
    },
    {
      title: "Possessive pronouns vs. possessive adjectives",
      text: `<p><strong>Possessive adjectives</strong> (my, your, his, her, its, our, their) must be followed by a noun. <strong>Possessive pronouns</strong> (mine, yours, his, hers, its, ours, theirs) stand alone, replacing the noun entirely.</p>`,
      examples: [
        { correct: true, text: "This is my book. This book is mine.", note: "" },
        { correct: false, text: "This book is my.", note: "" },
        { correct: false, text: "This is mine book.", note: "" },
        { correct: true, text: "Their house is bigger than ours.", note: "" }
      ]
    },
    {
      title: "It's vs. its — the #1 pronoun typo in English",
      text: `<p><strong>It's</strong> is always a contraction of "it is" or "it has." <strong>Its</strong> (no apostrophe) is the possessive adjective. Test: expand "it's" to "it is" — if the sentence still makes sense, the apostrophe is correct.</p>`,
      examples: [
        { correct: true, text: "It's raining outside.", note: "it is raining" },
        { correct: true, text: "The dog wagged its tail.", note: "possessive — no apostrophe" },
        { correct: false, text: "The dog wagged it's tail.", note: "" },
        { correct: false, text: "Its raining outside.", note: "" }
      ]
    },
    {
      title: "Reflexive and intensive pronouns",
      text: `<p>Forms: myself, yourself, himself, herself, itself, oneself, ourselves, yourselves, themselves.</p>
      <ul>
        <li><strong>Reflexive use:</strong> the subject and object are the same person — the action reflects back onto the doer. "She cut herself."</li>
        <li><strong>Intensive use:</strong> added purely for emphasis, can be removed without changing the meaning. "I fixed it myself." (= I, not anyone else)</li>
        <li>Never use a reflexive pronoun as the subject or as a random substitute for me/I/him: "John and myself went" is wrong.</li>
      </ul>`,
      examples: [
        { correct: true, text: "He taught himself to play guitar.", note: "reflexive" },
        { correct: true, text: "The manager herself approved it.", note: "intensive/emphasis" },
        { correct: false, text: "Please contact John or myself for details.", note: "" },
        { correct: true, text: "Please contact John or me for details.", note: "" }
      ]
    },
    {
      title: "Relative pronouns: who, whom, whose, which, that",
      text: `<ul>
        <li><strong>Who</strong> — subject, refers to people: "the man who called"</li>
        <li><strong>Whom</strong> — object, refers to people (formal): "the man whom I met" (often replaced by \"who\" in casual speech)</li>
        <li><strong>Whose</strong> — possessive, people or things: "the woman whose car was stolen"</li>
        <li><strong>Which</strong> — things, non-defining or defining clauses: "the book, which I loved, is on the shelf"</li>
        <li><strong>That</strong> — people or things, defining clauses only (no comma before it)</li>
      </ul>
      <p>Quick test for who/whom: if you can replace it with "he/she," use <em>who</em>; if you can replace it with "him/her," use <em>whom</em>.</p>`,
      examples: [
        { correct: true, text: "The scientist who discovered this won a Nobel Prize.", note: "who=subject" },
        { correct: true, text: "The scientist whom we interviewed was fascinating.", note: "whom=object (we interviewed him)" },
        { correct: true, text: "This is the house that Jack built.", note: "defining clause" },
        { correct: false, text: "This is the house, that Jack built.", note: "no comma before \"that\"" }
      ]
    },
    {
      title: "Demonstrative pronouns: this, that, these, those",
      text: `<p>Point to something specific, based on distance/number: <strong>this/these</strong> = near or just mentioned; <strong>that/those</strong> = far, or previously mentioned. This/that = singular; these/those = plural.</p>`,
      examples: [
        { correct: true, text: "This is my favorite song.", note: "" },
        { correct: true, text: "Those shoes over there look expensive.", note: "" },
        { correct: false, text: "This shoes are expensive.", note: "singular \"this\" with plural noun" },
        { correct: true, text: "These shoes are expensive.", note: "" }
      ]
    },
    {
      title: "Indefinite pronouns and subject-verb agreement",
      text: `<p>Indefinite pronouns refer to non-specific people/things.</p>
      <ul>
        <li><strong>Always singular</strong> (take singular verbs): everyone, everybody, everything, someone, somebody, something, anyone, anybody, anything, no one, nobody, nothing, each, either, neither, one</li>
        <li><strong>Always plural:</strong> both, few, many, several, others</li>
        <li><strong>Depends on the noun that follows (of-phrase):</strong> all, most, some, none, any — "Some of the cake is gone" (uncountable→singular) vs. "Some of the cookies are gone" (countable plural→plural)</li>
      </ul>`,
      examples: [
        { correct: true, text: "Everyone is welcome to join.", note: "singular verb, even though it feels plural in meaning" },
        { correct: false, text: "Everyone are welcome to join.", note: "" },
        { correct: true, text: "Neither of the answers is correct.", note: "" },
        { correct: true, text: "Most of the information was useful.", note: "uncountable → singular" },
        { correct: true, text: "Most of the students were late.", note: "countable plural → plural" }
      ]
    }
  ],
  commonMistakes: [
    "\"Between you and I\" ✘ → \"Between you and me\" ✔ — prepositions always take the object form.",
    "\"Me and him went to the store\" ✘ → \"He and I went to the store\" ✔ — use subject forms as the subject, and it's more polite to name yourself last.",
    "Confusing it's/its: \"The company lost it's biggest client\" ✘ → \"The company lost its biggest client\" ✔.",
    "Using reflexives as plain substitutes: \"Please send it to John or myself\" ✘ → \"...to John or me\" ✔.",
    "Mismatching demonstratives and number: \"Those book is mine\" ✘ → \"That book is mine\" ✔ / \"Those books are mine\" ✔.",
    "Treating \"everyone/everybody\" as plural: \"Everyone have their own opinion\" (verb should be \"has\") — though \"their\" as a singular gender-neutral pronoun is standard and accepted."
  ]
});

window.EXERCISES["pronouns"] = [
  { id:"pn-1", level:1, type:"mcq", prompt:"___ is my best friend.", options:["Her","She","Him","Herself"], answer:"She", explanationCorrect:" The subject of the sentence needs the subject pronoun \"she,\" not the object form \"her.\"", explanationWrong:" As the subject of \"is,\" this pronoun must be in subject form: \"she,\" not \"her.\"" },
  { id:"pn-2", level:1, type:"mcq", prompt:"The teacher gave the prize to ___.", options:["I","he","him","himself"], answer:"him", explanationCorrect:" After the preposition \"to,\" pronouns take the object form: him, not he.", explanationWrong:" Prepositions like \"to\" are always followed by the object form of a pronoun: him, her, me, us, them." },
  { id:"pn-3", level:1, type:"fill", prompt:"The dog wagged ___ tail happily. (possessive of \"it\")", answer:"its", explanationCorrect:" \"Its\" (no apostrophe) is the possessive form of \"it.\" \"It's\" always means \"it is/has.\"", explanationWrong:" The possessive form of \"it\" has no apostrophe: its. \"It's\" is only a contraction of \"it is\" or \"it has.\"" },
  { id:"pn-4", level:1, type:"mcq", prompt:"This bag is ___, not yours.", options:["my","mine","me","myself"], answer:"mine", explanationCorrect:" A possessive pronoun stands alone (no noun after it): \"mine,\" not the adjective \"my,\" which needs a noun.", explanationWrong:" Since no noun follows, you need the possessive pronoun \"mine,\" not the possessive adjective \"my\" (which requires a noun, e.g. \"my bag\")." },
  { id:"pn-5", level:2, type:"mcq", prompt:"Sarah and ___ are going to the movies tonight.", options:["me","I","myself","mine"], answer:"I", explanationCorrect:" \"Sarah and I\" together form the subject — test by removing \"Sarah\": \"I am going,\" not \"me am going.\"", explanationWrong:" Remove \"Sarah and\" to test: \"I am going\" is correct, \"Me am going\" is not — so the subject pronoun \"I\" is needed." },
  { id:"pn-6", level:2, type:"fill", prompt:"He fixed the car ___ (emphasis: no one helped him).", answer:"himself", explanationCorrect:" This is an intensive pronoun adding emphasis — \"himself\" stresses that he alone did it.", explanationWrong:" To emphasize that he did it alone, English uses the intensive pronoun \"himself\" right after the verb phrase or at the end of the clause." },
  { id:"pn-7", level:2, type:"mcq", prompt:"Choose the correct sentence.", options:["This is the man who called earlier.","This is the man which called earlier.","This is the man whom called earlier.","This is the man whose called earlier."], answer:"This is the man who called earlier.", explanationCorrect:" \"Who\" is correct because it's the subject of \"called\" and refers to a person.", explanationWrong:" For a person acting as the subject of the relative clause, use \"who,\" not \"which\" (things only) or \"whom\" (object form)." },
  { id:"pn-8", level:2, type:"mcq", prompt:"___ of the answers is correct — you need to try again.", options:["Neither","Both","Few","Several"], answer:"Neither", explanationCorrect:" \"Neither\" is always grammatically singular and takes a singular verb (\"is\").", explanationWrong:" \"Neither,\" \"either,\" and \"each\" are always singular, unlike \"both,\" \"few,\" and \"several,\" which are always plural." },
  { id:"pn-9", level:3, type:"fill", prompt:"The award was given to Maria and ___ (referring to the speaker, as an object).", answer:"me", explanationCorrect:" As an object of \"given to,\" the pronoun must be in object form: me, not I.", explanationWrong:" Test by removing \"Maria and\": \"given to me\" is correct; \"given to I\" is not." },
  { id:"pn-10", level:3, type:"mcq", prompt:"Everyone at the party ___ having a great time.", options:["were","are","is","have been"], answer:"is", explanationCorrect:" \"Everyone\" is grammatically singular even though it refers to many people — it takes a singular verb.", explanationWrong:" Indefinite pronouns like everyone, everybody, and everything are always singular and take singular verbs, despite feeling plural in meaning." },
  { id:"pn-11", level:3, type:"mcq", prompt:"Choose the correct sentence.", options:["The scientist whom discovered the cure was honored.","The scientist who discovered the cure was honored.","The scientist which discovered the cure was honored.","The scientist whose discovered the cure was honored."], answer:"The scientist who discovered the cure was honored.", explanationCorrect:" \"Who\" is the subject of \"discovered\" and refers to a person — the correct choice.", explanationWrong:" \"Whom\" is only used as an object, not a subject. Since this pronoun is the subject of \"discovered,\" \"who\" is correct." },
  { id:"pn-12", level:3, type:"fill", prompt:"Most of the ___ (uncountable: water) was gone by the time we arrived, so use \"was\": Most of the water ___ gone.", answer:"was", explanationCorrect:" \"Most\" agrees with the noun it refers to; since \"water\" is uncountable/singular, the verb is \"was.\"", explanationWrong:" With all/most/some/none, the verb agrees with the noun that follows \"of\" — uncountable \"water\" takes a singular verb." },
  { id:"pn-13", level:4, type:"mcq", prompt:"Please contact John or ___ if you have questions.", options:["myself","I","me","mine"], answer:"me", explanationCorrect:" \"Me\" is the correct object form here; \"myself\" is a reflexive pronoun and shouldn't replace \"me\" as a plain object.", explanationWrong:" \"Myself\" should only be used reflexively (I hurt myself) or for emphasis (I did it myself) — not as a substitute for the plain object pronoun \"me.\"" },
  { id:"pn-14", level:4, type:"mcq", prompt:"The company whom I used to work for has closed down.", options:["This sentence is correct.","Should be \"which I used to work for\"","Should be \"who I used to work for\"","Should be \"whose I used to work for\""], answer:"Should be \"which I used to work for\"", explanationCorrect:" \"Whom\" refers only to people. A company is a thing (or a collective institution), so \"which\" or \"that\" is correct.", explanationWrong:" \"Whom\" is reserved for people. Since \"company\" is not a person, \"which\" (or \"that\") is the correct relative pronoun." },
  { id:"pn-15", level:4, type:"fill", prompt:"None of the cake ___ (uncountable) left — use the correct singular verb form of \"be\" in past tense.", answer:"was", explanationCorrect:" \"Cake\" here is treated as an uncountable mass, so \"none of the cake\" takes a singular verb: was.", explanationWrong:" Since \"cake\" is uncountable in this context, \"none of the cake\" agrees with a singular verb: was, not were." },
  { id:"pn-16", level:5, type:"mcq", prompt:"To ___ it may concern: I am writing to formally request a refund.", options:["who","whom","whose","which"], answer:"whom", explanationCorrect:" Formal fixed expression \"To whom it may concern\" uses the object form after the preposition \"to.\"", explanationWrong:" This is a fixed formal phrase where \"whom\" functions as the object of \"concern\" — \"who\" would be incorrect here." },
  { id:"pn-17", level:5, type:"mcq", prompt:"Identify the correctly punctuated non-defining relative clause.", options:["My brother, who lives in Delhi, is visiting next week.","My brother who lives in Delhi is visiting next week.","My brother, that lives in Delhi, is visiting next week.","My brother whom lives in Delhi is visiting next week."], answer:"My brother, who lives in Delhi, is visiting next week.", explanationCorrect:" Non-defining (extra, non-essential) information is set off with commas and uses \"who,\" never \"that.\"", explanationWrong:" Non-defining relative clauses (adding extra, non-essential info) require commas around them and cannot use \"that\" — only who/which." },
  { id:"pn-18", level:5, type:"fill", prompt:"Correct the error: \"Me and her are best friends.\" → ___ and ___ are best friends.", answer:"She and I", acceptedAnswers:["He and I","She and i"], explanationCorrect:" Both pronouns in a compound subject need the subject form: She and I (not \"Me and her\").", explanationWrong:" As the subject of the sentence, both pronouns must be in subject form: \"She and I,\" not the object forms \"me\" and \"her.\"" }
];
