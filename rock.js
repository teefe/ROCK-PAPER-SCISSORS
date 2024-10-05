const btnRock = document.querySelector('#btnRock');
const btnPapper = document.querySelector('#btnPapper');
const btnScissors = document.querySelector('#btnScissors');
const btnAgain = document.querySelector('.final-btn');

const playerChoice = document.querySelector('.man-q-mark');
const computerChoice = document.querySelector('.comp-q-mark');

const firstResult = document.querySelector('.results1');
const secondResult = document.querySelector('.second-result');

const resultCount = document.querySelector('.man-result');
const compResultCount = document.querySelector('.comp-result');

const finalResult =  document.querySelector('.final-winner');
const finalResult2 =  document.querySelector('.final-result');

let humanScore = 0;
let computerScore = 0;

getHumanChoices();

function getHumanChoices(){
btnRock.addEventListener("click",()=>{
    playGame("rock");
    let playerContent = btnRock.textContent;
    playerChoice.textContent = playerContent;
});

btnPapper.addEventListener("click",()=>{
    playGame("papper");
    let playerContent = btnPapper.textContent;
    playerChoice.textContent = playerContent;
});

btnScissors.addEventListener("click",()=>{
    playGame("scissors");
    let playerContent = btnScissors.textContent;
    playerChoice.textContent = playerContent;
});
}

btnAgain.addEventListener("click",()=>{
    finalResult2.style.opacity = 0;
    humanScore = 0;
    computerScore = 0;
    winTotal = 0;
    resultCount.textContent = humanScore;
    compResultCount.textContent = computerScore;
    showGameResults('First to score 5 points wins the game','Choose your weapon')
    playerChoice.textContent = '?';
    computerChoice.textContent = '?';
    })

function getComputerChoice(){ 
    let computer_var = Math.floor((Math.random()*3)+1) 

    if (computer_var === 1){
        let computerContent = btnRock.textContent;
        computerChoice.textContent = computerContent;
        return "rock"
    }
    if (computer_var === 2){
        let computerContent = btnPapper.textContent;
        computerChoice.textContent = computerContent;
        return "papper"
    }
    if (computer_var === 3){
        let computerContent = btnScissors.textContent;
        computerChoice.textContent = computerContent;
        return "scissors"
    }
}

function showGameResults(progress1,progress2){
    secondResult.textContent = progress1;
    firstResult.textContent = progress2;
    return progress2
}
// Players choice input.
function setHumanChoice(choice) {
    let playerChoice = choice;    
    return playerChoice
}


function playRound(setHumanChoice, getComputerChoice){

    var result;
    var newResult;

    if (setHumanChoice === getComputerChoice)
        {
            result = `${setHumanChoice} ties with ${getComputerChoice}`
            newResult = showGameResults(result,"its a tie!");
        }
    if (setHumanChoice === "rock" && getComputerChoice === "papper")
        {
            result = `${getComputerChoice} beats ${setHumanChoice}`
            newResult = showGameResults(result,"You lost!");
            computerScore = computerScore + 1
        }
    if (setHumanChoice === "rock" && getComputerChoice === "scissors")
        {
            result = `${setHumanChoice} beats ${getComputerChoice}`
            newResult = showGameResults(result,"You Won!");
            humanScore = humanScore + 1
        }
    if (setHumanChoice === "papper" && getComputerChoice === "rock")
        {
            result = `${setHumanChoice} beats ${getComputerChoice}`
            newResult = showGameResults(result,"You Won!");
            humanScore = humanScore + 1
        }
    if (setHumanChoice === "papper" && getComputerChoice === "scissors")
        {
            result = `${getComputerChoice} beats ${setHumanChoice}`
            newResult = showGameResults(result,"You lost!");
            computerScore = computerScore + 1
        }
    if (setHumanChoice === "scissors" && getComputerChoice === "rock")
        {
            result = `${getComputerChoice} beats ${setHumanChoice}`;
            newResult = showGameResults(result, "You lost!");
            computerScore = computerScore + 1
        }
    if (setHumanChoice === "scissors" && getComputerChoice === "papper")
        {
            result = `${setHumanChoice} beats ${getComputerChoice}`
            newResult = showGameResults(result,"You Won!");
            humanScore = humanScore + 1
        }

        console.log(newResult);
        return newResult
}
function setWinner(){

    let winTotal = humanScore+computerScore;
    let cumulative = 5

    if (winTotal >= cumulative && humanScore > computerScore)
        {
            finalResult.textContent = 'YOU WIN';
            resultPop();
        }else if (winTotal >= cumulative && computerScore > humanScore ) 
        {
            finalResult.textContent = 'YOU LOST';
            resultPop();
        }
}

function resultPop(){
    finalResult2.style.opacity = 1;
}

function playGame(choice) {
    result1 = playRound(setHumanChoice(choice),getComputerChoice());
    if (result1.includes('Won')) {
        resultCount.textContent = humanScore;
    }
    if (result1.includes('lost')) {
        compResultCount.textContent = computerScore;   
    }
    setWinner();
}
