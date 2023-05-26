const inputvalue = document.querySelector("#slider")
const grid= document.querySelector('.grid')
const texts = document.querySelector('.texts')
const color_mode = document.querySelector('#color-mode')
const color_wheel= document.querySelector('#color-wheel')
const allButtons = document.querySelectorAll("button")
const rainbow = document.querySelector("#rainbow")
const eraser = document.querySelector('#eraser')
const clearButton = document.querySelector('#clear')
let userChoice = ''

function clearGrid(){
    grid.innerHTML='';
}




function createGrid(){
    texts.innerHTML = (`${inputvalue.value} x ${inputvalue.value}`)
    clearGrid();
    for (let i=0; i<inputvalue.value; i++){
        let row = document.createElement('div');
        row.setAttribute('id','row')
        grid.appendChild(row)
        for(let i=0; i<inputvalue.value; i++){
            let box = document.createElement('div');
            box.classList.add('box')
            row.append(box);
            box.addEventListener('click', draw)
            grid.addEventListener("mousedown", () => {
                box.addEventListener('mouseover', draw)
                grid.addEventListener("mouseup", () => {
                    box.removeEventListener("mouseover", draw);
                  });
              });
            
            
            
            
            
    }
}
}

function draw(){
    
    if (userChoice == 'colormode'){
        this.style.background = chosenColor;
        
    }
    if (userChoice == 'rainbow'){
        const colors = ['red', 'orange', 'blue', 'yellow', 'green', 'violet', 'indigo']
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        this.style.background = randomColor
    }
    if (userChoice=='eraser') {
        this.style.background = "white";
    }
}


function Start() {
    createGrid()
}

function buttonColors(){
    color_mode.style.background = "gray";
    rainbow.style.background = "gray";
    eraser.style.background = "gray";

}

inputvalue.addEventListener('change', createGrid)
color_wheel.addEventListener('input',function(){
    chosenColor = this.value;
color_mode.addEventListener('click', function(){
    userChoice = 'colormode'
    buttonColors();
    color_mode.style.background = "#303030"
})
} )

rainbow.addEventListener('click', function(){
    userChoice = 'rainbow'
    buttonColors();
    rainbow.style.background = "#303030"
})
eraser.addEventListener('click', function(){
    userChoice= 'eraser'
    buttonColors();
    eraser.style.background = "#303030";
})
clearButton.addEventListener('click', function(){
    Start()
})


Start();

