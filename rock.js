const outcomes = ["rock", "paper", "scissors"];

function computerPlay() {
    let play = outcomes[Math.floor(Math.random()*3)];
    return play;
}

function playRound(playerSelection, computerSelection) {
    let computer = computerSelection.toLowerCase()
    let player = playerSelection.toLowerCase()
    if (playerSelection == computerSelection){ //tie
        return 0
    } else if (player == "rock" && computer == "paper" || player == "scissors" && computer == "rock" || player == "paper" && computer == "scissors") {
            return 1 //computer wins
    } else {
        return 2; //player wins
    } 

}

function game() {
    let playerScore = 0;
    let compScore = 0;
    let round = 1;
    while (round <= 5) {
        let playerInput = prompt("Rock, paper or scissors?");
        let compInput = computerPlay();
        while (!(outcomes.includes(playerInput))) {
            playerInput = prompt("Try again: must be rock, paper or scissors.")
        }

        let roundOutcome = playRound(playerInput, compInput)
        switch (roundOutcome){
            case 0:
                console.log(`Its a tie! Player: ${playerInput} vs Computer: ${compInput}`)
                round += 1;
                break;
            case 1:
                console.log(`Computer wins! Player: ${playerInput} vs Computer: ${compInput}`)
                compScore += 1;
                round += 1;
                break;
            case 2:
                console.log(`Player wins! Player: ${playerInput} vs Computer: ${compInput}`)
                playerScore += 1;
                round += 1;
                break;
        }
    }

    return (playerScore < compScore) ? "Computer wins :(" : "Player wins!!!!"
}

console.log(game());

