//This module would define a function that takes two schedules as input and returns the number of overlaps between them.
//
//The function should be exported as a module.
//
//The function should be named getOverlapCount.
function getOverlapCount(schedule1, schedule2) {
    //your code here
    if (schedule1.day === schedule2.day && schedule1.startHour <= schedule2.endHour && schedule1.endHour >= schedule2.startHour) {
        return 1;
    }
    return 0;
}
//
//This module would define a function that takes two employees as input and returns the number of overlaps between their schedules.

//
//The function should be exported as a module.

export function getOverlapCount(employee1, employee2) { 
    //your code here
    let count = 0;
    for (let i = 0; i < employee1.schedules.length; i++) {
        for (let j = 0; j < employee2.schedules.length; j++) {
            if (employee1.schedules[i].overlaps(employee2.schedules[j])) {
                count++;
            }
        }
    }
    return count;
}