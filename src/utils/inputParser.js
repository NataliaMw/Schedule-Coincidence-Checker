const fs = require('fs');
const Employee = require('../models/employee');
const Schedule = require('../models/schedule');
class InputParser {
    constructor() { }

    parseInputFile(inputFilePath) {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
        const employeeDataArray = this.extractEmployeeData(fileContent);
    
        const employees = employeeDataArray.map((employeeData) => {
          employeeData = employeeData.replace('\r', '');
    
          const [name, scheduleData] = this.extractNameAndScheduleData(employeeData);
          const schedules = this.extractSchedules(scheduleData);
    
          return new Employee(name, schedules);
        });
    
        return employees;
      }

    extractEmployeeData(employeeData) {
        return employeeData.replace('\r', '').split('\n');
    }
    extractNameAndScheduleData(employeeData) {
        return employeeData.split('=');
    }

    extractSchedules(scheduleData) {
        const scheduleArray = scheduleData.split(',');
        return scheduleArray.map(scheduleData => {
            const day = scheduleData.substring(0, 2);
            const timeRange = scheduleData.substring(2);
            const [startHour, endHour] = timeRange.split('-').map(time => {
                const [hours, minutes] = time.split(':');
                return new Date().setHours(hours, minutes,0,0);
            });
            return new Schedule(day, startHour, endHour);
        });
    }
    extractTimeRange(timeRange) {
        return timeRange.split('-').map(time => {
            const [hours, minutes] = time.split(':');
            return new Date().setHours(hours, minutes,0,0);
        });
    }
}

module.exports = InputParser;