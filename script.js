/* ==========================================================================
   QUIZ TIME — SCRIPT
   Sections: 1. CONFIGURATION  2. State & Utilities  3. Intro Animation
   4. Slide Navigation  5. Slide Builders  6. Quiz Logic  7. Background FX
   8. Cursor Trail  9. Big Reveal + Celebration  10. Init
   ========================================================================== */

/* ============================================================
   1. CONFIGURATION — edit everything here, no logic changes needed
   ============================================================ */
const CONFIG = {
  // Recipient shown on the welcome slide
  recipientName: "Nikita",

  // Slide 2 — Favorite Memories (hover a card to flip it)
  memories: [
    {
      emoji: "𓁇𓁋",
      title: "The First Meet",
      date: "April 26, 2026",
      description: "Where it all began — a quiet morning, a nervous hello, and a feeling that stayed forever."
    },
    {
      emoji: "🎬",
      title: "The First Movie Plan",
      date: "June 22, 2026",
      description: "A spontaneous plan to watch a movie together, and the start of countless shared adventures."
    },
    {
      emoji: "🎬❤️🍽️",
      title: "The Special Movie Date",
      date: "June 28, 2026",
      description: "A day filled with laughter, shared snacks, and the magic of watching our favorite film together."
    },
    {
      emoji: "🛕ॐ",
      title: "The Temple Visit",
      date: "July 14, 2026",
      description: "A temple visit, shared smiles, and a promise to walk every path together."
    }
  ],

  // Slide 3 — Top Love Songs. audioSrc points at files in assets/audio/ (spaces are fine, they get URL-encoded automatically).
  playlist: [
    {
      title: "Mujhe Haq Hai",
      artist: "Udit Narayan & Shreya Ghoshal",
      duration: "4:59",
      featured: true,
      audioSrc: "assets/audio/Mujhe Haq Hai Vivah 320 Kbps.mp3"
    },
    {
      title: "Barbaadiyan",
      artist: "Sachet Tandon, Nikhita Gandhi, Madhubanti Bagchi & Sachin-Jigar",
      duration: "3:50",
      featured: false,
      audioSrc: "assets/audio/Barbaadiyan Shiddat 320 Kbps.mp3"
    },
    {
      title: "Shiddat (Title Track)",
      artist: "Manan Bhardwaj",
      duration: "3:51",
      featured: false,
      audioSrc: "assets/audio/Title Track Shiddat 320 Kbps.mp3"
    },
    {
      title: "Pal Pal Dil Ke Paas",
      artist: "Arijit Singh", // from the movie Blackmail — double-check this credit
      duration: "3:03",
      featured: false,
      audioSrc: "assets/audio/Pal Pal Dil Ke Pas Blackmail 320 Kbps.mp3"
    },
    {
      title: "Mere Liye Tum Kaafi Ho",
      artist: "Rochak Kohli & Palak Muchhal", // from Shubh Mangal Zyada Saavdhan — double-check this credit
      duration: "2:12",
      featured: false,
      audioSrc: "assets/audio/Mere Liye Tum Kaafi Ho Shubh Mangal Zyada Saavdhan 320 Kbps.mp3"
    },
    {
      title: "Saiyaara (Reprise - Female)",
      artist: "Add the real singer credit here", // from Saiyaara — not confident enough to guess this one
      duration: "3:03",
      featured: false,
      audioSrc: "assets/audio/Saiyaara Reprise Female Saiyaara 320 Kbps.mp3"
    }
  ],

  // Slide 4 — Words That Say It Best. Rotates a fresh batch of `quotesPerView`
  // quotes every few seconds instead of showing just one at a time.
  quotesPerView: 4,
  quoteRotationMs: 5200,
  quotes: [
    "If I had to choose again, I'd still choose you every single time.",
    "You're my favorite notification.",
    "You're the best plot twist my life ever had.",
    "Every love song finally made sense after I met you.",
    "You're my happy place.",
    "You're the reason my heart smiles.",
    "I want to annoy you for the rest of my life.",
    "You're my once-in-a-lifetime kind of person.",
    "Forever doesn't seem long enough with you.",
    "You stole my heart... and honestly, you can keep it.",
    "Every day with you feels like my favorite day.",
    "You are my today, my tomorrow, and every dream in between.",
    "You make ordinary moments feel magical.",
    "I still get butterflies, even after all this time.",
    "You are my greatest adventure.",
    "My heart found its home the day it found you.",
    "You are my favorite 'what if' that became my forever.",
    "I'd rather spend one lifetime with you than face all the ages of this world alone.",
    "I didn't believe in soulmates until you smiled at me.",
    "You're the kind of love people write novels about.",
    "You're my calm in every storm.",
    "Every road somehow feels right when it leads to you.",
    "Meeting you was my favorite coincidence.",
    "My forever started the day I met you.",
    "You make my world brighter just by being in it.",
    "I never knew 'home' could be a person until I met you.",
    "You are my favorite chapter in the story of my life.",
    "You make my heart skip a beat and my worries skip a mile.",
    "You're the only person I'd share my fries with.",
    "I love you even when you steal the blanket."
  ],

  // Slide 5 — Future Dreams
  dreams: [
    { emoji: "✈️", title: "Travel Together" },
    { emoji: "🏡", title: "Dream Home" },
    { emoji: "🍻", title: "Sleepless Nights" },
    { emoji: "👩🏻‍🍳👨‍🍳", title: "Cooking Together" },
    { emoji: "🌅", title: "Watch More Sunsets" },
    { emoji: "💍", title: "Build a Lifetime Together" }
  ],

  // Slide 6 — "Do You Know Me?" Quiz. 5 questions, 3 options each, one
  // correctIndex per question (0-based). hint shows after a wrong answer.
  // PLACEHOLDER CONTENT — edit freely, no logic changes needed.
  quiz: [
    {
      question: "What's my favorite color?",
      options: ["Purple", "Blue", "Green"],
      correctIndex: 1,
      hint: "Think of the color that matches this whole experience 💜"
    },
    {
      question: "Which was our first movie?",
      options: ["Dhamal", "Cocktail 2", "Welcome to the Jungle"],
      correctIndex: 1,
      hint: "Hint: It was a movie that made us laugh and bond over shared ...."
    },
    {
      question: "When did we visit a temple together for the first time?",
      options: ["June 28, 2026", "June 22, 2026", "July 14, 2026"],
      correctIndex: 2,
      hint: " Hint: It was a special day that marked a spiritual connection in our journey."
    },
    {
      question: "What's my dream vacation?",
      options: ["Mountains 🏔️", "Beach 🏖️", "Wherever you are ❤️"],
      correctIndex: 2,
      hint: "Hint: it's less about the destination, more about the company."
    },
    {
  question: "What's the first thing I'd do if I met you right now?",
  options: [
    "Say Hello 👋",
    "Give you a hug 🤗",
    "Give you a kiss 😘"
  ],
  correctIndex: 2,
  hint: "Hint: Words can wait."
}
  ],

  // Slide 7 — Final message shown after "Yes"
  finalMessage: {
    heading: "You passed every challenge...",
    body: "But the truth is, you've always been the answer.",
    thanks: "Thank you for saying YES.",
    tagline: "❤️ Here's to forever. ❤️"
  },

  // Background music. Leave empty to disable.
  backgroundMusic: "",

  // Sound effect placeholders — leave empty to stay silent, or point at a
  // short local file (e.g. "assets/audio/correct.mp3") to enable it.
  soundEffects: {
    correct: "",
    incorrect: "",
    milestone: ""
  },

  // Theme colors (mirrors CSS custom properties so palette can be tuned from JS too)
  theme: {
    purple: "#8b5cf6",
    pink: "#ec4899",
    teal: "#2dd4bf",
    green: "#22c55e"
  }
};

