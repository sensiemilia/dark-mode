
const html = document.querySelector('html')
const check = document.querySelector('#checkbox')

checkbox.addEventListener('change', function(){
    html.classList.toggle('dark')
})