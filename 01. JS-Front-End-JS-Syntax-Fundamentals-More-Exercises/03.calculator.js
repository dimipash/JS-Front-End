function calculator(firstNumber, operator, secondNumber) {
    console.log(eval(`${firstNumber}${operator}${secondNumber}`).toFixed(2));
  }


  function calculator(num1, operator, num2) {
    result = eval(num1 + operator + num2)
    console.log(result.toFixed(2));
}

function solve(number1, operator, number2) {
  let result = 0;
  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "/") {
    result = number1 / number2;
  } else {
    result = number1 * number2;
  }
  console.log(result.toFixed(2));
}
solve(5, "+", 10);