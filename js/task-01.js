const categoriesEl = document.querySelector("ul#categories");

const itemsCategoriesEl = categoriesEl.children;

console.log(`Number of categories: ${itemsCategoriesEl.length}`);

for (const categoryEl of itemsCategoriesEl) {
  const categoryTitleEl = categoryEl.querySelector("h2");

  console.log("------------------------");
  console.log(`Category: ${categoryTitleEl.textContent}`);

  console.log(`Elements: ${categoryEl.querySelector("ul").children.length}`);
}
