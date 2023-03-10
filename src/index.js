const InputParser = require('./utils/InputParser');
const inputFilePath = 'input/employee_data.txt';
const employees = new InputParser().parseInputFile(inputFilePath);
console.log(employees);
