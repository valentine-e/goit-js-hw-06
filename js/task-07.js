const refs = {
  input: document.querySelector("#font-size-control"),
  textLabel: document.querySelector("#text"),
};

refs.input.addEventListener("input", onRangeChange);

function onRangeChange(e) {
  console.log(e);
  refs.textLabel.style.fontSize = `${e.target.value}px`;
  // refs.textLabel.style.fontSize = `${refs.input.value}px`;
  // console.log(refs.input.value);
}
