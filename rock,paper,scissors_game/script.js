// let name = prompt("enter your name?");
let heading = document.querySelector(".heading");
heading.classList.add("player");
heading.innerText = `${name}`;
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const restartButton = document.getElementById("restart-btn");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    console.log(userChoice);
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
  console.log(computerChoice);
}
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw &#128125;";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win &#127774;";
  } else if (computerChoice === "scissors " && userChoice === "rock") {
    result = "You win &#127774;";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win &#127774;";
  } else {
    result = "Computer wins &#128123;";
  }
  resultDisplay.innerHTML = result;
  console.log(result);
}

restartButton.addEventListener("click", () => {
  // Clear user and computer choice displays
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";

  // Reset result display
  resultDisplay.innerHTML = "Make your choice to start playing!";

  // Reset userChoice, computerChoice, and result variables
  userChoice = null;
  computerChoice = null;
  result = null;
});
