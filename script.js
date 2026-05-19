// ── CAROUSEL ──
const track = document.querySelector(".carousel__track");
if (track) {
  const prevBtn = document.querySelector(".carousel__btn--prev");
  const nextBtn = document.querySelector(".carousel__btn--next");
  let offset = 0;

  function getSlideWidth() {
    const first = track.children[0];
    return first ? first.offsetWidth : 320;
  }

  nextBtn.addEventListener("click", () => {
    const max = track.scrollWidth - track.parentElement.offsetWidth;
    offset = Math.min(offset + getSlideWidth(), max);
    track.style.transform = `translateX(-${offset}px)`;
  });

  prevBtn.addEventListener("click", () => {
    offset = Math.max(offset - getSlideWidth(), 0);
    track.style.transform = `translateX(-${offset}px)`;
  });

  // drag to scroll
  let isDragging = false, startX = 0, startOffset = 0;
  track.addEventListener("mousedown", e => { isDragging = true; startX = e.clientX; startOffset = offset; });
  window.addEventListener("mouseup", () => { isDragging = false; });
  window.addEventListener("mousemove", e => {
    if (!isDragging) return;
    const delta = startX - e.clientX;
    const max = track.scrollWidth - track.parentElement.offsetWidth;
    offset = Math.max(0, Math.min(startOffset + delta, max));
    track.style.transform = `translateX(-${offset}px)`;
  });
}

// ── NAV ──
const hamburger = document.querySelector(".nav__hamburger");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const isOpen = navMenu.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});