
document.querySelector("#toast-button").addEventListener("click", () => {
    document.querySelector("#toast").style.display="flex";
    setTimeout(() => {
      document.querySelector("#toast").style.display="none"
  
    }, 3000)
  })
  document.querySelector("#toast-dismiss").addEventListener("click",()=>{
    document.querySelector("#toast").style.display="none"
  })