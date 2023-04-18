function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonElem = document.querySelector(".change-color");
const pElem = document.querySelector(".color");
const bodyElem = document.querySelector("body");


buttonElem.addEventListener(`click`, handleClick);


function handleClick(event) {
      
      const randomColor = getRandomHexColor();
      pElem.textContent = randomColor;
      bodyElem.style.backgroundColor = randomColor;
}