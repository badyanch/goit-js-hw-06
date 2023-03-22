const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngr = document.querySelector("ul#ingredients");
const listItemsEl = ingredients.map((label) => {
  const itemEl = document.createElement("li");

  itemEl.textContent = label;
  itemEl.classList.add("item");

  return itemEl;
});
listIngr.append(...listItemsEl);
