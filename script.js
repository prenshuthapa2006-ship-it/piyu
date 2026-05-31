const compliments = [
  { text: "your eyes have that tiny sparkle that makes the whole day feel softer", from: "#fb7185", to: "#ec4899", emoji: "✨" },
  { text: "your smile looks like it was made to ruin all my serious thoughts", from: "#f472b6", to: "#f43f5e", emoji: "💕" },
  { text: "your lips make even a quiet smile look like a love note", from: "#fb7185", to: "#ef4444", emoji: "💋" },
  { text: "you have the kind of beauty people remember without trying", from: "#c084fc", to: "#8b5cf6", emoji: "🌷" },
  { text: "your laugh feels like sunshine sneaking through a window", from: "#fbbf24", to: "#f97316", emoji: "☀️" },
  { text: "your eyes are so pretty they make silence feel interesting", from: "#60a5fa", to: "#6366f1", emoji: "👀" },
  { text: "you look cute even when you are doing absolutely nothing", from: "#a78bfa", to: "#ec4899", emoji: "🥺" },
  { text: "your voice has this soft magic that stays in my head", from: "#2dd4bf", to: "#10b981", emoji: "🎧" },
  { text: "your lips make every smile look sweeter than it should be allowed to", from: "#f472b6", to: "#f43f5e", emoji: "🍓" },
  { text: "you are pretty in the calmest, most impossible-to-ignore way", from: "#fb7185", to: "#ec4899", emoji: "🌸" },
  { text: "your eyes could make a normal moment feel like a movie scene", from: "#818cf8", to: "#a855f7", emoji: "🎬" },
  { text: "you have such a soft and lovely presence", from: "#34d399", to: "#14b8a6", emoji: "🫶" },
  { text: "your smile is unfairly cute and honestly a little dangerous", from: "#fbbf24", to: "#eab308", emoji: "😄" },
  { text: "you make pink skies and pretty flowers look like they are trying to copy you", from: "#f472b6", to: "#ec4899", emoji: "🌺" },
  { text: "your eyes have main-character energy in the sweetest way", from: "#60a5fa", to: "#06b6d4", emoji: "🌟" },
  { text: "your lips make every little expression look adorable", from: "#fb7185", to: "#ef4444", emoji: "💗" },
  { text: "you are the kind of cute that makes people forget what they were saying", from: "#a78bfa", to: "#d946ef", emoji: "💫" },
  { text: "your kindness makes you beautiful in a way makeup could never explain", from: "#2dd4bf", to: "#10b981", emoji: "💖" },
  { text: "your eyes are soft, bright, and completely impossible to ignore", from: "#818cf8", to: "#8b5cf6", emoji: "🩵" },
  { text: "you have a smile that makes boring days feel personally attacked", from: "#fbbf24", to: "#f97316", emoji: "😊" },
  { text: "your lips look cutest when you are about to laugh", from: "#f472b6", to: "#f43f5e", emoji: "🫠" },
  { text: "you make simple outfits look like they were planned by the universe", from: "#c084fc", to: "#d946ef", emoji: "🪞" },
  { text: "your eyes carry this gentle little glow that is hard to stop thinking about", from: "#60a5fa", to: "#6366f1", emoji: "🌙" },
  { text: "you are cute in a way that feels natural, not forced", from: "#fb7185", to: "#ec4899", emoji: "🍰" },
  { text: "your face has the kind of prettiness that makes every photo better", from: "#fbbf24", to: "#eab308", emoji: "📸" },
  { text: "your smile is my favorite tiny plot twist in any day", from: "#a78bfa", to: "#ec4899", emoji: "🎀" },
  { text: "your eyes look like they know secrets the stars forgot to tell", from: "#818cf8", to: "#a855f7", emoji: "⭐" },
  { text: "your lips make even a tiny pout look ridiculously cute", from: "#fb7185", to: "#ef4444", emoji: "🥰" },
  { text: "you have the sweetest face and the softest vibe", from: "#2dd4bf", to: "#14b8a6", emoji: "🌼" },
  { text: "your smile feels like the best part of a song", from: "#60a5fa", to: "#06b6d4", emoji: "🎵" },
  { text: "your eyes are prettier than any filter could ever understand", from: "#c084fc", to: "#8b5cf6", emoji: "💎" },
  { text: "you make being adorable look effortless", from: "#f472b6", to: "#f43f5e", emoji: "🧸" },
  { text: "your lips and smile together are honestly too cute for normal life", from: "#fb7185", to: "#ec4899", emoji: "💞" },
  { text: "you have a gentle beauty that makes everything around you feel warmer", from: "#fbbf24", to: "#f97316", emoji: "🕯️" },
  { text: "your eyes are the kind people write poems about and still get wrong", from: "#818cf8", to: "#8b5cf6", emoji: "📝" },
  { text: "you are pretty like a quiet wish that actually came true", from: "#a78bfa", to: "#d946ef", emoji: "🪄" },
  { text: "your smile makes my heart do that stupid happy jump", from: "#fb7185", to: "#ef4444", emoji: "💓" },
  { text: "your lips look like they were made for soft smiles and cute arguments", from: "#f472b6", to: "#f43f5e", emoji: "🍒" },
  { text: "you make every room feel less ordinary just by being there", from: "#34d399", to: "#10b981", emoji: "✨" },
  { text: "your eyes have this dreamy look that makes time slow down a little", from: "#60a5fa", to: "#6366f1", emoji: "☁️" },
  { text: "you are cute enough to make compliments feel too small", from: "#fbbf24", to: "#eab308", emoji: "🤍" },
  { text: "your smile is the kind of pretty that fixes my mood instantly", from: "#fb7185", to: "#ec4899", emoji: "🌈" },
  { text: "your eyes look even prettier when you are excited about something", from: "#2dd4bf", to: "#14b8a6", emoji: "💫" },
  { text: "your lips make your sleepy little smiles look extra sweet", from: "#f472b6", to: "#ef4444", emoji: "🌙" },
  { text: "you have that rare kind of beauty that feels both cute and elegant", from: "#c084fc", to: "#d946ef", emoji: "👑" },
  { text: "your laugh is cute enough to replay in my head for no reason", from: "#fbbf24", to: "#f97316", emoji: "😂" },
  { text: "your eyes make eye contact feel like a small miracle", from: "#818cf8", to: "#a855f7", emoji: "🫣" },
  { text: "you are the type of pretty that makes ordinary words sound romantic", from: "#fb7185", to: "#ec4899", emoji: "💌" },
  { text: "your lips, your smile, your eyes, all of it is just unfairly lovely", from: "#f472b6", to: "#f43f5e", emoji: "💕" },
  { text: "you are my favorite kind of beautiful: soft, cute, and completely unforgettable", from: "#a78bfa", to: "#ec4899", emoji: "🫶" },
];

