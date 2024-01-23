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

      const container = document.querySelector(".container") as HTMLDivElement

      const infoContainer = document.createElement("div")

      infoContainer.className = "infoContainer"

      infoContainer.textContent =  selectPicState.error || selectPicState.info
      
      container.appendChild(infoContainer)

      const body = document.querySelector("body") as HTMLBodyElement

      body.classList.add("infoContainerOverlay")

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