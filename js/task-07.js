const inputElem = document.getElementById("font-size-control");
const spanTextElem = document.getElementById("text");

inputElem.addEventListener('input', onInputFontSize)

function onInputFontSize(event) {
    inputElem.range = event.currentTarget.value;
    spanTextElem.style.fontSize = `${event.currentTarget.value}px`

};