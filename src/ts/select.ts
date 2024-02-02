type SelectPicState ={
    file: File | null
    error: string | null
    info: string | null

}

type ContainerWrapper ={
  
  infoContainer: HTMLDivElement | null
  img: HTMLImageElement

}
  
const initializeSelectPic = () =>{

  let iContainer: HTMLDivElement | null = null

    const selectPicState: SelectPicState ={

      file: null,
      error: null,
      info: null,

    }

    const wrapper: ContainerWrapper ={

      infoContainer: null,
      img: new Image

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

      wrapper.img = new Image

      if(selectPicState.file){

        const reader = new FileReader()

        reader.onload = (e) =>{

          if(e.target && typeof e.target.result === 'string'){
            
            wrapper.img.src = e.target.result

          }

        }

        reader.readAsDataURL(selectPicState.file);

      }

        wrapper.img.alt = 'Selected Image Preview'

      

        selectImage.appendChild(wrapper.img)

        infoContainer.append(buttons, selectImage)

        const container = document.querySelector(".container") as HTMLDivElement

        container.appendChild(infoContainer)

        wrapper.infoContainer = infoContainer

        const event = new Event("infoContainerReady")

        if(selectPicState.file?.name){

          wrapper.img.setAttribute("data-name", selectPicState.file.name)

        }
          
        document.dispatchEvent(event)
      
      }  
  
    
    const fileInput = document.querySelector('.fileInput')

    if(fileInput) {
 
        fileInput.addEventListener('input', changeHandler)

    }
  
    return{

      getSelectPicState: () => selectPicState,

      getInfoContainer: () => wrapper.infoContainer,

      getImage: () => wrapper.img,

      getInfoContainerDiv: () => addInfoContainer

    }

  }

export default initializeSelectPic