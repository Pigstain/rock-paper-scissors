function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    let computer= getRandomInt(3);
    if(computer===0){
        return "rock";
    }
    else if(computer===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoise(){
    let input =prompt("enter input");
    return input;
}

let humanScore=0;
let computerScore=0;
function playRound(humanChoise,computerChoise){
    String(humanChoise).toLowerCase();
    if(humanChoise==="paper"&&computerChoise==="rock"){
        humanScore++;
        console.log("You win");
    }
    else if(humanChoise==="paper" && computerChoise==="scissors"){
        computerScore++;
        console.log("You lose");
    }
    else if(humanChoise==="paper" && computerChoise==="paper"){
        console.log("tie");
    }
    if(humanChoise==="rock"&&computerChoise==="scissors"){
        humanScore++;
        console.log("You win");
    }
    else if(humanChoise==="rock" && computerChoise==="paper"){
        computerScore++;
        console.log("You lose");
    }
    else if(humanChoise==="rock" && computerChoise==="rock"){
        console.log("tie");
    }
    if(humanChoise==="scissors"&&computerChoise==="paper"){
        humanScore++;
        console.log("You win");
    }
    else if(humanChoise==="scissors" && computerChoise==="rock"){
        computerScore++;
        console.log("You lose");
    }
    else if(humanChoise==="scissors" && computerChoise==="scissors"){
        console.log("tie");
    }
}
function playGame(){
    let i=0;
    while(i<5){
        let humanSelection = getHumanChoise();
        let computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
        i++;
    }
}
playGame();