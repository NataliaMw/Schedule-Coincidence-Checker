const fs = require('fs');
const Employee = require('../models/employee');
const Schedule = require('../models/schedule');
class InputParser {
    constructor() { }

    parseInputFile(inputFilePath) {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
        const employeeDataArray = fileContent.replace('\r','').split('\n');
        
        const employees = employeeDataArray.map(employeeData => {
            employeeData=employeeData.replace('\r','');
            const [name, scheduleData] = employeeData.split('=');
            
            const scheduleArray = scheduleData.split(',');
            
            const schedules = scheduleArray.map(scheduleData => {

                const day = scheduleData.substring(0, 2);
                const timeRange = scheduleData.substring(2);
                const [startTime, endTime] = timeRange.split('-').map(time => {
                    const [hours, minutes] = time.split(':');
                    return new Date().setHours(hours, minutes);
                });

                return new Schedule(day, startTime, endTime);
            });
            console.log(schedules);
            return new Employee(name, schedules);
        });

        return employees;
    }
}

module.exports = InputParser;