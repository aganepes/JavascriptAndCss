const showcase=document.querySelector('.showcase');
const toggleMenu = document.querySelector('.toggle');

toggleMenu.addEventListener('click',function() {
    toggleMenu.classList.toggle('active')
    showcase.classList.toggle('active')
})