function initCarousel() {
  const arrowRight = document.querySelector(".carousel__arrow_right");
  const arrowLeft = document.querySelector(".carousel__arrow_left");

  arrowLeft.style.display = "none";

  const carousel = document.querySelector(".carousel__inner");
  const width = carousel.offsetWidth;

  let position = 0;

  arrowRight.addEventListener("click", () => {
    arrowLeft.style.display = "";

    position++;
    carousel.style.transform = `translateX(-${width * position}px)`;

    hide(arrowRight);
  });

  arrowLeft.addEventListener("click", () => {
    arrowRight.style.display = "";

    position--;
    carousel.style.transform = `translateX(-${width * position}px)`;

    hide(arrowLeft);
  });

  function hide(arrow) {
    if (position === 0 || position === 3) {
      arrow.style.display = "none";
    }
  }
}
