const CoincidenceService = require('../../src/utils/CoincidenceService');
const Employee = require('../../src/models/Employee');
const Schedule = require('../../src/models/schedule');

describe('CoincidenceService', () => {
  let service;

  beforeAll(() => {
    service = new CoincidenceService();
  });

  describe('hasCoincidence', () => {
    it('should return true if schedules have a coincidence', () => {
      const schedule1 = new Schedule('MO', '10:00', '12:00');
      const schedule2 = new Schedule('MO', '11:00', '13:00');

      const result = service.hasCoincidence(schedule1, schedule2);
      expect(result).toBe(true);
    });

    it('should return false if schedules do not have a coincidence', () => {
      const schedule1 = new Schedule('MO', '10:00', '12:00');
      const schedule2 = new Schedule('TU', '13:00', '15:00');
      const result = service.hasCoincidence(schedule1, schedule2);
      expect(result).toBe(false);
    });
  });

  describe('countCoincidences', () => {
    it('should return the correct number of coincidences', () => {
      const employee1 = new Employee('RENE', [
        new Schedule('MO', '10:00', '12:00'),
        new Schedule('TU', '11:00', '13:00'),
        new Schedule('TH', '09:00', '11:00')
      ]);
      const employee2 = new Employee('ASTRID', [
        new Schedule('MO', '10:00', '12:00'),
        new Schedule('TH', '11:00', '13:00'),
        new Schedule('SU', '19:00', '21:00')
      ]);
      const result = service.countCoincidences(employee1, employee2);
      expect(result).toBe(2);
    });
  });

  describe('getCoincidencesMap', () => {
    it('should return the correct coincidences map', () => {
      const employees = [
        new Employee('RENE', [
          new Schedule('MO', '10:00', '12:00'),
          new Schedule('TU', '11:00', '13:00'),
          new Schedule('TH', '09:00', '11:00')
        ]),
        new Employee('ASTRID', [
          new Schedule('MO', '10:00', '12:00'),
          new Schedule('TH', '11:00', '13:00'),
          new Schedule('SU', '19:00', '21:00')
        ]),
        new Employee('ANDRES', [
          new Schedule('MO', '10:00', '12:00'),
          new Schedule('TH', '11:00', '13:00'),
          new Schedule('SU', '19:00', '21:00')
        ])
      ];
      const result = service.getCoincidencesMap(employees);
      expect(result).toEqual({
        'RENE-ASTRID': 2,
        'RENE-ANDRES': 2,
        'ASTRID-ANDRES': 3
      });
    });
  });
});
