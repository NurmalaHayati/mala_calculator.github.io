const numbers = document.querySelector(".calculator-screen")

const updateScreen = (number)=>{
    calculatorScreen.value = number
}
numbers.forEach((number) => {
    number.addEventListener("click",(event) =>{
      console.log("event.target.value")
    })
})
