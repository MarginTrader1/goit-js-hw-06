const buttons = document.querySelector(`#counter`);
const valueElem = document.querySelector(`#value`);
let counterValue = 0;

buttons.firstElementChild.addEventListener("click", () => {
   counterValue -= 1;
   valueElem.textContent = counterValue;
});

buttons.lastElementChild.addEventListener("click", () => {
   counterValue += 1;
   valueElem.textContent = counterValue;
});