const particlePositions = [
  { left: "10%", delay: 0 }, { left: "20%", delay: 1 }, { left: "30%", delay: 2 }, { left: "40%", delay: 3 },
  { left: "50%", delay: 4 }, { left: "60%", delay: 5 }, { left: "70%", delay: 6 }, { left: "80%", delay: 7 },
  { left: "90%", delay: 8 }, { left: "15%", delay: 9 }, { left: "25%", delay: 10 }, { left: "35%", delay: 11 },
  { left: "45%", delay: 12 }, { left: "55%", delay: 13 }, { left: "65%", delay: 14 }, { left: "75%", delay: 15 },
  { left: "85%", delay: 16 }, { left: "95%", delay: 17 }, { left: "5%", delay: 18 }, { left: "75%", delay: 19 },
];

const noteColors = [
  ["#ff8fa3", "#fecdd3"],
  ["#c4b5fd", "#ddd6fe"],
  ["#fcd34d", "#fef3c7"],
  ["#86efac", "#bbf7d0"],
  ["#f9a8d4", "#fbcfe8"],
  ["#fbbf24", "#fcd34d"],
];

const confettiColors = ["#ff8fa3", "#c4b5fd", "#fcd34d", "#86efac", "#f9a8d4", "#ffffff"];
const sparkleColors = ["#ff8fa3", "#c4b5fd", "#fcd34d"];

