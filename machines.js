
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
window.addEventListener('click',()=>{
  modal.style.display = "block";
})
span.onclick = function(event){
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
  if (event.target == modal) {
    modal.style.display = "none";
  }
}