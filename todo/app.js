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

const allUsers = []; 

// signInForm.addEventListener('submit', handleSubmit);
perForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault()
  

    if (validata(perInputs)) {

        allUsers.push({
            name : perForm.querySelectorAll('.person__input')[0].value,
            surname : perForm.querySelectorAll('.person__input')[1].value,
            age : perForm.querySelectorAll('.person__input')[2].value,
            email : perForm.querySelectorAll('.person__input')[3].value,
            password : perForm.querySelectorAll('.person__input')[4].value
        })

        perForm.reset()
    } else {
        alert('Заполни все окна');
    }
}


// function saveToStorage(arr) {
    
// }


