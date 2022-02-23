// modal
const modalBtn = document.querySelector('.todo__openModal');
const modal = document.querySelector('#myModal');

modalBtn.addEventListener('click', openModal);

function openModal() {
  modal.classList.add('open');

  attachModalEvents();
}

function attachModalEvents() {
  modal.querySelector('.modal__close').addEventListener('click', closeModal);
  document.addEventListener('keydown', handelEscape);
  modal.addEventListener('click', handleOutside);
}

function handelEscape(e) {
   if (e.key === 'Escape') {
     closeModal()
   }
}

function handleOutside(e) {
  const isClickOutside = !!event.target.closest('.modal__content');

  if (!isClickOutside) {
    closeModal()
  }
}

function closeModal() {
  modal.classList.remove('open');

  dettachModalEvents()
}


function dettachModalEvents() {
  modal.querySelector('.modal__close').removeEventListener('click', closeModal);
  document.removeEventListener('keydown', handelEscape);
  modal.removeEventListener('click', handleOutside);
}

// todo


const addBtn = document.querySelector('.modal__button');
const todolist = document.querySelector('.todo__list');
const removeList = document.querySelector('.todo__delete');
const todo = [];


addBtn.addEventListener('click', () => {
  let todoTask = document.querySelector('.modal__task').value,
      todoDescription = document.querySelector('.modal__description').value;

  const task = {}
    task.todo = todoTask;
    task.description = todoDescription;
    task.check = false;
  
  let i = todo.length;
  todo[i] = task;
  console.log(todo);
  out();
})

function out() {
  let str = '';
  
  for (let value of todo) {
    str += value.todo
  }
  todolist.innerHTML = `<li class="todo__item" data-todo-state="active">
                          <input class="todo__chek" id="task" type="checkbox" name="task">
                          <label class="todo__lable" for="task">${str}</label>
                          <span class="todo__delete" data-todo-action="deleted">&#10006;</span>
                        </li></br>
                        `;

}





