// array of possible moves
const options = ['Rock', 'Paper', 'Scissors'];

// emojis that represent moves
const emojis = {'Rock': '🤘', 'Paper':'✋', 'Scissors': '✌️'};

// get random move from the options array
function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

// play one round of the game
function playRound(playerMove, compMove) {

    // moves are the same - it must be a tie
    if(playerMove === compMove){
        return `It\'s a tie! ${playerMove} ties ${compMove}`
    }
    // player's move is rock
    if(playerMove === 'Rock'){
        // the only thing that beats rock is paper
        if(compMove === 'Paper'){
            return 'Computer wins! Paper beats Rock';
        }
        else{
            return `You win! Rock beats ${compMove}`
        }
    }
    // player's move is paper
    if(playerMove === 'Paper'){
        // the only thing that beats paper is scissors
        if(compMove === 'Scissors'){
            return 'Computer wins! Scissors beat Paper';
        }
        else{
            return `You win! Paper beats ${compMove}`
        }
    }
    // player's move is scissors
    if(playerMove === 'Scissors'){
        // the only thing that beats scissors is rock
        if(compMove === 'Rock'){
            return 'Computer wins! Rock beats Scissors';
        }
        else{
            return `You win! Scissors beat ${compMove}`
        }
    }
}

const playAgainButton = document.getElementById('play-again');
const moves = document.querySelectorAll('.option');
const result = document.getElementById('result');
const playerScoreDisplay = document.getElementById('player-score');
const compScoreDisplay = document.getElementById('comp-score');
const roundExplanation = document.getElementById('explanation');
const roundInfo = document.getElementById('round-info');
const playerMoveEmojiDisplay = document.getElementById('player-move-emoji');
const compMoveEmojiDisplay = document.getElementById('comp-move-emoji');

// initialize both scores to 0
let playerScore = 0;
let compScore = 0;

playAgainButton.addEventListener('click', () => {
    // reset everything to the initial values
    moves.forEach(move => move.disabled=false);
    playerScore = 0;
    compScore = 0;
    roundExplanation.innerText = 'First to score 5 points wins the game';
    result.style.fontSize = '26px';
    result.innerText = 'Choose your weapon';
    playerScoreDisplay.innerText = `You: 0`;
    compScoreDisplay.innerText = `Computer: 0`;
    playAgainButton.style.display = 'none';
});

moves.forEach((move) => {
    move.addEventListener('click', () => {
        // display the result
        const text = playRound(move.dataset.option, getComputerChoice()).split('!')
        result.innerText = text[0] + '!';
        roundExplanation.innerText = text[1]

        const roundMoves = text[1].split(' ')
        const playerMoveEmoji = emojis[roundMoves[1]];
        const compMoveEmoji = emojis[roundMoves[3]];
        playerMoveEmojiDisplay.innerText = playerMoveEmoji;
        compMoveEmojiDisplay.innerText = compMoveEmoji;

        // record the score
        if (result.innerText.includes('You win')) {
            ++playerScore;
        }
        else if(result.innerText.includes('Computer wins')) {
            ++compScore;
        }

        // display the score
        playerScoreDisplay.innerText = `You: ${playerScore}`;
        compScoreDisplay.innerText = `Computer: ${compScore}`;
        
        if(playerScore === 5 || compScore === 5) {
            result.style.fontSize = '35px';
            // display the winner(if there is one) of five rounds
            if(playerScore > compScore){
                result.innerText = `Congrats you won ${playerScore} to ${compScore}`;
            }
            else if(compScore > playerScore){
                result.innerText = `Computer won ${compScore} to ${playerScore}`;
            }
            else{
                result.innerText = 'I\'s a tie this time!';
            }
            // disable the buttons
            moves.forEach(move => move.disabled=true)
            // ask the user to play again
            playAgainButton.style.display = 'inline';
        }
    });
});
