const userName = document.getElementById('name'),
      userlastName = document.getElementById('lastname'),
      userAge = document.getElementById('age'),
      userBtn = document.querySelector('.user__button'),
      input = document.querySelector('.user__input');

      
const addTaskBtn = document.querySelector('.todo__btnAdd'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.modal__close'),
      overlay = document.querySelector('.modal__overlay');



// modal

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
})

// todo




