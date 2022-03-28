const getUserChoice = userInput => 
{ userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb')
   
    { return userInput }
  
  else { 
    return 'You can only pick rock, paper or scissors!'
  }
}

 console.log(getUserChoice('rock'));

 const getComputerChoice = () => 
 {
   const randomNumber = Math.floor(Math.random() * 3); 
switch (randomNumber) {
  case 0:
  return 'rock';
  case 1:
  return 'paper'
  case 3:
  return 'scissors';
}
   }
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } 
  if(userChoice === 'bomb') {
    return 'Bomb bomb you WON by bombing!'
  }


  if (userChoice === 'rock') {

  if (computerChoice === 'paper') 
  {
    return 'Computer wins!'; 
  } else {
    return 'You won!';
  } 
  }

  
  if (userChoice === 'paper') { 
    if(computerChoice === 'scissors') {
    return 'Computer wins!';
    }
    else {
      return 'You won!';
    }
  }
if (userChoice === 'scissors') {
 if(computerChoice === 'rock') {
    return 'Computers wins!';
    }
    else {
      return 'You won!';
      } 
}
};
console.log(determineWinner('bomb' , 'scissors'));
console.log(determineWinner('paper' , 'scissors'));
console.log(determineWinner('rock' , 'rock'));

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

