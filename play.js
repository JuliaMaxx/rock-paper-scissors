const options = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    const randomNum = Math.floor((Math.random() * 3));
    return options[randomNum];
}

console.log(getComputerChoice())