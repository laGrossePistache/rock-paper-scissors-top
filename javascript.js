let playerScore = 0;
let computerScore = 0;

let currentRound = 0;
const maxRound = 5;

const weapons = ['Rock', 'Paper', 'Scissors'];

function game() {
    console.log("Welcome to RPS !")
    while (currentRound < maxRound) {
        console.log(`Round: ${currentRound + 1}`);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Player has choose ${playerSelection} and Computer has choose ${computerSelection}`);
        console.log(result);
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
        currentRound++;
    }
    if (playerScore > computerScore) {
        console.log("Player has win the game !")
    } else if( computerScore > playerScore) {
        console.log("Computer has win the game !")
    } else {
        console.log("No winner ! Deuce !")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Deuce ! Play agains !";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") || (playerSelection === "PAPER" && computerSelection === "ROCK") || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        playerScore++;
        return "Player wins !";
    } else {
        computerScore++;
        return "Computer wins !";
    }
}

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    const computerWeapon = weapons[computerChoice];
    return computerWeapon.toUpperCase();
}

function getPlayerChoice() {
    let isChoiceValid = false;
    let playerChoice = "";
    do {
        console.log("Choice your weapon between ROCK, PAPER and SCISSORS");
        playerChoice = prompt('Enter your choice');
        playerChoice = playerChoice.toUpperCase();
        if (playerChoice === "ROCK" || playerChoice === "PAPER" || playerChoice === "SCISSORS") {
            isChoiceValid = true;
        } else {
            console.log('Your choice is invalid');
        }
    } while (isChoiceValid === false);
    return playerChoice;

}

