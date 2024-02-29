// built in module that gives information about the operating system and device

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory)

// template strings can be used without concatination

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);