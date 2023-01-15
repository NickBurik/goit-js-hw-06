const inputElem = document.getElementById("name-input");
const spanElem = document.getElementById("name-output");

inputElem.addEventListener('input', onInputChange)

function onInputChange(event) {
    spanElem.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "") {
       spanElem.textContent = "Anonimus" 
    }
};