/* ============================================================
   2. STATE & UTILITIES
   ============================================================ */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const state = {
  currentSlide: 0,
  totalSlides: 7,
  musicStarted: false,
  quoteTimer: null,
  quoteUsedIndexes: [],
  noBtnAttempts: 0,
  songPlayers: [], // {audioEl, playBtn} pairs from the playlist slide
  quiz: {
    index: 0,
    score: 0,
    answered: false
  }
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function playSfx(path) {
  if (!path) return;
  const audio = new Audio(encodeURI(path));
  audio.volume = 0.5;
  audio.play().catch(() => {});
}

/* ============================================================
   3. INTRO ANIMATION
   ============================================================ */
function initIntro() {
  const beginBtn = document.getElementById("beginBtn");
  const intro = document.getElementById("intro");
  const storyContainer = document.getElementById("storyContainer");

  beginBtn.addEventListener("click", () => {
    startMusic();
    intro.classList.add("hidden");
    storyContainer.hidden = false;
    document.getElementById("navHint").hidden = false;
    document.getElementById("slideControls").hidden = false;
    setTimeout(() => {
      intro.style.display = "none";
      goToSlide(0, true);
    }, prefersReducedMotion ? 0 : 700);
  });
}

function startMusic() {
  if (state.musicStarted || !CONFIG.backgroundMusic) return;
  const audio = document.getElementById("bgMusic");
  audio.src = encodeURI(CONFIG.backgroundMusic);
  audio.volume = 0.35;
  audio.play().catch(() => {});
  state.musicStarted = true;
}

/* ============================================================
   4. SLIDE NAVIGATION
   ============================================================ */
function buildProgressNav() {
  const nav = document.getElementById("progressNav");
  for (let i = 0; i < state.totalSlides; i++) {
    const dot = document.createElement("span");
    dot.className = "progress-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("role", "button");
    dot.setAttribute("tabindex", "0");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goToSlide(i));
    dot.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") goToSlide(i);
    });
    nav.appendChild(dot);
  }
}

