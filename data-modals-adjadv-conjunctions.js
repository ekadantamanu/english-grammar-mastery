window.GRAMMAR_SECTIONS = window.GRAMMAR_SECTIONS || [];
window.EXERCISES = window.EXERCISES || {};

/* =========================================================
   7. MODAL VERBS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "modals",
  order: 7,
  icon: "🔑",
  title: "Modal Verbs (can, could, may, might, must, should, will, would...)",
  shortDesc: "Every modal verb, its meanings, and the fixed grammar rules that govern all of them.",
  intro: "Modal verbs add meaning like ability, permission, possibility, obligation, or advice to a main verb. They follow special grammar rules that never change, no matter which modal you use.",
  rules: [
    {
      title: "The universal modal verb rules",
      text: `<ul>
        <li>Always followed by the <strong>base form</strong> of the verb (no "to," no -s, no -ing, no -ed): "she can swim," never "she cans to swim."</li>
        <li>No -s in third person: "he must go," not "he musts go."</li>
        <li>Negatives: modal + not (can't, won't, shouldn't) — no "don't/doesn't" needed.</li>
        <li>Questions: modal + subject + base verb — "Can you help me?"</li>
        <li>Modals have no infinitive, no -ing form, and no past participle of their own — "have to," "be able to," and "be allowed to" are used to fill those gaps.</li>
      </ul>`,
      examples: [
        { correct: true, text: "She can speak three languages.", note: "" },
        { correct: false, text: "She cans speak three languages.", note: "" },
        { correct: false, text: "She can to speak three languages.", note: "" },
        { correct: true, text: "I will be able to attend after all.", note: "\"will\" + \"can\" isn't possible, so \"be able to\" fills the gap" }
      ]
    },
    {
      title: "Can / could — ability, permission, possibility",
      text: `<ul>
        <li><strong>Can</strong> — present ability ("I can swim"), informal permission ("Can I leave early?"), general possibility ("Mistakes can happen").</li>
        <li><strong>Could</strong> — past ability ("I could swim at age 5"), polite requests/permission ("Could I ask a question?"), present/future possibility, less certain than "can" ("It could rain later").</li>
      </ul>`,
      examples: [
        { correct: true, text: "Can you pass the salt?", note: "informal request" },
        { correct: true, text: "Could you pass the salt?", note: "more polite request" },
        { correct: true, text: "When I was young, I could run for miles.", note: "past ability" },
        { correct: false, text: "I could run for miles yesterday and got a medal.", note: "for a single completed past achievement, use \"was able to,\" not \"could\"" },
        { correct: true, text: "I was able to finish the marathon yesterday.", note: "specific one-time past achievement" }
      ]
    },
    {
      title: "May / might — permission and possibility",
      text: `<ul>
        <li><strong>May</strong> — formal permission ("You may leave now"), possibility, slightly more likely than "might" ("It may rain later").</li>
        <li><strong>Might</strong> — possibility, slightly less certain/more tentative than "may" ("It might rain later"), and polite/hesitant suggestions ("You might want to check that again").</li>
        <li>May/might have + past participle — speculation about the past: "She might have missed the bus."</li>
      </ul>`,
      examples: [
        { correct: true, text: "May I use your phone?", note: "formal permission" },
        { correct: true, text: "He might be at home, I'm not sure.", note: "uncertain possibility" },
        { correct: true, text: "They may have already left.", note: "speculation about the past" }
      ]
    },
    {
      title: "Must / have to — obligation and necessity",
      text: `<p><strong>Must</strong> often expresses the speaker's own authority/opinion that something is necessary ("I must call my mother"). <strong>Have to</strong> often expresses an external obligation imposed by someone/something else ("I have to wear a uniform at work" — company rule). In everyday speech the two overlap heavily.</p>
      <p><strong>Must not (mustn't)</strong> = prohibition (it is forbidden). <strong>Don't have to</strong> = no obligation (it's optional) — these are NOT the same meaning, and confusing them is a very common error.</p>`,
      examples: [
        { correct: true, text: "You mustn't smoke here.", note: "prohibited" },
        { correct: true, text: "You don't have to come if you're busy.", note: "optional, not prohibited" },
        { correct: false, text: "You mustn't come if you're busy.", note: "this incorrectly implies it's forbidden" },
        { correct: true, text: "Passengers must fasten their seatbelts.", note: "" }
      ]
    },
    {
      title: "Must have / can't have — deduction about the past",
      text: `<p>Use <strong>must have + past participle</strong> for a confident positive conclusion about the past, and <strong>can't have + past participle</strong> for a confident negative conclusion (something was logically impossible).</p>`,
      examples: [
        { correct: true, text: "The lights are off — they must have left already.", note: "confident positive deduction" },
        { correct: true, text: "He can't have finished already; he only started five minutes ago.", note: "confident negative deduction" },
        { correct: false, text: "He mustn't have finished already.", note: "\"mustn't\" expresses prohibition, not deduction — use \"can't have\" instead" }
      ]
    },
    {
      title: "Should / ought to — advice and expectation",
      text: `<p><strong>Should</strong> and <strong>ought to</strong> both give advice or express what's expected/correct, and are broadly interchangeable, though "should" is far more common in speech. <strong>Should have + past participle</strong> expresses regret or criticism about something in the past that didn't happen.</p>`,
      examples: [
        { correct: true, text: "You should see a doctor about that cough.", note: "advice" },
        { correct: true, text: "You ought to apologize to her.", note: "advice, slightly more formal" },
        { correct: true, text: "I should have studied harder for that exam.", note: "regret — I didn't study enough" },
        { correct: false, text: "I should study harder for that exam last year.", note: "wrong tense combination" }
      ]
    },
    {
      title: "Will / would — willingness, prediction, habits, hypotheticals",
      text: `<ul>
        <li><strong>Will</strong> — future prediction, promises, spontaneous decisions, willingness ("I'll carry that for you").</li>
        <li><strong>Would</strong> — polite requests ("Would you mind closing the window?"), hypothetical situations ("If I were rich, I would travel"), past habits ("When I was a kid, I would visit my grandma every summer"), and reported speech (will→would).</li>
      </ul>`,
      examples: [
        { correct: true, text: "Would you like some coffee?", note: "polite offer" },
        { correct: true, text: "If I had more time, I would learn the piano.", note: "hypothetical" },
        { correct: true, text: "Every summer we would go camping.", note: "repeated past habit" }
      ]
    },
    {
      title: "Shall — offers, suggestions, formal future",
      text: `<p>Mostly limited to <strong>I/we</strong> in modern English: offers and suggestions ("Shall I open the window?" "Shall we dance?"). It's rare with other subjects except in very formal/legal writing.</p>`,
      examples: [
        { correct: true, text: "Shall we begin the meeting?", note: "suggestion" },
        { correct: true, text: "Shall I call a taxi for you?", note: "offer" }
      ]
    },
    {
      title: "Semi-modals: need to, used to, dare",
      text: `<ul>
        <li><strong>Need to</strong> behaves like a normal verb (needs to, needed to, doesn't need to) and expresses necessity: "She needs to leave early."</li>
        <li><strong>Used to + base verb</strong> — a past habit or state that no longer happens: "I used to live in Berlin." (NOT "I am used to live" — that's a different structure meaning "accustomed to.")</li>
        <li><strong>Be/get used to + -ing/noun</strong> — being accustomed to something: "I'm used to waking up early." This is a completely different pattern from "used to + base verb."</li>
      </ul>`,
      examples: [
        { correct: true, text: "I used to hate vegetables, but now I love them.", note: "past habit, no longer true" },
        { correct: true, text: "I'm used to working night shifts now.", note: "accustomed to — different structure" },
        { correct: false, text: "I am used to work night shifts.", note: "needs -ing: \"used to working\"" }
      ]
    }
  ],
  commonMistakes: [
    "\"She can to drive\" ✘ → \"She can drive\" ✔ — never \"to\" after a modal.",
    "\"He musts finish it\" ✘ → \"He must finish it\" ✔ — no -s after a modal, ever.",
    "Confusing \"mustn't\" (forbidden) with \"don't have to\" (optional) — these mean opposite things.",
    "\"I should to call her\" ✘ → \"I should call her\" ✔.",
    "\"I am used to wake up early\" ✘ → \"I am used to waking up early\" ✔ — \"used to\" here needs the -ing form.",
    "Using \"could\" for a single specific past success: \"I could pass the exam\" ✘ → \"I was able to pass the exam\" / \"I managed to pass the exam\" ✔."
  ]
});

window.EXERCISES["modals"] = [
  { id:"md-1", level:1, type:"mcq", prompt:"She ___ speak French fluently.", options:["cans","can","canning","to can"], answer:"can", explanationCorrect:" Modals never take -s, -ing, or \"to\" — the base form after \"can\" is required.", explanationWrong:" Modal verbs like \"can\" never add -s, -ing, or \"to\" — always the plain base form: can speak." },
  { id:"md-2", level:1, type:"mcq", prompt:"___ I open the window? It's hot in here.", options:["Can","Cans","Canning","To can"], answer:"Can", explanationCorrect:" \"Can\" is used as-is at the start of a question, with the base form of the main verb following the subject.", explanationWrong:" \"Can\" doesn't change form; it stays as \"Can\" and is simply followed by subject + base verb." },
  { id:"md-3", level:1, type:"fill", prompt:"You ___ not smoke in this building. (prohibition, contracted form)", answer:"must", acceptedAnswers:["mustn't"], explanationCorrect:" \"Must not / mustn't\" expresses that something is forbidden.", explanationWrong:" To express a strict prohibition (it is forbidden), English uses \"must not\" (mustn't), not \"don't have to\" (which means optional)." },
  { id:"md-4", level:2, type:"mcq", prompt:"You ___ come to the party if you don't want to — it's totally optional.", options:["mustn't","don't have to","can't","shouldn't"], answer:"don't have to", explanationCorrect:" \"Don't have to\" expresses that something is optional, not forbidden — the opposite of \"mustn't.\"", explanationWrong:" \"Mustn't\" means forbidden, which contradicts \"optional.\" \"Don't have to\" is the correct phrase for something that's not required." },
  { id:"md-5", level:2, type:"mcq", prompt:"When I was a child, I ___ climb trees for hours.", options:["can","could","must","should"], answer:"could", explanationCorrect:" \"Could\" expresses a general past ability, appropriate for a repeated childhood activity.", explanationWrong:" For general ability in the past (not one specific achievement), \"could\" is the correct modal, not \"can\" (present) or \"must/should\" (obligation/advice)." },
  { id:"md-6", level:2, type:"fill", prompt:"___ you mind closing the door? It's a bit cold. (polite request)", answer:"Would", explanationCorrect:" \"Would you mind + -ing\" is a standard polite request structure.", explanationWrong:" \"Would you mind + -ing?\" is the standard polite way to make a request in English." },
  { id:"md-7", level:2, type:"mcq", prompt:"The lights are off and the car is gone — they ___ have left already.", options:["should","must","can","would"], answer:"must", explanationCorrect:" \"Must have\" expresses a confident positive deduction based on evidence.", explanationWrong:" When drawing a confident conclusion from evidence about the past, English uses \"must have + past participle,\" not \"should have\" (which implies criticism/regret)." },
  { id:"md-8", level:3, type:"mcq", prompt:"I finally managed to finish the marathon yesterday, even though it was hard.", options:["This uses \"could\" correctly for a one-time achievement.","This should use \"was able to\" or \"managed to,\" not \"could,\" for a single past success.","This is grammatically wrong and needs \"can have.\"","This should be in present perfect."], answer:"This should use \"was able to\" or \"managed to,\" not \"could,\" for a single past success.", explanationCorrect:" For one specific, completed past achievement, \"could\" is not used in the affirmative — \"was able to\" or \"managed to\" is correct. (This sentence already correctly uses \"managed to,\" testing recognition of the rule.)", explanationWrong:" \"Could\" expresses general past ability, not a single specific success — for one-time achievements, \"was able to\" or \"managed to\" is required instead." },
  { id:"md-9", level:3, type:"fill", prompt:"He ___ have forgotten the meeting — he mentioned it to me just an hour ago. (confident negative deduction)", answer:"can't", explanationCorrect:" \"Can't have\" expresses a confident conclusion that something was impossible.", explanationWrong:" To express that something was logically impossible based on evidence, use \"can't have + past participle,\" not \"mustn't have.\"" },
  { id:"md-10", level:3, type:"mcq", prompt:"I ___ studied harder — I failed the exam and really regret it now.", options:["should have","should","must have","would have"], answer:"should have", explanationCorrect:" \"Should have + past participle\" expresses regret about a past action that didn't happen.", explanationWrong:" To express regret about something that should have happened but didn't, use \"should have + past participle,\" not plain \"should\" or \"must have.\"" },
  { id:"md-11", level:3, type:"mcq", prompt:"I'm finally ___ working night shifts — it doesn't bother me anymore.", options:["used to","use to","used to work","using to"], answer:"used to", explanationCorrect:" \"Be used to + -ing/noun\" means \"accustomed to.\" The -ing form (working) follows \"used to\" here.", explanationWrong:" \"Be used to\" (accustomed to) is followed by a gerund (-ing) or noun, not a base verb — \"used to working,\" not \"used to work.\"" },
  { id:"md-12", level:4, type:"fill", prompt:"I ___ (used to / use to) live in a small village before we moved to the city. (past habit, no longer true)", answer:"used to", explanationCorrect:" \"Used to + base verb\" describes a past habit or state that's no longer true.", explanationWrong:" The past-habit structure is spelled \"used to\" (with -d), followed by the base verb: used to live." },
  { id:"md-13", level:4, type:"mcq", prompt:"Choose the sentence that correctly distinguishes prohibition from lack of obligation.", options:["Students mustn't bring calculators — but they don't have to bring pens either, it's optional.","Students don't have to bring calculators — they're forbidden.","Students mustn't bring pens — it's just not required.","Both B and C confuse the two meanings."], answer:"Both B and C confuse the two meanings.", explanationCorrect:" B incorrectly uses \"don't have to\" to mean forbidden, and C incorrectly uses \"mustn't\" to mean optional — both mix up the two distinct meanings, while A uses each correctly.", explanationWrong:" \"Mustn't\" means forbidden and \"don't have to\" means optional/not required — sentences B and C swap these meanings incorrectly." },
  { id:"md-14", level:4, type:"mcq", prompt:"___ we start the presentation now, or shall we wait for everyone?", options:["Shall","Should","Would","Must"], answer:"Shall", explanationCorrect:" \"Shall we...?\" is the standard way to make a suggestion involving the speaker and listener(s) together.", explanationWrong:" \"Shall\" (mainly with I/we) is used for offers and suggestions in modern English, more naturally than \"should\" or \"must\" here." },
  { id:"md-15", level:5, type:"fill", prompt:"If I ___ (be) you, I would apologize immediately. (hypothetical advice using \"would\")", answer:"were", explanationCorrect:" \"If I were you\" is the fixed hypothetical form (using \"were\" for all subjects) used to give advice.", explanationWrong:" In the fixed hypothetical expression \"If I were you,\" English uses \"were\" (not \"was\") regardless of subject — this is the subjunctive mood." },
  { id:"md-16", level:5, type:"mcq", prompt:"Which sentence correctly expresses a confident deduction that something was impossible?", options:["She mustn't have seen the email, since she asked about it later.","She can't have seen the email, since she asked about it later.","She shouldn't have seen the email, since she asked about it later.","She won't have seen the email, since she asked about it later."], answer:"She can't have seen the email, since she asked about it later.", explanationCorrect:" \"Can't have\" is the modal used for a confident negative deduction about the past — logically, it must be impossible that she saw it.", explanationWrong:" \"Mustn't have\" isn't used for deduction (it suggests prohibition); the correct modal for a confident negative conclusion about the past is \"can't have.\"" }
];

/* =========================================================
   8. ADJECTIVES & ADVERBS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "adj-adv",
  order: 8,
  icon: "🎨",
  title: "Adjectives & Adverbs",
  shortDesc: "Adjective order, comparison forms, adverb formation, and placement rules.",
  intro: "Adjectives describe nouns; adverbs describe verbs, adjectives, or other adverbs. Both categories have precise ordering and formation rules that native speakers apply automatically — here they're made explicit.",
  rules: [
    {
      title: "The royal order of adjectives",
      text: `<p>When multiple adjectives describe one noun, they follow a fixed order. Native speakers do this instinctively — here's the actual sequence:</p>
      <p><strong>Opinion → Size → Age → Shape → Color → Origin → Material → Purpose → Noun</strong></p>
      <p>Example build-up: a (opinion)beautiful (size)small (age)old (shape)round (color)wooden (origin)Italian (purpose)dining table.</p>`,
      examples: [
        { correct: true, text: "a lovely small antique silver French mirror", note: "opinion-size-age-color-origin-material-noun" },
        { correct: false, text: "a French silver antique small lovely mirror", note: "wrong order" },
        { correct: true, text: "a big red Italian sports car", note: "size-color-origin-purpose-noun" }
      ]
    },
    {
      title: "Comparative and superlative formation",
      text: `<ul>
        <li><strong>One-syllable adjectives:</strong> +er / +est → tall → taller → tallest</li>
        <li><strong>One-syllable, ending consonant-vowel-consonant:</strong> double the final consonant → big → bigger → biggest</li>
        <li><strong>Two-syllable ending in -y:</strong> change y→i, add -er/-est → happy → happier → happiest</li>
        <li><strong>Other two-syllable and longer adjectives:</strong> more / most → beautiful → more beautiful → most beautiful</li>
        <li><strong>Irregular:</strong> good → better → best; bad → worse → worst; far → farther/further → farthest/furthest; little → less → least; many/much → more → most</li>
      </ul>
      <p>Use "than" with comparatives, and "the" with superlatives: "faster than," "the fastest."</p>`,
      examples: [
        { correct: true, text: "This car is faster than that one.", note: "" },
        { correct: true, text: "She is the most talented singer in the group.", note: "" },
        { correct: false, text: "She is the more talented singer in the group of five.", note: "should be superlative \"most,\" not comparative \"more,\" when comparing 3+" },
        { correct: false, text: "This is the goodest movie ever.", note: "irregular: \"best,\" not \"goodest\"" }
      ]
    },
    {
      title: "As...as for equal comparisons",
      text: `<p>Use <strong>as + adjective + as</strong> to say two things are equal, and <strong>not as/so...as</strong> for the negative.</p>`,
      examples: [
        { correct: true, text: "She is as tall as her brother.", note: "" },
        { correct: true, text: "This test wasn't as difficult as I expected.", note: "" }
      ]
    },
    {
      title: "Adjective formation from adverbs: the -ly rule",
      text: `<p>Most adverbs are formed by adding <strong>-ly</strong> to the adjective: quick → quickly, careful → carefully. Spelling changes: -y → -ily (happy → happily); -le → -ly (simple → simply); -ic → -ically (basic → basically).</p>
      <p>Watch out: some -ly words are actually adjectives, not adverbs (friendly, lovely, lonely, silly), and some adverbs have the same form as their adjective (fast, hard, late, early, well vs. good).</p>`,
      examples: [
        { correct: true, text: "She sings beautifully.", note: "" },
        { correct: true, text: "He is a friendly neighbor.", note: "\"friendly\" is an adjective despite -ly" },
        { correct: true, text: "He drives fast.", note: "\"fast\" is the adverb form too — not \"fastly\"" },
        { correct: false, text: "He drives fastly.", note: "" }
      ]
    },
    {
      title: "Good vs. well",
      text: `<p><strong>Good</strong> is an adjective (describes nouns). <strong>Well</strong> is normally an adverb (describes verbs) — except when "well" itself means "in good health," in which case it functions as an adjective.</p>`,
      examples: [
        { correct: true, text: "You did a good job.", note: "adjective describing \"job\"" },
        { correct: true, text: "You did the job well.", note: "adverb describing \"did\"" },
        { correct: false, text: "You did the job good.", note: "" },
        { correct: true, text: "I don't feel well today.", note: "\"well\" = healthy, used as an adjective here" }
      ]
    },
    {
      title: "Adverb placement",
      text: `<ul>
        <li><strong>Adverbs of manner</strong> (quickly, carefully) usually go after the verb or object: "She closed the door quietly."</li>
        <li><strong>Adverbs of frequency</strong> (always, usually, often, sometimes, rarely, never) go before the main verb but after "be": "I always eat breakfast." / "She is always late."</li>
        <li><strong>Adverbs of time/place</strong> (yesterday, here, tomorrow) usually go at the end of a sentence, or the very beginning for emphasis.</li>
        <li>Never place an adverb between a verb and its direct object: not "I like very much this song" but "I like this song very much."</li>
      </ul>`,
      examples: [
        { correct: true, text: "He rarely eats breakfast.", note: "before main verb" },
        { correct: true, text: "She is often late for meetings.", note: "after \"be\"" },
        { correct: false, text: "I like very much this song.", note: "" },
        { correct: true, text: "I like this song very much.", note: "" }
      ]
    },
    {
      title: "Gradable vs. non-gradable (extreme) adjectives",
      text: `<p><strong>Gradable adjectives</strong> (big, good, cold) can be modified by "very," "a bit," "extremely." <strong>Non-gradable/extreme adjectives</strong> (huge, excellent, freezing, terrified) already express a maximum degree and instead take "absolutely," "completely," "utterly" — not "very."</p>`,
      examples: [
        { correct: true, text: "It's very cold today.", note: "gradable" },
        { correct: true, text: "It's absolutely freezing today.", note: "extreme adjective" },
        { correct: false, text: "It's very freezing today.", note: "" }
      ]
    }
  ],
  commonMistakes: [
    "Wrong adjective order: \"a red big house\" ✘ → \"a big red house\" ✔ (size before color).",
    "Using \"more\" with a superlative situation: \"the more beautiful of the three\" ✘ (for 3+ things, use superlative) → \"the most beautiful of the three\" ✔.",
    "Double comparatives: \"more better\" ✘ → \"better\" ✔.",
    "Confusing good/well: \"She sings good\" ✘ → \"She sings well\" ✔.",
    "Adding -ly to already-adverbial words: \"He runs fastly\" ✘ → \"He runs fast\" ✔.",
    "Placing frequency adverbs incorrectly: \"I eat always breakfast\" ✘ → \"I always eat breakfast\" ✔."
  ]
});

window.EXERCISES["adj-adv"] = [
  { id:"aa-1", level:1, type:"mcq", prompt:"She is ___ than her older sister.", options:["tall","taller","tallest","more tall"], answer:"taller", explanationCorrect:" A one-syllable adjective forms the comparative with -er: tall → taller.", explanationWrong:" One-syllable adjectives add -er for the comparative form, not \"more\" — tall → taller." },
  { id:"aa-2", level:1, type:"mcq", prompt:"He drives really ___.", options:["careful","carefully","carefuly","care"], answer:"carefully", explanationCorrect:" An adverb (describing how he drives — the verb) needs the -ly form: carefully.", explanationWrong:" Since this word describes the verb \"drives\" (how he drives), it must be an adverb: carefully, not the adjective \"careful.\"" },
  { id:"aa-3", level:1, type:"fill", prompt:"This is the ___ (good) restaurant in town. (superlative, irregular)", answer:"best", explanationCorrect:" \"Good\" has an irregular superlative: good → better → best.", explanationWrong:" \"Good\" is irregular: its comparative is \"better\" and its superlative is \"best,\" not \"goodest.\"" },
  { id:"aa-4", level:2, type:"mcq", prompt:"Choose the sentence with correct adjective order.", options:["a big red Italian car","a red big Italian car","an Italian big red car","a red Italian big car"], answer:"a big red Italian car", explanationCorrect:" Correct order: size (big) → color (red) → origin (Italian) → noun.", explanationWrong:" Adjectives follow a fixed order: opinion, size, age, shape, color, origin, material, purpose — here, size before color before origin: big red Italian." },
  { id:"aa-5", level:2, type:"fill", prompt:"I don't feel very ___ today — I think I'm getting a cold. (adjective meaning healthy)", answer:"well", explanationCorrect:" \"Well\" functions as an adjective when it means \"in good health.\"", explanationWrong:" When describing physical health, \"well\" is used as an adjective (not \"good\"), as in \"I don't feel well.\"" },
  { id:"aa-6", level:2, type:"mcq", prompt:"She ___ arrives late for work.", options:["always","is always","always is","being always"], answer:"always", explanationCorrect:" Frequency adverbs like \"always\" go before the main verb (arrives).", explanationWrong:" Frequency adverbs (always, usually, often) are placed before the main verb, not after — \"always arrives,\" not \"arrives always.\"" },
  { id:"aa-7", level:2, type:"mcq", prompt:"This soup is ___ delicious — you have to try it!", options:["very","absolutely","a bit","fairly"], answer:"absolutely", explanationCorrect:" \"Delicious\" is an extreme/non-gradable adjective, which pairs with \"absolutely,\" not \"very.\"", explanationWrong:" Extreme adjectives like \"delicious,\" \"amazing,\" and \"freezing\" pair with intensifiers like \"absolutely\" or \"completely,\" not \"very.\"" },
  { id:"aa-8", level:3, type:"mcq", prompt:"Of the three candidates, she is ___ qualified.", options:["more","the more","most","the most"], answer:"the most", explanationCorrect:" Comparing three or more things requires the superlative form with \"the\": the most qualified.", explanationWrong:" When comparing three or more items, use the superlative (\"the most\"), not the comparative (\"more\"), which is only for comparing two things." },
  { id:"aa-9", level:3, type:"fill", prompt:"I like this song ___ much. (correct placement, not between verb and object)", answer:"very", explanationCorrect:" \"Very much\" goes after the object, not between the verb and object: \"I like this song very much.\"", explanationWrong:" The intensifying phrase \"very much\" must come after the object (I like this song very much), never between the verb and its object." },
  { id:"aa-10", level:3, type:"mcq", prompt:"Choose the correct sentence.", options:["This is the most best pizza I've ever had.","This is the bestest pizza I've ever had.","This is the best pizza I've ever had.","This is the goodest pizza I've ever had."], answer:"This is the best pizza I've ever had.", explanationCorrect:" \"Good\" is irregular; its superlative is simply \"best,\" with no \"most\" or extra endings added.", explanationWrong:" \"Good\" doesn't take \"-est\" or combine with \"most\" — its irregular superlative form is simply \"best.\"" },
  { id:"aa-11", level:4, type:"fill", prompt:"This new phone is ___ (expensive, comparative) than my old one.", answer:"more expensive", explanationCorrect:" Longer adjectives (3+ syllables, or most 2-syllable ones) use \"more\" instead of -er: more expensive.", explanationWrong:" Multi-syllable adjectives like \"expensive\" form the comparative with \"more,\" not by adding -er directly to the word." },
  { id:"aa-12", level:4, type:"mcq", prompt:"Which sentence correctly places the adverb of manner?", options:["She quietly closed the door.","She closed quietly the door.","She closed the door quietly.","Both A and C are correct."], answer:"Both A and C are correct.", explanationCorrect:" Manner adverbs can go before the verb for slight emphasis, or (more commonly) after the object at the end of the clause — both are grammatically valid, but never between the verb and its direct object.", explanationWrong:" Manner adverbs are flexible in position (before the verb or after the object) but can never split a verb from its direct object, ruling out option B." },
  { id:"aa-13", level:4, type:"mcq", prompt:"Choose the adjective-order-correct phrase.", options:["a delicious little old Italian restaurant","an Italian delicious little old restaurant","a little Italian old delicious restaurant","an old delicious little restaurant Italian"], answer:"a delicious little old Italian restaurant", explanationCorrect:" Correct order: opinion (delicious) → size (little) → age (old) → origin (Italian) → noun.", explanationWrong:" The royal order of adjectives places opinion first, then size, then age, then origin, right before the noun: delicious little old Italian restaurant." },
  { id:"aa-14", level:5, type:"fill", prompt:"The weather today is ___ (bad, comparative) than yesterday's, and it's expected to get even worse tomorrow.", answer:"worse", explanationCorrect:" \"Bad\" is irregular: bad → worse → worst.", explanationWrong:" \"Bad\" doesn't take -er; its irregular comparative form is \"worse,\" and the superlative is \"worst.\"" },
  { id:"aa-15", level:5, type:"mcq", prompt:"Identify the sentence with a genuine grammar error.", options:["He is as tall as his father.","This puzzle is more easier than the last one.","She speaks English fluently.","The weather is getting colder.", ], answer:"This puzzle is more easier than the last one.", explanationCorrect:" This is a double comparative error — \"more\" and \"-er\" should never combine. It should be simply \"easier.\"", explanationWrong:" \"More easier\" is a double comparative, which is always incorrect — choose either \"more easy\" (rare/awkward) or, correctly, just \"easier.\"" }
];

/* =========================================================
   9. CONJUNCTIONS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "conjunctions",
  order: 9,
  icon: "🔗",
  title: "Conjunctions (coordinating, subordinating, correlative)",
  shortDesc: "The full set of connecting words and the punctuation rules that go with each type.",
  intro: "Conjunctions join words, phrases, and clauses. English has three families of conjunctions, each with its own punctuation rules — this section covers all three completely.",
  rules: [
    {
      title: "Coordinating conjunctions: FANBOYS",
      text: `<p>The seven coordinating conjunctions join grammatically equal elements (word+word, phrase+phrase, independent clause+independent clause). Remember them with <strong>FANBOYS</strong>: For, And, Nor, But, Or, Yet, So.</p>
      <ul>
        <li><strong>For</strong> — reason (formal, like "because")</li>
        <li><strong>And</strong> — addition</li>
        <li><strong>Nor</strong> — negative addition</li>
        <li><strong>But</strong> — contrast</li>
        <li><strong>Or</strong> — alternative</li>
        <li><strong>Yet</strong> — contrast (similar to "but")</li>
        <li><strong>So</strong> — result/consequence</li>
      </ul>
      <p><strong>Punctuation rule:</strong> when a coordinating conjunction joins two independent clauses (each with its own subject+verb, each able to stand alone), put a comma before it. When it joins two words or phrases (not full clauses), no comma is needed.</p>`,
      examples: [
        { correct: true, text: "I wanted to go for a walk, but it started raining.", note: "comma — joins two independent clauses" },
        { correct: true, text: "I like tea and coffee.", note: "no comma — joins two words, not clauses" },
        { correct: false, text: "I wanted to go for a walk but it started raining.", note: "missing comma before \"but\" joining two clauses" },
        { correct: true, text: "She didn't call, nor did she text.", note: "note the inverted word order after \"nor\"" }
      ]
    },
    {
      title: "Avoiding comma splices and run-ons",
      text: `<p>A <strong>comma splice</strong> is an error where two independent clauses are joined with only a comma and no conjunction. Fix it by: adding a coordinating conjunction after the comma, using a semicolon instead of a comma, or splitting into two sentences.</p>`,
      examples: [
        { correct: false, text: "It was raining, we stayed inside.", note: "comma splice" },
        { correct: true, text: "It was raining, so we stayed inside.", note: "fixed with conjunction" },
        { correct: true, text: "It was raining; we stayed inside.", note: "fixed with semicolon" },
        { correct: true, text: "It was raining. We stayed inside.", note: "fixed with two sentences" }
      ]
    },
    {
      title: "Subordinating conjunctions",
      text: `<p>Subordinating conjunctions introduce a <strong>dependent clause</strong> (one that cannot stand alone) and attach it to an independent clause. Common ones, grouped by meaning:</p>
      <ul>
        <li><strong>Time:</strong> when, while, before, after, since, until, as soon as, once</li>
        <li><strong>Reason/cause:</strong> because, since, as</li>
        <li><strong>Contrast/concession:</strong> although, though, even though, whereas, while</li>
        <li><strong>Condition:</strong> if, unless, provided that, as long as, in case</li>
        <li><strong>Purpose:</strong> so that, in order that</li>
      </ul>
      <p><strong>Punctuation rule:</strong> if the dependent clause comes first, put a comma after it. If the independent clause comes first, usually no comma is needed.</p>`,
      examples: [
        { correct: true, text: "Although it was raining, we went for a walk.", note: "dependent clause first → comma" },
        { correct: true, text: "We went for a walk although it was raining.", note: "independent clause first → no comma" },
        { correct: false, text: "Although it was raining we went for a walk.", note: "missing comma" }
      ]
    },
    {
      title: "Because vs. because of",
      text: `<p><strong>Because</strong> is a subordinating conjunction and must be followed by a full clause (subject + verb). <strong>Because of</strong> is a preposition and must be followed by a noun/noun phrase, not a full clause.</p>`,
      examples: [
        { correct: true, text: "We stayed home because it was raining.", note: "clause follows \"because\"" },
        { correct: true, text: "We stayed home because of the rain.", note: "noun phrase follows \"because of\"" },
        { correct: false, text: "We stayed home because of it was raining.", note: "" },
        { correct: false, text: "We stayed home because the rain.", note: "" }
      ]
    },
    {
      title: "Correlative conjunctions",
      text: `<p>These work in fixed pairs and require <strong>parallel structure</strong> — the grammatical form after each part of the pair should match.</p>
      <ul>
        <li>either...or</li>
        <li>neither...nor</li>
        <li>both...and</li>
        <li>not only...but also</li>
        <li>whether...or</li>
      </ul>`,
      examples: [
        { correct: true, text: "She is both intelligent and hardworking.", note: "adjective / adjective — parallel" },
        { correct: false, text: "She is both intelligent and works hard.", note: "adjective / verb phrase — not parallel" },
        { correct: true, text: "Not only did he apologize, but he also brought flowers.", note: "note the inversion after \"not only\" at the start of a clause" },
        { correct: true, text: "You can have either the cake or the pie, not both.", note: "" }
      ]
    },
    {
      title: "Conjunctive adverbs (however, therefore, moreover...)",
      text: `<p>Words like <em>however, therefore, moreover, consequently, nevertheless, furthermore, meanwhile, otherwise</em> connect ideas between independent clauses but are NOT conjunctions grammatically — they're adverbs, and they cannot join two independent clauses with just a comma.</p>
      <p><strong>Correct pattern:</strong> Independent clause<strong>; </strong>conjunctive adverb<strong>, </strong>independent clause. Or start a new sentence: Independent clause. Conjunctive adverb, independent clause.</p>`,
      examples: [
        { correct: true, text: "I studied hard; however, I still failed the test.", note: "semicolon before, comma after" },
        { correct: true, text: "I studied hard. However, I still failed the test.", note: "new sentence" },
        { correct: false, text: "I studied hard, however, I still failed the test.", note: "comma splice — needs a semicolon or period before \"however\"" }
      ]
    }
  ],
  commonMistakes: [
    "Comma splice with conjunctive adverbs: \"It was late, therefore we left\" ✘ → \"It was late; therefore, we left\" ✔ or \"It was late. Therefore, we left.\" ✔",
    "Mixing \"because\" and \"because of\": \"He was late because of he missed the bus\" ✘ → \"He was late because he missed the bus\" ✔",
    "Broken parallel structure in correlative pairs: \"She likes both to swim and running\" ✘ → \"She likes both swimming and running\" ✔",
    "Missing comma before FANBOYS joining two independent clauses: \"I called her but she didn't answer\" ✘ (should have a comma before \"but\") → \"I called her, but she didn't answer\" ✔",
    "Comma splice with no conjunction at all: \"She was tired, she went to bed\" ✘ → \"She was tired, so she went to bed\" ✔"
  ]
});

window.EXERCISES["conjunctions"] = [
  { id:"cj-1", level:1, type:"mcq", prompt:"I wanted pizza, ___ my friend wanted sushi.", options:["so","but","because","although"], answer:"but", explanationCorrect:" \"But\" correctly signals a contrast between two different preferences.", explanationWrong:" This sentence shows a contrast between two different wishes, which calls for \"but,\" not \"so\" (result) or \"because\" (reason)." },
  { id:"cj-2", level:1, type:"mcq", prompt:"She was tired, ___ she went to bed early.", options:["so","but","or","yet"], answer:"so", explanationCorrect:" \"So\" introduces the result/consequence of being tired.", explanationWrong:" \"So\" is used to show a result — being tired led to going to bed early. \"But\" and \"yet\" would signal contrast instead." },
  { id:"cj-3", level:1, type:"fill", prompt:"I like coffee ___ tea. (simple addition, no comma needed since these are just two words)", answer:"and", explanationCorrect:" \"And\" joins two words (coffee, tea) — no comma needed since these aren't full independent clauses.", explanationWrong:" \"And\" is the correct conjunction for simple addition between two words, with no comma required here." },
  { id:"cj-4", level:2, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["I wanted to go for a walk but it started raining.","I wanted to go for a walk, but it started raining.","I wanted to go for a walk but, it started raining.","I wanted to go, for a walk but it started raining."], answer:"I wanted to go for a walk, but it started raining.", explanationCorrect:" A comma is required before a coordinating conjunction (FANBOYS) that joins two independent clauses.", explanationWrong:" When \"but\" joins two full independent clauses, a comma must come before it, not after or nowhere at all." },
  { id:"cj-5", level:2, type:"mcq", prompt:"___ it was raining, we still went for a walk.", options:["Because","Although","So","And"], answer:"Although", explanationCorrect:" \"Although\" introduces a contrast/concession — despite the rain, they still went.", explanationWrong:" The sentence expresses contrast (rain didn't stop them), which requires \"although,\" not a reason word like \"because\" or a result word like \"so.\"" },
  { id:"cj-6", level:2, type:"fill", prompt:"We canceled the picnic ___ the heavy rain. (followed by a noun phrase, not a clause)", answer:"because of", explanationCorrect:" \"Because of\" is a preposition and takes a noun phrase (the heavy rain), unlike \"because,\" which needs a full clause.", explanationWrong:" Since a noun phrase follows (\"the heavy rain\"), the preposition \"because of\" is needed, not the conjunction \"because,\" which requires a full clause." },
  { id:"cj-7", level:2, type:"mcq", prompt:"Identify the comma splice.", options:["It was cold, so we lit a fire.","It was cold; we lit a fire.","It was cold, we lit a fire.","It was cold, and we lit a fire."], answer:"It was cold, we lit a fire.", explanationCorrect:" Two independent clauses joined by only a comma (no conjunction) is a comma splice error.", explanationWrong:" A comma alone cannot join two independent clauses — this needs a conjunction (so, and) or a semicolon instead." },
  { id:"cj-8", level:3, type:"mcq", prompt:"She is not only talented ___ also incredibly hardworking.", options:["and","but","or","so"], answer:"but", explanationCorrect:" \"Not only...but also\" is a fixed correlative conjunction pair.", explanationWrong:" \"Not only\" is always paired with \"but also,\" not \"and,\" \"or,\" or \"so.\"" },
  { id:"cj-9", level:3, type:"fill", prompt:"I studied hard___ however, I still failed the exam. (correct punctuation mark before \"however\")", answer:";", explanationCorrect:" A conjunctive adverb like \"however\" connecting two independent clauses needs a semicolon before it (and a comma after).", explanationWrong:" \"However\" is a conjunctive adverb, not a true conjunction — it needs a semicolon (or period) before it when joining two independent clauses, not just a comma." },
  { id:"cj-10", level:3, type:"mcq", prompt:"Choose the sentence with correct parallel structure.", options:["She enjoys both reading and to write.","She enjoys both reading and writing.","She enjoys both to read and writing.","She enjoys both read and write."], answer:"She enjoys both reading and writing.", explanationCorrect:" Correlative conjunctions require matching grammatical forms on both sides — both gerunds here: reading, writing.", explanationWrong:" \"Both...and\" requires parallel structure — the same grammatical form (both gerunds: reading/writing) on each side of the pair." },
  { id:"cj-11", level:4, type:"mcq", prompt:"Choose the correctly punctuated sentence with a subordinating conjunction.", options:["Because she was late she missed the bus.","Because she was late, she missed the bus.","Because, she was late, she missed the bus.","She missed the bus, because she was late."], answer:"Because she was late, she missed the bus.", explanationCorrect:" When the dependent clause (\"Because she was late\") comes first, it's followed by a comma.", explanationWrong:" A dependent clause that begins the sentence needs a comma right after it, before the independent clause starts." },
  { id:"cj-12", level:4, type:"fill", prompt:"She didn't finish her homework, ___ did she study for the test. (negative addition, requires inverted word order after)", answer:"nor", explanationCorrect:" \"Nor\" continues a negative idea and triggers subject-auxiliary inversion: nor did she study.", explanationWrong:" \"Nor\" is used to add a second negative point and requires inverted word order (nor did she study), unlike \"or.\"" },
  { id:"cj-13", level:4, type:"mcq", prompt:"Identify the sentence that correctly fixes this comma splice: \"The store was closed, we went home.\"", options:["The store was closed we went home.","The store was closed, so we went home.","The store was closed; and we went home.","The store, was closed, we went home."], answer:"The store was closed, so we went home.", explanationCorrect:" Adding the coordinating conjunction \"so\" after the comma correctly joins the two independent clauses.", explanationWrong:" A comma splice can be fixed by adding a coordinating conjunction (like \"so\") right after the comma, joining the two independent clauses properly." },
  { id:"cj-14", level:5, type:"mcq", prompt:"Which sentence correctly uses \"whereas\" to show contrast between two facts?", options:["Whereas, city life is fast-paced, country life is slow and quiet.","City life is fast-paced, whereas country life is slow and quiet.","City life is fast-paced whereas, country life is slow and quiet.","City life whereas is fast-paced, country life is slow and quiet."], answer:"City life is fast-paced, whereas country life is slow and quiet.", explanationCorrect:" \"Whereas\" introduces the contrasting clause and takes a comma before it when the first (independent) clause comes first.", explanationWrong:" \"Whereas\" should sit directly before the contrasting clause, with a comma before it (not after), when it follows the main clause." },
  { id:"cj-15", level:5, type:"fill", prompt:"___ you finish your homework, you can watch TV. (condition — \"as long as\" alternative, one word)", answer:"If", acceptedAnswers:["Provided","Unless"], explanationCorrect:" \"If\" introduces the basic conditional relationship here (though \"provided that\" or \"as long as\" also work in longer form).", explanationWrong:" A conditional subordinating conjunction like \"if\" (or \"provided that\") is needed to link the requirement to the result." },
  { id:"cj-16", level:1, type:"mcq", prompt:"Do you want tea ___ coffee?", options:["or","and","but","so"], answer:"or", explanationCorrect:" \"Or\" presents an alternative between two choices.", explanationWrong:" When offering a choice between two options, \"or\" is the correct connector, not \"and\" (addition) or \"but\" (contrast)." },
  { id:"cj-17", level:1, type:"fill", prompt:"He was hungry, ___ he made a sandwich. (result)", answer:"so", explanationCorrect:" \"So\" introduces the result of being hungry.", explanationWrong:" The second clause is a consequence of the first, which calls for \"so,\" not \"but\" or \"or.\"" },
  { id:"cj-18", level:2, type:"mcq", prompt:"I called her, ___ she didn't pick up.", options:["but","so","for","and"], answer:"but", explanationCorrect:" \"But\" signals the contrast between calling and not getting an answer.", explanationWrong:" The second clause contrasts with the first (I called, yet she didn't answer), which requires \"but,\" not \"so\" or \"and.\"" },
  { id:"cj-19", level:2, type:"fill", prompt:"___ she was exhausted, she kept working. (contrast/concession)", answer:"Although", acceptedAnswers:["Though","Even though"], explanationCorrect:" \"Although\" introduces a contrast — despite being exhausted, she continued.", explanationWrong:" A concession/contrast subordinating conjunction like \"although\" is needed to show she worked despite her exhaustion." },
  { id:"cj-20", level:3, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["We left early, because we were tired.","We left early because we were tired.","We left early because, we were tired.","We left, early because we were tired."], answer:"We left early because we were tired.", explanationCorrect:" When the independent clause comes first and the subordinate clause (\"because...\") follows, no comma is typically needed.", explanationWrong:" A comma isn't needed before \"because\" when the main clause comes first — that comma rule only applies when the dependent clause starts the sentence." },
  { id:"cj-21", level:3, type:"fill", prompt:"You won't succeed ___ you practice regularly. (means \"if you don't\")", answer:"unless", explanationCorrect:" \"Unless\" means \"if...not,\" matching the intended meaning here.", explanationWrong:" \"Unless\" is the conjunction meaning \"if...not\" — exactly the meaning needed: you won't succeed if you don't practice." },
  { id:"cj-22", level:4, type:"mcq", prompt:"He apologized, ___ she was still upset.", options:["yet","for","nor","so"], answer:"yet", explanationCorrect:" \"Yet\" signals contrast, similar to \"but\" — despite the apology, she was still upset.", explanationWrong:" \"Yet\" (like \"but\") signals contrast, which fits here: he apologized, but she remained upset regardless." },
  { id:"cj-23", level:4, type:"fill", prompt:"She was late to work; ___, she still finished the report on time. (conjunctive adverb, contrast)", answer:"nevertheless", acceptedAnswers:["however"], explanationCorrect:" \"Nevertheless\" (or \"however\") is a conjunctive adverb showing contrast, correctly following a semicolon here.", explanationWrong:" A conjunctive adverb like \"nevertheless\" or \"however\" is needed to show contrast between being late and still finishing on time." },
  { id:"cj-24", level:5, type:"mcq", prompt:"Choose the sentence with correct correlative conjunction structure.", options:["Whether you agree or disagreeing, the decision is final.","Whether you agree or disagree, the decision is final.","Whether you agreeing or disagree, the decision is final.","Whether agree or disagree, the decision is final."], answer:"Whether you agree or disagree, the decision is final.", explanationCorrect:" \"Whether...or\" requires parallel structure — both verbs in the same base form: agree, disagree.", explanationWrong:" The correlative pair \"whether...or\" needs matching grammatical forms on both sides — here, both plain base-form verbs." },
  { id:"cj-25", level:5, type:"fill", prompt:"The bridge was closed for repairs; ___, traffic was rerouted through downtown. (conjunctive adverb, result)", answer:"consequently", acceptedAnswers:["therefore","as a result"], explanationCorrect:" \"Consequently\" (or \"therefore\") is a conjunctive adverb showing result, correctly preceded by a semicolon.", explanationWrong:" A result-showing conjunctive adverb like \"consequently\" or \"therefore\" fits here, properly following the semicolon that joins these two independent clauses." }
];
