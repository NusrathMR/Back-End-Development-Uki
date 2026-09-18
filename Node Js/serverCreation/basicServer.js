const http = require('http');

const server = http.createServer((req, res) => {
    console.log (`Incoming request: ${req.method} ${req.url}`);

    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end("Hello from my nodeJs server");
});

server.listen(3000, () => {
    console.log('serever running at http://localhost:3000/');
});