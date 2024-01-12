function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  const text = document.querySelector("#text");

  button.addEventListener("click", function () {
    if (text.hidden === true) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
