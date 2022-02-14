
document.querySelector("#toastbtn").addEventListener("click", () => {
    document.querySelector("#toast").style.display="flex";
    setTimeout(() => {
      document.querySelector("#toast").style.display="none"
  
    }, 3000)
  })
  document.querySelector("#dismiss").addEventListener("click",()=>{
    document.querySelector("#toast").style.display="none"
  })