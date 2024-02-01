import initializeSelectPic from './select.js'

const initializeUploadPic = () =>{

  document.addEventListener("editPicReady", () =>{

    const selectPic = initializeSelectPic(),  
          infoContainer = selectPic.getInfoContainerDiv(),
          leftButton = document.querySelector("#leftButton") as HTMLButtonElement,
          rightButton = document.querySelector("#rightButton") as HTMLButtonElement,
          container = document.querySelector(".container") as HTMLDivElement,
          editPic = document.querySelector(".editPic") as HTMLDivElement

    leftButton.addEventListener("click", () =>{
       
        const photo = document.querySelector(".photo img") as HTMLImageElement 
    
        container.removeChild(editPic)

        infoContainer()

        const selectImage = document.querySelector(".selectImage img") as HTMLImageElement

        selectImage.src = photo.src
    
    })


    rightButton.addEventListener("click", () =>{
    
      addProgressBar()
    
    })


    const addProgressBar = () =>{
    
      container.removeChild(editPic)

      const progressContainer = document.createElement("div")

      progressContainer.classList.add("progress-container", "editPic")

      const progressBar = document.createElement("div")

      progressBar.className = "progress-bar"

      progressContainer.appendChild(progressBar)

      container.appendChild(progressContainer)
    
    }
  
  })

}

export default initializeUploadPic