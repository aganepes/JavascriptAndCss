const Button=document.querySelector('button'),
      span = document.querySelector('span');
      
Button.addEventListener('click',(event)=>{
const circle=document.createElement('span');
    circle.classList.add('circle');
    circle.style.top=`${event.offsetY}px`;
    circle.style.left=`${event.offsetX}px`;
    Button.appendChild(circle);
    setTimeout(()=>circle.remove(),1000);
})
