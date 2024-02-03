const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");
const hm1 = document.querySelector(".hm1");
const hm2 = document.querySelector(".hm2");
const hm3 = document.querySelector(".hm3");
const hm4 = document.querySelector(".hm4");
const home = document.querySelector(".home");
const touch = document.querySelector(".touch");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});



hm1.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm2.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm3.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

hm4.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    navbarToggle.classList.remove("active");
});

home.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  navbarToggle.classList.remove("active");
});

touch.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  navbarToggle.classList.remove("active");
});
