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

const finalResult =  document.querySelector('.final-winner')
const finalResult2 =  document.querySelector('.final-result')

let Player1Wins = 0;
let Player2Wins = 0;

btnWork();

function btnWork(){
btnRock.addEventListener("click",()=>{
    theGame("rock");
    let playerContent = btnRock.textContent;
    playerChoice.textContent = playerContent;
});

btnPapper.addEventListener("click",()=>{
    theGame("papper");
    let playerContent = btnPapper.textContent;
    playerChoice.textContent = playerContent;
});

btnScissors.addEventListener("click",()=>{
    theGame("scissors");
    let playerContent = btnScissors.textContent;
    playerChoice.textContent = playerContent;
});
}

btnAgain.addEventListener("click",()=>{
    finalResult2.style.opacity = 0;
    Player1Wins = 0;
    Player2Wins = 0;
    winTotal = 0;
    resultCount.textContent = Player1Wins;
    compResultCount.textContent = Player2Wins;
    resultAppend('First to score 5 points wins the game','Choose your weapon')
    playerChoice.textContent = '?';
    computerChoice.textContent = '?';
    })

function getRobotChoice(){ 
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

function resultAppend(progress1,progress2){
    secondResult.textContent = progress1;
    firstResult.textContent = progress2;
    return progress2
}
// Players choice input.
function getPlayersChoice(choice) {
    let playerChoice = choice;    
    return playerChoice
}


function singleRound(getPlayersChoice
, getRobotChoice) {
    var result;
    var newResult;
    if (getPlayersChoice
     === getRobotChoice){
        result = `${getPlayersChoice
        
        } ties with ${getRobotChoice}`
        newResult = resultAppend(result,"its a tie!");
    }
    if (getPlayersChoice
     === "rock" && getRobotChoice === "papper"){
        result = `${getRobotChoice} beats ${getPlayersChoice
        
        }`
        newResult = resultAppend(result,"You lost!");
        Player2Wins = Player2Wins + 1
    }
    if (getPlayersChoice
     === "rock" && getRobotChoice === "scissors"){
        result = `${getPlayersChoice
        
        } beats ${getRobotChoice}`
        newResult = resultAppend(result,"You Won!");
        Player1Wins = Player1Wins + 1
    }
    if (getPlayersChoice
     === "papper" && getRobotChoice === "rock"){
        result = `${getPlayersChoice
        
        } beats ${getRobotChoice}`
        newResult = resultAppend(result,"You Won!");
        Player1Wins = Player1Wins + 1
    }
    if (getPlayersChoice
     === "papper" && getRobotChoice === "scissors"){
        result = `${getRobotChoice} beats ${getPlayersChoice
        
        }`
        newResult = resultAppend(result,"You lost!");
        Player2Wins = Player2Wins + 1
    }
    if (getPlayersChoice
     === "scissors" && getRobotChoice === "rock"){
        result = `${getRobotChoice} beats ${getPlayersChoice
        
        }`;
        newResult = resultAppend(result, "You lost!");
        Player2Wins = Player2Wins + 1
    }
    if (getPlayersChoice
     === "scissors" && getRobotChoice === "papper"){
        result = `${getPlayersChoice
        
        } beats ${getRobotChoice}`
       newResult = resultAppend(result,"You Won!");
       Player1Wins = Player1Wins + 1
    }

        return newResult
}
function winner(){
    let winTotal = Player1Wins+Player2Wins;
    let cumulative = 5
    if (winTotal >= cumulative && Player1Wins > Player2Wins) {
        finalResult.textContent = 'YOU WIN';
        resultPop();
    }else if (winTotal >= cumulative && Player2Wins > Player1Wins ) {
        finalResult.textContent = 'YOU LOST';
        resultPop();
    }
}

function resultPop(){
    finalResult2.style.opacity = 1;
}

function theGame(choice) {
    result1 = singleRound(getPlayersChoice
    (choice),getRobotChoice());
    if (result1.includes('Won')) {
        resultCount.textContent = Player1Wins;
    }
    if (result1.includes('lost')) {
        compResultCount.textContent = Player2Wins;   
    }
    winner();
}