function updateProgressNav(index) {
  document.querySelectorAll(".progress-dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function goToSlide(index, isFirst = false) {
  index = clamp(index, 0, state.totalSlides - 1);
  if (index === state.currentSlide && !isFirst) return;

  const leavingSlideId = document.querySelectorAll(".slide")[state.currentSlide]?.id;
  if (leavingSlideId === "slide-playlist") pauseAllSongs();

  const slides = document.querySelectorAll(".slide");
  const direction = index > state.currentSlide ? 1 : -1;

  slides.forEach((slide) => {
    const slideIndex = Number(slide.dataset.index);
    slide.classList.remove("active", "exit-left");
    if (slideIndex === index) {
      slide.classList.add("active");
    } else if (slideIndex === state.currentSlide && !isFirst) {
      if (direction > 0) slide.classList.add("exit-left");
    }
  });

  state.currentSlide = index;
  updateProgressNav(index);
  updateSlideControls(index);
  onSlideEnter(index);
}

function updateSlideControls(index) {
  const prevBtn = document.getElementById("prevSlideBtn");
  const nextBtn = document.getElementById("nextSlideBtn");
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === state.totalSlides - 1;
}

function setupSlideControls() {
  document.getElementById("prevSlideBtn").addEventListener("click", () => goToSlide(state.currentSlide - 1));
  document.getElementById("nextSlideBtn").addEventListener("click", () => goToSlide(state.currentSlide + 1));
}

function onSlideEnter(index) {
  const slideId = document.querySelectorAll(".slide")[index]?.id;
  if (slideId === "slide-quotes") startQuoteRotation();
  else stopQuoteRotation();
  if (slideId === "slide-quiz") resetQuiz();
}

function setupNavigation() {
  window.addEventListener("keydown", (e) => {
    const storyVisible = !document.getElementById("storyContainer").hidden;
    if (!storyVisible) return;
    if (e.key === "ArrowRight") goToSlide(state.currentSlide + 1);
    if (e.key === "ArrowLeft") goToSlide(state.currentSlide - 1);
  });

  let touchStartX = 0;
  let touchStartY = 0;
  window.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) goToSlide(state.currentSlide + 1);
      else goToSlide(state.currentSlide - 1);
    }
  }, { passive: true });
}

/* ============================================================
   5. SLIDE BUILDERS
   ============================================================ */
function buildWelcomeSlide() {
  document.getElementById("recipientName").textContent = CONFIG.recipientName;

  const container = document.querySelector("#slide-welcome .floating-hearts-container");
  if (prefersReducedMotion) return;
  const heartCount = 14;
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "💗";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.setProperty("--drift", `${(Math.random() - 0.5) * 120}px`);
    heart.style.animationDuration = `${8 + Math.random() * 6}s`;
    heart.style.animationDelay = `${Math.random() * 8}s`;
    heart.style.fontSize = `${1 + Math.random() * 1.2}rem`;
    container.appendChild(heart);
  }
}

