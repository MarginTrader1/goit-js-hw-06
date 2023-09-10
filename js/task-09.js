function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const buttonElement = document.querySelector(".change-color");
const pElement = document.querySelector(".color");
const bodyElement = document.querySelector("body");

buttonElement.addEventListener(`click`, handleClick);

function handleClick(event) {
   const randomColor = getRandomHexColor();
   pElement.textContent = randomColor;

   console.log(bodyElement.style);

   bodyElement.style.backgroundColor = randomColor;
}
