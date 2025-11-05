const dartMode = localStorage.getItem('dark-mode');
const dartBtn= document.querySelector('#theme-switch');
const body = document.querySelector('body');

if(window.matchMedia('(prefers-color-scheme:dark)').matches){
    document.querySelector('body').classList.add('dark');
    if(!dartMode) localStorage.setItem('dark','active');
}else{
    if(body.className.includes('dark')){
        document.querySelector('body').classList.remove('dark');
        localStorage.removeItem('dark-mode');
    }
}


dartBtn.addEventListener('click',()=>{
    if(body.className.includes('dark')){
        document.querySelector('body').classList.remove('dark');
        localStorage.removeItem('dark-mode');
    }else{
        document.querySelector('body').classList.add('dark');
        localStorage.setItem('dark-mode','active');
    }
})