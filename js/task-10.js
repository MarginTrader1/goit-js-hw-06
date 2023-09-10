// рандомный цвет
function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const createBtn = document.querySelector(" button[data-create]");
const destroyBtn = document.querySelector(" button[data-destroy]");
const divBoxElement = document.getElementById("boxes");

// вешаем слушатель на кнопку Create
createBtn.addEventListener("click", () => {
   // получаем доступ к велью Inputa --> возвращает число
   const inputValue = document.querySelector(`input`).value;

   //создаем разметку
   const markup = createBoxes(inputValue).join("");

   //вставляем разметку в дом-дерево
   divBoxElement.innerHTML = markup;
});

// вешаем слушатель на кнопку Destroy
destroyBtn.addEventListener("click", () => {
   divBoxElement.innerHTML = "";
});

//функция соpдания разметки через цикл --> возвращает массив 
function createBoxes(amount) {
   let markupArray = [];

   for (let i = 0; i < amount; i++) {
      const color = getRandomHexColor();

      const markup = `
      <div style="width: ${30 + i * 10}px; 
      height: ${30 + i * 10}px; 
      background-color:${color};
      display: block"></div>
      `;

      markupArray.push(markup);
   }
   return markupArray;
}
