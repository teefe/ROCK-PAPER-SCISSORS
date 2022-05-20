
// console.log(singleRound(manPlay(),computerPlay()))
game();

function computerPlay(){ 

let computer_var = Math.floor((Math.random()*3)+1)

if (computer_var === 1){
    return "rock"
}
if (computer_var === 2){
    return "papper"
}
if (computer_var === 3){
   return "scissors"
}

}
function manPlay() {
    let playerChoice = prompt("rock,papper or scissors, choose ").toLowerCase();
    
    return playerChoice
}

function singleRound(manPlay, computerPlay) {
var result;
if (manPlay === computerPlay){
    result = `you have chosen ${manPlay} and its a draw`
}

if (manPlay === "rock" && computerPlay === "papper"){
    result = `you lose ${computerPlay} beat ${manPlay}`
}

if (manPlay === "rock" && computerPlay === "scissors"){
    result = `you win ${manPlay} beat ${computerPlay}`
}

if (manPlay === "papper" && computerPlay === "rock"){
    result = `you win ${manPlay} beat ${computerPlay}`
}

if (manPlay === "papper" && computerPlay === "scissors"){
    result = `you lose ${computerPlay} beat ${manPlay}`
}

if (manPlay === "scissors" && computerPlay === "rock"){
    result = `you lose ${computerPlay} beat ${manPlay}`

}

if (manPlay === "scissors" && computerPlay === "papper"){
    result = `you win ${manPlay} beat ${computerPlay}`
}

return result

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