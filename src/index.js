const InputParser = require('./utils/InputParser');
const CoincidenceService = require('./utils/CoincidenceService');
const View = require('./views/View');

const inputFilePath = 'input/employee_data.txt';
try {
  const employees = new InputParser().parseInputFile(inputFilePath);
  const coincidenceMap = new CoincidenceService().getCoincidencesMap(employees);
  const view = new View();
  view.renderCoincidenceTable(coincidenceMap);
} catch (error) {
  console.error('An error occurred:', error);
}