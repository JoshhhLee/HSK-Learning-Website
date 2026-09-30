# Hanzi Path: HSK study site

An interactive Mandarin study site covering reading, writing, listening and speaking.
Plain HTML/CSS/JS with no build step.

## Run it

Double-click **`start.bat`**. It starts a local server and opens <http://localhost:8770>.
(Requires Python. Opening `index.html` directly also works, but the microphone asks for permission every time.)

Best in **Microsoft Edge**: it has natural-sounding online Chinese voices and speech recognition.
Chrome works too. Firefox has no speech recognition.

## What's inside

| Part | What it does |
|---|---|
| Pinyin | Tones, sounds chart, spelling rules, listening drills (tones, similar sounds, tone pairs) |
| Lessons | HSK 1, 15 lessons: Words · Dialogue · Grammar · Writing · Practice · Speaking |
| Review | Spaced-repetition flashcards (read / listen / recall) |
| Writing | Stroke-order animation and tracing for every HSK 1 character, plus the basic strokes |
| Test | HSK 1-style practice test (listening + reading) |

## Files

```
index.html
css/style.css
js/core.js          engine: pinyin, dictionary, speech, spaced repetition, storage
js/ui.js            shared widgets: sentences, popover, writer, quiz, mic
js/views.js         pages
js/app.js           router
js/data/hsk1.js     HSK 1 lessons (words, dialogues, grammar, characters)
js/data/chars.js    single-character readings
js/data/pinyin.js   pinyin & stroke reference data
```

## Adding a level

Create `js/data/hsk2.js` calling `HSK.registerLevel({ level: 2, ... })` with the same shape as `hsk1.js`,
then add a `<script>` tag for it in `index.html`. Sentences are written with spaces between words
(`我 是 学生 。`). The app then generates pinyin, tap-to-translate and quizzes automatically.

## Online services used

- Hanzi Writer (stroke data from the jsDelivr CDN)
- Google Fonts
- The browser's built-in speech synthesis and speech recognition

Progress is saved in the browser's localStorage. Use Settings → Export to back it up.
