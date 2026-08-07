# English Grammar Mastery

A free, self-contained web app for learning English grammar in depth — 14 complete sections
(Articles, Nouns, Pronouns, Prepositions, Verb Tenses, Subject-Verb Agreement, Modals,
Adjectives & Adverbs, Conjunctions, Clauses & Sentence Structure, Conditionals, Passive Voice,
Reported Speech, Punctuation), each with a full rule reference, memory tips, and adaptive
practice exercises.

No build step, no server, no account, no API cost. It's plain HTML/CSS/JavaScript.

## Running it locally

Just open `index.html` in any browser. That's it.

## Publishing it for free on GitHub Pages (no command line needed)

This lets you open the app from **any device, anywhere**, using a normal web address —
for free, forever, hosted by GitHub.

1. **Create a GitHub account** if you don't have one already: go to
   [github.com/signup](https://github.com/signup) and follow the steps.

2. **Create a new repository.**
   - Click the **+** icon in the top-right corner of GitHub → **New repository**.
   - Name it something like `english-grammar-mastery`.
   - Set it to **Public**.
   - Do **not** check "Add a README file" (we're uploading our own files).
   - Click **Create repository**.

3. **Upload the app files.**
   - On your new (empty) repository page, click **uploading an existing file** (or
     **Add file → Upload files**).
   - Open this app's folder on your computer and drag in **all of it**:
     `index.html`, the `css` folder, and the `js` folder — all together, directly into the
     upload box. (Do *not* upload a parent folder that just contains this folder — `index.html`
     needs to end up at the top level of the repository, not nested one level down.)
   - Scroll down and click **Commit changes**.

4. **Turn on GitHub Pages.**
   - In your repository, click **Settings** (top menu).
   - In the left sidebar, click **Pages**.
   - Under "Build and deployment" → **Source**, choose **Deploy from a branch**.
   - Under **Branch**, choose **main** and folder **/ (root)**, then click **Save**.

5. **Wait about 1 minute**, then refresh the Pages settings screen. GitHub will show you a
   live link that looks like:

   `https://YOUR-USERNAME.github.io/english-grammar-mastery/`

   That's your app, live on the internet, for free — bookmark it and open it from your phone,
   tablet, or any computer.

### Note on the "Look up any word" tool

That one feature calls a free public dictionary API and needs an internet connection to work.
Everything else in the app (all 14 grammar sections, all practice exercises, the adaptive
difficulty, your saved progress) works completely offline, with or without a connection.

## Updating the app later

To publish changes, go to your repository on GitHub, open the file you want to change,
click the pencil (✎) "Edit" icon, make your edit, and commit. GitHub Pages will
automatically redeploy within about a minute — no extra steps needed.
