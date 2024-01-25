import initializeSelectPic from './select.js'
import initializeEditPic from './edit.js'


const desktopUploadLink = document.querySelector("#desktopUploadLink") as HTMLAnchorElement,
      mobileUploadLink = document.querySelector("#mobileUploadLink") as HTMLAnchorElement,
      fileInput = document.querySelector(".fileInput") as HTMLInputElement

      const selectPic = initializeSelectPic(),
            editPic =   initializeEditPic()


desktopUploadLink.addEventListener("click", () =>{

    fileInput.click()  

})

mobileUploadLink.addEventListener("click", () =>{

    fileInput.click()

})