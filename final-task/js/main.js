const userName = document.getElementById('name'),
      userlastName = document.getElementById('lastname'),
      userAge = document.getElementById('age'),
      userBtn = document.querySelector('.user__button'),
      input = document.querySelector('.user__input');

      
const addTaskBtn = document.querySelector('.todo__addtask'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.modal__close'),
      overlay = document.querySelector('.modal__overlay');

addTaskBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
})


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
})

overlay.addEventListener('click', () => {
  modal.style.display = 'none';
})

class DataBase {

  recordDataBase(value) {

  }

  getFromDataBase(value) {

  }

  removeFromDataBase(value) {

  }
}

const dbService = new DataBase();

class Users {
  constructor(name, lastname, age, id) {
    this.toDo = [];
    this.name = name;
    this.lastname = lastname;
    this.age = age;
    this.id = id
  }
}

function createItem({title, isChecked, id}) {

}

const todoListContainer = document.querySelector('.todo__list');






// function createItem({ title, isChecked, id }) {
//   return `
//           <li id="${id}" class="todo__item ${isChecked ? 'done' : ''}">
//             <input class="todo__checkbox" type="checkbox" ${isChecked ? 'checked' : ''} name="" id="">
//             <label class="todo__label" for="checkbox">${title}</label>
//             <button data-item-id="${id}" class="todo__remove">remove</button>
//           </li>
//           `
// }





// class DbSevice {
//   recordToDb(value) {
//   console.log('🚀', 'recordToDb');
    
//   }

//   getFromDb(value) {

//   }

//   removeFromDb(value) {
//   console.log('🚀 ~ removeFromDb ~ value', value);

//   }
// }

// const dbService = new DbSevice();





// class User {
//   constructor(name, age, surname, id) {
//     this.todos = [];
//   }



// }

// const users = [
//   {
//     id: 1,
//     name: 'Roma',
//     todos: [
//       {
//         id: 1,
//         title: 'title',
//         isChecked: false,
//       },
//       {
//         id: 2,
//         title: 'title2',
//         isChecked: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Katya',
//     todos: [
//       {
//         id: 1,
//         title: 'title',
//         isChecked: false,
//       },
//       {
//         id: 2,
//         title: 'title2',
//         isChecked: true,
//       },
//     ],
//   },
// ]


// const todoListContainer = document.querySelector('#list')

// todoListContainer.addEventListener('click', (e) => {
//   if (e.target.dataset.itemId) {
//     dbService.removeFromDb(e.target.dataset.itemId)
//   }
  
// })

// function createItem({ title, isChecked, id }) {
//   return `
//           <li id="${id}" class="todo__item ${isChecked ? 'done' : ''}">
//             <input type="checkbox" ${isChecked ? 'checked' : ''} name="" id="">
//             <span>${title}</span>
//             <button data-item-id="${id}" class="remove-btn">remove</button>
//           </li>
//           `
// }

// let res = ''

// for (const todo of users[0].todos) {
//   res += createItem(todo) // props
// }

// todoListContainer.innerHTML = res