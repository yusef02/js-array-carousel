console.log("js ok");

const carouselElement = document.querySelector(".carousel");
const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

for (let i = 0; i < images.length; i++) {
  let classDisplay = i == 0 ? "d-block" : "d-none";
  carouselElement.innerHTML += `
  <img src="./assets/img/${images[i]}" alt="slide ${
    i + 1
  }" class="slide ${classDisplay}" />`;
}
const arrowPrevElement = document.getElementById("arrowPrev");
const arrowNextElement = document.getElementById("arrowNext");

const slidesList = document.getElementsByClassName("slide");
let slideIndex = 0;

arrowNextElement.addEventListener("click", function () {
  slideIndex = goToSlide(this, slidesList, slideIndex);
  // let slide = slidesList[slideIndex];

  // slide.classList.remove("d-block");
  // slide.classList.add("d-none");

  // // slideIndex = slideIndex == slidesList.length - 1 ? 0 : slideIndex + 1;
  // if (slideIndex == slidesList.length - 1) {
  //   slideIndex = 0;
  // } else {
  //   slideIndex++;
  // }
  // slide = slidesList[slideIndex];
  // slide.classList.remove("d-none");
  // slide.classList.add("d-block");
});

arrowPrevElement.addEventListener("click", function () {
  slideIndex = goToSlide(this, slidesList, slideIndex);
  // let slide = slidesList[slideIndex];
  // slide.classList.remove("d-block");
  // slide.classList.add("d-none");
  // // slideIndex = slideIndex == slidesList.length - 1 ? 0 : slideIndex + 1;
  // if (slideIndex == 0) {
  //   slideIndex = slidesList.length - 1;
  // } else {
  //   slideIndex--;
  // }
  // slide = slidesList[slideIndex];
  // slide.classList.remove("d-none");
  // slide.classList.add("d-block");
});

function goToSlide(arrowElement, slideCollection, indexSlide) {
  let slide = slideCollection[indexSlide];

  slide.classList.remove("d-block");
  slide.classList.add("d-none");

  if (arrowElement.id == "arrowNext") {
    indexSlide = indexSlide == slideCollection.length - 1 ? 0 : indexSlide + 1;
  }
  if (arrowElement.id == "arrowPrev") {
    indexSlide = indexSlide == 0 ? slideCollection.length - 1 : indexSlide - 1;
  }

  slide = slideCollection[indexSlide];
  slide.classList.remove("d-none");
  slide.classList.add("d-block");
  return indexSlide;
}

let slidesAutoplay = setInterval(function () {
  arrowNextElement.click();
}, 3000);

const carouselContainer = document.querySelector(".col.carousel");
carouselContainer.addEventListener("mouseover", function () {
  clearInterval(slidesAutoplay);
});
carouselContainer.addEventListener("mouseleave", function () {
  slidesAutoplay = setInterval(function () {
    arrowNextElement.click();
  }, 3000);
});
