function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");

  const width = document.querySelector(".carousel__slide").offsetWidth;
  const carousel = document.querySelector(".carousel__inner");

  let i = 1;
  let j = 1;

  arrowLeft.style.display = "none";

  arrowRight.addEventListener("click", () => {
    arrowLeft.style.display = "";

    carousel.style.transform = `translateX(-${width * i}px)`;
    i++;
    j--;

    if (i === 4) {
      arrowRight.style.display = "none";
    }
  });

  arrowLeft.addEventListener("click", () => {
    arrowRight.style.display = "";

    carousel.style.transform = `translateX(${width * j}px)`;
    j++;
    i--;

    if (j === 1) {
      arrowLeft.style.display = "none";
    }
  });
}
