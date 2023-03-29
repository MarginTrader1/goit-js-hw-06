const liElem = document.querySelector("li.item");
console.log(liElem)

const liElemList = document.querySelectorAll("li.item");
console.log(liElemList)
console.log(`Number of categories:`, liElemList.length);

liElemList.forEach(element => {
    console.log(`Category:`, element.firstElementChild.textContent);
    console.log(`Elements:`, element.lastElementChild.children.length); 
});




