const boxes = document.querySelectorAll('.field')
const body = document.querySelector('body')
const statuses = document.querySelector('.turn')
const restartButton = document.querySelector('button')
const opponent = document.querySelector('select')
let AI = false

const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
let player1 = [];
let player2 = [];
let turn = 0;
let tieCounter = 0;
const icon = '<i class="fa-solid fa-user" alt="dashboard icon"></i>'


function checkWinner() {
    if (tieCounter >= 9 && statuses.innerText != ("Player X wins!") ){
        endGame();
        statuses.innerText = ("TIE!")

    }
    if (tieCounter >= 9 && statuses.innerText != ("Player O wins!") ){
        endGame();
        statuses.innerText = ("TIE!")

    }

        winningConditions.forEach((x) => {
            if(x.every(a => player1.includes(a))){
                statuses.innerText = ("Player X wins!")
                endGame();

            }
            if(x.every(a => player2.includes(a))){
                statuses.innerText = ("Player O wins!")
                endGame();
            }
           
        })
    
}

function endGame(){
    boxes.forEach(x => {
        x.removeEventListener('click', render)
        })
    
}
function render(){
    if (turn == 1){
        const oImage= document.createElement('img')
        oImage.src = 'oimage.png'
        oImage.classList.add('oimage')
        this.appendChild(oImage);
        statuses.innerText = ("Player X's turn")
        turn-=1;
        player2.push(parseInt(this.dataset.index));
        this.removeEventListener('click', render)
        
       

    }
    else{
        const xImage = document.createElement('img');
        xImage.src = 'ximage.png';
        xImage.classList.add('ximage')
        this.appendChild(xImage)
        statuses.innerText = ("Player O's turn")
        turn +=1;   
        player1.push(parseInt(this.dataset.index));
        this.removeEventListener('click', render)
        
        if (AI == true){
            
            tieCounter+=1;
            if (tieCounter < 8){
            let randomNumber = generateRandomBetween(1,9)
            while (player1.includes(randomNumber) || player2.includes(randomNumber)){
                randomNumber = generateRandomBetween(1,9)
            }
           
            const oImage= document.createElement('img')
            oImage.src = 'oimage.png'
            oImage.classList.add('oimage')
            boxes.forEach(x => {
                if (x.dataset.index == randomNumber){
                x.appendChild(oImage);
                statuses.innerText = ("Player X's turn")
                turn-=1;
                player2.push(parseInt(randomNumber));
                x.removeEventListener('click', render)
            }
            })
           
           } }
    }

    tieCounter +=1;
    checkWinner();

}

const generateRandomBetween = (min, max, exclude) => {
    let ranNum = Math.floor(Math.random() * (max - min)) + min;

    if (ranNum === exclude) {
        ranNum = generateRandomBetween(min, max, exclude);
    }

    return ranNum;  
}    
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  





function startGame(){
    boxes.forEach((x) => {
        x.addEventListener('click', render)
    })
    restartButton.addEventListener('click', function(){

    window.location.reload();
})
    opponent.addEventListener('input', function(){
        if(opponent.value == 'AI'){
            AI = true;
            
        }
    })
}

startGame();