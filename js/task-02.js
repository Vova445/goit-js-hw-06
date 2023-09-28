const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientsList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  ingridientsList.appendChild(listItem);
  console.log(`Added ingredient: ${ingredient}`);
});
console.log(`Number of ingredients: ${ingredients.length}`);
