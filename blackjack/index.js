let firtCard = getRndInteger();
let secondCard = getRndInteger();
let hasBlackJack = false;
let isAlive = true;

let sum = firtCard + secondCard;

let messageEl=document.getElementById("message-el")

console.log(messageEl)
let message= ""





function startGame(){

    if (sum <= 20) {
        message= "Do you want to draw a new card ?"
      isAlive = true;
    } else if (sum === 21) {
       message= "Whoo!! you have BLACKJACK!!"
      hasBlackJack = true;
    } else {
    message= "You are out of the game";
        isAlive=false
    }
    
   messageEl.textContent=message

}

function getRndInteger() {
    return Math.floor(Math.random() * (11 - 1 + 1) ) + 1;
  }