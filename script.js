fetch("https://api.pexels.com/v1/search?query=people",{
  headers: {
    Authorization: "XznHIc9SGnp7L257ge9qMI846zA4kGGVE9Zd8ejuWbop19OHcDPYoIBc"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     const img=document.querySelector('.img');
     img.style.backgroundImage=`url(${data.photos[0].src.medium})`;
    //  img.innerHTML=`<img src="${data.photos[14].src.medium}" alt="men">`
   })