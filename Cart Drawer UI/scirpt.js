
const button = document.querySelector('.card-container .bottom-button');
const content = document.querySelector('.card-container .content');
const container = document.querySelector('.card-container');

button.addEventListener('click',(e)=>{
    button.classList.toggle('active');
    content.classList.toggle('active');
    container.classList.toggle('active');
});