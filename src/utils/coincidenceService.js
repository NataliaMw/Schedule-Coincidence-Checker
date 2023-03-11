// This class is responsible for counting schedule coincidences between employees
class CoincidenceService {
  /**
   * Checks if two schedules have a coincidence
   * @param {Schedule} schedule1 - The first schedule
   * @param {Schedule} schedule2 - The second schedule
   * @returns {boolean} - True if there is a coincidence, false otherwise
   */
  hasCoincidence(schedule1, schedule2) {
    return schedule1.coincidence(schedule2);
  }

  /**
   * Counts the number of coincidences between two employees' schedules
   * @param {Employee} employee1 - The first employee
   * @param {Employee} employee2 - The second employee
   * @returns {number} - The number of coincidences between the employees' schedules
   */
  countCoincidences(employee1, employee2) {
    const employee1Schedules = employee1.schedules;
    const employee2Schedules = employee2.schedules;

    let coincidences = 0;

    for (const schedule1 of employee1Schedules) {
      for (const schedule2 of employee2Schedules) {
        if (this.hasCoincidence(schedule1, schedule2)) {
          coincidences++;
        }
      }
    }

    return coincidences;
  }

  /**
   * Returns a map with the coincidences between employees' schedules
   * @param {Array<Employee>} employees - The array of employees
   * @returns {Object} - An object containing the coincidences between the employees' schedules
   */
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