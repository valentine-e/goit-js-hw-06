function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createButton: document.querySelector("[data-create]"),
  clearButton: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createButton.addEventListener("click", onCreateClick);
refs.clearButton.addEventListener("click", destroyBoxes);

function onCreateClick() {
  const boxesAmount = refs.input.value;
  createBoxes(boxesAmount);
}

function createBoxes(amount) {
  let firstBoxSize = 30;

  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement("div");

    newBox.style.width = `${firstBoxSize}px`;
    newBox.style.height = `${firstBoxSize}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    refs.boxesContainer.append(newBox);

    firstBoxSize += 10;
  }
  refs.input.value = "";
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.input.value = "";
}
