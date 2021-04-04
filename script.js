const loginBtn = document.querySelector("#login-btn");
const modal = document.querySelector(".modal");

loginBtn.addEventListener("click", () => {
  modal.classList.add("active-modal");
});

const handleModalClick = () => {
  modal.classList.remove("active-modal");
  navMenu.classList.remove("active-menu");
  hamburger.classList.remove("active");
};

modal.addEventListener("click", () => {
  handleModalClick();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-menu");
const navItems = document.querySelectorAll(".navbar-menu-item");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  modal.classList.toggle("active-modal");
  navMenu.classList.toggle("active-menu");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleModalClick();
  });
});

window.addEventListener("scroll", () => {
  navbar.classList.toggle("navbar-sticky", window.scrollY > 0);
});
