const EventEmitter = require('events');


var url = 'http://mylogger.io/log';

// working with event emitter directly is tricky
// it can make it hard to pass arguments to other files
// instead we make a class that has all of the capabilities of the event emitter and more

// now we have an eventemitter class with the log method
class Logger extends EventEmitter{
    log(message) {
        // after we log the message we raise an event
        console.log(message);
    
        // now when you import this in another file, the arguments will be passed as well as they're tied to the class and not a specific object instance
        this.emit('message logged', {id: 1, url: 'http://'});
    }
    
}


module.exports = Logger;