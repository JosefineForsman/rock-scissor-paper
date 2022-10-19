const rockButton = document.querySelector(".user-rock-btn");
const paperButton = document.querySelector(".user-paper-btn");
const scissorButton = document.querySelector(".user-scissor-btn");
let computerChoiceText = document.querySelector(".computer-choice-text");
let userChoiceText = document.querySelector(".user-choice-text");
let winOrLoseText = document.querySelector(".win-or-lose-text");
let winCounterText = document.querySelector(".win-counter-text");
let slider = document.querySelector(".slider");
let playAgainBtn =document.querySelector(".play-again-btn");

let computerRandomNumber = 0;
let userNumber = 0;
let winCounter = 0;

function addOneWin() {
  winCounter++;
  winCounterText.innerText = `Wins: ${winCounter}`;
}

function toggleSlider() {
  slider.classList.toggle("show");
}
playAgainBtn.addEventListener ('click', () => {
toggleSlider();
})

rockButton.addEventListener("click", () => {
  userNumber = 1;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Rock";
  
  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "Draw!";
  } else if (computerRandomNumber == 2) {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "You Lose!";
  } else {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "You Win!";
    addOneWin();
  }
  toggleSlider();
});

paperButton.addEventListener("click", () => {
  userNumber = 2;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Paper";

  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "Draw!";
  } else if (computerRandomNumber == 1) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "You Win!";
    addOneWin();
  } else {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "You Lose!";
  }
  toggleSlider();
});

scissorButton.addEventListener("click", () => {
  userNumber = 3;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Scissor";

  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "Draw!";
  } else if (computerRandomNumber == 1) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "You Lose!";
  } else {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "You Win!";
    addOneWin();
  }
  toggleSlider();
});
