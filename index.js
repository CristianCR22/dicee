var randomNumber1 = Math.floor(((Math.random()*6)+1));
var imgOneClass = ".img1" + randomNumber1;
document.querySelector(imgOneClass).classList.add("visible");


var randomNumber2 = Math.floor(((Math.random()*6)+1));
var imgTwoClass = ".img2" + randomNumber2;
document.querySelector(imgTwoClass).classList.add("visible");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if (randomNumber1==randomNumber2) {
  document.querySelector("h1").textContent = "It's a draft!";
}
else {
  document.querySelector("h1").textContent = " Player 2 Wins! 🚩";
}
