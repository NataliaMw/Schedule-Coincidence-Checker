class View {
    /**
   * Render a table of coincidence counts for employee schedules
   * @param {Map<string, number>} coincidenceMap - A map of employee pairs and their coincidence count
   */
    renderCoincidenceTable(coincidenceMap) {
      console.log('Employee 1'.padEnd(13), 'Employee 2'.padEnd(13), 'Coincidence Count');
      Object.entries(coincidenceMap).forEach(([employeePair, coincidenceCount]) => {
        const [employee1, employee2] = employeePair.split('-');
        console.log(`${employee1.padEnd(15)}${employee2.padEnd(15)}${coincidenceCount}`);
      });
    }
  }
  
  module.exports = View;
  