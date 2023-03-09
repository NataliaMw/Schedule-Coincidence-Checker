//create model for schedule
class Schedule {
    constructor(scheduleData) {
      this.workingHours = {};
      this.parseSchedule(scheduleData);
    }

  }