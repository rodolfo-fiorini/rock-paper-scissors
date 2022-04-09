const outcomes = ["rock", "paper", "scissors"];

function computerPlay() {
    let play = outcomes[Math.floor(Math.random()*3)];
    return play;
}

function roundWinner(playerSelection, computerSelection) {
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

let game = function() {
    let playerScore = 0;
    let compScore = 0;
    let round = 1;

    let roundOutcome = roundWinner(playerInput, compInput)
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
    

    return (playerScore < compScore) ? "Computer wins :(" : "Player wins!!!!"
}

let addResult = function (message) {
    let results = document.getElementById("results")
    let result = document.createElement('li')
    result.innerText = message;
    results.appendChild(result)
}



let btn = document.querySelectorAll('button')
let playerScore = 0;
let compScore = 0;
let round = 1;
let score = document.getElementById('score');
let total = document.getElementById('total')
    // determine player input
btn.forEach((btn) =>{
    btn.addEventListener("click", 
    function (){
        // player and computer input
        let playerInput = btn.value;
        let compInput = computerPlay();

        // determine winner
        
        let roundOutcome = roundWinner(playerInput, compInput);
        let message = "";
        switch (roundOutcome){
            case 0:
                message = `Round ${round}: Its a tie! Player: ${playerInput} vs Computer: ${compInput}`;
                round += 1;
                break;
            case 1:
                message = `Round ${round}: Computer wins! Player: ${playerInput} vs Computer: ${compInput}`;
                compScore += 1;
                round += 1;
                break;
            case 2:
                message = `Round ${round}: Player wins! Player: ${playerInput} vs Computer: ${compInput}`;
                playerScore += 1;
                score.innerText = "" + (playerScore);
                round += 1;
                break;
        }
        //add result
        addResult(message);
        if (round == 5) {
            let outcome = (playerScore < compScore) ? "Computer wins :(" : "Player wins!!!!";
            alert(outcome)
        }
    }

)
}
)

let restart = document.getElementById('restart')

restart.addEventListener("click", function (){
    let results = document.getElementById("results")
    results.innerHTML = "";
})


    
   


