//rock paper scissors game in console//

//function that returns a random choice of rock, paper or scissors//
function getcomputerchoice() {
  var choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'rock';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//function that returns the user's choice//
function getuserchoice() {
  var choice = prompt('rock, paper or scissors?');
  choice = choice.toLowerCase();
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  } else {
    return 'invalid choice';
  }
}

//function that compares the user's choice to the computer's choice and returns the winner updating the score//
function playgame() {
  var round = 0;
  var userScore = 0;
  var computerScore = 0;
  var tieScore = 0;

  while (round < 5) {
    var userChoice = getuserchoice();
    var computerChoice = getcomputerchoice();
    while (userChoice === 'invalid choice') {
      console.log('invalid choice');
      userChoice = getuserchoice();
    }
    console.log('user choice: ' + userChoice);
    console.log('computer choice: ' + computerChoice);
    if (userChoice === computerChoice) {
      console.log('tie score is ' + tieScore);
      tieScore++;
      round++;
      console.log('its a tie as both chose ' + userChoice);
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      console.log('user wins this round as rock beats scissors');
      userScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      console.log('computer wins this round as paper beats rock');
      computerScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      console.log('user wins this round as paper beats rock');
      userScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      console.log('computer wins this round as scissors beats paper');
      computerScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      console.log('computer wins this round as rock beats scissors');
      computerScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
      console.log('user wins this round as scissors beats paper');
      userScore++;
      round++;
      console.log(
        'user score is ' + userScore + ' and computer score is ' + computerScore
      );
      console.log('tie score is ' + tieScore);
      console.log('round ' + round + ' of 5');
    }
  }
  if (userScore > computerScore) {
    console.log('user wins the game');
  } else if (userScore < computerScore) {
    console.log('computer wins the game');
  } else {
    console.log('game is a tie');
  }
}

console.log(playgame());
