function hideSelf() {
  const button = document.querySelector("button");
  button.addEventListener("click", function () {
    this.hidden = true;
  });
}
