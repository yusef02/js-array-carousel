console.log("js ok");

const carouselElement = document.querySelector(".carousel");
const arrowPrevElement = document.getElementById("arrowPrev");
const arrowNextElement = document.getElementById("arrowNext");
console.log(arrowNextElement);
const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

for (let i = 0; i < images.length; i++) {
  let classDisplay = i == 0 ? "d-block" : "d-none";
  carouselElement.innerHTML += `
  <img src="./assets/img/${images[i]}" alt="slide ${
    i + 1
  }" class="slide ${classDisplay}" />`;
}

const slidesList = document.getElementsByClassName("slide");
let slideIndex = 0;
console.log(slidesList[slideIndex]);

arrowNextElement.addEventListener("click", function () {
  console.log("prova");
  let slide = slidesList[slideIndex];
  console.log(slideIndex);
  slide.classList.remove("d-block");
  slide.classList.add("d-none");

  // slideIndex = slideIndex == slidesList.length - 1 ? 0 : slideIndex + 1;
  if (slideIndex == slidesList.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slide = slidesList[slideIndex];
  slide.classList.remove("d-none");
  slide.classList.add("d-block");
  console.log(slideIndex);
});
