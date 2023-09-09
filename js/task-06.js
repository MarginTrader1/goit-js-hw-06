const inputEl = document.querySelector(`input`);
console.log(inputEl.value);

inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
   console.log(inputEl.dataset.length);
   console.log(event.currentTarget.value.length);
   console.log(event.currentTarget.value);

   if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
      inputEl.classList.add(`valid`);
      return;
   }
   inputEl.classList.add(`invalid`);
   return;
}
