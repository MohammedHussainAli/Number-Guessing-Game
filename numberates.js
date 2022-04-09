const button = document.getElementById("checkButton");
const txt = document.getElementById("txt");
const num = document.getElementById("textBox");
let chancesTxt = document.getElementById("attemptCount");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number generated " + randomNumber);
let win=document.getElementById("container");
let lost=document.getElementById("container");
let number;
let Chances = 10;
chancesTxt.innerHTML = Chances;
function check(number) {
    if (number == randomNumber) {
      win.innerHTML="CONGRATS!! YOU WON THE GAME";
    }
    else if (number > randomNumber) {
      txt.innerHTML = "Enter a Small Number";
    } 
    else if(number < randomNumber) {
      txt.innerHTML = "Enter a Large Number";
    }
}
button.addEventListener("click", (e) => 
{
  console.log(num.value);
  Chances--;
  chancesTxt.innerHTML =  Chances;
  if (Chances == 0) {
    lost.innerHTML="SORRY!! BETTER LUCK NEXT TIME";
  }
  number = num.value;
  check(number);
  num.value="";
});
