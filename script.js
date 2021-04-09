let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection.toUpperCase() == "ROCK") {
    if (computerSelection == "PAPER") {
      computerScore++;
      return "You lose! Computer selects Paper!";
    }
    if (computerSelection == "ROCK") {
      return "It's a tie!";
    }
    if (computerSelection == "SCISSORS") {
      playerScore++;
      return "You win! Computer selects Scissors!";
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "PAPER") {
      return "It's a tie!";
    }
    if (computerSelection == "ROCK") {
      playerScore++;
      return "You win! Computer selects Rock";
    }
    if (computerSelection == "SCISSORS") {
      computerScore++;
      return "You lose! Computer selects Scissors";
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "PAPER") {
      playerScore++;
      return "You win! Computer selects Paper";
    }
    if (computerSelection == "ROCK") {
      computerScore++;
      return "You lose! Computer selects Rock";
    }
    if (computerSelection == "SCISSORS") {
      return "It's a tie!";
    }
  }
}

const playerSelections = document.querySelector(".playerSelections");
playerSelections.addEventListener("click", game);

function game(event) {
  if (playerScore == 5) {
    alert("Game Over! You win the game!");
    location.reload();
  } else if (computerScore == 5) {
    alert("Game Over! Computer wins the game!");
    location.reload();
  } else {
    let playerSelection = "";

    if (event.target.classList[0] != "playerSelections") {
      playerSelection = event.target.classList[0];
    } else {
      return;
    }
    let computerSelection = computerPlay();

    //showing message
    let message = document.createElement("h1");
    message.textContent = singleRound(playerSelection, computerSelection);
    const messageDiv = document.querySelector(".message");
    messageDiv.append("");
    messageDiv.replaceChild(message, messageDiv.childNodes[0]);

    //showing scores
    const playerScoreDiv = document.querySelector(".playerScore");
    const computerScoreDiv = document.querySelector(".computerScore");

    playerScoreDiv.textContent = " " + playerScore;
    computerScoreDiv.textContent = " " + computerScore;
  }
}
