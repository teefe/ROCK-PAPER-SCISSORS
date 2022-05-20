
singleRound(manPlay(),computerPlay())

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

if (manPlay === computerPlay){
    console.log(`you have chosen ${manPlay} and its a draw`)
}

if (manPlay === "rock" && computerPlay === "papper"){
    console.log(`you lose! ${computerPlay} beat ${manPlay}`)
}

if (manPlay === "rock" && computerPlay === "scissors"){
    console.log(`you win! ${manPlay} beat ${computerPlay}`)
}

if (manPlay === "papper" && computerPlay === "rock"){
    console.log(`you win! ${manPlay} beat ${computerPlay}`)
}

if (manPlay === "papper" && computerPlay === "scissors"){
    console.log(`you lose! ${computerPlay} beat ${manPlay}`)
}

if (manPlay === "scissors" && computerPlay === "rock"){
    console.log(`you lose! ${computerPlay} beat ${manPlay}`)

}

if (manPlay === "scissors" && computerPlay === "papper"){
    console.log(`you win! ${manPlay} beat ${computerPlay}`)
}

}