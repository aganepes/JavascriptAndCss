const backgroundImages=[
   "https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
   "https://images.unsplash.com/photo-1602922960044-d48ce791d3c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
   "https://images.unsplash.com/photo-1526900913101-88c16676ca02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
   "https://images.unsplash.com/photo-1513818433747-5f175a60caee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW1nfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
]

const body=document.querySelector('body'),
    arrowLeft=document.querySelector('.arrow-left'),
    arrowRight=document.querySelector('.arrow-right'),
    slider=document.querySelector('.slider');


let SliderCount=0;

let setBackground =(arg)=>{
    slider.style.backgroundImage=`url(${backgroundImages[arg]})`;
    body.style.backgroundImage=`url(${backgroundImages[arg]})`;
};

arrowLeft.addEventListener('click',()=>{
    SliderCount--;
    if(SliderCount<0) SliderCount=backgroundImages.length-1;
    setBackground(SliderCount);
})
arrowRight.addEventListener('click',()=>{
    SliderCount++;
    if(SliderCount>backgroundImages.length-1) SliderCount=0;
    setBackground(SliderCount);
    console.log(SliderCount)
})
setBackground(SliderCount);