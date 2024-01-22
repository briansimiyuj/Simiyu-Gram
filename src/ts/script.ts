import initializeSelectPic from './select.js'


const uploadLinks = document.querySelectorAll(".uploadLink") as NodeListOf<HTMLAnchorElement>;

uploadLinks.forEach((link) =>{

    const fileInput = document.querySelector(".fileInput") as HTMLInputElement,
          selectPic = initializeSelectPic()

    link.addEventListener("click", () =>{
    
        fileInput.click()
    
    })
  
})
