const desktopUploadLink = document.querySelector("#desktopUploadLink") as HTMLAnchorElement,
      mobileUploadLink = document.querySelector("#mobileUploadLink") as HTMLAnchorElement,
      fileInput = document.querySelector(".fileInput") as HTMLInputElement


desktopUploadLink.addEventListener("click", () =>{

    fileInput.click()

})

mobileUploadLink.addEventListener("click", () =>{

    fileInput.click()

})