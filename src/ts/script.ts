const uploadLinks = document.querySelectorAll(".uploadLink") as NodeListOf<HTMLAnchorElement>;

uploadLinks.forEach((link) =>{

    const fileInput = document.querySelector(".fileInput") as HTMLInputElement

    link.addEventListener("click", () =>{
    
        fileInput.click()
    
    })
  
})
