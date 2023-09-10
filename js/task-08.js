const formElem = document.querySelector(".login-form");

formElem.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
   event.preventDefault();
   const {
      elements: { email, password },
   } = event.currentTarget;

   if (email.value === "" || password.value === "") {
      return alert(`Все поля должны быть заполнены`);
   }

   console.log(`email: ${email.value}, Password: ${password.value}`);
   event.currentTarget.reset();
}
