let num1 = prompt(`give me a number`)
let num2 = prompt(`give me a second number`)
let value1 = +num1
let value2 = +num2
if (isNaN(num1) || isNaN(num2)){
  alert(`Invalid number`)
}
else{
  alert(`${value1} + ${value2} = ${value1 + value2}`)
}
