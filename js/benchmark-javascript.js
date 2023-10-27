
let startTime = process.hrtime();

let numbers = Array.from({ length:10000 }, (x, i) => i);

let sum = 0;

numbers.forEach(number => {
 sum += number;
});

let endTime = process.hrtime();

let executionTime = ((endTime[0] + endTime[1]) - (startTime[0] + startTime[1])) / 1000000;

console.log('Duration: ' + executionTime);

console.log('Soma: ' + sum);