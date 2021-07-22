let firtCard = getRndCard();
let secondCard = getRndCard();
let hasBlackJack = false;
let isAlive = false;
let cards = [firtCard, secondCard];
let sum = firtCard + secondCard;
let message = "";
let messageEl = document.getElementById("message-el");
console.log(messageEl);
let sumEl = document.getElementById("sum-el");
console.log(sumEl);
let cardEl = document.getElementById("card-el");
console.log(cardEl);
let player = {
  name: "Master",
  chips: 145,
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + " $" + player.chips;

function renderGame() {
  isAlive = true;

  cardEl.textContent = "Cards: ";
  for (let index = 0; index < cards.length; index++) {
    cardEl.textContent += cards[index] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
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

function getRndCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard > 10) {
    return 10;
  } else if (randomCard === 1) {
    return 11;
  } else {
    return randomCard;
  }
}

function newCard() {
  if (sum <= 21 && !hasBlackJack) {
    let newCardDrawed = getRndCard();
    cards.push(newCardDrawed);
    sum += newCardDrawed;
    renderGame();
    console.log("New card had been drawse ");
    console.log(newCardDrawed);
  }

  function retry()
  {
    location.reload();
    return false;
  }
}
