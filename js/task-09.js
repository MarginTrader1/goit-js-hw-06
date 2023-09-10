function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const pElement = document.querySelector(".color");
const bodyElement = document.querySelector("body");

buttonElement.addEventListener(`click`, () => {
   const randomColor = getRandomHexColor();
   pElement.textContent = randomColor;
   bodyElement.style.backgroundColor = randomColor;
});
