const categoryItems = document.querySelectorAll(".item");
console.log("Number of categories:", categoryItems.length);

console.log(" ");

categoryItems.forEach((item) => {
  // console.log(item);
  const title = item.querySelector("h2");
  console.log("Category:", title.textContent);

  const itemQuantity = item.querySelectorAll(".item li");
  console.log("Elements:", itemQuantity.length);

  console.log(" ");
});
