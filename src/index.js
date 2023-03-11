const InputParser = require('./utils/InputParser');
const CoincidenceService = require('./utils/CoincidenceService');
const View = require('./views/View');
const inputFilePath = 'input/employee_data.txt';
const employees = new InputParser().parseInputFile(inputFilePath);
const coincidenceMap = new CoincidenceService().getCoincidencesMap(employees);
new View().renderCoincidenceTable(coincidenceMap);