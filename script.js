const rockButton = document.querySelector(".user-rock-btn");
const paperButton = document.querySelector(".user-paper-btn");
const scissorButton = document.querySelector(".user-scissor-btn");

let computerRandomNumber = 0;
let userNumber = 0;
// console.log(`userNumber: ${userNumber}`);
// console.log(`Computernumber: ${computerRandomNumber}`);

rockButton.addEventListener("click", () => {
  userNumber = 1;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
});

paperButton.addEventListener("click", () => {
  userNumber = 2;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
});

scissorButton.addEventListener("click", () => {
  userNumber = 3;
  computerRandomNumber = Math.floor(Math.random() * 3) + 1;
});
