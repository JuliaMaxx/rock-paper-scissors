// array of possible moves
const options = ['Rock', 'Paper', 'Scissors'];

// emojis that represent moves
const emojis = {'Rock': '🤘', 'Paper':'✋', 'Scissors': '✌️'};

// elements
const main = document.getElementById('main');
const playAgainButton = document.getElementById('play-again');
const playAgainText = document.getElementById('play-again-text');
const moves = document.querySelectorAll('.option');
const result = document.getElementById('result');
const roundExplanation = document.getElementById('explanation');
const roundInfo = document.getElementById('round-info');
const playerScoreDisplay = document.getElementById('player-score');
const compScoreDisplay = document.getElementById('comp-score');
const playerMoveEmojiDisplay = document.getElementById('player-move-emoji');
const compMoveEmojiDisplay = document.getElementById('comp-move-emoji');
const compAddPoint = document.querySelector('.comp.add-point');
const playerAddPoint = document.querySelector('.player.add-point');
const themeLight = document.querySelector('.lightBtn.theme');
const themeDark = document.querySelector('.darkBtn.theme');
const changeableElements = document.querySelectorAll('.change');


// get random move from the options array
function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

// play one round of the game
function playRound(playerMove, compMove) {

    // moves are the same - it must be a tie
    if(playerMove === compMove){
        return `It\'s a tie! ${playerMove} ties ${compMove}`;
    }
    // player's move is rock
    if(playerMove === 'Rock'){
        // the only thing that beats rock is paper
        if(compMove === 'Paper'){
            return 'Computer wins! Rock is beaten by Paper';
        }
        else{
            return `You win! Rock beats ${compMove}`;
        }
    }
    // player's move is paper
    if(playerMove === 'Paper'){
        // the only thing that beats paper is scissors
        if(compMove === 'Scissors'){
            return 'Computer wins! Paper is beaten by Scissors';
        }
        else{
            return `You win! Paper beats ${compMove}`;
        }
    }
    // player's move is scissors
    if(playerMove === 'Scissors'){
        // the only thing that beats scissors is rock
        if(compMove === 'Rock'){
            return 'Computer wins! Scissors are beaten by Rock';
        }
        else{
            return `You win! Scissors beat ${compMove}`;
        }
    }
}

// switch all the classes that start with
// '-light' to the ones that start with '-dark'
function changeThemes() {
    changeableElements.forEach((element) => {
        const classes = Array.from(element.classList);
        for (const cls of classes){
            if(/^light-/.test(cls)){
                let newCls = cls.replace(/^light-/, 'dark-');
                element.classList.remove(cls);
                element.classList.add(newCls);
            }
            else if(/^dark-/.test(cls)){
                let newCls = cls.replace(/^dark-/, 'light-');
                element.classList.remove(cls);
                element.classList.add(newCls);
            }

        }
    })
}

// change themes
function lightToDark() {
    themeLight.style.display = 'none';
    themeDark.style.display = 'block';
    changeThemes();
}
function darkToLight() {
    themeLight.style.display = 'block';
    themeDark.style.display = 'none';
    changeThemes();
}
themeLight.addEventListener('click', lightToDark);
themeDark.addEventListener('click', darkToLight);


// initialize both scores to 0
let playerScore = 0;
let compScore = 0;

playAgainButton.addEventListener('click', () => {
    // reset everything to the initial values
    compAddPoint.style.opacity = '0';
    playerAddPoint.style.opacity = '0';
    moves.forEach(move => move.disabled=false);
    playerScore = 0;
    compScore = 0;
    roundExplanation.innerText = 'First to score 5 points wins the game';
    result.innerText = 'Choose your weapon';
    playerScoreDisplay.innerText = `You: 0`;
    compScoreDisplay.innerText = `Computer: 0`;
    playAgainButton.style.opacity = '0%';
    main.style.opacity = '100%';
});

moves.forEach((move) => {
    move.addEventListener('click', () => {
        // display the result
        const text = playRound(move.dataset.option, getComputerChoice()).split('!');
        result.innerText = text[0] + '!';
        // display explanation
        roundExplanation.innerText = text[1];
        // make both point indicators invisible in case of a tie
        compAddPoint.style.opacity = '0';
        playerAddPoint.style.opacity = '0';

        // convert moves from the text returned by PlayRound to emojis
        const roundMoves = text[1].split(' ')
        const playerMoveEmoji = emojis[roundMoves[1]];
        const compMoveEmoji = emojis[roundMoves[roundMoves.length - 1]];
        playerMoveEmojiDisplay.innerText = playerMoveEmoji;
        compMoveEmojiDisplay.innerText = compMoveEmoji;

        // record the score
        if (result.innerText.includes('You win')) {
            playAgainText.innerText = "You won! Good gob!";
            compAddPoint.style.opacity = '0';
            playerAddPoint.style.opacity = '1';
            ++playerScore;
        }
        else if(result.innerText.includes('Computer wins')) {
            compAddPoint.style.opacity = '1';
            playerAddPoint.style.opacity = '0';
            playAgainText.innerText = "Lost this time :("
            ++compScore;
        }

        // display the score
        playerScoreDisplay.innerText = `You: ${playerScore}`;
        compScoreDisplay.innerText = `Computer: ${compScore}`;
        
        if(playerScore === 5 || compScore === 5) {
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
            // disable the option buttons
            moves.forEach(move => move.disabled=true)
            main.style.opacity = '60%';
            // ask the user to play again
            playAgainButton.style.opacity = '100%';
        }
    });
});
