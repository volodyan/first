const tabItem = document.querySelectorAll(".tabs-btn-el");
const tabContent = document.querySelectorAll(".tabs-content-el");

tabItem.forEach(function (el) {
  el.addEventListener("click", open);
});
function open(ev) {
  const tabTarget = ev.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (i) {
    i.classList.remove("tabs-btn-el--active");
  });

  tabTarget.classList.add("tabs-btn-el--active");

  tabContent.forEach(function (item) {
    item.classList.remove("tabs-content-el--active");
  });

  document.querySelector(`#${button}`).classList.add("tabs-content-el--active");
}

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
  },
});
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-list");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("menu-list-active");
});
