const acceskey= "UHuo86GALq5Imn9Fj5_GR_qu2-nQMe4-CVyBRbP-zrk";
const forme1 = document.querySelector("form");
const inputvalue=document.querySelector("#serch-input");
const sercbutton = document.querySelector("#serch-button");
const show = document.querySelector("#showMore");
const serchres=document.querySelector(".serch-results");
let inputData = "";
let page =1;
async function showImage(){
    inputData = inputvalue.value;

    
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${acceskey}`

    const response = await fetch(url)
    const data =await response.json()
    const  results = data.results;
    if (page === 1)
     {
        serchres.innerHTML="";
    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("serch-result");
        const imagere = document.createElement('img');
        imagere.src=result.urls.small;
        imagere.alt=result.alt_description;
        const imaglink = document.createElement('a');
        imaglink.href=result.links.html;
        imaglink.target="_blank";
        imaglink.textContent=result.description;

        imageWrapper.appendChild(imagere);
        imageWrapper.appendChild(imaglink);
        serchres.appendChild(imageWrapper)
    });
    page ++
    if(page >1)
    {
        show.style.display="block"
    }
}
forme1.addEventListener("submit" , (e) =>{
    // alert("Zaid");
  e.preventDefault()
  page=1;
  showImage()
})
show.addEventListener("click" , ()=>{
    
    showImage()
  })