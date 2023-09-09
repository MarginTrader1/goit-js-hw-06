const ingredients = [
   "Potatoes",
   "Mushrooms",
   "Garlic",
   "Tomatos",
   "Herbs",
   "Condiments",
];

const ulEl = document.querySelector("#ingredients");
console.log(ulEl);

const createElement = ingredients.map((element) => {
   const liEl = document.createElement(`li`);
   liEl.classList.add(`item`);
   liEl.textContent = `${element}`;

   return liEl;
});

console.log(createElement);

ulEl.append(...createElement);
