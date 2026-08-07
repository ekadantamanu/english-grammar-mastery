window.GRAMMAR_SECTIONS = window.GRAMMAR_SECTIONS || [];
window.EXERCISES = window.EXERCISES || {};

/* =========================================================
   10. CLAUSES & SENTENCE STRUCTURE
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "clauses",
  order: 10,
  icon: "🏗️",
  title: "Clauses & Sentence Structure",
  shortDesc: "Independent vs. dependent clauses, the four sentence types, and every clause category.",
  intro: "A clause is any group of words with a subject and a verb. How you combine clauses determines your sentence type — this section maps out the full system.",
  rules: [
    {
      title: "Independent vs. dependent clauses",
      text: `<p>An <strong>independent clause</strong> has a subject and verb and expresses a complete thought — it can stand alone as a sentence. A <strong>dependent (subordinate) clause</strong> has a subject and verb but does NOT express a complete thought — it depends on an independent clause to make sense, usually because it starts with a subordinating conjunction or relative pronoun.</p>`,
      examples: [
        { correct: true, text: "She left early.", note: "independent — complete thought" },
        { correct: false, text: "Because she left early.", note: "dependent alone — incomplete, needs more" },
        { correct: true, text: "Because she left early, she missed the announcement.", note: "dependent + independent = complete sentence" }
      ]
    },
    {
      title: "The four sentence types",
      text: `<ul>
        <li><strong>Simple sentence:</strong> one independent clause. "The dog barked."</li>
        <li><strong>Compound sentence:</strong> two or more independent clauses joined by a coordinating conjunction, semicolon, or conjunctive adverb. "The dog barked, and the cat ran away."</li>
        <li><strong>Complex sentence:</strong> one independent clause + at least one dependent clause. "The dog barked because a stranger approached."</li>
        <li><strong>Compound-complex sentence:</strong> two+ independent clauses + at least one dependent clause. "The dog barked because a stranger approached, and the cat ran away."</li>
      </ul>`,
      examples: [
        { correct: true, text: "I woke up early. (simple)", note: "" },
        { correct: true, text: "I woke up early, but I still felt tired. (compound)", note: "" },
        { correct: true, text: "Although I woke up early, I still felt tired. (complex)", note: "" },
        { correct: true, text: "Although I woke up early, I still felt tired, so I made coffee. (compound-complex)", note: "" }
      ]
    },
    {
      title: "Noun clauses",
      text: `<p>A dependent clause that functions as a noun — as a subject, object, or complement. Often introduced by that, what, whether, if, who, how, why, where, when.</p>`,
      examples: [
        { correct: true, text: "What she said surprised everyone.", note: "noun clause as subject" },
        { correct: true, text: "I don't know where he went.", note: "noun clause as object" },
        { correct: true, text: "The problem is that we're out of time.", note: "noun clause as complement" }
      ]
    },
    {
      title: "Adjective (relative) clauses",
      text: `<p>A dependent clause that modifies a noun, usually introduced by a relative pronoun (who, whom, whose, which, that) or relative adverb (where, when, why). Comes right after the noun it describes. See also the Pronouns section for who/whom/which/that rules.</p>
      <p><strong>Defining (restrictive)</strong> clauses give essential identifying information and have no commas. <strong>Non-defining (non-restrictive)</strong> clauses add extra, non-essential information and are set off with commas.</p>`,
      examples: [
        { correct: true, text: "The book that I borrowed is on the shelf.", note: "defining — tells us which book" },
        { correct: true, text: "My car, which is ten years old, still runs great.", note: "non-defining — extra info, set off by commas" },
        { correct: false, text: "My car which is ten years old still runs great.", note: "missing commas for non-defining clause" }
      ]
    },
    {
      title: "Adverb clauses",
      text: `<p>A dependent clause that modifies a verb, adjective, or another adverb — telling us when, where, why, how, under what condition, or with what result. Introduced by subordinating conjunctions (when, because, although, if, so that...). See the Conjunctions section for the full list and punctuation rules.</p>`,
      examples: [
        { correct: true, text: "She smiled when she saw the gift.", note: "tells us when" },
        { correct: true, text: "He studies hard so that he can pass the exam.", note: "tells us why/purpose" }
      ]
    },
    {
      title: "Fragments — a clause-level error",
      text: `<p>A <strong>sentence fragment</strong> is an incomplete sentence punctuated as if it were complete — usually a dependent clause, or a phrase, standing alone without an independent clause attached.</p>`,
      examples: [
        { correct: false, text: "Because I was tired.", note: "fragment — dependent clause alone" },
        { correct: true, text: "I went to bed early because I was tired.", note: "fixed — attached to an independent clause" },
        { correct: false, text: "Running down the street in the rain.", note: "fragment — phrase, no subject+verb combo forming a complete thought" },
        { correct: true, text: "She was running down the street in the rain.", note: "fixed — now has a subject and complete verb" }
      ]
    },
    {
      title: "Parallel structure across clauses/lists",
      text: `<p>Items joined in a list, or compared/contrasted, should use the same grammatical form throughout.</p>`,
      examples: [
        { correct: true, text: "She likes hiking, swimming, and biking.", note: "all gerunds" },
        { correct: false, text: "She likes hiking, swimming, and to bike.", note: "mixed forms — not parallel" },
        { correct: true, text: "The job requires strong communication, attention to detail, and the ability to multitask.", note: "" }
      ]
    }
  ],
  commonMistakes: [
    "Writing a dependent clause as if it were a full sentence: \"Although it was late.\" ✘ — this is a fragment; attach it to an independent clause.",
    "Missing commas around non-defining relative clauses: \"My brother who lives in Canada called me\" (if you have only one brother) should be \"My brother, who lives in Canada, called me.\"",
    "Comma splices joining two independent clauses with no conjunction (see the Conjunctions section for fixes).",
    "Breaking parallel structure in lists: \"The report should be clear, concise, and persuade the reader\" ✘ → \"...clear, concise, and persuasive\" ✔.",
    "Confusing \"that\" and \"which\": use \"that\" for defining clauses (no comma), \"which\" typically for non-defining clauses (with commas), in careful formal writing."
  ]
});

window.EXERCISES["clauses"] = [
  { id:"cl-1", level:1, type:"mcq", prompt:"Which of these is an independent clause?", options:["Because she was late","Although it rained","She finished her homework","When the movie started"], answer:"She finished her homework", explanationCorrect:" This clause has a subject and verb and expresses a complete thought — it can stand alone.", explanationWrong:" An independent clause must express a complete thought on its own; the others all start with subordinating conjunctions that make them dependent/incomplete." },
  { id:"cl-2", level:1, type:"mcq", prompt:"Identify the sentence type: \"The dog barked.\"", options:["Simple","Compound","Complex","Compound-complex"], answer:"Simple", explanationCorrect:" One independent clause with no other clauses attached = a simple sentence.", explanationWrong:" A simple sentence contains only one independent clause and nothing else — no coordinating or subordinating conjunctions attached." },
  { id:"cl-3", level:1, type:"fill", prompt:"Identify the type: \"I like tea, but she likes coffee.\" (one word: simple/compound/complex)", answer:"compound", explanationCorrect:" Two independent clauses joined by a coordinating conjunction (\"but\") make a compound sentence.", explanationWrong:" Since both clauses could stand alone and are joined by \"but\" (a coordinating conjunction), this is a compound sentence." },
  { id:"cl-4", level:2, type:"mcq", prompt:"Identify the sentence fragment.", options:["She left the party early.","Because she was feeling unwell.","She left because she was feeling unwell.","Although she left early, she still enjoyed herself."], answer:"Because she was feeling unwell.", explanationCorrect:" A dependent clause standing alone, with no independent clause attached, is a fragment — an incomplete sentence.", explanationWrong:" This is a dependent clause (starting with \"because\") standing completely alone with no independent clause — that makes it an incomplete fragment." },
  { id:"cl-5", level:2, type:"mcq", prompt:"Choose the correctly punctuated non-defining relative clause.", options:["My father who taught me to drive is a patient man.","My father, who taught me to drive, is a patient man.","My father who taught me to drive, is a patient man.","My father, who taught me to drive is a patient man."], answer:"My father, who taught me to drive, is a patient man.", explanationCorrect:" Since the speaker has only one father, the clause adds extra (non-essential) information and needs commas on both sides.", explanationWrong:" A non-defining relative clause (giving extra, non-essential info about a uniquely identified person, like \"my father\") needs commas on both sides." },
  { id:"cl-6", level:2, type:"fill", prompt:"Complete with a noun clause function label: \"What she said\" functions as the ___ of the sentence \"What she said surprised everyone.\"", answer:"subject", explanationCorrect:" \"What she said\" is the subject performing the action \"surprised.\"", explanationWrong:" The noun clause \"What she said\" is the one doing the surprising — it functions as the subject of the sentence." },
  { id:"cl-7", level:3, type:"mcq", prompt:"Identify the sentence type: \"Although it rained, we went hiking, and we still had a great time.\"", options:["Simple","Compound","Complex","Compound-complex"], answer:"Compound-complex", explanationCorrect:" This has two independent clauses (we went hiking / we still had a great time) plus one dependent clause (although it rained).", explanationWrong:" With two independent clauses joined by \"and,\" plus a dependent clause (\"Although it rained\"), this is compound-complex — the most complex sentence type." },
  { id:"cl-8", level:3, type:"mcq", prompt:"Choose the sentence with correct parallel structure.", options:["Her hobbies include reading, painting, and to hike.","Her hobbies include reading, painting, and hiking.","Her hobbies include to read, painting, and hiking.","Her hobbies include reading, to paint, and hiking."], answer:"Her hobbies include reading, painting, and hiking.", explanationCorrect:" All three items use the same grammatical form (gerunds): reading, painting, hiking.", explanationWrong:" A parallel list needs matching grammatical forms throughout — all gerunds here (reading, painting, hiking), not a mix of gerunds and infinitives." },
  { id:"cl-9", level:3, type:"fill", prompt:"\"The restaurant ___ we ate last night was excellent\" — fill with the correct relative adverb (referring to a place).", answer:"where", explanationCorrect:" \"Where\" is the relative adverb used to introduce a clause referring to a place.", explanationWrong:" Since \"restaurant\" is a place, the relative adverb \"where\" is used to connect the clause, rather than \"which\" or \"that\" plus a preposition." },
  { id:"cl-10", level:4, type:"mcq", prompt:"Which sentence correctly distinguishes defining from non-defining clauses?", options:["Students who cheat on exams will be expelled. My classmate, who sits next to me, is very honest.","Students, who cheat on exams, will be expelled. My classmate who sits next to me is very honest.","Students who cheat on exams, will be expelled. My classmate, who sits next to me is very honest.","Both sentences mean the same thing regardless of commas."], answer:"Students who cheat on exams will be expelled. My classmate, who sits next to me, is very honest.", explanationCorrect:" The first clause defines which students (essential, no commas); the second adds extra info about one specific, already-identified classmate (non-essential, needs commas).", explanationWrong:" \"Who cheat on exams\" is essential to identify which students (no commas needed), while \"who sits next to me\" is just extra info about one particular classmate (needs commas)." },
  { id:"cl-11", level:4, type:"fill", prompt:"Fix the fragment: \"Running through the park every morning.\" → add a subject and complete verb: ___ runs through the park every morning.", answer:"She", acceptedAnswers:["He","I","Tom","My dog","The dog"], explanationCorrect:" Turning the participial phrase into a complete sentence requires adding a subject and a complete (finite) verb form.", explanationWrong:" A fragment built around an -ing phrase needs a subject and a complete verb to become a full sentence, e.g., \"She runs through the park every morning.\"" },
  { id:"cl-12", level:5, type:"mcq", prompt:"Identify the function of the underlined-style clause: \"I wonder [whether she'll come to the party].\"", options:["Adjective clause modifying \"party\"","Adverb clause of condition","Noun clause functioning as the object of \"wonder\"","Independent clause"], answer:"Noun clause functioning as the object of \"wonder\"", explanationCorrect:" \"Whether she'll come to the party\" answers \"what do I wonder?\" — it's the direct object, functioning as a noun.", explanationWrong:" This clause answers the question \"wonder what?\" — meaning it functions as a noun (the direct object of \"wonder\"), not as an adjective or adverb clause." },
  { id:"cl-13", level:5, type:"mcq", prompt:"Which sentence uses \"that\" and \"which\" correctly according to the traditional formal distinction?", options:["The car that I bought, which is red, needs new tires.","The car, that I bought, is red and needs new tires.","The car which I bought is red and needs new tires.","Both A and C are traditionally correct."], answer:"Both A and C are traditionally correct.", explanationCorrect:" A: \"that I bought\" (defining, no commas) + \"which is red\" (non-defining, commas) is correct. C uses \"which\" for a defining clause, which is common and acceptable in British English, though \"that\" is preferred in strict American style — both patterns are traditionally used.", explanationWrong:" In traditional (especially American) style, \"that\" is preferred for defining clauses and \"which\" for non-defining ones — but \"which\" in defining clauses (as in C) is also long-established, particularly in British English." },
  { id:"cl-14", level:1, type:"mcq", prompt:"Which of these is a dependent clause on its own (a fragment)?", options:["The sun set.","When the sun set.","The sun set slowly.","Everyone watched the sunset."], answer:"When the sun set.", explanationCorrect:" Starting with the subordinating conjunction \"when\" makes this clause unable to stand alone — it needs an independent clause attached.", explanationWrong:" A clause beginning with a subordinating conjunction like \"when\" cannot stand alone as a complete sentence; it needs an independent clause to complete the thought." },
  { id:"cl-15", level:1, type:"fill", prompt:"\"I woke up early, but I still felt tired.\" — this is a ___ sentence (one word: simple/compound/complex).", answer:"compound", explanationCorrect:" Two independent clauses joined by \"but\" make a compound sentence.", explanationWrong:" Since both halves could stand alone as sentences and are joined by the coordinating conjunction \"but,\" this is a compound sentence." },
  { id:"cl-16", level:2, type:"mcq", prompt:"Identify the noun clause's function: \"I don't know why she left early.\"", options:["Subject","Direct object of \"know\"","Adjective modifying \"she\"","Adverb modifying \"left\""], answer:"Direct object of \"know\"", explanationCorrect:" \"Why she left early\" answers \"know what?\" — it functions as the direct object of the verb \"know.\"", explanationWrong:" This clause answers \"I don't know WHAT?\" — meaning it functions as a noun, specifically the direct object of \"know,\" not as an adjective or adverb." },
  { id:"cl-17", level:2, type:"fill", prompt:"Fix the fragment: \"Walking home in the rain.\" — add a subject and verb: ___ was walking home in the rain.", answer:"She", acceptedAnswers:["He","I","Maria","My sister"], explanationCorrect:" An -ing phrase alone has no subject or complete (finite) verb — adding both turns it into a full sentence.", explanationWrong:" A phrase built around an -ing form needs a subject and a complete verb (was walking) to become a full sentence rather than a fragment." },
  { id:"cl-18", level:3, type:"mcq", prompt:"Choose the sentence that correctly combines two ideas using a relative clause.", options:["I met a woman. She works as a pilot. I met a woman she works as a pilot.","I met a woman who works as a pilot.","I met a woman, who works as a pilot she flew planes.","I met a woman which works as a pilot."], answer:"I met a woman who works as a pilot.", explanationCorrect:" \"Who\" correctly introduces the relative clause describing the woman (a person), with no unnecessary comma since this is essential, defining information.", explanationWrong:" \"Who\" (not \"which,\" reserved for things) correctly links the two ideas about a person into one defining relative clause, without extra commas." },
  { id:"cl-19", level:3, type:"fill", prompt:"\"The keys, which I left on the table, are missing.\" — this relative clause is (one word: defining/non-defining).", answer:"non-defining", explanationCorrect:" Set off by commas, this clause adds extra, non-essential information about the keys.", explanationWrong:" Since the clause is set off by commas and adds extra (not essential) detail, it's a non-defining relative clause." },
  { id:"cl-20", level:4, type:"mcq", prompt:"Identify the sentence type: \"Because the roads were icy, drivers moved slowly, and several accidents were still reported.\"", options:["Simple","Compound","Complex","Compound-complex"], answer:"Compound-complex", explanationCorrect:" This has one dependent clause (\"Because the roads were icy\") plus two independent clauses joined by \"and.\"", explanationWrong:" With a dependent clause up front and two independent clauses connected by \"and,\" this sentence is compound-complex — combining both compound and complex structures." },
  { id:"cl-21", level:4, type:"fill", prompt:"\"The reason ___ she left is still unclear\" — fill with the correct relative adverb (referring to a reason).", answer:"why", explanationCorrect:" \"Why\" is the relative adverb used to introduce a clause explaining a reason.", explanationWrong:" Since \"reason\" is being explained, the relative adverb \"why\" connects the clause, similar to how \"where\" connects to a place and \"when\" to a time." },
  { id:"cl-22", level:5, type:"mcq", prompt:"Which sentence has broken parallel structure?", options:["The job requires typing, filing, and answering phones.","The job requires typing, filing, and to answer phones.","She enjoys cooking, painting, and reading.","He is honest, reliable, and hardworking."], answer:"The job requires typing, filing, and to answer phones.", explanationCorrect:" This list mixes two gerunds (typing, filing) with an infinitive (to answer) — breaking parallel structure. It should be \"answering phones.\"", explanationWrong:" A parallel list must use matching grammatical forms throughout; here \"to answer\" (infinitive) breaks the pattern set by \"typing\" and \"filing\" (both gerunds)." }
];

/* =========================================================
   11. CONDITIONALS
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "conditionals",
  order: 11,
  icon: "🌀",
  title: "Conditionals (zero, first, second, third, mixed)",
  shortDesc: "Every conditional form — structure, meaning, and how to mix them correctly.",
  intro: "Conditional sentences describe cause-and-effect relationships between an \"if\" clause and a result clause. English has five core patterns — this section gives the exact structure and meaning of each.",
  rules: [
    {
      title: "Zero conditional — general truths and facts",
      text: `<p><strong>Structure:</strong> If/When + present simple, ... present simple.</p>
      <p><strong>Meaning:</strong> Always true, scientific facts, general truths, automatic results, habits. "If" can be swapped for "when" with no change in meaning.</p>`,
      examples: [
        { correct: true, text: "If you heat water to 100°C, it boils.", note: "scientific fact" },
        { correct: true, text: "When I'm tired, I go to bed early.", note: "habit" },
        { correct: false, text: "If you heat water to 100°C, it will boil.", note: "shifts meaning toward a specific prediction rather than a general fact — not the zero-conditional pattern" }
      ]
    },
    {
      title: "First conditional — real future possibility",
      text: `<p><strong>Structure:</strong> If + present simple, ... will + base verb.</p>
      <p><strong>Meaning:</strong> A realistic or likely situation in the future and its probable result. The "if" clause uses present tense even though it refers to the future — never "will" in the if-clause.</p>`,
      examples: [
        { correct: true, text: "If it rains tomorrow, we will cancel the picnic.", note: "" },
        { correct: false, text: "If it will rain tomorrow, we will cancel the picnic.", note: "never \"will\" in the if-clause" },
        { correct: true, text: "If you study hard, you'll pass the exam.", note: "" }
      ]
    },
    {
      title: "Second conditional — unreal/unlikely present or future",
      text: `<p><strong>Structure:</strong> If + past simple, ... would + base verb.</p>
      <p><strong>Meaning:</strong> A hypothetical, imaginary, or unlikely situation in the present/future, and its imagined result. Note: with the verb "be," formal English uses "were" for all subjects (I were, he were), though "was" is common informally.</p>`,
      examples: [
        { correct: true, text: "If I won the lottery, I would travel the world.", note: "hypothetical, unlikely" },
        { correct: true, text: "If I were you, I would apologize.", note: "\"were\" for all subjects — fixed expression" },
        { correct: false, text: "If I win the lottery, I would travel the world.", note: "mixes first-conditional \"win\" with second-conditional \"would\"" }
      ]
    },
    {
      title: "Third conditional — unreal past (regret/speculation)",
      text: `<p><strong>Structure:</strong> If + past perfect, ... would have + past participle.</p>
      <p><strong>Meaning:</strong> An imaginary result for a past situation that did NOT actually happen — used for regrets, criticism, or speculation about how the past could have gone differently.</p>`,
      examples: [
        { correct: true, text: "If I had studied harder, I would have passed the exam.", note: "I didn't study harder, and I didn't pass" },
        { correct: false, text: "If I studied harder, I would have passed the exam.", note: "if-clause needs past perfect, not past simple" },
        { correct: true, text: "If she had left earlier, she wouldn't have missed the train.", note: "" }
      ]
    },
    {
      title: "Mixed conditionals",
      text: `<p>Combines a condition from one time frame with a result in another — most commonly a past condition with a present result, or a present/general condition with a past result.</p>
      <ul>
        <li><strong>Past condition → present result:</strong> If + past perfect, ... would + base verb. "If I had taken that job, I would be living in Tokyo now." (past action → ongoing present consequence)</li>
        <li><strong>Present/general condition → past result:</strong> If + past simple, ... would have + past participle. "If she weren't so shy, she would have spoken up at the meeting." (an ongoing trait → its effect on a past event)</li>
      </ul>`,
      examples: [
        { correct: true, text: "If I hadn't missed the flight, I would be at the conference right now.", note: "past condition, present result" },
        { correct: true, text: "If he weren't so careless, he would have noticed the mistake yesterday.", note: "present trait, past result" }
      ]
    },
    {
      title: "Alternatives to \"if\": unless, provided that, as long as, in case",
      text: `<ul>
        <li><strong>Unless</strong> = if...not: "You won't pass unless you study." (= if you don't study)</li>
        <li><strong>Provided that / as long as</strong> = only if, on the condition that: "You can go out, provided that you finish your homework."</li>
        <li><strong>In case</strong> = as a precaution, because something might happen: "Take an umbrella in case it rains." (different from "if" — this isn't describing a direct result, but a precaution)</li>
      </ul>`,
      examples: [
        { correct: true, text: "Unless you hurry, you'll miss the bus.", note: "" },
        { correct: true, text: "I'll take my phone in case I need to call you.", note: "precaution, not \"if I need\"" }
      ]
    }
  ],
  commonMistakes: [
    "Using \"will\" in the if-clause: \"If it will rain, I'll bring an umbrella\" ✘ → \"If it rains, I'll bring an umbrella\" ✔.",
    "Mixing first and second conditional forms: \"If I win the lottery, I would buy a house\" ✘ → pick one: \"If I win..., I will buy...\" or \"If I won..., I would buy...\" ✔",
    "Using past simple instead of past perfect in third conditional: \"If I knew, I would have told you\" ✘ → \"If I had known, I would have told you\" ✔.",
    "Forgetting \"have\" in third conditional results: \"I would helped you\" ✘ → \"I would have helped you\" ✔.",
    "Confusing \"unless\" with \"if\": \"Unless you don't hurry, you'll be late\" ✘ (double negative) → \"Unless you hurry, you'll be late\" ✔."
  ]
});

window.EXERCISES["conditionals"] = [
  { id:"cd-1", level:1, type:"mcq", prompt:"If you heat ice, it ___.", options:["melts","will melt","would melt","melted"], answer:"melts", explanationCorrect:" This is a zero conditional — a scientific fact — so both clauses use present simple.", explanationWrong:" Scientific facts and general truths use the zero conditional pattern: present simple in both clauses, not \"will melt\" or \"would melt.\"" },
  { id:"cd-2", level:1, type:"mcq", prompt:"If it rains tomorrow, we ___ the trip.", options:["cancel","will cancel","would cancel","cancelled"], answer:"will cancel", explanationCorrect:" First conditional: a real future possibility uses present simple in the if-clause and \"will\" in the result clause.", explanationWrong:" For a realistic future possibility, the result clause uses \"will,\" while the if-clause stays in present simple (never \"will\")." },
  { id:"cd-3", level:1, type:"fill", prompt:"If it ___ (rain) tomorrow, we will cancel the trip. (present simple, not \"will\")", answer:"rains", explanationCorrect:" The if-clause in a first conditional always uses present simple, even though it refers to the future.", explanationWrong:" Even though the if-clause refers to future time, first conditional if-clauses always use present simple, never \"will.\"" },
  { id:"cd-4", level:2, type:"mcq", prompt:"If I ___ a millionaire, I would buy a yacht.", options:["am","was","were","will be"], answer:"were", explanationCorrect:" Second conditional (hypothetical) uses past simple in the if-clause; with \"be,\" formal English uses \"were\" for all subjects.", explanationWrong:" This is a hypothetical, unlikely situation (second conditional), which needs past tense in the if-clause — and with \"be,\" the traditional form for all subjects is \"were.\"" },
  { id:"cd-5", level:2, type:"fill", prompt:"If I had more free time, I ___ (learn) to play the piano. (second conditional result)", answer:"would learn", explanationCorrect:" Second conditional result clauses use \"would + base verb.\"", explanationWrong:" The result clause of a second conditional (hypothetical present/future) uses \"would + base verb\": would learn." },
  { id:"cd-6", level:2, type:"mcq", prompt:"Choose the correct third conditional sentence.", options:["If I had known, I would have told you.","If I knew, I would have told you.","If I had known, I would tell you.","If I have known, I would have told you."], answer:"If I had known, I would have told you.", explanationCorrect:" Third conditional: past perfect in the if-clause, \"would have + past participle\" in the result clause.", explanationWrong:" The third conditional (unreal past) requires past perfect in the if-clause and \"would have + past participle\" in the result — not a mix of tenses." },
  { id:"cd-7", level:3, type:"mcq", prompt:"___ you study, you won't pass the exam. (means \"if you don't study\")", options:["If","Unless","Provided","In case"], answer:"Unless", explanationCorrect:" \"Unless\" means \"if...not\" — unless you study = if you don't study.", explanationWrong:" \"Unless\" is the word that means \"if...not,\" perfectly matching the intended meaning \"if you don't study.\"" },
  { id:"cd-8", level:3, type:"fill", prompt:"If she had left earlier, she ___ (not/miss) the train. (third conditional, negative result)", answer:"wouldn't have missed", explanationCorrect:" Third conditional negative result: wouldn't have + past participle.", explanationWrong:" The negative form of the third conditional result clause is \"wouldn't have + past participle\": wouldn't have missed." },
  { id:"cd-9", level:3, type:"mcq", prompt:"Identify the conditional type: \"If water freezes, it expands.\"", options:["Zero conditional","First conditional","Second conditional","Third conditional"], answer:"Zero conditional", explanationCorrect:" A general scientific fact using present simple in both clauses is the zero conditional.", explanationWrong:" This describes a universal scientific fact (always true), which is expressed with the zero conditional: present simple in both clauses." },
  { id:"cd-10", level:4, type:"mcq", prompt:"Choose the sentence with a correctly mixed conditional (past condition, present result).", options:["If I had taken that job, I would have been rich now.","If I had taken that job, I would be rich now.","If I took that job, I would have been rich now.","If I take that job, I would be rich now."], answer:"If I had taken that job, I would be rich now.", explanationCorrect:" A past unreal condition (had taken) combined with a present result (would be rich now) is the correct mixed-conditional pattern.", explanationWrong:" Mixed conditionals combining a past condition with a present result use past perfect in the if-clause and \"would + base verb\" (not \"would have\") in the result." },
  { id:"cd-11", level:4, type:"fill", prompt:"Take a jacket ___ it gets cold later. (precaution, not a direct result)", answer:"in case", explanationCorrect:" \"In case\" expresses a precaution against a possible future event, different from a direct conditional \"if.\"", explanationWrong:" \"In case\" is used for precautions against something that might happen, distinct from \"if,\" which states a direct condition-result relationship." },
  { id:"cd-12", level:4, type:"mcq", prompt:"You can borrow my car ___ you fill up the tank before returning it.", options:["unless","provided that","in case","although"], answer:"provided that", explanationCorrect:" \"Provided that\" means \"only if / on condition that,\" fitting the sense of a required condition for permission.", explanationWrong:" \"Provided that\" (meaning \"only if\") fits a condition attached to permission, unlike \"unless\" (if not) or \"in case\" (precaution)." },
  { id:"cd-13", level:5, type:"mcq", prompt:"Choose the sentence with a correctly mixed conditional (general trait, past result).", options:["If he weren't so careless, he wouldn't have lost his keys yesterday.","If he hadn't been so careless, he wouldn't lose his keys yesterday.","If he isn't so careless, he wouldn't have lost his keys yesterday.","If he wasn't careless, he won't lose his keys yesterday."], answer:"If he weren't so careless, he wouldn't have lost his keys yesterday.", explanationCorrect:" A general/ongoing trait (weren't so careless — past simple form for a timeless quality) combined with a specific past result (wouldn't have lost) is the correct mixed pattern.", explanationWrong:" When a general character trait affects a specific past event, use past simple (\"were\") for the trait and \"would have + past participle\" for the past result." },
  { id:"cd-14", level:5, type:"fill", prompt:"If I ___ (be) taller, I would have made the basketball team back in high school. (mixed: general trait → past result)", answer:"were", explanationCorrect:" A general, ongoing trait (height) combined with a specific past result uses past simple (\"were\") in the if-clause.", explanationWrong:" Since height is a general, unchanging trait affecting a specific past outcome, the if-clause uses past simple (\"were\"), paired with \"would have made\" for the past result." }
];

/* =========================================================
   12. PASSIVE VOICE
   ========================================================= */
