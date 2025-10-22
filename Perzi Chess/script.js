const cont= document.querySelector('#cont')
const matrix=Array.from({length:8},()=>Array.from({length:8}).fill(0))

const FillOfCells=(array,row,cell)=>{
    array[row][cell]=1
    for(let i=0; i<8;i++){
        if(row-i>=0&&cell-i>=0){
            array[row-i][cell-i]=1
            if(!cont.children[row-i].children[cell-i].className.includes('fill-cell')){
                cont.children[row-i].children[cell-i].className+=' fill-cell'
            }
        }
        if(row-i>=0&&cell+i<8){
            array[row-i][cell+i]=1
            if(!cont.children[row-i].children[cell+i].className.includes(' fill-cell')){
                cont.children[row-i].children[cell+i].className+=' fill-cell'
            }
        }
        if(row+i<8&&cell+i<8){
            array[row+i][cell+i]=1
            if(!cont.children[row+i].children[cell+i].className.includes(' fill-cell')){
                cont.children[row+i].children[cell+i].className+=' fill-cell'
            }
        }
        if(row+i<8&&cell-i>=0){
            array[row+i][cell-i]=1
            if(!cont.children[row+i].children[cell-i].className.includes(' fill-cell')){
                cont.children[row+i].children[cell-i].className+=' fill-cell'
            }
        }
        if(cell+i<8){
            array[row][cell+i]=1
            if(!cont.children[row].children[cell+i].className.includes(' fill-cell')){
                cont.children[row].children[cell+i].className+=' fill-cell'
            }
        }
        if(row+i<8){
            array[row+i][cell]=1
            if(!cont.children[row+i].children[cell].className.includes(' fill-cell')){
                cont.children[row+i].children[cell].className+=' fill-cell'
            }
        }
        if(cell-i>=0){
            array[row][cell-i]=1
            if(!cont.children[row].children[cell-i].className.includes(' fill-cell')){
                cont.children[row].children[cell-i].className+=' fill-cell'
            }
        }
        if(row-i>=0){
            array[row-i][cell]=1
            if(!cont.children[row-i].children[cell].className.includes(' fill-cell')){
                cont.children[row-i].children[cell].className+=' fill-cell'
            }
        }
    }

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if(!cont.children[i].children[j].children.length){
                cont.children[i].children[j].textContent=array[i][j]
            }
            if(i==row && j==cell){
                cont.children[i].children[j].innerHTML='<img src="./imgs/perzi.svg" width="20px" height="20px"/>'
            }
        }
    }

}

let arr=matrix.map((el)=>[...el])

for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
        cont.children[row].children[column].addEventListener('click',()=>{
            FillOfCells(arr,row,column)
        })
    }
}
