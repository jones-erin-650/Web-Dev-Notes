const fs = require('fs');

const files = fs.readdirSync('./');
// returns a string array of the files in this folder
console.log(files);

// check if we have an error and the result which is a string array
fs.readdir('/', function(err, files){
    // only one of these will have a value, the other will be null
    if (err) console.log('Error', err);
    else console.log('Result', files);
}) // asynch version