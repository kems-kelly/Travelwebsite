const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".mobile nav a");

// open menu
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "auto";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
