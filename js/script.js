// Setup the variables
const inputEl = document.querySelector('#passInput')
const buttonEl = document.querySelector('#btn')

// Events
buttonEl.addEventListener('click', togglePassword)

// Functions
function togglePassword() {
    if (buttonEl.getAttribute('data-text') == "show") {
        inputEl.setAttribute('type', 'text')
        buttonEl.setAttribute('data-text', 'hide')
        buttonEl.innerHTML = "Hide Password"
    } else {
        inputEl.setAttribute('type', 'password')
        buttonEl.setAttribute('data-text', 'show')
        buttonEl.innerHTML = "Show Password"
    }
}


