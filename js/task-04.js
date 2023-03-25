let counterValue = 0;

const counterRef = document.querySelector("#counter");

const refs = {
  fieldValue: counterRef.querySelector("#value"),
  decrementBtn: counterRef.querySelector('[data-action="decrement"]'),
  incrementBtn: counterRef.querySelector('[data-action="increment"]'),
};

refs.decrementBtn.addEventListener("click", onDecrementValue);

refs.incrementBtn.addEventListener("click", onIncrementValue);

function onDecrementValue() {
  counterValue += Number(this.textContent);

  onOverwritesValue();
}

function onIncrementValue() {
  counterValue += Number(this.textContent);

  onOverwritesValue();
}

function onOverwritesValue() {
  refs.fieldValue.textContent = counterValue;
}