function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");

  button.addEventListener("click", () => {
    if (text.hidden) {
      text.hidden = false;
      return;
    }

    text.hidden = true;
  });
}
