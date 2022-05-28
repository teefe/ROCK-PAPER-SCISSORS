const btnRock = document.querySelector('#btnRock');
const btnPapper = document.querySelector('#btnPapper');
const btnScissors = document.querySelector('#btnScissors');

const playerChoice = document.querySelector('.man-q-mark');
const computerChoice = document.querySelector('.comp-q-mark');

const firstResult = document.querySelector('.results1');
const secondResult = document.querySelector('.second-result');

function resultAppend(progress1,progress2){
    secondResult.textContent = progress1;
    firstResult.textContent = progress2;
}

btnRock.addEventListener("click",()=>{
    singleRound(manPlay("rock"),computerPlay());
    let playerContent = btnRock.textContent;
    playerChoice.textContent = playerContent;
});

btnPapper.addEventListener("click",()=>{
    singleRound(manPlay("papper"),computerPlay());
    let playerContent = btnPapper.textContent;
    playerChoice.textContent = playerContent;

});

btnScissors.addEventListener("click",()=>{
    singleRound(manPlay("scissors"),computerPlay());
    let playerContent = btnScissors.textContent;
    playerChoice.textContent = playerContent;
});

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
// Players choice input.
function manPlay(choice) {
    let playerChoice = choice;    
    return playerChoice
}


function singleRound(manPlay, computerPlay) {
    var result;
    if (manPlay === computerPlay){
        result = `${manPlay} ties with ${computerPlay}`
        resultAppend(result,"its a tie!");
    }

    if (manPlay === "rock" && computerPlay === "papper"){
        result = `${computerPlay} beats ${manPlay}`
        resultAppend(result,"You lost!");
    }

    if (manPlay === "rock" && computerPlay === "scissors"){
        result = `${manPlay} beats ${computerPlay}`
        resultAppend(result,"You Won!");
    }

    if (manPlay === "papper" && computerPlay === "rock"){
        result = `${manPlay} beats ${computerPlay}`
        resultAppend(result,"You Won!");
    }

    if (manPlay === "papper" && computerPlay === "scissors"){
        result = `${computerPlay} beats ${manPlay}`
        resultAppend(result,"You lost!");
    }

    if (manPlay === "scissors" && computerPlay === "rock"){
        result = `${computerPlay} beats ${manPlay}`;
        resultAppend(result, "You lost!");
    }

    if (manPlay === "scissors" && computerPlay === "papper"){
        result = `${manPlay} beats ${computerPlay}`
        resultAppend(result,"You Won!");
    }

    // return result
}

function game(){
    let manWins = 0
    let computerWins = 0
    for (let index = 0; index < 5; index++) {
        result1 = singleRound(manPlay(),computerPlay())

        if (result1.includes("win")){
            manWins = manWins + 1
        }else{
         computerWins = computerWins + 1
        } 
        }
    
        if (manWins > computerWins) {
         console.log("You Win")
        }else {
         console.log("You Lose")
        }
}