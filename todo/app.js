const perForm = document.querySelector('.person__form');
const inputs = document.querySelectorAll('.person__input');

inputs.forEach(input => input.addEventListener('blur', handleEvents))

function handleEvents(e) {

    if (!e.target.value.trim()) {
        e.target.style.borderBottom = '1px solid red'
    } else {
        e.target.style.borderBottom = '1px solid green'
    }
}