const state = {
  remaining: [],
  current: null,
  isPulling: false,
};

const elements = {
  floatingHearts: document.querySelector("#floatingHearts"),
  introOverlay: document.querySelector("#introOverlay"),
  introSparkles: document.querySelector("#introSparkles"),
  jarButton: document.querySelector("#jarButton"),
  jarNotes: document.querySelector("#jarNotes"),
  remainingCount: document.querySelector("#remainingCount"),
  complimentOverlay: document.querySelector("#complimentOverlay"),
  complimentCard: document.querySelector("#complimentCard"),
  complimentEmoji: document.querySelector("#complimentEmoji"),
  complimentText: document.querySelector("#complimentText"),
  closeCompliment: document.querySelector("#closeCompliment"),
  confettiLayer: document.querySelector("#confettiLayer"),
  allSeenOverlay: document.querySelector("#allSeenOverlay"),
  allSeenSparkles: document.querySelector("#allSeenSparkles"),
  restartButton: document.querySelector("#restartButton"),
};

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function heartSvg() {
  return '<svg class="icon icon-heart filled"><use href="#icon-heart"></use></svg>';
}

function renderFloatingHearts() {
  particlePositions.forEach((position, index) => {
    const heart = document.createElement("div");
    const color = index % 4 === 0 ? "#ff6b8a" : index % 4 === 1 ? "#ff8fa3" : index % 4 === 2 ? "#ffb3c1" : "#f472b6";
    heart.className = "floating-heart";
    heart.style.setProperty("--left", position.left);
    heart.style.setProperty("--delay", `${position.delay * 0.4}s`);
    heart.style.setProperty("--duration", `${10 + (index % 3) * 2}s`);
    heart.style.setProperty("--heart-color", color);
    heart.innerHTML = heartSvg();
    elements.floatingHearts.appendChild(heart);
  });
}

function renderIntroSparkles() {
  Array.from({ length: 6 }).forEach((_, index) => {
    const sparkle = document.createElement("span");
    sparkle.className = "intro-sparkle";
    sparkle.style.setProperty("--sparkle-color", sparkleColors[index % 3]);
    sparkle.style.setProperty("--move-x", `${Math.cos(index * Math.PI / 3) * 80}px`);
    sparkle.style.setProperty("--move-y", `${Math.sin(index * Math.PI / 3) * 80}px`);
    sparkle.style.setProperty("--delay", `${index * 0.2}s`);
    elements.introSparkles.appendChild(sparkle);
  });
}

function renderAllSeenSparkles() {
  elements.allSeenSparkles.replaceChildren();

  Array.from({ length: 8 }).forEach((_, index) => {
    const sparkle = document.createElement("span");
    sparkle.className = "mini-sparkle";
    sparkle.style.setProperty("--top", `${12 + ((index * 23) % 76)}%`);
    sparkle.style.setProperty("--left", `${8 + ((index * 31) % 84)}%`);
    sparkle.style.setProperty("--sparkle-color", sparkleColors[index % 3]);
    sparkle.style.setProperty("--delay", `${index * 0.2}s`);
    elements.allSeenSparkles.appendChild(sparkle);
  });
}

