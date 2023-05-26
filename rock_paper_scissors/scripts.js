
const select = document.querySelectorAll(".select")
const output = document.querySelector(".message")
const amount = window.prompt("How many points do you want to play to ?");
const title = document.querySelector("h2");
title.innerText = ("Score " + amount + " points to win the game");
const end_message = document.querySelector(".end-message");
const hide= document.querySelector(".hide-container")
const show = document.querySelector(".show")
const restart = document.querySelector(".playagain")

let audio = document.querySelector('#sound')
let player_points = document.querySelector(".player-points");
let computer_points = document.querySelector(".robot-points");
let playerPoints = 0;
let computerPoints = 0;
let result = ""
let f = document.querySelector("header")

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
    end_message.innerText = ("YOU WIN " + playerPoints + " - " + computerPoints)
   }
   else{
    end_message.innerText = ("YOU LOSE " + playerPoints + " - " + computerPoints)
   }
   playAgain()
}

function game() {
    f.style.background = 'green';
    audio.play();
    let input= this.value;
    let computer = computerChoice();
    

    if (input =="ROCK"){
        
        if (computer == "PAPER") {
        computerPoints +=1;
        computer_points.innerText = ("Computer: " + computerPoints);
        }
        else if (computer == "ROCK"){
        }
        else{
            player_points.innerText = ("Player: " + playerPoints);
       
        }
     }
     if (input =="PAPER"){
        if (computer == "SCISSORS") {
        computerPoints +=1;
        computer_points.innerText = ("Computer: " + computerPoints);
        }
        else if (computer == "PAPER"){ 
        }
        else{
            playerPoints +=1;
            player_points.innerText = ("Player: " + playerPoints) ;        
        }
     }
     if (input =="SCISSORS"){
        if (computer == "ROCK") {
        computerPoints +=1;
        computer_points.innerText = ("Computer: " + computerPoints);
        }
        else if (computer == "SCISSORS"){
          
        }
        else{
            playerPoints +=1;
            player_points.innerText = ("Player: " + playerPoints);
          
        }
     }
     if (playerPoints == amount || computerPoints == amount) {
        end();
    }
     output.innerText= ("Computer Choice: " + computer);
     
 }
 


select.forEach((selection) => {
    selection.addEventListener('click', game)
})

restart.addEventListener('click', function(){

    window.location.reload();
})


