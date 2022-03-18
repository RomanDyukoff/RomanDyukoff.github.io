const perForm = document.querySelector('.person__form');
const inputs = document.querySelectorAll('input');
const addPerson = document.querySelector('.person__button');
const createBtn = document.querySelector('.header__create');

inputs.forEach(input => input.addEventListener('blur', check))
perForm.addEventListener('submit', handleSubmit)


function validata() {

    let isValid = true

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false
        }
    })

    return isValid
    
}

function check(e) {

    if (!e.target.value.trim()) {
        e.target.classList.add('notvalid')
    } else {
        e.target.classList.remove('notvalid')
    }

}

function handleSubmit(e) {
    e.preventDefault()
  
    if (validata()) {
        {
            name = perForm.querySelectorAll('.person__input')[0].value,
            surname = perForm.querySelectorAll('.person__input')[1].value,
            age = perForm.querySelectorAll('.person__input')[2].value
            email = perForm.querySelectorAll('.person__input')[3].value
            password = perForm.querySelectorAll('.person__input')[4].value
        }
        perForm.reset()
    } else {
        alert('Заполни все окна');
    }
}

createBtn.addEventListener('click', regWindow)


function regWindow() {
  let per = document.querySelector('.person');
  let signIn = document.querySelector('.signin');

  per.classList.remove('novisible')
  signIn.classList.add('novisible')
}