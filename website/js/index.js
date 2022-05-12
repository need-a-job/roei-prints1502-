// navbar
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobileNav");

let text = document.getElementsByClassName("special-affect-1");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  mobileMenu.classList.toggle("is-active");
});


