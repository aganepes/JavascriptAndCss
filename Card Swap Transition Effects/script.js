
document.querySelector('.front').addEventListener('click',(event)=>{
    console.dir(event.target)
    for(const element of document.querySelectorAll('.card')){
        element.classList.add('active')
    }
})

document.querySelector('.back').addEventListener('click',()=>{
    for(const element of document.querySelectorAll('.card')){
        element.classList.remove('active')
    }
})