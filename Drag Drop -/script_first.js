const items = document.getElementsByClassName('item')

let itemsLength=items.length
let itemHeight=50

let isDragging=false
let index=null
let offsetY=null
let countItem=0

document.addEventListener('mousedown',(e)=>{
    index=e.target.getAttribute('key')
    if(index) isDragging=true
    offsetY=e.clientY-items[Number(index)].clientTop
})

document.addEventListener('mouseup',(e)=>{
    isDragging=false
    index=null
})

document.addEventListener('mousemove',(e)=>{
    if(isDragging && e.target.getAttribute('key')==index){
        let style=window.getComputedStyle(items[index])
        
        if(countItem==0||(countItem<0 && countItem>=-(index+0.2)) || (countItem>0 && countItem<=itemsLength-index-0.8)) items[index].style.transform=`translatey(${e.clientY-offsetY}px)`
        let getTranslateInMatrix=style.transform.match(/matrix\(([^)]+)\)/)
        if(getTranslateInMatrix){
            let translateY=getTranslateInMatrix[1].split(',')[5]
            countItem=translateY/itemHeight
            let moveIndex=Number(index)+Math.round(countItem)

            if(Math.abs(countItem-Math.floor(countItem))==0.5){
                console.log(moveIndex)
                // console.log(moveIndex)
                if(items[moveIndex].style.transform){
                    items[moveIndex].style.transform=''
                    console.log('down:',moveIndex)
                }
                else{
                    items[moveIndex].style.transform=`translatey(${itemHeight}px)`
                    console.log('up:',moveIndex)
                }
            }
                

                // if((e.clientY-offsetY)<(itemHeight/2) && index!=0)
                //     items[index].style.transform=''
                
                // if(divideItem==-(0.5+countItem)){
                //     items[moveItemIndex].style.transform=`translatey(${itemHeight}px)`
                //     moveItemIndex++
                // }
                // if(divideItem==(0.5+countItem)){
                //     items[moveItemIndex].style.transform=`translatey(${itemHeight}px)`
                //     moveItemIndex--
                // }
        }
    }
    
})

