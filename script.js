
let getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}
let getComputerChoice = () => {
    let choice = getRandomInt(3)
    if(choice === 0){
        return ("rock")
    }
    if(choice === 1){
        return ("scissors")
    }
    if (choice === 2){
        return ("paper")
    }
}
let getHumanChoice = () => {
    let choice = prompt("Please choose rock, paper, or scissors: ")
    if(choice.toLowerCase()==="rock"){
        return (choice.toLowerCase())
    }
    if(choice.toLowerCase()==="scissors"){
        return (choice.toLowerCase())
    }
    if (choice.toLowerCase()==="paper"){
        return (choice.toLowerCase())
    }
}

let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log("It's a tie!")
            }
            if (computerChoice === "paper"){
                computerScore++;
                console.log("You lose! Paper beats Rock.")
            }
            if (computerChoice === "scissors"){
                humanScore++;
                console.log("You win! Rock beats Scissors..")
            }
        }
        if (humanChoice === "paper"){
            if (computerChoice === "paper"){
                console.log("It's a tie!")
            }
            if (computerChoice === "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats Paper.")
            }
            if (computerChoice === "rock"){
                humanScore++;
                console.log("You win! Paper beats Rock.")
            }
        }
        if (humanChoice === "scissors"){
            if(computerChoice === "scissors"){
                console.log("It's a tie!")
            }
            if(computerChoice === "rock"){
                computerScore++;
                console.log("You lose! Rock beats Scissors.")
            }
            if(computerChoice === "paper"){
                humanScore++;
                console.log("You win! Scissors beats Paper.")
        }
        }
    }

    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human: " + humanScore + " Computer: " + computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human: " + humanScore + " Computer: " + computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human: " + humanScore + " Computer: " + computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human: " + humanScore + " Computer: " + computerScore)
    playRound(getHumanChoice(), getComputerChoice());
    console.log("Human: " + humanScore + " Computer: " + computerScore)
    if (humanScore > computerScore){
        console.log("Congratulations! You win!")
    }
    else if (computerScore > humanScore){
        console.log("You lose. Better luck next time.")
    }
    else{
        console.log("It was a tie.")
    }
}
playGame();
