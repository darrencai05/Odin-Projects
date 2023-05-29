const output = document.querySelector('.output')
const inputs = document.querySelectorAll('.inputs')
const symbols = document.querySelectorAll('.symbol')
const equalsign = document.querySelector('.equal')
const previousDisplay = document.querySelector('.previous')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
let previousNumber =''
let symbol = ''
let counter = 0;
let newEquation = 0
let counter2 = 0;

symbols.forEach((i) => {
    i.addEventListener('click', symbolz)
})

inputs.forEach((x) => {
    x.addEventListener('click', function(){
        if (output.textContent == "0" || newEquation == 1){
            output.textContent = ('')
            newEquation = 0
        } 
        if (counter >= 1){
            output.textContent= ''
            counter = 0
        }
        if (counter2 == true){
            counter2 = false
        }
        output.textContent += (`${this.value}`)

        
    })
})
function symbolz(){
    if (counter2 == false){
        equal();
    }


    previousNumber = output.textContent;
    if (this.value == '/'){
        symbol = '/'
        previousDisplay.textContent = (`${previousNumber} ÷ `)
    }
    if (this.value == 'x'){
        symbol = 'x'
        previousDisplay.textContent = (`${previousNumber} x `)
    }
    if (this.value == '-'){
        symbol = '-'
        previousDisplay.textContent = (`${previousNumber} - `)
    }
    if (this.value == '+'){
        symbol = '+'
        previousDisplay.textContent = (`${previousNumber} + `)
    }

    counter +=1
    counter2 = true
}

function equal() {
    counter2 = true;
    newEquation +=1
    let prev = previousDisplay.textContent
    if (symbol == '/'){
        previousDisplay.textContent = (`${prev + output.textContent} =`)
        output.textContent = (`${previousNumber/output.textContent}`)
    }
    if (symbol == 'x'){
        previousDisplay.textContent = (`${prev + output.textContent} =`)
        output.textContent = (`${previousNumber*output.textContent}`)
    }
    if (symbol == '+'){
        previousDisplay.textContent = (`${prev + output.textContent} =`)
        output.textContent = (`${+previousNumber+ +output.textContent}`)
    }
    if (symbol == '-'){
        previousDisplay.textContent = (`${prev + output.textContent} =`)
        output.textContent = (`${previousNumber-output.textContent}`)
    }
    prev = output.textContent;
    symbol = ''
}
equalsign.addEventListener('click', equal)
    


clearButton.addEventListener('click', function(){
    previousDisplay.textContent = ''
    output.textContent = '0'
    symbol = ''
})

deleteButton.addEventListener('click', function(){
    output.textContent = output.textContent.slice(0, -1)
    if (output.textContent == ""){
        output.textContent = '0'
        previousDisplay.textContent = ''
    }
})