# Quiz Time — Do You Know Me?

A cinematic, romantic slide experience built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step. Glide through memories, songs, and quotes, play a 5-question "Do You Know Me?" quiz, then end with a playful proposal.

## Quick start

Just open `index.html` in a browser. No build tools, no dependencies, no server required.

For local development with live reload, any static server works, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8080
```

## Deploying

This is a static site, so it deploys anywhere that serves static files:

- **GitHub Pages**: push this folder to a repo, enable Pages on the `main` branch.
- **Netlify / Vercel**: drag-and-drop the folder or connect the repo — no build command needed (or set it to a no-op).
- **Render**: create a "Static Site", set the publish directory to the project root.

## Slide order

1. Welcome
2. ❤️ Do You Know Me? — 5-question quiz, 3 options each
3. Favorite Memories (hover a card to flip it)
4. Our Top Love Songs
5. Words That Say It Best (rotates 4 quotes at a time)
6. Dreams Still Ahead
7. Will You Be Mine Forever? — Yes/No proposal + celebration

## Customizing

Everything you're likely to want to change lives in the `CONFIG` object at the top of [`script.js`](script.js):

| What | Where |
|---|---|
| Recipient's name | `CONFIG.recipientName` |
| Favorite memories | `CONFIG.memories` |
| Songs | `CONFIG.playlist` (point `audioSrc` at files in `assets/audio/`) |
| Quotes + how many rotate at once | `CONFIG.quotes`, `CONFIG.quotesPerView` |
| Future dreams | `CONFIG.dreams` |
| Quiz questions, options, correct answers, hints | `CONFIG.quiz` — 5 questions, 3 options each, `correctIndex` is 0-based |
| Final proposal message | `CONFIG.finalMessage` |
| "No" button dodge messages | `noBtnMessages` array further down `script.js` |
| Theme colors | `CONFIG.theme` (mirror any change in the `:root` block of `style.css`) |
| Background music / sound effects | `CONFIG.backgroundMusic`, `CONFIG.soundEffects` |

The 5 quiz questions in `CONFIG.quiz` are placeholder content — edit the `question`, `options`, `correctIndex`, and `hint` fields with your real answers; no other code needs to change.

Add your own audio to `assets/audio/` — the six songs already there came from `do-you-know-me`; swap or add files and update `CONFIG.playlist` to match. Audio is optional — the app silently skips playback for songs without an `audioSrc`.

## Progress & navigation

- Back/Next buttons and swipe/arrow-key navigation work on every slide.
- Progress dots up top jump straight to any slide.
- The Love Songs slide automatically pauses whatever's playing when you navigate away.

## Accessibility

- Full keyboard navigation (tab, enter, space, arrow keys) for every interactive element.
- Memory cards flip on hover *or* keyboard focus — no click required.
- `prefers-reduced-motion` is respected — particle/heart/confetti animation is disabled for users who request reduced motion.

## Project structure

```
quiz-time/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── audio/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── README.md
```
