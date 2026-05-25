const burgerBtn = document.getElementById("burger");
const navigation = document.getElementById("menu");

burgerBtn.addEventListener("click", () => {
  navigation.classList.toggle("show");
});

const slider = document.getElementById("slides");
const indicators = document.querySelectorAll(".dot");
const leftArrow = document.getElementById("prev");
const rightArrow = document.getElementById("next");

let activeSlide = 0;
const slidesCount = indicators.length;

function updateSlider(position) {

  if (position < 0) {
    activeSlide = slidesCount - 1;
  } 
  else if (position >= slidesCount) {
    activeSlide = 0;
  } 
  else {
    activeSlide = position;
  }

  slider.style.transform = `translateX(-${activeSlide * 100}%)`;

  indicators.forEach((item) => {
    item.classList.remove("active");
  });

  indicators[activeSlide].classList.add("active");
}

rightArrow.addEventListener("click", () => {
  updateSlider(activeSlide + 1);
});

leftArrow.addEventListener("click", () => {
  updateSlider(activeSlide - 1);
});

indicators.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedSlide = parseInt(item.dataset.slide);
    updateSlider(selectedSlide);
  });
});

setInterval(() => {
  updateSlider(activeSlide + 1);
}, 4000);
