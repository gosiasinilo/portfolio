const hamburger = document.querySelector(".navbar__hamburger");
const navLinks = document.querySelector(".navbar__links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".navbar__link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});