function buildMemoriesSlide() {
  // Cards flip on hover (or keyboard focus) via CSS — see .memory-card:hover / :focus-within
  // in style.css. On touch devices there's no such thing as hover, so we fall back
  // to tap-to-flip there only — desktop/mouse behavior is untouched.
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const grid = document.getElementById("memoriesGrid");
  CONFIG.memories.forEach((memory) => {
    const card = document.createElement("article");
    card.className = "memory-card";
    card.setAttribute("role", "listitem");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Memory: ${memory.title}. ${isTouchDevice ? "Tap" : "Hover or focus"} to reveal.`);
    card.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-card-face memory-card-front">
          <div class="memory-photo" aria-hidden="true">${memory.emoji}</div>
          <span class="memory-title">${memory.title}</span>
          <span class="memory-date">${memory.date}</span>
        </div>
        <div class="memory-card-face memory-card-back">
          <span class="memory-title">${memory.title}</span>
          <span class="memory-date">${memory.date}</span>
          <p class="memory-desc">${memory.description}</p>
        </div>
      </div>
    `;
    if (isTouchDevice) {
      card.addEventListener("click", () => card.classList.toggle("flipped"));
    }
    grid.appendChild(card);
  });
}

function pauseAllSongs() {
  state.songPlayers.forEach(({ audioEl, playBtn }) => {
    audioEl.pause();
    playBtn.textContent = "▶";
  });
}

function buildPlaylistSlide() {
  const playlist = document.getElementById("playlist");
  const players = state.songPlayers; // tracks every {audioEl, playBtn} pair so we can stop others on new playback

  CONFIG.playlist.forEach((song) => {
    const item = document.createElement("div");
    item.className = "playlist-item" + (song.featured ? " featured" : "");
    item.innerHTML = `
      <div class="album-art" aria-hidden="true">🎵</div>
      <div class="song-info">
        <div class="song-title">${song.title}${song.featured ? '<span class="featured-tag"> · Our Song</span>' : ""}</div>
        <div class="song-artist">${song.artist}</div>
      </div>
      <span class="song-duration">${song.duration}</span>
      <button class="play-btn" type="button" aria-label="Play ${song.title}">▶</button>
    `;
    const playBtn = item.querySelector(".play-btn");
    const audioEl = song.audioSrc ? new Audio(encodeURI(song.audioSrc)) : null;
    if (audioEl) {
      audioEl.addEventListener("ended", () => { playBtn.textContent = "▶"; });
      players.push({ audioEl, playBtn });
    }

    playBtn.addEventListener("click", () => {
      if (!audioEl) {
        playBtn.textContent = playBtn.textContent === "▶" ? "❚❚" : "▶";
        return;
      }
      const isPlaying = playBtn.textContent === "❚❚";
      // Stop every other track so only one song plays at a time
      players.forEach(({ audioEl: otherAudio, playBtn: otherBtn }) => {
        if (otherAudio !== audioEl) { otherAudio.pause(); otherBtn.textContent = "▶"; }
      });
      if (isPlaying) { audioEl.pause(); playBtn.textContent = "▶"; }
      else { audioEl.play().catch(() => {}); playBtn.textContent = "❚❚"; }
    });
    playlist.appendChild(item);
  });
}

/* -------- Words That Say It Best: rotating multi-quote grid -------- */
function buildQuotesSlide() {
  const grid = document.getElementById("quotesGrid");
  for (let i = 0; i < CONFIG.quotesPerView; i++) {
    const card = document.createElement("blockquote");
    card.className = "quote-card";
    grid.appendChild(card);
  }
}

function pickNextQuoteBatch() {
  const total = CONFIG.quotes.length;
  const count = Math.min(CONFIG.quotesPerView, total);
  if (state.quoteUsedIndexes.length + count > total) state.quoteUsedIndexes = [];

  const available = [...Array(total).keys()].filter((i) => !state.quoteUsedIndexes.includes(i));
  const batch = [];
  for (let i = 0; i < count; i++) {
    const pick = available.splice(Math.floor(Math.random() * available.length), 1)[0];
    batch.push(pick);
    state.quoteUsedIndexes.push(pick);
  }
  return batch;
}

function showQuoteBatch() {
  const cards = document.querySelectorAll("#quotesGrid .quote-card");
  const batch = pickNextQuoteBatch();
  cards.forEach((card, i) => {
    card.classList.remove("show");
    setTimeout(() => {
      card.textContent = `"${CONFIG.quotes[batch[i]]}"`;
      card.classList.add("show");
    }, 350 + i * 80);
  });
}

