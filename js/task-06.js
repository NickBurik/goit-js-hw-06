const inputElem = document.getElementById("validation-input");
const length = Number(inputElem.dataset.length);

inputElem.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === length) {
    event.target.classList = "valid";
  } else {
    event.target.classList = "invalid";
  }
});