function renderJarNotes() {
  elements.jarNotes.replaceChildren();

  state.remaining.slice(0, 6).forEach((_, index) => {
    const note = document.createElement("span");
    const rotate = (index - 2) * 18;
    note.className = "note";
    note.style.setProperty("--left", `${15 + index * 12}%`);
    note.style.setProperty("--top", `${25 + (index % 3) * 22}%`);
    note.style.setProperty("--note-from", noteColors[index][0]);
    note.style.setProperty("--note-to", noteColors[index][1]);
    note.style.setProperty("--rotate", `${rotate}deg`);
    note.style.setProperty("--rotate-hover", `${rotate + 5}deg`);
    note.style.setProperty("--delay", `${index * 0.2}s`);
    note.innerHTML = "<span></span>";
    elements.jarNotes.appendChild(note);
  });
}

function updateProgress() {
  elements.remainingCount.textContent = `${state.remaining.length} notes waiting for you...`;
}

function resetJar() {
  state.remaining = shuffle(compliments);
  state.current = null;
  state.isPulling = false;
  hideOverlay(elements.allSeenOverlay);
  hideOverlay(elements.complimentOverlay);
  renderJarNotes();
  updateProgress();
}

function showOverlay(overlay) {
  overlay.hidden = false;
  overlay.classList.remove("is-visible");
  requestAnimationFrame(() => overlay.classList.add("is-visible"));
}

function hideOverlay(overlay) {
  overlay.hidden = true;
  overlay.classList.remove("is-visible");
}

function pullCompliment() {
  if (state.remaining.length === 0 || state.isPulling) return;

  state.isPulling = true;
  showConfetti();

  window.setTimeout(() => {
    const next = state.remaining.shift();
    state.current = next;
    state.isPulling = false;
    renderJarNotes();
    updateProgress();
    showCompliment(next);
  }, 800);
}

function showCompliment(compliment) {
  elements.complimentCard.style.background = `linear-gradient(135deg, ${compliment.from}, ${compliment.to})`;
  elements.complimentEmoji.textContent = compliment.emoji;
  elements.complimentText.textContent = compliment.text;
  showOverlay(elements.complimentOverlay);
}

function closeCompliment() {
  hideOverlay(elements.complimentOverlay);
  state.current = null;

  if (state.remaining.length === 0) {
    renderAllSeenSparkles();
    showOverlay(elements.allSeenOverlay);
  }
}

function showConfetti() {
  elements.confettiLayer.hidden = false;
  elements.confettiLayer.replaceChildren();

  Array.from({ length: 30 }).forEach((_, index) => {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--left", `${(index * 3.3) % 100}%`);
    piece.style.setProperty("--confetti-color", confettiColors[index % confettiColors.length]);
    piece.style.setProperty("--delay", `${index * 0.05}s`);
    piece.style.setProperty("--radius", index % 2 === 0 ? "50%" : "2px");
    piece.style.setProperty("--travel-y", `${-500 - Math.random() * 200}px`);
    piece.style.setProperty("--travel-x", `${(Math.random() - 0.5) * 400}px`);
    piece.style.setProperty("--spin", `${Math.random() * 720}deg`);
    piece.style.setProperty("--duration", `${1.5 + Math.random() * 0.5}s`);
    elements.confettiLayer.appendChild(piece);
  });

  window.setTimeout(() => {
    elements.confettiLayer.hidden = true;
  }, 2200);
}

function hideIntro() {
  elements.introOverlay.classList.add("is-leaving");
  window.setTimeout(() => {
    elements.introOverlay.hidden = true;
  }, 1200);
}

elements.jarButton.addEventListener("click", pullCompliment);
elements.closeCompliment.addEventListener("click", closeCompliment);
elements.restartButton.addEventListener("click", resetJar);

elements.complimentOverlay.addEventListener("click", (event) => {
  if (event.target === elements.complimentOverlay || event.target.classList.contains("compliment-backdrop")) {
    closeCompliment();
  }
});

elements.complimentCard.addEventListener("click", (event) => event.stopPropagation());

renderFloatingHearts();
renderIntroSparkles();
resetJar();
window.setTimeout(hideIntro, 3500);
