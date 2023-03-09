const fs = require('fs');

const parseSchedule = (schedule) => {
  const [day, start, end] = schedule.split(/(?<=^\w{2})|(?<=\d{2}:\d{2})|(?<=\d{2}:\d{2})-/);
  const startHour = parseInt(start.split(':')[0]);
  const endHour = parseInt(end.split(':')[0]);
  const timestamps = [];
  for (let hour = startHour; hour <= endHour; hour++) {
    timestamps.push(`${day}${hour.toString().padStart(2, '0')}`);
  }
  return timestamps;
};

const parseEmployee = (line) => {
  const [name, schedule] = line.split('=');
  return [name, schedule.split(',')];
};

const parseInput = (input) => {
  return input.trim().split('\n').map(parseEmployee);
};

const getEmployeePairs = (employees) => {
  const pairs = [];
  for (let i = 0; i < employees.length - 1; i++) {
    for (let j = i + 1; j < employees.length; j++) {
      pairs.push([employees[i], employees[j]]);
    }
  }
  return pairs;
};

const countCoincidences = (timestamps1, timestamps2) => {
  return timestamps1.filter((t) => timestamps2.includes(t)).length;
};

const getCoincidencesTable = (employees) => {
  const pairs = getEmployeePairs(employees);
  const table = {};
  for (const [name1, schedule1] of employees) {
    table[name1] = {};
    for (const [name2, schedule2] of employees) {
      table[name1][name2] = countCoincidences(schedule1, schedule2);
    }
  }
  return table;
};

const formatCoincidencesTable = (table) => {
  const names = Object.keys(table);
  const header = ['', ...names];
  const rows = names.map((name1) => {
    const row = [name1];
    for (const name2 of names) {
      row.push(table[name1][name2]);
    }
    return row;
  });
  return [header, ...rows];
};

const main = () => {

  const input = fs.readFileSync('input/employee_data.txt', 'utf8');
  const employees = parseInput(input);
  const table = getCoincidencesTable(employees);
  const formattedTable = formatCoincidencesTable(table);
  console.log(formattedTable);
};

main();