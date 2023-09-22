const body = document.querySelector("body");
const navbar = body.querySelector("header.topnav");
const menuBtn = navbar.querySelector(".menu__btn");

menuBtn.addEventListener('click', () => {
    body.classList.toggle("nav__expand")
    navbar.classList.toggle("responsive");
});

