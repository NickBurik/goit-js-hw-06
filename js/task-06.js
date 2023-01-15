const inputElem = document.getElementById("validation-input");
const length = Number(inputElem.dataset.length);

inputElem.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === length) {
        inputElem.classList.add("valid");
        
    } else {
        inputElem.classList.replace("valid", "invalid");
    }
});