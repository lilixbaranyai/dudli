/*Beküldés gomb*/
const button1 = document.getElementById('ending')
button1.addEventListener("click", bekuldes)
function bekuldes(){
  alert("Beküldve!")
}
// if (placeholder = null){
//   alert("Nem teljes a kitöltés!")
// }
// kellene jelzés, hogyha valami üres, hogy akkor ne a beküldve üzenetet dobja ki

const button2 = document.getElementById('date')
button2.addEventListener("click", ido)
function ido(){
  button2.classList.toggle('selected');
}

