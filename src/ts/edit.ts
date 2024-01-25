const initializeEditPic = () =>{

  document.addEventListener("infoContainerReady", () =>{
  
      const leftButton = document.querySelector("#leftButton") as HTMLButtonElement,
            rightButton = document.querySelector("#rightButton") as HTMLButtonElement,
            container = document.querySelector(".container") as HTMLDivElement,
            infoContainer = document.querySelector(".infoContainer") as HTMLDivElement

    leftButton.addEventListener("click", () =>{
    
      container.removeChild(infoContainer)    

      document.body.classList.remove("infoContainerOverlay")
    
    })


    rightButton.addEventListener("click", () =>{

      container.removeChild(infoContainer)
    
    })
  
  })

};

export default initializeEditPic 