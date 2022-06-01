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

let manWins = 0;
let computerWins = 0;

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
    manWins = 0;
    computerWins = 0;
    winTotal = 0;
    resultCount.textContent = manWins;
    compResultCount.textContent = computerWins;
    resultAppend('First to score 5 points wins the game','Choose your weapon')
    playerChoice.textContent = '?';
    computerChoice.textContent = '?';
    })

function computerPlay(){ 
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
function manPlay(choice) {
    let playerChoice = choice;    
    return playerChoice
}


function singleRound(manPlay, computerPlay) {
    var result;
    var newResult;
    if (manPlay === computerPlay){
        result = `${manPlay} ties with ${computerPlay}`
        newResult = resultAppend(result,"its a tie!");
    }

    if (manPlay === "rock" && computerPlay === "papper"){
        result = `${computerPlay} beats ${manPlay}`
        newResult = resultAppend(result,"You lost!");
        computerWins = computerWins + 1
    }

    if (manPlay === "rock" && computerPlay === "scissors"){
        result = `${manPlay} beats ${computerPlay}`
        newResult = resultAppend(result,"You Won!");
        manWins = manWins + 1
    }

    if (manPlay === "papper" && computerPlay === "rock"){
        result = `${manPlay} beats ${computerPlay}`
        newResult = resultAppend(result,"You Won!");
        manWins = manWins + 1
    }

    if (manPlay === "papper" && computerPlay === "scissors"){
        result = `${computerPlay} beats ${manPlay}`
        newResult = resultAppend(result,"You lost!");
        computerWins = computerWins + 1
    }

    if (manPlay === "scissors" && computerPlay === "rock"){
        result = `${computerPlay} beats ${manPlay}`;
        newResult = resultAppend(result, "You lost!");
        computerWins = computerWins + 1
    }

    if (manPlay === "scissors" && computerPlay === "papper"){
        result = `${manPlay} beats ${computerPlay}`
       newResult = resultAppend(result,"You Won!");
       manWins = manWins + 1
    }

        return newResult
}
function winner(){
    let winTotal = manWins+computerWins;
    let cumulative = 5
    if (winTotal >= cumulative && manWins > computerWins) {
        finalResult.textContent = 'YOU WIN';
        resultPop();
    }else if (winTotal >= cumulative && computerWins > manWins ) {
        finalResult.textContent = 'YOU LOST';
        resultPop();
    }
}

function resultPop(){
    finalResult2.style.opacity = 1;
}

function theGame(choice) {
    result1 = singleRound(manPlay(choice),computerPlay());
    if (result1.includes('Won')) {
        resultCount.textContent = manWins;
    }
    if (result1.includes('lost')) {
        compResultCount.textContent = computerWins;   
    }
    winner();
}
