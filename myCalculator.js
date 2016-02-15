var Calculator = require('./calculator');

var myCalculator = new Calculator();
console.log(myCalculator.sum(4,5));
console.log(myCalculator['sum'](6,7));
console.log(myCalculator.subtract(4,5));
console.log(myCalculator['subtract'](6,7));