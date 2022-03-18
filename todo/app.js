const perForm = document.querySelector('.person__form');
const inputs = document.querySelectorAll('.person__input');
const addPerson = document.querySelector('.person__button');

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

    const user = {};
  
    if (validata()) {
        user.name = perForm.querySelectorAll('.person__input')[0].value
        user.surname = perForm.querySelectorAll('.person__input')[1].value
        user.age = perForm.querySelectorAll('.person__input')[2].value
        perForm.reset()
    } else {
        alert('Заполни все окна');
    }
    console.log(user);
}


