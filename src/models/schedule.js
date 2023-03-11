//create model for schedule
class Schedule {
    constructor(day, startHour, endHour) {
        this.day = day;
        this.startHour = startHour;
        this.endHour = endHour;
    }
    coincidence(schedule) {
        if(this.day !== schedule.day) return false;        
        return this.startHour <= schedule.endHour && this.endHour >= schedule.startHour;
    }
    toString() {
        return `${this.day} ${this.startHour} ${this.endHour}`;
    }

  }
module.exports = Schedule;