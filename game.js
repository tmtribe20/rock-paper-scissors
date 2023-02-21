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
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  } else {
    return 'invalid choice';
  }
}

//function that compares the user's choice to the computer's choice and returns the winner//
function playgame() {
  var userchoice = getuserchoice();
  console.log('user choice: ' + userchoice);
  var computerchoice = getcomputerchoice();
  console.log('computer choice: ' + computerchoice);
  if (userchoice === 'invalid choice') {
    return 'invalid choice';
  } else if (userchoice === computerchoice) {
    return 'tie';
  } else if (userchoice === 'rock') {
    if (computerchoice === 'paper') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  } else if (userchoice === 'paper') {
    if (computerchoice === 'scissors') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  } else if (userchoice === 'scissors') {
    if (computerchoice === 'rock') {
      return 'computer wins';
    } else {
      return 'user wins';
    }
  }
}

//call the playgame function//
console.log(playgame());
