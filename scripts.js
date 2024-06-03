const checkbox = document.getElementById("navbar__checkbox");
checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    document.body.classList.add("body--dark");
  } else {
    document.body.classList.remove("body--dark");
  }
});
