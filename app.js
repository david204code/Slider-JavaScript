const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

// iternate over the slide
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carouse();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carouse();
});

function carouse() {
  // circle back
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
