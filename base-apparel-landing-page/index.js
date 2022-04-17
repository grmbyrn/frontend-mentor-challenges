const inputEl = document.querySelector('#email')
const btn = document.querySelector('#submit')
const iconError = document.querySelector('.icon-error')
const textError = document.querySelector('.text-error')
const form = document.querySelector('.form')
const regEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
let errors = []

btn.addEventListener('click', e => {
    // remove success class
    textError.classList.remove('text-success')

    // reset errors
    errors = []
    // prevent default action of form
    e.preventDefault()
    // validate email address
    const email = inputEl.value

    if(email === '' || email === undefined){
        errors.push('Please provide us your email')
        // show error icon
        iconError.style.display = 'block'
        textError.innerHTML = errors[0]
    } else if (!email.match(regEmail)){
        errors.push('Please provide us your valid email')
        // show error
        iconError.style.display = 'block'
        textError.innerHTML = errors[0]
    }

    if(!errors.length > 0){
        // hide error icon
        iconError.style.display = 'none'
        // show success
        textError.classList.add('text-success')
        textError.innerHTML = ('Thank you for subscribing to our newsletter')
    }
})