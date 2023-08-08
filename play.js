const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

let playerSelection;
while(true) {
    playerSelection = prompt("Your move: ").toLowerCase();
    if(options.includes(playerSelection)) {
        break; 
    }
    else {
        continue;
    } 
}


console.log(getComputerChoice(), playerSelection)