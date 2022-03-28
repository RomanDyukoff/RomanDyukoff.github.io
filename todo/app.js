const perForm = document.querySelector('.person__form');
const signInForm = document.querySelector('.signin');

// функционал кнопки в шапке приложения

const createBtn = document.querySelector('.header__create');
createBtn.addEventListener('click', regWindow)


function regWindow(e) {

    let per = document.querySelector('.person');
    let signIn = document.querySelector('.signin');

    if (e.target.value === 'Create Person') {
        e.target.value = 'Sign In'
        per.classList.remove('novisible')
        signIn.classList.add('novisible')
    } else if (e.target.value === 'Sign In') {
        e.target.value = 'Create Person'
        per.classList.add('novisible')
        signIn.classList.remove('novisible')
    }

}

// функции для валидаций полей ввода

const inputsAll = document.querySelectorAll('input');
const perInputs = perForm.querySelectorAll('.person__input')
const signInInputs = signInForm.querySelectorAll('.signin__input')

perInputs.forEach(input => input.addEventListener('blur', check))
signInInputs.forEach(input => input.addEventListener('blur', check))

function check(e) {

    if (!e.target.value.trim()) {
        e.target.classList.add('notvalid')
    } else {
        e.target.classList.remove('notvalid')
    }

}

function validata(inputs) {

    let isValid = true

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false
        }
    })

    return isValid
    
}

// функционал полей для ввода

perForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
  

    if (validata(perInputs)) {

        saveToStorage({
            name: perForm.querySelector("input[name = 'name']").value,
            surname: perForm.querySelector("input[name = 'surname']").value,
            age: perForm.querySelector("input[name = 'age']").value,
            email: perForm.querySelector("input[name = 'email']").value,
            password: perForm.querySelector("input[name = 'password']").value
        })

        perForm.reset()

    } else {
        alert('Заполни все окна');
    }
}


function saveToStorage(user) {
    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];


   localStorage.setItem('allUsers', JSON.stringify([...allUsers, user]))
}

// function getToStorage(arr) {
//     localStorage.getItem('allUsers')
// }


