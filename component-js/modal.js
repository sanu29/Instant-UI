const modal = document.querySelector(".modal")
document.querySelector("#modal-btn").addEventListener("click", () => {
  modal.style.display = 'block';
})
const close = document.querySelector("#close")
close.addEventListener("click",()=>{
    modal.style.display='none';
})
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
