// array of possible moves
const options = ['rock', 'paper', 'scissors'];

// get random move from the options array
function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
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

const moves = document.querySelectorAll('.option');
const result = document.getElementById('result');
const score = document.getElementById('score');

// initialize both scores to 0
let playerScore = 0;
let compScore = 0;


moves.forEach((move) => {
    move.addEventListener('click', () => {
        result.innerText = playRound(move.dataset.option, getComputerChoice());

        // record the score
        if (result.innerText.includes('You win')) {
            ++playerScore;
        }
        else if(result.innerText.includes('Computer wins')) {
            ++compScore;
        }

        score.innerText = `Score: You:${playerScore} --- Computer:${compScore}`;
        
        if(playerScore === 5 || compScore === 5) {
            // display the winner(if there is one) of five rounds
            if(playerScore > compScore){
                score.innerText = `Congrats you won ${playerScore} to ${compScore}`;
            }
            else if(compScore > playerScore){
                score.innerText = `Computer won ${compScore} to ${playerScore}`;
            }
            else{
                score.innerText = 'I\'s a tie this time!';
            }
            moves.forEach(move => move.disabled=true)
            document.getElementById('play-again').style.display = 'inline';
        }
    });
});
