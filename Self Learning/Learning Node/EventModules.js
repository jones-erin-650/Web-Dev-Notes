// event emitter is a class, so it's capitalized
const EventEmitter = require('events');
const emitter = new EventEmitter();

// register a listener
// one for the name of the event, the other for a callback function that's the listenerm, called when the event is raised
emitter.on('messageLogged', (arg) => { //event argument
    console.log('Listener called', arg); //this way you can pass data to the event that's called
})

// raised an event
emitter.emit('messageLogged', {id: 1, url: 'http://'}); // arguments for when an event is raised?
//raises an event, produces something, signalling that an event happened

// raise event called logging, and send data that contains the message

emitter.on('Logging', (arg) => {
    console.log('Logging listened to', arg);
})

emitter.emit('Logging', {message: 'hi'});