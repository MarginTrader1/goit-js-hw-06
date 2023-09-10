const inputEl = document.querySelector(`input`);
inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
   //необходимая длинна слова
   const fixWordLength = Number(inputEl.dataset.length);

   //длинна введенного слова
   const inputWordLength = event.currentTarget.value.length;

   //количество классов
   const classList = inputEl.classList.length;

   /* проверки на разные вводы и замена класса*/
   if (inputWordLength !== fixWordLength && classList === 0) {
      inputEl.classList.add(`invalid`);
      return;
   }

   if (inputWordLength !== fixWordLength && classList !== 0) {
      inputEl.classList.replace(`valid`, `invalid`);
      return;
   }

   if (inputWordLength === fixWordLength && classList !== 0) {
      inputEl.classList.replace(`invalid`, `valid`);
      return;
   }

   inputEl.classList.add(`valid`);
   return;
}
