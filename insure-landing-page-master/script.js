const menu = document.getElementById('menu')
const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show')
    menu.classList.toggle('show')
})