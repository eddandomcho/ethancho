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

// Side Nav Visibility: reveal when reaching About Me (or below), hide on Landing/Menu
const sideNav = document.getElementById("side-nav");
const aboutMeSection = document.getElementById("about-me");

if (sideNav && aboutMeSection) {
  const updateSideNav = () => {
    const rect = aboutMeSection.getBoundingClientRect();
    // Fade in when About Me approaches the viewport
    if (rect.top <= window.innerHeight * 0.65) {
      sideNav.classList.remove("opacity-0", "pointer-events-none", "-translate-x-4");
      sideNav.classList.add("opacity-100", "pointer-events-auto", "translate-x-0");
    } else {
      sideNav.classList.add("opacity-0", "pointer-events-none", "-translate-x-4");
      sideNav.classList.remove("opacity-100", "pointer-events-auto", "translate-x-0");
    }
  };

  window.addEventListener("scroll", updateSideNav, { passive: true });
  updateSideNav();
}
