const inputEl = document.querySelector(`input`);
console.log(inputEl.value);


inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur (event) {
    console.log('Это пропал блюр');
    console.log(inputEl.dataset.length);
    console.log(event.currentTarget.value.length);
    console.log(event.currentTarget.value);

    event.currentTarget.value.length < inputEl.dataset.length ? 
    inputEl.classList.add(`invalid`) : 
    inputEl.classList.add(`valid`);
}
