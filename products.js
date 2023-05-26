// products.js

let slideIndex = 1;

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.getElementsByClassName("product-item");
  const numSlides = slides.length;

  if (n > numSlides) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = numSlides;
  }

  for (let i = 0; i < numSlides; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(slideIndex);
});
