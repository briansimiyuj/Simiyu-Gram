import initializeSelectPic from './select.js'

const initializeEditPic = () =>{

  removeInfoContainer()

}


const removeInfoContainer = () =>{

  const selectPicModule = initializeSelectPic()

  document.addEventListener("infoContainerReady", () =>{
  
    const infoContainer = selectPicModule.getInfoContainer()

    if(infoContainer){

      const leftButton = infoContainer.querySelector("#leftButton") as HTMLButtonElement

      leftButton.addEventListener("click", () =>{
      
          console.log('working')
      
      })

    }
  
  })

}

export default initializeEditPic 