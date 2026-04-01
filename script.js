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


/*comment test for feature test branch*/
const div1 = document.createElement('div');



let rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.dataset.choice = "rock"

let paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.dataset.choice = "paper"

let scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
scissorsBtn.dataset.choice = "scissors";

const buttonsP1 = document.querySelectorAll('button');
div1.appendChild(rockBtn);
div1.appendChild(paperBtn);
div1.appendChild(scissorsBtn);
document.body.appendChild(div1);








/*let getHumanChoice = function () {
    /*let humanChoice = window.prompt("Write 'Rock', 'Paper' or Scissors'").toLowerCase();

    return humanChoice;
};
*/
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
const divScore = document.createElement('div');
document.body.appendChild(divScore);
const scoreHuman = document.createElement('h3')
scoreHuman.textContent = `human score: ${humanScore}`;

const scoreComputer = document.createElement('h3');
scoreComputer.textContent = `computer score: ${computerScore}`;

divScore.appendChild(scoreHuman)
divScore.appendChild(scoreComputer)
divScore.style.display = "flex";
divScore.style.gap = "50px"

/*function playRound(ComputerChoice, HumanChoice,) {

    if (ComputerChoice === HumanChoice) {
        console.log('Its a Tie');

    } else if (HumanChoice === "rock" && ComputerChoice === "scissors" ||
        HumanChoice === "paper" && ComputerChoice === "rock" ||
        HumanChoice === "scissors" && ComputerChoice === "paper") {
        /* console.log('YOU won this round!!!');
        humanScore += 1;
    } else if (ComputerChoice === "rock" && HumanChoice === "scissors" ||
        ComputerChoice === "paper" && HumanChoice === "rock" ||
        ComputerChoice === "scissors" && HumanChoice === "paper") {
        /*console.log('The Computer won this round!!!')
        computerScore += 1;
    }
}
*/



/*function playGame() {
    while (computerScore !== 3 && humanScore !== 3) {*/


function playRound(ComputerChoice, HumanChoice,) {


    if (ComputerChoice === HumanChoice) {


    } else if (HumanChoice === "rock" && ComputerChoice === "scissors" ||
        HumanChoice === "paper" && ComputerChoice === "rock" ||
        HumanChoice === "scissors" && ComputerChoice === "paper") {
        humanScore += 1;

    } else if (ComputerChoice === "rock" && HumanChoice === "scissors" ||
        ComputerChoice === "paper" && HumanChoice === "rock" ||
        ComputerChoice === "scissors" && HumanChoice === "paper") {

        computerScore += 1;


    }


    if (computerScore == 5) {
        scoreComputer.innerText = `You lost the game!!`;
        humanScore = 0;
        computerScore = 0;
        return;
    } else if (humanScore == 5) {
        scoreHuman.innerText = `You won the game!!`;
        humanScore = 0;
        computerScore = 0;
        return;
    } else {
        scoreComputer.innerText = `computer score: ${computerScore}`;
        scoreHuman.innerText = `human score: ${humanScore}`;
    }



}

div1.addEventListener("click", (e) => {

    const btn = e.target.closest('button');
    if (!btn) return;

    let humanChoice = btn.dataset.choice;
    playRound(getComputerChoice(), humanChoice)


});










