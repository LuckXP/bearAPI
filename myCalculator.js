var Calculator = require('./calculator');

var myCalculator = new Calculator();
console.log(myCalculator.sum(4,5));
console.log(myCalculator['sum'](6,7));
