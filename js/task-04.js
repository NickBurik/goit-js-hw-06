const counterValue = {
    value: 0,

    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    }
};

const decrementBtnElem = document.querySelector('[data-action="decrement"]');
const incrementBtnElem = document.querySelector('[data-action="increment"]');
const valueElem = document.querySelector("#value");

decrementBtnElem.addEventListener('click', () => {
    counterValue.decrement();
    valueElem.textContent = counterValue.value;
});

incrementBtnElem.addEventListener('click', () => {
    counterValue.increment();
    valueElem.textContent = counterValue.value;
})
