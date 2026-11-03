// 1 PLAYER Landing Page Interactivity

const startBtn = document.getElementById("start-btn");
const characterBtn = document.getElementById("character-btn");

function triggerStart() {
  if (startBtn) {
    startBtn.classList.add("start-pulse");
    setTimeout(() => {
      startBtn.classList.remove("start-pulse");
    }, 600);
  }
}

// Click events
startBtn?.addEventListener("click", triggerStart);

characterBtn?.addEventListener("click", () => {
  characterBtn.classList.add("start-pulse");
  setTimeout(() => {
    characterBtn.classList.remove("start-pulse");
  }, 600);
});

// Keyboard support (Space, Enter, Down arrow)
window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowDown") {
    e.preventDefault();
    triggerStart();
  }
});
