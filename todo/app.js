const form = document.querySelector('.user__form');
// const formFileds = form.elements;
const inputs = form.querySelectorAll('input')
const submitBtn = form.querySelector('[type="submit"]');

// submitBtn.addEventListener('click', clearStorage);

function clearStorage() {
    
}


function changeHender() {
   localStorage.setItem(this.name, this.value)
}

function checkStorage() {
    for (let input of inputs) {
        input.value = localStorage.getItem(input.name)
    }
    attachEvents()
}

function attachEvents() {
    for (let input of inputs) {
        input.addEventListener('change', changeHender)
    }
}

checkStorage()