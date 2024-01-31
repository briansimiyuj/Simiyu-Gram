const initializeEditPic = () =>{

  document.addEventListener("infoContainerReady", () =>{
  
      const leftButton = document.querySelector("#leftButton") as HTMLButtonElement,
            rightButton = document.querySelector("#rightButton") as HTMLButtonElement,
            container = document.querySelector(".container") as HTMLDivElement,
            infoContainer = document.querySelector(".infoContainer") as HTMLDivElement,
            selectImage = document.querySelector(".selectImage img") as HTMLImageElement

    leftButton.addEventListener("click", () =>{
    
      container.removeChild(infoContainer)    

      document.body.classList.remove("infoContainerOverlay")
    
    })


    rightButton.addEventListener("click", () =>{

      container.removeChild(infoContainer)

      addEditPic()
    
    })



    const addEditPic = () =>{
    
      const editPic = document.createElement("div")

      editPic.className = "editPic"

      const buttons = document.createElement("div")

      buttons.className = "buttons"

      const rightButton = document.createElement("button")

      rightButton.id = "rightButton"

      rightButton.innerText = "Next"

      const leftButton = document.createElement("button")

      leftButton.id = "leftButton"

      leftButton.innerText = "Back"

      buttons.append(leftButton, rightButton)

      const commentSection = document.createElement("div")

      commentSection.className = "comments-section"

      const photo = document.createElement("div")

      photo.className = "photo"

      const img = document.createElement("img")

      img.src = selectImage.src

      photo.appendChild(img)


      const comments = document.createElement("div")

      comments.className = "comments"

      const form = document.createElement("form")

      const textarea = document.createElement("textarea")

      textarea.placeholder = "Add captions here"

      form.appendChild(textarea)

      comments.appendChild(form)

      commentSection.append(photo, comments)

      editPic.append(buttons, commentSection)

      container.appendChild(editPic)

      const event = new Event("editPicReady")

      document.dispatchEvent(event)
    
    }
  
  })

};

export default initializeEditPic 