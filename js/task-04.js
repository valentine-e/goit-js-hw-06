let counterValue = 0;

const refs = {
  counter: document.querySelector("#value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", onDecrementBtnClick);

refs.incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick() {
  counterValue -= 1;
  refs.counter.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.counter.textContent = counterValue;
}
