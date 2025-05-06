import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  elem = null;

  constructor(product) {
    this.#render(product);
  }

  #render(product) {
    this.elem = createElement(this.#template(product));

    this.#addEvent(product);
  }

  #addEvent(product) {
    const addProductEvent = new CustomEvent("product-add", {
      detail: product.id,
      bubbles: true,
    });

    this.elem.addEventListener("click", ({ target }) => {
      target = target.closest(".card__button");

      const plusButtons = this.elem.querySelectorAll(".card__button");

      for (const button of plusButtons) {
        if (target !== button) {
          continue;
        }

        this.elem.dispatchEvent(addProductEvent);
      }
    });
  }

  #template(product) {
    return `
      <div class="card">
        <div class="card__top">
          <img src="/assets/images/products/${
            product.image
          }" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
        </div>
        <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `;
  }
}
