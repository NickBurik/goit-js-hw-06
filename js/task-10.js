const DEFAULT_SIZE = 30;
const UPDATE_VALUE = 10;
let sizes = DEFAULT_SIZE;

const refs = {
	createBtn: document.querySelector("[data-create]"),
	destroyBtn: document.querySelector("[data-destroy]"),
	inputElem: document.querySelector("input"),
	divBoxElem: document.getElementById("boxes")
};

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
	const divElements = [];

	for (let i = 0; i < amount; i++) {
		const div = document.createElement("div");
		div.style.width = `${sizes}px`;
		div.style.height = `${sizes}px`;
		div.style.backgroundColor = getRandomHexColor();
		sizes += UPDATE_VALUE;
		divElements.push(div);
	}

	refs.divBoxElem.append(...divElements);
}

function onCreate() {
	createBoxes(refs.inputElem.value);
}

function destroyBoxes() {
	sizes = DEFAULT_SIZE;
	refs.divBoxElem.innerHTML = null;
}

refs.destroyBtn.addEventListener("click", destroyBoxes);
refs.createBtn.addEventListener("click", onCreate);

