const fs = require('fs');
const Employee = require('../models/employee');
const Schedule = require('../models/schedule');

class InputParser {
  constructor() {}

  /**
   * Parses the contents of a file into an array of Employee objects.
   *
   * @param {string} inputFilePath - The path to the input file.
   * @returns {Array<Employee>} An array of Employee objects.
   */
  parseInputFile(inputFilePath) {
    let employees = [];

    try {
      const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
      const employeeDataArray = this.extractEmployeeData(fileContent);

      employees = employeeDataArray.map((employeeData) => {
        const [name, scheduleData] = this.extractNameAndScheduleData(employeeData);
        const schedules = this.extractSchedules(scheduleData);

        return new Employee(name, schedules);
      });
    } catch (err) {
      console.error(`Error parsing input file: ${err}`);
      employees = [];
    }
    
    return employees;
  }

  /**
   * Extracts an array of employee data from a string.
   *
   * @param {string} employeeData - A string containing employee data.
   * @returns {Array<string>} An array of strings representing employee data.
   */
  extractEmployeeData(employeeData) {
    return employeeData.trim().replace('\r', '').split('\n');
  }

  /**
   * Extracts an employee's name and schedule data from a string.
   *
   * @param {string} employeeData - A string containing an employee's data.
   * @returns {Array<string>} An array containing the employee's name and schedule data.
   */
  extractNameAndScheduleData(employeeData) {
    return employeeData.split('=');
  }

  /**
   * Extracts an array of Schedule objects from a string.
   *
   * @param {string} scheduleData - A string containing schedule data.
   * @returns {Array<Schedule>} An array of Schedule objects.
   */
  extractSchedules(scheduleData) {
    const scheduleArray = scheduleData.split(',');
    return scheduleArray.map((scheduleData) => {
      const day = scheduleData.substring(0, 2);
      const timeRange = scheduleData.substring(2);
      const [startHour, endHour] = timeRange.split('-').map((time) => {
        const [hours, minutes] = time.split(':');
        return new Date().setHours(hours, minutes, 0, 0);
      });
      return new Schedule(day, startHour, endHour);
    });
  }
}

module.exports = InputParser;