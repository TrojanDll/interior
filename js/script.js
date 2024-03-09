const sidebar = document.querySelector(".header__sidebar");
const burger = document.querySelector(".header__burger");
const close = document.querySelector(".header__sidebar__close");
const sidebarLinks = document.querySelectorAll(".header__sidebar__link");

burger.addEventListener("click", () => {
  sidebar.classList.add("header__sidebar_opened");
});

close.addEventListener("click", () => {
  sidebar.classList.remove("header__sidebar_opened");
});

sidebarLinks.forEach((sidebarLink) => {
  sidebarLink.addEventListener("click", (e) => {
    sidebar.classList.remove("header__sidebar_opened");
  });
});

// плавный скролл к якорю
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute("href");

    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
