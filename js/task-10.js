function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  inputElem: document.querySelector("input"),
  divBoxElem: document.getElementById('boxes')
};

refs.createBtn.addEventListener("click", onCreateBtnClick);

function onCreateBtnClick() {
  createBoxes(refs.inputElem.value);
};


function createBoxes(amount) {
  let sizes = 30;
  const divElements = [];
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div")
    div.style.width = `${sizes}px`;
    div.style.height = `${sizes}px`;
    div.style.backgroundColor = getRandomHexColor();
    sizes += 10;
    divElements.push(div);
  }
  refs.divBoxElem.append(...divElements);
};

refs.destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  refs.divBoxElem.innerHTML = "null";
};

