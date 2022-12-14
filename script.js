import { toggleSlider } from "./modules/toggleSlider.js";
import { addOneWin } from "./modules/addOneWin.js";

const rockButton = document.querySelector(".user-rock-btn");
const paperButton = document.querySelector(".user-paper-btn");
const scissorButton = document.querySelector(".user-scissor-btn");
const computerChoiceText = document.querySelector(".computer-choice-text");
const userChoiceText = document.querySelector(".user-choice-text");
const winOrLoseText = document.querySelector(".win-or-lose-text");
const playAgainBtn = document.querySelector(".play-again-btn");

let computerRandomNumber = 0; // Computer Score.
let userNumber = 0; // 1 = Rock | 2 = Paper | 3 = Scissor.

// When play-again-button is clicked ~> Trigger toggleSlider().
playAgainBtn.addEventListener("click", () => {
  toggleSlider();
});

// What happens if we choose Rock?
rockButton.addEventListener("click", () => {
  userNumber = 1;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Rock";
  console.log(userNumber);
  console.log(computerRandomNumber);

  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "Draw!";
    winOrLoseText.style.color = "yellow";
  } else if (computerRandomNumber == 2) {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "You Lose!";
    winOrLoseText.style.color = "red";
  } else {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "You Win!";
    winOrLoseText.style.color = "green";
    addOneWin();
  }
  toggleSlider();
});

// What happens if we choose Paper?
paperButton.addEventListener("click", () => {
  userNumber = 2;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Paper";

  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "Draw!";
    winOrLoseText.style.color = "yellow";
  } else if (computerRandomNumber == 1) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "You Win!";
    winOrLoseText.style.color = "green";
    addOneWin();
  } else {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "You Lose!";
    winOrLoseText.style.color = "red";
  }
  toggleSlider();
});

// What happens if we choose Scissor?
scissorButton.addEventListener("click", () => {
  userNumber = 3;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
  userChoiceText.innerText = "User: Scissor";

  if (userNumber == computerRandomNumber) {
    computerChoiceText.innerText = "CP: Scissor";
    winOrLoseText.innerText = "Draw!";
    winOrLoseText.style.color = "yellow";
  } else if (computerRandomNumber == 1) {
    computerChoiceText.innerText = "CP: Rock";
    winOrLoseText.innerText = "You Lose!";
    winOrLoseText.style.color = "red";
  } else {
    computerChoiceText.innerText = "CP: Paper";
    winOrLoseText.innerText = "You Win!";
    winOrLoseText.style.color = "green";
    addOneWin();
  }
  toggleSlider();
});
