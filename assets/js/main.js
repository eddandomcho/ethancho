// 1 PLAYER Landing Page Interactivity

const startBtn = document.getElementById("start-btn");
const characterBtn = document.getElementById("character-btn");

// Scrolls smoothly down to the main content section
function scrollToContent() {
  const target = document.getElementById("main-content");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// Plays a quick pop animation on the arrow, then scrolls
function triggerStart() {
  if (startBtn) {
    startBtn.classList.add("start-pulse");
    setTimeout(() => {
      startBtn.classList.remove("start-pulse");
      scrollToContent();
    }, 350); // wait for animation to finish before scrolling
  } else {
    scrollToContent();
  }
}

// Click: arrow button
startBtn?.addEventListener("click", triggerStart);

// Click: character also scrolls
characterBtn?.addEventListener("click", () => {
  characterBtn.classList.add("start-pulse");
  setTimeout(() => {
    characterBtn.classList.remove("start-pulse");
    scrollToContent();
  }, 350);
});

// Keyboard support: Space, Enter, or Down Arrow all trigger scroll
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowDown") {
    e.preventDefault();
    triggerStart();
  }
});

// Menu Block Navigation: Click any block to smoothly scroll to its section
const navLinks = document.querySelectorAll("a[href^='#'], [data-target]");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId =
      link.getAttribute("data-target") ||
      link.getAttribute("href")?.replace(/^#/, "");
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      link.classList.add("start-pulse");
      setTimeout(() => {
        link.classList.remove("start-pulse");
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    }
  });
});
