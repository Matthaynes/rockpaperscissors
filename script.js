var userScore = 0, computerScore = 0;

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Not Valid Input! Choose rock, paper, or scissors.");
  }
}

function getComputerChoice() {
  var randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0: return 'rock';
      break;
    case 1: return 'paper';
      break;
    case 2: return 'scissors';
      break;
    default:
      console.log("Uh oh...");
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a Tie!";
  }
  else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerScore++;
      return "Computer Won :(";
    } else {
      userScore++;
      return "You Won!";
    }
  }
  else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerScore++;
      return "Computer Won :(";
    } else {
      userScore++;
      return "You Won!";
    }
  }
  else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      computerScore++;
      return "Computer Won :(";
    } else {
      userScore++;
      return "You Won!";
    }
  }
}

function displayWinner(winner) {
  document.getElementById('OUTPUT').innerHTML = winner;
}

function displayScore() {
  document.getElementById('comWin').innerHTML = computerScore;
  document.getElementById('uWin').innerHTML = userScore;
}


function playGame(choice) {
  var userChoice = getUserChoice(choice);
  var computerChoice = getComputerChoice();
  console.log("User - " + userChoice);
  console.log("Computer -" + computerChoice);

  displayWinner(determineWinner(userChoice, computerChoice));
  displayScore();

};