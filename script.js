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
const screen = document.querySelector(".screen");
const leaderboard = document.querySelector(".leaderboard");
leaderboard.textContent=humanScore+"   Comp: "+computerScore;
const screen2= document.querySelector(".screen2");
function playRound(humanChoise,computerChoise){
    String(humanChoise).toLowerCase();
    if(humanChoise==="paper"&&computerChoise==="rock"){
        humanScore++;
        screen.textContent="You Win";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You win");
    }
    else if(humanChoise==="paper" && computerChoise==="scissors"){
        computerScore++;
        screen.textContent="You Lose";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You lose");
    }
    else if(humanChoise==="paper" && computerChoise==="paper"){
        screen.textContent="Tie";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("tie");
    }
    if(humanChoise==="rock"&&computerChoise==="scissors"){
        humanScore++;
        screen.textContent="You Win";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You win");
    }
    else if(humanChoise==="rock" && computerChoise==="paper"){
        computerScore++;
        screen.textContent="You Lose";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You lose");
    }
    else if(humanChoise==="rock" && computerChoise==="rock"){
        screen.textContent="Tie";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("tie");
    }
    if(humanChoise==="scissors"&&computerChoise==="paper"){
        humanScore++;
        screen.textContent="You Win";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You win");
    }
    else if(humanChoise==="scissors" && computerChoise==="rock"){
        computerScore++;
        screen.textContent="You Lose";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("You lose");
    }
    else if(humanChoise==="scissors" && computerChoise==="scissors"){
        screen.textContent="Tie";
        leaderboard.textContent=humanScore+"   Comp: "+computerScore;
        console.log("tie");
    }
    if(humanScore===5){
        screen2.textContent="You Win the game";
        paper.disabled=true;
        rock.disabled=true;
        scissors.disabled=true;
    }
    if(computerScore===5){
        screen2.textContent="Computer Wins";
        paper.disabled=true;
        rock.disabled=true;
        scissors.disabled=true;
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
const paper = document.querySelector(".paper");
paper.addEventListener("click",function(){playRound("paper",getComputerChoice())});
const rock = document.querySelector(".rock");
rock.addEventListener("click",function(){playRound("rock",getComputerChoice())});
const scissors = document.querySelector(".scissors");
scissors.addEventListener("click",function(){playRound("scissors",getComputerChoice())});
