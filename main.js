/*Beküldés gomb*/
const button1 = document.getElementById('ending')
button1.addEventListener("click", bekuldes)
function bekuldes(){
  alert("Beküldve!")
}

const button2 = document.getElementById('date')
button2.addEventListener("click", ido)
function ido(){
  button2.classList.toggle('selected');
}