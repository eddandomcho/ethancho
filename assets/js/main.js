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

// Click: arrow button
startBtn?.addEventListener("click", scrollToContent);

// Click: character also scrolls
characterBtn?.addEventListener("click", scrollToContent);

// Keyboard support: Space, Enter, or Down Arrow all trigger scroll
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowDown") {
    e.preventDefault();
    scrollToContent();
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
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
      sideNav.classList.remove(
        "opacity-0",
        "pointer-events-none",
        "-translate-x-4"
      );
      sideNav.classList.add(
        "opacity-100",
        "pointer-events-auto",
        "translate-x-0"
      );
    } else {
      sideNav.classList.add(
        "opacity-0",
        "pointer-events-none",
        "-translate-x-4"
      );
      sideNav.classList.remove(
        "opacity-100",
        "pointer-events-auto",
        "translate-x-0"
      );
    }
  };

  window.addEventListener("scroll", updateSideNav, { passive: true });
  updateSideNav();
}

// Skills Cat TV Screen Toggle (DATA / O & GENERAL / X Buttons)
const btnSkillsData = document.getElementById("btn-skills-data");
const btnSkillsGeneral = document.getElementById("btn-skills-general");
const catFaceScreen = document.getElementById("cat-face-screen");
const skillsDataScreen = document.getElementById("skills-data-screen");
const skillsGeneralScreen = document.getElementById("skills-general-screen");

if (
  btnSkillsData &&
  btnSkillsGeneral &&
  catFaceScreen &&
  skillsDataScreen &&
  skillsGeneralScreen
) {
  let activeSkillsScreen = "cat"; // "cat" | "data" | "general"

  const renderSkillsScreen = () => {
    catFaceScreen.style.display = activeSkillsScreen === "cat" ? "" : "none";

    if (activeSkillsScreen === "data") {
      skillsDataScreen.classList.remove("hidden");
      skillsDataScreen.style.display = "flex";
    } else {
      skillsDataScreen.style.display = "none";
      skillsDataScreen.classList.add("hidden");
    }

    if (activeSkillsScreen === "general") {
      skillsGeneralScreen.classList.remove("hidden");
      skillsGeneralScreen.style.display = "flex";
    } else {
      skillsGeneralScreen.style.display = "none";
      skillsGeneralScreen.classList.add("hidden");
    }
  };

  btnSkillsData.addEventListener("click", () => {
    activeSkillsScreen = activeSkillsScreen === "data" ? "cat" : "data";
    renderSkillsScreen();
  });

  btnSkillsGeneral.addEventListener("click", () => {
    activeSkillsScreen = activeSkillsScreen === "general" ? "cat" : "general";
    renderSkillsScreen();
  });
}
