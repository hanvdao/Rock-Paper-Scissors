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
      return "You lose! Paper beats Rock!";
    }
    if (computerSelection == "ROCK") {
      return "It's a tie!";
    }
    if (computerSelection == "SCISSORS") {
      return "You win! Rock beats Scissors!";
    }
  } else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection == "PAPER") {
      return "It's a tie!";
    }
    if (computerSelection == "ROCK") {
      return "You win! Paper beats Rock";
    }
    if (computerSelection == "SCISSORS") {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerSelection.toUpperCase() == "SCISSORS") {
    if (computerSelection == "PAPER") {
      return "You win! Scissors beats Paper";
    }
    if (computerSelection == "ROCK") {
      return "You lose! Rock beats Scissors";
    }
    if (computerSelection == "SCISSORS") {
      return "It's a tie!";
    }
  }
}

function game() {
  let i = 0;
  while (i < 5) {
    const playerSelection = prompt("Enter your selection");
    const computerSelection = computerPlay();
    console.log(singleRound(playerSelection, computerSelection));
  }
}

game();
