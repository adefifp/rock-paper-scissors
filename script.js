
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
const replayFunction = () => {
    let replay = document.createElement("button")
    let body = document.querySelector("body")
    replay.style.backgroundColor = "white"
    replay.style.margin = "20px"
    replay.style.padding = "5px"
    replay.style.border = "2px solid black"
    replay.style.borderRadius = "10px"
    replay.textContent = "Replay?"
    body.appendChild(replay)
    replay.addEventListener ("click", () =>{
    playGame();
    replay.remove();
})
}
let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    let playRound = (humanChoice, computerChoice) => {
        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log("It's a tie!")
                div.textContent = `It's a tie! You: ${humanScore} Computer: ${computerScore}`
            }
            if (computerChoice === "paper"){
                computerScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                }
                div.textContent = `You lose! Paper beats Rock. You: ${humanScore} Computer: ${computerScore}`
            }
            if (computerChoice === "scissors"){
                humanScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                }
                div.textContent = `You win! Rock beats Scissors. You: ${humanScore} Computer: ${computerScore}`
            }
        }
        if (humanChoice === "paper"){
            if (computerChoice === "paper"){
                console.log("It's a tie!")
                div.textContent = `It's a tie! You: ${humanScore} Computer: ${computerScore}`
            }
            if (computerChoice === "scissors"){
                computerScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                }
                div.textContent = `You lose! Scissors beats Paper. You: ${humanScore} Computer: ${computerScore}`
            }
            if (computerChoice === "rock"){
                humanScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                    replayFunction();
                }
                div.textContent = `You win! Paper beats Rock. You: ${humanScore} Computer: ${computerScore}`
            }
        }
        if (humanChoice === "scissors"){
            if(computerChoice === "scissors"){
                console.log("It's a tie!")
                div.textContent = `It's a tie! You: ${humanScore} Computer: ${computerScore}`
            }
            if(computerChoice === "rock"){
                computerScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                }
                div.textContent = `You lose! Rock beats Scissors. You: ${humanScore} Computer: ${computerScore}`
            }
            if(computerChoice === "paper"){
                humanScore++;
                if (computerScore >= 5){
                    div.textContent = `You lost! Final Score: You: ${humanScore} Computer: ${computerScore}`
                } else if (humanScore >= 5){
                    div.textContent = `You won! Final Score: You: ${humanScore} Computer: ${computerScore}`
                }
                div.textContent = `You win! Scissors beats Paper. You: ${humanScore} Computer: ${computerScore}`
        }
        }
    }
    const body = document.querySelector("body")
    const scissors = document.createElement("button")
    const rock = document.createElement("button")
    const paper = document.createElement("button")
    const buttonsContainer = document.createElement("div")
    const div = document.createElement("div")

    body.style.display = "flex"
    body.style.justifyContent = "center"
    body.style.alignItems = "center"
    body.style.flexDirection = "column"
    
    rock.textContent = "Rock"

    paper.textContent = "Paper"

    scissors.textContent = "Scissors"
    
    buttonsContainer.style.display = "flex"
    buttonsContainer.style.marginBottom = "20px"

    buttonsContainer.appendChild(rock)
    buttonsContainer.appendChild(paper)
    buttonsContainer.appendChild(scissors)
    body.appendChild(buttonsContainer)
    body.appendChild(div)

    const buttons = document.querySelectorAll("button")
    buttons.forEach(button => {
        button.style.backgroundColor = "white"
        button.style.margin = "20px"
        button.style.padding = "5px"
        button.style.border = "2px solid black"
        button.style.borderRadius = "10px"
    })
    

    rock.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    })
    scissors.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    })
    paper.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    })
}


playGame();
