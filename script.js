/* 
- create function getComputerChoice :this should get the values = "rock", "paper",
"scissors" using math.random
- Create function getHumanChoice = this should return valid inputs from the user.
(use "prompt" method to get input)
- declare computer and human score variables. humanScore and computerScore.
- make a function called playRound with the parameters humanChoice and computerChoice.
humanChoice must be case-insensitive. playRound should display a message (string value)
to tell who is the round winner. and increment computerScore and humanScore.

logic of the game:
use a function named playGame, move playRound inside this function so you can play
the game 5 times. The best of Five wins. 


new feature = if any player is 3 points ahead 
is automatically declared a winner. */
let getHumanChoice = function () {
    let humanChoice = window.prompt("Write 'Rock', 'Paper' or Scissors'").toLowerCase();

    return humanChoice;
};

let getComputerChoice = function () {

    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
};




 let humanScore = 0;
let computerScore = 0;

<<<<<<< HEAD
=======
function playRound(ComputerChoice, HumanChoice,) {

    if (ComputerChoice === HumanChoice) {
        console.log('Its a Tie');

    } else if (HumanChoice === "rock" && ComputerChoice === "scissors" ||
        HumanChoice === "paper" && ComputerChoice === "rock" ||
        HumanChoice === "scissors" && ComputerChoice === "paper") {
        console.log('YOU won this round!!!');
        humanScore += 1;
    } else if (ComputerChoice === "rock" && HumanChoice === "scissors" ||
        ComputerChoice === "paper" && HumanChoice === "rock" ||
        ComputerChoice === "scissors" && HumanChoice === "paper") {
        console.log('The Computer won this round!!!')
        computerScore += 1;
    }
>>>>>>> b4651bf (some changes)

function playGame(){
            while ( computerScore !== 3 && humanScore !==3){
               

        function playRound(ComputerChoice, HumanChoice, ){
        
            if (ComputerChoice === HumanChoice){
                alert(`Its a Tie \n computer score: ${computerScore}\n human score: ${humanScore}`);
                
            }else if (HumanChoice === "rock" && ComputerChoice === "scissors" ||
                HumanChoice === "paper" && ComputerChoice === "rock" ||
                HumanChoice === "scissors" && ComputerChoice === "paper"){
                humanScore +=1;
                alert(`YOU won this round!!! \n computer score: ${computerScore}\n human score: ${humanScore}`);
            } else if (ComputerChoice === "rock" &&  HumanChoice === "scissors" ||
                ComputerChoice === "paper" &&  HumanChoice === "rock" ||
                ComputerChoice === "scissors" &&  HumanChoice === "paper"){ 
               
                computerScore+=1;
                 alert(`The Computer won this round!!!\n computer score: ${computerScore}\n human score: ${humanScore}`)

            }

        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        playRound(computerSelection, humanSelection);
        console.log(humanSelection);
        console.log(computerSelection);
        console.log("Human Score: " + humanScore);
        console.log("Computer Score: " + computerScore);
    }
}

playGame();