window.GRAMMAR_SECTIONS.push({
  id: "passive",
  order: 12,
  icon: "🔄",
  title: "Passive Voice",
  shortDesc: "How to form and use the passive voice correctly across every tense.",
  intro: "The passive voice shifts focus from who performs an action to who/what receives it. This section covers the formation formula, when to use it, and how it works across tenses.",
  rules: [
    {
      title: "Active vs. passive: the core transformation",
      text: `<p><strong>Active:</strong> Subject (doer) + verb + object (receiver). "The chef cooked the meal."</p>
      <p><strong>Passive:</strong> Object becomes the new subject + be + past participle + (by + doer, optional). "The meal was cooked by the chef."</p>
      <p>Only <strong>transitive verbs</strong> (verbs that take a direct object) can be made passive. Intransitive verbs like "arrive," "happen," "sleep" cannot.</p>`,
      examples: [
        { correct: true, text: "Active: The company launched a new product.", note: "" },
        { correct: true, text: "Passive: A new product was launched by the company.", note: "" },
        { correct: false, text: "Passive of \"She arrived early\": Early was arrived by her.", note: "\"arrive\" is intransitive — cannot be made passive" }
      ]
    },
    {
      title: "The universal passive formula",
      text: `<p>Every passive sentence, in every tense, follows the same pattern: <strong>be (in the correct tense) + past participle</strong>. Only the form of "be" changes to match the tense.</p>`,
      examples: [
        { correct: true, text: "Present simple: The letters are sent every Friday.", note: "" },
        { correct: true, text: "Past simple: The letters were sent yesterday.", note: "" },
        { correct: true, text: "Present perfect: The letters have been sent.", note: "" },
        { correct: true, text: "Future: The letters will be sent tomorrow.", note: "" },
        { correct: true, text: "Modal: The letters must be sent today.", note: "" }
      ]
    },
    {
      title: "When to use the passive voice",
      text: `<ul>
        <li>The doer is unknown, unimportant, or obvious from context: "My wallet was stolen." (we don't know who)</li>
        <li>The action/result matters more than who did it — common in scientific, news, and formal writing: "The bridge was completed in 1937."</li>
        <li>To avoid blaming someone directly (diplomatic tone): "Mistakes were made" (vaguer than naming who made them).</li>
        <li>When the receiver of the action is the main topic of the paragraph/conversation.</li>
      </ul>
      <p>Overusing the passive voice makes writing feel vague, wordy, and impersonal — active voice is usually preferred when the doer is known and relevant.</p>`,
      examples: [
        { correct: true, text: "The Mona Lisa was painted by Leonardo da Vinci.", note: "focus on the painting, the famous fact" },
        { correct: true, text: "The window was broken last night.", note: "doer unknown" }
      ]
    },
    {
      title: "Passive with two objects (indirect + direct)",
      text: `<p>Verbs with both a direct and indirect object (give, send, offer, show, tell) can form two different passive sentences.</p>`,
      examples: [
        { correct: true, text: "Active: The company gave her a bonus.", note: "" },
        { correct: true, text: "Passive 1: She was given a bonus.", note: "indirect object as new subject — more common" },
        { correct: true, text: "Passive 2: A bonus was given to her.", note: "direct object as new subject" }
      ]
    },
    {
      title: "Passive with modal verbs and infinitives",
      text: `<p><strong>Modal passive:</strong> modal + be + past participle. <strong>Passive infinitive:</strong> to be + past participle (used after verbs like want, need, expect).</p>`,
      examples: [
        { correct: true, text: "This report must be finished by Friday.", note: "modal passive" },
        { correct: true, text: "The car needs to be washed.", note: "passive infinitive" },
        { correct: false, text: "This report must finished by Friday.", note: "missing \"be\"" }
      ]
    },
    {
      title: "Get-passive (informal alternative)",
      text: `<p>In informal English, "get" can replace "be" in the passive, especially for events seen as sudden, unplanned, or involving misfortune.</p>`,
      examples: [
        { correct: true, text: "My phone got stolen on the subway.", note: "informal, sudden/unfortunate event" },
        { correct: true, text: "They got married last June.", note: "" }
      ]
    },
    {
      title: "Impersonal passive (\"it is said/believed/thought...\")",
      text: `<p>Common in formal/academic/news writing to report general opinion or unverified claims without naming a source. Structure: <strong>It + be + past participle + that-clause</strong>, or <strong>Subject + be + past participle + to-infinitive</strong>.</p>`,
      examples: [
        { correct: true, text: "It is believed that the ancient city was destroyed by an earthquake.", note: "" },
        { correct: true, text: "The ancient city is believed to have been destroyed by an earthquake.", note: "alternative structure" }
      ]
    }
  ],
  commonMistakes: [
    "Forgetting \"be\": \"The work finished by tomorrow\" ✘ → \"The work will be finished by tomorrow\" ✔.",
    "Using the wrong participle form: \"The window was broke\" ✘ → \"The window was broken\" ✔.",
    "Trying to passivize intransitive verbs: \"It was happened yesterday\" ✘ → \"It happened yesterday\" ✔ (stays active).",
    "Overusing passive in casual writing, making sentences feel stiff and evasive: prefer active voice unless there's a specific reason (unknown doer, formal tone, focus on the receiver).",
    "Dropping \"by\" when the doer IS important: \"The novel was written 1813\" ✘ → \"The novel was written in 1813 by Jane Austen\" ✔ (if the author matters to your sentence)."
  ]
});