function startQuoteRotation() {
  stopQuoteRotation();
  showQuoteBatch();
  state.quoteTimer = setInterval(showQuoteBatch, CONFIG.quoteRotationMs);
}

function stopQuoteRotation() {
  if (state.quoteTimer) clearInterval(state.quoteTimer);
  state.quoteTimer = null;
}

function buildDreamsSlide() {
  const grid = document.getElementById("dreamsGrid");
  CONFIG.dreams.forEach((dream) => {
    const card = document.createElement("div");
    card.className = "dream-card";
    card.innerHTML = `
      <div class="dream-emoji" aria-hidden="true">${dream.emoji}</div>
      <div class="dream-title">${dream.title}</div>
    `;
    grid.appendChild(card);
  });
}

/* ============================================================
   6. QUIZ LOGIC — "Do You Know Me?" (5 questions, 3 options each)
   ============================================================ */
function resetQuiz() {
  state.quiz.index = 0;
  state.quiz.score = 0;
  state.quiz.answered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const stage = document.getElementById("quizStage");
  const { index } = state.quiz;
  const total = CONFIG.quiz.length;

  document.getElementById("quizProgressText").textContent = `Question ${index + 1} / ${total}`;
  document.getElementById("quizScoreText").textContent = `Score: ${state.quiz.score}`;
  document.getElementById("quizProgressFill").style.width = `${(index / total) * 100}%`;

  const q = CONFIG.quiz[index];
  state.quiz.answered = false;
  document.getElementById("nextSlideBtn").disabled = true; // re-enabled once this question is answered

  const card = document.createElement("div");
  card.className = "quiz-question-card";
  card.innerHTML = `
    <p class="quiz-question-text">${q.question}</p>
    <div class="quiz-options" role="group" aria-label="${q.question}"></div>
    <p class="quiz-hint" aria-live="polite"></p>
  `;
  stage.innerHTML = "";
  stage.appendChild(card);

  const optionsWrap = card.querySelector(".quiz-options");
  const hintEl = card.querySelector(".quiz-hint");

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-option";
    btn.textContent = opt;
    btn.addEventListener("click", (e) => handleQuizAnswer(i, q, btn, optionsWrap, hintEl, e));
    optionsWrap.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, question, btn, optionsWrap, hintEl, clickEvent) {
  if (state.quiz.answered) return;
  state.quiz.answered = true;

  const buttons = optionsWrap.querySelectorAll(".quiz-option");
  const isCorrect = selectedIndex === question.correctIndex;

  buttons.forEach((b) => (b.disabled = true));
  document.getElementById("nextSlideBtn").disabled = false; // answered — Next is allowed again

  if (isCorrect) {
    btn.classList.add("correct");
    state.quiz.score++;
    document.getElementById("quizScoreText").textContent = `Score: ${state.quiz.score}`;
    playSfx(CONFIG.soundEffects.correct);
    spawnQuizConfetti(clickEvent.clientX, clickEvent.clientY);
  } else {
    btn.classList.add("incorrect");
    buttons[question.correctIndex].classList.add("correct");
    hintEl.textContent = question.hint || "Nice try — you'll get the next one!";
    playSfx(CONFIG.soundEffects.incorrect);
  }

  setTimeout(advanceQuiz, 1100);
}

function advanceQuiz() {
  state.quiz.index++;
  if (state.quiz.index >= CONFIG.quiz.length) {
    renderQuizComplete();
  } else {
    renderQuizQuestion();
  }
}

function renderQuizComplete() {
  const stage = document.getElementById("quizStage");
  const total = CONFIG.quiz.length;
  document.getElementById("quizProgressText").textContent = `Question ${total} / ${total}`;
  document.getElementById("quizProgressFill").style.width = "100%";
  playSfx(CONFIG.soundEffects.milestone);

  stage.innerHTML = `
    <div class="quiz-question-card quiz-complete-card">
      <p class="quiz-complete-msg">You scored ${state.quiz.score} / ${total} ❤️</p>
      <p class="quiz-complete-sub">Every answer, right or wrong, just proved you showed up. That's all that ever mattered.</p>
    </div>
  `;
  // Stay on the score screen until the user clicks Next (already enabled from the
  // last answered question) — no auto-advance.
}

