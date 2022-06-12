
const numbers = document.querySelectorAll(".number")
numbers.forEach((number)=> {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = 'calculate'
let currentNumber ='0'

const inputNumber = (number) => {
    if(currentNumber==='0'){
        currentNumber = number
    }else {
    currentNumber += number
    }
}

// number.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         inputNumber(event.target.value)
//         updateScreen(currentNumber)
//     })
// })

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator =(operator) => {
    prevNumber = currentNumber
    calculationOperator = operator
    currentNumber =''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate =()=>{
    let result = ''
    switch(calculationOperator){
        case "+":
            result = prevNumber + prevNumber
            break
        case "-":
            result = prevNumber - prevNumber
            break
        case '*':
            result = prevNumber * prevNumber
            break
        case '/':
            result = prevNumber / prevNumber
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator =''
}



















