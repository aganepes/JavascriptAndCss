import Colors from "../public/colors.js";
const menuElement = document.querySelector('.notes-container .menus-container');

Colors.forEach((color,index)=>{
    if(index === 0){
        menuElement.innerHTML += `
            <div class="color active" style="background-color: ${color.backgroundColor};" data-name="${color.color_id}"></div>
        `;
    }else{
        menuElement.innerHTML += `
            <div class="color" style="background-color: ${color.backgroundColor};" data-name="${color.color_id}"></div>
        `;
    }
});