console.log('hi');
const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput ==='paper'||userInput ==='scissors' || userInput === 'bomb'){
    return userInput;
  }else {
    console.log('Erorr');
  }
}

function getComputerChoice(){
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    console.log('The game is tied');
  }
   if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!'
      } else {
          return 'You Won!'
      }
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won!'
    } else if(computerChoice === 'rock'){
      return 'User Won!';
    }
  }
  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer Won!'
    } else if(computerChoice === 'paper'){
      return 'Yser Won!';
    }
  }
  if (userChoice === 'bomb'){
    if (computerChoice === 'scissors'){
      return 'User won!'
    } else if (computerChoice === 'rock'){
      return 'User won!';
    } else {
      return 'User won!';
    }
  }
}
const playGame = () =>{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + ' ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
} 

playGame();