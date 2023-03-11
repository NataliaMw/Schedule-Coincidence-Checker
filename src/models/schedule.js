//create model for schedule
class Schedule {
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = startHour;
        this.endHour = endHour;
    }
    coincidences(schedule) {
        return this.day === schedule.day && this.startHour <= schedule.endHour && this.endHour >= schedule.startHour;
    }
    toString() {
        return `${this.day} ${this.startHour} ${this.endHour}`;
    }

  }
module.exports = Schedule;