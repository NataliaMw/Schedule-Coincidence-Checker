const Schedule = require('../../src/models/schedule');
const assert = require('assert');
describe('Schedule', function() {
    describe('#constructor()', function() {
        it('should create a schedule with day, startHour and endHour', function() {
            const schedule = new Schedule('MO', new Date().setHours(9, 0,0,0), new Date().setHours(12, 0,0,0));
            assert.equal(schedule.day, 'MO');
            assert.equal(schedule.startHour, new Date().setHours(9, 0,0,0));
            assert.equal(schedule.endHour, new Date().setHours(12, 0,0,0));
        });
    });
    describe('#coincidences()', function() {
        it('should return true if schedules coincidence', function() {
            const schedule1 = new Schedule('MO', new Date().setHours(9, 0,0,0), new Date().setHours(12, 0,0,0));
            const schedule2 = new Schedule('MO', new Date().setHours(10, 0,0,0), new Date().setHours(11, 0,0,0));
            assert.equal(schedule1.coincidences(schedule2), true);
        });
    });
});
