const userName = document.getElementById('name'),
      userlastName = document.getElementById('lastname'),
      userAge = document.getElementById('age'),
      userBtn = document.querySelector('.user__button'),
      input = document.querySelector('.user__input');
const todoUser = [];


userBtn.addEventListener('click', () => {

  const user = {
    name: userName.value,
    lastName: userlastName.value,
    age: userAge.value,
  }

  todoUser.push(user)

  console.log(todoUser);
})

const addTaskBtn = document.querySelector('.todo__addtask'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.modal__close');

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})



