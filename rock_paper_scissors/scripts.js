
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const output = document.querySelector(".message")
const amount = window.prompt("How many points do you want to play to ?");
const title = document.querySelector("h2");
title.innerHTML = ("Score " + amount + " points to win the game");
const end_message = document.querySelector(".end-message");
const hide= document.querySelector(".hide-container")
const show = document.querySelector(".show")
const restart = document.querySelector(".playagain")

let player_points = document.querySelector(".player-points");
let computer_points = document.querySelector(".robot-points");
let playerPoints = 0;
let computerPoints = 0;
let result = ""

const arr = ["ROCK", "PAPER", "SCISSORS"]
function computerChoice() {
    return arr[Math.floor(arr.length * Math.random())];
}


function playAgain() {
    hide.style.display = 'none';
    show.style.display = 'block';
}


function end() {
    console.log("made it")
   if (playerPoints>computerPoints) {
    end_message.innerHTML = ("YOU WIN " + playerPoints + " - " + computerPoints)
   }
   else{
    end_message.innerHTML = ("YOU LOSE " + playerPoints + " - " + computerPoints)
   }
   playAgain()
}

function game() {
    
    let input= this.value;
    let computer = computerChoice();
    

    if (input =="ROCK"){
        
        if (computer == "PAPER") {
        computerPoints +=1;
        computer_points.innerHTML = ("Computer: " + computerPoints);
        }
        else if (computer == "ROCK"){
        }
        else{
            player_points.innerHTML = ("Player: " + playerPoints);
       
        }
     }
     if (input =="PAPER"){
        if (computer == "SCISSORS") {
        computerPoints +=1;
        computer_points.innerHTML = ("Computer: " + computerPoints);
        }
        else if (computer == "PAPER"){ 
        }
        else{
            playerPoints +=1;
            player_points.innerHTML = ("Player: " + playerPoints) ;        
        }
     }
     if (input =="SCISSORS"){
        if (computer == "ROCK") {
        computerPoints +=1;
        computer_points.innerHTML = ("Computer: " + computerPoints);
        }
        else if (computer == "SCISSORS"){
          
        }
        else{
            playerPoints +=1;
            player_points.innerHTML = ("Player: " + playerPoints);
          
        }
     }
     if (playerPoints == amount || computerPoints == amount) {
        end();
    }
     output.innerHTML= ("Computer Choice: " + computer);
     
 }
 



rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
restart.addEventListener('click', function(){
    window.location.reload();
})


