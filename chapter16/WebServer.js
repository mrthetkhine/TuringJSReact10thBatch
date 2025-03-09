const http = require('node:http');
const url = require("url");
const path = require("path");
let port = 9000;
let server = new http.Server();

server.listen(port);
console.log("Listening on port", port);

server.on('request', (req, res) => {
    let endpoint = url.parse(req.url).pathname;
    console.log('Client connected to server endpoint ',endpoint);
    
    res.writeHead(200);
    res.end('<h1>Hello World</h1>');
})