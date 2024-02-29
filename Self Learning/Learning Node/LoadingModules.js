// require function, name of the target function; ./ signifies it's in the same folder
const logger = require('./logger');
// good to use const for this so you don't overwrite the function

// when you write it to the console it shows the functions and variables that have been exported
console.log(logger);

// now we can call this function in this file
logger.log('message');