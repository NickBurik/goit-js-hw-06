function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElem = document.querySelector("body");
const spanColorElem = document.querySelector(".color");
const changeColorBthElem = document.querySelector(".change-color");

changeColorBthElem.addEventListener('click', onClickButton);

function onClickButton(event) {
  bodyElem.style = "background-color: " + getRandomHexColor();
  spanColorElem.textContent = getRandomHexColor();
}