function spawnQuizConfetti(x, y) {
  if (prefersReducedMotion) return;
  const pieces = ["🎉", "✨", "💫", "🎊"];
  for (let i = 0; i < 10; i++) {
    const piece = document.createElement("span");
    piece.className = "quiz-confetti-piece";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${x}px`;
    piece.style.top = `${y}px`;
    piece.style.setProperty("--dx", `${(Math.random() - 0.5) * 160}px`);
    piece.style.setProperty("--dy", `${-60 - Math.random() * 80}px`);
    piece.style.setProperty("--rot", `${Math.random() * 360}deg`);
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 950);
  }
}

/* ============================================================
   7. BACKGROUND FX — particles, bokeh, shooting stars
   ============================================================ */
function initParticles() {
  const canvas = document.getElementById("particleCanvas");
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];
  let shootingStar = null;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  const particleCount = prefersReducedMotion ? 0 : Math.min(50, Math.floor((width * height) / 30000));
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.6,
      speedY: Math.random() * 0.3 + 0.05,
      alpha: Math.random() * 0.5 + 0.2,
      hue: Math.random() > 0.5 ? "139,92,246" : "45,212,191"
    });
  }

  function maybeSpawnShootingStar() {
    if (!shootingStar && Math.random() < 0.0025) {
      shootingStar = {
        x: Math.random() * width * 0.6,
        y: Math.random() * height * 0.3,
        vx: 6 + Math.random() * 4,
        vy: 3 + Math.random() * 2,
        life: 1
      };
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y -= p.speedY;
      if (p.y < -10) p.y = height + 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue},${p.alpha})`;
      ctx.fill();
    });

    if (!prefersReducedMotion) {
      maybeSpawnShootingStar();
      if (shootingStar) {
        const s = shootingStar;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,255,255,${s.life})`;
        ctx.lineWidth = 2;
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 6, s.y - s.vy * 6);
        ctx.stroke();
        s.x += s.vx;
        s.y += s.vy;
        s.life -= 0.02;
        if (s.life <= 0 || s.x > width || s.y > height) shootingStar = null;
      }
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   8. CURSOR TRAIL — glowing hearts
   ============================================================ */
function initCursorTrail() {
  if (prefersReducedMotion) return;
  const layer = document.getElementById("cursorTrailLayer");
  let lastSpawn = 0;

  function spawnHeart(x, y) {
    const heart = document.createElement("span");
    heart.className = "cursor-heart";
    heart.textContent = "💗";
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    layer.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  }

  window.addEventListener("pointermove", (e) => {
    const now = performance.now();
    if (now - lastSpawn < 60) return;
    lastSpawn = now;
    spawnHeart(e.clientX, e.clientY);
  });
}

/* ============================================================
   9. THE BIG REVEAL + CELEBRATION
   ============================================================ */
const noBtnMessages = [
  "Are you sure? 🥺",
  "Think again ❤️",
  "Nice try 😄",
  "I can wait 😊",
  "Don't break my heart 💔",
  "One more chance? 🌹",
  "I know you'll click Yes ❤️",
  "You're too cute to say No 😄",
  "The Yes button is feeling lonely 😉"
];

function populateFinalMessage() {
  document.getElementById("finalHeading").textContent = CONFIG.finalMessage.heading;
  document.getElementById("finalBody").textContent = CONFIG.finalMessage.body;
  const thanksEl = document.getElementById("finalThanks");
  thanksEl.innerHTML = CONFIG.finalMessage.thanks.replace(/YES/, "<strong>YES</strong>");
  document.getElementById("finalTagline").textContent = CONFIG.finalMessage.tagline;
}

function initReveal() {
  populateFinalMessage();

  const suspense = document.getElementById("revealSuspense");
  const question = document.getElementById("revealQuestion");
  const finalStage = document.getElementById("revealFinal");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  let suspenseTriggered = false;

  function triggerSuspense() {
    if (suspenseTriggered) return;
    suspenseTriggered = true;
    document.getElementById("bgLayer").style.transition = "filter 2s ease";
    document.getElementById("bgLayer").style.filter = "brightness(0.45)";
    setTimeout(() => {
      suspense.hidden = true;
      question.hidden = false;
    }, 2200);
  }

  // Trigger suspense once the reveal slide becomes active
  const revealSlide = document.getElementById("slide-reveal");
  const observer = new MutationObserver(() => {
    if (revealSlide.classList.contains("active")) triggerSuspense();
  });
  observer.observe(revealSlide, { attributes: true, attributeFilter: ["class"] });

  yesBtn.addEventListener("click", () => {
    question.hidden = true;
    finalStage.hidden = false;
    document.getElementById("bgLayer").style.filter = "brightness(1)";
    launchCelebration();
  });

  noBtn.addEventListener("click", dodgeNoButton);
  noBtn.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) dodgeNoButton();
  });

  function dodgeNoButton() {
    noBtn.classList.add("roaming");

    const maxX = window.innerWidth - noBtn.offsetWidth - 24;
    const maxY = window.innerHeight - noBtn.offsetHeight - 24;
    const newX = clamp(Math.random() * maxX, 12, maxX);
    const newY = clamp(Math.random() * maxY, 12, maxY);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    const rotate = (Math.random() - 0.5) * 40;
    const scale = 0.7 + Math.random() * 0.5;
    noBtn.style.transform = `rotate(${rotate}deg) scale(${scale})`;

    state.noBtnAttempts++;
    noBtn.textContent = noBtnMessages[state.noBtnAttempts % noBtnMessages.length];
  }
}

/* Celebration canvas: confetti, fireworks, floating hearts, sparkles, petals */
function launchCelebration() {
  const canvas = document.getElementById("celebrationCanvas");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  let width, height;
  function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);

  const colors = ["#8b5cf6", "#ec4899", "#2dd4bf", "#22c55e", "#f5f3ff"];
  const confetti = [];
  const petals = [];
  const hearts = [];
  const sparkles = [];

  for (let i = 0; i < 140; i++) {
    confetti.push({
      x: Math.random() * width,
      y: -20 - Math.random() * height,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 3 + 2,
      drift: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 8
    });
  }
  for (let i = 0; i < 30; i++) {
    petals.push({
      x: Math.random() * width,
      y: -20 - Math.random() * height,
      size: Math.random() * 10 + 8,
      speed: Math.random() * 1.2 + 0.6,
      sway: Math.random() * 2
    });
  }

  function spawnHeartBurst() {
    for (let i = 0; i < 3; i++) {
      hearts.push({
        x: Math.random() * width,
        y: height + 20,
        size: Math.random() * 18 + 14,
        speed: Math.random() * 1.5 + 0.8,
        drift: (Math.random() - 0.5) * 1.2,
        opacity: 1
      });
    }
  }

  function spawnSparkles() {
    for (let i = 0; i < 4; i++) {
      sparkles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        life: 1,
        size: Math.random() * 3 + 1
      });
    }
  }

  let frame = 0;
  function draw() {
    frame++;
    ctx.clearRect(0, 0, width, height);

    if (frame < 260) {
      confetti.forEach((c) => {
        c.y += c.speed;
        c.x += c.drift;
        c.rotation += c.rotSpeed;
        if (c.y > height + 20) c.y = -20;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
        ctx.restore();
      });

      petals.forEach((p) => {
        p.y += p.speed;
        p.x += Math.sin(p.y / 40) * p.sway;
        if (p.y > height + 20) p.y = -20;
        ctx.font = `${p.size}px serif`;
        ctx.fillText("🌸", p.x, p.y);
      });
    }

    if (frame % 45 === 0 && frame < 600) spawnHeartBurst();
    if (frame % 20 === 0) spawnSparkles();

    for (let i = hearts.length - 1; i >= 0; i--) {
      const h = hearts[i];
      h.y -= h.speed;
      h.x += h.drift;
      h.opacity = clamp(h.opacity - 0.003, 0, 1);
      ctx.globalAlpha = h.opacity;
      ctx.font = `${h.size}px serif`;
      ctx.fillText("💗", h.x, h.y);
      ctx.globalAlpha = 1;
      if (h.y < -40) hearts.splice(i, 1);
    }

    for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      s.life -= 0.02;
      ctx.globalAlpha = clamp(s.life, 0, 1);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      if (s.life <= 0) sparkles.splice(i, 1);
    }

    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   10. INIT
   ============================================================ */
function init() {
  buildProgressNav();
  buildWelcomeSlide();
  buildMemoriesSlide();
  buildPlaylistSlide();
  buildQuotesSlide();
  buildDreamsSlide();
  initReveal();
  setupNavigation();
  setupSlideControls();
  initCursorTrail();
  initParticles();
  initIntro();
}

document.addEventListener("DOMContentLoaded", init);
