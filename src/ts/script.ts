import initializeSelectPic from './select.js'
import initializeEditPic from './edit.js'

const desktopUploadLink = document.querySelector("#desktopUploadLink") as HTMLAnchorElement,
      mobileUploadLink = document.querySelector("#mobileUploadLink") as HTMLAnchorElement,
      fileInput = document.querySelector(".fileInput") as HTMLInputElement


desktopUploadLink.addEventListener("click", () =>{

    fileInput.click()

    const selectPic = initializeSelectPic(),
          editPic = initializeEditPic()

})

mobileUploadLink.addEventListener("click", () =>{

    fileInput.click()

    const selectPic = initializeSelectPic(),
          editPic = initializeEditPic()

})