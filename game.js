//rock paper scissors game in browser using javascript//

//declare the variables//
var userChoice = '';
var computerChoice = computerSelection();
var userScore = 0;
var round = 0;
var computerScore = 0;
var tieScore = 0;
var gameOn = true;

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  buttonSelected = 'rock';
  if (gameOn) playGame();
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  buttonSelected = 'paper';
  if (gameOn) playGame();
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  buttonSelected = 'scissors';
  if (gameOn) playGame();
});

function computerSelection() {
  var computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//function that plays the game and compares the user's choice to the computer's choice updating the score and checking round//

function playGame() {
  var userChoice = buttonSelected;
  var computerChoice = computerSelection();
  document.getElementById('userChoice').innerHTML = `You chose : ${userChoice}`;
  document.getElementById(
    'computerChoice'
  ).innerHTML = `Computer Choice is : ${computerChoice}`;
  if (userChoice === computerChoice) {
    tieScore++;
    document.getElementById('result').innerHTML = "It's a tie!";
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScore++;
    document.getElementById('result').innerHTML =
      'You win! Rock beats Scissors';
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    document.getElementById('result').innerHTML = 'You lose! Paper beats Rock';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    userScore++;
    document.getElementById('result').innerHTML = 'You win! Paper beats Rock';
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    document.getElementById('result').innerHTML =
      'You lose! Scissors beats Paper';
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScore++;
    document.getElementById('result').innerHTML =
      'You win! Scissors beats Paper';
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    document.getElementById('result').innerHTML =
      'You lose! Rock beats Scissors';
  }
  round++;
  document.getElementById('round').innerHTML = `Round: ${round}`;
  document.getElementById('userScore').innerHTML = `User score: ${userScore}`;
  document.getElementById(
    'computerScore'
  ).innerHTML = `Computer score: ${computerScore}`;
  document.getElementById(
    'tieScore'
  ).innerHTML = `Number of tie's: ${tieScore}`;

  if (round === 5) {
    checkWinner();
    gameOn = false;
  }

  function checkWinner() {
    if (userScore > computerScore) {
      document.getElementById('winner').innerHTML = 'You win the game!';
    }
    if (userScore < computerScore) {
      document.getElementById('winner').innerHTML = 'You lose the game!';
    }
    if (userScore === computerScore) {
      document.getElementById('winner').innerHTML = 'It is a tie!';
    }
    //check if user has clicked play again button//
    const playAgainButton = document.querySelector('#play-again');
    playAgainButton.addEventListener('click', () => {
      playAgain();
    });
  }
}

function playAgain() {
  //reset the scores//
  userScore = 0;
  computerScore = 0;
  tieScore = 0;
  round = 0;
  gameOn = true;
  document.getElementById('round').innerHTML = `Round: ${round}`;
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('computerScore').innerHTML = computerScore;
  document.getElementById('tieScore').innerHTML = tieScore;
  document.getElementById('result').innerHTML = '';
  document.getElementById('winner').innerHTML = '';
}
