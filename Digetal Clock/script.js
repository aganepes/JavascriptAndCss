
const hr = document.querySelector('.circle.hr')
const mn = document.querySelector('.circle.mn')
const sc = document.querySelector('.circle.sc')
const degHr= document.querySelector('#hour')
const degMn= document.querySelector('#minut')
const degSc= document.querySelector('#second')
const degT= document.querySelector('#text')



setInterval(()=>{
    const date = new Date()
    let h=date.getHours()
    const m=date.getMinutes()
    const s=date.getSeconds()
    
    hr.style.transform = `rotateZ(${30*h}deg)`
    mn.style.transform = `rotateZ(${6*m}deg)`
    hr.style.transform = `rotateZ(${6*s}deg)`

    if(h>12){
        h=h-12;
        degT.textContent='PM'
    }

    degHr.textContent=h<10 ? '0'+h : h
    degMn.textContent=m<10 ? '0'+m : m 
    degSc.textContent=s<10 ? '0'+s : s
})
