let firtCard = getRndInteger();
let secondCard = getRndInteger();
let hasBlackJack = false;
let isAlive = true;

let sum = firtCard + secondCard;
let message = "";

let messageEl = document.getElementById("message-el");

console.log(messageEl);
let sumEl=document.getElementById("sum-el")
console.log(sumEl);
let cardEl=document.getElementById("card-el")
console.log(cardEl);


function renderGame() {
    cardEl.textContent="Cards: "+firtCard+" "+secondCard
    sumEl.textContent="Sum: "+sum
  if (sum <= 20) {
    message = "Do you want to draw a new card ?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Whoo!! you have BLACKJACK!!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function getRndInteger() {
  return Math.floor(Math.random() * (11 - 2 + 2)) + 2;
}


function newCard()
{
    if(sum<=21)
    {
    let thirdCard=getRndInteger()
    sum+=thirdCard
    renderGame()
    console.log("New card had been drawse ")
}
}