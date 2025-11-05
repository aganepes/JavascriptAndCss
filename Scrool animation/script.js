const contianer=document.querySelector('.contianer');
const boxs=document.querySelectorAll('.box')

let boxAnimation=()=>{
    let windowTop=window.innerHeight*0.8;
    boxs.forEach((item)=>{
        if(windowTop>item.getBoundingClientRect().top){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}

boxAnimation();
window.addEventListener('scroll', boxAnimation);