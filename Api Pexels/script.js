fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "XznHIc9SGnp7L257ge9qMI846zA4kGGVE9Zd8ejuWbop19OHcDPYoIBc"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
      const source =[];
      
     for(let photo of data.photos){
        const ulContent=`<li><h4>Autor:</h4> ${photo.photographer}</li>
        <li><h4>Autor address:</h4> ${photo.photographer_url}</li>
        <li><h4>Photo discription:</h4> ${photo.alt} </li>
        <li><h4>Width:</h4>${photo.width}px </li>
        <li><h4>Height:</h4>${photo.height}px</li>`;
        
        let backgroundImage=photo.src.medium; 
        
        source.push({ulContent,backgroundImage});
     }
     setInterval(()=>{
        const randomIndex=Math.floor (Math.random() * source.length);
        const {ulContent,backgroundImage}=source[randomIndex];

        document.querySelector('.title-container ul').innerHTML=ulContent;

        document.querySelector('.img').style.backgroundImage=`url("${backgroundImage}")`;

        document.querySelector('body').style.backgroundImage=`url("${backgroundImage}")`;

     },10000);
   })