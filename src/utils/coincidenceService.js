class CoincidenceService {
    hasCoincidence(schedule1, schedule2) {
    return schedule1.coincidences(schedule2);
  }

  countCoincidences(employee1, employee2) {
    const employee1Schedules = employee1.schedules;
    const employee2Schedules = employee2.schedules;

    let coincidences = 0;

    for (const schedule1 of employee1Schedules) {
      for (const schedule2 of employee2Schedules) {
        if (this.hasCoincidence(schedule1, schedule2)) {
          coincidences++;
          break;
        }
      }
    }

    return coincidences;
  }
  
  getCoincidencesMap(employees) {
    const coincidencesMap = {};

    for (let i = 0; i < employees.length; i++) {
      for (let j = i + 1; j < employees.length; j++) {
        const employee1 = employees[i];
        const employee2 = employees[j];

        const coincidences = this.countCoincidences(employee1, employee2);

        if (coincidences > 0) {
          const key = `${employee1.name}-${employee2.name}`;
          coincidencesMap[key] = coincidences;
        }
      }
    }

    return coincidencesMap;
  }
}

module.exports = CoincidenceService;
