const form = document.querySelector('.user__form');
// const formFileds = form.elements;
const inputs = form.querySelectorAll('input')
const submitBtn = form.querySelector('.user__button');

submitBtn.setAttribute('disabled', true);

function validate() {
     inputs.forEach(input => {
      if (input.value.trim()) {
        submitBtn.removeAttribute('disabled');
      } else {
        submitBtn.setAttribute('disabled', true);
      }
  })      
}


// function changeHender() {
    
//    localStorage.setItem(this.name, this.value)
   
// }

// function checkStorage() {
//     for (let input of inputs) {
//         input.value = localStorage.getItem(input.name)
//     }
//     attachEvents()
//     validate()
// }

// function attachEvents() {
//     for (let input of inputs) {
//         input.addEventListener('change', changeHender)
//     }
// }

// checkStorage()