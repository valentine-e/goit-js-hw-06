const refs = {
  textInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.textInput.addEventListener("input", onInputChange);

function onInputChange() {
  if (refs.textInput.value) {
    refs.nameOutput.textContent = refs.textInput.value;

    return;
  }

  refs.nameOutput.textContent = "Anonymous";
}
