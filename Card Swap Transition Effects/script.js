
document.querySelector('a.front').addEventListener('click',(event)=>{
    for(const element of document.querySelectorAll('.card')){
        element.classList.add('active')
    }
})

document.querySelector('a.back').addEventListener('click',()=>{
    for(const element of document.querySelectorAll('.card')){
        element.classList.remove('active')
    }
})