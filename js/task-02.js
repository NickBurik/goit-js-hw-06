const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

function createItemsList(ingredients) {
  return ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });
  
}
const ulElem= document.getElementById("ingredients");
ulElem.append(...createItemsList(ingredients));