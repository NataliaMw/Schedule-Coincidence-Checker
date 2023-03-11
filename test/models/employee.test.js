const Employee = require('../../src/models/employee');
const Schedule = require('../../src/models/schedule');
const assert = require('assert');

describe('Employee', function() {
  describe('#constructor()', function() {
    it('should create an employee with name and schedules', function() {
      // Arrange
      const schedules = [
        new Schedule('MO', new Date().setHours(9, 0), new Date().setHours(12, 0)),
        new Schedule('TU', new Date().setHours(9, 0), new Date().setHours(12, 0)),
        new Schedule('WE', new Date().setHours(9, 0), new Date().setHours(12, 0)),
        new Schedule('TH', new Date().setHours(9, 0), new Date().setHours(12, 0)),
        new Schedule('FR', new Date().setHours(9, 0), new Date().setHours(12, 0))
      ];

      // Act
      const employee = new Employee('A', schedules);

      // Assert
      assert.strictEqual(employee.name, 'A');
      assert.strictEqual(employee.schedules.length, 5);
    });
  });

  describe('#coincidence()', function() {
    it('should return true if schedules coincide', function() {
      // Arrange
      const schedules = [
        new Schedule('MO', new Date().setHours(9, 0), new Date().setHours(12, 0)),
        new Schedule('MO', new Date().setHours(10, 0), new Date().setHours(11, 0))
      ];
      const employee = new Employee('A', schedules);

      // Act
      const coincident = employee.schedules[0].coincidence(employee.schedules[1]);

      // Assert
      assert.strictEqual(coincident, true);
    });
  });
});