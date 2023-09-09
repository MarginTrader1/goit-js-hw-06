const inputElement = document.querySelector(`#font-size-control`);
const spanElement = document.querySelector(`#text`);

console.log(inputElement);
console.log(spanElement);

inputElement.addEventListener(`input`, onInput);

function onInput(event) {
   spanElement.classList.add(`item`);

   console.log(event.currentTarget.value);
   spanElement.style.fontSize = `${event.currentTarget.value}px`;
   console.log(spanElement.style.fontSize);
}
