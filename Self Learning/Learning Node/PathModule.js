// built in modules

const path = require('path') //since there's no file path node assumes it's just a built in module

// object with a lot of useful functions

var pathObject = path.parse(__filename);

console.log(pathObject);
// gives the name of the file, the extension, name without extension, etc, so you don't have to use strings

