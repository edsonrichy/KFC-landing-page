const hamburger = document.querySelector('.hamburger')
const navbar = document.querySelector('ul')

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active')
    navbar.classList.toggle('active')
    
})

document.querySelectorAll('li').forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove('active')
    navbar.classList.remove('active')
})
)