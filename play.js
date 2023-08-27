// array of possible moves
const options = ['rock', 'paper', 'scissors'];

// get random move from the options array
function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

function getPlayerChoice() {
   
}

// play one round of the game
function playRound(playerMove, compMove) {
    // title case computer move to display it later
    const titleCompMove = compMove[0].toUpperCase() + compMove.slice(1);

    // moves are the same - it must be a tie
    if(playerMove === compMove){
        return 'It\'s a tie!'
    }
    // player's move is rock
    if(playerMove === 'rock'){
        // the only thing that beats rock is paper
        if(compMove === 'paper'){
            return 'Computer wins! Paper beats Rock';
        }
        else{
            return `You win! Rock beats ${titleCompMove}`
        }
    }
    // player's move is paper
    if(playerMove === 'paper'){
        // the only thing that beats paper is scissors
        if(compMove === 'scissors'){
            return 'Computer wins! Scissors beat Paper';
        }
        else{
            return `You win! Paper beats ${titleCompMove}`
        }
    }
    // player's move is scissors
    if(playerMove === 'scissors'){
        // the only thing that beats scissors is rock
        if(compMove === 'rock'){
            return 'Computer wins! Rock beats Scissors';
        }
        else{
            return `You win! Scissors beat ${titleCompMove}`
        }
    }
}

// play 5 rounds of the game
function game() {
    let roundResult;
    // initialize both scores to 0
    let playerScore = 0;
    let compScore = 0;
    try{
        // loop five times to represent five rounds
        for(let i = 0; i < 5; i++){
            // get the result of one round
            roundResult = playRound(getPlayerChoice(),getComputerChoice())
            // display the result
            console.log(roundResult);

            // record the score
            if (roundResult.includes('You win')){
                ++playerScore;
            }
            else if(roundResult.includes('Computer wins')){
                ++compScore;
            }
            console.log(`Score: You:${playerScore} --- Computer:${compScore}`);
        }
        
        // display the winner(if there is one) of five rounds
        if(playerScore > compScore){
            console.log(`Congrats you won ${playerScore} to ${compScore}`);
        }
        else if(compScore > playerScore){
            console.log(`Computer won ${compScore} to ${playerScore}`);
        }
        else{
            console.log('I\'s a tie this time!');
        }

        // offer user to play again
        if(confirm("Play again?")){
            console.log('')
            game();
        }
    }
    // if cancel was pressed in the prompt
    catch(error){
        console.info('You terminated the game');
    }
}

game()