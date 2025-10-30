// Run everything after DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Background Music (optional)
  // =========================
  const music = document.getElementById("bgMusic");
  if (music) {
    music.muted = true;
    music.volume = 1.0;

    music.play()
      .then(() => {
        // Unmute a moment later (may still require user gesture on iOS Safari)
        setTimeout(() => { music.muted = false; }, 800);
      })
      .catch(() => {
        // Autoplay blocked — show a button and also unlock on first interaction
        const btn = document.createElement("button");
        btn.textContent = "🔊 Enable Sound";
        btn.style = "position:fixed;bottom:30px;right:30px;padding:10px 20px;background:#00bfff;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:600;z-index:9999;";
        document.body.appendChild(btn);

        const enable = () => {
          music.muted = false;
          music.play().catch(() => {});
          btn.remove();
          window.removeEventListener("pointerdown", enable);
          window.removeEventListener("keydown", enable);
          window.removeEventListener("touchstart", enable);
        };

        btn.addEventListener("click", enable);
        window.addEventListener("pointerdown", enable, { once: true, passive: true });
        window.addEventListener("keydown", enable, { once: true });
        window.addEventListener("touchstart", enable, { once: true, passive: true });
      });
  }

  // =========================
  // 2) CV Image Viewer (only on cv.html)
  // =========================
  const img   = document.getElementById("cvImg");
  const prev  = document.getElementById("prev");
  const next  = document.getElementById("next");
  const at    = document.getElementById("at");
  const total = document.getElementById("total");

  // Run only if all elements exist on the page
  if (img && prev && next && at && total) {
    // If images are inside a folder, set: const base = "images/";
    const base = ""; // "" means same folder as cv.html

    const pages = [
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0001.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0002.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0003.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0004.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0005.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0006.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0007.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0008.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0009.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0010.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0011.jpg",
      "2025-Oct - CV AHMAD DANIAL FITRI BIN OSMAN_page-0012.jpg"
    ].map(name => base + name); // prepend base path if needed

    let i = 0;
    total.textContent = pages.length;

    function render() {
      img.src = pages[i];
      at.textContent = i + 1;
      prev.disabled = i === 0;
      next.disabled = i === pages.length - 1;
    }

    prev.addEventListener("click", () => { if (i > 0) { i--; render(); } });
    next.addEventListener("click", () => { if (i < pages.length - 1) { i++; render(); } });

    // Keyboard arrows
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft")  prev.click();
      if (e.key === "ArrowRight") next.click();
    });

    render();
  }
});

img.addEventListener('transitionend', () => { animating = false; }, { once:true });

