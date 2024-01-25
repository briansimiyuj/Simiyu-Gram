const initializeEditPic = () =>{

  document.addEventListener("infoContainerReady", () =>{
  
      const leftButton = document.querySelector("#leftButton") as HTMLButtonElement,
            container = document.querySelector(".container") as HTMLDivElement,
            infoContainer = document.querySelector(".infoContainer") as HTMLDivElement

    leftButton.addEventListener("click", () =>{
    
      container.removeChild(infoContainer)    

      document.body.classList.remove("infoContainerOverlay")
    
    })
  
  })

};

export default initializeEditPic 