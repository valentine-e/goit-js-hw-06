function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  spanOutput: document.querySelector(".color"),
};

refs.button.addEventListener("click", onButtonClick);

function onButtonClick() {
  const newColor = getRandomHexColor();
  refs.body.style.backgroundColor = newColor;
  refs.spanOutput.textContent = newColor;
}
