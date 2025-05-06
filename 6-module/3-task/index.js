import createElement from "../../assets/lib/create-element.js";

export default class Carousel {
  elem = null;

  constructor(slides) {
    this.slides = slides;

    this.#render();
  }

  #render() {
    this.elem = createElement(this.#template(this.slides));

    this.#addSlides();
    this.#initCarousel();
    this.#addEvent();
  }

  #addSlides() {
    const carouselInner = createElement("<div></div>");
    carouselInner.classList.add("carousel__inner");

    carouselInner.innerHTML = this.slides
      .map((slide) => {
        return `
          <div class="carousel__slide" data-id=${slide.id}>
            <img src="/assets/images/carousel/${
              slide.image
            }" class="carousel__img" alt="slide">
            <div class="carousel__caption">
              <span class="carousel__price">€${slide.price.toFixed(2)}</span>
              <div class="carousel__title">${slide.name}</div>
              <button type="button" class="carousel__button">
                <img src="/assets/images/icons/plus-icon.svg" alt="icon">
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    this.elem.insertAdjacentHTML("beforeEnd", carouselInner.outerHTML);
  }

  #template() {
    return `
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
      </div>
    `;
  }

  #initCarousel() {
    const arrowRight = this.elem.querySelector(".carousel__arrow_right");
    const arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    const carousel = this.elem.querySelector(".carousel__inner");

    arrowLeft.style.display = "none";

    let position = 0;
    const count = this.slides.length;

    arrowRight.addEventListener("click", () => {
      arrowLeft.style.display = "";

      position++;

      carousel.style.transform = `translateX(-${
        carousel.offsetWidth * position
      }px)`;

      hide(arrowRight);
    });

    arrowLeft.addEventListener("click", () => {
      arrowRight.style.display = "";

      position--;

      carousel.style.transform = `translateX(-${
        carousel.offsetWidth * position
      }px)`;

      hide(arrowLeft);
    });

    function hide(arrow) {
      if (position === 0 || position === count - 1) {
        arrow.style.display = "none";
      }
    }
  }

  #addEvent() {
    this.elem.addEventListener("click", ({ target }) => {
      target = target.closest(".carousel__button");

      const plusButtons = this.elem.querySelectorAll(".carousel__button");

      for (const button of plusButtons) {
        if (target !== button) {
          continue;
        }

        target = target.closest(".carousel__slide");

        const addProductEvent = new CustomEvent("product-add", {
          detail: target.dataset.id,
          bubbles: true,
        });

        this.elem.dispatchEvent(addProductEvent);
      }
    });
  }
}
