const options = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

function getPlayerChoice() {
    while(true) {
        let playerSelection = prompt("Your move: ")
        if (playerSelection === null){
            throw new Error("User terminated the game");
        }
        playerSelection = playerSelection.toLowerCase();
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

function game() {
    let roundResult;
    let playerScore = 0;
    let compScore = 0;
    try{
        for(let i = 0; i < 5; i++){
            roundResult = playRound(getPlayerChoice(),getComputerChoice())
            console.log(roundResult);
            if (roundResult.includes('You win')){
                ++playerScore;
            }
            else if(roundResult.includes('Computer wins')){
                ++compScore;
            }
            console.log(`Score: You:${playerScore} --- Computer:${compScore}`);
        }
        if(playerScore > compScore){
            console.log(`Congrats you won ${playerScore} to ${compScore}`);
        }
        else if(compScore > playerScore){
            console.log(`Computer won ${compScore} to ${playerScore}`);
        }
        else{
            console.log('I\'s a tie this time!');
        }
        if(confirm("Play again?")){
            console.log('')
            game();
        }
    }
    catch(error){
        console.info('You terminated the game');
    }
}

game()