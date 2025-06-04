const btnMenu = document.querySelector("#btn-menu");
const btnClose = document.querySelector("#btn-close");
const allInputSlider = document.querySelectorAll(".pagination-slider__item");

const allImgSlider = document.querySelectorAll(".slider-img");


btnMenu.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    document.querySelector(".nav__menu").classList.toggle("mv-left");
    document.body.classList.toggle("ov-hidden");
  }
});

btnClose.addEventListener("click", () => {
  if (window.innerWidth <= 800) {
    document.querySelector(".nav__menu").classList.toggle("mv-left");
    document.body.classList.toggle("ov-hidden");
  }
});

allInputSlider.forEach(function (element, i) {

  element.addEventListener("click", () => {

    allImgSlider.forEach(e => e.removeAttribute("style"))
    allInputSlider.forEach(e => e.removeAttribute("style"))
    element.style.background = "#fff";
    element.style.transform = "scale(1.2)";
    allImgSlider[i].style.opacity = "0"
  })
});