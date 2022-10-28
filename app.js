const mobileMenu = document.querySelector('#mobile-menu')
const mobileMenuClose = document.querySelector('#mobile-menu-close')
const nav = document.querySelector('.nav')

mobileMenu.addEventListener('click', function() {
    nav.style.display = 'block'
    document.body.classList.add('lock-scroll')
})

mobileMenuClose.addEventListener('click', function() {
    nav.style.display = 'none'
    document.body.classList.remove('lock-scroll')
})