window.EXERCISES["passive"] = [
  { id:"pv-1", level:1, type:"mcq", prompt:"Choose the passive form: \"The chef cooks the meal.\"", options:["The meal cooks the chef.","The meal is cooked by the chef.","The meal was cook by the chef.","The meal cooked by the chef."], answer:"The meal is cooked by the chef.", explanationCorrect:" Present simple passive: am/is/are + past participle. The object (meal) becomes the subject.", explanationWrong:" The correct passive formula is \"be\" (matching the original tense) + past participle: is cooked, with \"be\" not omitted." },
  { id:"pv-2", level:1, type:"mcq", prompt:"Choose the passive form: \"They built this house in 1990.\"", options:["This house built in 1990.","This house was built in 1990.","This house is built in 1990.","This house has built in 1990."], answer:"This house was built in 1990.", explanationCorrect:" Past simple passive: was/were + past participle.", explanationWrong:" Since the original sentence is past simple, the passive form needs \"was/were + past participle\": was built, not a different tense." },
  { id:"pv-3", level:1, type:"fill", prompt:"Active: \"Someone stole my bike.\" → Passive: My bike ___ stolen. (correct form of \"be\", past tense)", answer:"was", explanationCorrect:" Past simple passive uses \"was/were\" + past participle: was stolen.", explanationWrong:" To form the past simple passive, use \"was\" (singular subject) + past participle: My bike was stolen." },
  { id:"pv-4", level:2, type:"mcq", prompt:"Choose the correct passive sentence for: \"They have completed the project.\"", options:["The project has completed.","The project has been completed.","The project was completed.","The project is completing."], answer:"The project has been completed.", explanationCorrect:" Present perfect passive: has/have + been + past participle.", explanationWrong:" The present perfect passive formula is \"has/have been + past participle\" — \"has completed\" alone is missing \"been\" and keeps the active form." },
  { id:"pv-5", level:2, type:"fill", prompt:"Active: \"You must finish this report by Friday.\" → Passive: This report must ___ finished by Friday.", answer:"be", explanationCorrect:" Modal passive: modal + be + past participle.", explanationWrong:" After a modal verb in the passive, \"be\" is required before the past participle: must be finished." },
  { id:"pv-6", level:2, type:"mcq", prompt:"Which verb CANNOT be used in the passive voice?", options:["write","break","arrive","give"], answer:"arrive", explanationCorrect:" \"Arrive\" is intransitive (no direct object), so it cannot be made passive.", explanationWrong:" Only transitive verbs (those taking a direct object) can form the passive. \"Arrive\" has no object and is intransitive." },
  { id:"pv-7", level:3, type:"mcq", prompt:"Choose the correct passive: \"The company will announce the results tomorrow.\"", options:["The results will announce tomorrow.","The results will be announced tomorrow.","The results are announced tomorrow.","The results will have announced tomorrow."], answer:"The results will be announced tomorrow.", explanationCorrect:" Future simple passive: will + be + past participle.", explanationWrong:" The future passive requires \"will be + past participle\": will be announced — not just \"will announce\" (active) or present tense." },
  { id:"pv-8", level:3, type:"fill", prompt:"Active: \"They gave her an award.\" → Passive (indirect object as subject): She ___ given an award.", answer:"was", explanationCorrect:" The indirect object (her→she) becomes the passive subject, followed by was/were + past participle.", explanationWrong:" When the indirect object becomes the new subject in the passive, it's followed by \"was/were + past participle\": She was given an award." },
  { id:"pv-9", level:3, type:"mcq", prompt:"Choose the sentence using the informal \"get-passive\" correctly.", options:["My car get stolen last night.","My car got stolen last night.","My car was got stolen last night.","My car getting stolen last night."], answer:"My car got stolen last night.", explanationCorrect:" \"Get\" replaces \"be\" in the informal passive, conjugated in the appropriate tense (got, for past).", explanationWrong:" The get-passive conjugates \"get\" like a normal verb (got, for past tense) followed by the past participle: got stolen." },
  { id:"pv-10", level:4, type:"mcq", prompt:"Choose the correctly formed impersonal passive.", options:["It is believe that the treasure was hidden here.","It is believed that the treasure was hidden here.","It believed that the treasure was hidden here.","It is believed the treasure was hidden here, that."], answer:"It is believed that the treasure was hidden here.", explanationCorrect:" \"It + is + past participle + that-clause\" is the correct impersonal passive structure.", explanationWrong:" The impersonal passive uses \"It is + past participle + that + clause\": It is believed that... — the participle must match \"believed,\" and \"that\" introduces the clause." },
  { id:"pv-11", level:4, type:"fill", prompt:"Active: \"People speak English all over the world.\" → Passive: English ___ spoken all over the world.", answer:"is", explanationCorrect:" Present simple passive with a singular abstract subject (\"English\"): is spoken.", explanationWrong:" \"English\" as a subject takes a singular verb form in the present passive: is spoken, not \"are spoken.\"" },
  { id:"pv-12", level:5, type:"mcq", prompt:"Choose the sentence with a correctly formed passive infinitive.", options:["The documents need to sign today.","The documents need to be signed today.","The documents need being signed today.","The documents need signed today."], answer:"The documents need to be signed today.", explanationCorrect:" Passive infinitive: to be + past participle, following verbs like need, want, expect.", explanationWrong:" After verbs like \"need,\" the passive infinitive form is \"to be + past participle\": to be signed, not \"to sign\" (active) or missing \"be.\"" },
  { id:"pv-13", level:5, type:"fill", prompt:"Active: \"Critics say the film changed the industry.\" → Passive (impersonal, alternative structure): The film ___ to have changed the industry.", answer:"is said", explanationCorrect:" \"Subject + is/are said + to have + past participle\" is the alternative impersonal passive structure for reporting claims about the past.", explanationWrong:" This alternative impersonal passive pattern places the reported subject first, followed by \"is/are said,\" then \"to have + past participle\": The film is said to have changed the industry." }
];
