const sidebar = document.querySelector(".header__sidebar");
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__sidebar__close");
const sidebarLink = document.querySelector(".header__sidebar__list-item");

burger.addEventListener("click", () => {
  sidebar.classList.add("header__sidebar_opened");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("header__sidebar_opened");
});

sidebarLink.addEventListener("click", () => {
  sidebar.classList.remove("header__sidebar_opened");
});
