const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

function getPlayerChoice() {
    while(true) {
        playerSelection = prompt("Your move: ").toLowerCase();
        if(options.includes(playerSelection)){ 
            return playerSelection; 
        }
        else {
            continue;
        } 
    }
}

function playRound(playerMove, compMove) {

    const titleCompMove = compMove[0].toUpperCase() + compMove.slice(1);

    if(playerMove === compMove){
        return 'It\'s a tie!'
    }

    if(playerMove === 'rock'){
        if(compMove === 'paper'){
            return 'Computer wins! Paper beats Rock';
        }
        else{
            return `You win! Rock beats ${titleCompMove}`
        }
    }

    if(playerMove === 'paper'){
        if(compMove === 'scissors'){
            return 'Computer wins! Scissors beat Paper';
        }
        else{
            return `You win! Paper beats ${titleCompMove}`
        }
    }

    if(playerMove === 'scissors'){
        if(compMove === 'rock'){
            return 'Computer wins! Rock beats Scissors';
        }
        else{
            return `You win! Scissors beat ${titleCompMove}`
        }
    }
}

console.log(playGame(getPlayerChoice(), getComputerChoice()))