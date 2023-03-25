function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const widgeRef = document.querySelector(".widget");

const changeColorBtnEl = widgeRef.querySelector("button.change-color");
const valueColorEl = widgeRef.querySelector("span.color");

changeColorBtnEl.addEventListener("click", () => {
  const currentColor = getRandomHexColor();

  valueColorEl.textContent = currentColor;

  document.body.style.backgroundColor = currentColor;
})