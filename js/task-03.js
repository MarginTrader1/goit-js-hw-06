const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// вариант 1

const ulEl = document.querySelector(".gallery");

  const createElement = images.map((element) => {

const liEl = document.createElement(`li`);

const imageEl = document.createElement(`img`);
imageEl.src = element.url;
imageEl.alt = element.alt;
liEl.appendChild(imageEl);

return liEl;

});

ulEl.append(...createElement);

// вариант 2

const createElementImageMarkup = ({url, alt}) => {

  return `<li><img src="${url}" alt="${alt}"></li>`;
  };

  const createGallery = images.map(createElementImageMarkup).join('');

ulEl.insertAdjacentHTML(`beforeend`, createGallery);
  








