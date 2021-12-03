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

// class DataBase {
//   recordToDb(value) {
//   console.log('🚀', 'recordToDb');
    
//   }

//   getFromDb(value) {

//   }

//   removeFromDb() {
//     document.querySelector('.todo__delete').addEventListener('click', () => {
//       this.remove()
//     })
//   }
// }

// const servisDB = new DataBase();

// class User {
//   constructor(name, lastname, age, id) {
//     this.todo = [];
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
//     this.id = id;
//   }
// }

// const users = [
//   {
//     name: 'Roma',
//     lastname: 'Dyukov',
//     age: 27,
//     id: 1,
//     todo: [
//       {
//         id: 1,
//         title: 'title',
//         description: 'bla bla bla',
//         isChecked: false,
//       },
//       {
//         id: 2,
//         title: 'title2',
//         description: 'bla bla bla',
//         isChecked: true,
//       },
//     ],
//   },
//   {
//     name: 'Katya',
//     lastname: 'Kotova',
//     age: 31,
//     id: 2,
//     todo: [
//       {
//         id: 1,
//         title: 'title',
//         description: 'bla bla bla',
//         isChecked: false,
//       },
//       {
//         id: 2,
//         title: 'title2',
//         description: 'bla bla bla',
//         isChecked: true,
//       },
//     ],
//   },
// ]

// const todoListContainer = document.querySelector('.todo__list');

// todoListContainer.addEventListener('click', (e) => {
//   if (e.target.dataset.itemId) {
//     servisDB.removeFromDb()
//   }
  
// })

// function createItem({ title, isChecked, id }) {
//   return `
//           <!-- <li class="todo__item" data-todo-state="active">
//             <input class="todo__chek" id="task" type="checkbox" name="task">
//             <label class="todo__lable" for="task">${title}</label>
//             <span class="todo__delete" data-todo-action="deleted">&#10006;</span>
//           </li> -->
//           `
// }

// let res = ''

// for (let value of users[0].todo) {
//   res += createItem(value) // props
// }

// todoListContainer.innerHTML = res;









