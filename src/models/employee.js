/**
 * Represents an Employee with a name and a list of schedules.
 * @class
 */
class Employee {
    /**
     * Creates an instance of Employee.
     * @constructor
     * @param {string} name - The name of the employee.
     * @param {Array} schedules - The schedules of the employee.
     */
    constructor(name, schedules) {
      this.name = name;
      this.schedules = schedules;
    }
  }
  
  module.exports = Employee;  