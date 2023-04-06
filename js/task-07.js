const inputEl = document.querySelector(`#font-size-control`);
const spanEl = document.querySelector(`#text`);


console.log(inputEl);
console.log(spanEl);

inputEl.addEventListener(`input`, onInput)

function onInput (event) {
    console.log('Это инпут');
    spanEl.classList.add(`item`);
    
    console.log(event.currentTarget.value);
    spanEl.style.fontSize = `${event.currentTarget.value}px`;
    console.log(spanEl.style.fontSize);

}

