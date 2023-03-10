const Employee = require('../../src/models/employee');
const Schedule = require('../../src/models/schedule');
const assert = require('assert');
describe('Employee', function() {
    describe('#constructor()', function() {
        it('should create an employee with name and schedules', function() {

            const schedules = [
                new Schedule('MO', new Date().setHours(9, 0), new Date().setHours(12, 0)),
                new Schedule('TU', new Date().setHours(9, 0), new Date().setHours(12, 0)),
                new Schedule('WE', new Date().setHours(9, 0), new Date().setHours(12, 0)),
                new Schedule('TH', new Date().setHours(9, 0), new Date().setHours(12, 0)),
                new Schedule('FR', new Date().setHours(9, 0), new Date().setHours(12, 0))
            ];
            const employee = new Employee('A', schedules);
            assert.equal(employee.name, 'A');
            assert.equal(employee.schedules.length, 5);
        });
    });

    describe('#overlaps()', function() {
        it('should return true if schedules overlap', function() {
            const schedules = [
                new Schedule('MO', new Date().setHours(9, 0), new Date().setHours(12, 0)),

                new Schedule('MO', new Date().setHours(10, 0), new Date().setHours(11, 0))
            ];
            const employee = new Employee('A', schedules);
            assert.equal(employee.schedules[0].overlaps(employee.schedules[1]), true);
        });
    });
});

