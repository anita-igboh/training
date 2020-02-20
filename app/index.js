//Perform addition
const calculator  = require('./utils/operations');

const additionResult = calculator.addition(5, 9);
const subtractionResult = calculator.subtraction(10, 4);
const multiplicationResult = calculator.multiplication(2, 5);
const divisionResult = calculator.division(2, 5);
console.log('Multiplication result', multiplicationResult)
console.log('SUBTRACTION RESULT: ', subtractionResult);
console.log('ADDITION RESULT: ', additionResult);
console.log('division RESULT: ', divisionResult);