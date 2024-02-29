// imagine this is an application that logs messages

var url = 'http://mylogger.io/log';

function log(message) {
    //send an http request
    console.log(message);
}

// export this function to be used by other files in the package
module.exports.log = log;

// you can also just do module.exports = log;
// so you don't have to use x.log when you import it and can just use loger() directly

// can export variables too
// name it's exported as = name in this file
// module.exports.endPoint = url;

