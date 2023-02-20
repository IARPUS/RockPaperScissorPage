function getComputerChoice() {
  let selections = ["Rock", "Paper", "Scissor"];
  let choice = Math.floor(Math.random() * 3)
  return selections[choice];
}
function playRound(left, right) {
  let playerSelection = left + "";
  let computerSelection = right + "";
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection == 'rock' && computerSelection == 'paper' ||
    playerSelection == 'paper' && computerSelection == 'scissor' ||
    playerSelection == 'scissor' && computerSelection == 'rock') {
    return "loss";
  }
  else if (playerSelection == 'rock' && computerSelection == 'scissor' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissor' && computerSelection == 'paper') {
    return "win";
  }
  else {
    return "tie";
  }
}

let buttonsList = document.querySelectorAll("button.button");
let playerScoreText = document.querySelector("#playerScore");
let computerScoreText = document.querySelector("#computerScore");
let results = document.querySelector("#results");
let restart = document.querySelector("#restart");
let playerScore = 0;
let computerScore = 0;

buttonsList.forEach((button) => {
  if (button.id == "restart") {
    return;
  }
  button.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
      results.innerHTML = "Game is finished, press the restart button to play again!";
      return;
    }
    let computerChoice = getComputerChoice();
    let result = playRound(button.id, computerChoice);
    if (result == "win") {
      playerScore++;
      results.innerHTML = "You won because " + button.id + " beats " + computerChoice + "!";
    }
    else if (result == "loss") {
      computerScore++;
      results.innerHTML = "You lost because " + button.id + " loses against " + computerChoice + "!";
    }
    else {
      results.innerHTML = "It was a tie because you and the computer chose both " + button.id + "!";
    }
    playerScoreText.innerHTML = playerScore;
    computerScoreText.innerHTML = computerScore;
    if (playerScore == 5 || computerScore == 5) {
      results.innerHTML = "Finished";
      document.querySelector("#restart").style.visibility = "visible";
    }
  });
});

restart.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  results.innerHTML = "";
  document.querySelector("#restart").style.visibility = "hidden";
  playerScoreText.innerHTML = playerScore;
  computerScoreText.innerHTML = computerScore;
});
