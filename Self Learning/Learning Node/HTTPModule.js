// used for creating network in applications

const http = require('http');

// createServer extends event emitter, so it has all of its functions

// we can assign a callback function to createServer
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // if someone joins the url it does this?
        res.write('Hello World')
        res.end();
    }
})

server.on('connection', (socket) =>
    console.log('new connection')
)

server.listen(3000);
console.log('Listening on port 3000...')