window.GRAMMAR_SECTIONS = window.GRAMMAR_SECTIONS || [];
window.EXERCISES = window.EXERCISES || {};

/* =========================================================
   13. REPORTED (INDIRECT) SPEECH
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "reported-speech",
  order: 13,
  icon: "💬",
  title: "Reported (Indirect) Speech",
  shortDesc: "The full backshift rules for converting direct speech into reported speech.",
  intro: "Reported speech tells someone what another person said, without quoting them directly. It requires systematic changes to tense, pronouns, and time/place words — every rule is here.",
  rules: [
    {
      title: "The core shift: dropping quotation marks and adding \"that\"",
      text: `<p>Direct speech quotes the exact words: <em>She said, "I am tired."</em> Reported speech removes the quotation marks, often adds "that" (optional in casual speech), and adjusts the verb, pronouns, and time words to fit the new point of view.</p>`,
      examples: [
        { correct: true, text: "Direct: She said, \"I am tired.\"", note: "" },
        { correct: true, text: "Reported: She said (that) she was tired.", note: "" }
      ]
    },
    {
      title: "Backshift: tense changes one step into the past",
      text: `<p>When the reporting verb (said, told, explained) is in the past tense, the tense inside the quote generally shifts one step back:</p>
      <ul>
        <li>present simple → past simple: "I work here" → he said he worked there</li>
        <li>present continuous → past continuous: "I am working" → he said he was working</li>
        <li>present perfect → past perfect: "I have finished" → he said he had finished</li>
        <li>past simple → past perfect: "I finished" → he said he had finished</li>
        <li>past continuous → past perfect continuous: "I was working" → he said he had been working</li>
        <li>will → would: "I will help" → he said he would help</li>
        <li>can → could, may → might, must → had to (or must, unchanged)</li>
      </ul>
      <p>Past perfect and modals like would/could/should/might/ought to/mustn't usually stay the same — there's nowhere further back for them to shift.</p>`,
      examples: [
        { correct: true, text: "Direct: \"I am going to Paris.\" → Reported: She said she was going to Paris.", note: "" },
        { correct: true, text: "Direct: \"I have already eaten.\" → Reported: He said he had already eaten.", note: "" },
        { correct: true, text: "Direct: \"I will call you.\" → Reported: She said she would call me.", note: "" },
        { correct: true, text: "Direct: \"I would help if I could.\" → Reported: He said he would help if he could.", note: "no further backshift possible for \"would/could\"" }
      ]
    },
    {
      title: "When NOT to backshift",
      text: `<p>If the reporting verb is in the present tense ("says," "tells"), or the statement is still true/a general fact/a scientific law, no backshift is required.</p>`,
      examples: [
        { correct: true, text: "She says she's tired.", note: "present reporting verb — no backshift needed" },
        { correct: true, text: "The teacher said the earth revolves around the sun.", note: "general truth — often kept in present tense" }
      ]
    },
    {
      title: "Pronoun and possessive changes",
      text: `<p>Pronouns shift to match the new point of view, exactly as they would if you were reporting someone else's words to a third person.</p>`,
      examples: [
        { correct: true, text: "Direct: \"I love my job,\" said Tom. → Reported: Tom said (that) he loved his job.", note: "I→he, my→his" },
        { correct: true, text: "Direct: \"We finished our project,\" they said. → Reported: They said (that) they had finished their project.", note: "we→they, our→their" }
      ]
    },
    {
      title: "Time and place word changes",
      text: `<table style="width:100%;border-collapse:collapse;margin-top:8px;font-size:13.5px;">
      <tr style="background:#f8f9fd;"><th style="text-align:left;padding:6px;border:1px solid #e4e7ef;">Direct speech</th><th style="text-align:left;padding:6px;border:1px solid #e4e7ef;">Reported speech</th></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">now</td><td style="padding:6px;border:1px solid #e4e7ef;">then / at that time</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">today</td><td style="padding:6px;border:1px solid #e4e7ef;">that day</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">tomorrow</td><td style="padding:6px;border:1px solid #e4e7ef;">the next/following day</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">yesterday</td><td style="padding:6px;border:1px solid #e4e7ef;">the day before / the previous day</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">this week</td><td style="padding:6px;border:1px solid #e4e7ef;">that week</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">last week</td><td style="padding:6px;border:1px solid #e4e7ef;">the week before / the previous week</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">next week</td><td style="padding:6px;border:1px solid #e4e7ef;">the following week</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">here</td><td style="padding:6px;border:1px solid #e4e7ef;">there</td></tr>
      <tr><td style="padding:6px;border:1px solid #e4e7ef;">this / these</td><td style="padding:6px;border:1px solid #e4e7ef;">that / those</td></tr>
      </table>`,
      examples: [
        { correct: true, text: "Direct: \"I'll finish it tomorrow.\" → Reported: He said he would finish it the next day.", note: "" },
        { correct: true, text: "Direct: \"I saw her here yesterday.\" → Reported: She said she had seen her there the day before.", note: "" }
      ]
    },
    {
      title: "Reporting questions",
      text: `<p>Reported questions use normal statement word order (subject before verb), no question mark, and no auxiliary "do/does/did."</p>
      <ul>
        <li><strong>Yes/no questions:</strong> introduced by "if" or "whether." Direct: "Do you like tea?" → Reported: He asked if/whether I liked tea.</li>
        <li><strong>Wh-questions:</strong> keep the question word, but switch to statement order. Direct: "Where do you live?" → Reported: She asked where I lived.</li>
      </ul>`,
      examples: [
        { correct: true, text: "Direct: \"Are you coming?\" → Reported: He asked if I was coming.", note: "" },
        { correct: false, text: "He asked if was I coming.", note: "wrong — must use statement word order" },
        { correct: true, text: "Direct: \"What time is it?\" → Reported: She asked what time it was.", note: "" }
      ]
    },
    {
      title: "Reporting commands, requests, and suggestions",
      text: `<ul>
        <li><strong>Commands/requests:</strong> reporting verb (tell, ask, order) + object + to-infinitive. Direct: "Close the door," she said. → Reported: She told me to close the door.</li>
        <li><strong>Negative commands:</strong> tell/ask + object + not to + base verb. Direct: "Don't be late." → Reported: He told me not to be late.</li>
        <li><strong>Suggestions:</strong> suggest + -ing, or suggest + (that) + subject + base verb (subjunctive). Direct: "Let's go to the beach." → Reported: She suggested going to the beach. / She suggested that we go to the beach.</li>
      </ul>`,
      examples: [
        { correct: true, text: "Direct: \"Please help me,\" she said. → Reported: She asked me to help her.", note: "" },
        { correct: true, text: "Direct: \"Don't touch that!\" → Reported: He told me not to touch that.", note: "" },
        { correct: false, text: "He told me to not touch that.", note: "less standard word order — \"not to\" is preferred" }
      ]
    },
    {
      title: "Reporting verbs beyond \"said\" and \"told\"",
      text: `<p>Choosing a precise reporting verb captures tone and function: explained, admitted, denied, promised, warned, complained, suggested, insisted, advised, agreed, refused, offered, apologized, claimed, argued, wondered.</p>`,
      examples: [
        { correct: true, text: "Direct: \"I'm sorry I broke it.\" → Reported: He apologized for breaking it.", note: "structure changes with the reporting verb chosen" },
        { correct: true, text: "Direct: \"I promise I'll be there.\" → Reported: She promised (that) she would be there.", note: "" }
      ]
    }
  ],
  commonMistakes: [
    "Keeping the question word order in reported questions: \"He asked where was I going\" ✘ → \"He asked where I was going\" ✔.",
    "Forgetting \"if/whether\" in reported yes/no questions: \"She asked I liked tea\" ✘ → \"She asked if I liked tea\" ✔.",
    "Keeping the question mark and \"do/does/did\": \"He asked did I like it?\" ✘ → \"He asked if I liked it.\" ✔",
    "Forgetting to shift pronouns to match the new speaker's perspective: \"Tom said I was tired\" (should be \"he\" if reporting Tom's words) ✘ → \"Tom said he was tired\" ✔.",
    "Not backshifting time words: \"She said she would come tomorrow\" reported a week later, still saying \"tomorrow\" ✘ → \"She said she would come the next day\" ✔."
  ]
});

window.EXERCISES["reported-speech"] = [
  { id:"rs-1", level:1, type:"mcq", prompt:"Direct: \"I am hungry,\" she said. → Reported: She said (that) she ___ hungry.", options:["is","was","has been","be"], answer:"was", explanationCorrect:" Present simple (\"am\") backshifts to past simple (\"was\") after a past reporting verb.", explanationWrong:" With a past reporting verb (\"said\"), present tense inside the quote shifts back one step: am → was." },
  { id:"rs-2", level:1, type:"mcq", prompt:"Direct: \"I will call you,\" he said. → Reported: He said he ___ call me.", options:["will","would","can","could"], answer:"would", explanationCorrect:" \"Will\" backshifts to \"would\" in reported speech.", explanationWrong:" The modal \"will\" backshifts to \"would\" when reported after a past-tense reporting verb." },
  { id:"rs-3", level:1, type:"fill", prompt:"Direct: \"I love this city,\" she said. → Reported: She said she ___ (love) that city.", answer:"loved", explanationCorrect:" Present simple \"love\" backshifts to past simple \"loved.\"", explanationWrong:" After a past reporting verb, present simple shifts back to past simple: love → loved." },
  { id:"rs-4", level:2, type:"mcq", prompt:"Direct: \"Where do you live?\" → Reported: She asked ___ I lived.", options:["that","if","where","what"], answer:"where", explanationCorrect:" Wh-questions keep their question word (\"where\") in reported speech.", explanationWrong:" Since this is a wh-question, the question word itself (\"where\") is kept in reported speech, not replaced with \"if\" or \"that.\"" },
  { id:"rs-5", level:2, type:"mcq", prompt:"Direct: \"Are you coming to the party?\" → Reported: He asked ___ I was coming to the party.", options:["that","if","where","why"], answer:"if", explanationCorrect:" Yes/no questions are introduced by \"if\" or \"whether\" in reported speech.", explanationWrong:" A yes/no question (with no question word) requires \"if\" or \"whether\" to introduce it in reported speech." },
  { id:"rs-6", level:2, type:"fill", prompt:"Direct: \"Close the door,\" she said. → Reported: She told me ___ close the door.", answer:"to", explanationCorrect:" Reported commands use \"tell + object + to + base verb\": told me to close.", explanationWrong:" Reporting a command follows the pattern \"tell + object + to-infinitive\": told me to close the door." },
  { id:"rs-7", level:2, type:"mcq", prompt:"Direct: \"I have finished my homework,\" he said. → Reported: He said he ___ finished his homework.", options:["has","have","had","was"], answer:"had", explanationCorrect:" Present perfect backshifts to past perfect: have finished → had finished.", explanationWrong:" With a past reporting verb, present perfect shifts back to past perfect: has/have finished → had finished." },
  { id:"rs-8", level:3, type:"mcq", prompt:"Direct: \"I saw her yesterday,\" he said (reported a week later). → Reported: He said he had seen her ___.", options:["yesterday","the day before","today","tomorrow"], answer:"the day before", explanationCorrect:" \"Yesterday\" shifts to \"the day before\" (or \"the previous day\") in reported speech.", explanationWrong:" Time expressions shift in reported speech: \"yesterday\" becomes \"the day before\" or \"the previous day,\" not \"yesterday\" itself." },
  { id:"rs-9", level:3, type:"fill", prompt:"Direct: \"Don't be late,\" he said. → Reported: He told me ___ to be late.", answer:"not", explanationCorrect:" Negative commands: tell/ask + object + not to + base verb.", explanationWrong:" Negative reported commands insert \"not\" before the infinitive: told me not to be late." },
  { id:"rs-10", level:3, type:"mcq", prompt:"Direct: \"Let's go to the beach,\" she said. → Reported: She suggested ___ to the beach.", options:["to go","going","go","that go"], answer:"going", explanationCorrect:" \"Suggest\" is commonly followed by a gerund (-ing): suggested going.", explanationWrong:" \"Suggest\" takes a gerund (-ing form) directly, not a to-infinitive: suggested going, not suggested to go." },
  { id:"rs-11", level:4, type:"mcq", prompt:"Direct: \"I was working when you called,\" she said. → Reported: She said she ___ working when I had called.", options:["was","had been","has been","is"], answer:"had been", explanationCorrect:" Past continuous backshifts to past perfect continuous: was working → had been working.", explanationWrong:" Past continuous shifts back to past perfect continuous in reported speech: was working → had been working." },
  { id:"rs-12", level:4, type:"fill", prompt:"Direct: \"I'm sorry I lied,\" he said. → Reported (use \"apologized for\"): He apologized ___ lying.", answer:"for", explanationCorrect:" \"Apologize for + gerund\" is the correct structure to report an apology.", explanationWrong:" The reporting verb \"apologize\" is followed by \"for + gerund\": apologized for lying." },
  { id:"rs-13", level:4, type:"mcq", prompt:"Direct: \"The earth orbits the sun,\" the teacher said. → Which reported version is most natural?", options:["The teacher said the earth had orbited the sun.","The teacher said the earth orbits the sun.","The teacher said the earth orbited the sun.","Both B and C are acceptable, since it's a permanent fact."], answer:"Both B and C are acceptable, since it's a permanent fact.", explanationCorrect:" Facts and general truths often keep the present tense even in reported speech, though backshifting to past simple is also grammatically fine and common.", explanationWrong:" Because this is a permanent scientific fact, English allows keeping the present tense in reported speech (no backshift required), though the standard backshifted form is also acceptable." },
  { id:"rs-14", level:5, type:"mcq", prompt:"Direct: \"I might come to the party,\" she said. → Reported: She said she ___ come to the party.", options:["might","may","must","will"], answer:"might", explanationCorrect:" \"Might\" has no further past form to shift to, so it stays the same in reported speech.", explanationWrong:" Some modals like might, could, would, and should don't change in reported speech because there's no further backshift available." },
  { id:"rs-15", level:5, type:"fill", prompt:"Direct: \"I'll see you next week,\" she said (reported much later). → Reported: She said she would see me ___.", answer:"the following week", acceptedAnswers:["the next week","the week after"], explanationCorrect:" \"Next week\" shifts to \"the following week\" (or \"the week after\") in reported speech.", explanationWrong:" Time expressions referring to the future shift forward in reported speech: \"next week\" becomes \"the following week.\"" },
  { id:"rs-16", level:1, type:"mcq", prompt:"Direct: \"I like tea,\" she said. → Reported: She said (that) she ___ tea.", options:["like","likes","liked","liking"], answer:"liked", explanationCorrect:" Present simple \"like\" backshifts to past simple \"liked\" after a past reporting verb.", explanationWrong:" After the past reporting verb \"said,\" present simple backshifts one step to past simple: like → liked." },
  { id:"rs-17", level:1, type:"fill", prompt:"Direct: \"We are tired,\" they said. → Reported: They said they ___ tired.", answer:"were", explanationCorrect:" \"Are\" backshifts to \"were\" to match the plural subject in past tense.", explanationWrong:" Present tense \"are\" shifts back to past tense \"were\" after the past reporting verb \"said.\"" },
  { id:"rs-18", level:2, type:"mcq", prompt:"Direct: \"What is your name?\" → Reported: He asked ___ my name was.", options:["that","if","what","where"], answer:"what", explanationCorrect:" Wh-questions keep their question word in reported speech.", explanationWrong:" Since \"what\" is the question word in the original question, it's kept in the reported version, unlike yes/no questions which use \"if/whether.\"" },
  { id:"rs-19", level:2, type:"fill", prompt:"Direct: \"Please be quiet,\" the teacher said. → Reported: The teacher asked us ___ be quiet.", answer:"to", explanationCorrect:" Reported requests use \"ask + object + to + base verb.\"", explanationWrong:" A polite request reported in indirect speech follows the pattern \"ask someone to do something\": asked us to be quiet." },
  { id:"rs-20", level:3, type:"mcq", prompt:"Direct: \"I can swim well,\" he said. → Reported: He said he ___ swim well.", options:["can","could","will","might"], answer:"could", explanationCorrect:" \"Can\" backshifts to \"could\" in reported speech.", explanationWrong:" The modal \"can\" shifts back to \"could\" when reported after a past-tense reporting verb." },
  { id:"rs-21", level:3, type:"fill", prompt:"Direct: \"I'm going to the store here,\" she said (reported elsewhere). → Reported: She said she was going to the store ___.", answer:"there", explanationCorrect:" \"Here\" shifts to \"there\" in reported speech when the location changes from the speaker's original perspective.", explanationWrong:" Place words shift in reported speech: \"here\" becomes \"there\" when reporting from a different location." },
  { id:"rs-22", level:4, type:"mcq", prompt:"Direct: \"I will have finished by Friday,\" she said. → Reported: She said she ___ have finished by Friday.", options:["will","would","can","must"], answer:"would", explanationCorrect:" \"Will\" backshifts to \"would,\" even inside the future perfect structure.", explanationWrong:" The modal \"will\" always backshifts to \"would\" in reported speech, regardless of which larger tense structure it's part of." },
  { id:"rs-23", level:4, type:"fill", prompt:"Direct: \"Don't forget your umbrella,\" he said. → Reported: He reminded me ___ forget my umbrella. (negative infinitive)", answer:"not to", explanationCorrect:" Negative reported commands use \"not to + base verb\": reminded me not to forget.", explanationWrong:" To report a negative command or reminder, insert \"not\" before the infinitive: reminded me not to forget." },
  { id:"rs-24", level:5, type:"mcq", prompt:"Direct: \"I've never been to Japan,\" he admitted. → Which reported version is correct?", options:["He admitted he never been to Japan.","He admitted that he had never been to Japan.","He admitted that he never was to Japan.","He admitted he never being to Japan."], answer:"He admitted that he had never been to Japan.", explanationCorrect:" Present perfect (\"have never been\") backshifts to past perfect (\"had never been\") after the past reporting verb \"admitted.\"", explanationWrong:" Present perfect backshifts to past perfect in reported speech: \"have never been\" becomes \"had never been.\"" }
];

/* =========================================================
   14. PUNCTUATION
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "punctuation",
  order: 14,
  icon: "✒️",
  title: "Punctuation",
  shortDesc: "Complete rules for commas, semicolons, colons, apostrophes, and quotation marks.",
  intro: "Punctuation controls how a reader parses your sentence — the wrong mark can genuinely change meaning. This section covers every mark you'll use in everyday writing.",
  rules: [
    {
      title: "The comma: six core uses",
      text: `<ul>
        <li><strong>1. Items in a list:</strong> "I bought apples, bananas, and oranges." (the final comma before "and" is the Oxford comma — optional but recommended for clarity)</li>
        <li><strong>2. Before FANBOYS joining two independent clauses:</strong> "I called her, but she didn't answer."</li>
        <li><strong>3. After an introductory word/phrase/clause:</strong> "However, we decided to continue." / "After the meeting, we went home."</li>
        <li><strong>4. Around non-essential (non-defining) information:</strong> "My brother, who lives in Rome, is visiting." / "The report, in my opinion, is excellent."</li>
        <li><strong>5. Separating coordinate adjectives (each independently modifies the noun):</strong> "It was a long, difficult journey." (test: can you say "long and difficult" or swap the order? If yes, use a comma.)</li>
        <li><strong>6. In dates, addresses, and after direct quotes:</strong> "July 4, 1776," "Boston, Massachusetts," "\"I'm leaving,\" she said."</li>
      </ul>`,
      examples: [
        { correct: true, text: "After finishing dinner, we watched a movie.", note: "introductory phrase" },
        { correct: true, text: "She is smart, kind, and hardworking.", note: "list" },
        { correct: false, text: "She is smart kind and hardworking.", note: "missing commas" },
        { correct: true, text: "It was a hot, humid afternoon.", note: "coordinate adjectives" }
      ]
    },
    {
      title: "The comma splice and how to avoid it",
      text: `<p>Never join two independent clauses with a comma alone. Fix with a coordinating conjunction, a semicolon, or by splitting into two sentences (see the Conjunctions section for full detail).</p>`,
      examples: [
        { correct: false, text: "I was tired, I went to bed.", note: "comma splice" },
        { correct: true, text: "I was tired, so I went to bed.", note: "" },
        { correct: true, text: "I was tired; I went to bed.", note: "" }
      ]
    },
    {
      title: "The semicolon",
      text: `<ul>
        <li><strong>Joins two closely related independent clauses</strong> without a conjunction: "The sky darkened; a storm was coming."</li>
        <li><strong>Before a conjunctive adverb</strong> (however, therefore, moreover) linking two independent clauses: "I wanted to go; however, it was too late."</li>
        <li><strong>Separates items in a complex list</strong> that already contain commas: "We visited Paris, France; Rome, Italy; and Berlin, Germany."</li>
      </ul>`,
      examples: [
        { correct: true, text: "She loves reading; her sister prefers sports.", note: "" },
        { correct: false, text: "She loves reading, her sister prefers sports.", note: "should be a semicolon or a conjunction" }
      ]
    },
    {
      title: "The colon",
      text: `<ul>
        <li><strong>Introduces a list</strong>, after a complete independent clause: "Bring the following: a pen, paper, and a laptop." (Don't use a colon directly after a verb or preposition: not "The items are: pen, paper.")</li>
        <li><strong>Introduces an explanation or elaboration</strong> of the preceding clause: "There was only one problem: we had no money."</li>
        <li><strong>Introduces a quotation</strong> (more formal than a comma): "She said one thing: \"Never give up.\""</li>
        <li>Used in time (6:30), ratios (3:1), titles/subtitles, and salutations in formal letters (Dear Sir:).</li>
      </ul>`,
      examples: [
        { correct: true, text: "He had one goal: to win.", note: "" },
        { correct: false, text: "My favorite colors are: red and blue.", note: "no colon directly after \"are\" — remove it or reword" },
        { correct: true, text: "My favorite colors are red and blue.", note: "" },
        { correct: true, text: "I need three things: time, money, and patience.", note: "" }
      ]
    },
    {
      title: "The apostrophe",
      text: `<ul>
        <li><strong>Possession:</strong> see the Nouns section for full rules (dog's, dogs', children's).</li>
        <li><strong>Contractions:</strong> replaces missing letters — don't (do not), it's (it is/has), they're (they are), won't (will not), let's (let us).</li>
        <li><strong>Never use an apostrophe to form a plain plural:</strong> "banana's for sale" ✘ → "bananas for sale" ✔.</li>
        <li>Exception: sometimes used for plurals of single letters/numbers for clarity: "mind your p's and q's," "the 1990's" (though "1990s" without an apostrophe is now more standard).</li>
      </ul>`,
      examples: [
        { correct: true, text: "It's a beautiful day.", note: "it is" },
        { correct: true, text: "The dog wagged its tail.", note: "possessive, no apostrophe" },
        { correct: false, text: "I have two dog's.", note: "plural, no apostrophe needed" },
        { correct: true, text: "I have two dogs.", note: "" }
      ]
    },
    {
      title: "Quotation marks",
      text: `<ul>
        <li>Enclose direct speech and direct quotations: She said, "I'll be there."</li>
        <li><strong>American English:</strong> commas and periods go inside the closing quotation mark: "Let's go," she said. British English often places them outside, depending on logic: She said "let's go".</li>
        <li>Use single quotes for a quote within a quote: He said, "She told me, 'Don't wait for me.'"</li>
        <li>Can indicate irony, a nickname, or a word used in an unusual sense: He's a real "genius" (sarcasm).</li>
      </ul>`,
      examples: [
        { correct: true, text: "\"I can't believe it,\" she whispered.", note: "American style — comma inside quotes" },
        { correct: true, text: "He calls himself a \"expert,\" though he has no training.", note: "ironic use" }
      ]
    },
    {
      title: "Hyphens vs. dashes",
      text: `<ul>
        <li><strong>Hyphen (-):</strong> joins compound words and compound modifiers before a noun: well-known author, five-year-old child, mother-in-law.</li>
        <li><strong>En dash (–):</strong> shows a range: pages 10–20, the 2020–2021 season.</li>
        <li><strong>Em dash (—):</strong> sets off an abrupt break or emphatic aside, similar to parentheses but stronger: "She finally said it — the truth."</li>
      </ul>`,
      examples: [
        { correct: true, text: "a well-known actor", note: "compound modifier before noun" },
        { correct: true, text: "an actor who is well known", note: "no hyphen after the noun" },
        { correct: true, text: "Monday–Friday, 9–5", note: "range" }
      ]
    },
    {
      title: "The Oxford (serial) comma",
      text: `<p>The comma before the final "and/or" in a list of three or more items. Optional stylistically, but often needed to avoid genuine ambiguity.</p>`,
      examples: [
        { correct: true, text: "I'd like to thank my parents, Beyoncé, and God.", note: "clear, separate items" },
        { correct: false, text: "I'd like to thank my parents, Beyoncé and God.", note: "ambiguous — could misread \"Beyoncé and God\" as renaming \"my parents\"" }
      ]
    }
  ],
  commonMistakes: [
    "Comma splices: joining two independent clauses with just a comma — use a conjunction, semicolon, or period instead.",
    "Apostrophe for plain plurals: \"apple's for sale\" ✘ → \"apples for sale\" ✔.",
    "Colon after an incomplete clause/verb: \"The ingredients are: flour, sugar\" ✘ → \"The ingredients are flour and sugar\" or \"You need the following ingredients: flour, sugar\" ✔.",
    "Confusing it's/its (see the Pronouns section).",
    "Missing commas around non-essential clauses: \"My mom who taught me to cook is visiting\" (only one mom — needs commas) ✘ → \"My mom, who taught me to cook, is visiting\" ✔.",
    "Using a semicolon where a colon or comma belongs: \"I need one thing; your help\" ✘ → \"I need one thing: your help\" ✔."
  ]
});

window.EXERCISES["punctuation"] = [
  { id:"pu-1", level:1, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["I bought apples bananas and oranges.","I bought apples, bananas, and oranges.","I bought apples, bananas and, oranges.","I bought, apples bananas and oranges."], answer:"I bought apples, bananas, and oranges.", explanationCorrect:" Items in a list are separated by commas, including before \"and\" (Oxford comma).", explanationWrong:" Each item in a list needs a comma between it and the next, including before the final \"and.\"" },
  { id:"pu-2", level:1, type:"mcq", prompt:"Which sentence uses the apostrophe correctly?", options:["The dog wagged it's tail.","The dog wagged its tail.","The dogs' wagged its tail.","The dog's wagged their tail."], answer:"The dog wagged its tail.", explanationCorrect:" \"Its\" (no apostrophe) is the possessive form; \"it's\" is only a contraction of \"it is/has.\"", explanationWrong:" The possessive \"its\" never takes an apostrophe — \"it's\" is reserved for the contraction of \"it is\" or \"it has.\"" },
  { id:"pu-3", level:1, type:"fill", prompt:"Add the missing punctuation mark: \"I was tired___ so I went to bed.\"", answer:",", explanationCorrect:" A comma goes before the coordinating conjunction \"so\" when it joins two independent clauses.", explanationWrong:" Before a coordinating conjunction (FANBOYS) joining two independent clauses, a comma is required." },
  { id:"pu-4", level:2, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["My brother who lives in Rome is visiting us.","My brother, who lives in Rome, is visiting us.","My brother who lives in Rome, is visiting us.","My brother, who lives in Rome is visiting us."], answer:"My brother, who lives in Rome, is visiting us.", explanationCorrect:" This is non-essential info (assuming one brother) and needs commas on both sides.", explanationWrong:" Since this describes a uniquely identified brother, the extra information is non-essential and must be set off with commas on both sides." },
  { id:"pu-5", level:2, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["She loves reading, her sister prefers sports.","She loves reading; her sister prefers sports.","She loves reading: her sister prefers sports.","She loves reading her sister prefers sports."], answer:"She loves reading; her sister prefers sports.", explanationCorrect:" A semicolon correctly joins two closely related independent clauses without a conjunction.", explanationWrong:" Two independent clauses with no conjunction between them need a semicolon, not just a comma (which would create a comma splice)." },
  { id:"pu-6", level:2, type:"fill", prompt:"Correct the plural error: \"I bought three apple___.\" (add correct ending, no apostrophe)", answer:"s", explanationCorrect:" A plain plural never uses an apostrophe — just add -s.", explanationWrong:" Plural nouns are formed by adding -s (or -es), never with an apostrophe: apples, not apple's." },
  { id:"pu-7", level:3, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["He had one goal, to win.","He had one goal: to win.","He had one goal; to win.","He had one goal — , to win."], answer:"He had one goal: to win.", explanationCorrect:" A colon correctly introduces an elaboration/explanation after a complete independent clause.", explanationWrong:" To introduce an explanation or elaboration of a complete statement, use a colon, not a comma or semicolon." },
  { id:"pu-8", level:3, type:"mcq", prompt:"Which sentence has a genuine punctuation error?", options:["My favorite colors are red and blue.","My favorite colors are: red and blue.","I need three things: time, money, and patience.","She said, \"I'll be there.\""], answer:"My favorite colors are: red and blue.", explanationCorrect:" A colon should not directly follow a verb like \"are\" — the clause before a colon must be a complete independent clause.", explanationWrong:" A colon can't directly follow a linking verb like \"are\"; it must come after a complete, grammatically independent clause." },
  { id:"pu-9", level:3, type:"fill", prompt:"Add the missing punctuation: \"It was a long___ difficult journey.\" (coordinate adjectives)", answer:",", explanationCorrect:" Coordinate adjectives that each independently modify the noun are separated by a comma.", explanationWrong:" When two adjectives independently describe the same noun (and could be joined with \"and\"), they're separated by a comma: long, difficult." },
  { id:"pu-10", level:4, type:"mcq", prompt:"Choose the sentence that avoids ambiguity with the Oxford comma.", options:["I'd like to thank my parents, Beyoncé and God.","I'd like to thank my parents, Beyoncé, and God.","I'd like to thank my parents Beyoncé and God.","I'd like to thank, my parents, Beyoncé and God."], answer:"I'd like to thank my parents, Beyoncé, and God.", explanationCorrect:" The Oxford comma before \"and God\" clarifies that these are three separate items, not that \"Beyoncé and God\" are renaming \"my parents.\"", explanationWrong:" Without the comma before \"and,\" the sentence could misleadingly suggest the parents are named Beyoncé and God — the Oxford comma prevents that ambiguity." },
  { id:"pu-11", level:4, type:"mcq", prompt:"Choose the correctly hyphenated compound modifier.", options:["a well known author","a well-known author","a well, known author","a wellknown author"], answer:"a well-known author", explanationCorrect:" Compound modifiers placed before a noun are hyphenated: well-known author.", explanationWrong:" When two words work together as a single adjective before a noun, they're joined with a hyphen: well-known, not two separate words or one merged word." },
  { id:"pu-12", level:4, type:"fill", prompt:"Fix the comma splice: \"The sky darkened___ a storm was coming.\" (insert correct punctuation mark, no conjunction added)", answer:";", explanationCorrect:" A semicolon correctly joins two closely related independent clauses without needing a conjunction.", explanationWrong:" Without adding a conjunction, two independent clauses need a semicolon (not a comma) to be joined correctly." },
  { id:"pu-13", level:5, type:"mcq", prompt:"Choose the sentence with correct quotation mark and comma placement (American style).", options:["\"Let's go\", she said.","\"Let's go,\" she said.","\"Let's go\" , she said.","\"Let's go\". she said."], answer:"\"Let's go,\" she said.", explanationCorrect:" In American English, commas go inside the closing quotation mark.", explanationWrong:" American style places the comma inside the closing quotation mark, directly after the quoted words." },
  { id:"pu-14", level:5, type:"mcq", prompt:"Choose the sentence with correctly used semicolons in a complex list.", options:["We visited Paris, France, Rome, Italy, and Berlin, Germany.","We visited Paris, France; Rome, Italy; and Berlin, Germany.","We visited Paris; France, Rome; Italy, and Berlin; Germany.","We visited Paris, France; Rome; Italy; and Berlin; Germany."], answer:"We visited Paris, France; Rome, Italy; and Berlin, Germany.", explanationCorrect:" When list items already contain commas (city, country pairs), semicolons separate the items themselves to avoid confusion.", explanationWrong:" Since each list item already contains an internal comma (city, country), semicolons are needed between the items themselves to keep the list clear." },
  { id:"pu-15", level:1, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["Its a beautiful day.","It's a beautiful day.","Its' a beautiful day.","It,s a beautiful day."], answer:"It's a beautiful day.", explanationCorrect:" \"It's\" is the contraction of \"it is\" and needs an apostrophe.", explanationWrong:" \"It's\" (with an apostrophe) is the contraction of \"it is\" — \"Its\" without one is the possessive form and doesn't fit here." },
  { id:"pu-16", level:1, type:"fill", prompt:"Add the missing punctuation: \"She said___ 'I'll be there soon.'\"", answer:",", explanationCorrect:" A comma introduces a direct quotation after a reporting verb like \"said.\"", explanationWrong:" Before a direct quotation, a comma is used to introduce it: she said, \"...\"" },
  { id:"pu-17", level:2, type:"mcq", prompt:"Choose the correctly punctuated sentence.", options:["The company's profits, however, declined this quarter.","The company's profits however, declined this quarter.","The company's profits, however declined this quarter.","The companys profits, however, declined this quarter."], answer:"The company's profits, however, declined this quarter.", explanationCorrect:" \"However\" used mid-sentence as an interrupter is set off with commas on both sides, and \"company's\" correctly shows singular possession.", explanationWrong:" A conjunctive adverb like \"however\" placed mid-sentence needs commas on both sides, and the possessive \"company's\" requires an apostrophe before the s." },
  { id:"pu-18", level:2, type:"fill", prompt:"Add the missing punctuation: \"Yes___ I understand completely.\" (after an introductory word)", answer:",", explanationCorrect:" A comma follows an introductory word like \"Yes\" or \"No\" at the start of a sentence.", explanationWrong:" Introductory words such as \"Yes,\" \"No,\" \"Well,\" and \"However\" are followed by a comma when they begin a sentence." },
  { id:"pu-19", level:3, type:"mcq", prompt:"Choose the sentence with the apostrophe used correctly.", options:["The 1990's were a memorable decade.","The 1990s were a memorable decade.","The 1990,s were a memorable decade.","The 1990's's were a memorable decade."], answer:"The 1990s were a memorable decade.", explanationCorrect:" Decades are pluralized without an apostrophe in modern standard usage: the 1990s.", explanationWrong:" Modern style guides prefer no apostrophe for decade plurals: 1990s, not 1990's — the apostrophe form is considered outdated/nonstandard today." },
  { id:"pu-20", level:3, type:"fill", prompt:"Add the missing punctuation: \"I need to buy milk___ eggs___ and bread.\" (two identical marks)", answer:",", explanationCorrect:" Commas separate each item in a list, including between the first two items.", explanationWrong:" Each item in a list needs a comma separating it from the next, including \"milk\" and \"eggs\" here." },
  { id:"pu-21", level:4, type:"mcq", prompt:"Choose the correctly hyphenated sentence.", options:["My five year old daughter loves to draw.","My five-year-old daughter loves to draw.","My five-year old daughter loves to draw.","My five year-old daughter loves to draw."], answer:"My five-year-old daughter loves to draw.", explanationCorrect:" A compound modifier made of multiple words before a noun is fully hyphenated: five-year-old.", explanationWrong:" When several words work together as a single adjective before a noun (five-year-old daughter), every part of the compound is hyphenated." },
  { id:"pu-22", level:4, type:"fill", prompt:"Add the missing punctuation: \"There are three things I want___ health, happiness, and success.\" (introduces a list after a complete clause)", answer:":", explanationCorrect:" A colon introduces the list after the complete independent clause \"There are three things I want.\"", explanationWrong:" Since \"There are three things I want\" is a complete independent clause, a colon correctly introduces the list that follows." },
  { id:"pu-23", level:5, type:"mcq", prompt:"Which sentence correctly uses an em dash for an abrupt emphatic aside?", options:["She finally said it, the truth.","She finally said it — the truth.","She finally said it; the truth.","She finally said it: the truth, — after all this time."], answer:"She finally said it — the truth.", explanationCorrect:" An em dash sets off an abrupt, emphatic aside more strongly than a comma or semicolon would.", explanationWrong:" For a dramatic, abrupt aside like this, an em dash is the standard choice — stronger and more emphatic than a comma or semicolon." }
];
