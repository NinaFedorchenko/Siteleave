const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")
const closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
});

$(function () {
  bg_from = 1;
  bg_to = 3;
  bg_now = 1;
  bg_interval = 5;
  setInterval(function () {
    $(".promo").removeClass("bg" + bg_now);
    if (bg_now == bg_to) bg_now = 1;
    else bg_now++;
    $(".promo").addClass("bg" + bg_now);
  }, bg_interval * 1000);
});
