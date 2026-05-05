const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const isOpen = navLinks.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav__link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});