type SelectPicState ={
    file: File | null
    error: string | null
    info: string | null

}
  
const initializeSelectPic = () =>{

    const selectPicState: SelectPicState ={

      file: null,
      error: null,
      info: null,

    }
  
    const types: string[] = ['image/png', 'image/jpeg']


  
    const changeHandler = (event: Event) =>{

      const fileInput = event.target as HTMLInputElement,

            selected = fileInput.files && fileInput.files[0]

  
      if(selected && types.includes(selected.type)){

        selectPicState.file = selected

        selectPicState.error = null

        selectPicState.info = selected.name

      }else{

        selectPicState.file = null;

        selectPicState.error = 'Please select an image file (png or jpg)'

        selectPicState.info = null

      }
  
      updateView()

    }
  
    const updateView = () =>{

      document.body.classList.add("infoContainerOverlay")

      addInfoContainer()

    }


    const addInfoContainer = () =>{
    
      const infoContainer = document.createElement("div")

      infoContainer.className = "infoContainer"

      const buttons = document.createElement("div")

      buttons.className = "buttons"

      const leftButton = document.createElement("button")

      leftButton.id = "leftButton"

      leftButton.innerText = "Back"

      const rightButton = document.createElement("button")

      rightButton.id = "rightButton"

      rightButton.innerText = "Next"

      buttons.append(leftButton, rightButton)

      const selectImage = document.createElement("div")

      selectImage.className = "selectImage"

      const img = document.createElement("img")

      if(selectPicState.file){

        const reader = new FileReader()

        reader.onload = (e) =>{

          if(e.target && typeof e.target.result === 'string'){
            
            img.src = e.target.result

          }

        }

        reader.readAsDataURL(selectPicState.file);

      }

        img.alt = 'Selected Image Preview'

      

        selectImage.appendChild(img)

        infoContainer.append(buttons, selectImage)

        const container = document.querySelector(".container") as HTMLDivElement

        container.appendChild(infoContainer)

    }
  
    
    const fileInput = document.querySelector('.fileInput')

    if(fileInput) {
 
        fileInput.addEventListener('input', changeHandler)

    }
  
    return{

      getSelectPicState: () => selectPicState

    }

  }

export default initializeSelectPic