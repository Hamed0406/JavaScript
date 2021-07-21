let firtCard = 6;
let secondCard = 11;
let hasBlackJack = false;
let isAlive = true;

let sum = firtCard + secondCard+6;

let message=""

let messag1 = "Do you want to draw a new card ?";
let messag2 = "Whoo!! you have BLACKJACK!!";
let message3 = "You are out of the game";





function startGmae(){
    if (sum <= 20) {
        message=messag1
      isAlive = true;
    } else if (sum === 21) {
        message=messag2
      hasBlackJack = true;
    } else {
    message=message3
        isAlive=false
    }
    
    console.log(message)

}