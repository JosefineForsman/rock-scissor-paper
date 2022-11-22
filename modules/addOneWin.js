const winCounterText = document.querySelector("footer p");
let winCounter = 0; // Counter variable.

// This function adds one to your score if you win.
function addOneWin() {
  winCounter++;
  winCounterText.innerText = `Wins: ${winCounter}`;
}

export { addOneWin };
