const calculatorScreen = document.querySelector(".calculator-screen")

const updateScreen = (number)=>{
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
      updateScreen("event.target.value")
    })
})

let prevNumber=''
let calculatorOperator=''
let currentNumber='0'

const inputNumber = (number) => {
    currentNumber += number
}
numbers.forEach((number) => {
    number.addEventListener("click", (event)=>{
        inputNumber = (event.target.value)
        updateScreen(currentNumber)
    })
})

