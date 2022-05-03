const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elements = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");

  return ingredientEl;
});

// console.log(elements);
document.querySelector("#ingredients").append(...elements);

// const elements = ingredients
//   .map((ingredient) => {
//     const ingredientEl = `<li class="El">${ingredient}</li>`;

//     return ingredientEl;
//   })
//   .join("");

// console.log(elements);

// document.querySelector("#ingredients").innerHTML = elements;

// const createMarkUp = (array) =>
//   array
//     .map((ingredient) => {
//       const ingredientEl = `<li class="item">${ingredient}</li>`;

//       return ingredientEl;
//     })
//     .join("");

// document.querySelector("#ingredients").innerHTML = createMarkUp(ingredients);
