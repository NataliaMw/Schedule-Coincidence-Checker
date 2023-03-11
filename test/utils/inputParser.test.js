const InputParser = require('../../src/utils/InputParser');
const testInputPath = 'input/test_data.txt';
describe('InputParser', () => {
  describe('parseInputFile', () => {
    it('should parse input file and return an array of employees', () => {
      const parser = new InputParser();
      const employees = parser.parseInputFile(testInputPath);
      expect(employees).toHaveLength(2);
      expect(employees[0].name).toEqual('ALLISON');
      expect(employees[0].schedules).toHaveLength(4);
      expect(employees[1].name).toEqual('JOHN');
      expect(employees[1].schedules).toHaveLength(3);
    });
  });

  describe('extractEmployeeData', () => {
    it('should extract employee data from a string', () => {
      const parser = new InputParser();
      const employeeData = 'ALLISON=TH08:00-12:00,TH13:00-17:00,FR08:00-12:00,FR13:00-17:00';
      const extractedEmployeeData = parser.extractEmployeeData(employeeData);
      expect(extractedEmployeeData).toEqual([
        'ALLISON=TH08:00-12:00,TH13:00-17:00,FR08:00-12:00,FR13:00-17:00'
      ]);
    });
  });

  describe('extractNameAndScheduleData', () => {
    it('should extract name and schedule data from an employee string', () => {
      const parser = new InputParser();
      const employeeData = 'ALLISON=TH08:00-12:00,TH13:00-17:00,FR08:00-12:00,FR13:00-17:00';
      const [name, scheduleData] = parser.extractNameAndScheduleData(employeeData);
      expect(name).toEqual('ALLISON');
      expect(scheduleData).toEqual('TH08:00-12:00,TH13:00-17:00,FR08:00-12:00,FR13:00-17:00');
    });
  });

  describe('extractSchedules', () => {
    it('should extract schedules from a schedule data string', () => {
      const parser = new InputParser();
      const scheduleData = 'TH08:00-12:00,TH13:00-17:00,FR08:00-12:00,FR13:00-17:00';
      const schedules = parser.extractSchedules(scheduleData);
      expect(schedules).toHaveLength(4);
      expect(schedules[0].day).toEqual('TH');
      expect(schedules[0].startHour).toEqual(new Date().setHours(8, 0,0,0));
      expect(schedules[0].endHour).toEqual(new Date().setHours(12, 0,0,0));
      expect(schedules[3].day).toEqual('FR');
      expect(schedules[3].startHour).toEqual(new Date().setHours(13, 0,0,0));
      expect(schedules[3].endHour).toEqual(new Date().setHours(17, 0,0,0));
    });
  });
});