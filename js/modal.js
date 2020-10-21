<!-- setTimeout(function(){ document.getElementById("popup").style.display="block"; },1000); 
-->


var modal = document.getElementById("popup");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];
var anchor = document.getElementsByClassName("submit-btn")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks on <A> (FORM BUTTON), close the modal
anchor.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

