const compliments = [
  { text: "the way your smile makes my heart skip a beat", from: "#fb7185", to: "#ec4899", emoji: "💕" },
  { text: "your eyes sparkle in a way no gemstone ever could", from: "#c084fc", to: "#8b5cf6", emoji: "✨" },
  { text: "just thinking about you makes me smile like an idiot", from: "#fbbf24", to: "#f97316", emoji: "😊" },
  { text: "you're the reason I believe in magic", from: "#34d399", to: "#14b8a6", emoji: "🪄" },
  { text: "your laugh is my favorite melody", from: "#60a5fa", to: "#06b6d4", emoji: "🎵" },
  { text: "you make ordinary days feel extraordinary", from: "#a78bfa", to: "#d946ef", emoji: "🌟" },
  { text: "being around you is like breathing fresh air", from: "#f472b6", to: "#f43f5e", emoji: "🌸" },
  { text: "you've got this energy that draws everyone to you", from: "#fbbf24", to: "#eab308", emoji: "🦋" },
  { text: "your kindness lights up every room you walk into", from: "#fb7185", to: "#ef4444", emoji: "💖" },
  { text: "you're stronger than you know, and more loved than you realize", from: "#818cf8", to: "#a855f7", emoji: "💪" },
  { text: "every moment with you is a memory I treasure", from: "#2dd4bf", to: "#10b981", emoji: "📸" },
  { text: "you make me want to be a better person", from: "#a78bfa", to: "#ec4899", emoji: "🌱" },
  { text: "your voice is the sound I could listen to forever", from: "#f472b6", to: "#f43f5e", emoji: "🎧" },
  { text: "you've got the most beautiful soul I've ever known", from: "#a78bfa", to: "#a855f7", emoji: "💜" },
  { text: "the way you care about others is pure magic", from: "#fb7185", to: "#ec4899", emoji: "💝" },
  { text: "you make my heart feel like it's dancing", from: "#fb7185", to: "#ef4444", emoji: "💃" },
  { text: "your presence alone makes my day better", from: "#fbbf24", to: "#f97316", emoji: "☀️" },
  { text: "you are the sweetest person I've ever met", from: "#f472b6", to: "#f43f5e", emoji: "🍯" },
  { text: "your optimism is absolutely contagious", from: "#facc15", to: "#f59e0b", emoji: "🌈" },
  { text: "you've got this radiance that warms everyone around", from: "#fbbf24", to: "#eab308", emoji: "🔥" },
  { text: "the way you laugh is my favorite sound in the world", from: "#f472b6", to: "#f43f5e", emoji: "🤣" },
  { text: "you make even the smallest moments feel special", from: "#a78bfa", to: "#d946ef", emoji: "⭐" },
  { text: "your creativity and imagination are inspiring", from: "#c084fc", to: "#8b5cf6", emoji: "🎨" },
  { text: "you've got the kindest heart I know", from: "#fb7185", to: "#ec4899", emoji: "🫀" },
  { text: "being your friend is one of my favorite things", from: "#60a5fa", to: "#06b6d4", emoji: "🤝" },
  { text: "you make my world brighter just by existing", from: "#fbbf24", to: "#f97316", emoji: "💡" },
  { text: "your determination inspires me daily", from: "#818cf8", to: "#a855f7", emoji: "🚀" },
  { text: "you've got this amazing ability to make people feel seen", from: "#2dd4bf", to: "#10b981", emoji: "👀" },
  { text: "the world needs more people like you", from: "#fb7185", to: "#ec4899", emoji: "🌍" },
  { text: "your courage to be yourself is incredible", from: "#a78bfa", to: "#ec4899", emoji: "🦁" },
  { text: "you make every conversation worthwhile", from: "#60a5fa", to: "#6366f1", emoji: "💬" },
  { text: "your energy is absolutely magnetic", from: "#fbbf24", to: "#eab308", emoji: "🧲" },
  { text: "you've got this wonderful way of making people smile", from: "#f472b6", to: "#f43f5e", emoji: "😄" },
  { text: "your grace and elegance are mesmerizing", from: "#c084fc", to: "#8b5cf6", emoji: "💃" },
  { text: "you make me feel like the luckiest person alive", from: "#fb7185", to: "#ef4444", emoji: "🍀" },
  { text: "your honesty and authenticity are rare treasures", from: "#2dd4bf", to: "#14b8a6", emoji: "💎" },
  { text: "you've got the most beautiful laugh", from: "#fbbf24", to: "#f97316", emoji: "😂" },
  { text: "you make complicated things look simple", from: "#60a5fa", to: "#06b6d4", emoji: "🧠" },
  { text: "your curiosity about life is contagious", from: "#a78bfa", to: "#a855f7", emoji: "🔍" },
  { text: "you've got a heart of pure gold", from: "#fbbf24", to: "#eab308", emoji: "🥇" },
  { text: "the way you handle challenges is admirable", from: "#818cf8", to: "#8b5cf6", emoji: "🏆" },
  { text: "you make my heart feel things it never has before", from: "#f472b6", to: "#f43f5e", emoji: "💗" },
  { text: "your warmth makes everyone feel welcome", from: "#fb7185", to: "#ec4899", emoji: "🏠" },
  { text: "you've got this incredible sense of humor", from: "#fbbf24", to: "#f97316", emoji: "😎" },
  { text: "your dreams and ambitions are beautiful", from: "#c084fc", to: "#d946ef", emoji: "🌙" },
  { text: "you make me appreciate the little things", from: "#2dd4bf", to: "#10b981", emoji: "🦋" },
  { text: "your friendship means the world to me", from: "#60a5fa", to: "#6366f1", emoji: "🌎" },
  { text: "you've got this amazing spirit that lifts others", from: "#a78bfa", to: "#ec4899", emoji: "✨" },
  { text: "every day with you is a blessing", from: "#fb7185", to: "#ec4899", emoji: "🙏" },
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
