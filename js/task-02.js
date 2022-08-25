const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const element = document.createElement("li");
  element.classList.add('item');
  element.textContent = ingredient;
  return element;
});

console.log(list);
console.log(elements);

list.append(...elements);

