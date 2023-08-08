const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

function getPlayerChoice(){
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


console.log(getComputerChoice(), getPlayerChoice())