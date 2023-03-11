/**
 * A class representing a schedule for an employee.
 */
class Schedule {
    /**
     * Constructs a new Schedule object with the given day, start hour, and end hour.
     * @param {string} day - The day of the week the schedule applies to.
     * @param {string} startHour - The start time of the schedule in 24-hour format (e.g. '09:00').
     * @param {string} endHour - The end time of the schedule in 24-hour format (e.g. '17:00').
     */
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = startHour;
        this.endHour = endHour;
    }

    /**
     * Checks if this schedule coincides with the given schedule.
     * @param {Schedule} schedule - The schedule to check for coincidence with.
     * @returns {boolean} true if the schedules coincide, false otherwise.
     */
    coincidence(schedule) {
        if (this.day !== schedule.day) {
            return false;
        }

        return this.startHour <= schedule.endHour && this.endHour >= schedule.startHour;
    }
}

module.exports = Schedule;